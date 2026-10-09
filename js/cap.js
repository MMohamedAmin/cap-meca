// Espace de noms global du site. Chargé en premier.
// Les fichiers de data/chapitres/ appellent CAP.ajouterChapitre({...}).
window.CAP = window.CAP || { chapitres: [], images: {}, formulaire: [], lexique: [], schemas: {} };

CAP.ajouterChapitre = function (chapitre) {
  CAP.chapitres.push(chapitre);
};

// Photos et leurs crédits (data/images.js). Une question y renvoie par `image: 'cle'`.
CAP.ajouterImages = function (images) {
  Object.assign(CAP.images, images);
};

// Formulaire (data/formulaire.js) : [{ theme, formules: [{ nom, formule, unites?, exemple?, calcul? }] }].
CAP.ajouterFormulaire = function (themes) {
  CAP.formulaire.push(...themes);
};

// Lexique (data/lexique.js) : [{ mot, definition, chapitre?, image? }].
CAP.ajouterLexique = function (mots) {
  CAP.lexique.push(...mots);
};

// Schémas (data/schemas.js, chargé APRÈS les chapitres). Chaque repère numéroté devient
// une question du chapitre : « comment s'appelle l'élément n° X ? ». Les mauvaises réponses
// sont les noms des repères suivants du même schéma. L'id de la question (sch-schéma-repère)
// ne doit jamais changer : ne pas renommer les id des schémas ni des repères.
CAP.ajouterSchemas = function (schemas) {
  schemas.forEach(s => {
    CAP.schemas[s.id] = s;
    const ch = CAP.chapitres.find(c => c.id === s.chapitre);
    if (!ch) return; // signalé par le vérificateur
    s.reperes.forEach((r, k) => {
      const autres = [1, 2, 3].map(d => s.reperes[(k + d) % s.reperes.length].nom);
      ch.questions.push({
        id: 'sch-' + s.id + '-' + r.id, sousTheme: s.sousTheme, type: 'qcm', niveau: r.niveau || s.niveau || 1,
        schema: s.id, repere: r.id,
        enonce: 'Schéma « ' + s.titre + ' » : comment s\'appelle l\'élément n° ' + (k + 1) + ' ?',
        choix: [r.nom].concat(autres), bonne: 0,
        explication: '**' + r.nom + '** : ' + r.role
      });
    });
  });
};

// Mélange une copie de la liste (Fisher-Yates).
CAP.melanger = function (liste) {
  const a = liste.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
