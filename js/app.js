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
  // Questions « ordre » : les étapes mélangées, jamais déjà dans le bon ordre ; pos = bonne place.
  function preparerChoix(q) {
    if (q.type === 'ordre') {
      const etapes = q.etapes.map((t, pos) => ({ texte: t, pos }));
      let m = melanger(etapes);
      while (m.every((e, k) => e.pos === k)) m = melanger(etapes);
      return m;
    }
    const choix = q.choix.map((t, k) => ({ texte: t, juste: k === q.bonne, k }));
    return q.type === 'vf' ? choix : melanger(choix);
  }
  // Bonne réponse dans les corrections. S : mise en forme du texte (fmt par défaut, surlignage dans la recherche).
  function bonneReponse(q, S) {
    S = S || fmt;
    if (q.type === 'ordre') return `<ol class="erreur-reponse ordre-correct">${q.etapes.map(e => `<li>${S(e)}</li>`).join('')}</ol>`;
    return `<p class="erreur-reponse">✔ ${S(q.choix[q.bonne])}</p>`;
  }

  // Photo d'une question, avec son crédit. Un appui l'ouvre en grand.
  // differe : chargement retardé, pour les longues listes (lexique).
  function photo(cle, petite, differe) {
    const im = cle && CAP.images[cle];
    if (!im) return '';
    return `
      <figure class="illustration${petite ? ' petite' : ''}">
        <a href="${echapper(im.fichier)}" target="_blank" rel="noopener"><img src="${echapper(im.fichier)}" alt="${echapper(im.description)}"${differe ? ' loading="lazy"' : ''}></a>
        <figcaption>Photo : ${echapper(im.auteur)} · ${echapper(im.licence)}</figcaption>
      </figure>`;
  }
  function illustration(q, petite) { return photo(q.image, petite); }

  // ---------- Niveaux de difficulté ----------
  const NOMS_NIVEAUX = ['', 'Connaître', 'Comprendre et calculer', 'Diagnostiquer'];
  function badgeNiveau(n) {
    return `<span class="badge-niveau n${n}" title="${NOMS_NIVEAUX[n]}">Niveau ${n}</span>`;
  }
  // Sous-thèmes dont le niveau a monté depuis un relevé de CAP.stats.niveaux().
  function niveauxGagnes(avant) {
    const a = new Map(avant.map(n => [n.ch.id + '/' + n.id, n.niveau]));
    return CAP.stats.niveaux().filter(n => n.niveau > a.get(n.ch.id + '/' + n.id));
  }
  function panneauNiveaux(gagnes) {
    if (!gagnes.length) return '';
    return `
      <section class="panneau niveau-gagne">
        <h2>Niveau débloqué !</h2>
        <ul class="liste-faibles">
          ${gagnes.map(n => `<li><span>${echapper(n.nom)} <span class="petit">· ${echapper(n.ch.titre)}</span></span>${badgeNiveau(n.niveau)}</li>`).join('')}
        </ul>
        <p class="petit">Les prochaines séries sur ${gagnes.length > 1 ? 'ces thèmes' : 'ce thème'} contiendront des questions plus difficiles.</p>
      </section>`;
  }

  // ---------- Assistant IA : éléments communs ----------
  const AVERTISSEMENT_IA = 'Écrit par une IA : elle peut se tromper. En cas de doute, ta fiche de cours fait foi.';

  function paragraphes(t) {
    return String(t).split(/\n+/).map(p => p.trim()).filter(Boolean).map(p => `<p>${fmt(p)}</p>`).join('');
  }

  // Bouton « Signaler une erreur », qui ouvre un petit formulaire.
  // q : la question concernée ; texteIA : la réponse de l'IA signalée (facultatif).
  function zoneSignalement(conteneur, q, origine, texteIA) {
    const bloc = document.createElement('div');
    bloc.className = 'signalement';
    bloc.innerHTML = '<button class="lien-bouton" type="button">⚑ Signaler une erreur</button>';
    conteneur.appendChild(bloc);
    bloc.querySelector('button').addEventListener('click', () => {
      bloc.innerHTML = `
        <label class="champ"><span>Qu'est-ce qui ne va pas ?</span>
          <textarea rows="3" maxlength="500" placeholder="Ex. : la réponse B est aussi juste"></textarea>
        </label>
        <button class="bouton" type="button">Envoyer le signalement</button>`;
      const zone = bloc.querySelector('textarea');
      zone.focus();
      bloc.querySelector('.bouton').addEventListener('click', async e => {
        e.target.disabled = true;
        try {
          await CAP.ia.signaler(q, origine, texteIA, zone.value);
          bloc.innerHTML = '<p class="petit">Merci, c\'est signalé.</p>';
        } catch (err) {
          bloc.innerHTML = `<p class="petit">${echapper(err.message)} Ton signalement est gardé sur cet appareil.</p>`;
        }
      });
    });
  }

  // Demande quelque chose à l'IA et affiche la réponse dans conteneur.
  // demande : fonction qui renvoie (une promesse de) texte ; q : question liée, pour le signalement.
  async function afficherReponseIA(conteneur, titre, attente, demande, q) {
    conteneur.innerHTML = `<div class="reponse-ia chargement" role="status"><span class="etiquette-ia">IA</span> ${echapper(attente)}</div>`;
    try {
      const texte = await demande();
      const bloc = document.createElement('div');
      bloc.className = 'reponse-ia';
      bloc.innerHTML = `<p><span class="etiquette-ia">IA</span> <strong>${echapper(titre)}</strong></p>${paragraphes(texte)}<p class="petit">${AVERTISSEMENT_IA}</p>`;
      conteneur.replaceChildren(bloc);
      if (q) zoneSignalement(bloc, q, 'explication', texte);
    } catch (e) {
      conteneur.innerHTML = `<div class="reponse-ia erreur-ia">${echapper(e.message)} <button class="lien-bouton" type="button">Réessayer</button></div>`;
      conteneur.querySelector('.lien-bouton').addEventListener('click', () => afficherReponseIA(conteneur, titre, attente, demande, q));
    }
  }

  // Panneau « Bilan de l'IA » en fin de séance. erreurs : [{ q, ch, choisie }].
  function panneauBilanIA() {
    if (!CAP.ia.actif()) return '';
    return `
      <section class="panneau">
        <h2>Bilan de l'IA</h2>
        <div id="bilan-ia"><button class="bouton bouton-ia" type="button" id="demander-bilan">Demander mon bilan personnalisé</button></div>
      </section>`;
  }
  function brancherBilanIA(seance, score, total, erreurs) {
    const b = document.getElementById('demander-bilan');
    if (!b) return;
    b.addEventListener('click', () => afficherReponseIA(document.getElementById('bilan-ia'),
      'Bilan de ta séance', 'L\'IA analyse ta séance…',
      () => CAP.ia.bilan(seance, score, total, erreurs, CAP.stats.pointsFaibles(8))));
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
        ${CAP.ia.disponible() ? (CAP.ia.actif()
          ? '<a class="mode mode-ia" href="#/ia"><strong>Questions de l\'IA</strong><span>Inventées sur tes points faibles</span></a>'
          : '<a class="mode mode-ia" href="#/assistant"><strong>Assistant IA</strong><span>À activer avec ton code</span></a>') : ''}
        <a class="mode" href="#/melange">
          <strong>Quiz mélangé</strong>
          <span>20 questions au hasard</span>
        </a>
      </div>

      ${blocFaibles}

      <h2 class="titre-section">Chapitres</h2>
      <div class="grille-chapitres">${cartesChapitres}</div>

      <h2 class="titre-section">Outils</h2>
      <div class="modes">
        <a class="mode" href="#/formulaire"><strong>Formulaire</strong><span>Les formules à connaître</span></a>
        <a class="mode" href="#/calculs"><strong>Calculatrices</strong><span>Cylindrée, loi d'Ohm…</span></a>
        <a class="mode" href="#/lexique"><strong>Lexique</strong><span>${CAP.lexique.length} mots du métier</span></a>
        <a class="mode" href="#/recherche"><strong>Rechercher</strong><span>Dans tout le site</span></a>
        ${CAP.pwa.possible() ? '<a class="mode" href="#/installer"><strong>Installer sur mon téléphone</strong><span>Pour réviser sans connexion</span></a>' : ''}
      </div>
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
            <div class="ligne-theme-haut"><span>${echapper(x.nom)} ${badgeNiveau(CAP.stats.niveauSousTheme(ch, x.id))}</span><span class="petit">${pourcent(x.pourcent)}</span></div>
            ${barre(x.pourcent)}
          </div>`).join('')}
        <p class="petit">Niveau 1 : connaître · Niveau 2 : comprendre et calculer · Niveau 3 : diagnostiquer. Réussis les questions d'un niveau pour débloquer le suivant.</p>
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

  // section : numéro de la section à afficher directement (lien depuis la recherche).
  function vueFiche(ch, section) {
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
    const cible = section !== undefined && document.getElementById('section-' + section);
    if (cible) {
      cible.classList.add('cible');
      cible.scrollIntoView();
    }
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
  // o.sansSuivi : réponses non enregistrées dans la progression (questions de l'IA) ;
  // o.bandeau : texte au-dessus des questions ;
  // o.liensFin : HTML ajouté sous le résultat ; o.refaire : relance une série.
  function lancerQuiz(o) {
    const nb = o.items.length;
    const serie = o.items.map(({ q, ch }) => ({ q, ch, choix: preparerChoix(q) }));
    const niveauxAvant = o.sansSuivi ? null : CAP.stats.niveaux();
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
          ${badgeNiveau(CAP.stats.niveau(item.q))}
          <h2>${fmt(item.q.enonce)}</h2>
          ${illustration(item.q)}
          ${item.q.type === 'ordre' ? `
          <p class="petit">Touche les étapes dans le bon ordre. Touche une étape déjà choisie pour l'enlever.</p>
          <div class="liste-choix">
            ${item.choix.map((c, k) => `<button class="choix etape" data-k="${k}" aria-pressed="false"><span class="numero" aria-hidden="true"></span><span>${fmt(c.texte)}</span></button>`).join('')}
          </div>
          <button class="bouton bouton-principal bouton-large" id="valider-ordre" disabled>Valider l'ordre</button>` : `
          <div class="liste-choix">
            ${item.choix.map((c, k) => `<button class="choix" data-k="${k}">${fmt(c.texte)}</button>`).join('')}
          </div>`}
          <div class="retour-reponse" id="retour" hidden></div>
          <div id="zone-ia"></div>
          <button class="bouton bouton-principal bouton-large" id="suivant" hidden>
            ${i + 1 < nb ? 'Question suivante' : 'Voir mon résultat'}
          </button>
        </section>
      `);
      if (item.q.type === 'ordre') brancherOrdre(item);
      else app.querySelectorAll('.choix').forEach(b => b.addEventListener('click', () => repondre(+b.dataset.k)));
      document.getElementById('suivant').addEventListener('click', () => {
        i++;
        if (i < nb) montrer(); else fin();
      });
    }

    function repondre(k) {
      const item = serie[i];
      const juste = item.choix[k].juste;
      item.choisie = item.choix[k].texte;
      app.querySelectorAll('.choix').forEach((b, idx) => {
        b.disabled = true;
        if (item.choix[idx].juste) b.classList.add('bon');
        else if (idx === k) b.classList.add('faux');
      });
      conclure(item, juste);
    }

    // Remettre dans l'ordre : l'élève touche les étapes une à une, elles se numérotent.
    function brancherOrdre(item) {
      const ordre = [];
      const boutons = [...app.querySelectorAll('.etape')];
      const valider = document.getElementById('valider-ordre');
      const majNumeros = () => {
        boutons.forEach((b, k) => {
          const place = ordre.indexOf(k);
          b.querySelector('.numero').textContent = place >= 0 ? place + 1 : '';
          b.classList.toggle('choisi', place >= 0);
          b.setAttribute('aria-pressed', place >= 0);
        });
        valider.disabled = ordre.length !== boutons.length;
      };
      boutons.forEach((b, k) => b.addEventListener('click', () => {
        const place = ordre.indexOf(k);
        if (place >= 0) ordre.splice(place, 1); else ordre.push(k);
        majNumeros();
      }));
      valider.addEventListener('click', () => {
        const juste = ordre.every((k, place) => item.choix[k].pos === place);
        boutons.forEach((b, k) => {
          b.disabled = true;
          b.classList.remove('choisi');
          b.classList.add(item.choix[k].pos === ordre.indexOf(k) ? 'bon' : 'faux');
        });
        valider.hidden = true;
        item.choisie = ordre.map(k => item.choix[k].texte).join(' → ');
        conclure(item, juste);
      });
    }

    // Suite commune à tous les types de questions : score, progression, correction.
    function conclure(item, juste) {
      if (juste) score++; else erreurs.push(item);
      if (!o.sansSuivi) CAP.stockage.reponseQuestion(item.q.id, juste);

      const r = document.getElementById('retour');
      r.className = 'retour-reponse ' + (juste ? 'retour-bon' : 'retour-faux');
      r.innerHTML = `<strong>${juste ? 'Bonne réponse !' : 'Raté.'}</strong> ${fmt(item.q.explication)}`
        + (!juste && item.q.type === 'ordre' ? `<p class="titre-ordre">Le bon ordre :</p>${bonneReponse(item.q)}` : '');
      r.hidden = false;

      const zoneIA = document.getElementById('zone-ia');
      if (!juste && CAP.ia.actif() && item.q.type !== 'ordre') {
        const cadre = document.createElement('div');
        cadre.innerHTML = '<button class="bouton bouton-ia" type="button">Explique-moi mon erreur</button>';
        zoneIA.appendChild(cadre);
        cadre.querySelector('button').addEventListener('click', () => afficherReponseIA(cadre,
          'Pourquoi c\'est faux', 'L\'IA prépare une explication…',
          () => CAP.ia.expliquer(item.q, item.ch, item.choisie), item.q));
      }
      if (item.q.ia) zoneSignalement(zoneIA, item.q, 'question');
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
        ${niveauxAvant ? panneauNiveaux(niveauxGagnes(niveauxAvant)) : ''}
        ${panneauBilanIA()}
        ${erreurs.length ? `
          <section class="panneau">
            <h2>Tes erreurs à revoir</h2>
            ${erreurs.map(e => `
              <div class="erreur">
                <p class="erreur-question">${fmt(e.q.enonce)}</p>
                ${illustration(e.q, true)}
                ${bonneReponse(e.q)}
                <p class="petit">${fmt(e.q.explication)}</p>
              </div>`).join('')}
          </section>` : ''}
        <div class="pied-actions">
          ${o.liensFin || ''}
          <button class="bouton bouton-principal" id="refaire">${echapper(o.libelleRefaire || 'Nouveau quiz')}</button>
        </div>
      `);
      document.getElementById('refaire').addEventListener('click', o.refaire);
      brancherBilanIA(libelleSeance({ type: 'quiz', chapitre: o.seance }), score, nb,
        erreurs.filter(e => e.q.type !== 'ordre').map(e => ({ q: e.q, ch: e.ch, choisie: e.choisie })));
    }

    if (!nb) { afficher(`${o.retour}<p>Pas encore de questions ici.</p>`); return; }
    montrer();
  }

  function vueQuiz(ch) {
    lancerQuiz({
      items: CAP.series.adaptee(ch.questions.map(q => ({ q, ch })), 10),
      retour: lienRetour('#/chapitre/' + ch.id, ch.titre),
      seance: ch.id,
      liensFin: `<a class="bouton" href="#/chapitre/${ch.id}/fiche">Relire la fiche</a>`,
      refaire: () => vueQuiz(ch)
    });
  }

  function vueMelange() {
    const toutes = CAP.chapitres.flatMap(ch => ch.questions.map(q => ({ q, ch })));
    lancerQuiz({
      items: CAP.series.adaptee(toutes, 20),
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
    const niveauxAvant = CAP.stats.niveaux();
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
          ${badgeNiveau(CAP.stats.niveau(item.q))}
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
        ${panneauNiveaux(niveauxGagnes(niveauxAvant))}
        ${panneauBilanIA()}
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
                ${bonneReponse(r.item.q)}
                <p class="petit">${fmt(r.item.q.explication)}</p>
              </div>`).join('')}
          </section>` : ''}
        <div class="pied-actions">
          ${fautes.length ? '<a class="bouton" href="#/erreurs">Revoir mes erreurs</a>' : ''}
          <button class="bouton bouton-principal" id="refaire">Nouvel examen</button>
        </div>
      `);
      document.getElementById('refaire').addEventListener('click', vueExamen);
      brancherBilanIA('Examen blanc', score, nb,
        fautes.map(r => ({ q: r.item.q, ch: r.item.ch, choisie: r.reponse ? r.reponse.texte : '' })));
    }

    montrer();
  }

  // ---------- Formulaire ----------
  function vueFormulaire() {
    afficher(`
      ${lienRetour('#/', 'Accueil')}
      <h1>Formulaire</h1>
      <nav class="sommaire">
        ${CAP.formulaire.map((th, i) => `<a href="#" data-theme="${i}">${echapper(th.theme)}</a>`).join('')}
      </nav>
      ${CAP.formulaire.map((th, i) => `
        <section class="section-fiche" id="theme-${i}">
          <h2>${echapper(th.theme)}</h2>
          ${th.formules.map(f => `
            <div class="bloc-formule">
              <h3>${echapper(f.nom)}</h3>
              <div class="formule">${fmt(f.formule)}</div>
              ${f.unites ? `<p class="petit">${fmt(f.unites)}</p>` : ''}
              ${f.exemple ? `<p><span class="petit">Exemple :</span> ${fmt(f.exemple)}</p>` : ''}
              ${f.calcul ? `<a class="lien-calcul" href="#/calculs/${f.calcul}">Calculer →</a>` : ''}
            </div>`).join('')}
        </section>`).join('')}
    `);
    app.querySelectorAll('[data-theme]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('theme-' + a.dataset.theme).scrollIntoView({ behavior: 'smooth' });
    }));
  }

  // ---------- Calculatrices ----------
  function vueCalculs(cible) {
    const liste = CAP.calculs.liste;
    afficher(`
      ${lienRetour('#/', 'Accueil')}
      <h1>Calculatrices</h1>
      <p class="description">Entre tes valeurs : le calcul est détaillé étape par étape, comme sur une copie. Tu peux écrire 8,5 ou 8.5.</p>
      <nav class="sommaire">
        ${Object.entries(liste).map(([cle, c]) => `<a href="#" data-calc="${cle}">${echapper(c.titre)}</a>`).join('')}
      </nav>
      ${Object.entries(liste).map(([cle, c]) => `
        <form class="section-fiche calculatrice" id="calc-${cle}" data-cle="${cle}" novalidate>
          <h2>${echapper(c.titre)}</h2>
          ${c.aide ? `<p class="petit">${echapper(c.aide)}</p>` : ''}
          <div class="champs">
            ${c.champs.map(ch => `
              <label class="champ">
                <span>${echapper(ch.nom)}</span>
                <span class="saisie">
                  <input type="text" inputmode="decimal" autocomplete="off" name="${ch.cle}" placeholder="${ch.exemple ? 'ex. ' + echapper(ch.exemple) : ''}">
                  ${ch.unite ? `<span class="unite">${echapper(ch.unite)}</span>` : ''}
                </span>
              </label>`).join('')}
          </div>
          <div class="pied-actions">
            <button class="bouton bouton-principal" type="submit">Calculer</button>
            <button class="bouton" type="reset">Effacer</button>
          </div>
          <div class="resultat-calcul" aria-live="polite" hidden></div>
        </form>`).join('')}
    `);

    app.querySelectorAll('[data-calc]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('calc-' + a.dataset.calc).scrollIntoView({ behavior: 'smooth' });
    }));
    app.querySelectorAll('.calculatrice').forEach(form => {
      const zone = form.querySelector('.resultat-calcul');
      form.addEventListener('submit', e => {
        e.preventDefault();
        const saisies = {};
        form.querySelectorAll('input').forEach(i => { saisies[i.name] = i.value; });
        const r = liste[form.dataset.cle].calculer(saisies);
        zone.className = 'resultat-calcul ' + (r.erreur ? 'retour-faux' : 'retour-bon');
        zone.innerHTML = r.erreur
          ? echapper(r.erreur)
          : `<strong>${echapper(r.resultat)}</strong><ol class="etapes">${r.etapes.map(t => `<li>${echapper(t)}</li>`).join('')}</ol>`;
        zone.hidden = false;
      });
      form.addEventListener('reset', () => { zone.hidden = true; });
    });

    const formCible = cible && document.getElementById('calc-' + cible);
    if (formCible) {
      formCible.scrollIntoView();
      formCible.querySelector('input').focus({ preventScroll: true });
    }
  }

  // ---------- Lexique ----------
  function vueLexique() {
    const mots = CAP.lexique.slice().sort((a, b) => a.mot.localeCompare(b.mot, 'fr', { sensitivity: 'base' }));
    const lettre = m => CAP.recherche.normaliser(m.mot.charAt(0)).toUpperCase();

    afficher(`
      ${lienRetour('#/', 'Accueil')}
      <h1>Lexique</h1>
      <label class="champ-recherche">
        <span class="visuellement-cache">Chercher un mot</span>
        <input type="search" id="filtre" placeholder="Chercher un mot…" autocomplete="off">
      </label>
      <nav class="lettres" id="lettres"></nav>
      <div id="liste-mots"></div>
    `);

    const liste = document.getElementById('liste-mots');
    const lettres = document.getElementById('lettres');
    const filtre = document.getElementById('filtre');

    function rendre() {
      const termes = CAP.recherche.termes(filtre.value);
      const retenus = termes.length
        ? mots.filter(m => {
          const n = CAP.recherche.normaliser(m.mot + ' ' + m.definition);
          return termes.every(t => n.includes(t));
        })
        : mots;
      const groupes = [];
      retenus.forEach(m => {
        const l = lettre(m);
        if (!groupes.length || groupes[groupes.length - 1].l !== l) groupes.push({ l, mots: [] });
        groupes[groupes.length - 1].mots.push(m);
      });
      lettres.innerHTML = termes.length ? '' : groupes.map(g => `<a href="#" data-lettre="${g.l}">${g.l}</a>`).join('');
      liste.innerHTML = groupes.length ? groupes.map(g => `
        <section class="groupe-lettre" id="lettre-${g.l}">
          <h2>${g.l}</h2>
          ${g.mots.map(m => {
            const ch = m.chapitre && trouverChapitre(m.chapitre);
            return `
              <article class="mot">
                <h3>${CAP.recherche.surligner(m.mot, termes)}</h3>
                <p>${CAP.recherche.surligner(m.definition, termes)}</p>
                ${photo(m.image, true, true)}
                ${ch ? `<a class="petit" href="#/chapitre/${ch.id}">${ch.icone} ${echapper(ch.titre)}</a>` : ''}
              </article>`;
          }).join('')}
        </section>`).join('')
        : '<p class="petit">Aucun mot trouvé. Essaie la <a href="#/recherche">recherche dans tout le site</a>.</p>';
    }

    lettres.addEventListener('click', e => {
      const a = e.target.closest('[data-lettre]');
      if (!a) return;
      e.preventDefault();
      document.getElementById('lettre-' + a.dataset.lettre).scrollIntoView({ behavior: 'smooth' });
    });
    filtre.addEventListener('input', rendre);
    rendre();
  }

  // ---------- Recherche globale ----------
  function rendreResultat(e, termes) {
    const S = CAP.recherche.surligner, X = CAP.recherche.extrait;
    const lieu = e.ch ? `<span class="petit">${e.ch.icone} ${echapper(e.ch.titre)}</span>` : '';
    switch (e.type) {
      case 'lexique': {
        const ch = e.mot.chapitre && trouverChapitre(e.mot.chapitre);
        return `<div class="resultat-recherche"><strong>${S(e.mot.mot, termes)}</strong><p>${S(e.mot.definition, termes)}</p>
          ${ch ? `<a class="petit" href="#/chapitre/${ch.id}">${ch.icone} ${echapper(ch.titre)}</a>` : ''}</div>`;
      }
      case 'formule':
        return `<div class="resultat-recherche"><span class="petit">${echapper(e.theme)}</span><strong>${S(e.formule.nom, termes)}</strong>
          <div class="formule">${S(e.formule.formule, termes)}</div>
          ${e.formule.calcul ? `<a class="lien-calcul" href="#/calculs/${e.formule.calcul}">Calculer →</a>` : ''}</div>`;
      case 'fiche':
        return `<a class="resultat-recherche lien-resultat" href="#/chapitre/${e.ch.id}/fiche/${e.section}">${lieu}
          <strong>${S(e.titre, termes)}</strong><p>${X(e.texte, termes)}</p></a>`;
      case 'carte':
        return `<details class="resultat-recherche"><summary>${lieu}<strong>${S(e.carte.recto, termes)}</strong></summary>
          <p>${S(e.carte.verso, termes)}</p></details>`;
      case 'question':
        return `<details class="resultat-recherche"><summary>${lieu}<strong>${S(e.question.enonce, termes)}</strong></summary>
          ${illustration(e.question, true)}
          ${bonneReponse(e.question, t => S(t, termes))}
          <p class="petit">${S(e.question.explication, termes)}</p></details>`;
    }
    return '';
  }

  const MAX_PAR_GROUPE = 8;

  function vueRecherche(requete) {
    afficher(`
      ${lienRetour('#/', 'Accueil')}
      <h1>Rechercher</h1>
      <form class="champ-recherche" id="form-recherche" role="search">
        <label class="visuellement-cache" for="requete">Chercher dans tout le site</label>
        <input type="search" id="requete" placeholder="Ex. : étrier, PMH, loi d'Ohm…" autocomplete="off" enterkeyhint="search">
      </form>
      <div id="resultats" aria-live="polite"></div>
    `);
    const champ = document.getElementById('requete');
    const zone = document.getElementById('resultats');
    champ.value = requete || '';

    function rendre() {
      const q = champ.value;
      const nouveauHash = '#/recherche' + (q.trim() ? '/' + encodeURIComponent(q.trim()) : '');
      if (location.hash !== nouveauHash) { history.replaceState(null, '', nouveauHash); hashCourant = nouveauHash; }
      const r = CAP.recherche.chercher(q);
      if (!r.termes.length) {
        zone.innerHTML = '<p class="petit">Tape au moins 2 lettres. La recherche porte sur le lexique, le formulaire, les fiches, les cartes et les questions.</p>';
        return;
      }
      if (!r.total) {
        zone.innerHTML = '<p>Aucun résultat. Vérifie l\'orthographe ou essaie un autre mot.</p>';
        return;
      }
      zone.innerHTML = `<p class="petit">${pluriel(r.total, 'résultat')}</p>` + r.groupes.map(g => `
        <section class="panneau">
          <h2>${echapper(g.nom)} <span class="petit">(${g.resultats.length})</span></h2>
          ${g.resultats.slice(0, MAX_PAR_GROUPE).map(e => rendreResultat(e, r.termes)).join('')}
          ${g.resultats.length > MAX_PAR_GROUPE ? `<p class="petit">… et ${g.resultats.length - MAX_PAR_GROUPE} autres : précise ta recherche.</p>` : ''}
        </section>`).join('');
    }

    let minuterie = null;
    champ.addEventListener('input', () => { clearTimeout(minuterie); minuterie = setTimeout(rendre, 150); });
    document.getElementById('form-recherche').addEventListener('submit', e => { e.preventDefault(); champ.blur(); rendre(); });
    rendre();
    if (!requete) champ.focus();
  }

  // ---------- Assistant IA ----------
  const NB_QUESTIONS_IA = 5;

  function vueAssistant() {
    const dispo = CAP.ia.disponible(), actif = CAP.ia.actif();
    afficher(`
      ${lienRetour('#/', 'Accueil')}
      <h1>Assistant IA</h1>
      <p class="description">L'assistant utilise une IA (Claude, d'Anthropic) pour t'expliquer tes erreurs, inventer des questions sur tes points faibles et faire le bilan de tes séances.</p>
      ${!dispo ? '<p class="retour-reponse retour-faux">L\'assistant n\'est pas disponible sur cette version du site. Ouvre le site depuis Internet.</p>' : ''}
      ${dispo && actif ? `
        <p class="retour-reponse retour-bon"><strong>Assistant activé sur cet appareil.</strong></p>
        <div class="pied-actions">
          <a class="bouton bouton-principal" href="#/ia">Questions de l'IA</a>
          <button class="bouton bouton-rouge" type="button" id="desactiver">Désactiver</button>
        </div>` : ''}
      ${dispo && !actif ? `
        <form class="section-fiche" id="form-code" novalidate>
          <label class="champ">
            <span>Code d'accès</span>
            <span class="saisie"><input type="text" id="code" autocomplete="off" autocapitalize="off" spellcheck="false"></span>
          </label>
          <p class="petit">Le code est donné par la personne qui gère le site. Il évite que n'importe qui utilise l'assistant.</p>
          <button class="bouton bouton-principal" type="submit">Activer l'assistant</button>
          <p id="message-code" aria-live="polite"></p>
        </form>` : ''}
      <section class="panneau">
        <h2>Bon à savoir</h2>
        <ul class="regles">
          <li>L'IA peut se tromper. En cas de doute, ta fiche de cours fait foi.</li>
          <li>Chaque réponse de l'IA a un bouton « Signaler une erreur ».</li>
          <li>Ce qui est envoyé : la question, ta réponse et tes scores. Rien d'autre (ni nom, ni adresse e-mail).</li>
          <li>Il faut une connexion Internet. Le reste du site marche sans.</li>
          <li>Les questions de l'IA ne comptent pas dans ta progression.</li>
        </ul>
      </section>
    `);
    const des = document.getElementById('desactiver');
    if (des) des.addEventListener('click', () => { CAP.ia.desactiver(); vueAssistant(); });
    const form = document.getElementById('form-code');
    if (form) form.addEventListener('submit', async e => {
      e.preventDefault();
      const msg = document.getElementById('message-code');
      const bouton = form.querySelector('[type=submit]');
      bouton.disabled = true;
      msg.className = 'petit';
      msg.textContent = 'Vérification…';
      try {
        await CAP.ia.activer(document.getElementById('code').value);
        vueAssistant();
      } catch (err) {
        msg.className = 'retour-reponse retour-faux';
        msg.textContent = err.message;
        bouton.disabled = false;
      }
    });
  }

  // Thèmes à travailler : les plus faibles, sinon des thèmes pas encore vus, sinon au hasard.
  function ciblesIA() {
    const faibles = CAP.stats.pointsFaibles(4).map(s => ({ ch: s.chapitre, sousTheme: s.id, nom: s.nom }));
    if (faibles.length) return faibles;
    const tous = CAP.chapitres.flatMap(ch => CAP.stats.sousThemes(ch).map(s => ({ ch, sousTheme: s.id, nom: s.nom, vues: s.vues })));
    const jamais = tous.filter(s => !s.vues);
    return melanger(jamais.length ? jamais : tous).slice(0, 3);
  }

  async function vueQuestionsIA() {
    const retour = lienRetour('#/', 'Accueil');
    if (!CAP.ia.actif()) return vueAssistant();
    const cibles = ciblesIA();
    const ici = location.hash;
    afficher(`
      ${retour}
      <h1>Questions de l'IA</h1>
      <div class="reponse-ia chargement" role="status">
        <span class="etiquette-ia">IA</span> L'IA invente ${NB_QUESTIONS_IA} questions sur :
        <strong>${cibles.map(c => echapper(c.nom)).join(', ')}</strong>. Ça prend environ 20 secondes…
      </div>
    `);
    try {
      const items = await CAP.ia.genererQuestions(cibles, NB_QUESTIONS_IA);
      if (location.hash !== ici) return; // l'élève est parti ailleurs entre-temps
      lancerQuiz({
        items,
        retour,
        seance: 'ia',
        plusieursChapitres: true,
        sansSuivi: true,
        bandeau: 'Questions inventées par l\'IA. Elles peuvent contenir des erreurs : signale-les avec le bouton sous la réponse.',
        libelleRefaire: 'Nouvelles questions',
        refaire: vueQuestionsIA
      });
    } catch (e) {
      if (location.hash !== ici) return;
      afficher(`
        ${retour}
        <h1>Questions de l'IA</h1>
        <p class="retour-reponse retour-faux">${echapper(e.message)}</p>
        <div class="pied-actions">
          <button class="bouton bouton-principal" type="button" id="reessayer">Réessayer</button>
          <a class="bouton" href="#/entrainement">Entraînement ciblé (sans IA)</a>
        </div>
      `);
      document.getElementById('reessayer').addEventListener('click', vueQuestionsIA);
    }
  }

  // ---------- Installer sur le téléphone ----------
  function vueInstaller() {
    const bouton = CAP.pwa.boutonDisponible();
    afficher(`
      ${lienRetour('#/', 'Accueil')}
      <h1>Installer sur mon téléphone</h1>
      <p class="description">Une fois installé, CAP Méca s'ouvre comme une appli, depuis l'écran d'accueil, et marche même sans connexion.</p>
      ${!CAP.pwa.possible() ? '<p class="retour-reponse retour-bon">Le site est déjà installé, ou ouvert depuis un fichier : il n\'y a rien à faire.</p>' : ''}
      ${bouton ? '<button class="bouton bouton-principal bouton-large" id="installer">Installer CAP Méca</button>' : ''}
      <section class="panneau">
        <h2>Sur Android (Chrome)</h2>
        <ol class="etapes">
          <li>Touche le menu <strong>⋮</strong> en haut à droite.</li>
          <li>Choisis <strong>Installer l'application</strong> ou <strong>Ajouter à l'écran d'accueil</strong>.</li>
        </ol>
      </section>
      <section class="panneau">
        <h2>Sur iPhone (Safari)</h2>
        <ol class="etapes">
          <li>Touche le bouton <strong>Partager</strong> (le carré avec une flèche vers le haut).</li>
          <li>Choisis <strong>Sur l'écran d'accueil</strong>, puis <strong>Ajouter</strong>.</li>
        </ol>
      </section>
      <p class="petit">Ta progression reste enregistrée sur le téléphone. Pense à l'exporter de temps en temps (page Progression).</p>
    `);
    const b = document.getElementById('installer');
    if (b) b.addEventListener('click', async () => {
      if (await CAP.pwa.installer()) vueInstaller();
    });
  }

  // ---------- Progression ----------
  const NOMS_SEANCES = {
    melange: 'Quiz mélangé',
    entrainement: 'Entraînement ciblé',
    erreurs: 'Révision des erreurs',
    jour: 'Cartes du jour',
    pieces: 'Reconnaître les pièces',
    ia: 'Questions de l\'IA',
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
    const tousNiveaux = CAP.stats.niveaux();
    const niveauxCh = ch => tousNiveaux.filter(n => n.ch === ch);
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
              <span class="petit">${[1, 2, 3].map(n => [n, niveauxCh(ch).filter(x => x.niveau === n).length]).filter(([, k]) => k).map(([n, k]) => `${pluriel(k, 'thème')} au niveau ${n}`).join(' · ')}</span>
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
    if (p[0] === 'formulaire') return vueFormulaire();
    if (p[0] === 'calculs') return vueCalculs(p[1]);
    if (p[0] === 'lexique') return vueLexique();
    if (p[0] === 'recherche') {
      let q = p.slice(1).join('/');
      try { q = decodeURIComponent(q); } catch (e) { /* adresse mal formée : on garde le texte brut */ }
      return vueRecherche(q);
    }
    if (p[0] === 'installer') return vueInstaller();
    if (p[0] === 'assistant') return vueAssistant();
    if (p[0] === 'ia') return vueQuestionsIA();
    if (p[0] === 'chapitre') {
      const ch = trouverChapitre(p[1]);
      if (ch) {
        if (!p[2]) return vueChapitre(ch);
        if (p[2] === 'fiche') return vueFiche(ch, p[3]);
        if (p[2] === 'cartes') return vueCartes(ch);
        if (p[2] === 'quiz') return vueQuiz(ch);
      }
    }
    afficher(`<h1>Page introuvable</h1><p><a href="#/">Retour à l'accueil</a></p>`);
  }

  // Le navigateur propose l'installation : on met à jour l'accueil ou la page d'installation.
  window.addEventListener('capmeca:installable', () => {
    if (['', '#', '#/', '#/installer'].includes(location.hash)) route();
  });

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
