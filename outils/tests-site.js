// Tests de la logique du site (sans navigateur) : node outils/tests-site.js
// Charge les scripts de index.html dans un faux navigateur (localStorage en mémoire),
// sauf app.js (affichage) et pwa.js (installation), qui ont besoin d'un vrai navigateur.
const vm = require('vm'), fs = require('fs'), path = require('path');
const racine = path.join(__dirname, '..');
const store = {};
const c = { localStorage: { getItem: k => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); } }, console, Date, Math };
c.window = c; vm.createContext(c);
const html = fs.readFileSync(path.join(racine, 'index.html'), 'utf8');
for (const m of html.matchAll(/src="([^"]+)"/g)) if (!/(app|pwa).js$/.test(m[1])) vm.runInContext(fs.readFileSync(path.join(racine, m[1]), 'utf8'), c, { filename: m[1] });
let nbOk = 0, nbEchecs = 0;
const CAP = c.CAP, ok = (cond, msg) => {
  if (cond) { nbOk++; return; }
  nbEchecs++; console.log('ÉCHEC : ' + msg); process.exitCode = 1;
};
const NB_CARTES = CAP.chapitres.reduce((n, ch) => n + ch.cartes.length, 0);
const NB_PHOTOS = CAP.chapitres.reduce((n, ch) => n + ch.questions.filter(q => q.image || q.schema).length, 0);

// Sans progression
let r = CAP.series.ciblee(15);
ok(r.items.length === 15 && r.cibles.length === 0, 'ciblée sans historique : 15 questions, aucune cible');
ok(new Set(r.items.map(x => x.q.id)).size === 15, 'pas de doublon');
let j = CAP.series.cartesDuJour(20);
ok(j.paquet.length === 20 && j.dues === 0 && j.nouvelles === NB_CARTES, 'cartes du jour : 20 nouvelles');
const ex = CAP.series.examen(20); const parCh = {}; ex.forEach(x => parCh[x.ch.id] = (parCh[x.ch.id] || 0) + 1);
ok(ex.length === 20 && new Set(ex.map(x => x.q.id)).size === 20, 'examen : 20 questions distinctes');
ok(CAP.chapitres.every(ch => parCh[ch.id] >= Math.max(1, Math.floor(20 / CAP.chapitres.length))), 'examen : chaque chapitre est représenté');

// On rate tout le freinage, on réussit le reste
CAP.chapitres.forEach(ch => ch.questions.forEach(q => CAP.stockage.reponseQuestion(q.id, ch.id !== 'freinage')));
r = CAP.series.ciblee(15);
const nFrein = r.items.filter(x => x.ch.id === 'freinage').length;
ok(r.cibles.every(s => s.chapitre.id === 'freinage') && r.cibles.length >= 1, 'cibles = sous-thèmes du freinage uniquement');
ok(nFrein >= 11, 'ciblée : au moins 11 questions de freinage (70 % de 15), obtenu ' + nFrein);
ok(r.items.length === 15, 'ciblée : 15 au total');
const nbFrein = CAP.chapitres.find(c => c.id === 'freinage').questions.length;
ok(CAP.series.nbErreurs() === nbFrein, nbFrein + ' erreurs');
CAP.stockage.reponseQuestion('frein-q1', true);
ok(CAP.series.nbErreurs() === nbFrein - 1, 'une erreur corrigée sort de la liste');

