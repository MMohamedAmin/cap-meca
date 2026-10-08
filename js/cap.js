// Espace de noms global du site. Chargé en premier.
// Les fichiers de data/chapitres/ appellent CAP.ajouterChapitre({...}).
window.CAP = window.CAP || { chapitres: [] };

CAP.ajouterChapitre = function (chapitre) {
  CAP.chapitres.push(chapitre);
};
