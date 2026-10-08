CAP.ajouterChapitre({
  id: 'liaison-au-sol',
  titre: 'Liaison au sol',
  icone: '🛞',
  description: 'Pneumatiques, roues, suspension, direction et géométrie des trains roulants.',
  sousThemes: {
    pneus: 'Pneumatiques',
    suspension: 'Suspension',
    direction: 'Direction',
    geometrie: 'Géométrie'
  },

  fiche: [
    {
      titre: 'Pneumatiques et roues',
      sousTheme: 'pneus',
      contenu: [
        'Exemple de marquage : **205/55 R16 91V**',
        { liste: [
          '**205** : largeur du pneu en mm.',
          '**55** : série, la hauteur du flanc vaut 55 % de la largeur.',
          '**R** : structure radiale.',
          '**16** : diamètre de la jante en pouces.',
          '**91** : indice de charge.',
          '**V** : indice de vitesse.'
        ] },
        'Date de fabrication (marquage DOT) : 4 chiffres, la **semaine** puis l\'**année**. « 1523 » = semaine 15 de 2023.',
        'La pression se contrôle **à froid**, selon la valeur du constructeur (étiquette sur la portière ou la trappe à carburant).',
        { retenir: 'Profondeur minimale légale des sculptures : **1,6 mm** (témoins d\'usure dans les rainures).' },
        'Les roues se serrent à la **clé dynamométrique**, au couple constructeur, **en croix** (en étoile).'
      ]
    },
    {
      titre: 'La suspension',
      sousTheme: 'suspension',
      contenu: [
        { liste: [
          '**Ressorts** : supportent le poids du véhicule.',
          '**Amortisseurs** : freinent les oscillations des ressorts et gardent la roue au contact du sol.',
          '**Barre stabilisatrice** (anti-roulis) : limite l\'inclinaison de la caisse en virage.',
          '**Triangles**, **rotules** et **silentblocs** : guident la roue.'
        ] },
        { attention: 'Amortisseur usé : rebonds, mauvaise tenue de route et **distance de freinage plus longue**. Fuite d\'huile visible possible.' }
      ]
    },
    {
      titre: 'La direction',
      sousTheme: 'direction',
      contenu: [
        'Le volant entraîne la **colonne**, qui fait coulisser la **crémaillère**. Les **biellettes** et les **rotules de direction** orientent les roues.',
        'L\'**assistance** peut être **hydraulique** (pompe et liquide) ou **électrique** (moteur électrique), aujourd\'hui la plus courante.',
        'Un jeu dans les rotules donne un flottement de la direction et doit être corrigé.'
      ]
    },
    {
      titre: 'La géométrie',
      sousTheme: 'geometrie',
      contenu: [
        { liste: [
          '**Parallélisme** : orientation des roues vues de dessus (pincement ou ouverture).',
          '**Carrossage** : inclinaison de la roue vue de face.',
          '**Chasse** : inclinaison de l\'axe de pivot vue de côté, elle aide la direction à revenir en ligne droite.'
        ] },
        { retenir: 'Mauvais parallélisme : **usure anormale** des pneus (sur un bord) et voiture qui **tire** d\'un côté. Un contrôle de géométrie est conseillé après un choc ou le remplacement de pièces de direction.' }
      ]
    }
  ],

  cartes: [
    { id: 'sol-c1', sousTheme: 'pneus', recto: '205/55 R16 : que signifie 16 ?', verso: 'Le **diamètre de la jante en pouces**.' },
    { id: 'sol-c2', sousTheme: 'pneus', recto: 'Profondeur minimale légale des sculptures ?', verso: '**1,6 mm**.' },
    { id: 'sol-c3', sousTheme: 'pneus', recto: 'DOT 0824 : date de fabrication ?', verso: '**Semaine 8 de 2024**.' },
    { id: 'sol-c4', sousTheme: 'suspension', recto: 'Rôle de l\'amortisseur ?', verso: '**Freiner les oscillations** du ressort et garder la roue au sol.' },
    { id: 'sol-c5', sousTheme: 'suspension', recto: 'Rôle de la barre stabilisatrice ?', verso: '**Limiter le roulis** en virage.' },
    { id: 'sol-c6', sousTheme: 'geometrie', recto: 'Conséquences d\'un mauvais parallélisme ?', verso: '**Usure anormale** des pneus et voiture qui **tire**.' },
    { id: 'sol-c7', sousTheme: 'pneus', recto: 'Comment serrer les roues ?', verso: 'À la **clé dynamométrique**, au couple constructeur, **en croix**.' }
  ],

  questions: [
    {
      id: 'sol-q1', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Sur un pneu 205/55 R16 91V, que signifie « 16 » ?',
      choix: ['Le diamètre de la jante en pouces', 'La largeur en cm', 'L\'indice de charge', 'La pression en bars × 10'],
      bonne: 0,
      explication: '205 = largeur en mm, 55 = série, R = radial, 16 = diamètre de jante en pouces.'
    },
    {
      id: 'sol-q2', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Quelle est la profondeur minimale légale des sculptures d\'un pneu de voiture ?',
      choix: ['1,6 mm', '3 mm', '0,5 mm', '4 mm'],
      bonne: 0,
      explication: 'Les témoins d\'usure dans les rainures indiquent cette limite de 1,6 mm.'
    },
    {
      id: 'sol-q3', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Quand contrôle-t-on la pression des pneus ?',
      choix: ['À froid', 'Après un long trajet', 'Pneus chauds uniquement', 'N\'importe quand, c\'est pareil'],
      bonne: 0,
      explication: 'L\'air chauffe en roulant et la pression augmente : les valeurs constructeur sont données à froid.'
    },
    {
      id: 'sol-q4', sousTheme: 'suspension', type: 'qcm',
      enonce: 'Quel est le rôle de l\'amortisseur ?',
      choix: ['Freiner les oscillations du ressort', 'Porter le poids du véhicule', 'Limiter le roulis', 'Orienter les roues'],
      bonne: 0,
      explication: 'Le ressort porte le poids. L\'amortisseur l\'empêche de rebondir et garde le pneu au contact du sol.'
    },
    {
      id: 'sol-q5', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Un pneu porte le marquage DOT « 1523 ». Quand a-t-il été fabriqué ?',
      choix: ['Semaine 15 de 2023', 'Le 15 février 2023', 'En 2015, semaine 23', 'Le 23 janvier 2015'],
      bonne: 0,
      explication: 'Les deux premiers chiffres sont la semaine, les deux derniers l\'année.'
    },
    {
      id: 'sol-q6', sousTheme: 'geometrie', type: 'qcm',
      enonce: 'Les pneus avant sont usés sur un seul bord. Cause probable ?',
      choix: ['Un défaut de géométrie (parallélisme, carrossage)', 'Une pression trop forte', 'Un amortisseur neuf', 'Un mauvais équilibrage uniquement'],
      bonne: 0,
      explication: 'Une roue mal orientée frotte toujours du même côté. Une pression trop forte use plutôt le centre.'
    },
    {
      id: 'sol-q7', sousTheme: 'suspension', type: 'qcm',
      enonce: 'À quoi sert la barre stabilisatrice ?',
      choix: ['À limiter le roulis en virage', 'À amortir les bosses', 'À régler le parallélisme', 'À porter le moteur'],
      bonne: 0,
      explication: 'Elle relie les deux côtés du train et limite l\'inclinaison de la caisse en virage.'
    },
    {
      id: 'sol-q8', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Comment serre-t-on les écrous ou vis de roue ?',
      choix: ['À la clé dynamométrique, au couple constructeur, en croix', 'Au pistolet pneumatique à fond, dans l\'ordre', 'À la main uniquement', 'Le plus fort possible avec une rallonge'],
      bonne: 0,
      explication: 'Le serrage en croix plaque la roue bien à plat. Trop serrer peut abîmer les filetages ou voiler le disque.'
    },
    {
      id: 'sol-q9', sousTheme: 'suspension', type: 'vf',
      enonce: 'Vrai ou faux : un amortisseur usé peut allonger la distance de freinage.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : la roue rebondit et perd par moments le contact avec la route, donc l\'adhérence diminue.'
    },
    {
      id: 'sol-q10', sousTheme: 'direction', type: 'qcm',
      enonce: 'Dans une direction à crémaillère, quelles pièces relient la crémaillère aux roues ?',
      choix: ['Les biellettes et les rotules de direction', 'Les silentblocs', 'Les amortisseurs', 'Les arbres de transmission'],
      bonne: 0,
      explication: 'La crémaillère coulisse et pousse ou tire les biellettes, qui orientent les roues via les rotules.'
    }
  ]
});