// Leitner
CAP.stockage.reponseCarte('frein-c1', true);
CAP.stockage.reponseCarte('frein-c1', true);
let e = CAP.stockage.carte('frein-c1');
ok(e.boite === 3 && e.prochaine === CAP.stockage.jourDans(4), 'carte sue 2 fois : boîte 3, dans 4 jours');
CAP.stockage.reponseCarte('frein-c1', false);
e = CAP.stockage.carte('frein-c1');
ok(e.boite === 1 && e.prochaine === CAP.stockage.jourDans(1), 'carte ratée : boîte 1, demain');
// Ancienne carte V1 sans boîte, vue il y a 3 jours
const etat = JSON.parse(store['capmeca.progression.v1']);
etat.cartes['moteur-c1'] = { sais: 1, pas: 0, derniere: true, date: Date.now() - 3 * 86400000 };
CAP.stockage.importer(JSON.stringify(etat));
e = CAP.stockage.carte('moteur-c1');
ok(e.boite === 2 && e.prochaine === CAP.stockage.jourDans(-1), 'carte V1 migrée : boîte 2, due depuis hier');
j = CAP.series.cartesDuJour(20);
ok(j.dues === 1 && j.paquet[0].c.id === 'moteur-c1', 'la carte due passe en premier');
ok(JSON.stringify(CAP.stats.boites()) === JSON.stringify([NB_CARTES - 2, 1, 1, 0, 0, 0]), 'répartition des boîtes ' + JSON.stringify(CAP.stats.boites()));

CAP.stockage.finSeance({ type: 'examen', chapitre: 'examen', score: 13, total: 20, duree: 600000 });
ok(CAP.stats.examens()[0].note === 13, 'note examen 13/20');
const act = CAP.stats.activite(5);
ok(act.length === 35 && act.find(d => d.jour === CAP.stockage.aujourdhui()).seances === 1, 'activité : 35 jours, 1 séance aujourd\'hui');

// Reconnaître les pièces
const p = CAP.series.pieces(10);
ok(p.length === 10 && p.every(x => (x.q.image && CAP.images[x.q.image]) || (x.q.schema && CAP.schemas[x.q.schema])), 'pièces : 10 questions, toutes avec une photo ou un schéma déclaré');
ok(new Set(p.map(x => x.q.id)).size === 10, 'pièces : pas de doublon');
ok(CAP.series.nbPieces() === NB_PHOTOS && NB_PHOTOS >= 10, 'pièces : toutes les questions avec photo');

// Calculatrices
const L = CAP.calculs.liste;
ok(L.cylindree.calculer({ alesage: '80', course: '80', cylindres: '4' }).valeur.toFixed(0) === '1608', 'cylindrée 80 × 80 × 4 = 1 608 cm³');
ok(Math.abs(L.rapport.calculer({ unitaire: '400', chambre: '40' }).valeur - 11) < 1e-9, 'rapport volumétrique (400 + 40) / 40 = 11');
ok(L.ohm.calculer({ u: '12', r: '4,8', i: '' }).valeur === 2.5, 'Ohm : 12 V / 4,8 Ω = 2,5 A (virgule acceptée)');
ok(L.puissance.calculer({ p: '', u: '12', i: '5' }).valeur === 60, 'puissance : 12 V × 5 A = 60 W');
ok(!!L.ohm.calculer({ u: '12', r: '4', i: '3' }).erreur, 'Ohm : erreur si les trois valeurs sont remplies');
ok(!!L.cylindree.calculer({ alesage: '-80', course: '80', cylindres: '4' }).erreur, 'cylindrée : erreur sur une valeur négative');
// Recherche
const R = CAP.recherche;
ok(R.chercher('maitre cylindre').groupes[0].resultats[0].titre === 'Maître-cylindre', 'recherche sans accents : maître-cylindre en premier');
ok(R.chercher('x').total === 0, 'recherche : 1 lettre ne cherche rien');
ok(R.surligner('<b>étrier</b>', R.termes('etrier')) === '&lt;b&gt;<mark>étrier</mark>&lt;/b&gt;', 'surlignage échappé');

