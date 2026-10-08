// Assemble le site à publier dans _site/ : node outils/preparer-site.js
// Utilisé par la mise en ligne automatique (.github/workflows/mise-en-ligne.yml).
// On ne publie que les fichiers du site : pas les outils, ni la documentation.
const fs = require('fs');
const path = require('path');

const racine = path.join(__dirname, '..');
const sortie = path.join(racine, '_site');
const A_PUBLIER = ['index.html', 'manifest.webmanifest', 'sw.js', 'css', 'js', 'data', 'images'];

fs.rmSync(sortie, { recursive: true, force: true });
fs.mkdirSync(sortie);
A_PUBLIER.forEach(f => fs.cpSync(path.join(racine, f), path.join(sortie, f), { recursive: true }));
// Sans ce fichier, GitHub Pages passerait le site dans Jekyll (inutile ici).
fs.writeFileSync(path.join(sortie, '.nojekyll'), '');

// Chaque fichier que le service worker met en mémoire doit être publié,
// sinon l'installation hors ligne échoue sur le téléphone.
const sw = fs.readFileSync(path.join(sortie, 'sw.js'), 'utf8');
const listes = sw.match(/const FICHIERS = \[([\s\S]*?)\];/);
const fichiers = [...listes[1].matchAll(/'([^']+)'/g)].map(m => m[1]).filter(f => f !== './');
const manquants = fichiers.filter(f => !fs.existsSync(path.join(sortie, f)));
if (manquants.length) {
  console.log('Fichiers attendus par sw.js mais absents du site :\n - ' + manquants.join('\n - '));
  process.exit(1);
}
console.log(`_site prêt : ${fichiers.length} fichiers, tous présents.`);
