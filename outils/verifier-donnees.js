// Vérifie le contenu des chapitres : node outils/verifier-donnees.js
// Contrôle les identifiants, les sous-thèmes, les bonnes réponses et les images.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const racine = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(racine, 'index.html'), 'utf8');
const fichiers = [...html.matchAll(/src="(data\/[^"]+)"/g)].map(m => m[1]);

const contexte = { window: {} };
contexte.window = contexte;
vm.createContext(contexte);
vm.runInContext(fs.readFileSync(path.join(racine, 'js/cap.js'), 'utf8'), contexte);

const erreurs = [];
const ids = new Set();
const imagesUtilisees = new Set();

for (const f of fichiers) {
  try {
    vm.runInContext(fs.readFileSync(path.join(racine, f), 'utf8'), contexte, { filename: f });
  } catch (e) {
    erreurs.push(`${f} : erreur de syntaxe → ${e.message}`);
  }
}

const images = contexte.CAP.images || {};
for (const [cle, im] of Object.entries(images)) {
  for (const champ of ['fichier', 'description', 'auteur', 'licence', 'source']) {
    if (!im[champ]) erreurs.push(`[images] ${cle} : champ manquant : ${champ}`);
  }
  if (im.fichier && !fs.existsSync(path.join(racine, im.fichier))) erreurs.push(`[images] ${cle} : fichier introuvable ${im.fichier}`);
}

for (const ch of contexte.CAP.chapitres) {
  const p = `[${ch.id}]`;
  for (const champ of ['id', 'titre', 'icone', 'description', 'sousThemes', 'fiche', 'cartes', 'questions']) {
    if (!ch[champ]) erreurs.push(`${p} champ manquant : ${champ}`);
  }
  const st = ch.sousThemes || {};
  const verifierId = (id, quoi) => {
    if (!id) erreurs.push(`${p} ${quoi} sans id`);
    else if (ids.has(id)) erreurs.push(`${p} id en double : ${id}`);
    else ids.add(id);
  };
  (ch.fiche || []).forEach((s, i) => {
    if (!st[s.sousTheme]) erreurs.push(`${p} fiche n°${i + 1} : sous-thème inconnu « ${s.sousTheme} »`);
  });
  (ch.cartes || []).forEach(c => {
    verifierId(c.id, 'carte');
    if (!st[c.sousTheme]) erreurs.push(`${p} ${c.id} : sous-thème inconnu « ${c.sousTheme} »`);
    if (!c.recto || !c.verso) erreurs.push(`${p} ${c.id} : recto ou verso vide`);
  });
  (ch.questions || []).forEach(q => {
    verifierId(q.id, 'question');
    if (!st[q.sousTheme]) erreurs.push(`${p} ${q.id} : sous-thème inconnu « ${q.sousTheme} »`);
    if (!['qcm', 'vf', 'ordre', 'etiquettes', 'cas'].includes(q.type)) erreurs.push(`${p} ${q.id} : type inconnu « ${q.type} »`);
    if (q.type === 'ordre') {
      // Étapes à remettre dans l'ordre : écrites dans le bon ordre, mélangées à l'affichage.
      if (!Array.isArray(q.etapes) || q.etapes.length < 3 || q.etapes.length > 8) erreurs.push(`${p} ${q.id} : il faut de 3 à 8 étapes`);
      else if (q.etapes.some(e => typeof e !== 'string' || !e.trim()) || new Set(q.etapes).size !== q.etapes.length) erreurs.push(`${p} ${q.id} : étapes vides ou en double`);
      if (q.image) erreurs.push(`${p} ${q.id} : pas de photo sur une question à remettre dans l'ordre`);
    } else if (q.type === 'etiquettes') {
      // Créée par CAP.ajouterSchemas : le schéma est contrôlé plus bas.
      if (!q.schema) erreurs.push(`${p} ${q.id} : question à étiquettes sans schéma (à déclarer dans data/schemas.js)`);
    } else if (q.type === 'cas') {
      // Créée par CAP.ajouterCas : le cas est contrôlé plus bas.
      if (!q.cas) erreurs.push(`${p} ${q.id} : question « cas » sans cas (à déclarer dans data/cas.js)`);
    } else if (!Array.isArray(q.choix) || q.choix.length < 2) erreurs.push(`${p} ${q.id} : il faut au moins 2 choix`);
    else if (!(q.bonne >= 0 && q.bonne < q.choix.length)) erreurs.push(`${p} ${q.id} : « bonne » hors des choix`);
    if (!q.explication) erreurs.push(`${p} ${q.id} : explication manquante`);
    if (q.niveau !== undefined && ![1, 2, 3].includes(q.niveau)) erreurs.push(`${p} ${q.id} : niveau doit être 1, 2 ou 3`);
    if (q.image !== undefined) {
      if (!images[q.image]) erreurs.push(`${p} ${q.id} : image inconnue « ${q.image} » (à déclarer dans data/images.js)`);
      else imagesUtilisees.add(q.image);
    }
  });
  Object.keys(st).forEach(s => {
    if (!(ch.questions || []).some(q => q.sousTheme === s)) erreurs.push(`${p} sous-thème sans question : ${s}`);
  });
}

