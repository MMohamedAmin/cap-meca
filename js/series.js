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

  function erreurs() {
    return toutesQuestions().filter(x => {
      const s = CAP.stockage.question(x.q.id);
      return s && s.derniere === false;
    });
  }

  return {
    // Environ 70 % des questions sur les sous-thèmes les plus faibles, le reste en mélange.
    // Sans point faible repéré, on privilégie les questions jamais vues.
    ciblee(n) {
      const toutes = toutesQuestions();
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
      const choisies = prioriser(pool).slice(0, nCible);
      const pris = new Set(choisies.map(x => x.q.id));
      const jamaisVue = x => (CAP.stockage.question(x.q.id) ? 1 : 0);
      const reste = melanger(toutes.filter(x => !pris.has(x.q.id)))
        .sort((a, b) => jamaisVue(a) - jamaisVue(b))
        .slice(0, n - choisies.length);
      return { items: melanger(choisies.concat(reste)), cibles };
    },

    // Questions ratées à la dernière tentative.
    erreurs(limite) {
      return melanger(erreurs()).slice(0, limite || Infinity);
    },
    nbErreurs() { return erreurs().length; },

    // Examen blanc : le même nombre de questions dans chaque chapitre, complété au hasard.
    examen(n) {
      const parChapitre = Math.floor(n / CAP.chapitres.length);
      let choisies = [];
      CAP.chapitres.forEach(ch => {
        choisies = choisies.concat(melanger(ch.questions).slice(0, parChapitre).map(q => ({ q, ch })));
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
