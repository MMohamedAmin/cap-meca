// Études de cas d'atelier. Chargé APRÈS les chapitres : chaque cas devient une question
// de niveau 3 (diagnostiquer) de son chapitre (voir CAP.ajouterCas).
// Un client arrive avec une plainte ; l'élève enchaîne les étapes : hypothèse, contrôle,
// cause, réparation. Les étapes restent affichées : chacune s'appuie sur les précédentes.
// Cas : { id (ne change jamais), chapitre, sousTheme, titre, vehicule?, plainte,
//         etapes: [{ enonce, choix (bonne réponse en premier), bonne, explication }], conclusion }
CAP.ajouterCas([
  {
    id: 'surchauffe-bouchons',
    chapitre: 'refroidissement',
    sousTheme: 'pannes',
    titre: 'Le moteur chauffe dans les bouchons',
    vehicule: 'Citadine essence, 90 000 km',
    plainte: 'Sur la route tout va bien, mais dans les bouchons l\'aiguille de température monte presque dans le rouge.',
    etapes: [
      {
        enonce: 'Quel élément est le plus suspect ?',
        choix: ['Le motoventilateur, qui doit souffler quand la voiture est arrêtée', 'Le thermostat, bloqué fermé', 'La pompe à eau', 'Le bouchon du vase d\'expansion'],
        bonne: 0,
        explication: 'En roulant, l\'air traverse le radiateur tout seul. À l\'arrêt, seul le **motoventilateur** le fait passer. Un thermostat bloqué fermé ou une pompe en panne feraient aussi chauffer sur la route.'
      },
      {
        enonce: 'Avant de démonter quoi que ce soit, que contrôles-tu en premier ?',
        choix: ['Le niveau de liquide de refroidissement, moteur froid', 'La compression des cylindres', 'Le jeu aux soupapes', 'La pression des pneus'],
        bonne: 0,
        explication: 'On va toujours **du plus simple au plus compliqué**. Un manque de liquide fait chauffer et se contrôle en une minute, **moteur froid** (risque de brûlure).'
      },
      {
        enonce: 'Le niveau est bon. Moteur chaud, le ventilateur ne démarre jamais. Alimenté directement en 12 V, il tourne. Où chercher ?',
        choix: ['Dans sa commande : fusible, relais, sonde de température', 'Dans le moteur électrique du ventilateur', 'Dans la pompe à eau', 'Dans le thermostat'],
        bonne: 0,
        explication: 'Il tourne quand on l\'alimente directement : le ventilateur **est bon**. La panne est dans ce qui le **commande** : fusible, relais, sonde ou calculateur.'
      },
      {
        enonce: 'Le relais était défectueux et il est remplacé. Que fais-tu avant de rendre le véhicule ?',
        choix: ['Faire chauffer le moteur et vérifier que le ventilateur se déclenche seul', 'Vidanger le liquide de refroidissement', 'Remplacer le thermostat par précaution', 'Rien, le relais est neuf'],
        bonne: 0,
        explication: 'On **contrôle toujours la réparation** : moteur chaud, le ventilateur doit démarrer tout seul.'
      }
    ],
    conclusion: 'Méthode : écouter quand la panne arrive, contrôler du plus simple au plus compliqué, séparer l\'organe de sa commande, puis vérifier la réparation.'
  },
  {
    id: 'joint-culasse',
    chapitre: 'moteur',
    sousTheme: 'organes',
    titre: 'Fumée blanche et liquide qui baisse',
    vehicule: 'Berline essence, 160 000 km, a déjà surchauffé',
    plainte: 'Je rajoute du liquide de refroidissement toutes les semaines, et il sort de la fumée blanche à l\'échappement, même moteur chaud.',
    etapes: [
      {
        enonce: 'Quelle panne faut-il suspecter ?',
        choix: ['Le joint de culasse', 'Le pot catalytique', 'L\'embrayage', 'Le démarreur'],
        bonne: 0,
        explication: 'Du liquide qui disparaît et une **fumée blanche épaisse** qui reste moteur chaud (de la vapeur) : le liquide passe dans les cylindres. On pense au **joint de culasse** (ou à une culasse fissurée).'
      },
      {
        enonce: 'Avant de conclure, que vérifies-tu ?',
        choix: ['Qu\'il n\'y a pas de fuite extérieure : durites, radiateur, pompe à eau', 'La pression des pneus', 'La garde de la pédale d\'embrayage', 'Le niveau de lave-glace'],
        bonne: 0,
        explication: 'Une **fuite extérieure** explique aussi un niveau qui baisse. On l\'élimine d\'abord.'
      },
      {
        enonce: 'Pas de fuite. Quel test confirme que des gaz de combustion passent dans le circuit de refroidissement ?',
        choix: ['Le test de CO2 (liquide qui change de couleur) sur le vase d\'expansion', 'La mesure de la tension de la batterie', 'Le contrôle du parallélisme', 'La lecture de la jauge d\'huile'],
        bonne: 0,
        explication: 'Le **testeur de CO2** change de couleur s\'il y a des gaz de combustion dans le liquide. On peut aussi faire un test d\'étanchéité des cylindres.'
      },
      {
        enonce: 'Le joint de culasse est en cause. Que contrôle-t-on aussi pendant la réparation ?',
        choix: ['La planéité de la culasse', 'L\'usure des plaquettes de frein', 'Le niveau de liquide de frein', 'La pression des pneus'],
        bonne: 0,
        explication: 'Une surchauffe peut **déformer la culasse**. On contrôle sa **planéité** (règle et cales) avant de remonter un joint neuf, serré au couple et dans l\'ordre du constructeur.'
      }
    ],
    conclusion: 'Liquide qui baisse sans fuite + fumée blanche à chaud = joint de culasse à confirmer par un test, jamais à deviner.'
  },
  {
    id: 'pression-huile',
    chapitre: 'lubrification',
    sousTheme: 'circuit',
    titre: 'Le voyant d\'huile clignote au ralenti',
    vehicule: 'Compacte diesel, 210 000 km',
    plainte: 'Au feu rouge, moteur bien chaud, le voyant rouge d\'huile clignote.',
    etapes: [
      {
        enonce: 'Que risque le client s\'il continue à rouler ?',
        choix: ['Une casse moteur : les pièces ne sont plus assez graissées', 'Une simple surconsommation de carburant', 'Une usure des pneus', 'Rien, c\'est un rappel d\'entretien'],
        bonne: 0,
        explication: 'Le voyant rouge d\'huile signale un **manque de pression** : coussinets, arbres à cames et turbo sont mal graissés. Il faut **s\'arrêter**.'
      },
      {
        enonce: 'Que contrôles-tu en premier ?',
        choix: ['Le niveau d\'huile à la jauge', 'La pression des pneus', 'Le niveau de liquide de refroidissement', 'La tension de la batterie'],
        bonne: 0,
        explication: 'Le plus simple d\'abord : un **niveau trop bas** suffit à faire chuter la pression au ralenti, surtout à chaud.'
      },
      {
        enonce: 'Le niveau est bon. Comment savoir si la pression est vraiment trop basse ?',
        choix: ['La mesurer avec un manomètre monté à la place du manocontact', 'Remplacer tout de suite la pompe à huile', 'Mesurer la compression', 'Lire la tension de la batterie'],
        bonne: 0,
        explication: 'Le **manomètre** donne la vraie pression. Si elle est bonne, c\'est le **manocontact** (ou son fil) qui est défectueux.'
      },
      {
        enonce: 'La pression mesurée est trop basse au ralenti à chaud. Quelles sont les causes possibles ?',
        choix: ['Huile trop fluide ou usée, crépine colmatée, pompe ou coussinets usés', 'Bougies de préchauffage usées', 'Thermostat bloqué ouvert', 'Filtre à air colmaté'],
        bonne: 0,
        explication: 'Une huile **non conforme** ou usée, une **crépine** bouchée, une **pompe** usée ou des **coussinets** usés (trop de jeu) font baisser la pression. On commence par une vidange avec l\'huile préconisée et un filtre neuf, puis on mesure à nouveau.'
      }
    ],
    conclusion: 'Voyant d\'huile rouge = arrêt immédiat. Niveau, puis mesure au manomètre, puis recherche de la cause.'
  },
  {
    id: 'rates-allumage',
    chapitre: 'alimentation',
    sousTheme: 'allumage',
    titre: 'Ratés moteur et voyant qui clignote',
    vehicule: 'Citadine essence, 4 cylindres, une bobine par cylindre',
    plainte: 'Ma voiture tremble, elle manque de puissance, et le voyant moteur orange clignote.',
    etapes: [
      {
        enonce: 'Que signale un voyant moteur qui clignote ?',
        choix: ['Des ratés de combustion qui peuvent abîmer le catalyseur', 'Une vidange à faire bientôt', 'Un pneu dégonflé', 'Un défaut de climatisation'],
        bonne: 0,
        explication: 'Voyant moteur **clignotant** = **ratés** importants. L\'essence non brûlée peut faire surchauffer et détruire le **catalyseur**. Il faut rouler doucement et faire réparer vite.'
      },
      {
        enonce: 'Quel outil utilises-tu en premier ?',
        choix: ['L\'outil de diagnostic (valise), pour lire les codes défaut', 'Un manomètre de pression d\'huile', 'Une clé dynamométrique', 'Un réfractomètre'],
        bonne: 0,
        explication: 'La **valise** lit les codes défaut enregistrés par le calculateur et les valeurs en temps réel.'
      },
      {
        enonce: 'Le code indique des ratés sur le cylindre 2. Tu échanges les bobines des cylindres 2 et 3 : les ratés passent sur le cylindre 3. Conclusion ?',
        choix: ['La bobine est défectueuse', 'L\'injecteur du cylindre 2 est défectueux', 'La compression du cylindre 2 est trop faible', 'Le calculateur est en panne'],
        bonne: 0,
        explication: 'Le défaut **suit la bobine** : c\'est elle. S\'il était resté sur le cylindre 2, on aurait cherché la bougie, l\'injecteur ou la compression de ce cylindre.'
      },
      {
        enonce: 'Après avoir remplacé la bobine, que fais-tu ?',
        choix: ['Effacer les codes, faire un essai, puis vérifier qu\'ils ne reviennent pas', 'Rien, le voyant s\'éteindra un jour', 'Débrancher la batterie pour cacher le défaut', 'Remplacer le catalyseur par précaution'],
        bonne: 0,
        explication: 'On **efface** les codes, on fait un **essai routier**, puis on relit les codes : le défaut ne doit pas revenir.'
      }
    ],
    conclusion: 'Échanger deux pièces identiques entre cylindres permet de savoir si le défaut suit la pièce ou reste sur le cylindre.'
  },
  {
    id: 'fumee-noire-diesel',
    chapitre: 'depollution',
    sousTheme: 'diesel',
    titre: 'Fumée noire et manque de puissance',
    vehicule: 'Utilitaire léger diesel, 180 000 km',
    plainte: 'Quand j\'accélère, ma voiture fait de la fumée noire et elle manque de puissance.',
    etapes: [
      {
        enonce: 'Que montre une fumée noire sur un diesel ?',
        choix: ['Une combustion incomplète : trop de gazole pour l\'air disponible', 'Du liquide de refroidissement qui brûle', 'De l\'huile moteur qui brûle', 'De la condensation normale'],
        bonne: 0,
        explication: 'Fumée **noire** = des **suies** : trop de carburant pour l\'air. Fumée bleue = huile ; fumée blanche épaisse à chaud = liquide de refroidissement.'
      },
      {
        enonce: 'Que contrôles-tu en premier ?',
        choix: ['Le filtre à air', 'Les injecteurs, en les déposant', 'La boîte de vitesses', 'L\'embrayage'],
        bonne: 0,
        explication: 'Du plus simple au plus compliqué : un **filtre à air colmaté** prive le moteur d\'air. Ensuite : vanne EGR, turbo, fuites d\'air après le turbo, injecteurs.'
      },
      {
        enonce: 'Le filtre est bon. La valise montre que la vanne EGR reste ouverte en pleine accélération. Quelle conséquence ?',
        choix: ['Des gaz d\'échappement prennent la place de l\'air frais : il manque d\'oxygène', 'Le moteur reçoit plus d\'air frais', 'La pression d\'huile augmente', 'Le catalyseur chauffe moins'],
        bonne: 0,
        explication: 'La vanne **EGR** renvoie des gaz d\'échappement vers l\'admission. Bloquée ouverte, elle prend la place de l\'**air frais** : la combustion est incomplète.'
      },
      {
        enonce: 'Après le nettoyage ou le remplacement de la vanne EGR, que fais-tu ?',
        choix: ['Effacer les codes, faire les apprentissages demandés et un essai routier', 'Débrancher la vanne pour de bon', 'Supprimer le filtre à particules', 'Rien d\'autre'],
        bonne: 0,
        explication: 'On **efface** les codes, on fait les **apprentissages** prévus par le constructeur, puis un **essai routier**. Débrancher ou supprimer un organe de dépollution est **interdit**.'
      }
    ],
    conclusion: 'Couleur de la fumée : noire = trop de carburant, bleue = huile, blanche épaisse = liquide de refroidissement.'
  },
  {
    id: 'clim-ne-refroidit-plus',
    chapitre: 'climatisation',
    sousTheme: 'entretien',
    titre: 'La clim ne fait plus de froid',
    vehicule: 'Monospace essence, 7 ans',
    plainte: 'Depuis le début de l\'été, la clim souffle de l\'air, mais il n\'est pas froid.',
    etapes: [
      {
        enonce: 'Moteur tournant, clim allumée, le compresseur ne s\'enclenche jamais. Quelle est la cause la plus fréquente ?',
        choix: ['Un manque de fluide : le pressostat empêche le compresseur de démarrer', 'Un évaporateur trop froid', 'Un filtre d\'habitacle neuf', 'Une batterie trop chargée'],
        bonne: 0,
        explication: 'Quand il manque du fluide, la **pression est trop basse** : le **pressostat** coupe le compresseur pour le protéger.'
      },
      {
        enonce: 'Qui a le droit d\'intervenir sur le fluide frigorigène ?',
        choix: ['Un technicien qui a l\'attestation d\'aptitude, avec une station de récupération', 'N\'importe qui, avec une bombe de recharge', 'Seulement le client', 'Personne, c\'est interdit'],
        bonne: 0,
        explication: 'Le fluide frigorigène est un **gaz à effet de serre** : il faut une **attestation d\'aptitude** et une **station** qui récupère le fluide. On ne le rejette jamais dans l\'air.'
      },
      {
        enonce: 'La station ne récupère presque pas de fluide. Que fais-tu avant de recharger ?',
        choix: ['Chercher et réparer la fuite (traceur UV ou détecteur électronique)', 'Recharger tout de suite au maximum', 'Remplacer le compresseur', 'Ajouter de l\'huile moteur dans le circuit'],
        bonne: 0,
        explication: 'Recharger sans réparer, c\'est renvoyer le fluide dans l\'air. On cherche la fuite au **traceur UV** ou au **détecteur électronique**, puis on répare.'
      },
      {
        enonce: 'La fuite est réparée. Quelle est la bonne suite ?',
        choix: ['Tirage au vide, puis charge à la masse prévue par le constructeur', 'Charger jusqu\'à ce que l\'air soit froid', 'Charger au maximum de la bouteille', 'Remplir le circuit d\'azote'],
        bonne: 0,
        explication: 'Le **tirage au vide** retire l\'air et l\'humidité et vérifie l\'étanchéité. Ensuite, on charge la **masse exacte** (en grammes) indiquée par le constructeur, et on mesure la température de l\'air soufflé.'
      }
    ],
    conclusion: 'Clim : on ne recharge jamais un circuit qui fuit. Récupération, réparation, tirage au vide, charge à la bonne masse.'
  },
  {
    id: 'batterie-clic',
    chapitre: 'electricite',
    sousTheme: 'batterie',
    titre: 'Le démarreur fait « clic »',
    vehicule: 'Citadine essence, batterie de 4 ans',
    plainte: 'Ce matin, en tournant la clé, j\'ai juste entendu « clic » et les voyants ont baissé.',
    etapes: [
      {
        enonce: 'Quelle est la cause la plus probable ?',
        choix: ['Une batterie déchargée', 'Une bougie usée', 'Un filtre à carburant colmaté', 'Un pneu dégonflé'],
        bonne: 0,
        explication: 'Les voyants qui baissent montrent que la batterie **ne tient pas** le fort courant demandé par le démarreur.'
      },
      {
        enonce: 'Véhicule au repos depuis la nuit, quelle tension indique une batterie 12 V bien chargée ?',
        choix: ['Environ 12,6 V', 'Environ 10,5 V', 'Environ 14,5 V', 'Environ 6 V'],
        bonne: 0,
        explication: 'Au repos, une batterie chargée affiche environ **12,6 V**. Vers **12,0 V**, elle est à moitié déchargée. 14,5 V est une tension de charge, moteur tournant.'
      },
      {
        enonce: 'Tu lis 11,9 V. Après recharge, le test de la batterie au testeur est bon. Que contrôles-tu ensuite, moteur tournant ?',
        choix: ['La tension de charge de l\'alternateur', 'La pression d\'huile', 'Le jeu aux soupapes', 'La densité du liquide de refroidissement'],
        bonne: 0,
        explication: 'Une batterie qui se vide peut venir d\'un **alternateur** qui charge mal. Moteur tournant, on doit lire environ **13,5 à 14,5 V**.'
      },
      {
        enonce: 'La charge est bonne (14,2 V). Que demandes-tu au client ?',
        choix: ['S\'il a laissé quelque chose allumé, ou s\'il ne fait que de petits trajets', 'S\'il a changé de carburant', 'S\'il a fait la vidange récemment', 'Quelle est la pression de ses pneus'],
        bonne: 0,
        explication: 'Batterie et alternateur sont bons : on cherche une **consommation à l\'arrêt** (plafonnier, accessoire) ou des trajets trop courts pour recharger. Si besoin, on mesure le courant de fuite à la pince ampèremétrique.'
      }
    ],
    conclusion: 'Panne de démarrage : tension au repos, test de la batterie, tension de charge, puis recherche d\'une consommation anormale.'
  },
  {
    id: 'voyant-charge',
    chapitre: 'electricite',
    sousTheme: 'charge',
    titre: 'Le voyant de batterie s\'allume en roulant',
    vehicule: 'Break diesel, 140 000 km',
    plainte: 'Le voyant rouge de batterie reste allumé quand je roule.',
    etapes: [
      {
        enonce: 'Que signifie ce voyant, moteur tournant ?',
        choix: ['L\'alternateur ne charge plus la batterie', 'La batterie est trop chargée', 'Le démarreur reste engagé', 'Il manque de l\'huile'],
        bonne: 0,
        explication: 'Le voyant de charge s\'allume quand l\'**alternateur ne charge plus**. La voiture roule sur la batterie, qui va se vider.'
      },
      {
        enonce: 'Quel contrôle visuel fais-tu en premier ?',
        choix: ['L\'état et la tension de la courroie d\'accessoires', 'L\'usure des pneus', 'Le niveau de liquide de frein', 'Le filtre à air'],
        bonne: 0,
        explication: 'L\'alternateur est entraîné par la **courroie d\'accessoires**. Cassée ou qui patine : plus de charge.'
      },
      {
        enonce: 'La courroie est bonne. Moteur tournant, tu mesures 12,1 V aux bornes de la batterie. Conclusion ?',
        choix: ['L\'alternateur (ou son régulateur) ne charge pas', 'La charge est normale', 'La batterie est surchargée', 'Le démarreur consomme trop'],
        bonne: 0,
        explication: 'Moteur tournant, il faudrait **13,5 à 14,5 V**. On vérifie aussi les **connexions** (câble de charge, masse) avant de remplacer l\'alternateur.'
      },
      {
        enonce: 'L\'alternateur est remplacé. Que vérifies-tu ?',
        choix: ['La tension de charge, le voyant éteint et l\'état de la batterie', 'Seulement que le moteur démarre', 'La pression des pneus', 'Le niveau d\'huile de boîte'],
        bonne: 0,
        explication: 'On **contrôle la réparation** : 13,5 à 14,5 V, voyant éteint. La batterie, vidée pendant la panne, peut avoir besoin d\'une recharge.'
      }
    ],
    conclusion: 'Voyant de charge : courroie, tension de charge, connexions, puis alternateur.'
  },
  {
    id: 'feu-stop',
    chapitre: 'eclairage',
    sousTheme: 'diagnostic',
    titre: 'Un feu stop ne s\'allume plus',
    plainte: 'Au contrôle technique, on m\'a dit que mon feu stop gauche ne marchait pas.',
    etapes: [
      {
        enonce: 'Le feu stop droit et le troisième feu stop marchent. Que contrôles-tu d\'abord ?',
        choix: ['La lampe du feu stop gauche', 'Le contacteur de pédale de frein', 'Le fusible des feux stop', 'Le calculateur ABS'],
        bonne: 0,
        explication: 'Les autres feux stop marchent : le **contacteur** et le **fusible** communs sont bons. On commence par le plus probable et le plus simple : la **lampe**.'
      },
      {
        enonce: 'La lampe est bonne. Pédale enfoncée, tu mesures 12 V entre le fil d\'alimentation du support et la carrosserie. Que vérifies-tu ensuite ?',
        choix: ['La masse du feu (fil coupé ou point de masse oxydé)', 'Le contacteur de pédale', 'La batterie', 'L\'alternateur'],
        bonne: 0,
        explication: 'Le courant **arrive** jusqu\'au feu. Si la lampe ne s\'allume pas, c\'est que le retour par la **masse** est coupé ou oxydé.'
      },
      {
        enonce: 'Le point de masse est oxydé. Que fais-tu ?',
        choix: ['Nettoyer, resserrer et protéger le point de masse, puis contrôler tous les feux', 'Remplacer le feu complet', 'Mettre une lampe plus puissante', 'Remplacer le fusible'],
        bonne: 0,
        explication: 'On **nettoie** le contact, on resserre et on le protège. Puis on **contrôle tous les feux** arrière, qui partagent souvent la même masse.'
      }
    ],
    conclusion: 'Un consommateur qui ne marche pas : la lampe, puis l\'alimentation (+), puis la masse (–).'
  },
  {
    id: 'pedale-molle',
    chapitre: 'freinage',
    sousTheme: 'entretien',
    titre: 'La pédale de frein est molle',
    vehicule: 'Break diesel, liquide de frein jamais changé depuis 5 ans',
    plainte: 'La pédale de frein s\'enfonce plus qu\'avant, elle est comme « spongieuse ».',
    etapes: [
      {
        enonce: 'Quelle est la cause la plus probable ?',
        choix: ['De l\'air ou de la vapeur dans le circuit hydraulique', 'Des disques voilés', 'Un servofrein trop puissant', 'Des pneus sous-gonflés'],
        bonne: 0,
        explication: 'L\'air et la vapeur se **compriment**, le liquide non : la pédale devient molle.'
      },
      {
        enonce: 'Que contrôles-tu en premier ?',
        choix: ['Le niveau du bocal et l\'absence de fuite', 'L\'épaisseur des disques', 'Le parallélisme', 'La tension de la batterie'],
        bonne: 0,
        explication: 'Un niveau bas vient de l\'usure des plaquettes ou d\'une **fuite** (flexible, étrier, cylindre de roue). Une fuite se répare avant tout.'
      },
      {
        enonce: 'Pas de fuite. Pourquoi un liquide de frein de 5 ans pose-t-il problème ?',
        choix: ['Il a absorbé de l\'eau : il bout plus facilement', 'Il est devenu trop épais et bloque les étriers', 'Il s\'évapore par le bocal', 'Il attaque les disques'],
        bonne: 0,
        explication: 'Le liquide de frein est **hygroscopique** : il absorbe l\'eau de l\'air. Son point d\'ébullition baisse, et des bulles de vapeur se forment quand les freins chauffent. On le remplace en général tous les **2 ans**.'
      },
      {
        enonce: 'Quelle intervention fais-tu ?',
        choix: ['Remplacer le liquide et purger le circuit', 'Ajouter du liquide jusqu\'au MAXI', 'Remplacer le maître-cylindre', 'Régler le frein de stationnement'],
        bonne: 0,
        explication: 'On **remplace** le liquide (norme préconisée, par exemple DOT 4) et on **purge** chaque roue pour chasser l\'air. Puis on essaie la pédale et on fait un essai routier.'
      }
    ],
    conclusion: 'Pédale molle = air ou vapeur dans le circuit. Le liquide de frein se remplace régulièrement, et le circuit se purge.'
  },
  {
    id: 'tire-au-freinage',
    chapitre: 'freinage',
    sousTheme: 'organes',
    titre: 'La voiture tire d\'un côté au freinage',
    plainte: 'Quand je freine, la voiture part vers la droite. En roulant sans freiner, elle va droit.',
    etapes: [
      {
        enonce: 'Si la voiture tire à droite seulement au freinage, que peut-on en déduire ?',
        choix: ['La roue avant gauche freine moins que la droite', 'La roue avant gauche freine plus que la droite', 'Les freins arrière sont trop forts', 'Le servofrein est hors service'],
        bonne: 0,
        explication: 'La voiture part **du côté qui freine le plus**. Si elle tire à droite, la gauche **freine moins**.'
      },
      {
        enonce: 'Avant de démonter les freins, quel contrôle simple fais-tu ?',
        choix: ['La pression des pneus avant', 'Le niveau d\'huile moteur', 'La charge de la batterie', 'Le niveau de liquide de refroidissement'],
        bonne: 0,
        explication: 'Une différence de pression peut aussi faire tirer. C\'est rapide à contrôler : **du plus simple au plus compliqué**.'
      },
      {
        enonce: 'Les pressions sont bonnes. Côté gauche, une plaquette est à peine usée et le piston de l\'étrier ne bouge presque pas. Diagnostic ?',
        choix: ['Étrier grippé : il serre mal', 'Disque trop épais', 'Liquide de frein trop neuf', 'Roulement de roue neuf'],
        bonne: 0,
        explication: 'Un piston ou des coulisseaux **grippés** empêchent l\'étrier de serrer correctement : cette roue freine moins.'
      },
      {
        enonce: 'Quelle réparation fais-tu ?',
        choix: ['Remplacer ou remettre en état l\'étrier, puis purger', 'Remplacer seulement les plaquettes du côté gauche', 'Remplacer les disques sans toucher à l\'étrier', 'Remplacer seulement le liquide de frein'],
        bonne: 0,
        explication: 'On traite la cause : **étrier** remplacé ou remis en état, puis **purge**. Disques et plaquettes se remplacent toujours **par essieu** (des deux côtés), jamais d\'un seul côté.'
      }
    ],
    conclusion: 'Au freinage, la voiture part du côté qui freine le plus. Disques et plaquettes se changent par essieu.'
  },
  {
    id: 'embrayage-patine',
    chapitre: 'transmission',
    sousTheme: 'embrayage',
    titre: 'Le moteur monte en régime mais la voiture n\'avance pas',
    vehicule: 'Compacte diesel, 230 000 km',
    plainte: 'En côte, quand j\'accélère en 4e, le moteur monte dans les tours mais la voiture n\'accélère presque pas. Ça sent le brûlé.',
    etapes: [
      {
        enonce: 'Quel organe est en cause ?',
        choix: ['L\'embrayage, qui patine', 'La boîte de vitesses, qui saute de rapport', 'Le turbo', 'Le différentiel'],
        bonne: 0,
        explication: 'Le régime monte mais la vitesse ne suit pas : le **disque patine** entre le volant moteur et le plateau. Les garnitures chauffent : odeur de brûlé.'
      },
      {
        enonce: 'Quelles sont les causes possibles ?',
        choix: ['Garnitures usées ou huilées, ou commande qui garde la butée en appui', 'Pneus usés', 'Huile de boîte trop neuve', 'Batterie faible'],
        bonne: 0,
        explication: 'Garnitures **usées** ou **huilées** (fuite d\'un joint), diaphragme fatigué, ou commande mal réglée qui laisse la **butée en appui**.'
      },
      {
        enonce: 'L\'embrayage est déposé : le disque est plein d\'huile. Que fais-tu en plus du remplacement de l\'embrayage ?',
        choix: ['Trouver et réparer la fuite d\'huile (joint spi)', 'Nettoyer le disque et le remonter', 'Rajouter de l\'huile moteur', 'Changer les pneus'],
        bonne: 0,
        explication: 'Sinon le disque neuf sera de nouveau huilé. On remplace le **joint spi** fautif (sortie de vilebrequin ou entrée de boîte).'
      },
      {
        enonce: 'Quelles pièces remplace-t-on en général ?',
        choix: ['Le kit : disque, mécanisme et butée, après contrôle du volant moteur', 'Seulement le disque', 'Seulement la butée', 'Toute la boîte de vitesses'],
        bonne: 0,
        explication: 'On remplace le **kit complet** (disque, mécanisme, butée) et on **contrôle le volant moteur** (état de surface, jeu d\'un volant bimasse).'
      }
    ],
    conclusion: 'Embrayage qui patine : le régime monte sans que la vitesse suive. On cherche toujours la cause (usure, huile, commande).'
  },
  {
    id: 'claquement-virage',
    chapitre: 'transmission',
    sousTheme: 'transmissions',
    titre: 'Ça claque en tournant',
    plainte: 'Quand je braque à fond pour me garer et que j\'accélère, ça fait « clac clac clac » à l\'avant.',
    etapes: [
      {
        enonce: 'Quel organe est le plus suspect ?',
        choix: ['Un joint homocinétique côté roue', 'Un amortisseur arrière', 'Le silencieux d\'échappement', 'Le démarreur'],
        bonne: 0,
        explication: 'Un claquement **roues braquées en accélérant** est typique d\'un **joint homocinétique côté roue** usé.'
      },
      {
        enonce: 'Véhicule levé, que contrôles-tu en premier ?',
        choix: ['L\'état des soufflets de transmission', 'L\'épaisseur des disques', 'Le niveau de liquide de refroidissement', 'Les balais d\'essuie-glace'],
        bonne: 0,
        explication: 'Un **soufflet déchiré** laisse sortir la graisse et entrer la saleté : le joint s\'use vite et claque.'
      },
      {
        enonce: 'Le soufflet est déchiré et le joint claque déjà. Que fais-tu ?',
        choix: ['Remplacer le joint (ou la transmission) avec un soufflet neuf et sa graisse', 'Remplacer seulement le soufflet', 'Mettre de la graisse sur le soufflet', 'Rien, c\'est normal en braquage'],
        bonne: 0,
        explication: 'Le joint est **déjà usé** : changer seulement le soufflet ne fera pas disparaître le bruit.'
      },
      {
        enonce: 'Et si le soufflet avait été déchiré mais sans aucun bruit ?',
        choix: ['Remplacer le soufflet tout de suite, avec de la graisse neuve, pour sauver le joint', 'Attendre que le bruit apparaisse', 'Réparer le soufflet avec du ruban adhésif', 'Remplacer les deux transmissions'],
        bonne: 0,
        explication: 'Pris à temps, le **remplacement du soufflet** (nettoyage du joint et graisse neuve) évite de changer le joint.'
      }
    ],
    conclusion: 'Un soufflet déchiré se remplace tout de suite : c\'est bien moins cher qu\'un joint homocinétique.'
  },
  {
    id: 'usure-pneus',
    chapitre: 'liaison-au-sol',
    sousTheme: 'geometrie',
    titre: 'Les pneus avant s\'usent mal',
    plainte: 'Mes pneus avant sont déjà usés, alors qu\'ils n\'ont que 15 000 km.',
    etapes: [
      {
        enonce: 'Les deux pneus sont usés sur les deux bords, mais pas au milieu. Cause ?',
        choix: ['Un roulage sous-gonflé', 'Un roulage surgonflé', 'Un défaut de parallélisme', 'Des amortisseurs neufs'],
        bonne: 0,
        explication: 'Sous-gonflé, le pneu s\'écrase et porte sur ses **bords** (épaulements). Surgonflé, il s\'use au **centre**.'
      },
      {
        enonce: 'Sur une autre voiture, un pneu est usé d\'un seul côté. Cause probable ?',
        choix: ['Un défaut de géométrie (parallélisme ou carrossage)', 'Un sous-gonflage', 'Une valve usée', 'Un pneu trop neuf'],
        bonne: 0,
        explication: 'Une usure **d\'un seul côté** vient de la **géométrie** : parallélisme (usure en biseau) ou carrossage.'
      },
      {
        enonce: 'Avant de contrôler la géométrie, que vérifies-tu ?',
        choix: ['Les jeux (rotules, silentblocs, roulements) et la pression des pneus', 'Le niveau d\'huile moteur', 'La charge de la batterie', 'Le filtre d\'habitacle'],
        bonne: 0,
        explication: 'Un **jeu** dans la direction ou la suspension fausse les mesures et le réglage : on le répare d\'abord. Les pneus doivent être à la bonne pression.'
      },
      {
        enonce: 'Que règle-t-on le plus souvent sur le train avant ?',
        choix: ['Le parallélisme, en agissant sur les biellettes de direction', 'Le carrossage, avec la pression des pneus', 'La chasse, avec le volant', 'La hauteur de caisse, avec les amortisseurs'],
        bonne: 0,
        explication: 'Sur la plupart des voitures, on règle le **parallélisme** par les **biellettes de direction**. Si le carrossage ou la chasse ne sont pas réglables et sont faux, une pièce est faussée.'
      }
    ],
    conclusion: 'Lire l\'usure d\'un pneu : deux bords = sous-gonflage, centre = surgonflage, un seul côté = géométrie.'
  }
]);
