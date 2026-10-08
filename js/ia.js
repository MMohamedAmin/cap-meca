// Assistant IA (V4), côté navigateur.
// Le site n'appelle jamais Claude directement : il passe par la fonction Netlify
// (netlify/functions/ia.mjs), qui garde la clé API cachée. Ne JAMAIS mettre de clé API ici.
// L'élève saisit une fois un code d'accès (page « Assistant IA »), gardé dans ce navigateur.
CAP.ia = (function () {
  // Adresse de la fonction quand le site est ouvert ailleurs que sur Netlify (GitHub Pages).
  // Vide : l'assistant n'est pas proposé.
  const URL_FONCTION = '';
  const CLE_CODE = 'capmeca.ia.code';
  const CLE_SIGNALEMENTS = 'capmeca.ia.signalements';
  const DELAI = 65000; // la fonction répond en moins de 60 s

  function adresse() {
    if (/\.netlify\.app$/.test(location.hostname)) return '/api/ia';
    return URL_FONCTION;
  }

  function lire(cle) {
    try { return localStorage.getItem(cle); } catch (e) { return null; }
  }
  function ecrire(cle, valeur) {
    try {
      if (valeur === null) localStorage.removeItem(cle);
      else localStorage.setItem(cle, valeur);
    } catch (e) { /* stockage indisponible */ }
  }

  // Envoie une demande à la fonction. Renvoie la réponse, ou lève une Error au message lisible.
  async function appeler(action, donnees, code) {
    if (!navigator.onLine) throw new Error('Pas de connexion : l\'assistant IA a besoin d\'Internet.');
    const controle = new AbortController();
    const minuterie = setTimeout(() => controle.abort(), DELAI);
    let reponse;
    try {
      reponse = await fetch(adresse(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, code: code === undefined ? lire(CLE_CODE) : code, donnees }),
        signal: controle.signal
      });
    } catch (e) {
      throw new Error(e.name === 'AbortError'
        ? 'L\'IA met trop de temps à répondre. Réessaie.'
        : 'Impossible de joindre l\'assistant IA. Vérifie ta connexion.');
    } finally {
      clearTimeout(minuterie);
    }
    let corps = {};
    try { corps = await reponse.json(); } catch (e) { /* réponse vide */ }
    if (!reponse.ok) {
      if (reponse.status === 401) ecrire(CLE_CODE, null); // code devenu faux : on le redemande
      throw new Error(corps.erreur || 'L\'assistant IA a rencontré un problème.');
    }
    return corps;
  }

  const sansGras = t => String(t || '').replace(/\*\*/g, '');

  // Question du site → données attendues par la fonction.
  function donneesQuestion(q, ch, choisie) {
    return {
      chapitre: ch.titre,
      theme: ch.sousThemes[q.sousTheme] || ch.titre,
      enonce: sansGras(q.enonce),
      choix: q.choix.map(sansGras),
      bonne: sansGras(q.choix[q.bonne]),
      choisie: choisie === undefined || choisie === null ? '' : sansGras(choisie),
      explication: sansGras(q.explication)
    };
  }

  return {
    // L'assistant existe pour ce site (fonction configurée, site en http(s)).
    disponible() { return !!adresse() && /^https?:$/.test(location.protocol); },
    // … et l'élève a saisi son code.
    actif() { return this.disponible() && !!lire(CLE_CODE); },

    // Vérifie le code auprès de la fonction (sans appeler Claude), puis le garde.
    async activer(code) {
      code = String(code || '').trim();
      if (!code) throw new Error('Entre le code d\'accès.');
      await appeler('tester', {}, code);
      ecrire(CLE_CODE, code);
    },
    desactiver() { ecrire(CLE_CODE, null); },

    async expliquer(q, ch, choisie) {
      return (await appeler('expliquer', { question: donneesQuestion(q, ch, choisie) })).texte;
    },

    // erreurs : [{ q, ch, choisie }] ; pointsFaibles : résultat de CAP.stats.pointsFaibles()
    async bilan(seance, score, total, erreurs, pointsFaibles) {
      return (await appeler('bilan', {
        seance, score, total,
        erreurs: erreurs.slice(0, 20).map(e => donneesQuestion(e.q, e.ch, e.choisie)),
        pointsFaibles: pointsFaibles.slice(0, 8).map(p => ({ chapitre: p.chapitre.titre, theme: p.nom, pourcent: p.pourcent }))
      })).texte;
    },

    // cibles : [{ ch, sousTheme }] (4 au plus). Renvoie des questions au format du site,
    // marquées ia: true (elles ne comptent pas dans la progression).
    async genererQuestions(cibles, nombre) {
      const r = await appeler('generer', {
        nombre,
        cibles: cibles.map(c => ({
          chapitre: c.ch.titre,
          theme: c.ch.sousThemes[c.sousTheme],
          exemples: c.ch.questions.filter(q => q.sousTheme === c.sousTheme).slice(0, 3).map(q => sansGras(q.enonce))
        }))
      });
      const base = 'ia-' + Date.now();
      return r.questions.map((q, i) => {
        const c = cibles[q.cible];
        return {
          ch: c.ch,
          q: { id: `${base}-${i}`, sousTheme: c.sousTheme, type: 'qcm', enonce: q.enonce, choix: q.choix, bonne: q.bonne, explication: q.explication, ia: true }
        };
      });
    },

    // Signale une erreur dans une question ou une explication de l'IA.
    // Gardé aussi dans ce navigateur (au cas où l'envoi échoue).
    async signaler(q, origine, reponseIA, commentaire) {
      const signalement = {
        date: Date.now(), origine, commentaire: commentaire || '', reponseIA: reponseIA || '',
        question: { enonce: sansGras(q.enonce), choix: q.choix.map(sansGras), bonne: sansGras(q.choix[q.bonne]), explication: sansGras(q.explication) }
      };
      let liste = [];
      try { liste = JSON.parse(lire(CLE_SIGNALEMENTS) || '[]'); } catch (e) { liste = []; }
      liste.push(signalement);
      ecrire(CLE_SIGNALEMENTS, JSON.stringify(liste.slice(-50)));
      await appeler('signaler', {
        question: signalement.question, origine, reponseIA: String(reponseIA || '').slice(0, 2000), commentaire: String(commentaire || '').slice(0, 500)
      });
    }
  };
})();
