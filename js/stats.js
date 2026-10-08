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
  },

  // Répartition des cartes : [nouvelles, boîte 1, …, boîte 5].
  boites() {
    const r = new Array(CAP.stockage.BOITE_MAX + 1).fill(0);
    CAP.chapitres.forEach(ch => ch.cartes.forEach(c => {
      const s = CAP.stockage.carte(c.id);
      r[s ? s.boite : 0]++;
    }));
    return r;
  },

  // Notes sur 20 des examens blancs, du plus ancien au plus récent.
  examens() {
    return CAP.stockage.seances()
      .filter(s => s.type === 'examen' && s.total)
      .map(s => ({ date: s.date, note: Math.round(s.score * 200 / s.total) / 10, duree: s.duree }));
  },

  // Activité des `nbSemaines` dernières semaines, du lundi au dimanche.
  // Pour chaque jour : { jour: 'AAAA-MM-JJ', seances, futur }.
  activite(nbSemaines) {
    const parJour = {};
    CAP.stockage.jours().forEach(j => { parJour[j] = 0; });
    CAP.stockage.seances().forEach(s => {
      const j = CAP.stockage.jourDe(s.date);
      parJour[j] = (parJour[j] || 0) + 1;
    });
    const decalageLundi = (new Date().getDay() + 6) % 7; // 0 = lundi
    const debut = -decalageLundi - 7 * (nbSemaines - 1);
    const jours = [];
    for (let n = debut; n < debut + 7 * nbSemaines; n++) {
      const j = CAP.stockage.jourDans(n);
      jours.push({ jour: j, seances: j in parJour ? Math.max(1, parJour[j]) : 0, futur: n > 0 });
    }
    return jours;
  }
};
