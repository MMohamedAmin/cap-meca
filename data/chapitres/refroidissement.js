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
      id: 'refroid-q5', sousTheme: 'pannes', type: 'qcm', niveau: 2,
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
      id: 'refroid-q8', sousTheme: 'pannes', type: 'qcm', niveau: 2,
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
    },
    {
      id: 'refroid-q10', sousTheme: 'composants', type: 'qcm',
      enonce: 'Quel organe fait circuler le liquide de refroidissement ?',
      choix: ['La pompe à eau', 'Le thermostat', 'Le vase d\'expansion', 'Le radiateur'],
      bonne: 0,
      explication: 'La pompe à eau est souvent entraînée par une courroie (parfois celle de distribution). Sur certains moteurs récents, elle est électrique.'
    },
    {
      id: 'refroid-q11', sousTheme: 'role', type: 'qcm',
      enonce: 'Où le liquide de refroidissement cède-t-il sa chaleur à l\'air extérieur ?',
      choix: ['Dans le radiateur', 'Dans le vase d\'expansion', 'Dans la pompe à eau', 'Dans le thermostat'],
      bonne: 0,
      explication: 'L\'air qui traverse les ailettes du radiateur, aidé par le motoventilateur à l\'arrêt, refroidit le liquide.'
    },
    {
      id: 'refroid-q12', sousTheme: 'pannes', type: 'qcm', niveau: 2,
      enonce: 'Fumée blanche à l\'échappement, liquide de refroidissement qui baisse sans fuite visible, dépôt « mayonnaise » sous le bouchon d\'huile. Que suspecter ?',
      choix: ['Le joint de culasse', 'Le thermostat bloqué ouvert', 'Le motoventilateur', 'La sonde de température'],
      bonne: 0,
      explication: 'Un joint de culasse défectueux laisse passer le liquide dans les cylindres (fumée blanche) ou dans l\'huile (mélange crémeux).'
    },
    {
      id: 'refroid-q13', sousTheme: 'liquide', type: 'qcm', image: 'bouchon-radiateur',
      enonce: 'Bouchon retiré, on voit un liquide vert. Qu\'est-ce que c\'est ?',
      choix: ['Du liquide de refroidissement', 'De l\'huile moteur', 'Du liquide de frein', 'Du carburant'],
      bonne: 0,
      explication: 'Sa couleur dépend du fabricant (vert, rose, bleu…). On choisit le liquide selon la norme du constructeur, pas selon la couleur. Et on n\'ouvre jamais ce bouchon moteur chaud.'
    },
    {
      id: 'refroid-q14', sousTheme: 'pannes', type: 'qcm',
      enonce: 'Le thermostat est bloqué fermé. Que se passe-t-il ?',
      choix: ['Le moteur surchauffe rapidement', 'Le moteur met très longtemps à chauffer', 'Le chauffage de l\'habitacle devient froid mais le moteur va bien', 'Rien, le motoventilateur compense'],
      bonne: 0,
      explication: 'Fermé, le thermostat empêche le liquide d\'aller au radiateur : la chaleur n\'est plus évacuée.'
    },
    {
      id: 'refroid-q15', sousTheme: 'pannes', type: 'qcm',
      enonce: 'Traces au sol sous l\'avant du véhicule et odeur sucrée. Que suspecter ?',
      choix: ['Une fuite de liquide de refroidissement', 'Une fuite d\'huile moteur', 'Une fuite de liquide de frein', 'Une fuite de carburant'],
      bonne: 0,
      explication: 'Le glycol du liquide de refroidissement a une odeur **sucrée** caractéristique.'
    },
    {
      id: 'refroid-q16', sousTheme: 'composants', type: 'qcm',
      enonce: 'Quel élément porte le bouchon taré qui met le circuit sous pression ?',
      choix: ['Le vase d\'expansion', 'Le thermostat', 'La pompe à eau', 'Le motoventilateur'],
      bonne: 0,
      explication: 'Le bouchon du **vase d\'expansion** maintient une pression qui élève le point d\'ébullition du liquide.'
    },
    {
      id: 'refroid-q17', sousTheme: 'role', type: 'vf',
      enonce: 'Vrai ou faux : un moteur qui fonctionne trop froid s\'use plus vite et consomme davantage.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : à froid, l\'huile lubrifie moins bien et la combustion est moins bonne : plus d\'usure, de consommation et de pollution.'
    },
    {
      id: 'refroid-q18', sousTheme: 'composants', type: 'qcm',
      enonce: 'Qu\'est-ce qui commande la mise en marche du motoventilateur ?',
      choix: ['Une sonde de température ou le calculateur moteur', 'La pédale d\'accélérateur', 'Le thermostat, directement', 'L\'interrupteur du chauffage'],
      bonne: 0,
      explication: 'Quand la température du liquide dépasse un seuil, la sonde (ou le calculateur) met le motoventilateur en marche.'
    },
    {
      id: 'refroid-q19', sousTheme: 'role', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi le liquide d\'un circuit sous pression peut-il dépasser 100 °C sans bouillir ?',
      choix: ['Plus la pression est élevée, plus la température d\'ébullition est haute', 'Parce que le glycol est froid', 'Parce que la pompe à eau le refroidit', 'La pression fait baisser la température d\'ébullition'],
      bonne: 0,
      explication: 'Le bouchon taré maintient le circuit sous pression : le liquide peut ainsi dépasser **100 °C** sans bouillir.'
    },
    {
      id: 'refroid-q20', sousTheme: 'liquide', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi ne faut-il pas remplir le circuit avec de l\'eau seule ?',
      choix: ['L\'eau gèle en hiver, bout plus tôt et favorise la corrosion', 'L\'eau ne refroidit pas du tout', 'L\'eau est trop épaisse pour la pompe', 'L\'eau fait mousser l\'huile moteur'],
      bonne: 0,
      explication: 'Le **glycol** et les additifs du liquide protègent contre le gel, l\'ébullition et la corrosion.'
    },
    {
      id: 'refroid-q21', sousTheme: 'composants', type: 'qcm', niveau: 2,
      enonce: 'Le chauffage souffle froid alors que le moteur est à bonne température. Que suspecter ?',
      choix: ['Un aérotherme bouché ou de l\'air dans le circuit', 'Un thermostat bloqué fermé', 'Un motoventilateur toujours en marche', 'Un bouchon de vase d\'expansion trop serré'],
      bonne: 0,
      explication: 'Le moteur chauffe bien, donc le problème est du côté de l\'**aérotherme** : liquide qui n\'y circule pas (bouché, bulle d\'air) ou commande de chauffage.'
    },
    {
      id: 'refroid-q22', sousTheme: 'pannes', type: 'qcm', niveau: 3,
      enonce: 'Le liquide déborde du vase d\'expansion, des bulles remontent moteur tournant et les durites sont dures dès le démarrage à froid. Que suspecter ?',
      choix: ['Le joint de culasse : des gaz de combustion passent dans le circuit', 'Le thermostat bloqué ouvert', 'Le motoventilateur', 'Un manque de liquide'],
      bonne: 0,
      explication: 'Les gaz de combustion mettent le circuit sous pression même moteur froid. On le confirme avec un **testeur de gaz** (CO2) dans le vase d\'expansion.'
    },
    {
      id: 'refroid-q23', sousTheme: 'pannes', type: 'qcm', niveau: 3,
      enonce: 'Le moteur surchauffe sur autoroute mais pas en ville, et le motoventilateur fonctionne. Que suspecter en premier ?',
      choix: ['Un radiateur partiellement bouché, qui n\'évacue plus assez de chaleur à forte charge', 'Le motoventilateur', 'La sonde de température du chauffage', 'Un liquide trop froid'],
      bonne: 0,
      explication: 'En ville, le moteur produit peu de chaleur. Sur autoroute, il en produit beaucoup : un **radiateur** entartré ou aux ailettes bouchées ne suit plus.'
    },
    {
      id: 'refroid-q24', sousTheme: 'liquide', type: 'qcm', niveau: 3,
      enonce: 'Après une vidange du circuit, le moteur chauffe et le chauffage reste froid. Quelle étape a probablement été oubliée ?',
      choix: ['La purge de l\'air du circuit', 'Le serrage des roues', 'Le remplacement du thermostat', 'La vidange de l\'huile moteur'],
      bonne: 0,
      explication: 'Une **bulle d\'air** bloque la circulation : le liquide ne passe plus dans l\'aérotherme et le moteur refroidit mal. On purge selon la méthode du constructeur.'
    },
    {
      id: 'refroid-q25', sousTheme: 'role', type: 'qcm', niveau: 3,
      enonce: 'Le joint du bouchon de vase d\'expansion est abîmé : le bouchon ne tient plus la pression. Quel symptôme peut-on observer ?',
      choix: ['Le liquide bout plus tôt : pertes de liquide et surchauffe quand le moteur travaille fort', 'Le moteur met plus de temps à chauffer', 'Le chauffage devient brûlant', 'Aucun, le bouchon ne sert qu\'à fermer'],
      bonne: 0,
      explication: 'Sans pression, le point d\'ébullition redescend vers 100 °C : le liquide **bout** et s\'échappe en vapeur. Un bouchon se contrôle avec un testeur de pression.'
    },
    {
      id: 'refroid-q26', sousTheme: 'composants', type: 'qcm', niveau: 3,
      enonce: 'Le moteur surchauffe, mais les deux durites du radiateur restent froides. Que suspecter ?',
      choix: ['Le thermostat bloqué fermé : le liquide ne va pas au radiateur', 'Le motoventilateur', 'Un radiateur entartré', 'Un excès de liquide de refroidissement'],
      bonne: 0,
      explication: 'Si le liquide chaud n\'arrive pas au radiateur, ses durites restent froides : le **thermostat** ne s\'ouvre pas. Avec un radiateur bouché, la durite d\'entrée serait brûlante.'
    }
  ]
});
