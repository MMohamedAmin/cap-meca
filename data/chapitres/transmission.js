CAP.ajouterChapitre({
  id: 'transmission',
  titre: 'Transmission',
  icone: '🔩',
  description: 'Embrayage, boîte de vitesses, différentiel et arbres de transmission.',
  sousThemes: {
    embrayage: 'Embrayage',
    boite: 'Boîte de vitesses',
    differentiel: 'Différentiel',
    transmissions: 'Arbres de transmission'
  },

  fiche: [
    {
      titre: 'La chaîne de transmission',
      sousTheme: 'boite',
      contenu: [
        'Le mouvement va du **moteur** aux **roues** : moteur → **embrayage** → **boîte de vitesses** → **différentiel** → **arbres de transmission** → roues.',
        'La boîte **adapte le couple et la vitesse** du moteur aux besoins : la **1re** donne beaucoup de couple aux roues mais peu de vitesse, les rapports supérieurs l\'inverse.',
        'Les **synchroniseurs** égalisent la vitesse des pignons avant l\'engagement : on passe les vitesses sans craquement.',
        'La **marche arrière** utilise un **pignon intermédiaire** (inverseur) qui change le sens de rotation.'
      ]
    },
    {
      titre: 'L\'embrayage',
      sousTheme: 'embrayage',
      contenu: [
        'Rôle : **accoupler et désaccoupler** progressivement le moteur et la boîte.',
        { liste: [
          '**Volant moteur** (sur le vilebrequin).',
          '**Disque** avec ses garnitures, solidaire de l\'arbre d\'entrée de boîte.',
          '**Mécanisme** : le **plateau de pression** et son **diaphragme** serrent le disque contre le volant.',
          '**Butée** : appuie sur le diaphragme pour débrayer.',
          '**Commande** par câble ou hydraulique (émetteur et récepteur).'
        ] },
        { retenir: 'Embrayage qui **patine** : le régime moteur monte mais la voiture n\'accélère pas, odeur de brûlé possible. Garnitures usées ou huilées.' }
      ]
    },
    {
      titre: 'Le différentiel',
      sousTheme: 'differentiel',
      contenu: [
        'En virage, la roue extérieure parcourt plus de chemin que la roue intérieure. Le **différentiel** permet aux deux roues motrices de **tourner à des vitesses différentes** tout en recevant le couple.'
      ]
    },
    {
      titre: 'Les arbres de transmission',
      sousTheme: 'transmissions',
      contenu: [
        'Ils relient le différentiel aux roues. Leurs **joints homocinétiques** transmettent le mouvement à vitesse constante malgré le braquage et les mouvements de suspension.',
        'Les joints sont protégés par des **soufflets** remplis de graisse.',
        { attention: 'Soufflet déchiré : la graisse s\'échappe et la saleté entre. Le joint s\'use et **claque en virage** braqué. Il faut remplacer le soufflet dès que possible.' }
      ]
    }
  ],

  cartes: [
    { id: 'trans-c1', sousTheme: 'differentiel', recto: 'Rôle du différentiel ?', verso: 'Permettre aux roues motrices de **tourner à des vitesses différentes** en virage.' },
    { id: 'trans-c2', sousTheme: 'boite', recto: 'Rôle des synchroniseurs ?', verso: '**Égaliser les vitesses** avant l\'engagement d\'un rapport, pour passer sans craquement.' },
    { id: 'trans-c3', sousTheme: 'embrayage', recto: 'Symptômes d\'un embrayage qui patine ?', verso: 'Le **régime monte** mais la voiture **n\'accélère pas**, odeur de brûlé.' },
    { id: 'trans-c4', sousTheme: 'embrayage', recto: 'Rôle de la butée d\'embrayage ?', verso: 'Appuyer sur le **diaphragme** pour **débrayer**.' },
    { id: 'trans-c5', sousTheme: 'transmissions', recto: 'Symptôme d\'un joint homocinétique usé ?', verso: '**Claquements en virage** braqué.' },
    { id: 'trans-c6', sousTheme: 'boite', recto: 'Comment la marche arrière inverse-t-elle le sens ?', verso: 'Grâce à un **pignon intermédiaire** (inverseur).' }
  ],

  questions: [
    {
      id: 'trans-q1', sousTheme: 'differentiel', type: 'qcm',
      enonce: 'Quel est le rôle du différentiel ?',
      choix: ['Permettre aux roues motrices de tourner à des vitesses différentes', 'Changer de rapport de vitesse', 'Désaccoupler le moteur de la boîte', 'Bloquer les roues à l\'arrêt'],
      bonne: 0,
      explication: 'En virage, la roue extérieure doit tourner plus vite que la roue intérieure.'
    },
    {
      id: 'trans-q2', sousTheme: 'embrayage', type: 'qcm',
      enonce: 'En accélérant, le régime moteur monte mais la voiture n\'accélère pas. Cause probable ?',
      choix: ['L\'embrayage patine', 'Les synchroniseurs sont usés', 'Le différentiel est cassé', 'Un soufflet de transmission est déchiré'],
      bonne: 0,
      explication: 'Le disque glisse au lieu de transmettre tout le couple : garnitures usées ou huilées.'
    },
    {
      id: 'trans-q3', sousTheme: 'boite', type: 'qcm',
      enonce: 'À quoi servent les synchroniseurs ?',
      choix: ['À égaliser les vitesses pour engager un rapport sans craquement', 'À synchroniser l\'allumage', 'À répartir le couple entre les roues', 'À commander l\'embrayage'],
      bonne: 0,
      explication: 'Ils freinent ou accélèrent le pignon pour qu\'il tourne à la même vitesse que l\'arbre avant l\'engagement.'
    },
    {
      id: 'trans-q4', sousTheme: 'transmissions', type: 'qcm',
      enonce: 'Que risque-t-on avec un soufflet de transmission déchiré ?',
      choix: ['L\'usure du joint homocinétique, avec des claquements en virage', 'Une fuite de liquide de frein', 'Un patinage de l\'embrayage', 'Une surchauffe moteur'],
      bonne: 0,
      explication: 'La graisse sort, la saleté entre, et le joint s\'use rapidement.'
    },
    {
      id: 'trans-q5', sousTheme: 'boite', type: 'qcm',
      enonce: 'Comment la boîte inverse-t-elle le sens de rotation pour la marche arrière ?',
      choix: ['Avec un pignon intermédiaire (inverseur)', 'En inversant le sens du moteur', 'Avec le différentiel', 'En débrayant'],
      bonne: 0,
      explication: 'Un pignon de plus entre deux pignons change le sens de rotation.'
    },
    {
      id: 'trans-q6', sousTheme: 'embrayage', type: 'qcm',
      enonce: 'Quelle pièce serre le disque d\'embrayage contre le volant moteur ?',
      choix: ['Le plateau de pression (mécanisme à diaphragme)', 'La butée', 'Le récepteur', 'Le synchroniseur'],
      bonne: 0,
      explication: 'Le diaphragme pousse le plateau de pression, qui pince le disque contre le volant.'
    },
    {
      id: 'trans-q7', sousTheme: 'boite', type: 'qcm',
      enonce: 'Quel rapport donne le plus de couple aux roues ?',
      choix: ['La 1re', 'La 5e', 'La 3e', 'Ils donnent tous le même couple'],
      bonne: 0,
      explication: 'La 1re est la plus démultipliée : beaucoup de couple, peu de vitesse. Idéale pour démarrer.'
    },
    {
      id: 'trans-q8', sousTheme: 'embrayage', type: 'qcm',
      enonce: 'Quel est le rôle de la butée d\'embrayage ?',
      choix: ['Appuyer sur le diaphragme pour débrayer', 'Limiter la course de la pédale', 'Égaliser les vitesses', 'Fixer le disque sur l\'arbre'],
      bonne: 0,
      explication: 'Quand on appuie sur la pédale, la butée pousse le centre du diaphragme, qui libère le disque.'
    },
    {
      id: 'trans-q9', sousTheme: 'embrayage', type: 'vf',
      enonce: 'Vrai ou faux : l\'embrayage permet de désaccoupler progressivement le moteur de la boîte.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : c\'est son rôle, pour démarrer et changer de vitesse.'
    },
    {
      id: 'trans-q10', sousTheme: 'differentiel', type: 'qcm',
      enonce: 'Une roue motrice patine sur la glace, l\'autre reste immobile. Pourquoi ?',
      choix: ['Le différentiel envoie la rotation vers la roue qui résiste le moins', 'Le différentiel est cassé', 'L\'embrayage patine', 'La boîte est restée au point mort'],
      bonne: 0,
      explication: 'Un différentiel classique répartit le couple à égalité : si une roue n\'accroche pas, l\'autre ne reçoit presque rien. D\'où l\'antipatinage ou le différentiel à glissement limité.'
    },
    {
      id: 'trans-q11', sousTheme: 'differentiel', type: 'qcm',
      enonce: 'Où se trouve le différentiel sur une traction avant à moteur transversal ?',
      choix: ['Dans le carter de la boîte de vitesses (boîte-pont)', 'Dans le carter moteur', 'Sous le plancher, au milieu du véhicule', 'Dans le moyeu de chaque roue'],
      bonne: 0,
      explication: 'Sur la plupart des tractions, la boîte et le différentiel forment un seul ensemble : la boîte-pont.'
    },
    {
      id: 'trans-q12', sousTheme: 'transmissions', type: 'qcm',
      enonce: 'Quel joint transmet la rotation à vitesse constante, même roue braquée ?',
      choix: ['Le joint homocinétique', 'Le joint de cardan simple', 'Le silentbloc', 'Le joint spi'],
      bonne: 0,
      explication: '« Homocinétique » veut dire « même vitesse ». Un cardan simple, lui, crée des à-coups quand il travaille en angle.'
    },
    {
      id: 'trans-q13', sousTheme: 'transmissions', type: 'vf',
      enonce: 'Vrai ou faux : sur une traction avant, chaque roue avant reçoit le mouvement par son propre arbre de transmission.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : chaque arbre (appelé aussi « cardan ») a un joint côté boîte et un joint homocinétique côté roue.'
    },
    {
      id: 'trans-q14', sousTheme: 'embrayage', type: 'qcm', image: 'kit-embrayage',
      enonce: 'Que contient ce kit ?',
      choix: ['Un mécanisme d\'embrayage, un disque et une butée', 'Des disques et des plaquettes de frein', 'Un kit de distribution', 'Un volant moteur et son démarreur'],
      bonne: 0,
      explication: 'Le mécanisme (la grosse pièce avec le diaphragme) serre le disque contre le volant moteur. La butée appuie sur le diaphragme pour débrayer.'
    },
    {
      id: 'trans-q15', sousTheme: 'differentiel', type: 'qcm', image: 'differentiel',
      enonce: 'Quel organe voit-on, avec sa grande couronne dentée ?',
      choix: ['Un différentiel', 'Une boîte de vitesses', 'Un embrayage', 'Une pompe à huile'],
      bonne: 0,
      explication: 'La couronne est entraînée par le pignon d\'attaque. Dans le boîtier, les satellites et les planétaires permettent aux roues de tourner à des vitesses différentes.'
    },
    {
      id: 'trans-q16', sousTheme: 'transmissions', type: 'qcm', image: 'soufflet-cardan',
      enonce: 'Que constates-tu sur ce soufflet de transmission ?',
      choix: ['Il est fendu : il faut le remplacer rapidement', 'Il est en bon état', 'Il est juste sale : un nettoyage suffit', 'C\'est normal, un soufflet se fend toujours avec le temps et ne sert à rien'],
      bonne: 0,
      explication: 'Par la fente, la graisse sort et la saleté entre : le joint homocinétique va s\'user puis claquer en virage. On remplace le soufflet et on regraisse dès qu\'on le voit.'
    }
  ]
});
