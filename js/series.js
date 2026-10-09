// Composition des séries d'entraînement (V2) à partir de la progression.
// Une question est renvoyée sous la forme { q, ch }, une carte sous la forme { c, ch }.
CAP.series = (function () {
  const melanger = CAP.melanger;

  function toutesQuestions() {
    return CAP.chapitres.flatMap(ch => ch.questions.map(q => ({ q, ch })));
  }
  function toutesCartes() {
    return CAP.chapitres.flatMap(ch => ch.cartes.map(c => ({ c, ch })));
  }

  // Ordre de priorité : ratées la dernière fois, puis jamais vues, puis les autres.
  // Mélange à l'intérieur de chaque groupe.
  function prioriser(items) {
    const rang = x => {
      const s = CAP.stockage.question(x.q.id);
      if (!s) return 1;
      return s.derniere ? 2 : 0;
    };
    return melanger(items).sort((a, b) => rang(a) - rang(b));
  }

  // Niveau atteint par sous-thème, calculé une fois par série.
  function carteNiveaux() {
    const m = new Map();
    CAP.stats.niveaux().forEach(n => m.set(n.ch.id + '/' + n.id, n.niveau));
    return m;
  }
  // Une question n'est proposée que si son niveau est débloqué dans son sous-thème.
  function accessibles(items, niveaux) {
    return items.filter(x => CAP.stats.niveau(x.q) <= niveaux.get(x.ch.id + '/' + x.q.sousTheme));
  }

  function erreurs() {
    return toutesQuestions().filter(x => {
      const s = CAP.stockage.question(x.q.id);
      return s && s.derniere === false;
    });
  }

  return {
    // Série de n questions adaptée au niveau atteint : environ 70 % au niveau en cours
    // de chaque sous-thème, le reste en révision des niveaux inférieurs.
    adaptee(items, n) {
      const niveaux = carteNiveaux();
      const ok = accessibles(items, niveaux);
      const auNiveau = x => CAP.stats.niveau(x.q) === niveaux.get(x.ch.id + '/' + x.q.sousTheme);
      const haut = melanger(ok.filter(auNiveau));
      const bas = melanger(ok.filter(x => !auNiveau(x)));
      const nHaut = Math.min(haut.length, Math.ceil(n * 0.7));
      return melanger(haut.slice(0, nHaut).concat(bas, haut.slice(nHaut)).slice(0, n));
    },

    // Environ 70 % des questions sur les sous-thèmes les plus faibles, le reste en mélange.
    // Sans point faible repéré, on privilégie les questions jamais vues.
    ciblee(n) {
      const niveaux = carteNiveaux();
      const toutes = accessibles(toutesQuestions(), niveaux);
      const nCible = Math.round(n * 0.7);
      const cibles = [];
      let pool = [];
      for (const st of CAP.stats.pointsFaibles(Infinity)) {
        if (pool.length >= nCible) break;
        cibles.push(st);
        // On ne compte que les questions proposables (niveau débloqué).
        pool = pool.concat(accessibles(st.chapitre.questions
          .filter(q => q.sousTheme === st.id)
          .map(q => ({ q, ch: st.chapitre })), niveaux));
      }
      const choisies = prioriser(pool).slice(0, nCible);
      const pris = new Set(choisies.map(x => x.q.id));
      const jamaisVue = x => (CAP.stockage.question(x.q.id) ? 1 : 0);
      const reste = melanger(toutes.filter(x => !pris.has(x.q.id)))
        .sort((a, b) => jamaisVue(a) - jamaisVue(b))
        .slice(0, n - choisies.length);
      return { items: melanger(choisies.concat(reste)), cibles };
    },

    // Questions illustrées par une photo (mode « Reconnaître les pièces »).
    // Photos et schémas.
    pieces(n) {
      return melanger(prioriser(toutesQuestions().filter(x => x.q.image || x.q.schema)).slice(0, n));
    },
    nbPieces() { return toutesQuestions().filter(x => x.q.image || x.q.schema).length; },

    // Questions ratées à la dernière tentative.
    erreurs(limite) {
      return melanger(erreurs()).slice(0, limite || Infinity);
    },
    nbErreurs() { return erreurs().length; },

    // Examen blanc : le même nombre de questions dans chaque chapitre (au moins une),
    // complété au hasard. Tous les niveaux sont mélangés, comme dans une vraie épreuve :
    // dans chaque chapitre, on alterne questions faciles (niveau 1) et difficiles (2 ou 3),
    // en commençant par une difficile un chapitre sur deux ; le complément est pour moitié difficile.
    // Les questions « remettre dans l'ordre » n'y figurent pas (réponse unique par question dans l'examen).
    examen(n) {
      const parChapitre = Math.max(1, Math.floor(n / CAP.chapitres.length));
      const difficile = x => CAP.stats.niveau(x.q) > 1;
      const aChoix = q => q.type !== 'ordre';
      let choisies = [];
      CAP.chapitres.forEach((ch, i) => {
        const faciles = melanger(ch.questions.filter(q => aChoix(q) && CAP.stats.niveau(q) === 1));
        const difficiles = melanger(ch.questions.filter(q => aChoix(q) && CAP.stats.niveau(q) > 1));
        const [a, b] = i % 2 ? [faciles, difficiles] : [difficiles, faciles];
        const ordre = [];
        for (let k = 0; k < Math.max(a.length, b.length); k++) {
          if (k < a.length) ordre.push(a[k]);
          if (k < b.length) ordre.push(b[k]);
        }
        choisies = choisies.concat(ordre.slice(0, parChapitre).map(q => ({ q, ch })));
      });
      choisies = choisies.slice(0, n);
      const pris = new Set(choisies.map(x => x.q.id));
      const reste = toutesQuestions().filter(x => aChoix(x.q) && !pris.has(x.q.id));
      const manque = n - choisies.length;
      const restesDifficiles = melanger(reste.filter(difficile));
      const restesFaciles = melanger(reste.filter(x => !difficile(x)));
      const nDifficiles = Math.min(restesDifficiles.length, Math.ceil(manque / 2));
      const complement = restesDifficiles.slice(0, nDifficiles).concat(restesFaciles).slice(0, manque);
      return melanger(choisies.concat(complement));
    },

    // Cartes du jour : d'abord celles à revoir (boîtes basses en premier),
    // puis des cartes nouvelles jusqu'à la limite.
    cartesDuJour(limite) {
      const aujourdhui = CAP.stockage.aujourdhui();
      const dues = [], nouvelles = [];
      toutesCartes().forEach(x => {
        const s = CAP.stockage.carte(x.c.id);
        if (!s) nouvelles.push(x);
        else if (s.prochaine <= aujourdhui) dues.push(x);
      });
      const boite = x => CAP.stockage.carte(x.c.id).boite;
      const triees = melanger(dues).sort((a, b) => boite(a) - boite(b));
      const paquet = triees.slice(0, limite).concat(melanger(nouvelles).slice(0, Math.max(0, limite - dues.length)));
      return { paquet, dues: dues.length, nouvelles: nouvelles.length };
    }
  };
})();
