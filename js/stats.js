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

  // ---------- Niveaux de difficulté ----------
  // 1 : connaître ; 2 : comprendre, calculer ; 3 : diagnostiquer.
  niveau(q) { return q.niveau || 1; },

  // Un groupe de questions est maîtrisé quand assez de questions ont été vues
  // (3, ou toutes s'il y en a moins) et qu'au moins 80 % ont été réussies la dernière fois.
  // On regarde la dernière réponse : une nouvelle erreur peut faire redescendre.
  maitrise(questions) {
    const vues = questions.map(q => CAP.stockage.question(q.id)).filter(Boolean);
    if (!vues.length || vues.length < Math.min(3, questions.length)) return false;
    return vues.filter(s => s.derniere).length / vues.length >= 0.8;
  },

  // Niveau atteint dans un sous-thème : le niveau 2 s'ouvre quand le niveau 1 est maîtrisé,
  // le niveau 3 quand le niveau 2 l'est. Jamais au-delà du plus haut niveau existant.
  niveauSousTheme(ch, st) {
    const qs = ch.questions.filter(q => q.sousTheme === st);
    const max = Math.max(1, ...qs.map(CAP.stats.niveau));
    let n = 1;
    for (let k = 1; k < 3; k++) {
      const duNiveau = qs.filter(q => CAP.stats.niveau(q) === k);
      if (duNiveau.length && !CAP.stats.maitrise(duNiveau)) break;
      n = k + 1;
    }
    return Math.min(n, max);
  },

  // Tous les sous-thèmes avec leur niveau : [{ ch, id, nom, niveau, max }].
  niveaux() {
    return CAP.chapitres.flatMap(ch => Object.entries(ch.sousThemes).map(([id, nom]) => ({
      ch, id, nom,
      niveau: CAP.stats.niveauSousTheme(ch, id),
      max: Math.max(1, ...ch.questions.filter(q => q.sousTheme === id).map(CAP.stats.niveau))
    })));
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