// Niveaux de difficulté
CAP.stockage.reinitialiser();
const frein = CAP.chapitres.find(c => c.id === 'freinage');
const hydro = niv => frein.questions.filter(q => q.sousTheme === 'hydraulique' && CAP.stats.niveau(q) === niv);
const nivHydro = () => CAP.stats.niveauSousTheme(frein, 'hydraulique');
ok(nivHydro() === 1, 'niveaux : départ au niveau 1');
ok(CAP.stats.niveaux().every(n => n.niveau === 1), 'niveaux : tous les sous-thèmes au niveau 1 au départ');
const items = CAP.chapitres.flatMap(ch => ch.questions.map(q => ({ q, ch })));
ok(CAP.series.adaptee(items, 20).every(x => CAP.stats.niveau(x.q) === 1), 'niveaux : au départ, aucune question de niveau 2 ou 3 proposée');
hydro(1).forEach(q => CAP.stockage.reponseQuestion(q.id, true));
ok(nivHydro() === 2, 'niveaux : niveau 1 réussi → niveau 2');
hydro(2).forEach(q => CAP.stockage.reponseQuestion(q.id, true));
ok(nivHydro() === 3, 'niveaux : niveau 2 réussi → niveau 3');
const serieHydro = CAP.series.adaptee(items.filter(x => x.ch === frein && x.q.sousTheme === 'hydraulique'), 5);
ok(serieHydro.filter(x => CAP.stats.niveau(x.q) === 3).length >= Math.min(4, hydro(3).length), 'niveaux : la série privilégie le niveau en cours (3)');
// Assez d'erreurs pour passer sous 80 % de réussite au niveau 1 (quel que soit le nombre de questions)
hydro(1).slice(0, Math.floor(hydro(1).length * 0.2) + 1).forEach(q => CAP.stockage.reponseQuestion(q.id, false));
ok(nivHydro() === 1, 'niveaux : des erreurs au niveau 1 font redescendre');
const examenNiv = CAP.series.examen(20);
ok(examenNiv.filter(x => CAP.stats.niveau(x.q) > 1).length >= 8, 'niveaux : l\'examen blanc contient au moins 8 questions difficiles');


// Questions « remettre dans l'ordre »
const questionsOrdre = CAP.chapitres.flatMap(ch => ch.questions.filter(q => q.type === 'ordre'));
ok(questionsOrdre.length >= 10, 'ordre : des procédures à remettre dans l\'ordre existent');
ok(CAP.series.examen(20).every(x => x.q.type !== 'ordre'), 'ordre : l\'examen blanc n\'en contient pas');
const rechercheVidange = CAP.recherche.chercher('vidange');
ok(rechercheVidange.groupes.some(g => g.resultats.some(e => e.question && e.question.type === 'ordre')), 'ordre : la recherche trouve les étapes');
CAP.stockage.reinitialiser();
const toutesItems = CAP.chapitres.flatMap(ch => ch.questions.map(q => ({ q, ch })));
ok(CAP.series.adaptee(toutesItems, 300).some(x => x.q.type === 'ordre'), 'ordre : elles sont proposées dans les séries');

// Schémas à légender : chaque schéma devient une question « etiquettes »
const schemas = Object.values(CAP.schemas);
const questionsSchemas = CAP.chapitres.flatMap(ch => ch.questions.filter(q => q.schema));
ok(schemas.length >= 4 && questionsSchemas.length === schemas.length, 'schémas : une question par schéma');
ok(questionsSchemas.every(q => q.type === 'etiquettes' && q.id === 'eti-' + q.schema && CAP.images[CAP.schemas[q.schema].image]), 'schémas : questions à étiquettes, avec leur image déclarée');
ok(CAP.series.pieces(50).some(x => x.q.schema), 'schémas : proposés dans « Reconnaître les pièces »');
ok(CAP.series.examen(20).every(x => x.q.type === 'qcm' || x.q.type === 'vf'), 'schémas : l\'examen blanc n\'en contient pas');
ok(CAP.recherche.chercher('tringle').groupes.some(g => g.resultats.some(e => e.question && e.question.type === 'etiquettes')), 'schémas : la recherche trouve les noms des pièces');

console.log(nbEchecs ? `${nbEchecs} test(s) en échec, ${nbOk} réussi(s).` : `${nbOk} tests réussis.`);
