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

// Schémas à légender (data/schemas.js, chargé APRÈS les chapitres). Chaque schéma devient
// une question du chapitre, de type « etiquettes » : placer chaque nom à côté de sa pièce.
// L'id de la question (eti-schéma) ne doit jamais changer : ne pas renommer les id des schémas.
CAP.ajouterSchemas = function (schemas) {
  schemas.forEach(s => {
    CAP.schemas[s.id] = s;
    const ch = CAP.chapitres.find(c => c.id === s.chapitre);
    if (!ch) return; // signalé par le vérificateur
    ch.questions.push({
      id: 'eti-' + s.id, sousTheme: s.sousTheme, type: 'etiquettes', niveau: s.niveau || 1,
      schema: s.id,
      enonce: 'Place les noms sur le schéma « ' + s.titre + ' ».',
      explication: s.explication
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
