// Recherche globale (V3) : lexique, formulaire, fiches, cartes et questions.
// Sans accents ni majuscules : « frein a disque » trouve « Frein à disque ».
CAP.recherche = (function () {
  function echapper(t) {
    return String(t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  const sansGras = t => String(t).replace(/\*\*/g, '');

  // Une lettre normalisée par lettre d'origine : les positions restent les mêmes,
  // ce qui permet de surligner le texte d'origine.
  function normaliser(texte) {
    let n = '';
    for (let i = 0; i < texte.length; i++) {
      const c = texte[i];
      const m = c.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
      n += m.length === 1 ? m : c.toLowerCase().charAt(0) || c;
    }
    return n;
  }

  // Mots de la recherche (2 lettres au moins).
  function termes(requete) {
    return normaliser(String(requete || '')).split(/[\s'’,;.:!?()«»"-]+/).filter(t => t.length >= 2);
  }

  // Texte échappé, avec les termes trouvés dans <mark>.
  function surligner(texte, liste) {
    texte = sansGras(texte);
    const n = normaliser(texte);
    const marque = new Array(texte.length).fill(false);
    liste.forEach(t => {
      let i = n.indexOf(t);
      while (i !== -1) {
        for (let k = i; k < i + t.length; k++) marque[k] = true;
        i = n.indexOf(t, i + t.length);
      }
    });
    let html = '', k = 0;
    while (k < texte.length) {
      const m = marque[k];
      let fin = k;
      while (fin < texte.length && marque[fin] === m) fin++;
      const morceau = echapper(texte.slice(k, fin));
      html += m ? `<mark>${morceau}</mark>` : morceau;
      k = fin;
    }
    return html;
  }

  // Passage d'un long texte autour du premier terme trouvé.
  function extrait(texte, liste, longueur) {
    texte = sansGras(texte);
    longueur = longueur || 160;
    if (texte.length <= longueur) return surligner(texte, liste);
    const n = normaliser(texte);
    const positions = liste.map(t => n.indexOf(t)).filter(i => i >= 0);
    let debut = positions.length ? Math.max(0, Math.min(...positions) - 50) : 0;
    if (debut > 0) {
      const espace = texte.indexOf(' ', debut);
      if (espace !== -1 && espace - debut < 20) debut = espace + 1;
    }
    const fin = Math.min(texte.length, debut + longueur);
    return (debut > 0 ? '…' : '') + surligner(texte.slice(debut, fin), liste) + (fin < texte.length ? '…' : '');
  }

  // Texte brut d'un bloc de fiche.
  function texteBloc(b) {
    if (typeof b === 'string') return b;
    if (b.liste) return b.liste.join(' ');
    return b.formule || b.retenir || b.attention || '';
  }

  // Tout ce qui peut être trouvé. Construit au premier appel.
  let index = null;
  function construire() {
    index = [];
    const ajouter = (e) => {
      e.nTitre = normaliser(sansGras(e.titre));
      e.nTout = e.nTitre + ' ' + normaliser(sansGras(e.texte || ''));
      index.push(e);
    };
    CAP.lexique.forEach(m => ajouter({ type: 'lexique', titre: m.mot, texte: m.definition, mot: m }));
    CAP.formulaire.forEach(th => th.formules.forEach(f => ajouter({
      type: 'formule', titre: f.nom, texte: [f.formule, f.unites, f.exemple].filter(Boolean).join(' '), formule: f, theme: th.theme
    })));
    CAP.chapitres.forEach(ch => {
      ch.fiche.forEach((s, i) => ajouter({ type: 'fiche', titre: s.titre, texte: s.contenu.map(texteBloc).join(' '), ch, section: i }));
      ch.cartes.forEach(c => ajouter({ type: 'carte', titre: c.recto, texte: c.verso, ch, carte: c }));
      ch.questions.forEach(q => ajouter({
        type: 'question', titre: q.enonce, ch, question: q,
        texte: (q.type === 'ordre' ? q.etapes.join(' ')
          : q.type === 'etiquettes' ? CAP.schemas[q.schema].zones.map(z => z.nom).join(' ')
          : q.choix[q.bonne]) + ' ' + q.explication
      }));
    });
  }

  const GROUPES = [
    { type: 'lexique', nom: 'Lexique' },
    { type: 'formule', nom: 'Formulaire' },
    { type: 'fiche', nom: 'Fiches de cours' },
    { type: 'carte', nom: 'Cartes mémo' },
    { type: 'question', nom: 'Questions' }
  ];

  function chercher(requete) {
    const liste = termes(requete);
    if (!liste.length) return { termes: liste, groupes: [], total: 0 };
    if (!index) construire();
    const trouves = index
      .filter(e => liste.every(t => e.nTout.includes(t)))
      .map(e => {
        let score = 0;
        liste.forEach(t => {
          if (e.nTitre.includes(t)) score += 3;
          if (e.nTitre.startsWith(t) || e.nTitre.includes(' ' + t)) score += 2;
        });
        if (e.type === 'lexique' && e.nTitre === liste.join(' ')) score += 10;
        return { e, score };
      })
      .sort((a, b) => b.score - a.score);
    const groupes = GROUPES
      .map(g => Object.assign({}, g, { resultats: trouves.filter(x => x.e.type === g.type).map(x => x.e) }))
      .filter(g => g.resultats.length);
    return { termes: liste, groupes, total: trouves.length };
  }

  return { chercher, surligner, extrait, termes, normaliser };
})();
