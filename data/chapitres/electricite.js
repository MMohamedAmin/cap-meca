CAP.ajouterChapitre({
  id: 'electricite',
  titre: 'Électricité',
  icone: '⚡',
  description: 'Grandeurs et lois de base, batterie, démarrage et charge, mesures au multimètre.',
  sousThemes: {
    bases: 'Grandeurs et lois',
    batterie: 'Batterie',
    charge: 'Démarrage et charge',
    mesures: 'Mesures et protection'
  },

  fiche: [
    {
      titre: 'Grandeurs et lois',
      sousTheme: 'bases',
      contenu: [
        { liste: [
          '**Tension U** en volts (V) : la « pression » électrique.',
          '**Intensité I** en ampères (A) : le débit de courant.',
          '**Résistance R** en ohms (Ω) : ce qui s\'oppose au passage du courant.',
          '**Puissance P** en watts (W).'
        ] },
        { formule: 'Loi d\'Ohm : U = R × I' },
        { formule: 'Puissance : P = U × I' },
        { retenir: 'Moyen mnémotechnique : « **URI** » pour U = R × I, et « **PUI** » pour P = U × I.' }
      ]
    },
    {
      titre: 'La batterie',
      sousTheme: 'batterie',
      contenu: [
        'Batterie au plomb de **12 V**, caractérisée par sa **capacité** (Ah) et son courant de démarrage (A).',
        'Au repos, une batterie bien chargée affiche environ **12,6 V** ou un peu plus. Vers 12,0 V, elle est nettement déchargée.',
        'La borne **négative** est reliée à la **masse** (la caisse du véhicule).',
        { attention: 'Débrancher la borne **négative en premier** et la rebrancher **en dernier** : on évite un court-circuit si la clé touche la caisse. En charge, la batterie dégage de l\'hydrogène explosif, et elle contient de l\'acide sulfurique.' }
      ]
    },
    {
      titre: 'Démarrage et charge',
      sousTheme: 'charge',
      contenu: [
        'Le **démarreur** est un moteur électrique qui entraîne le volant moteur pour lancer le moteur.',
        'L\'**alternateur**, entraîné par la courroie d\'accessoires, produit l\'électricité quand le moteur tourne et **recharge la batterie**. Il produit du courant alternatif, transformé en continu par le **pont de diodes**. Le **régulateur** limite la tension.',
        { retenir: 'Moteur tournant, la tension de charge correcte est d\'environ **13,5 à 14,5 V**.' }
      ]
    },
    {
      titre: 'Mesures et protection',
      sousTheme: 'mesures',
      contenu: [
        { liste: [
          '**Voltmètre** : se branche en **parallèle** (aux bornes de l\'élément).',
          '**Ampèremètre** : se branche en **série** (le courant doit le traverser), ou avec une pince ampèremétrique.',
          '**Ohmmètre** : toujours sur un circuit **hors tension**.'
        ] },
        'Le **fusible** protège un circuit contre les surintensités. Il se remplace toujours par un fusible du **même calibre** (ampérage), après avoir cherché la cause.'
      ]
    }
  ],

  cartes: [
    { id: 'elec-c1', sousTheme: 'bases', recto: 'Loi d\'Ohm ?', verso: '**U = R × I**' },
    { id: 'elec-c2', sousTheme: 'bases', recto: 'Formule de la puissance électrique ?', verso: '**P = U × I**' },
    { id: 'elec-c3', sousTheme: 'mesures', recto: 'Voltmètre : série ou parallèle ?', verso: 'En **parallèle**.' },
    { id: 'elec-c4', sousTheme: 'mesures', recto: 'Ampèremètre : série ou parallèle ?', verso: 'En **série** (ou pince ampèremétrique).' },
    { id: 'elec-c5', sousTheme: 'charge', recto: 'Tension de charge correcte moteur tournant ?', verso: 'Environ **13,5 à 14,5 V**.' },
    { id: 'elec-c6', sousTheme: 'batterie', recto: 'Quelle borne débrancher en premier ?', verso: 'La borne **négative (–)**.' },
    { id: 'elec-c7', sousTheme: 'charge', recto: 'Quel composant de l\'alternateur redresse le courant ?', verso: 'Le **pont de diodes**.' }
  ],

  questions: [
    {
      id: 'elec-q1', sousTheme: 'bases', type: 'qcm',
      enonce: 'Quelle est la loi d\'Ohm ?',
      choix: ['U = R × I', 'P = U ÷ I', 'I = U × R', 'R = U × I'],
      bonne: 0,
      explication: 'Tension (V) = Résistance (Ω) × Intensité (A). Moyen mnémotechnique : « URI ».'
    },
    {
      id: 'elec-q2', sousTheme: 'bases', type: 'qcm',
      enonce: 'Une ampoule de 60 W est alimentée en 12 V. Quelle intensité consomme-t-elle ?',
      choix: ['5 A', '720 A', '0,2 A', '48 A'],
      bonne: 0,
      explication: 'I = P ÷ U = 60 ÷ 12 = 5 A.'
    },
    {
      id: 'elec-q3', sousTheme: 'mesures', type: 'qcm',
      enonce: 'Comment branche-t-on un voltmètre ?',
      choix: ['En parallèle, aux bornes de l\'élément', 'En série dans le circuit', 'Circuit obligatoirement hors tension', 'Sur une seule borne'],
      bonne: 0,
      explication: 'On mesure la différence de tension entre deux points : le voltmètre se place en parallèle.'
    },
    {
      id: 'elec-q4', sousTheme: 'batterie', type: 'qcm',
      enonce: 'Pour déposer une batterie, quelle borne débrancher en premier ?',
      choix: ['La borne négative', 'La borne positive', 'Peu importe', 'Les deux en même temps'],
      bonne: 0,
      explication: 'Si la clé touche la caisse en débranchant le négatif, il ne se passe rien, car la caisse est déjà au négatif.'
    },
    {
      id: 'elec-q5', sousTheme: 'charge', type: 'qcm',
      enonce: 'Moteur tournant, quelle tension indique une charge correcte ?',
      choix: ['Entre 13,5 et 14,5 V', 'Entre 11 et 12 V', 'Exactement 12 V', 'Plus de 16 V'],
      bonne: 0,
      explication: 'L\'alternateur doit fournir plus que la tension de la batterie pour la recharger, sans dépasser environ 14,5 V.'
    },
    {
      id: 'elec-q6', sousTheme: 'mesures', type: 'qcm',
      enonce: 'Un fusible de 15 A a grillé. Par quoi le remplacer ?',
      choix: ['Un fusible de 15 A, après avoir cherché la cause', 'Un fusible de 30 A pour être tranquille', 'Un fil électrique', 'Un fusible de 5 A'],
      bonne: 0,
      explication: 'Un calibre plus fort ne protège plus le circuit : risque de fils qui chauffent et d\'incendie.'
    },
    {
      id: 'elec-q7', sousTheme: 'batterie', type: 'qcm', niveau: 2,
      enonce: 'Au repos, une batterie affiche 12,0 V. Que peut-on en conclure ?',
      choix: ['Elle est nettement déchargée', 'Elle est parfaitement chargée', 'Elle est surchargée', 'La mesure est impossible au repos'],
      bonne: 0,
      explication: 'Une batterie chargée est autour de 12,6 V au repos. À 12,0 V, il faut la recharger et la tester.'
    },
    {
      id: 'elec-q8', sousTheme: 'charge', type: 'qcm',
      enonce: 'Dans l\'alternateur, quel composant transforme l\'alternatif en continu ?',
      choix: ['Le pont de diodes', 'Le régulateur', 'Le rotor', 'Les charbons'],
      bonne: 0,
      explication: 'Les diodes ne laissent passer le courant que dans un sens : elles redressent le courant.'
    },
    {
      id: 'elec-q9', sousTheme: 'mesures', type: 'qcm',
      enonce: 'Pour mesurer une résistance à l\'ohmmètre, le circuit doit être :',
      choix: ['Hors tension', 'Sous tension, moteur tournant', 'Sous tension, contact mis', 'Branché en série avec la batterie'],
      bonne: 0,
      explication: 'L\'ohmmètre envoie son propre petit courant. Une tension extérieure fausse la mesure et peut l\'abîmer.'
    },
    {
      id: 'elec-q10', sousTheme: 'mesures', type: 'vf',
      enonce: 'Vrai ou faux : un ampèremètre se branche en parallèle.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : il se branche en série, le courant doit le traverser. En parallèle, on crée un court-circuit.'
    },
    {
      id: 'elec-q11', sousTheme: 'bases', type: 'qcm',
      enonce: 'Quelle est l\'unité de la résistance électrique ?',
      choix: ['L\'ohm (Ω)', 'Le volt (V)', 'L\'ampère (A)', 'Le watt (W)'],
      bonne: 0,
      explication: 'Tension en volts, intensité en ampères, résistance en ohms, puissance en watts.'
    },
    {
      id: 'elec-q12', sousTheme: 'batterie', type: 'qcm',
      enonce: 'Sur une batterie marquée « 12 V 70 Ah 640 A », que représente 640 A ?',
      choix: ['Le courant de démarrage qu\'elle peut fournir à froid', 'Sa capacité', 'Sa tension de charge', 'Le courant de charge de l\'alternateur'],
      bonne: 0,
      explication: '70 Ah, c\'est la capacité (la réserve d\'énergie). 640 A, c\'est l\'intensité qu\'elle peut débiter brièvement au démarrage par temps froid.'
    },
    {
      id: 'elec-q13', sousTheme: 'charge', type: 'qcm', niveau: 2,
      enonce: 'Le voyant de charge reste allumé moteur tournant. Que suspecter en premier ?',
      choix: ['Un défaut de charge : courroie d\'accessoires, alternateur ou régulateur', 'Un manque d\'huile moteur', 'Une ampoule de feu stop grillée', 'Un fusible d\'autoradio grillé'],
      bonne: 0,
      explication: 'Le voyant indique que l\'alternateur ne charge pas. On contrôle d\'abord la courroie, puis la tension de charge au voltmètre.'
    },
    {
      id: 'elec-q14', sousTheme: 'charge', type: 'qcm',
      enonce: 'Quel organe fait tourner le moteur thermique pour le démarrer ?',
      choix: ['Le démarreur', 'L\'alternateur', 'Le motoventilateur', 'La pompe à eau'],
      bonne: 0,
      explication: 'Le démarreur est un moteur électrique : son pignon s\'engrène sur la couronne du volant moteur pour le lancer.'
    },
    {
      id: 'elec-q15', sousTheme: 'charge', type: 'qcm', image: 'alternateur',
      enonce: 'Quelle est cette pièce ?',
      choix: ['Un alternateur', 'Un démarreur', 'Une pompe de direction assistée', 'Un compresseur de climatisation'],
      bonne: 0,
      explication: 'Entraîné par la courroie d\'accessoires (poulie striée à l\'avant), il recharge la batterie et alimente le véhicule quand le moteur tourne.'
    },
    {
      id: 'elec-q16', sousTheme: 'charge', type: 'qcm', image: 'demarreur',
      enonce: 'Quelle est cette pièce ?',
      choix: ['Un démarreur', 'Un alternateur', 'Un moteur d\'essuie-glace', 'Une pompe à eau électrique'],
      bonne: 0,
      explication: 'On reconnaît le moteur électrique, le solénoïde (le petit cylindre au-dessus) et le pignon lanceur, qui s\'engrène sur la couronne du volant moteur.'
    },
    {
      id: 'elec-q17', sousTheme: 'batterie', type: 'qcm', image: 'batterie',
      enonce: 'L\'étiquette indique « 12 V 80 Ah 750 A (EN) ». Que veut dire « 80 Ah » ?',
      choix: ['Sa capacité : la quantité d\'énergie qu\'elle stocke', 'Son courant de démarrage à froid', 'Sa tension', 'Sa puissance en watts'],
      bonne: 0,
      explication: '80 Ah : elle peut fournir environ 4 A pendant 20 heures. Les 750 A (norme EN) sont l\'intensité qu\'elle peut débiter au démarrage, à froid.'
    },
    {
      id: 'elec-q18', sousTheme: 'mesures', type: 'qcm', image: 'multimetre',
      enonce: 'Quel appareil voit-on ?',
      choix: ['Un multimètre', 'Un réfractomètre', 'Un manomètre', 'Une valise de diagnostic'],
      bonne: 0,
      explication: 'Selon la position du sélecteur, il mesure une tension (voltmètre), une intensité (ampèremètre) ou une résistance (ohmmètre).'
    },
    {
      id: 'elec-q19', sousTheme: 'bases', type: 'qcm',
      enonce: 'Une résistance de 6 Ω est traversée par un courant de 2 A. Quelle est la tension à ses bornes ?',
      choix: ['12 V', '3 V', '8 V', '0,33 V'],
      bonne: 0,
      explication: 'Loi d\'Ohm : U = R × I = 6 × 2 = **12 V**.'
    },
    {
      id: 'elec-q20', sousTheme: 'bases', type: 'qcm',
      enonce: 'Quelle grandeur se mesure en ampères ?',
      choix: ['L\'intensité du courant', 'La tension', 'La résistance', 'La puissance'],
      bonne: 0,
      explication: 'Intensité en ampères (A), tension en volts (V), résistance en ohms (Ω), puissance en watts (W).'
    },
    {
      id: 'elec-q21', sousTheme: 'batterie', type: 'qcm',
      enonce: 'À quoi est reliée la borne négative de la batterie ?',
      choix: ['À la masse, c\'est-à-dire la caisse du véhicule', 'Au démarreur uniquement', 'Au boîtier de fusibles', 'À l\'alternateur uniquement'],
      bonne: 0,
      explication: 'Le retour du courant se fait par la **masse** : la caisse métallique du véhicule.'
    },
    {
      id: 'elec-q22', sousTheme: 'batterie', type: 'qcm',
      enonce: 'Pourquoi recharge-t-on une batterie dans un local aéré, loin des flammes et des étincelles ?',
      choix: ['Elle dégage de l\'hydrogène, un gaz explosif', 'Elle dégage du monoxyde de carbone', 'Elle risque de geler', 'Pour qu\'elle refroidisse plus vite'],
      bonne: 0,
      explication: 'Pendant la charge, la batterie au plomb dégage de l\'**hydrogène**, qui peut exploser au contact d\'une étincelle.'
    },
    {
      id: 'elec-q23', sousTheme: 'mesures', type: 'qcm',
      enonce: 'Quel appareil mesure l\'intensité sans couper le circuit ?',
      choix: ['Une pince ampèremétrique', 'Un voltmètre branché en parallèle', 'Un ohmmètre', 'Un réfractomètre'],
      bonne: 0,
      explication: 'La **pince ampèremétrique** entoure le fil et mesure le courant qui le traverse, sans le débrancher.'
    },
    {
      id: 'elec-q24', sousTheme: 'bases', type: 'qcm', niveau: 2,
      enonce: 'Deux ampoules de 21 W sont alimentées en 12 V. Quelle intensité totale consomment-elles ?',
      choix: ['3,5 A', '1,75 A', '7 A', '252 A'],
      bonne: 0,
      explication: 'Puissance totale : 21 + 21 = 42 W. I = P ÷ U = 42 ÷ 12 = **3,5 A**. Le piège : 21 ÷ 12 = 1,75 A pour une seule ampoule.'
    },
    {
      id: 'elec-q25', sousTheme: 'batterie', type: 'qcm', niveau: 2,
      enonce: 'Batterie de 60 Ah. Un plafonnier qui consomme 0,5 A reste allumé. En théorie, au bout de combien de temps la batterie est-elle vide ?',
      choix: ['120 heures, soit 5 jours', '30 heures', '60 heures', '12 heures'],
      bonne: 0,
      explication: 'Durée = capacité ÷ intensité = 60 ÷ 0,5 = **120 h**. En pratique, le moteur ne pourra plus démarrer bien avant.'
    },
    {
      id: 'elec-q26', sousTheme: 'charge', type: 'qcm', niveau: 2,
      enonce: 'Moteur tournant, la tension aux bornes de la batterie est de 12,2 V. Que conclure ?',
      choix: ['La charge est insuffisante : l\'alternateur ne fournit pas assez', 'La charge est parfaite', 'La batterie est surchargée', 'C\'est normal moteur tournant'],
      bonne: 0,
      explication: 'Moteur tournant, il faut environ **13,5 à 14,5 V**. À 12,2 V, la batterie se décharge : courroie, alternateur ou régulateur.'
    },
    {
      id: 'elec-q27', sousTheme: 'mesures', type: 'qcm', niveau: 3,
      enonce: 'Le circuit fonctionne. On mesure 0 V aux bornes d\'un fusible en place. Que conclure ?',
      choix: ['Le fusible est bon : un fusible intact ne crée presque pas de chute de tension', 'Le fusible est grillé', 'La batterie est vide', 'Le multimètre est forcément en panne'],
      bonne: 0,
      explication: 'Un fusible intact se comporte comme un fil : presque aucune tension à ses bornes. Un fusible **grillé**, circuit alimenté, ferait apparaître environ 12 V à ses bornes.'
    },
    {
      id: 'elec-q28', sousTheme: 'batterie', type: 'qcm', niveau: 3,
      enonce: 'Une batterie affiche 12,6 V au repos, mais tombe à 8 V pendant le démarrage et le moteur tourne lentement. Conclusion ?',
      choix: ['La batterie est usée : elle est chargée mais ne tient plus le courant de démarrage', 'La batterie est en parfait état', 'L\'alternateur ne charge pas', 'Le fusible du démarreur est grillé'],
      bonne: 0,
      explication: 'La tension au repos ne suffit pas à juger une batterie. Au démarrage, elle ne doit pas descendre trop bas (souvent pas sous 9,5 à 10 V) : on fait un **test de charge**.'
    },
    {
      id: 'elec-q29', sousTheme: 'charge', type: 'qcm', niveau: 3,
      enonce: 'Tension de charge mesurée : 15,5 V moteur tournant. Quel est le risque, et quel élément suspecter ?',
      choix: ['Une surcharge qui abîme la batterie et les ampoules : régulateur défectueux', 'Aucun risque : plus c\'est haut, mieux c\'est', 'La batterie est déchargée : il faut la changer', 'La courroie d\'accessoires patine'],
      bonne: 0,
      explication: 'Au-delà d\'environ 14,5 V, la batterie surchauffe et perd son électrolyte, les ampoules grillent. Le **régulateur** de l\'alternateur ne limite plus la tension.'
    }
  ]
});
