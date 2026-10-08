CAP.ajouterChapitre({
  id: 'securite',
  titre: 'Sécurité et environnement',
  icone: '🦺',
  description: 'Équipements de protection, levage, produits dangereux, déchets et véhicules électrifiés.',
  sousThemes: {
    epi: 'Protection individuelle',
    levage: 'Levage',
    produits: 'Produits et risques',
    dechets: 'Déchets'
  },

  fiche: [
    {
      titre: 'Équipements de protection individuelle (EPI)',
      sousTheme: 'epi',
      contenu: [
        { liste: [
          '**Chaussures de sécurité** : chutes d\'objets, écrasement.',
          '**Gants** adaptés : **nitrile** pour les huiles, carburants et solvants ; gants de manutention pour les pièces coupantes.',
          '**Lunettes** : projections (liquide de frein, meulage, batterie).',
          '**Protection auditive** pour les travaux bruyants.',
          '**Vêtements de travail** ajustés, sans bijoux près des pièces en rotation.'
        ] }
      ]
    },
    {
      titre: 'Le levage',
      sousTheme: 'levage',
      contenu: [
        'Lever un véhicule uniquement par les **points de levage** préconisés par le constructeur.',
        'Au pont élévateur : vérifier le positionnement des bras et le **verrouillage** avant de travailler dessous.',
        { attention: 'Ne jamais travailler sous un véhicule tenu seulement par un cric : il faut des **chandelles**.' }
      ]
    },
    {
      titre: 'Produits et risques',
      sousTheme: 'produits',
      contenu: [
        'Chaque produit dangereux a une **fiche de données de sécurité (FDS)** : dangers, protections, premiers secours. Les **pictogrammes** de danger (losange rouge) résument les risques : inflammable (flamme), corrosif, toxique, etc.',
        '**Gaz d\'échappement** : ils contiennent du **monoxyde de carbone**, mortel et inodore. Moteur tournant en atelier → **aspiration** des gaz.',
        '**Véhicules hybrides et électriques** : les câbles **orange** sont en **haute tension**. Intervenir dessus demande une **habilitation électrique** spécifique.',
        'Batteries : risque d\'acide et d\'hydrogène explosif pendant la charge.'
      ]
    },
    {
      titre: 'Les déchets',
      sousTheme: 'dechets',
      contenu: [
        'Les déchets dangereux sont **triés** et confiés à des filières agréées : huiles usagées, filtres à huile, liquides de refroidissement et de frein, batteries, chiffons souillés.',
        'Les **pneus usagés** et les pièces métalliques ont aussi leurs filières.',
        { retenir: 'Les déchets dangereux sont suivis par un **bordereau de suivi des déchets** jusqu\'à leur élimination.' }
      ]
    }
  ],

  cartes: [
    { id: 'secu-c1', sousTheme: 'levage', recto: 'Véhicule sur cric : peut-on travailler dessous ?', verso: '**Non**, il faut le poser sur des **chandelles**.' },
    { id: 'secu-c2', sousTheme: 'produits', recto: 'Que signifient des câbles orange sur un véhicule ?', verso: '**Haute tension** : habilitation électrique obligatoire.' },
    { id: 'secu-c3', sousTheme: 'produits', recto: 'Que veut dire FDS ?', verso: '**Fiche de données de sécurité** d\'un produit.' },
    { id: 'secu-c4', sousTheme: 'produits', recto: 'Quel gaz dangereux rejette un moteur qui tourne en atelier ?', verso: 'Le **monoxyde de carbone**, mortel et inodore.' },
    { id: 'secu-c5', sousTheme: 'epi', recto: 'Quels gants pour manipuler de l\'huile ou du carburant ?', verso: 'Des gants **nitrile**.' }
  ],

  questions: [
    {
      id: 'secu-q1', sousTheme: 'levage', type: 'qcm',
      enonce: 'Le véhicule est levé avec un cric. Avant de passer dessous, il faut :',
      choix: ['Le poser sur des chandelles', 'Serrer le frein à main uniquement', 'Rien, le cric suffit', 'Caler une roue avec une brique'],
      bonne: 0,
      explication: 'Un cric peut glisser ou se dégonfler. Seules des chandelles sur les points prévus sont sûres.'
    },
    {
      id: 'secu-q2', sousTheme: 'produits', type: 'qcm',
      enonce: 'Sur un véhicule hybride, des câbles orange signalent :',
      choix: ['Un circuit haute tension, habilitation obligatoire', 'Le circuit d\'airbag', 'Le circuit de carburant', 'La masse du véhicule'],
      bonne: 0,
      explication: 'La haute tension peut tuer. Seul un personnel habilité peut intervenir dessus.'
    },
    {
      id: 'secu-q3', sousTheme: 'dechets', type: 'qcm',
      enonce: 'Que fait-on d\'un filtre à huile usagé ?',
      choix: ['On le met dans le bac des déchets dangereux pour une filière agréée', 'Poubelle ordinaire', 'Ferraille classique', 'On le rince et on le réutilise'],
      bonne: 0,
      explication: 'Il contient encore de l\'huile : c\'est un déchet dangereux.'
    },
    {
      id: 'secu-q4', sousTheme: 'produits', type: 'qcm',
      enonce: 'Quel document décrit les dangers d\'un produit et les protections à utiliser ?',
      choix: ['La fiche de données de sécurité (FDS)', 'Le carnet d\'entretien', 'La carte grise', 'Le bon de commande'],
      bonne: 0,
      explication: 'La FDS est fournie avec chaque produit dangereux et doit être consultable à l\'atelier.'
    },
    {
      id: 'secu-q5', sousTheme: 'produits', type: 'qcm',
      enonce: 'On fait tourner un moteur dans l\'atelier. Quelle précaution est indispensable ?',
      choix: ['Brancher l\'aspiration des gaz d\'échappement', 'Fermer toutes les portes', 'Mettre des gants', 'Débrancher la batterie'],
      bonne: 0,
      explication: 'Le monoxyde de carbone est inodore et mortel, même en petite quantité dans un local fermé.'
    },
    {
      id: 'secu-q6', sousTheme: 'produits', type: 'qcm',
      enonce: 'Un pictogramme de danger représentant une flamme signifie :',
      choix: ['Produit inflammable', 'Produit corrosif', 'Produit toxique', 'Gaz sous pression'],
      bonne: 0,
      explication: 'La flamme = inflammable. Corrosif : liquide qui ronge une main et une surface. Toxique : tête de mort.'
    },
    {
      id: 'secu-q7', sousTheme: 'epi', type: 'qcm',
      enonce: 'Quel type de gants protège le mieux des huiles et carburants ?',
      choix: ['Gants nitrile', 'Gants en laine', 'Gants en coton', 'Aucun, on se lave les mains après'],
      bonne: 0,
      explication: 'Le nitrile résiste aux hydrocarbures et protège la peau des irritations.'
    },
    {
      id: 'secu-q8', sousTheme: 'levage', type: 'qcm',
      enonce: 'Où place-t-on les bras du pont élévateur ?',
      choix: ['Sur les points de levage préconisés par le constructeur', 'Sous le plancher, n\'importe où', 'Sous les bas de caisse en plastique', 'Sous le berceau moteur, toujours'],
      bonne: 0,
      explication: 'Les points de levage sont renforcés. Ailleurs, on peut déformer la caisse ou faire tomber le véhicule.'
    },
    {
      id: 'secu-q9', sousTheme: 'dechets', type: 'vf',
      enonce: 'Vrai ou faux : le liquide de refroidissement usagé peut être jeté à l\'égout.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : il contient du glycol, toxique. Il part en collecte de déchets dangereux.'
    }
  ]
});
