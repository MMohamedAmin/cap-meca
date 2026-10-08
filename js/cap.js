// Espace de noms global du site. Chargé en premier.
// Les fichiers de data/chapitres/ appellent CAP.ajouterChapitre({...}).
window.CAP = window.CAP || { chapitres: [], images: {} };

CAP.ajouterChapitre = function (chapitre) {
  CAP.chapitres.push(chapitre);
};

// Photos et leurs crédits (data/images.js). Une question y renvoie par `image: 'cle'`.
CAP.ajouterImages = function (images) {
  Object.assign(CAP.images, images);
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
