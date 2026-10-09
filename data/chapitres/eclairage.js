CAP.ajouterChapitre({
  id: 'eclairage',
  titre: 'Éclairage et signalisation',
  icone: '💡',
  description: 'Feux obligatoires, lampes et réglage des projecteurs, relais et commandes, pannes et diagnostic.',
  sousThemes: {
    feux: 'Feux et réglementation',
    lampes: 'Lampes et projecteurs',
    circuits: 'Relais et commandes',
    diagnostic: 'Pannes et diagnostic'
  },

  fiche: [
    {
      titre: 'Les feux et leurs couleurs',
      sousTheme: 'feux',
      contenu: [
        'L\'éclairage sert à **voir** et la signalisation à **être vu** et à prévenir les autres usagers.',
        { liste: [
          '**À l\'avant** (blanc) : feux de position, de croisement, de route, feux de jour, antibrouillards.',
          '**À l\'arrière** (rouge) : feux de position, feux stop (avec le 3e feu stop), antibrouillard arrière.',
          '**Clignotants** (orange) : indicateurs de direction. Tous ensemble, ce sont les **feux de détresse**.',
          '**Feu de recul** (blanc) et **éclairage de plaque**.'
        ] },
        'Une ampoule de clignotant grillée se remarque souvent par un **clignotement plus rapide**, ou par un voyant.',
        { retenir: 'Après le remplacement d\'un projecteur, on **règle le faisceau** au réglophare : un phare mal réglé éblouit ou éclaire trop court, et il est refusé au contrôle technique.' }
      ]
    },
    {
      titre: 'Lampes et projecteurs',
      sousTheme: 'lampes',
      contenu: [
        { liste: [
          '**Halogène** : H1, H7 (un filament), **H4** (deux filaments : croisement et route).',
          '**Bi-filament P21/5W** : 21 W pour le **stop**, 5 W pour la **position**.',
          '**Xénon** : lampe à décharge alimentée par un **ballast** en très haute tension.',
          '**LED** : faible consommation, très longue durée de vie. Souvent, on remplace le bloc complet.'
        ] },
        'On ne touche pas le verre d\'une ampoule halogène avec les doigts : les traces de gras créent des **points chauds** qui réduisent sa durée de vie.',
        'Le réglage des projecteurs se fait **véhicule à vide**, sur **sol plat**, pneus bien gonflés, correcteur de portée en position 0.',
        { attention: 'Xénon : le ballast produit une **très haute tension**. Couper le contact et débrancher avant d\'intervenir.' }
      ]
    },
    {
      titre: 'Relais et commandes',
      sousTheme: 'circuits',
      contenu: [
        'Le conducteur actionne le **commodo** (manette sous le volant). Pour ne pas faire passer un fort courant dans cette petite commande, on utilise un **relais**.',
        { liste: [
          '**Bobine** du relais (bornes **85 et 86**) : parcourue par un faible courant de commande, elle attire le contact.',
          '**Contact de puissance** (bornes **30 et 87**) : laisse passer le fort courant vers les lampes.'
        ] },
        'Chaque circuit est protégé par un **fusible**, et chaque lampe a besoin d\'une bonne **masse** pour que le courant revienne à la batterie.',
        'Sur les véhicules récents, beaucoup de commandes passent par un **boîtier électronique** (boîtier de servitude) qui peut aussi surveiller les lampes.'
      ]
    },
    {
      titre: 'Pannes et diagnostic',
      sousTheme: 'diagnostic',
      contenu: [
        'Une lampe ne s\'allume pas : on contrôle dans l\'ordre l\'**ampoule**, le **fusible**, l\'**alimentation** (12 V au connecteur, au voltmètre) et la **masse**.',
        { liste: [
          'Un seul feu en panne : le plus souvent son **ampoule** ou son connecteur.',
          'Les deux feux d\'une même fonction en panne : plutôt le **fusible**, le **relais** ou la **commande**.',
          'Feux faibles ou qui s\'allument ensemble de façon bizarre : souvent une **mauvaise masse**, le courant revient par un autre filament.'
        ] },
        { retenir: 'Un éclairage faible avec une batterie bien chargée vient souvent d\'une **chute de tension** : masse ou connexion oxydée.' }
      ]
    }
  ],

  cartes: [
    { id: 'ecl-c1', sousTheme: 'feux', recto: 'Couleur des feux avant, arrière, clignotants et recul ?', verso: 'Avant **blanc**, arrière **rouge**, clignotants **orange**, recul **blanc**.' },
    { id: 'ecl-c2', sousTheme: 'feux', recto: 'Clignotement plus rapide d\'un seul côté ?', verso: 'Souvent une **ampoule grillée** de ce côté.' },
    { id: 'ecl-c3', sousTheme: 'feux', recto: 'Que faire après le remplacement d\'un projecteur ?', verso: '**Régler le faisceau** au réglophare.' },
    { id: 'ecl-c4', sousTheme: 'lampes', recto: 'Particularité d\'une ampoule H4 ?', verso: '**Deux filaments** : croisement et route.' },
    { id: 'ecl-c5', sousTheme: 'lampes', recto: 'Ampoule P21/5W : à quoi servent les deux filaments ?', verso: '**21 W** pour le stop, **5 W** pour la position.' },
    { id: 'ecl-c6', sousTheme: 'lampes', recto: 'Pourquoi ne pas toucher le verre d\'une ampoule halogène ?', verso: 'Les traces de gras créent des **points chauds** : durée de vie réduite.' },
    { id: 'ecl-c7', sousTheme: 'lampes', recto: 'Danger d\'un projecteur au xénon ?', verso: 'La **très haute tension** du ballast.' },
    { id: 'ecl-c8', sousTheme: 'circuits', recto: 'Rôle d\'un relais ?', verso: 'Commander un **fort courant** avec un **faible courant** de commande.' },
    { id: 'ecl-c9', sousTheme: 'circuits', recto: 'Bornes d\'un relais ?', verso: '**85-86** : la bobine. **30-87** : le contact de puissance.' },
    { id: 'ecl-c10', sousTheme: 'circuits', recto: 'Qu\'est-ce que le commodo ?', verso: 'La **manette** sous le volant qui commande les feux, clignotants ou essuie-glaces.' },
    { id: 'ecl-c11', sousTheme: 'diagnostic', recto: 'Lampe qui ne s\'allume pas : ordre de contrôle ?', verso: '**Ampoule**, **fusible**, **alimentation** (12 V), **masse**.' },
    { id: 'ecl-c12', sousTheme: 'diagnostic', recto: 'Feux faibles ou qui s\'allument ensemble bizarrement ?', verso: 'Une **mauvaise masse** : le courant revient par un autre filament.' }
  ],

  questions: [
    {
      id: 'ecl-q1', sousTheme: 'feux', type: 'qcm',
      enonce: 'De quelle couleur sont les feux de position arrière ?',
      choix: ['Rouges', 'Blancs', 'Orange', 'Bleus'],
      bonne: 0,
      explication: 'À l\'arrière, les feux de position et les stops sont **rouges**. Le blanc est réservé à l\'avant et au feu de recul.'
    },
    {
      id: 'ecl-q2', sousTheme: 'feux', type: 'qcm',
      enonce: 'De quelle couleur est le feu de recul ?',
      choix: ['Blanc', 'Rouge', 'Orange', 'Vert'],
      bonne: 0,
      explication: 'Le feu de recul est **blanc** : il éclaire derrière le véhicule et prévient qu\'il recule.'
    },
    {
      id: 'ecl-q3', sousTheme: 'feux', type: 'qcm',
      enonce: 'Par brouillard épais, quels feux peut-on allumer en plus des feux de croisement ?',
      choix: ['Les feux antibrouillard avant et arrière', 'Les feux de route', 'Seulement les feux de détresse', 'Aucun autre feu'],
      bonne: 0,
      explication: 'Les **antibrouillards** sont faits pour ça. Les feux de route, eux, éblouissent le conducteur dans le brouillard.'
    },
    {
      id: 'ecl-q4', sousTheme: 'lampes', type: 'qcm',
      enonce: 'Une ampoule H4 a deux filaments. À quoi servent-ils ?',
      choix: ['Aux feux de croisement et aux feux de route', 'Au stop et au clignotant', 'Aux feux de position et au feu de recul', 'À avoir un filament de secours'],
      bonne: 0,
      explication: 'Une seule **H4** assure les feux de **croisement** et de **route**, avec un filament pour chacun.'
    },
    {
      id: 'ecl-q5', sousTheme: 'lampes', type: 'qcm',
      enonce: 'Pourquoi ne faut-il pas toucher le verre d\'une ampoule halogène avec les doigts ?',
      choix: ['Les traces de gras créent des points chauds qui réduisent sa durée de vie', 'Elle est radioactive', 'Elle ne s\'allumerait plus du tout', 'On risque de se brûler sur une ampoule neuve'],
      bonne: 0,
      explication: 'Le verre d\'une halogène chauffe beaucoup. Une trace de doigt crée un **point chaud** : l\'ampoule noircit et grille plus vite.'
    },
    {
      id: 'ecl-q6', sousTheme: 'circuits', type: 'qcm',
      enonce: 'Quel est le rôle d\'un relais dans un circuit d\'éclairage ?',
      choix: ['Commander un fort courant avec un faible courant de commande', 'Stocker l\'énergie', 'Remplacer le fusible', 'Transformer le 12 V en 230 V'],
      bonne: 0,
      explication: 'Le commodo ne laisse passer qu\'un **faible courant**, vers la bobine du relais. C\'est le relais qui envoie le **fort courant** aux lampes.'
    },
    {
      id: 'ecl-q7', sousTheme: 'circuits', type: 'vf',
      enonce: 'Vrai ou faux : sur une ampoule P21/5W, le filament de 21 W sert au feu stop.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : le filament de **21 W**, plus puissant, sert au **stop**. Celui de 5 W sert au feu de position.'
    },
    {
      id: 'ecl-q8', sousTheme: 'diagnostic', type: 'qcm',
      enonce: 'Avec quel appareil vérifie-t-on qu\'une lampe reçoit bien ses 12 V ?',
      choix: ['Un voltmètre (multimètre)', 'Un réfractomètre', 'Un manomètre', 'Une clé dynamométrique'],
      bonne: 0,
      explication: 'Le **voltmètre** se branche en parallèle, sur le connecteur de la lampe, circuit alimenté.'
    },
    {
      id: 'ecl-q9', sousTheme: 'diagnostic', type: 'qcm',
      enonce: 'Dans quel ordre contrôle-t-on une lampe qui ne s\'allume pas ?',
      choix: ['Ampoule, fusible, alimentation 12 V, masse', 'Batterie, alternateur, démarreur, ampoule', 'Masse, puis on remplace le faisceau électrique', 'On remplace directement le boîtier électronique'],
      bonne: 0,
      explication: 'On va du **plus simple** au plus compliqué : l\'ampoule d\'abord, puis ce qui l\'alimente.'
    },
    {
      id: 'ecl-q10', sousTheme: 'feux', type: 'qcm', niveau: 2,
      enonce: 'Comment un conducteur s\'aperçoit-il souvent qu\'une ampoule de clignotant est grillée ?',
      choix: ['Le clignotement devient plus rapide, ou un voyant le signale', 'Les feux de détresse s\'allument tout seuls', 'Le klaxon sonne', 'Le moteur cale'],
      bonne: 0,
      explication: 'La centrale ou le boîtier électronique détecte que le courant consommé a baissé : le **clignotement s\'accélère** pour prévenir.'
    },
    {
      id: 'ecl-q11', sousTheme: 'lampes', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi règle-t-on les projecteurs véhicule à vide, sur sol plat et pneus bien gonflés ?',
      choix: ['La charge, le sol et la pression des pneus changent l\'inclinaison du véhicule, donc du faisceau', 'Pour ne pas abîmer le réglophare', 'Pour économiser la batterie', 'Ce n\'est pas utile'],
      bonne: 0,
      explication: 'Si l\'arrière est chargé, l\'avant se lève et le faisceau monte. Les réglages du constructeur sont donnés dans des **conditions précises**.'
    },
    {
      id: 'ecl-q12', sousTheme: 'circuits', type: 'qcm', niveau: 2,
      enonce: 'Sur un relais, entre quelles bornes se trouve la bobine de commande ?',
      choix: ['85 et 86', '30 et 87', '30 et 85', '86 et 87'],
      bonne: 0,
      explication: '**85-86** : la bobine, parcourue par le faible courant de commande. **30-87** : le contact qui laisse passer le fort courant.'
    },
    {
      id: 'ecl-q13', sousTheme: 'diagnostic', type: 'qcm', niveau: 2,
      enonce: 'Un seul feu stop ne s\'allume plus, l\'autre fonctionne. Que contrôler en premier ?',
      choix: ['L\'ampoule de ce feu et son connecteur', 'Le fusible des feux stop', 'Le contacteur de stop sur la pédale', 'La batterie'],
      bonne: 0,
      explication: 'Le fusible et le contacteur sont **communs** aux deux feux : s\'ils étaient en cause, aucun ne s\'allumerait.'
    },
    {
      id: 'ecl-q14', sousTheme: 'diagnostic', type: 'qcm', niveau: 3,
      enonce: 'Quand on freine, le feu stop gauche s\'allume faiblement et le feu de position gauche s\'allume avec lui. Cause probable ?',
      choix: ['Une mauvaise masse du feu arrière gauche : le courant revient par l\'autre filament', 'Une ampoule trop puissante', 'Un fusible de trop gros calibre', 'Le contacteur de stop'],
      bonne: 0,
      explication: 'Sans bonne **masse**, le courant du stop cherche un autre chemin : il traverse le filament de position et ressort par son circuit. Les deux s\'allument faiblement.'
    },
    {
      id: 'ecl-q15', sousTheme: 'circuits', type: 'qcm', niveau: 3,
      enonce: 'Les phares ne s\'allument plus. Fusible bon, ampoules bonnes. On entend le relais « claquer », mais il n\'y a pas de 12 V sur sa borne 87. Que suspecter ?',
      choix: ['Le contact de puissance du relais, ou l\'absence de 12 V sur sa borne 30', 'Le commodo', 'Les ampoules', 'La batterie surchargée'],
      bonne: 0,
      explication: 'Le claquement prouve que la **commande** et la bobine fonctionnent. Si rien ne sort en 87, soit le contact est brûlé, soit le 12 V n\'arrive pas en **30**.'
    },
    {
      id: 'ecl-q16', sousTheme: 'lampes', type: 'qcm', niveau: 3,
      enonce: 'Un projecteur au xénon ne s\'allume plus. Quelle précaution avant d\'intervenir ?',
      choix: ['Couper le contact et débrancher : le ballast produit une très haute tension', 'Aucune : c\'est du 12 V', 'Toucher l\'ampoule pour voir si elle est chaude', 'Laisser le feu allumé pour mesurer'],
      bonne: 0,
      explication: 'Le **ballast** fournit plusieurs milliers de volts à l\'allumage : on intervient toujours hors tension.'
    },
    {
      id: 'ecl-q17', sousTheme: 'feux', type: 'qcm', niveau: 3,
      enonce: 'Un véhicule est refusé au contrôle technique pour feux mal réglés, juste après le remplacement d\'un projecteur. Qu\'a-t-on probablement oublié ?',
      choix: ['Le réglage du faisceau au réglophare après le montage', 'La purge du circuit de freinage', 'Le serrage des roues', 'La vidange moteur'],
      bonne: 0,
      explication: 'Un projecteur neuf n\'est pas réglé pour le véhicule : on le **règle** au réglophare, dans les bonnes conditions.'
    },
    {
      id: 'ecl-q18', sousTheme: 'diagnostic', type: 'qcm', niveau: 3,
      enonce: 'Les feux de route ne s\'allument pas, mais l\'appel de phares fonctionne. Que suspecter ?',
      choix: ['Le commodo : sa position « feux de route » ne fait plus contact', 'Les ampoules', 'Le fusible des feux de route', 'La batterie'],
      bonne: 0,
      explication: 'L\'appel de phares allume les **mêmes lampes** : ampoules et câblage fonctionnent. La différence se trouve dans la **commande**.'
    }
  ]
});