// Schémas à légender (leur question est déjà dans le chapitre, contrôlée plus haut)
const idsChapitres = new Set(contexte.CAP.chapitres.map(c => c.id));
const schemas = contexte.CAP.schemas || {};
for (const [id, s] of Object.entries(schemas)) {
  const p = `[schéma] ${id}`;
  const ch = contexte.CAP.chapitres.find(c => c.id === s.chapitre);
  if (!ch) erreurs.push(`${p} : chapitre inconnu « ${s.chapitre} »`);
  else if (!(ch.sousThemes || {})[s.sousTheme]) erreurs.push(`${p} : sous-thème inconnu « ${s.sousTheme} »`);
  if (!s.titre || !s.explication) erreurs.push(`${p} : titre ou explication manquant`);
  if (s.niveau !== undefined && ![1, 2, 3].includes(s.niveau)) erreurs.push(`${p} : niveau doit être 1, 2 ou 3`);
  if (!images[s.image]) erreurs.push(`${p} : image inconnue « ${s.image} » (à déclarer dans data/images.js)`);
  else imagesUtilisees.add(s.image);
  const zones = s.zones || [];
  if (zones.length < 4) erreurs.push(`${p} : il faut au moins 4 zones`);
  if (new Set(zones.map(z => z.id)).size !== zones.length) erreurs.push(`${p} : id de zone en double`);
  if (new Set(zones.map(z => z.nom)).size !== zones.length) erreurs.push(`${p} : nom de zone en double`);
  const dansImage = v => typeof v === 'number' && v >= 0 && v <= 100;
  zones.forEach(z => {
    if (!z.id || !z.nom || !z.role || !dansImage(z.x) || !dansImage(z.y)) erreurs.push(`${p} : zone incomplète ou hors de l'image (${z.id || '?'})`);
    if (z.cote !== undefined && !['g', 'd', 'h', 'b'].includes(z.cote)) erreurs.push(`${p} : côté inconnu « ${z.cote} » (${z.id})`);
    if ((z.px !== undefined || z.py !== undefined) && !(dansImage(z.px) && dansImage(z.py))) erreurs.push(`${p} : px et py vont ensemble, entre 0 et 100 (${z.id})`);
  });
}
// Cas d'atelier (leur question est déjà dans le chapitre)
for (const [id, c] of Object.entries(contexte.CAP.cas || {})) {
  const p = `[cas] ${id}`;
  const ch = contexte.CAP.chapitres.find(x => x.id === c.chapitre);
  if (!ch) erreurs.push(`${p} : chapitre inconnu « ${c.chapitre} »`);
  else if (!(ch.sousThemes || {})[c.sousTheme]) erreurs.push(`${p} : sous-thème inconnu « ${c.sousTheme} »`);
  if (!c.titre || !c.plainte || !c.conclusion) erreurs.push(`${p} : titre, plainte ou conclusion manquant`);
  const etapes = c.etapes || [];
  if (etapes.length < 3 || etapes.length > 6) erreurs.push(`${p} : il faut de 3 à 6 étapes`);
  etapes.forEach((e, k) => {
    const pe = `${p} étape ${k + 1}`;
    if (!e.enonce || !e.explication) erreurs.push(`${pe} : énoncé ou explication manquant`);
    if (!Array.isArray(e.choix) || e.choix.length < 2 || new Set(e.choix).size !== e.choix.length) erreurs.push(`${pe} : il faut au moins 2 choix différents`);
    else if (!(e.bonne >= 0 && e.bonne < e.choix.length)) erreurs.push(`${pe} : « bonne » hors des choix`);
  });
}

