// Vérifie le contenu des chapitres : node outils/verifier-donnees.js
// Contrôle les identifiants, les sous-thèmes et les bonnes réponses.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const racine = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(racine, 'index.html'), 'utf8');
const fichiers = [...html.matchAll(/src="(data\/chapitres\/[^"]+)"/g)].map(m => m[1]);

const contexte = { window: {} };
contexte.window = contexte;
vm.createContext(contexte);
vm.runInContext(fs.readFileSync(path.join(racine, 'js/cap.js'), 'utf8'), contexte);

const erreurs = [];
const ids = new Set();

for (const f of fichiers) {
  try {
    vm.runInContext(fs.readFileSync(path.join(racine, f), 'utf8'), contexte, { filename: f });
  } catch (e) {
    erreurs.push(`${f} : erreur de syntaxe → ${e.message}`);
  }
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
    if (!['qcm', 'vf'].includes(q.type)) erreurs.push(`${p} ${q.id} : type inconnu « ${q.type} »`);
    if (!Array.isArray(q.choix) || q.choix.length < 2) erreurs.push(`${p} ${q.id} : il faut au moins 2 choix`);
    else if (!(q.bonne >= 0 && q.bonne < q.choix.length)) erreurs.push(`${p} ${q.id} : « bonne » hors des choix`);
    if (!q.explication) erreurs.push(`${p} ${q.id} : explication manquante`);
  });
  Object.keys(st).forEach(s => {
    if (!(ch.questions || []).some(q => q.sousTheme === s)) erreurs.push(`${p} sous-thème sans question : ${s}`);
  });
}

const nbQ = contexte.CAP.chapitres.reduce((n, c) => n + c.questions.length, 0);
const nbC = contexte.CAP.chapitres.reduce((n, c) => n + c.cartes.length, 0);
console.log(`${contexte.CAP.chapitres.length} chapitres, ${nbQ} questions, ${nbC} cartes.`);
if (erreurs.length) {
  console.log(`\n${erreurs.length} problème(s) :`);
  erreurs.forEach(e => console.log(' - ' + e));
  process.exit(1);
}
console.log('Tout est bon.');
