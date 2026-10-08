// Tests de l'assistant IA, sans clé API ni appel réel : npm run test-ia
// Un faux client remplace Claude et enregistre les demandes reçues.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import Anthropic from '@anthropic-ai/sdk';
import { traiter, filtrerQuestions, MODELE } from '../netlify/ia/coeur.mjs';

const silencieux = { log() {}, error() {} };

function fauxClient(reponse) {
  const appels = [];
  const repondre = params => {
    appels.push(params);
    if (reponse instanceof Error) throw reponse;
    return Promise.resolve(typeof reponse === 'function' ? reponse(params) : reponse);
  };
  return { appels, beta: { messages: { create: repondre, parse: repondre } } };
}
const message = (texte, extra) => Object.assign(
  { model: MODELE, stop_reason: 'end_turn', content: [{ type: 'thinking', thinking: '' }, { type: 'text', text: texte }] }, extra);
// Une erreur du SDK sans passer par son constructeur.
const erreurSdk = Classe => Object.assign(Object.create(Classe.prototype), { status: 0, message: 'test' });

const QUESTION = {
  chapitre: 'Freinage', theme: 'Circuit hydraulique',
  enonce: 'Quel organe transforme l\'effort sur la pédale en pression hydraulique ?',
  choix: ['Le maître-cylindre', 'Le servofrein', 'L\'étrier', 'Le cylindre de roue'],
  bonne: 'Le maître-cylindre', choisie: 'Le servofrein',
  explication: 'Le maître-cylindre crée la pression.'
};

