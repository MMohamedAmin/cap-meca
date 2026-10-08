// Interface du site : navigation par #ancre et affichage des écrans.
(function () {
  const app = document.getElementById('app');
  const melanger = CAP.melanger;

  const NB_ENTRAINEMENT = 15;
  const NB_ERREURS = 20;
  const NB_CARTES_JOUR = 20;
  const NB_EXAMEN = 20;
  const NB_PIECES = 10;
  const DUREE_EXAMEN = 20 * 60 * 1000; // 1 minute par question

  // ---------- Outils ----------
  function echapper(t) {
    return String(t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  // Texte du contenu : échappé, avec **gras** autorisé.
  function fmt(t) {
    return echapper(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
  function pourcent(p) { return p === null ? '—' : p + ' %'; }
  function pluriel(n, mot) { return n + ' ' + mot + (n > 1 ? 's' : ''); }
  function noteSur20(score, total) {
    return (Math.round(score * 200 / total) / 10).toLocaleString('fr-FR');
  }
  function classeNiveau(p) {
    if (p === null) return 'niveau-aucun';
    if (p >= 80) return 'niveau-bon';
    if (p >= 50) return 'niveau-moyen';
    return 'niveau-faible';
  }
  function barre(p) {
    return `<div class="barre ${classeNiveau(p)}"><span style="width:${p === null ? 0 : p}%"></span></div>`;
  }
  function trouverChapitre(id) { return CAP.chapitres.find(c => c.id === id); }
  function lienRetour(href, texte) {
    return `<a class="retour" href="${href}">← ${echapper(texte)}</a>`;
  }
  function afficher(html) {
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }
  function dateCourte(d) {
    return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }
  function minutesSecondes(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }
  // Choix d'une question prêts à l'affichage (les QCM sont mélangés, pas les Vrai/Faux).
  function preparerChoix(q) {
    const choix = q.choix.map((t, k) => ({ texte: t, juste: k === q.bonne, k }));
    return q.type === 'vf' ? choix : melanger(choix);
  }

  // Photo d'une question, avec son crédit. Un appui l'ouvre en grand.
  function illustration(q, petite) {
    const im = q.image && CAP.images[q.image];
    if (!im) return '';
    return `
      <figure class="illustration${petite ? ' petite' : ''}">
        <a href="${echapper(im.fichier)}" target="_blank" rel="noopener"><img src="${echapper(im.fichier)}" alt="${echapper(im.description)}"></a>
        <figcaption>Photo : ${echapper(im.auteur)} · ${echapper(im.licence)}</figcaption>
      </figure>`;
  }

  // Séance en cours qui ne doit pas être quittée par erreur (examen blanc).
  let garde = null;      // fonction qui renvoie true si on peut quitter
  let nettoyer = null;   // appelée quand on change d'écran (arrêt du chrono…)

  // ---------- Accueil ----------
  function vueAccueil() {
    const g = CAP.stats.global();
    const serie = CAP.stockage.serie();
    const faibles = CAP.stats.pointsFaibles(3);
    const jour = CAP.series.cartesDuJour(NB_CARTES_JOUR);
    const nbErreurs = CAP.series.nbErreurs();

    const cartesChapitres = CAP.chapitres.map(ch => {
      const s = CAP.stats.chapitre(ch);
      return `
        <a class="carte-chapitre" href="#/chapitre/${ch.id}">
          <span class="icone" aria-hidden="true">${ch.icone}</span>
          <span class="titre">${echapper(ch.titre)}</span>
          <span class="meta">${s.uniques}/${s.total} questions · ${pourcent(s.pourcent)}</span>
          ${barre(s.pourcent)}
        </a>`;
    }).join('');

    const blocFaibles = faibles.length ? `
      <section class="panneau">
        <h2>À retravailler</h2>
        <ul class="liste-faibles">
          ${faibles.map(f => `<li><a href="#/chapitre/${f.chapitre.id}">${echapper(f.nom)}</a>
            <span class="petit">${echapper(f.chapitre.titre)} · ${f.pourcent} %</span></li>`).join('')}
        </ul>
      </section>` : '';

    afficher(`
      <section class="intro">
        <h1>Révise ta mécanique</h1>
        <p>CAP Maintenance des véhicules · voitures particulières</p>
      </section>

      <section class="chiffres">
        <div><strong>${g.uniques}</strong><span>questions faites</span></div>
        <div><strong>${pourcent(g.pourcent)}</strong><span>de réussite</span></div>
        <div><strong>${serie}</strong><span>${serie > 1 ? 'jours' : 'jour'} d'affilée</span></div>
      </section>

      <div class="modes">
        <a class="mode mode-principal" href="#/entrainement">
          <strong>Entraînement ciblé</strong>
          <span>${NB_ENTRAINEMENT} questions, surtout sur tes points faibles</span>
        </a>
        <a class="mode" href="#/cartes">
          <strong>Cartes du jour</strong>
          <span>${jour.dues ? pluriel(jour.dues, 'carte') + ' à revoir' : jour.nouvelles ? 'Nouvelles cartes' : 'Rien à revoir'}</span>
        </a>
        <a class="mode" href="#/erreurs">
          <strong>Mes erreurs</strong>
          <span>${nbErreurs ? pluriel(nbErreurs, 'question') + ' à corriger' : 'Aucune erreur'}</span>
        </a>
        <a class="mode" href="#/examen">
          <strong>Examen blanc</strong>
          <span>${NB_EXAMEN} questions · ${DUREE_EXAMEN / 60000} min</span>
        </a>
        <a class="mode" href="#/pieces">
          <strong>Reconnaître les pièces</strong>
          <span>${CAP.series.nbPieces()} photos de pièces</span>
        </a>
        <a class="mode" href="#/melange">
          <strong>Quiz mélangé</strong>
          <span>20 questions au hasard</span>
        </a>
      </div>

      ${blocFaibles}

      <h2 class="titre-section">Chapitres</h2>
      <div class="grille-chapitres">${cartesChapitres}</div>
    `);
  }

  // ---------- Chapitre ----------
  function vueChapitre(ch) {
    const s = CAP.stats.chapitre(ch);
    const st = CAP.stats.sousThemes(ch);
    afficher(`
      ${lienRetour('#/', 'Chapitres')}
      <h1><span aria-hidden="true">${ch.icone}</span> ${echapper(ch.titre)}</h1>
      <p class="description">${fmt(ch.description)}</p>

      <div class="actions">
        <a class="action" href="#/chapitre/${ch.id}/fiche"><strong>Fiche de cours</strong><span>Lire le résumé</span></a>
        <a class="action" href="#/chapitre/${ch.id}/cartes"><strong>Cartes mémo</strong><span>${CAP.stats.cartesMaitrisees(ch)}/${ch.cartes.length} maîtrisées</span></a>
        <a class="action" href="#/chapitre/${ch.id}/quiz"><strong>Quiz</strong><span>${pourcent(s.pourcent)} de réussite</span></a>
      </div>

      <section class="panneau">
        <h2>Par sous-thème</h2>
        ${st.map(x => `
          <div class="ligne-theme">
            <div class="ligne-theme-haut"><span>${echapper(x.nom)}</span><span class="petit">${pourcent(x.pourcent)}</span></div>
            ${barre(x.pourcent)}
          </div>`).join('')}
      </section>
    `);
  }

  // ---------- Fiche ----------
  function rendreBloc(b) {
    if (typeof b === 'string') return `<p>${fmt(b)}</p>`;
    if (b.liste) return `<ul>${b.liste.map(i => `<li>${fmt(i)}</li>`).join('')}</ul>`;
    if (b.formule) return `<div class="formule">${fmt(b.formule)}</div>`;
    if (b.retenir) return `<div class="encadre retenir"><span class="encadre-titre">À retenir</span>${fmt(b.retenir)}</div>`;
    if (b.attention) return `<div class="encadre attention"><span class="encadre-titre">Attention</span>${fmt(b.attention)}</div>`;
    return '';
  }

  function vueFiche(ch) {
    afficher(`
      ${lienRetour('#/chapitre/' + ch.id, ch.titre)}
      <h1>Fiche : ${echapper(ch.titre)}</h1>
      <nav class="sommaire">
        ${ch.fiche.map((s, i) => `<a href="#" data-section="${i}">${echapper(s.titre)}</a>`).join('')}
      </nav>
      ${ch.fiche.map((s, i) => `
        <section class="section-fiche" id="section-${i}">
          <span class="etiquette">${echapper(ch.sousThemes[s.sousTheme] || '')}</span>
          <h2>${echapper(s.titre)}</h2>
          ${s.contenu.map(rendreBloc).join('')}
        </section>`).join('')}
      <div class="pied-actions">
        <a class="bouton" href="#/chapitre/${ch.id}/cartes">Cartes mémo</a>
        <a class="bouton bouton-principal" href="#/chapitre/${ch.id}/quiz">Faire le quiz</a>
      </div>
    `);
    app.querySelectorAll('[data-section]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('section-' + a.dataset.section).scrollIntoView({ behavior: 'smooth' });
    }));
  }

  // ---------- Cartes mémo ----------
  // o.paquet : [{ c, ch }] ; o.retour : lien HTML ; o.seance : identifiant enregistré ;
  // o.plusieursChapitres : affiche le chapitre sur la carte ; o.refaire : relance une série.
  function lancerCartes(o) {
    const paquet = o.paquet;
    let i = 0;
    const ratees = [];

    function montrer() {
      const { c, ch } = paquet[i];
      const etat = CAP.stockage.carte(c.id);
      afficher(`
        ${o.retour}
        <div class="progression-seance">
          <span>Carte ${i + 1} / ${paquet.length} · ${etat ? 'boîte ' + etat.boite + '/' + CAP.stockage.BOITE_MAX : 'nouvelle'}</span>
          <div class="barre"><span style="width:${i * 100 / paquet.length}%"></span></div>
        </div>
        <button class="carte-memo" id="carte" aria-live="polite">
          <span class="etiquette">${o.plusieursChapitres ? echapper(ch.titre) + ' · ' : ''}${echapper(ch.sousThemes[c.sousTheme] || '')}</span>
          <span class="carte-face" id="face">${fmt(c.recto)}</span>
          <span class="carte-aide" id="aide">Touche pour voir la réponse</span>
        </button>
        <div class="boutons-carte" id="boutons" hidden>
          <button class="bouton bouton-rouge" data-sais="0">Je ne savais pas</button>
          <button class="bouton bouton-vert" data-sais="1">Je savais</button>
        </div>
      `);
      const carte = document.getElementById('carte');
      carte.addEventListener('click', () => {
        if (carte.classList.contains('retournee')) return;
        carte.classList.add('retournee');
        document.getElementById('face').innerHTML = fmt(c.verso);
        document.getElementById('aide').textContent = 'Réponse';
        document.getElementById('boutons').hidden = false;
      });
      app.querySelectorAll('[data-sais]').forEach(b => b.addEventListener('click', () => {
        const sais = b.dataset.sais === '1';
        CAP.stockage.reponseCarte(c.id, sais);
        if (!sais) ratees.push(paquet[i]);
        i++;
        if (i < paquet.length) montrer(); else fin();
      }));
    }

    function fin() {
      const sues = paquet.length - ratees.length;
      CAP.stockage.finSeance({ type: 'cartes', chapitre: o.seance, score: sues, total: paquet.length });
      afficher(`
        ${o.retour}
        <section class="resultat">
          <h1>Série terminée</h1>
          <p class="gros-score">${sues} / ${paquet.length}</p>
          <p>${ratees.length ? `Tu as ${pluriel(ratees.length, 'carte')} à revoir.` : 'Tu les connais toutes, bravo !'}</p>
          <p class="petit">Les cartes sues reviendront plus tard, les cartes ratées dès demain.</p>
        </section>
        <div class="pied-actions">
          ${ratees.length ? '<button class="bouton bouton-principal" id="revoir">Revoir les cartes ratées</button>' : ''}
          <button class="bouton" id="refaire">${echapper(o.libelleRefaire || 'Refaire tout le paquet')}</button>
        </div>
      `);
      const revoir = document.getElementById('revoir');
      if (revoir) revoir.addEventListener('click', () => lancerCartes(Object.assign({}, o, { paquet: melanger(ratees) })));
      document.getElementById('refaire').addEventListener('click', o.refaire);
    }

    montrer();
  }

  function vueCartes(ch) {
    lancerCartes({
      paquet: melanger(ch.cartes).map(c => ({ c, ch })),
      retour: lienRetour('#/chapitre/' + ch.id, ch.titre),
      seance: ch.id,
      refaire: () => vueCartes(ch)
    });
  }

  function vueCartesDuJour() {
    const retour = lienRetour('#/', 'Accueil');
    const jour = CAP.series.cartesDuJour(NB_CARTES_JOUR);
    if (!jour.paquet.length) {
      afficher(`
        ${retour}
        <section class="resultat">
          <h1>Cartes du jour</h1>
          <p>Aucune carte à revoir aujourd'hui. Reviens demain !</p>
        </section>
        <div class="pied-actions"><a class="bouton bouton-principal" href="#/entrainement">Faire un entraînement ciblé</a></div>
      `);
      return;
    }
    lancerCartes({
      paquet: jour.paquet,
      retour,
      seance: 'jour',
      plusieursChapitres: true,
      libelleRefaire: 'Continuer les cartes du jour',
      refaire: vueCartesDuJour
    });
  }

  // ---------- Quiz ----------
  // o.items : [{ q, ch }] ; o.retour : lien HTML ; o.seance : identifiant enregistré ;
  // o.plusieursChapitres ; o.sansEtiquette : cache le thème (il donnerait un indice) ;
  // o.bandeau : texte au-dessus des questions ;
  // o.liensFin : HTML ajouté sous le résultat ; o.refaire : relance une série.
  function lancerQuiz(o) {
    const nb = o.items.length;
    const serie = o.items.map(({ q, ch }) => ({ q, ch, choix: preparerChoix(q) }));
    let i = 0, score = 0;
    const erreurs = [];

    function montrer() {
      const item = serie[i];
      afficher(`
        ${o.retour}
        <div class="progression-seance">
          <span>Question ${i + 1} / ${nb}</span>
          <div class="barre"><span style="width:${i * 100 / nb}%"></span></div>
        </div>
        ${o.bandeau ? `<p class="bandeau">${o.bandeau}</p>` : ''}
        <section class="question">
          ${o.sansEtiquette ? '' : `<span class="etiquette">${o.plusieursChapitres ? echapper(item.ch.titre) + ' · ' : ''}${echapper(item.ch.sousThemes[item.q.sousTheme] || '')}</span>`}
          <h2>${fmt(item.q.enonce)}</h2>
          ${illustration(item.q)}
          <div class="liste-choix">
            ${item.choix.map((c, k) => `<button class="choix" data-k="${k}">${fmt(c.texte)}</button>`).join('')}
          </div>
          <div class="retour-reponse" id="retour" hidden></div>
          <button class="bouton bouton-principal bouton-large" id="suivant" hidden>
            ${i + 1 < nb ? 'Question suivante' : 'Voir mon résultat'}
          </button>
        </section>
      `);
      app.querySelectorAll('.choix').forEach(b => b.addEventListener('click', () => repondre(+b.dataset.k)));
      document.getElementById('suivant').addEventListener('click', () => {
        i++;
        if (i < nb) montrer(); else fin();
      });
    }

    function repondre(k) {
      const item = serie[i];
      const juste = item.choix[k].juste;
      if (juste) score++; else erreurs.push(item);
      CAP.stockage.reponseQuestion(item.q.id, juste);

      app.querySelectorAll('.choix').forEach((b, idx) => {
        b.disabled = true;
        if (item.choix[idx].juste) b.classList.add('bon');
        else if (idx === k) b.classList.add('faux');
      });
      const r = document.getElementById('retour');
      r.className = 'retour-reponse ' + (juste ? 'retour-bon' : 'retour-faux');
      r.innerHTML = `<strong>${juste ? 'Bonne réponse !' : 'Raté.'}</strong> ${fmt(item.q.explication)}`;
      r.hidden = false;
      const s = document.getElementById('suivant');
      s.hidden = false;
      s.focus();
    }

    function fin() {
      CAP.stockage.finSeance({ type: 'quiz', chapitre: o.seance, score, total: nb });
      afficher(`
        ${o.retour}
        <section class="resultat">
          <h1>Résultat</h1>
          <p class="gros-score">${noteSur20(score, nb)} / 20</p>
          <p>${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} sur ${nb}</p>
        </section>
        ${erreurs.length ? `
          <section class="panneau">
            <h2>Tes erreurs à revoir</h2>
            ${erreurs.map(e => `
              <div class="erreur">
                <p class="erreur-question">${fmt(e.q.enonce)}</p>
                ${illustration(e.q, true)}
                <p class="erreur-reponse">✔ ${fmt(e.q.choix[e.q.bonne])}</p>
                <p class="petit">${fmt(e.q.explication)}</p>
              </div>`).join('')}
          </section>` : ''}
        <div class="pied-actions">
          ${o.liensFin || ''}
          <button class="bouton bouton-principal" id="refaire">${echapper(o.libelleRefaire || 'Nouveau quiz')}</button>
        </div>
      `);
      document.getElementById('refaire').addEventListener('click', o.refaire);
    }

    if (!nb) { afficher(`${o.retour}<p>Pas encore de questions ici.</p>`); return; }
    montrer();
  }

  function vueQuiz(ch) {
    lancerQuiz({
      items: melanger(ch.questions).slice(0, 10).map(q => ({ q, ch })),
      retour: lienRetour('#/chapitre/' + ch.id, ch.titre),
      seance: ch.id,
      liensFin: `<a class="bouton" href="#/chapitre/${ch.id}/fiche">Relire la fiche</a>`,
      refaire: () => vueQuiz(ch)
    });
  }

  function vueMelange() {
    const toutes = CAP.chapitres.flatMap(ch => ch.questions.map(q => ({ q, ch })));
    lancerQuiz({
      items: melanger(toutes).slice(0, 20),
      retour: lienRetour('#/', 'Accueil'),
      seance: 'melange',
      plusieursChapitres: true,
      refaire: vueMelange
    });
  }

  function vueEntrainement() {
    const { items, cibles } = CAP.series.ciblee(NB_ENTRAINEMENT);
    const noms = cibles.slice(0, 3).map(s => '<strong>' + echapper(s.nom) + '</strong>');
    const bandeau = cibles.length
      ? `Ciblé sur : ${noms.join(', ')}${cibles.length > 3 ? ` et ${cibles.length - 3} autre${cibles.length > 4 ? 's' : ''}` : ''}.`
      : 'Pas encore de point faible repéré : place aux questions que tu n\'as jamais vues.';
    lancerQuiz({
      items,
      retour: lienRetour('#/', 'Accueil'),
      seance: 'entrainement',
      plusieursChapitres: true,
      bandeau,
      liensFin: '<a class="bouton" href="#/progression">Voir ma progression</a>',
      libelleRefaire: 'Nouvel entraînement',
      refaire: vueEntrainement
    });
  }

  function vueErreurs() {
    const retour = lienRetour('#/', 'Accueil');
    const items = CAP.series.erreurs(NB_ERREURS);
    if (!items.length) {
      afficher(`
        ${retour}
        <section class="resultat">
          <h1>Mes erreurs</h1>
          <p>Aucune erreur à corriger. Toutes les questions ratées ont été réussies depuis.</p>
        </section>
        <div class="pied-actions"><a class="bouton bouton-principal" href="#/entrainement">Faire un entraînement ciblé</a></div>
      `);
      return;
    }
    lancerQuiz({
      items,
      retour,
      seance: 'erreurs',
      plusieursChapitres: true,
      bandeau: 'Les questions que tu as ratées la dernière fois. Une question réussie sort de la liste.',
      libelleRefaire: 'Continuer',
      refaire: vueErreurs
    });
  }

  function vuePieces() {
    lancerQuiz({
      items: CAP.series.pieces(NB_PIECES),
      retour: lienRetour('#/', 'Accueil'),
      seance: 'pieces',
      plusieursChapitres: true,
      sansEtiquette: true,
      bandeau: 'Regarde bien la photo. Touche-la pour l\'agrandir.',
      liensFin: '<a class="bouton" href="#/credits">Crédits photos</a>',
      libelleRefaire: 'Nouvelles photos',
      refaire: vuePieces
    });
  }

  // ---------- Crédits photos ----------
  function vueCredits() {
    const images = Object.values(CAP.images);
    afficher(`
      ${lienRetour('#/', 'Accueil')}
      <h1>Crédits photos</h1>
      <p class="description">Les photos viennent de Wikimedia Commons. Elles sont dans le domaine public ou sous licence libre Creative Commons, qui permet de les réutiliser en citant leur auteur.</p>
      <section class="panneau">
        ${images.map(im => `
          <div class="ligne-credit">
            <img src="${echapper(im.fichier)}" alt="${echapper(im.description)}" loading="lazy">
            <div>
              <strong>${echapper(im.auteur)}</strong>
              <span class="petit">${im.licenceUrl
                ? `<a href="${echapper(im.licenceUrl)}" target="_blank" rel="noopener">${echapper(im.licence)}</a>`
                : echapper(im.licence)} · <a href="${echapper(im.source)}" target="_blank" rel="noopener">voir la source</a></span>
            </div>
          </div>`).join('')}
      </section>
    `);
  }

  // ---------- Examen blanc ----------
  function vueExamen() {
    const notes = CAP.stats.examens().slice(-3).reverse();
    afficher(`
      ${lienRetour('#/', 'Accueil')}
      <h1>Examen blanc</h1>
      <section class="panneau">
        <ul class="regles">
          <li><strong>${NB_EXAMEN} questions</strong> prises dans tous les chapitres.</li>
          <li><strong>${DUREE_EXAMEN / 60000} minutes</strong> : la copie est rendue toute seule à la fin du temps.</li>
          <li>Pas de correction pendant l'épreuve. Tu peux revenir sur une question.</li>
          <li>Une question sans réponse compte comme fausse.</li>
          <li>Note sur 20 et correction détaillée à la fin.</li>
        </ul>
      </section>
      <button class="bouton bouton-principal bouton-large" id="commencer">Commencer l'examen</button>
      ${notes.length ? `
        <section class="panneau">
          <h2>Tes derniers examens</h2>
          <ul class="liste-seances">${notes.map(n => `<li><span>${dateCourte(n.date)}</span><strong>${n.note.toLocaleString('fr-FR')} / 20</strong></li>`).join('')}</ul>
        </section>` : ''}
    `);
    document.getElementById('commencer').addEventListener('click', passerExamen);
  }

  function passerExamen() {
    const serie = CAP.series.examen(NB_EXAMEN).map(({ q, ch }) => ({ q, ch, choix: preparerChoix(q) }));
    const nb = serie.length;
    const reponses = new Array(nb).fill(null);
    const debut = Date.now();
    const finPrevue = debut + DUREE_EXAMEN;
    let i = 0;

    const minuteur = setInterval(tic, 1000);
    nettoyer = () => clearInterval(minuteur);
    garde = () => confirm('Quitter l\'examen ? Tes réponses seront perdues.');

    function tic() {
      const reste = finPrevue - Date.now();
      const chrono = document.getElementById('chrono');
      if (chrono) {
        chrono.textContent = minutesSecondes(reste);
        chrono.classList.toggle('urgent', reste < 60000);
      }
      if (reste <= 0) rendre(true);
    }

    function montrer() {
      const item = serie[i];
      afficher(`
        <div class="barre-examen">
          <span>Question ${i + 1} / ${nb}</span>
          <span class="chrono" id="chrono" role="timer" aria-label="Temps restant">${minutesSecondes(finPrevue - Date.now())}</span>
        </div>
        <section class="question">
          <span class="etiquette">${echapper(item.ch.titre)}</span>
          <h2>${fmt(item.q.enonce)}</h2>
          ${illustration(item.q)}
          <div class="liste-choix">
            ${item.choix.map((c, k) => `<button class="choix${reponses[i] === k ? ' choisi' : ''}" data-k="${k}" aria-pressed="${reponses[i] === k}">${fmt(c.texte)}</button>`).join('')}
          </div>
          <div class="nav-examen">
            <button class="bouton" id="precedent" ${i === 0 ? 'disabled' : ''}>← Précédente</button>
            ${i + 1 < nb
              ? '<button class="bouton bouton-principal" id="suivante">Suivante →</button>'
              : '<button class="bouton bouton-principal" id="rendre-bas">Rendre ma copie</button>'}
          </div>
        </section>
        <section class="panneau">
          <h2>Toutes les questions</h2>
          <div class="grille-examen">
            ${serie.map((_, k) => `<button class="pastille${reponses[k] !== null ? ' repondue' : ''}${k === i ? ' courante' : ''}" data-aller="${k}" aria-label="Question ${k + 1}">${k + 1}</button>`).join('')}
          </div>
          <p class="petit">${reponses.filter(r => r !== null).length} / ${nb} réponses données</p>
          <button class="bouton bouton-large" id="rendre">Rendre ma copie</button>
        </section>
      `);
      app.querySelectorAll('.choix').forEach(b => b.addEventListener('click', () => {
        reponses[i] = +b.dataset.k;
        app.querySelectorAll('.choix').forEach(x => {
          const choisi = x === b;
          x.classList.toggle('choisi', choisi);
          x.setAttribute('aria-pressed', choisi);
        });
        const pastille = app.querySelector(`[data-aller="${i}"]`);
        pastille.classList.add('repondue');
        app.querySelector('.grille-examen + .petit').textContent =
          `${reponses.filter(r => r !== null).length} / ${nb} réponses données`;
      }));
      const aller = k => { i = k; montrer(); };
      document.getElementById('precedent').addEventListener('click', () => aller(i - 1));
      const suivante = document.getElementById('suivante');
      if (suivante) suivante.addEventListener('click', () => aller(i + 1));
      app.querySelectorAll('[data-aller]').forEach(b => b.addEventListener('click', () => aller(+b.dataset.aller)));
      app.querySelectorAll('#rendre, #rendre-bas').forEach(b => b.addEventListener('click', () => rendre(false)));
    }

    function rendre(tempsEcoule) {
      if (!tempsEcoule) {
        const vides = reponses.filter(r => r === null).length;
        const message = vides
          ? `Il te reste ${pluriel(vides, 'question')} sans réponse. Rendre ta copie quand même ?`
          : 'Rendre ta copie ?';
        if (!confirm(message)) return;
      }
      clearInterval(minuteur);
      nettoyer = null;
      garde = null;

      const duree = Math.min(Date.now(), finPrevue) - debut;
      const resultats = serie.map((item, k) => {
        const juste = reponses[k] !== null && item.choix[reponses[k]].juste;
        CAP.stockage.reponseQuestion(item.q.id, juste);
        return { item, juste, reponse: reponses[k] === null ? null : item.choix[reponses[k]] };
      });
      const score = resultats.filter(r => r.juste).length;
      CAP.stockage.finSeance({ type: 'examen', chapitre: 'examen', score, total: nb, duree });

      const parChapitre = CAP.chapitres.map(ch => {
        const r = resultats.filter(x => x.item.ch === ch);
        return { ch, total: r.length, ok: r.filter(x => x.juste).length };
      }).filter(x => x.total);
      const fautes = resultats.filter(r => !r.juste);

      afficher(`
        ${lienRetour('#/', 'Accueil')}
        <section class="resultat">
          <h1>${tempsEcoule ? 'Temps écoulé !' : 'Copie rendue'}</h1>
          <p class="gros-score">${noteSur20(score, nb)} / 20</p>
          <p>${score} sur ${nb} · en ${minutesSecondes(duree)} min</p>
        </section>
        <section class="panneau">
          <h2>Par chapitre</h2>
          ${parChapitre.map(x => {
            const p = Math.round(x.ok * 100 / x.total);
            return `
              <div class="ligne-theme">
                <div class="ligne-theme-haut"><span>${x.ch.icone} ${echapper(x.ch.titre)}</span><span class="petit">${x.ok} / ${x.total}</span></div>
                ${barre(p)}
              </div>`;
          }).join('')}
        </section>
        ${fautes.length ? `
          <section class="panneau">
            <h2>Correction de tes erreurs</h2>
            ${fautes.map(r => `
              <div class="erreur">
                <p class="erreur-question">${fmt(r.item.q.enonce)}</p>
                ${illustration(r.item.q, true)}
                <p class="erreur-choisie">${r.reponse ? '✘ ' + fmt(r.reponse.texte) : '✘ Pas de réponse'}</p>
                <p class="erreur-reponse">✔ ${fmt(r.item.q.choix[r.item.q.bonne])}</p>
                <p class="petit">${fmt(r.item.q.explication)}</p>
              </div>`).join('')}
          </section>` : ''}
        <div class="pied-actions">
          ${fautes.length ? '<a class="bouton" href="#/erreurs">Revoir mes erreurs</a>' : ''}
          <button class="bouton bouton-principal" id="refaire">Nouvel examen</button>
        </div>
      `);
      document.getElementById('refaire').addEventListener('click', vueExamen);
    }

    montrer();
  }

  // ---------- Progression ----------
  const NOMS_SEANCES = {
    melange: 'Quiz mélangé',
    entrainement: 'Entraînement ciblé',
    erreurs: 'Révision des erreurs',
    jour: 'Cartes du jour',
    pieces: 'Reconnaître les pièces',
    examen: 'Examen blanc'
  };
  function libelleSeance(s) {
    if (NOMS_SEANCES[s.chapitre]) return NOMS_SEANCES[s.chapitre];
    const ch = trouverChapitre(s.chapitre);
    return (s.type === 'quiz' ? 'Quiz' : 'Cartes') + ' · ' + (ch ? ch.titre : s.chapitre);
  }

  function blocActivite() {
    const jours = CAP.stats.activite(5);
    const actifs = jours.filter(j => j.seances).length;
    const aujourdhui = CAP.stockage.aujourdhui();
    return `
      <section class="panneau">
        <h2>Activité des 5 dernières semaines</h2>
        <div class="calendrier" role="img" aria-label="${pluriel(actifs, 'jour')} de révision sur 5 semaines">
          ${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(l => `<span class="cal-entete">${l}</span>`).join('')}
          ${jours.map(j => {
            const niveau = j.futur ? 'futur' : 'n' + Math.min(j.seances, 3);
            const titre = j.futur ? '' : `${dateCourte(j.jour + 'T12:00')} : ${pluriel(j.seances, 'séance')}`;
            return `<span class="cal-jour ${niveau}${j.jour === aujourdhui ? ' auj' : ''}" title="${titre}"></span>`;
          }).join('')}
        </div>
        <p class="petit">${pluriel(actifs, 'jour')} de révision · série en cours : ${pluriel(CAP.stockage.serie(), 'jour')}</p>
      </section>`;
  }

  function blocExamens() {
    const examens = CAP.stats.examens();
    if (!examens.length) {
      return `
        <section class="panneau">
          <h2>Examens blancs</h2>
          <p class="petit">Aucun examen blanc pour l'instant.</p>
          <a class="bouton" href="#/examen">Passer un examen blanc</a>
        </section>`;
    }
    const derniers = examens.slice(-6);
    const moyenne = Math.round(examens.reduce((t, e) => t + e.note, 0) / examens.length * 10) / 10;
    const meilleure = Math.max(...examens.map(e => e.note));
    return `
      <section class="panneau">
        <h2>Examens blancs</h2>
        <div class="histo" role="img" aria-label="Notes des ${derniers.length} derniers examens">
          ${derniers.map(e => `
            <div class="histo-col">
              <span class="histo-note">${e.note.toLocaleString('fr-FR')}</span>
              <div class="histo-piste"><span class="${classeNiveau(e.note * 5)}" style="height:${e.note * 5}%"></span></div>
              <span class="histo-date">${dateCourte(e.date)}</span>
            </div>`).join('')}
        </div>
        <p class="petit">${pluriel(examens.length, 'examen')} · moyenne ${moyenne.toLocaleString('fr-FR')} / 20 · meilleure note ${meilleure.toLocaleString('fr-FR')} / 20</p>
      </section>`;
  }

  function blocCartes() {
    const boites = CAP.stats.boites();
    const total = boites.reduce((a, b) => a + b, 0);
    const jour = CAP.series.cartesDuJour(NB_CARTES_JOUR);
    const libelles = ['Nouvelles', 'Boîte 1', 'Boîte 2', 'Boîte 3', 'Boîte 4', 'Boîte 5'];
    return `
      <section class="panneau">
        <h2>Cartes mémo</h2>
        <p class="petit">Une carte sue monte d'une boîte et revient de plus en plus tard (1, 2, 4, 8 puis 16 jours). Une carte ratée retourne en boîte 1.</p>
        ${boites.map((n, k) => `
          <div class="ligne-boite">
            <span>${libelles[k]}</span>
            <div class="barre boite-${k}"><span style="width:${total ? n * 100 / total : 0}%"></span></div>
            <span class="petit">${n}</span>
          </div>`).join('')}
        <a class="bouton" href="#/cartes">Cartes du jour${jour.dues ? ' (' + jour.dues + ' à revoir)' : ''}</a>
      </section>`;
  }

  function vueProgression() {
    const g = CAP.stats.global();
    const faibles = CAP.stats.pointsFaibles(8);
    const seances = CAP.stockage.seances().slice(-10).reverse();
    const nbErreurs = CAP.series.nbErreurs();
    afficher(`
      <h1>Ma progression</h1>

      <section class="chiffres chiffres-4">
        <div><strong>${pourcent(g.pourcent)}</strong><span>de réussite</span></div>
        <div><strong>${g.uniques}/${g.total}</strong><span>questions vues</span></div>
        <div><strong>${CAP.stockage.serie()}</strong><span>jours d'affilée</span></div>
        <a href="#/erreurs"><strong>${nbErreurs}</strong><span>erreurs à corriger</span></a>
      </section>

      ${blocActivite()}
      ${blocExamens()}

      <section class="panneau">
        <h2>Points faibles</h2>
        ${faibles.length ? `<ul class="liste-faibles">${faibles.map(f => `
          <li><a href="#/chapitre/${f.chapitre.id}">${echapper(f.nom)}</a>
          <span class="petit">${echapper(f.chapitre.titre)} · ${f.pourcent} %</span></li>`).join('')}</ul>
          <a class="bouton bouton-principal" href="#/entrainement">S'entraîner sur ces points</a>`
        : '<p class="petit">Rien à signaler pour l\'instant. Fais quelques quiz pour que le site repère tes points faibles.</p>'}
      </section>

      <section class="panneau">
        <h2>Par chapitre</h2>
        ${CAP.chapitres.map(ch => {
          const s = CAP.stats.chapitre(ch);
          return `
            <a class="ligne-theme lien-ligne" href="#/chapitre/${ch.id}">
              <div class="ligne-theme-haut"><span>${ch.icone} ${echapper(ch.titre)}</span><span class="petit">${pourcent(s.pourcent)}</span></div>
              ${barre(s.pourcent)}
              <span class="petit">${s.uniques}/${s.total} questions vues · ${CAP.stats.cartesMaitrisees(ch)}/${ch.cartes.length} cartes maîtrisées</span>
            </a>`;
        }).join('')}
      </section>

      ${blocCartes()}

      <section class="panneau">
        <h2>Dernières séances</h2>
        ${seances.length ? `<ul class="liste-seances">${seances.map(s => `
          <li><span>${dateCourte(s.date)} · ${echapper(libelleSeance(s))}</span>
          <strong>${s.score}/${s.total}</strong></li>`).join('')}</ul>`
        : '<p class="petit">Aucune séance pour l\'instant.</p>'}
      </section>

      <section class="panneau">
        <h2>Sauvegarde</h2>
        <p class="petit">Ta progression est enregistrée dans ce navigateur. Exporte-la pour la garder ou la transférer sur un autre appareil.</p>
        <div class="pied-actions">
          <button class="bouton" id="exporter">Exporter</button>
          <label class="bouton">Importer<input type="file" id="importer" accept="application/json,.json" hidden></label>
          <button class="bouton bouton-rouge" id="reset">Tout effacer</button>
        </div>
      </section>
    `);

    document.getElementById('exporter').addEventListener('click', () => {
      const blob = new Blob([CAP.stockage.exporter()], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'cap-meca-progression.json';
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    document.getElementById('importer').addEventListener('change', e => {
      const fichier = e.target.files[0];
      if (!fichier) return;
      fichier.text().then(t => {
        try { CAP.stockage.importer(t); alert('Progression importée.'); vueProgression(); }
        catch (err) { alert(err.message); }
      });
    });
    document.getElementById('reset').addEventListener('click', () => {
      if (confirm('Effacer toute ta progression ? Cette action est définitive.')) {
        CAP.stockage.reinitialiser();
        vueProgression();
      }
    });
  }

  // ---------- Navigation ----------
  let hashCourant = location.hash;

  function route() {
    // Examen en cours : on demande confirmation avant de quitter.
    if (garde && location.hash !== hashCourant) {
      if (!garde()) { history.replaceState(null, '', hashCourant || '#/'); return; }
    }
    garde = null;
    if (nettoyer) { nettoyer(); nettoyer = null; }
    hashCourant = location.hash;

    const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    document.querySelectorAll('.nav a').forEach(a => {
      a.classList.toggle('actif', (p[0] || '') === a.dataset.page || (!p[0] && a.dataset.page === 'accueil'));
    });
    if (p.length === 0) return vueAccueil();
    if (p[0] === 'progression') return vueProgression();
    if (p[0] === 'melange') return vueMelange();
    if (p[0] === 'entrainement') return vueEntrainement();
    if (p[0] === 'erreurs') return vueErreurs();
    if (p[0] === 'cartes') return vueCartesDuJour();
    if (p[0] === 'examen') return vueExamen();
    if (p[0] === 'pieces') return vuePieces();
    if (p[0] === 'credits') return vueCredits();
    if (p[0] === 'chapitre') {
      const ch = trouverChapitre(p[1]);
      if (ch) {
        if (!p[2]) return vueChapitre(ch);
        if (p[2] === 'fiche') return vueFiche(ch);
        if (p[2] === 'cartes') return vueCartes(ch);
        if (p[2] === 'quiz') return vueQuiz(ch);
      }
    }
    afficher(`<h1>Page introuvable</h1><p><a href="#/">Retour à l'accueil</a></p>`);
  }

  window.addEventListener('beforeunload', e => {
    if (garde) { e.preventDefault(); e.returnValue = ''; }
  });

  // ---------- Thème clair / sombre ----------
  const CLE_THEME = 'capmeca.theme';
  function appliquerTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }
  try { appliquerTheme(localStorage.getItem(CLE_THEME)); } catch (e) { /* ignoré */ }
  document.getElementById('theme').addEventListener('click', () => {
    const actuel = document.documentElement.getAttribute('data-theme')
      || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const suivant = actuel === 'dark' ? 'light' : 'dark';
    appliquerTheme(suivant);
    try { localStorage.setItem(CLE_THEME, suivant); } catch (e) { /* ignoré */ }
  });

  window.addEventListener('hashchange', route);
  route();
})();
