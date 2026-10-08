// Formulaire : les formules à connaître, par thème.
// « calcul » (facultatif) renvoie vers une calculatrice de js/calculs.js.
CAP.ajouterFormulaire([
  {
    theme: 'Moteur',
    formules: [
      {
        nom: 'Cylindrée unitaire',
        formule: 'Cylindrée unitaire = π × alésage² ÷ 4 × course',
        unites: 'Alésage et course en cm → cylindrée en cm³.',
        exemple: 'Alésage 8 cm, course 8 cm : 3,1416 × 8² ÷ 4 × 8 ≈ **402 cm³**.',
        calcul: 'cylindree'
      },
      {
        nom: 'Cylindrée totale',
        formule: 'Cylindrée totale = cylindrée unitaire × nombre de cylindres',
        exemple: '402 cm³ × 4 cylindres ≈ **1 608 cm³**, soit environ 1,6 L.',
        calcul: 'cylindree'
      },
      {
        nom: 'Rapport volumétrique',
        formule: 'Rapport = (cylindrée unitaire + volume chambre) ÷ volume chambre',
        unites: 'Les deux volumes dans la même unité (cm³). Le rapport n\'a pas d\'unité.',
        exemple: '(400 + 40) ÷ 40 = **11**, on écrit « 11 : 1 ».',
        calcul: 'rapport'
      },
      {
        nom: 'Puissance mécanique',
        formule: 'P = C × ω, avec ω = 2 × π × N ÷ 60',
        unites: 'P en watts (W), C (couple) en N·m, N (régime) en tr/min, ω en rad/s.',
        exemple: '200 N·m à 3 000 tr/min : ω = 2 × 3,1416 × 3 000 ÷ 60 ≈ 314 rad/s, P = 200 × 314 ≈ **62 800 W**, soit environ 63 kW.'
      },
      {
        nom: 'kW et chevaux',
        formule: '1 ch ≈ 736 W, donc 1 kW ≈ 1,36 ch',
        exemple: '63 kW × 1,36 ≈ **86 ch**.'
      }
    ]
  },
  {
    theme: 'Électricité',
    formules: [
      {
        nom: 'Loi d\'Ohm',
        formule: 'U = R × I',
        unites: 'U en volts (V), R en ohms (Ω), I en ampères (A).',
        exemple: '12 V aux bornes d\'une résistance de 4 Ω : I = 12 ÷ 4 = **3 A**.',
        calcul: 'ohm'
      },
      {
        nom: 'Puissance électrique',
        formule: 'P = U × I',
        unites: 'P en watts (W), U en volts (V), I en ampères (A).',
        exemple: 'Ampoule de 60 W en 12 V : I = 60 ÷ 12 = **5 A**.',
        calcul: 'puissance'
      },
      {
        nom: 'Résistances en série',
        formule: 'R totale = R1 + R2 + …',
        exemple: '2 Ω + 4 Ω = **6 Ω**. Le même courant traverse les deux résistances.'
      },
      {
        nom: 'Deux résistances en parallèle',
        formule: 'R totale = (R1 × R2) ÷ (R1 + R2)',
        exemple: '6 Ω et 3 Ω : (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = **2 Ω**. La résistance totale est plus petite que la plus petite des deux.'
      },
      {
        nom: 'Capacité d\'une batterie',
        formule: 'Capacité (Ah) = intensité (A) × durée (h)',
        exemple: 'Une batterie de 60 Ah peut fournir en théorie 3 A pendant 20 h.'
      }
    ]
  },
  {
    theme: 'Pneumatiques',
    formules: [
      {
        nom: 'Hauteur du flanc',
        formule: 'Hauteur du flanc = largeur × série ÷ 100',
        unites: 'Sur un pneu 205/55 R16 : largeur 205 mm, série 55.',
        exemple: '205 × 55 ÷ 100 ≈ **113 mm**.'
      },
      {
        nom: 'Diamètre de la roue',
        formule: 'Diamètre = jante × 25,4 + 2 × hauteur du flanc',
        unites: 'Jante en pouces (1 pouce = 25,4 mm) → diamètre en mm.',
        exemple: '205/55 R16 : 16 × 25,4 + 2 × 113 ≈ 406 + 226 = **632 mm**.'
      }
    ]
  },
  {
    theme: 'Pression et unités',
    formules: [
      {
        nom: 'Pression',
        formule: 'Pression = force ÷ surface',
        unites: 'En pascals (Pa) avec une force en newtons (N) et une surface en m².',
        exemple: 'C\'est le principe du freinage : la même pression appliquée sur un piston d\'étrier plus grand donne une force plus grande.'
      },
      {
        nom: 'Bar et pascal',
        formule: '1 bar = 100 000 Pa = 100 kPa',
        exemple: 'Un pneu gonflé à 2,2 bar est à 220 kPa.'
      },
      {
        nom: 'Volumes',
        formule: '1 L = 1 dm³ = 1 000 cm³',
        exemple: '1 598 cm³ = **1,6 L**.'
      }
    ]
  }
]);
