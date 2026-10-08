CAP.ajouterChapitre({
  id: 'refroidissement',
  titre: 'Refroidissement',
  icone: '🌡️',
  description: 'Rôle du circuit, composants (pompe, thermostat, radiateur, vase d\'expansion), liquide et pannes courantes.',
  sousThemes: {
    role: 'Rôle et fonctionnement',
    composants: 'Composants',
    liquide: 'Liquide de refroidissement',
    pannes: 'Pannes et diagnostic'
  },

  fiche: [
    {
      titre: 'Rôle et fonctionnement',
      sousTheme: 'role',
      contenu: [
        'Le circuit maintient le moteur à sa **température de fonctionnement**, ni trop froid (usure, consommation, pollution) ni trop chaud (risque de casse).',
        { liste: [
          '**Petit circuit** : moteur froid, thermostat **fermé**. Le liquide tourne dans le moteur sans passer par le radiateur, le moteur chauffe plus vite.',
          '**Grand circuit** : moteur chaud, thermostat **ouvert**. Le liquide passe par le radiateur pour être refroidi.'
        ] },
        'Le circuit est **sous pression** grâce au bouchon taré du vase d\'expansion : cela élève le point d\'ébullition du liquide.'
      ]
    },
    {
      titre: 'Les composants',
      sousTheme: 'composants',
      contenu: [
        { liste: [
          '**Pompe à eau** : fait circuler le liquide (entraînée par courroie ou électrique).',
          '**Thermostat** : vanne qui s\'ouvre avec la chaleur et oriente le liquide vers le radiateur.',
          '**Radiateur** : échange la chaleur du liquide avec l\'air.',
          '**Motoventilateur** : force le passage d\'air dans le radiateur quand la vitesse ne suffit pas, commandé par une sonde ou le calculateur.',
          '**Vase d\'expansion** : absorbe la dilatation du liquide et porte le bouchon pressurisé.',
          '**Aérotherme** (radiateur de chauffage) : chauffe l\'habitacle avec le liquide chaud.'
        ] }
      ]
    },
    {
      titre: 'Le liquide de refroidissement',
      sousTheme: 'liquide',
      contenu: [
        'Mélange d\'**eau** et de **glycol** avec des additifs : il protège contre le gel, la corrosion et élève le point d\'ébullition.',
        'Le niveau d\'antigel se contrôle avec un **réfractomètre** (ou un pèse-antigel). On utilise le liquide préconisé par le constructeur.',
        'Après une vidange, il faut **purger** le circuit pour éliminer les bulles d\'air.',
        { attention: 'Ne jamais ouvrir le bouchon du vase d\'expansion moteur chaud : le liquide sous pression peut jaillir et brûler gravement.' }
      ]
    },
    {
      titre: 'Pannes courantes',
      sousTheme: 'pannes',
      contenu: [
        { liste: [
          '**Thermostat bloqué ouvert** : moteur long à chauffer, chauffage faible, consommation en hausse.',
          '**Thermostat bloqué fermé** : surchauffe rapide.',
          '**Motoventilateur HS** : surchauffe surtout à l\'arrêt ou dans les bouchons.',
          '**Fuite** : baisse de niveau, traces au sol, odeur sucrée.'
        ] },
        { retenir: 'Une surchauffe prolongée peut endommager le **joint de culasse** et déformer la culasse.' }
      ]
    }
  ],

  cartes: [
    { id: 'refroid-c1', sousTheme: 'role', recto: 'Thermostat fermé : petit ou grand circuit ?', verso: '**Petit circuit** : le liquide ne passe pas par le radiateur.' },
    { id: 'refroid-c2', sousTheme: 'role', recto: 'Pourquoi met-on le circuit sous pression ?', verso: 'Pour **élever le point d\'ébullition** du liquide.' },
    { id: 'refroid-c3', sousTheme: 'composants', recto: 'Qu\'est-ce que l\'aérotherme ?', verso: 'Le **radiateur de chauffage** de l\'habitacle.' },
    { id: 'refroid-c4', sousTheme: 'liquide', recto: 'Avec quel appareil contrôle-t-on la protection antigel ?', verso: 'Un **réfractomètre** (ou un pèse-antigel).' },
    { id: 'refroid-c5', sousTheme: 'pannes', recto: 'Symptômes d\'un thermostat bloqué ouvert ?', verso: 'Moteur **long à chauffer**, **chauffage faible**, consommation en hausse.' },
    { id: 'refroid-c6', sousTheme: 'liquide', recto: 'Que faut-il faire après avoir rempli le circuit ?', verso: '**Purger** pour chasser l\'air.' }
  ],

  questions: [
    {
      id: 'refroid-q1', sousTheme: 'composants', type: 'qcm',
      enonce: 'À quoi sert le thermostat ?',
      choix: ['À réguler la température en s\'ouvrant quand le moteur est chaud', 'À refroidir l\'huile moteur', 'À faire tourner la pompe à eau', 'À mesurer la pression du circuit'],
      bonne: 0,
      explication: 'Fermé à froid, il permet au moteur de chauffer vite. Il s\'ouvre à chaud et envoie le liquide au radiateur.'
    },
    {
      id: 'refroid-q2', sousTheme: 'role', type: 'qcm',
      enonce: 'Quand le moteur est froid, le liquide de refroidissement :',
      choix: ['Ne passe pas par le radiateur (petit circuit)', 'Passe uniquement par le radiateur', 'Ne circule pas du tout', 'Passe par le vase d\'expansion uniquement'],
      bonne: 0,
      explication: 'Thermostat fermé : le liquide circule dans le moteur sans être refroidi, pour atteindre plus vite la bonne température.'
    },
    {
      id: 'refroid-q3', sousTheme: 'role', type: 'qcm',
      enonce: 'Pourquoi le circuit de refroidissement est-il sous pression ?',
      choix: ['Pour élever le point d\'ébullition du liquide', 'Pour faire tourner la pompe', 'Pour éviter le gel', 'Pour économiser du liquide'],
      bonne: 0,
      explication: 'Plus la pression est élevée, plus le liquide bout tard. On évite ainsi la vapeur dans le moteur.'
    },
    {
      id: 'refroid-q4', sousTheme: 'liquide', type: 'qcm',
      enonce: 'Pourquoi ne faut-il pas ouvrir le vase d\'expansion moteur chaud ?',
      choix: ['Le liquide sous pression peut jaillir et brûler', 'Le liquide risque de geler', 'Le thermostat se bloquerait', 'Cela vidange le circuit'],
      bonne: 0,
      explication: 'En ouvrant, la pression chute brutalement : le liquide très chaud se met à bouillir et jaillit.'
    },
    {
      id: 'refroid-q5', sousTheme: 'pannes', type: 'qcm',
      enonce: 'Le moteur met très longtemps à chauffer et le chauffage est faible. Cause probable ?',
      choix: ['Thermostat bloqué ouvert', 'Thermostat bloqué fermé', 'Radiateur bouché', 'Motoventilateur HS'],
      bonne: 0,
      explication: 'Bloqué ouvert, le thermostat envoie le liquide au radiateur dès le démarrage : le moteur reste trop froid.'
    },
    {
      id: 'refroid-q6', sousTheme: 'liquide', type: 'qcm',
      enonce: 'De quoi est composé le liquide de refroidissement ?',
      choix: ['D\'eau, de glycol et d\'additifs', 'D\'huile et d\'eau', 'D\'eau distillée uniquement', 'D\'alcool à brûler'],
      bonne: 0,
      explication: 'Le glycol protège du gel et élève le point d\'ébullition ; les additifs protègent contre la corrosion.'
    },
    {
      id: 'refroid-q7', sousTheme: 'liquide', type: 'qcm',
      enonce: 'Quel appareil permet de contrôler la protection antigel ?',
      choix: ['Un réfractomètre', 'Un multimètre', 'Un manomètre de pneus', 'Un comparateur'],
      bonne: 0,
      explication: 'Le réfractomètre (ou un pèse-antigel) indique jusqu\'à quelle température le liquide est protégé.'
    },
    {
      id: 'refroid-q8', sousTheme: 'pannes', type: 'qcm',
      enonce: 'Le moteur chauffe surtout dans les bouchons, mais pas sur route. Quel élément suspecter en premier ?',
      choix: ['Le motoventilateur', 'Le thermostat bloqué ouvert', 'L\'aérotherme', 'La jauge d\'huile'],
      bonne: 0,
      explication: 'Sur route, l\'air de la vitesse refroidit le radiateur. À l\'arrêt, seul le motoventilateur assure ce passage d\'air.'
    },
    {
      id: 'refroid-q9', sousTheme: 'composants', type: 'vf',
      enonce: 'Vrai ou faux : l\'aérotherme sert à chauffer l\'habitacle.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : c\'est un petit radiateur traversé par le liquide chaud, l\'air soufflé dans l\'habitacle passe à travers.'
    }
  ]
});
