// Calculatrices (V3). Fonctions pures : elles reçoivent les valeurs saisies (texte)
// et renvoient { resultat, etapes } ou { erreur }. L'affichage est fait dans app.js.
CAP.calculs = (function () {
  // Nombre affiché à la française : virgule, espace pour les milliers.
  function nombre(x, decimales) {
    return x.toLocaleString('fr-FR', { maximumFractionDigits: decimales === undefined ? 2 : decimales });
  }

  // Lit une saisie : « 8,5 » ou « 8.5 ». Renvoie null si vide, NaN si invalide.
  function lire(texte) {
    const t = String(texte === undefined || texte === null ? '' : texte).trim().replace(/\s/g, '').replace(',', '.');
    if (t === '') return null;
    return /^\d*\.?\d+$|^\d+\.$/.test(t) ? parseFloat(t) : NaN;
  }

  // Lit toutes les valeurs d'un calcul : chaque valeur remplie doit être un nombre > 0.
  function lireTout(saisies, noms) {
    const v = {};
    for (const [cle, nom] of Object.entries(noms)) {
      const x = lire(saisies[cle]);
      if (x !== null && !(x > 0)) return { erreur: `${nom} : entre un nombre positif.` };
      v[cle] = x;
    }
    return { v };
  }

  // Calcul « deux valeurs connues sur trois » : U = R × I ou P = U × I.
  // produit = a × b. On calcule celle qui est vide.
  function troisValeurs(saisies, def) {
    const { erreur, v } = lireTout(saisies, def.noms);
    if (erreur) return { erreur };
    const vides = Object.keys(def.noms).filter(k => v[k] === null);
    if (vides.length !== 1) {
      return { erreur: vides.length ? 'Remplis deux valeurs et laisse vide celle à calculer.' : 'Laisse vide la valeur à calculer.' };
    }
    const [p, a, b] = def.ordre; // p = a × b
    const u = def.unites;
    const cherche = vides[0];
    let valeur, etapes;
    if (cherche === p) {
      valeur = v[a] * v[b];
      etapes = [`${p.toUpperCase()} = ${a.toUpperCase()} × ${b.toUpperCase()}`,
        `${p.toUpperCase()} = ${nombre(v[a], 4)} × ${nombre(v[b], 4)}`];
    } else {
      const autre = cherche === a ? b : a;
      valeur = v[p] / v[autre];
      etapes = [`${cherche.toUpperCase()} = ${p.toUpperCase()} ÷ ${autre.toUpperCase()}`,
        `${cherche.toUpperCase()} = ${nombre(v[p], 4)} ÷ ${nombre(v[autre], 4)}`];
    }
    etapes.push(`${cherche.toUpperCase()} = ${nombre(valeur, 3)} ${u[cherche]}`);
    return { resultat: `${def.noms[cherche]} : ${nombre(valeur, 3)} ${u[cherche]}`, etapes, valeur, cherche };
  }

  const liste = {
    cylindree: {
      titre: 'Cylindrée',
      champs: [
        { cle: 'alesage', nom: 'Alésage', unite: 'mm', exemple: '80' },
        { cle: 'course', nom: 'Course', unite: 'mm', exemple: '80' },
        { cle: 'cylindres', nom: 'Nombre de cylindres', unite: '', exemple: '4' }
      ],
      calculer(s) {
        const { erreur, v } = lireTout(s, { alesage: 'Alésage', course: 'Course', cylindres: 'Nombre de cylindres' });
        if (erreur) return { erreur };
        if (v.alesage === null || v.course === null || v.cylindres === null) return { erreur: 'Remplis les trois valeurs.' };
        if (!Number.isInteger(v.cylindres)) return { erreur: 'Nombre de cylindres : entre un nombre entier.' };
        const d = v.alesage / 10, c = v.course / 10; // mm → cm
        const unitaire = Math.PI * d * d / 4 * c;
        const totale = unitaire * v.cylindres;
        return {
          resultat: `Cylindrée totale : ${nombre(totale, 0)} cm³ (${nombre(totale / 1000, 2)} L)`,
          valeur: totale,
          etapes: [
            `Alésage = ${nombre(v.alesage, 2)} mm = ${nombre(d, 3)} cm · course = ${nombre(v.course, 2)} mm = ${nombre(c, 3)} cm`,
            'Cylindrée unitaire = π × alésage² ÷ 4 × course',
            `Cylindrée unitaire = 3,1416 × ${nombre(d, 3)}² ÷ 4 × ${nombre(c, 3)} = ${nombre(unitaire, 1)} cm³`,
            `Cylindrée totale = ${nombre(unitaire, 1)} × ${v.cylindres} = ${nombre(totale, 0)} cm³`,
            `1 L = 1 000 cm³, donc ${nombre(totale, 0)} cm³ = ${nombre(totale / 1000, 2)} L`
          ]
        };
      }
    },

    rapport: {
      titre: 'Rapport volumétrique',
      champs: [
        { cle: 'unitaire', nom: 'Cylindrée unitaire', unite: 'cm³', exemple: '400' },
        { cle: 'chambre', nom: 'Volume de la chambre', unite: 'cm³', exemple: '40' }
      ],
      calculer(s) {
        const { erreur, v } = lireTout(s, { unitaire: 'Cylindrée unitaire', chambre: 'Volume de la chambre' });
        if (erreur) return { erreur };
        if (v.unitaire === null || v.chambre === null) return { erreur: 'Remplis les deux valeurs.' };
        const r = (v.unitaire + v.chambre) / v.chambre;
        return {
          resultat: `Rapport volumétrique : ${nombre(r, 1)} : 1`,
          valeur: r,
          etapes: [
            'Rapport = (cylindrée unitaire + volume chambre) ÷ volume chambre',
            `Rapport = (${nombre(v.unitaire, 2)} + ${nombre(v.chambre, 2)}) ÷ ${nombre(v.chambre, 2)}`,
            `Rapport = ${nombre(v.unitaire + v.chambre, 2)} ÷ ${nombre(v.chambre, 2)} = ${nombre(r, 1)}`,
            'Repère : souvent 10 à 12 en essence, 16 à 20 en diesel.'
          ]
        };
      }
    },

    ohm: {
      titre: 'Loi d\'Ohm',
      champs: [
        { cle: 'u', nom: 'Tension U', unite: 'V', exemple: '12' },
        { cle: 'r', nom: 'Résistance R', unite: 'Ω', exemple: '4' },
        { cle: 'i', nom: 'Intensité I', unite: 'A', exemple: '' }
      ],
      aide: 'Remplis deux valeurs, laisse vide celle à calculer.',
      calculer(s) {
        return troisValeurs(s, {
          noms: { u: 'Tension U', r: 'Résistance R', i: 'Intensité I' },
          unites: { u: 'V', r: 'Ω', i: 'A' },
          ordre: ['u', 'r', 'i']
        });
      }
    },

    puissance: {
      titre: 'Puissance électrique',
      champs: [
        { cle: 'p', nom: 'Puissance P', unite: 'W', exemple: '60' },
        { cle: 'u', nom: 'Tension U', unite: 'V', exemple: '12' },
        { cle: 'i', nom: 'Intensité I', unite: 'A', exemple: '' }
      ],
      aide: 'Remplis deux valeurs, laisse vide celle à calculer.',
      calculer(s) {
        return troisValeurs(s, {
          noms: { p: 'Puissance P', u: 'Tension U', i: 'Intensité I' },
          unites: { p: 'W', u: 'V', i: 'A' },
          ordre: ['p', 'u', 'i']
        });
      }
    }
  };

  return { liste, nombre, lire };
})();
