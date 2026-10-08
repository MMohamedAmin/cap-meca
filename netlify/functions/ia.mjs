// Fonction Netlify de l'assistant IA : POST /api/ia
// Corps : { action: 'expliquer' | 'bilan' | 'generer' | 'signaler', code, donnees }
//
// Variables d'environnement à définir dans Netlify (jamais dans le code) :
//   ANTHROPIC_API_KEY    la clé API Anthropic
//   CODE_ACCES           le code que l'élève saisit une fois dans le site
//   ORIGINES_AUTORISEES  (facultatif) sites autorisés à appeler la fonction depuis un autre domaine,
//                        séparés par des virgules. Par défaut : le site GitHub Pages.
import { createHash, timingSafeEqual } from 'node:crypto';
import Anthropic from '@anthropic-ai/sdk';
import { traiter } from '../ia/coeur.mjs';

export const config = { path: '/api/ia' };

const TAILLE_MAX = 20000; // caractères
const ORIGINES = (process.env.ORIGINES_AUTORISEES || 'https://mmohamedamin.github.io')
  .split(',').map(o => o.trim()).filter(Boolean);

function enTetes(origine) {
  const h = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Vary': 'Origin' };
  if (origine && ORIGINES.includes(origine)) {
    h['Access-Control-Allow-Origin'] = origine;
    h['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    h['Access-Control-Allow-Headers'] = 'Content-Type';
    h['Access-Control-Max-Age'] = '86400';
  }
  return h;
}

// Comparaison à durée constante (on compare des empreintes de même longueur).
function memeCode(a, b) {
  const ha = createHash('sha256').update(String(a)).digest();
  const hb = createHash('sha256').update(String(b)).digest();
  return timingSafeEqual(ha, hb);
}

export default async function (req) {
  const h = enTetes(req.headers.get('origin'));
  const repondre = (statut, corps) => new Response(JSON.stringify(corps), { status: statut, headers: h });

  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: h });
  if (req.method !== 'POST') return repondre(405, { erreur: 'Méthode non autorisée.' });

  if (!process.env.ANTHROPIC_API_KEY || !process.env.CODE_ACCES) {
    return repondre(503, { erreur: 'L\'assistant IA n\'est pas encore configuré.' });
  }

  const brut = await req.text();
  if (brut.length > TAILLE_MAX) return repondre(413, { erreur: 'Demande trop longue.' });
  let corps;
  try { corps = JSON.parse(brut); } catch (e) { return repondre(400, { erreur: 'Demande illisible.' }); }
  if (!corps || typeof corps !== 'object') return repondre(400, { erreur: 'Demande illisible.' });

  if (typeof corps.code !== 'string' || !memeCode(corps.code.trim(), process.env.CODE_ACCES)) {
    return repondre(401, { erreur: 'Code d\'accès incorrect.' });
  }

  // 50 s et une seule nouvelle tentative : la fonction doit répondre en moins de 60 s.
  const client = new Anthropic({ timeout: 50000, maxRetries: 1 });
  const { statut, corps: reponse } = await traiter(client, corps.action, corps.donnees);
  return repondre(statut, reponse);
}
