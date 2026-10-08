// Calculs de progression à partir des données enregistrées.
// Chaque question est rattachée à un sous-thème : c'est ce qui permettra
// l'entraînement ciblé sur les points faibles (V2) et l'IA (V4).
CAP.stats = {
  // Taux de réussite d'une liste de questions (null si jamais répondu).
  reussite(questions) {
    let vues = 0, ok = 0, uniques = 0;
    questions.forEach(q => {
      const s = CAP.stockage.question(q.id);
      if (s) { vues += s.vu; ok += s.ok; uniques++; }
    });
    return { total: questions.length, uniques, vues, pourcent: vues ? Math.round(ok * 100 / vues) : null };
  },

  chapitre(ch) {
    return CAP.stats.reussite(ch.questions);
  },

  sousThemes(ch) {
    return Object.entries(ch.sousThemes).map(([id, nom]) => {
      const r = CAP.stats.reussite(ch.questions.filter(q => q.sousTheme === id));
      return Object.assign({ id, nom, chapitre: ch }, r);
    });
  },

  cartesMaitrisees(ch) {
    return ch.cartes.filter(c => {
      const s = CAP.stockage.carte(c.id);
      return s && s.derniere;
    }).length;
  },

  global() {
    return CAP.stats.reussite(CAP.chapitres.flatMap(c => c.questions));
  },

  // Sous-thèmes déjà travaillés, du plus faible au plus fort.
  pointsFaibles(limite) {
    return CAP.chapitres
      .flatMap(ch => CAP.stats.sousThemes(ch))
      .filter(s => s.vues > 0 && s.pourcent < 80)
      .sort((a, b) => a.pourcent - b.pourcent)
      .slice(0, limite || 5);
  }
};
