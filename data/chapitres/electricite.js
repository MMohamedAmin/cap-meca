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
      id: 'elec-q7', sousTheme: 'batterie', type: 'qcm',
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
    }
  ]
});