contexte.CAP.chapitres.forEach(ch => (ch.fiche || []).forEach(s => s.contenu.forEach(b => {
  if (b && b.schema && !schemas[b.schema]) erreurs.push(`[${ch.id}] fiche « ${s.titre} » : schéma inconnu « ${b.schema} »`);
})));

// Lexique
const mots = new Set();
(contexte.CAP.lexique || []).forEach((m, i) => {
  const p = `[lexique] ${m.mot || 'n°' + (i + 1)}`;
  if (!m.mot || !m.definition) erreurs.push(`${p} : mot ou définition vide`);
  const cle = String(m.mot || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  if (mots.has(cle)) erreurs.push(`${p} : mot en double`);
  mots.add(cle);
  if (m.chapitre && !idsChapitres.has(m.chapitre)) erreurs.push(`${p} : chapitre inconnu « ${m.chapitre} »`);
  if (m.image !== undefined) {
    if (!images[m.image]) erreurs.push(`${p} : image inconnue « ${m.image} »`);
    else imagesUtilisees.add(m.image);
  }
});

// Formulaire (les calculatrices sont dans js/calculs.js)
vm.runInContext(fs.readFileSync(path.join(racine, 'js/calculs.js'), 'utf8'), contexte);
const calculs = contexte.CAP.calculs.liste;
(contexte.CAP.formulaire || []).forEach(th => {
  if (!th.theme || !Array.isArray(th.formules) || !th.formules.length) erreurs.push(`[formulaire] thème vide ou sans formule : ${th.theme}`);
  (th.formules || []).forEach(f => {
    if (!f.nom || !f.formule) erreurs.push(`[formulaire] ${th.theme} : formule sans nom ou sans contenu`);
    if (f.calcul && !calculs[f.calcul]) erreurs.push(`[formulaire] ${f.nom} : calculatrice inconnue « ${f.calcul} »`);
  });
});

// Service worker : la liste des fichiers et la version doivent correspondre au site actuel.
const { genererServiceWorker, lire } = require('./maj-hors-ligne');
if (!fs.existsSync(path.join(racine, 'sw.js')) || lire('sw.js') !== genererServiceWorker()) {
  erreurs.push('[hors ligne] sw.js n\'est pas à jour : lance « node outils/maj-hors-ligne.js »');
}

const nbQ = contexte.CAP.chapitres.reduce((n, c) => n + c.questions.length, 0);
const nbC = contexte.CAP.chapitres.reduce((n, c) => n + c.cartes.length, 0);
const nbF = (contexte.CAP.formulaire || []).reduce((n, t) => n + t.formules.length, 0);
const parNiveau = [1, 2, 3].map(n => contexte.CAP.chapitres.reduce((t, c) => t + c.questions.filter(q => (q.niveau || 1) === n).length, 0));
console.log(`${contexte.CAP.chapitres.length} chapitres, ${nbQ} questions (niveaux 1 / 2 / 3 : ${parNiveau.join(' / ')}), ${nbC} cartes, ${imagesUtilisees.size} images, ${mots.size} mots, ${nbF} formules.`);
// Conseil (pas une erreur) : chaque sous-thème devrait avoir des questions de niveaux 2 et 3,
// sinon l'élève plafonne dans ce thème.
const aCompleter = [];
contexte.CAP.chapitres.forEach(ch => Object.keys(ch.sousThemes || {}).forEach(st => {
  const niv = new Set((ch.questions || []).filter(q => q.sousTheme === st).map(q => q.niveau || 1));
  const manque = [2, 3].filter(n => !niv.has(n));
  if (manque.length) aCompleter.push(`${ch.id}/${st} (niveau ${manque.join(' et ')})`);
}));
if (aCompleter.length) console.log('À compléter, questions difficiles manquantes : ' + aCompleter.join(', '));
const inutilisees = Object.keys(images).filter(k => !imagesUtilisees.has(k));
if (inutilisees.length) console.log('Images déclarées mais pas utilisées : ' + inutilisees.join(', '));
if (erreurs.length) {
  console.log(`\n${erreurs.length} problème(s) :`);
  erreurs.forEach(e => console.log(' - ' + e));
  process.exit(1);
}
console.log('Tout est bon.');
