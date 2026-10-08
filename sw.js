// Service worker : garde le site en mémoire pour qu'il marche sans connexion.
// FICHIER GÉNÉRÉ par « node outils/maj-hors-ligne.js » : ne pas modifier à la main.
const VERSION = 'capmeca-656a97797a2f';
const FICHIERS = [
  './',
  'css/style.css',
  'data/chapitres/electricite.js',
  'data/chapitres/freinage.js',
  'data/chapitres/liaison-au-sol.js',
  'data/chapitres/lubrification.js',
  'data/chapitres/moteur.js',
  'data/chapitres/refroidissement.js',
  'data/chapitres/securite.js',
  'data/chapitres/transmission.js',
  'data/formulaire.js',
  'data/images.js',
  'data/lexique.js',
  'images/icones/apple-touch-icon.png',
  'images/icones/icone-192.png',
  'images/icones/icone-512.png',
  'images/icones/icone-maskable-512.png',
  'images/icones/icone-pleine.svg',
  'images/icones/icone.svg',
  'images/pieces/alternateur.png',
  'images/pieces/amortisseur.jpg',
  'images/pieces/arbre-a-cames.jpg',
  'images/pieces/batterie.jpg',
  'images/pieces/bouchon-radiateur.jpg',
  'images/pieces/bougies.jpg',
  'images/pieces/chandelles.jpg',
  'images/pieces/courroie-distribution.jpg',
  'images/pieces/culasse.jpg',
  'images/pieces/demarreur.jpg',
  'images/pieces/differentiel.jpg',
  'images/pieces/disque-etrier.jpg',
  'images/pieces/disque.jpg',
  'images/pieces/etrier.jpg',
  'images/pieces/injecteur.jpg',
  'images/pieces/jauge-huile.jpg',
  'images/pieces/joint-culasse.jpg',
  'images/pieces/kit-embrayage.jpg',
  'images/pieces/maitre-cylindre.jpg',
  'images/pieces/multimetre.jpg',
  'images/pieces/piston-bielle.jpg',
  'images/pieces/plaquette.jpg',
  'images/pieces/rotule-direction.jpg',
  'images/pieces/segments.jpg',
  'images/pieces/soufflet-cardan.jpg',
  'images/pieces/tambour.jpg',
  'images/pieces/vilebrequin.png',
  'index.html',
  'js/app.js',
  'js/calculs.js',
  'js/cap.js',
  'js/ia.js',
  'js/pwa.js',
  'js/recherche.js',
  'js/series.js',
  'js/stats.js',
  'js/stockage.js',
  'manifest.webmanifest'
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
