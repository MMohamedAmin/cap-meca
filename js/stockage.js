// Progression de l'élève, enregistrée dans le navigateur (localStorage).
// Toutes les lectures/écritures sont protégées : le site marche même si le stockage est bloqué.
CAP.stockage = (function () {
  const CLE = 'capmeca.progression.v1';

  function vide() {
    return { questions: {}, cartes: {}, seances: [], jours: [] };
  }

  function charger() {
    try {
      const texte = localStorage.getItem(CLE);
      if (texte) return Object.assign(vide(), JSON.parse(texte));
    } catch (e) { /* stockage indisponible */ }
    return vide();
  }

  let etat = charger();

  function sauver() {
    try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch (e) { /* ignoré */ }
  }

  function formatJour(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  // Jour (AAAA-MM-JJ) décalé de n jours par rapport à aujourd'hui.
  function jourDans(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return formatJour(d);
  }

  // Répétition espacée (boîtes de Leitner) : une carte sue monte d'une boîte,
  // une carte ratée retourne en boîte 1. Plus la boîte est haute, plus on attend.
  const INTERVALLES = [0, 1, 2, 4, 8, 16]; // en jours, pour les boîtes 1 à 5
  const BOITE_MAX = 5;

  // Cartes enregistrées avant la V2 : on déduit la boîte de la dernière réponse.
  function completerCarte(c) {
    if (!c.boite) {
      c.boite = c.derniere ? 2 : 1;
      const d = new Date(c.date || Date.now());
      d.setDate(d.getDate() + INTERVALLES[c.boite]);
      c.prochaine = formatJour(d);
    }
    return c;
  }

  function marquerJour() {
    const j = formatJour(new Date());
    if (!etat.jours.includes(j)) etat.jours.push(j);
  }

  return {
    reponseQuestion(id, juste) {
      const q = etat.questions[id] || { vu: 0, ok: 0 };
      q.vu++;
      if (juste) q.ok++;
      q.derniere = juste;
      q.date = Date.now();
      etat.questions[id] = q;
      marquerJour();
      sauver();
    },

    reponseCarte(id, sais) {
      const c = etat.cartes[id] ? completerCarte(etat.cartes[id]) : { sais: 0, pas: 0, boite: 1 };
      if (sais) c.sais++; else c.pas++;
      c.derniere = sais;
      c.boite = sais ? Math.min(c.boite + 1, BOITE_MAX) : 1;
      c.prochaine = jourDans(INTERVALLES[c.boite]);
      c.date = Date.now();
      etat.cartes[id] = c;
      marquerJour();
      sauver();
    },

    finSeance(seance) {
      etat.seances.push(Object.assign({ date: Date.now() }, seance));
      if (etat.seances.length > 300) etat.seances = etat.seances.slice(-300);
      sauver();
    },

    question(id) { return etat.questions[id]; },
    carte(id) { return etat.cartes[id] && completerCarte(etat.cartes[id]); },
    BOITE_MAX,
    aujourdhui() { return jourDans(0); },
    jourDans,
    jourDe(date) { return formatJour(new Date(date)); },
    jours() { return etat.jours; },
    seances() { return etat.seances; },

    // Nombre de jours de révision d'affilée (aujourd'hui ou hier inclus).
    serie() {
      const jours = new Set(etat.jours);
      const d = new Date();
      if (!jours.has(formatJour(d))) d.setDate(d.getDate() - 1);
      let n = 0;
      while (jours.has(formatJour(d))) { n++; d.setDate(d.getDate() - 1); }
      return n;
    },

    exporter() { return JSON.stringify(etat, null, 2); },

    importer(texte) {
      const d = JSON.parse(texte);
      if (!d || typeof d !== 'object' || !d.questions || !d.cartes) {
        throw new Error('Ce fichier ne contient pas une sauvegarde valide.');
      }
      etat = Object.assign(vide(), d);
      sauver();
    },

    reinitialiser() { etat = vide(); sauver(); }
  };
})();
