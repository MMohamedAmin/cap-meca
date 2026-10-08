// Génère sw.js (le service worker) : node outils/maj-hors-ligne.js
// À relancer après toute modification du site, pour que les téléphones reçoivent la nouvelle version.
// La version du cache est une empreinte du contenu : elle change dès qu'un fichier change.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const racine = path.join(__dirname, '..');
const DOSSIERS = ['css', 'js', 'data', 'images'];
const FICHIERS_RACINE = ['index.html', 'manifest.webmanifest'];
const EXTENSIONS = /\.(html|css|js|json|webmanifest|png|jpe?g|svg|webp)$/i;
const TEXTE = /\.(html|css|js|json|webmanifest|svg)$/i;

// Contenu d'un fichier, avec des fins de ligne unifiées pour les textes
// (git peut les convertir en CRLF sous Windows : l'empreinte ne doit pas en dépendre).
function lire(f) {
  const brut = fs.readFileSync(path.join(racine, f));
  return TEXTE.test(f) ? brut.toString('utf8').replace(/\r\n/g, '\n') : brut;
}

function lister(dossier) {
  const complet = path.join(racine, dossier);
  if (!fs.existsSync(complet)) return [];
  return fs.readdirSync(complet, { withFileTypes: true }).flatMap(e => {
    const rel = dossier + '/' + e.name;
    if (e.isDirectory()) return lister(rel);
    return EXTENSIONS.test(e.name) ? [rel] : [];
  });
}

// Contenu attendu de sw.js.
function genererServiceWorker() {
  const fichiers = FICHIERS_RACINE.concat(...DOSSIERS.map(lister)).sort();
  const empreinte = crypto.createHash('sha256');
  fichiers.forEach(f => {
    empreinte.update(f);
    empreinte.update(lire(f));
  });
  const version = 'capmeca-' + empreinte.digest('hex').slice(0, 12);

  return `// Service worker : garde le site en mémoire pour qu'il marche sans connexion.
// FICHIER GÉNÉRÉ par « node outils/maj-hors-ligne.js » : ne pas modifier à la main.
const VERSION = '${version}';
const FICHIERS = [
  './',
${fichiers.map(f => `  '${f}'`).join(',\n')}
];

// Installation : on télécharge tout le site.
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

// Activation : on supprime les anciennes versions.
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(cles => Promise.all(cles.filter(c => c.startsWith('capmeca-') && c !== VERSION).map(c => caches.delete(c))))
      .then(() => self.clients.claim())
  );
});

// Chaque demande : d'abord la mémoire, sinon le réseau.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true })
      .then(r => r || fetch(e.request).catch(() => (e.request.mode === 'navigate' ? caches.match('./') : Response.error())))
  );
});
`;
}

module.exports = { genererServiceWorker, lire };

if (require.main === module) {
  const contenu = genererServiceWorker();
  fs.writeFileSync(path.join(racine, 'sw.js'), contenu);
  const nb = (contenu.match(/^ {2}'/gm) || []).length;
  console.log(`sw.js à jour : ${nb} fichiers, ${contenu.match(/VERSION = '([^']+)'/)[1]}.`);
}
