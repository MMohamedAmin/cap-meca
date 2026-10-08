// Interface du site : navigation par #ancre et affichage des écrans.
(function () {
  const app = document.getElementById('app');

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
  function melanger(liste) {
    const a = liste.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function pourcent(p) { return p === null ? '—' : p + ' %'; }
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

  // ---------- Accueil ----------
  function vueAccueil() {
    const g = CAP.stats.global();
    const serie = CAP.stockage.serie();
    const faibles = CAP.stats.pointsFaibles(3);

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

      <a class="bouton bouton-principal bouton-large" href="#/melange">Quiz mélangé, tous chapitres</a>

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
  function vueCartes(ch, paquetImpose) {
    const paquet = paquetImpose || melanger(ch.cartes);
    let i = 0;
    const ratees = [];

    function montrer() {
      const c = paquet[i];
      afficher(`
        ${lienRetour('#/chapitre/' + ch.id, ch.titre)}
        <div class="progression-seance">
          <span>Carte ${i + 1} / ${paquet.length}</span>
          <div class="barre"><span style="width:${i * 100 / paquet.length}%"></span></div>
        </div>
        <button class="carte-memo" id="carte" aria-live="polite">
          <span class="etiquette">${echapper(ch.sousThemes[c.sousTheme] || '')}</span>
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
        if (!sais) ratees.push(c);
        i++;
        if (i < paquet.length) montrer(); else fin();
      }));
    }

    function fin() {
      const sues = paquet.length - ratees.length;
      CAP.stockage.finSeance({ type: 'cartes', chapitre: ch.id, score: sues, total: paquet.length });
      afficher(`
        ${lienRetour('#/chapitre/' + ch.id, ch.titre)}
        <section class="resultat">
          <h1>Série terminée</h1>
          <p class="gros-score">${sues} / ${paquet.length}</p>
          <p>${ratees.length ? `Tu as ${ratees.length} carte${ratees.length > 1 ? 's' : ''} à revoir.` : 'Tu les connais toutes, bravo !'}</p>
        </section>
        <div class="pied-actions">
          ${ratees.length ? '<button class="bouton bouton-principal" id="revoir">Revoir les cartes ratées</button>' : ''}
          <button class="bouton" id="refaire">Refaire tout le paquet</button>
        </div>
      `);
      const revoir = document.getElementById('revoir');
      if (revoir) revoir.addEventListener('click', () => vueCartes(ch, melanger(ratees)));
      document.getElementById('refaire').addEventListener('click', () => vueCartes(ch));
    }

    montrer();
  }

  // ---------- Quiz ----------
  // ch = null → quiz mélangé sur tous les chapitres
  function vueQuiz(ch) {
    const source = ch
      ? ch.questions.map(q => ({ q, ch }))
      : CAP.chapitres.flatMap(c => c.questions.map(q => ({ q, ch: c })));
    const nb = Math.min(ch ? 10 : 20, source.length);
    const serie = melanger(source).slice(0, nb).map(({ q, ch }) => ({
      q, ch,
      choix: q.type === 'vf'
        ? q.choix.map((t, k) => ({ texte: t, juste: k === q.bonne }))
        : melanger(q.choix.map((t, k) => ({ texte: t, juste: k === q.bonne })))
    }));
    const retour = ch ? lienRetour('#/chapitre/' + ch.id, ch.titre) : lienRetour('#/', 'Accueil');
    let i = 0, score = 0;
    const erreurs = [];

    function montrer() {
      const item = serie[i];
      afficher(`
        ${retour}
        <div class="progression-seance">
          <span>Question ${i + 1} / ${nb}</span>
          <div class="barre"><span style="width:${i * 100 / nb}%"></span></div>
        </div>
        <section class="question">
          <span class="etiquette">${ch ? '' : echapper(item.ch.titre) + ' · '}${echapper(item.ch.sousThemes[item.q.sousTheme] || '')}</span>
          <h2>${fmt(item.q.enonce)}</h2>
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
      CAP.stockage.finSeance({ type: 'quiz', chapitre: ch ? ch.id : 'melange', score, total: nb });
      const note = (Math.round(score * 200 / nb) / 10).toLocaleString('fr-FR');
      afficher(`
        ${retour}
        <section class="resultat">
          <h1>Résultat</h1>
          <p class="gros-score">${note} / 20</p>
          <p>${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} sur ${nb}</p>
        </section>
        ${erreurs.length ? `
          <section class="panneau">
            <h2>Tes erreurs à revoir</h2>
            ${erreurs.map(e => `
              <div class="erreur">
                <p class="erreur-question">${fmt(e.q.enonce)}</p>
                <p class="erreur-reponse">✔ ${fmt(e.q.choix[e.q.bonne])}</p>
                <p class="petit">${fmt(e.q.explication)}</p>
              </div>`).join('')}
          </section>` : ''}
        <div class="pied-actions">
          ${ch ? `<a class="bouton" href="#/chapitre/${ch.id}/fiche">Relire la fiche</a>` : ''}
          <button class="bouton bouton-principal" id="refaire">Nouveau quiz</button>
        </div>
      `);
      document.getElementById('refaire').addEventListener('click', () => vueQuiz(ch));
    }

    if (!nb) { afficher(`${retour}<p>Pas encore de questions ici.</p>`); return; }
    montrer();
  }

  // ---------- Progression ----------
  function vueProgression() {
    const faibles = CAP.stats.pointsFaibles(8);
    const seances = CAP.stockage.seances().slice(-8).reverse();
    afficher(`
      <h1>Ma progression</h1>

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

      <section class="panneau">
        <h2>Points faibles</h2>
        ${faibles.length ? `<ul class="liste-faibles">${faibles.map(f => `
          <li><a href="#/chapitre/${f.chapitre.id}">${echapper(f.nom)}</a>
          <span class="petit">${echapper(f.chapitre.titre)} · ${f.pourcent} %</span></li>`).join('')}</ul>`
        : '<p class="petit">Rien à signaler pour l\'instant. Fais quelques quiz pour que le site repère tes points faibles.</p>'}
      </section>

      <section class="panneau">
        <h2>Dernières séances</h2>
        ${seances.length ? `<ul class="liste-seances">${seances.map(s => {
          const ch = trouverChapitre(s.chapitre);
          const nom = ch ? ch.titre : 'Quiz mélangé';
          const date = new Date(s.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
          return `<li><span>${date} · ${s.type === 'quiz' ? 'Quiz' : 'Cartes'} · ${echapper(nom)}</span><strong>${s.score}/${s.total}</strong></li>`;
        }).join('')}</ul>` : '<p class="petit">Aucune séance pour l\'instant.</p>'}
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
  function route() {
    const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    document.querySelectorAll('.nav a').forEach(a => {
      a.classList.toggle('actif', (p[0] || '') === a.dataset.page || (!p[0] && a.dataset.page === 'accueil'));
    });
    if (p.length === 0) return vueAccueil();
    if (p[0] === 'progression') return vueProgression();
    if (p[0] === 'melange') return vueQuiz(null);
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
