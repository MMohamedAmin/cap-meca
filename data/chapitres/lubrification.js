CAP.ajouterChapitre({
  id: 'lubrification',
  titre: 'Lubrification',
  icone: '🛢️',
  description: 'Rôles de l\'huile, circuit de graissage, lecture des huiles et entretien (vidange, niveau).',
  sousThemes: {
    role: 'Rôles de l\'huile',
    circuit: 'Circuit de graissage',
    huiles: 'Les huiles',
    entretien: 'Contrôle et entretien'
  },

  fiche: [
    {
      titre: 'Les rôles de l\'huile',
      sousTheme: 'role',
      contenu: [
        { liste: [
          '**Lubrifier** : réduire les frottements et l\'usure.',
          '**Refroidir** : évacuer une partie de la chaleur (pistons, paliers).',
          '**Nettoyer** : transporter les impuretés vers le filtre.',
          '**Étancher** : améliorer l\'étanchéité piston-segments-cylindre.',
          '**Protéger** contre la corrosion.'
        ] }
      ]
    },
    {
      titre: 'Le circuit de graissage',
      sousTheme: 'circuit',
      contenu: [
        'Trajet de l\'huile : **carter** → **crépine** (filtre grossier) → **pompe à huile** → **filtre à huile** → **rampe principale** → paliers du vilebrequin, têtes de bielles, arbre à cames, etc. L\'huile retombe ensuite dans le carter.',
        'Le **clapet de décharge** limite la pression maximale dans le circuit.',
        'Le **manocontact** (mano-contact de pression d\'huile) allume le voyant au tableau de bord quand la pression est insuffisante.',
        { attention: 'Voyant de pression d\'huile allumé en roulant : s\'arrêter et couper le moteur au plus vite, sinon risque de serrage.' }
      ]
    },
    {
      titre: 'Lire une huile',
      sousTheme: 'huiles',
      contenu: [
        'Exemple : **5W30**. Le chiffre avant le W (**Winter**) indique la viscosité à froid : plus il est petit, plus l\'huile reste fluide au démarrage. Le second chiffre indique la viscosité à chaud.',
        'Il existe des huiles minérales, semi-synthétiques et synthétiques. Il faut aussi respecter les **normes** (ACEA, API) et les **normes constructeur** indiquées dans le carnet d\'entretien.'
      ]
    },
    {
      titre: 'Contrôle et entretien',
      sousTheme: 'entretien',
      contenu: [
        'Contrôle du niveau : véhicule **à plat**, moteur **arrêté** depuis quelques minutes. Le niveau doit être entre le **mini** et le **maxi** de la jauge.',
        'Trop d\'huile est aussi néfaste que pas assez : pression excessive, fuites aux joints, huile qui mousse.',
        'La **vidange** et le remplacement du **filtre à huile** se font selon les préconisations du constructeur.',
        { retenir: 'L\'huile usagée est un **déchet dangereux** : elle part en collecte spécifique, jamais à l\'égout.' }
      ]
    }
  ],

  cartes: [
    { id: 'lubri-c1', sousTheme: 'role', recto: 'Cite les 5 rôles de l\'huile moteur.', verso: 'Lubrifier, refroidir, nettoyer, étancher, protéger contre la corrosion.' },
    { id: 'lubri-c2', sousTheme: 'huiles', recto: 'Dans 5W30, que veut dire « W » ?', verso: '**Winter** (hiver) : le chiffre devant indique la viscosité à froid.' },
    { id: 'lubri-c3', sousTheme: 'circuit', recto: 'Rôle du clapet de décharge ?', verso: '**Limiter la pression** maximale dans le circuit d\'huile.' },
    { id: 'lubri-c4', sousTheme: 'circuit', recto: 'Rôle de la crépine ?', verso: 'Filtrer **grossièrement** l\'huile à l\'aspiration de la pompe.' },
    { id: 'lubri-c5', sousTheme: 'entretien', recto: 'Conditions pour contrôler le niveau d\'huile ?', verso: 'Véhicule **à plat**, moteur **arrêté** depuis quelques minutes.' },
    { id: 'lubri-c6', sousTheme: 'circuit', recto: 'Quel élément allume le voyant de pression d\'huile ?', verso: 'Le **manocontact** de pression d\'huile.' }
  ],

  questions: [
    {
      id: 'lubri-q1', sousTheme: 'huiles', type: 'qcm',
      enonce: 'Sur une huile 5W30, que signifie « 5W » ?',
      choix: ['La viscosité à froid (W = Winter)', 'La viscosité à chaud', '5 litres minimum', '5 000 km entre deux vidanges'],
      bonne: 0,
      explication: 'Plus le chiffre devant le W est petit, plus l\'huile reste fluide à froid. Le 30 concerne la viscosité à chaud.'
    },
    {
      id: 'lubri-q2', sousTheme: 'circuit', type: 'qcm',
      enonce: 'Quel élément filtre grossièrement l\'huile à l\'entrée de la pompe ?',
      choix: ['La crépine', 'Le filtre à huile', 'Le clapet de décharge', 'Le manocontact'],
      bonne: 0,
      explication: 'La crépine est une grille plongée dans le carter. Le filtre à huile, lui, filtre finement après la pompe.'
    },
    {
      id: 'lubri-q3', sousTheme: 'circuit', type: 'qcm',
      enonce: 'Le voyant de pression d\'huile s\'allume en roulant. Que faire ?',
      choix: ['S\'arrêter et couper le moteur au plus vite', 'Continuer jusqu\'au prochain entretien', 'Rouler plus vite pour augmenter la pression', 'Ajouter du liquide de refroidissement'],
      bonne: 0,
      explication: 'Sans pression d\'huile, les pièces ne sont plus graissées : le moteur peut serrer en quelques minutes.'
    },
    {
      id: 'lubri-q4', sousTheme: 'circuit', type: 'qcm',
      enonce: 'À quoi sert le clapet de décharge ?',
      choix: ['À limiter la pression maximale d\'huile', 'À vidanger le carter', 'À allumer le voyant d\'huile', 'À refroidir l\'huile'],
      bonne: 0,
      explication: 'Quand la pression devient trop forte (huile froide, régime élevé), il s\'ouvre et renvoie une partie de l\'huile vers le carter.'
    },
    {
      id: 'lubri-q5', sousTheme: 'entretien', type: 'qcm',
      enonce: 'Dans quelles conditions contrôle-t-on le niveau d\'huile ?',
      choix: ['Véhicule à plat, moteur arrêté depuis quelques minutes', 'Moteur tournant au ralenti', 'Juste après avoir coupé le moteur, en pente', 'Moteur froid uniquement, véhicule sur cric'],
      bonne: 0,
      explication: 'À plat pour une lecture juste, et moteur arrêté depuis quelques minutes pour que l\'huile redescende dans le carter.'
    },
    {
      id: 'lubri-q6', sousTheme: 'entretien', type: 'qcm',
      enonce: 'Que fait-on de l\'huile de vidange usagée ?',
      choix: ['On la stocke pour une collecte spécifique (déchet dangereux)', 'On la jette à l\'égout', 'On la mélange aux ordures ménagères', 'On la réutilise après filtration'],
      bonne: 0,
      explication: 'C\'est un déchet dangereux, collecté par une filière agréée.'
    },
    {
      id: 'lubri-q7', sousTheme: 'role', type: 'vf',
      enonce: 'Vrai ou faux : l\'huile participe au refroidissement du moteur.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : elle évacue une partie de la chaleur, notamment des pistons et des paliers.'
    },
    {
      id: 'lubri-q8', sousTheme: 'entretien', type: 'qcm', niveau: 2,
      enonce: 'Le niveau d\'huile est nettement au-dessus du maxi. Que faut-il faire ?',
      choix: ['Corriger le niveau, car l\'excès peut abîmer le moteur', 'Rien, plus il y a d\'huile mieux c\'est', 'Rouler pour qu\'il baisse', 'Ajouter un additif'],
      bonne: 0,
      explication: 'Trop d\'huile peut créer une pression excessive, des fuites aux joints et faire mousser l\'huile.'
    },
    {
      id: 'lubri-q9', sousTheme: 'circuit', type: 'qcm',
      enonce: 'Dans quel ordre l\'huile circule-t-elle ?',
      choix: ['Carter, crépine, pompe, filtre, rampe principale', 'Pompe, carter, filtre, crépine, rampe', 'Filtre, pompe, carter, crépine, rampe', 'Carter, filtre, crépine, pompe, rampe'],
      bonne: 0,
      explication: 'La pompe aspire dans le carter à travers la crépine, puis envoie l\'huile au filtre et dans la rampe principale.'
    },
    {
      id: 'lubri-q10', sousTheme: 'huiles', type: 'qcm',
      enonce: 'Sur une huile 5W30, que représente le « 30 » ?',
      choix: ['La viscosité à chaud', 'La viscosité à froid', 'La température maximale d\'utilisation', 'Le nombre de kilomètres entre deux vidanges (30 000 km)'],
      bonne: 0,
      explication: 'Le nombre avec W concerne le froid (démarrage), le second nombre la viscosité moteur chaud.'
    },
    {
      id: 'lubri-q11', sousTheme: 'huiles', type: 'qcm',
      enonce: 'Quelle huile met-on lors d\'une vidange ?',
      choix: ['Celle qui respecte la viscosité et la norme préconisées par le constructeur', 'La plus épaisse possible, pour mieux protéger', 'N\'importe laquelle, elles se valent toutes', 'La moins chère, puisqu\'on la change souvent'],
      bonne: 0,
      explication: 'Le constructeur impose une viscosité et une norme (ACEA ou norme maison). Une huile non conforme peut abîmer le moteur ou le filtre à particules.'
    },
    {
      id: 'lubri-q12', sousTheme: 'role', type: 'qcm',
      enonce: 'Lequel de ces rôles n\'est PAS un rôle de l\'huile moteur ?',
      choix: ['Alimenter les injecteurs', 'Réduire les frottements', 'Évacuer une partie de la chaleur', 'Protéger contre la corrosion'],
      bonne: 0,
      explication: 'Les injecteurs sont alimentés en carburant, pas en huile. L\'huile lubrifie, refroidit, nettoie, assure l\'étanchéité et protège.'
    },
    {
      id: 'lubri-q13', sousTheme: 'role', type: 'vf',
      enonce: 'Vrai ou faux : on peut garder le même filtre à huile pendant plusieurs vidanges.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : l\'huile nettoie le moteur et transporte les impuretés jusqu\'au filtre, qui se charge. On le change à chaque vidange.'
    },
    {
      id: 'lubri-q14', sousTheme: 'entretien', type: 'qcm', image: 'jauge-huile',
      enonce: 'Que fait cette personne ?',
      choix: ['Elle sort la jauge pour contrôler le niveau d\'huile moteur', 'Elle contrôle le niveau de liquide de frein', 'Elle vérifie le niveau de liquide de refroidissement', 'Elle remplit le réservoir de lave-glace'],
      bonne: 0,
      explication: 'On essuie la jauge, on la replonge à fond, puis on lit le niveau entre les repères mini et maxi. Véhicule à plat, moteur arrêté depuis quelques minutes.'
    },
    {
      id: 'lubri-q15', sousTheme: 'circuit', type: 'qcm',
      enonce: 'Quel élément allume le voyant de pression d\'huile au tableau de bord ?',
      choix: ['Le manocontact de pression d\'huile', 'La jauge d\'huile', 'Le clapet de décharge', 'Le filtre à huile'],
      bonne: 0,
      explication: 'Le **manocontact** est un interrupteur commandé par la pression : si elle est trop faible, il allume le voyant.'
    },
    {
      id: 'lubri-q16', sousTheme: 'huiles', type: 'qcm',
      enonce: 'Entre une huile 0W30 et une 15W40, laquelle est la plus fluide à froid ?',
      choix: ['La 0W30', 'La 15W40', 'Elles sont identiques à froid', 'On ne peut pas savoir avec ces indications'],
      bonne: 0,
      explication: 'Plus le chiffre avant le **W** est petit, plus l\'huile reste fluide à froid, donc au démarrage.'
    },
    {
      id: 'lubri-q17', sousTheme: 'huiles', type: 'qcm',
      enonce: 'Quels sont les trois grands types d\'huile moteur ?',
      choix: ['Minérale, semi-synthétique et synthétique', 'Végétale, animale et minérale', 'Hiver, été et quatre saisons', 'Diesel, essence et GPL'],
      bonne: 0,
      explication: 'On choisit ensuite selon la viscosité et les normes (ACEA, API, norme du constructeur).'
    },
    {
      id: 'lubri-q18', sousTheme: 'role', type: 'qcm',
      enonce: 'Comment l\'huile participe-t-elle au refroidissement du moteur ?',
      choix: ['Elle emporte une partie de la chaleur des pièces chaudes, puis la cède en retombant dans le carter', 'Elle contient de l\'antigel', 'Elle passe dans le radiateur de refroidissement', 'Elle ralentit la combustion'],
      bonne: 0,
      explication: 'L\'huile circule sur les pistons et les paliers, se charge de chaleur, puis se refroidit dans le carter.'
    },
    {
      id: 'lubri-q19', sousTheme: 'role', type: 'vf',
      enonce: 'Vrai ou faux : sans huile, les pièces métalliques frotteraient directement entre elles et le moteur pourrait serrer.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : l\'huile forme un film entre les pièces. Sans elle, l\'échauffement est tel que les pièces se soudent : c\'est le **serrage**.'
    },
    {
      id: 'lubri-q20', sousTheme: 'circuit', type: 'qcm', niveau: 2,
      enonce: 'Le filtre à huile est complètement colmaté. Que se passe-t-il grâce à son clapet de dérivation (by-pass) ?',
      choix: ['L\'huile contourne le filtre : le moteur reste graissé, mais avec de l\'huile non filtrée', 'Le moteur s\'arrête aussitôt', 'La pression d\'huile double', 'L\'huile repart vers le réservoir de carburant'],
      bonne: 0,
      explication: 'Le **by-pass** évite de priver le moteur d\'huile, mais les impuretés circulent : il faut respecter les échéances de remplacement du filtre.'
    },
    {
      id: 'lubri-q22', sousTheme: 'huiles', type: 'qcm', niveau: 2,
      enonce: 'Le constructeur préconise une 5W30 de norme C3. Le magasin n\'a qu\'une 5W30 sans cette norme. Peut-on l\'utiliser ?',
      choix: ['Non : la viscosité ne suffit pas, il faut aussi respecter la norme', 'Oui, seule l\'indication 5W30 compte', 'Oui, si on en met un peu moins', 'Oui, en ajoutant un additif'],
      bonne: 0,
      explication: 'La **norme** garantit la composition de l\'huile (additifs, compatibilité avec le filtre à particules…). Même viscosité ne veut pas dire même huile.'
    },
    {
      id: 'lubri-q23', sousTheme: 'role', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi une huile trop vieille protège-t-elle moins bien le moteur ?',
      choix: ['Ses additifs s\'épuisent et elle se charge d\'impuretés', 'Sa couleur foncée gêne la lubrification', 'Elle s\'évapore entièrement', 'Elle devient de l\'antigel'],
      bonne: 0,
      explication: 'Une huile foncée n\'est pas forcément usée : c\'est le temps et les kilomètres qui épuisent ses **additifs** et la chargent d\'impuretés.'
    },
    {
      id: 'lubri-q24', sousTheme: 'circuit', type: 'qcm', niveau: 3,
      enonce: 'Le voyant de pression d\'huile s\'allume au ralenti moteur chaud et s\'éteint dès qu\'on accélère. Le niveau est bon. Que faire ?',
      choix: ['Mesurer la pression d\'huile avec un manomètre', 'Rajouter de l\'huile au-dessus du maxi', 'Ignorer : c\'est normal au ralenti', 'Remplacer le joint de culasse'],
      bonne: 0,
      explication: 'La pression est peut-être vraiment trop faible au ralenti (pompe ou paliers usés, huile inadaptée), ou le manocontact est défectueux. Le **manomètre** tranche avant de changer quoi que ce soit.'
    },
    {
      id: 'lubri-q21', sousTheme: 'entretien', type: 'qcm', niveau: 3,
      enonce: 'Sur un diesel avec filtre à particules, le niveau d\'huile monte entre deux vidanges et l\'huile sent le gazole. Cause probable ?',
      choix: ['Du gazole passe dans l\'huile, souvent quand les régénérations du filtre à particules sont interrompues', 'Du liquide de refroidissement passe dans l\'huile', 'Le moteur fabrique de l\'huile en chauffant', 'Quelqu\'un a rajouté du liquide de frein'],
      bonne: 0,
      explication: 'C\'est la **dilution** de l\'huile par le gazole, fréquente avec beaucoup de petits trajets. L\'huile perd sa viscosité : vidange et recherche de la cause.'
    },
    {
      id: 'lubri-q25', sousTheme: 'entretien', type: 'qcm', niveau: 3,
      enonce: 'Juste après une vidange, au premier démarrage, le voyant de pression d\'huile reste allumé 2 ou 3 secondes puis s\'éteint. Que penser ?',
      choix: ['C\'est normal : le filtre neuf se remplit d\'huile', 'Il faut refaire la vidange', 'Le manocontact est forcément hors service', 'Il faut rouler pour que le voyant disparaisse'],
      bonne: 0,
      explication: 'Le filtre neuf est vide : la pression met quelques secondes à monter. En revanche, si le voyant reste allumé plus longtemps, on **coupe le moteur** et on cherche.'
    }
  ]
});
