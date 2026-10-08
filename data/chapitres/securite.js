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
    },
    {
      id: 'secu-q10', sousTheme: 'epi', type: 'qcm',
      enonce: 'En meulant, quel équipement protège des projections dans les yeux ?',
      choix: ['Des lunettes de protection ou un écran facial', 'Un gilet haute visibilité', 'Des gants en latex', 'Un masque à poussières seul'],
      bonne: 0,
      explication: 'Les étincelles et particules peuvent blesser l\'œil gravement : lunettes ou écran obligatoires, même pour un travail court.'
    },
    {
      id: 'secu-q11', sousTheme: 'epi', type: 'qcm',
      enonce: 'Pourquoi porte-t-on des chaussures de sécurité à l\'atelier ?',
      choix: ['Pour protéger les pieds des chutes d\'objets lourds et éviter de glisser', 'Pour se protéger du bruit', 'Pour éviter de salir le véhicule', 'Pour être isolé de la haute tension sans habilitation'],
      bonne: 0,
      explication: 'Coque renforcée contre l\'écrasement, semelle antidérapante et résistante aux hydrocarbures. Elles ne remplacent pas l\'habilitation électrique.'
    },
    {
      id: 'secu-q12', sousTheme: 'levage', type: 'vf',
      enonce: 'Vrai ou faux : au pont élévateur, on lève d\'abord de quelques centimètres pour vérifier que le véhicule est stable.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : on contrôle que les bras sont bien en place et que le véhicule ne bascule pas avant de le monter plus haut.'
    },
    {
      id: 'secu-q13', sousTheme: 'dechets', type: 'qcm',
      enonce: 'Que fait-on d\'une batterie au plomb usagée ?',
      choix: ['On la stocke à part pour une filière de recyclage agréée', 'On la met dans la benne à ferraille', 'On vide l\'acide à l\'évier puis on la jette', 'On la met aux ordures ménagères'],
      bonne: 0,
      explication: 'Plomb et acide sulfurique : c\'est un déchet dangereux, stocké debout à l\'abri et repris par une filière agréée.'
    },
    {
      id: 'secu-q14', sousTheme: 'levage', type: 'qcm', image: 'chandelles',
      enonce: 'À quoi servent les supports rouges rangés sur l\'étagère ?',
      choix: ['Ce sont des chandelles : elles maintiennent le véhicule levé en sécurité', 'Ce sont des crics : ils servent à lever le véhicule', 'Ce sont des cales de roue', 'Ce sont des supports de moteur'],
      bonne: 0,
      explication: 'Le cric rouleur (au sol) sert seulement à lever. On pose ensuite le véhicule sur des chandelles, aux points prévus, avant de passer dessous.'
    },
    {
      id: 'secu-q15', sousTheme: 'dechets', type: 'qcm',
      enonce: 'Comment un déchet dangereux est-il suivi jusqu\'à son élimination ?',
      choix: ['Par un bordereau de suivi des déchets', 'Par la carte grise du véhicule', 'Par la facture du client', 'Il n\'est pas suivi'],
      bonne: 0,
      explication: 'Le **bordereau de suivi** accompagne le déchet du garage jusqu\'à la filière agréée qui l\'élimine.'
    },
    {
      id: 'secu-q16', sousTheme: 'dechets', type: 'qcm',
      enonce: 'Où met-on les chiffons souillés d\'huile ?',
      choix: ['Dans le bac des déchets dangereux', 'À la poubelle ordinaire', 'Dans le bac à papier et carton', 'On les brûle dans l\'atelier'],
      bonne: 0,
      explication: 'Imprégnés d\'huile, les chiffons sont des **déchets dangereux**, et ils sont inflammables.'
    },
    {
      id: 'secu-q17', sousTheme: 'epi', type: 'qcm',
      enonce: 'Pourquoi retirer bagues et bracelets pour travailler près d\'un moteur qui tourne ?',
      choix: ['Ils peuvent s\'accrocher aux pièces en rotation', 'Pour ne pas les salir', 'Pour ne pas rayer la carrosserie', 'Ce n\'est utile que si le moteur est froid'],
      bonne: 0,
      explication: 'Une bague ou un bracelet happé par une courroie ou un ventilateur peut provoquer une blessure grave. En plus, le métal conduit le courant.'
    },
    {
      id: 'secu-q18', sousTheme: 'epi', type: 'qcm',
      enonce: 'Quels EPI faut-il pour manipuler une batterie ?',
      choix: ['Des gants et des lunettes de protection', 'Une protection auditive', 'Un gilet haute visibilité seul', 'Aucun, l\'acide d\'une batterie est sans danger'],
      bonne: 0,
      explication: 'L\'électrolyte est de l\'**acide sulfurique** : il brûle la peau et les yeux.'
    },
    {
      id: 'secu-q19', sousTheme: 'produits', type: 'qcm',
      enonce: 'Quel gaz, sans odeur et mortel, rejette un moteur qui tourne dans un atelier fermé ?',
      choix: ['Le monoxyde de carbone (CO)', 'Le dioxyde de carbone (CO2)', 'L\'hydrogène', 'L\'azote'],
      bonne: 0,
      explication: 'Le **monoxyde de carbone** ne se sent pas et peut tuer : on branche toujours l\'aspiration des gaz d\'échappement.'
    },
    {
      id: 'secu-q20', sousTheme: 'levage', type: 'qcm', niveau: 2,
      enonce: 'Avant de lever un véhicule avec un cric, que faut-il faire ?',
      choix: ['Le placer sur un sol plat et dur, frein de parking serré, et caler les roues qui restent au sol', 'Démarrer le moteur', 'Retirer d\'abord les roues', 'Desserrer le frein de parking'],
      bonne: 0,
      explication: 'Un véhicule qui roule ou un cric qui s\'enfonce, et c\'est la chute. **Sol dur et plat, frein serré, cales**, puis chandelles avant de passer dessous.'
    },
    {
      id: 'secu-q21', sousTheme: 'produits', type: 'qcm', niveau: 2,
      enonce: 'On vidange un réservoir de carburant. Quelle précaution est indispensable ?',
      choix: ['Travailler loin de toute flamme ou étincelle, dans un local ventilé, avec un récupérateur adapté', 'Fumer seulement à 2 mètres du véhicule', 'Éclairer avec une baladeuse ordinaire placée près du réservoir', 'Faire tourner le moteur pour vider plus vite'],
      bonne: 0,
      explication: 'Les vapeurs de carburant s\'enflamment très facilement : **pas de source d\'inflammation**, ventilation et matériel adapté.'
    },
    {
      id: 'secu-q22', sousTheme: 'produits', type: 'qcm', niveau: 2,
      enonce: 'Que signifie le pictogramme qui montre une main et une surface rongées par un liquide ?',
      choix: ['Produit corrosif', 'Produit inflammable', 'Produit toxique', 'Gaz sous pression'],
      bonne: 0,
      explication: 'C\'est le pictogramme **corrosif** : le produit brûle la peau, les yeux et attaque les matériaux (acide de batterie par exemple).'
    },
    {
      id: 'secu-q23', sousTheme: 'produits', type: 'qcm', niveau: 3,
      enonce: 'Il faut remplacer une pièce près des câbles orange d\'un véhicule hybride. Tu n\'as pas d\'habilitation. Que faire ?',
      choix: ['Ne pas intervenir : une personne habilitée doit d\'abord consigner (mettre hors tension) le système haute tension', 'Débrancher soi-même la batterie 12 V, cela suffit', 'Mettre des gants nitrile et intervenir', 'Attendre 2 minutes que le moteur refroidisse'],
      bonne: 0,
      explication: 'La batterie 12 V ne coupe pas la haute tension. Seule une personne **habilitée** peut consigner le circuit haute tension avant l\'intervention.'
    },
    {
      id: 'secu-q24', sousTheme: 'levage', type: 'qcm', niveau: 3,
      enonce: 'Un véhicule est sur un pont élévateur à deux colonnes. On va déposer le moteur et la boîte. Quel risque particulier ?',
      choix: ['Le centre de gravité se déplace : le véhicule peut basculer, il faut le maintenir (sangles, chandelles de soutien)', 'Aucun, le pont tient tout', 'Les pneus risquent de se dégonfler', 'Le moteur risque de redémarrer'],
      bonne: 0,
      explication: 'Sans moteur, l\'avant devient léger : l\'équilibre sur les bras du pont change. On anticipe avec des **sangles** ou des chandelles de soutien.'
    },
    {
      id: 'secu-q25', sousTheme: 'dechets', type: 'qcm', niveau: 3,
      enonce: 'Un collègue verse le liquide de frein usagé dans le fût d\'huile usagée « pour gagner de la place ». Pourquoi est-ce un problème ?',
      choix: ['Les déchets doivent être triés : mélangés, ils ne peuvent plus partir dans la bonne filière', 'Aucun problème, ce sont deux liquides', 'Le liquide de frein va geler dans le fût', 'Au contraire, cela rend l\'huile plus fluide'],
      bonne: 0,
      explication: 'L\'huile usagée est collectée pour être **régénérée**. Mélangée à d\'autres produits, elle n\'est plus acceptée par la filière.'
    }
  ]
});
