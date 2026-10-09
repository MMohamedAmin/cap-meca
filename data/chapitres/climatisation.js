CAP.ajouterChapitre({
  id: 'climatisation',
  titre: 'Climatisation',
  icone: '❄️',
  description: 'Principe du froid, composants du circuit, fluide frigorigène et réglementation, entretien et pannes.',
  sousThemes: {
    principe: 'Principe du froid',
    circuit: 'Composants du circuit',
    fluide: 'Fluide et réglementation',
    entretien: 'Entretien et pannes'
  },

  fiche: [
    {
      titre: 'Le principe du froid',
      sousTheme: 'principe',
      contenu: [
        'Un fluide **absorbe de la chaleur quand il s\'évapore** et **en rejette quand il se condense**. La climatisation utilise ce principe pour prendre la chaleur de l\'habitacle et la rejeter dehors.',
        { liste: [
          '**Compresseur** : comprime le fluide gazeux. Il devient chaud et sous haute pression.',
          '**Condenseur** (à l\'avant du véhicule) : le fluide cède sa chaleur à l\'air extérieur et redevient liquide.',
          '**Détendeur** : fait chuter la pression du liquide, qui devient très froid.',
          '**Évaporateur** (dans la planche de bord) : le fluide s\'évapore en absorbant la chaleur de l\'air envoyé dans l\'habitacle, puis retourne au compresseur.'
        ] },
        { retenir: 'L\'évaporateur froid condense aussi l\'**humidité** de l\'air : la climatisation sèche l\'air et aide à **désembuer**, même en hiver.' }
      ]
    },
    {
      titre: 'Les composants du circuit',
      sousTheme: 'circuit',
      contenu: [
        { liste: [
          '**Compresseur** : entraîné par la courroie d\'accessoires (souvent par un embrayage électromagnétique), ou électrique sur les véhicules hybrides et électriques.',
          '**Bouteille déshydratante** (ou filtre déshydrateur) : retient l\'humidité et filtre le fluide.',
          '**Pressostat** : coupe le compresseur si la pression est trop basse (manque de fluide) ou trop haute.',
          '**Pulseur** : ventilateur qui envoie l\'air à travers l\'évaporateur vers l\'habitacle.',
          '**Filtre d\'habitacle** : retient les poussières et pollens de l\'air envoyé dans l\'habitacle.'
        ] },
        'À l\'arrêt et à basse vitesse, le **motoventilateur** fait passer l\'air dans le condenseur : sans lui, la climatisation refroidit mal dans les bouchons.'
      ]
    },
    {
      titre: 'Le fluide et la réglementation',
      sousTheme: 'fluide',
      contenu: [
        'Deux fluides : le **R134a** sur les véhicules plus anciens et le **R1234yf** sur la plupart des véhicules récents. On ne les **mélange jamais** : les raccords et les huiles sont différents.',
        'La quantité de fluide est indiquée **en grammes** sur une étiquette (souvent sous le capot). On la met avec une **station de charge**.',
        { liste: [
          'Le fluide ne doit **jamais être rejeté à l\'air libre** : on le récupère avec une station.',
          'Seule une personne qui a l\'**attestation d\'aptitude** peut intervenir sur le circuit.'
        ] },
        { attention: 'Projeté sur la peau ou dans les yeux, le fluide provoque des **brûlures par le froid** : gants et lunettes.' }
      ]
    },
    {
      titre: 'Entretien et pannes',
      sousTheme: 'entretien',
      contenu: [
        { liste: [
          'Remplacer le **filtre d\'habitacle** selon le constructeur : odeurs, buée et poussières sinon.',
          'Faire fonctionner la clim **régulièrement**, même l\'hiver : l\'huile mélangée au fluide graisse le compresseur et garde les joints souples.',
          'Une **flaque d\'eau** sous la voiture après usage est **normale** : c\'est l\'humidité condensée par l\'évaporateur.'
        ] },
        { liste: [
          'Clim qui ne refroidit plus : souvent un **manque de fluide** (fuite). On cherche la fuite **avant** de recharger.',
          'Refroidit mal seulement dans les bouchons : **motoventilateur** ou condenseur encrassé.',
          'Odeur de moisi : filtre d\'habitacle, puis **désinfection de l\'évaporateur**.'
        ] }
      ]
    }
  ],

  cartes: [
    { id: 'clim-c1', sousTheme: 'principe', recto: 'Où le fluide absorbe-t-il la chaleur de l\'habitacle ?', verso: 'Dans l\'**évaporateur**.' },
    { id: 'clim-c2', sousTheme: 'principe', recto: 'Où le fluide rejette-t-il la chaleur ?', verso: 'Dans le **condenseur**, à l\'avant du véhicule.' },
    { id: 'clim-c3', sousTheme: 'principe', recto: 'Trajet du fluide dans le circuit ?', verso: '**Compresseur → condenseur → détendeur → évaporateur** → retour au compresseur.' },
    { id: 'clim-c4', sousTheme: 'circuit', recto: 'Rôle du compresseur de climatisation ?', verso: '**Comprimer** le fluide gazeux et le faire circuler.' },
    { id: 'clim-c5', sousTheme: 'circuit', recto: 'Rôle du détendeur ?', verso: 'Faire **chuter la pression** du fluide, ce qui le refroidit fortement.' },
    { id: 'clim-c6', sousTheme: 'circuit', recto: 'Rôle de la bouteille déshydratante ?', verso: 'Retenir l\'**humidité** et filtrer le fluide.' },
    { id: 'clim-c7', sousTheme: 'circuit', recto: 'Rôle du pressostat ?', verso: 'Couper le compresseur si la **pression** est anormale (trop basse ou trop haute).' },
    { id: 'clim-c8', sousTheme: 'fluide', recto: 'Quels fluides frigorigènes en automobile ?', verso: '**R134a** (anciens véhicules) et **R1234yf** (récents). On ne les mélange jamais.' },
    { id: 'clim-c9', sousTheme: 'fluide', recto: 'Règles pour intervenir sur le circuit ?', verso: '**Récupérer** le fluide avec une station, jamais à l\'air libre, et avoir l\'**attestation d\'aptitude**.' },
    { id: 'clim-c10', sousTheme: 'fluide', recto: 'Danger du fluide frigorigène sur la peau ?', verso: 'Une **brûlure par le froid** : gants et lunettes.' },
    { id: 'clim-c11', sousTheme: 'entretien', recto: 'Pourquoi utiliser la clim même en hiver ?', verso: 'Pour **graisser** le compresseur et garder les joints souples. Elle aide aussi à **désembuer**.' },
    { id: 'clim-c12', sousTheme: 'entretien', recto: 'Flaque d\'eau sous la voiture après usage de la clim ?', verso: '**Normal** : c\'est l\'humidité condensée par l\'évaporateur.' }
  ],

  questions: [
    {
      id: 'clim-q1', sousTheme: 'principe', type: 'qcm',
      enonce: 'Dans quel organe le fluide absorbe-t-il la chaleur de l\'air de l\'habitacle ?',
      choix: ['L\'évaporateur', 'Le condenseur', 'Le compresseur', 'Le radiateur de refroidissement'],
      bonne: 0,
      explication: 'Dans l\'**évaporateur**, le fluide s\'évapore : pour cela, il prend la chaleur de l\'air qui le traverse.'
    },
    {
      id: 'clim-q2', sousTheme: 'principe', type: 'qcm',
      enonce: 'Où le fluide rejette-t-il la chaleur prise dans l\'habitacle ?',
      choix: ['Dans le condenseur, à l\'avant du véhicule', 'Dans l\'évaporateur', 'Dans le réservoir de carburant', 'Dans le filtre d\'habitacle'],
      bonne: 0,
      explication: 'Dans le **condenseur**, le fluide chaud cède sa chaleur à l\'air extérieur et redevient liquide.'
    },
    {
      id: 'clim-q3', sousTheme: 'circuit', type: 'qcm',
      enonce: 'Quel organe comprime le fluide et le fait circuler ?',
      choix: ['Le compresseur', 'Le détendeur', 'La bouteille déshydratante', 'Le pulseur d\'air'],
      bonne: 0,
      explication: 'Le **compresseur** aspire le fluide gazeux et le refoule chaud, sous haute pression.'
    },
    {
      id: 'clim-q4', sousTheme: 'circuit', type: 'qcm',
      enonce: 'Quel est le rôle de la bouteille déshydratante ?',
      choix: ['Retenir l\'humidité et filtrer le fluide', 'Stocker l\'eau du lave-glace', 'Refroidir le moteur', 'Mesurer la pression'],
      bonne: 0,
      explication: 'L\'**humidité** est l\'ennemie du circuit : elle peut geler dans le détendeur et former de l\'acide. La bouteille la retient.'
    },
    {
      id: 'clim-q5', sousTheme: 'fluide', type: 'qcm',
      enonce: 'Quel fluide frigorigène équipe la plupart des véhicules récents ?',
      choix: ['Le R1234yf', 'Le R134a', 'De l\'eau glycolée', 'De l\'air comprimé'],
      bonne: 0,
      explication: 'Le **R1234yf** a remplacé le R134a, qui contribue beaucoup plus à l\'effet de serre. Les deux ne se mélangent pas.'
    },
    {
      id: 'clim-q6', sousTheme: 'fluide', type: 'vf',
      enonce: 'Vrai ou faux : avant une réparation, on peut vider le fluide de climatisation à l\'air libre.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : c\'est **interdit**. Le fluide est récupéré avec une **station** de récupération, par une personne attestée.'
    },
    {
      id: 'clim-q7', sousTheme: 'fluide', type: 'qcm',
      enonce: 'Qui peut intervenir sur le circuit de fluide d\'une climatisation ?',
      choix: ['Une personne qui a l\'attestation d\'aptitude, avec le matériel de récupération', 'N\'importe qui', 'Seulement le client', 'Seulement le contrôleur technique'],
      bonne: 0,
      explication: 'La manipulation des fluides frigorigènes est **réglementée** : il faut une attestation et une station adaptée.'
    },
    {
      id: 'clim-q8', sousTheme: 'fluide', type: 'qcm',
      enonce: 'Quel est le risque d\'une projection de fluide frigorigène sur la peau ?',
      choix: ['Une brûlure par le froid', 'Une brûlure par l\'acide', 'Aucun risque', 'Une décharge électrique'],
      bonne: 0,
      explication: 'En s\'évaporant, le fluide devient **très froid** : il gèle la peau ou l\'œil. Gants et lunettes obligatoires.'
    },
    {
      id: 'clim-q9', sousTheme: 'entretien', type: 'qcm',
      enonce: 'Quel filtre remplace-t-on pour supprimer les poussières et améliorer l\'air de l\'habitacle ?',
      choix: ['Le filtre d\'habitacle', 'Le filtre à huile', 'Le filtre à carburant', 'Le filtre à particules'],
      bonne: 0,
      explication: 'Le **filtre d\'habitacle** retient poussières et pollens. Encrassé, il donne des odeurs et de la buée.'
    },
    {
      id: 'clim-q10', sousTheme: 'entretien', type: 'vf',
      enonce: 'Vrai ou faux : une petite flaque d\'eau sous la voiture après avoir utilisé la climatisation est normale.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : l\'évaporateur condense l\'**humidité** de l\'air, et cette eau s\'écoule sous le véhicule.'
    },
    {
      id: 'clim-q11', sousTheme: 'principe', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi la climatisation aide-t-elle à désembuer le pare-brise, même en hiver ?',
      choix: ['L\'évaporateur froid condense l\'humidité : l\'air envoyé sur la vitre est plus sec', 'Elle chauffe directement la vitre', 'Elle aspire la buée', 'Elle n\'aide pas à désembuer'],
      bonne: 0,
      explication: 'La buée, c\'est l\'humidité de l\'air qui se dépose sur la vitre froide. Un air **sec** l\'évapore. Le chauffage le réchauffe ensuite.'
    },
    {
      id: 'clim-q12', sousTheme: 'circuit', type: 'qcm', niveau: 2,
      enonce: 'Quel est le rôle du détendeur ?',
      choix: ['Faire chuter la pression du fluide liquide avant l\'évaporateur, ce qui le refroidit', 'Comprimer le fluide gazeux', 'Filtrer le fluide', 'Refroidir le moteur'],
      bonne: 0,
      explication: 'En passant brusquement de haute à basse pression, le liquide devient **très froid** et peut s\'évaporer dans l\'évaporateur.'
    },
    {
      id: 'clim-q13', sousTheme: 'fluide', type: 'qcm', niveau: 2,
      enonce: 'Comment connaît-on la quantité de fluide à mettre dans un circuit de climatisation ?',
      choix: ['Sur l\'étiquette du constructeur, en grammes, et on la met avec une station de charge', 'On remplit jusqu\'à ce que ça déborde', 'C\'est toujours un litre', 'Comme pour l\'huile moteur, avec une jauge'],
      bonne: 0,
      explication: 'La charge est précise, **en grammes** : trop ou trop peu, et la climatisation refroidit mal ou s\'abîme.'
    },
    {
      id: 'clim-q14', sousTheme: 'entretien', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi conseiller au client de faire fonctionner sa climatisation régulièrement, même en hiver ?',
      choix: ['L\'huile mélangée au fluide graisse le compresseur et garde les joints souples', 'Pour recharger la batterie', 'Pour refroidir le moteur', 'Cela n\'a aucun intérêt'],
      bonne: 0,
      explication: 'Un circuit qui ne tourne jamais voit ses **joints sécher** : des fuites apparaissent et le compresseur est mal graissé.'
    },
    {
      id: 'clim-q15', sousTheme: 'principe', type: 'qcm', niveau: 3,
      enonce: 'Dans les bouchons, la clim refroidit de moins en moins, mais elle marche bien en roulant. Que suspecter en premier ?',
      choix: ['Le condenseur n\'est pas assez refroidi : motoventilateur en panne ou condenseur encrassé', 'La bouteille déshydratante', 'Le filtre d\'habitacle', 'Un manque d\'huile moteur'],
      bonne: 0,
      explication: 'En roulant, l\'air traverse le condenseur. À l\'arrêt, c\'est le **motoventilateur** qui le fait. Sans lui, le fluide ne rejette plus sa chaleur.'
    },
    {
      id: 'clim-q16', sousTheme: 'circuit', type: 'qcm', niveau: 3,
      enonce: 'La clim ne refroidit plus et le compresseur ne s\'enclenche pas. Fusible et relais sont bons. La station mesure une pression très basse dans le circuit. Que conclure ?',
      choix: ['Il manque du fluide (fuite) : le pressostat interdit l\'enclenchement. Chercher la fuite avant de recharger', 'Le compresseur est forcément hors service', 'Il faut ajouter de l\'eau dans le circuit', 'Le filtre d\'habitacle est bouché'],
      bonne: 0,
      explication: 'Le **pressostat** protège le compresseur : sans assez de fluide (et donc d\'huile), il l\'empêche de tourner. Recharger sans réparer, c\'est perdre le fluide à nouveau.'
    },
    {
      id: 'clim-q17', sousTheme: 'fluide', type: 'qcm', niveau: 3,
      enonce: 'Un véhicule au R1234yf a une fuite. Un collègue propose de le recharger avec du R134a « qu\'on a en stock ». Que répondre ?',
      choix: ['Non : on ne change pas de fluide (raccords et huiles différents), et il faut d\'abord réparer la fuite', 'Oui, les deux fluides sont identiques', 'Oui, si on en met un peu moins', 'Oui, en ajoutant de l\'huile moteur'],
      bonne: 0,
      explication: 'Chaque circuit est prévu pour **un seul fluide**. Les raccords sont même différents pour éviter les erreurs. Et une fuite se répare avant toute recharge.'
    },
    {
      id: 'clim-q18', sousTheme: 'entretien', type: 'qcm', niveau: 3,
      enonce: 'Odeur de moisi quand on allume la ventilation, alors que le filtre d\'habitacle est neuf. Que proposer ?',
      choix: ['Un traitement désinfectant de l\'évaporateur, et vérifier l\'écoulement de l\'eau condensée', 'Recharger le fluide', 'Remplacer le compresseur', 'Faire la vidange du moteur'],
      bonne: 0,
      explication: 'L\'évaporateur est humide : des moisissures peuvent s\'y développer. On le **désinfecte**, et on vérifie que l\'eau s\'écoule bien dehors.'
    }
  ]
});
