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
        pool = pool.concat(st.chapitre.questions
          .filter(q => q.sousTheme === st.id)
          .map(q => ({ q, ch: st.chapitre })));
      }
      const choisies = prioriser(accessibles(pool, niveaux)).slice(0, nCible);
      const pris = new Set(choisies.map(x => x.q.id));
      const jamaisVue = x => (CAP.stockage.question(x.q.id) ? 1 : 0);
      const reste = melanger(toutes.filter(x => !pris.has(x.q.id)))
        .sort((a, b) => jamaisVue(a) - jamaisVue(b))
        .slice(0, n - choisies.length);
      return { items: melanger(choisies.concat(reste)), cibles };
    },

    // Questions illustrées par une photo (mode « Reconnaître les pièces »).
    pieces(n) {
      return melanger(prioriser(toutesQuestions().filter(x => x.q.image)).slice(0, n));
    },
    nbPieces() { return toutesQuestions().filter(x => x.q.image).length; },

    // Questions ratées à la dernière tentative.
    erreurs(limite) {
      return melanger(erreurs()).slice(0, limite || Infinity);
    },
    nbErreurs() { return erreurs().length; },

    // Examen blanc : le même nombre de questions dans chaque chapitre, complété au hasard.
    // Tous les niveaux sont mélangés, comme dans une vraie épreuve : dans chaque chapitre,
    // une question de niveau 1 et une question plus difficile (niveau 2 ou 3).
    examen(n) {
      const parChapitre = Math.floor(n / CAP.chapitres.length);
      let choisies = [];
      CAP.chapitres.forEach(ch => {
        const faciles = melanger(ch.questions.filter(q => CAP.stats.niveau(q) === 1));
        const difficiles = melanger(ch.questions.filter(q => CAP.stats.niveau(q) > 1));
        const ordre = [];
        for (let k = 0; ordre.length < ch.questions.length; k++) {
          if (k < faciles.length) ordre.push(faciles[k]);
          if (k < difficiles.length) ordre.push(difficiles[k]);
        }
        choisies = choisies.concat(ordre.slice(0, parChapitre).map(q => ({ q, ch })));
      });
      const pris = new Set(choisies.map(x => x.q.id));
      const reste = melanger(toutesQuestions().filter(x => !pris.has(x.q.id)));
      return melanger(choisies.concat(reste.slice(0, n - choisies.length)));
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