test('expliquer : consigne côté serveur, modèle, effort bas, secours activé', async () => {
  const c = fauxClient(message('Le **servofrein** aide, mais…'));
  const r = await traiter(c, 'expliquer', { question: QUESTION });
  assert.equal(r.statut, 200);
  assert.equal(r.corps.texte, 'Le **servofrein** aide, mais…');
  const p = c.appels[0];
  assert.equal(p.model, 'claude-opus-5-5');
  assert.equal(p.output_config.effort, 'low');
  assert.equal(p.fallbacks, 'default');
  assert.deepEqual(p.betas, ['server-side-fallback-2026-07-01']);
  assert.equal(p.thinking, undefined, 'pas de paramètre thinking (toujours actif sur ce modèle)');
  assert.match(p.messages[0].content, /Réponse de l'élève : Le servofrein/);
  assert.match(p.system, /CAP Maintenance des véhicules/);
});

test('validation : données manquantes, trop longues, action inconnue', async () => {
  const c = fauxClient(message('x'));
  assert.equal((await traiter(c, 'pirater', {})).statut, 400);
  assert.equal((await traiter(c, 'expliquer', {})).statut, 400);
  assert.equal((await traiter(c, 'expliquer', { question: Object.assign({}, QUESTION, { enonce: 'x'.repeat(401) }) })).statut, 400);
  assert.equal((await traiter(c, 'expliquer', { question: Object.assign({}, QUESTION, { bonne: 42 }) })).statut, 400);
  assert.equal((await traiter(c, 'generer', { cibles: [], nombre: 3 })).statut, 400);
  assert.equal((await traiter(c, 'generer', { cibles: [{ chapitre: 'a', theme: 'b' }], nombre: 50 })).statut, 400);
  assert.equal((await traiter(c, 'bilan', { seance: 'Quiz', score: 12, total: 10 })).statut, 400);
  assert.equal(c.appels.length, 0, 'aucun appel à Claude pour une demande invalide');
});

test('refus et réponse coupée', async () => {
  assert.equal((await traiter(fauxClient(message('', { stop_reason: 'refusal' })), 'expliquer', { question: QUESTION })).statut, 422);
  assert.equal((await traiter(fauxClient(message('début', { stop_reason: 'max_tokens' })), 'expliquer', { question: QUESTION })).statut, 502);
});

test('erreurs de l\'API traduites en messages pour l\'élève', async () => {
  const cas = [[Anthropic.RateLimitError, 429], [Anthropic.AuthenticationError, 503], [Anthropic.BadRequestError, 502],
    [Anthropic.APIConnectionTimeoutError, 504], [Anthropic.InternalServerError, 502]];
  for (const [Classe, statut] of cas) {
    const r = await traiter(fauxClient(erreurSdk(Classe)), 'expliquer', { question: QUESTION }, silencieux);
    assert.equal(r.statut, statut, Classe.name);
    assert.ok(r.corps.erreur);
  }
});

test('generer : format imposé et questions mal formées écartées', async () => {
  const bonne = { cible: 0, enonce: 'Que contient le bocal fixé sur le maître-cylindre ?', choix: ['Liquide de frein', 'Liquide de refroidissement', 'Huile moteur', 'Lave-glace'], bonne: 0, explication: 'C\'est le réservoir de liquide de frein.' };
  const c = fauxClient(message('', {
    parsed_output: { questions: [
      bonne,
      Object.assign({}, bonne, { cible: 7 }),                                   // thème inconnu
      Object.assign({}, bonne, { choix: ['a', 'b', 'c'] }),                     // 3 choix
      Object.assign({}, bonne, { choix: ['Liquide de frein', 'liquide de frein', 'c', 'd'] }), // doublon
      Object.assign({}, bonne, { bonne: 4 }),                                   // index hors limites
      Object.assign({}, bonne, { cible: 1, bonne: 2 })
    ] }
  }));
  const r = await traiter(c, 'generer', { cibles: [{ chapitre: 'Freinage', theme: 'Hydraulique', exemples: ['Ex 1'] }, { chapitre: 'Moteur', theme: 'Cycle' }], nombre: 5 });
  assert.equal(r.statut, 200);
  assert.equal(r.corps.questions.length, 2);
  assert.deepEqual(r.corps.questions.map(q => [q.cible, q.bonne]), [[0, 0], [1, 2]]);
  const p = c.appels[0];
  assert.equal(p.output_config.effort, 'medium');
  assert.ok(p.output_config.format && p.output_config.format.type === 'json_schema', 'format JSON imposé');
  assert.match(p.messages[0].content, /0\. Chapitre « Freinage »[\s\S]*Ex 1/);
});

test('generer : aucune question valable → erreur claire', async () => {
  const r = await traiter(fauxClient(message('', { parsed_output: { questions: [] } })), 'generer', { cibles: [{ chapitre: 'a', theme: 'b' }], nombre: 2 });
  assert.equal(r.statut, 502);
});

test('filtrerQuestions respecte le nombre de thèmes', () => {
  assert.equal(filtrerQuestions(null, 2).length, 0);
});

test('bilan : erreurs et points faibles dans la consigne', async () => {
  const c = fauxClient(message('Bon travail…'));
  const r = await traiter(c, 'bilan', { seance: 'Examen blanc', score: 14, total: 20, erreurs: [QUESTION], pointsFaibles: [{ chapitre: 'Freinage', theme: 'Assistance et ABS', pourcent: 40 }] });
  assert.equal(r.statut, 200);
  assert.match(c.appels[0].messages[0].content, /Score : 14 \/ 20[\s\S]*Assistance et ABS \(Freinage\) : 40 %/);
});

test('tester : aucun appel à Claude', async () => {
  const c = fauxClient(message('x'));
  const r = await traiter(c, 'tester', undefined);
  assert.equal(r.statut, 200);
  assert.equal(c.appels.length, 0);
});

test('signaler : journalisé, sans appel à Claude', async () => {
  const lignes = [];
  const c = fauxClient(message('x'));
  const r = await traiter(c, 'signaler', { question: { enonce: QUESTION.enonce, choix: QUESTION.choix, bonne: QUESTION.bonne }, origine: 'ia', reponseIA: 'Texte de l\'IA', commentaire: 'La réponse 2 est aussi juste' }, { log: l => lignes.push(l), error() {} });
  assert.equal(r.statut, 200);
  assert.equal(c.appels.length, 0);
  assert.match(lignes[0], /^\[signalement\] .*aussi juste/);
});

test('fonction HTTP : méthode, code d\'accès, taille, CORS', async () => {
  process.env.ANTHROPIC_API_KEY = 'cle-de-test';
  process.env.CODE_ACCES = 'garage2026';
  const { default: fonction } = await import('../netlify/functions/ia.mjs');
  const appel = (corps, init = {}) => fonction(new Request('https://exemple.netlify.app/api/ia', Object.assign({
    method: 'POST', body: typeof corps === 'string' ? corps : JSON.stringify(corps),
    headers: { 'Content-Type': 'application/json', Origin: 'https://mmohamedamin.github.io' }
  }, init)));

  assert.equal((await fonction(new Request('https://x/api/ia'))).status, 405);
  const pre = await fonction(new Request('https://x/api/ia', { method: 'OPTIONS', headers: { Origin: 'https://mmohamedamin.github.io' } }));
  assert.equal(pre.status, 204);
  assert.equal(pre.headers.get('access-control-allow-origin'), 'https://mmohamedamin.github.io');
  const pirate = await fonction(new Request('https://x/api/ia', { method: 'OPTIONS', headers: { Origin: 'https://pirate.example' } }));
  assert.equal(pirate.headers.get('access-control-allow-origin'), null);

  assert.equal((await appel({ action: 'signaler', code: 'mauvais', donnees: {} })).status, 401);
  assert.equal((await appel({ action: 'signaler', donnees: {} })).status, 401);
  assert.equal((await appel('{pas du json')).status, 400);
  assert.equal((await appel('x'.repeat(20001))).status, 413);

  const ok = await appel({ action: 'signaler', code: ' garage2026 ', donnees: { question: { enonce: 'Question test assez longue', choix: ['a', 'b'], bonne: 'a' } } });
  assert.equal(ok.status, 200);
  assert.equal(ok.headers.get('cache-control'), 'no-store');

  delete process.env.CODE_ACCES;
  assert.equal((await appel({ action: 'signaler', code: 'garage2026', donnees: {} })).status, 503);
});
