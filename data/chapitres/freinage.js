CAP.ajouterChapitre({
  id: 'freinage',
  titre: 'Freinage',
  icone: '🛑',
  description: 'Principe, circuit hydraulique, freins à disque et à tambour, assistance et ABS, liquide de frein et entretien.',
  sousThemes: {
    hydraulique: 'Circuit hydraulique',
    organes: 'Disques et tambours',
    assistance: 'Assistance et ABS',
    entretien: 'Liquide et entretien'
  },

  fiche: [
    {
      titre: 'Principe et circuit hydraulique',
      sousTheme: 'hydraulique',
      contenu: [
        'Freiner, c\'est transformer l\'**énergie de mouvement** du véhicule en **chaleur** par frottement.',
        'Trajet : **pédale** → **maître-cylindre** (transforme l\'effort en pression hydraulique) → **canalisations** → **étriers** ou **cylindres de roue**.',
        'Le circuit est **doublé** (souvent monté **en X** : avant gauche + arrière droit, avant droit + arrière gauche). Si un circuit fuit, l\'autre freine encore.'
      ]
    },
    {
      titre: 'Disques et tambours',
      sousTheme: 'organes',
      contenu: [
        { liste: [
          '**Frein à disque** : un **étrier** avec un ou plusieurs **pistons** serre deux **plaquettes** sur le **disque**. Toujours à l\'avant, souvent aussi à l\'arrière.',
          '**Frein à tambour** : le **cylindre de roue** écarte les **mâchoires** (segments) contre le **tambour**. Des ressorts les ramènent. Encore présent à l\'arrière de certains véhicules.'
        ] },
        'Le disque a une **épaisseur minimale**, gravée sur le disque ou donnée par le constructeur.',
        { retenir: 'Plaquettes, disques, mâchoires : on remplace **toujours par essieu** (les deux côtés), pour garder un freinage équilibré.' }
      ]
    },
    {
      titre: 'Assistance et ABS',
      sousTheme: 'assistance',
      contenu: [
        'Le **servofrein** (« mastervac ») multiplie l\'effort du conducteur grâce à la **dépression** (collecteur d\'admission ou pompe à vide).',
        'L\'**ABS** empêche le blocage des roues lors d\'un freinage fort. Le conducteur garde ainsi la **possibilité de diriger** le véhicule. Il utilise des **capteurs de vitesse de roue** et un bloc hydraulique piloté par un calculateur.'
      ]
    },
    {
      titre: 'Liquide de frein et entretien',
      sousTheme: 'entretien',
      contenu: [
        'Le liquide de frein est **hygroscopique** : il absorbe l\'humidité de l\'air. Avec de l\'eau, il bout plus facilement lors de freinages répétés : des bulles de vapeur se forment et la pédale devient molle. Il se remplace donc périodiquement (souvent tous les 2 ans environ, selon le constructeur).',
        'Normes : DOT 3, DOT 4, DOT 5.1 (à base de glycol). Le **DOT 5** est au **silicone** et ne se mélange **pas** avec les autres.',
        'Pédale molle ou spongieuse : souvent de l\'**air dans le circuit**, il faut **purger**.',
        { attention: 'Le liquide de frein attaque la peinture et irrite les yeux : gants et lunettes.' }
      ]
    }
  ],

  cartes: [
    { id: 'frein-c1', sousTheme: 'hydraulique', recto: 'Quel organe transforme l\'effort sur la pédale en pression ?', verso: 'Le **maître-cylindre**.' },
    { id: 'frein-c2', sousTheme: 'entretien', recto: 'Que veut dire « hygroscopique » ?', verso: 'Qui **absorbe l\'humidité** de l\'air.' },
    { id: 'frein-c3', sousTheme: 'assistance', recto: 'Rôle de l\'ABS ?', verso: 'Éviter le **blocage des roues** pour garder la **direction**.' },
    { id: 'frein-c4', sousTheme: 'assistance', recto: 'Sur quoi fonctionne le servofrein ?', verso: 'Sur la **dépression** (admission ou pompe à vide).' },
    { id: 'frein-c5', sousTheme: 'organes', recto: 'Remplacement des plaquettes : règle à respecter ?', verso: 'Toujours **par essieu** (les deux côtés).' },
    { id: 'frein-c6', sousTheme: 'entretien', recto: 'Quel liquide ne se mélange pas avec le DOT 4 ?', verso: 'Le **DOT 5** (silicone).' },
    { id: 'frein-c7', sousTheme: 'hydraulique', recto: 'Intérêt du double circuit en X ?', verso: 'Si un circuit fuit, l\'autre freine encore **une roue avant et une roue arrière opposées**.' },
    { id: 'frein-c8', sousTheme: 'hydraulique', recto: 'Trajet de l\'effort de freinage ?', verso: 'Pédale → **maître-cylindre** → canalisations → **étriers** ou **cylindres de roue**.' },
    { id: 'frein-c9', sousTheme: 'hydraulique', recto: 'Pédale qui descend lentement au plancher, sans fuite visible ?', verso: 'Une **fuite interne** du maître-cylindre.' },
    { id: 'frein-c10', sousTheme: 'hydraulique', recto: 'Pourquoi utiliser un liquide pour freiner ?', verso: 'Il est **incompressible** : la pression arrive intacte aux roues.' },
    { id: 'frein-c11', sousTheme: 'organes', recto: 'Les pièces d\'un frein à disque ?', verso: '**Étrier, piston(s), plaquettes, disque**.' },
    { id: 'frein-c12', sousTheme: 'organes', recto: 'Les pièces d\'un frein à tambour ?', verso: '**Tambour, mâchoires, cylindre de roue, ressorts de rappel**.' },
    { id: 'frein-c13', sousTheme: 'organes', recto: 'Où lire l\'épaisseur minimale d\'un disque ?', verso: '**Gravée sur le disque**, ou dans les données du constructeur.' },
    { id: 'frein-c14', sousTheme: 'organes', recto: 'Après un changement de plaquettes, avant de rendre la voiture ?', verso: '**Pomper** la pédale pour ramener les pistons.' },
    { id: 'frein-c15', sousTheme: 'assistance', recto: 'D\'où vient la dépression du servofrein sur un diesel ?', verso: 'D\'une **pompe à vide**.' },
    { id: 'frein-c16', sousTheme: 'assistance', recto: 'Quels capteurs utilise l\'ABS ?', verso: 'Des **capteurs de vitesse de roue**.' },
    { id: 'frein-c17', sousTheme: 'assistance', recto: 'Test simple du servofrein ?', verso: 'Moteur arrêté, pomper, garder le pied sur la pédale, démarrer : la pédale **s\'enfonce un peu**.' },
    { id: 'frein-c18', sousTheme: 'entretien', recto: 'Pédale molle et spongieuse ?', verso: 'De l\'**air** dans le circuit : il faut purger.' },
    { id: 'frein-c19', sousTheme: 'entretien', recto: 'Tous les combien remplace-t-on le liquide de frein ?', verso: 'Souvent **tous les 2 ans** environ, selon le constructeur.' }
  ],

  questions: [
    {
      id: 'frein-q1', sousTheme: 'entretien', type: 'qcm',
      enonce: 'Pourquoi faut-il remplacer régulièrement le liquide de frein ?',
      choix: ['Il absorbe l\'humidité, ce qui baisse son point d\'ébullition', 'Il s\'évapore', 'Il change de couleur', 'Il use les plaquettes'],
      bonne: 0,
      explication: 'Le liquide est hygroscopique. Chargé d\'eau, il bout plus facilement et forme des bulles : la pédale devient molle.'
    },
    {
      id: 'frein-q2', sousTheme: 'hydraulique', type: 'qcm',
      enonce: 'Quel organe transforme l\'effort sur la pédale en pression hydraulique ?',
      choix: ['Le maître-cylindre', 'L\'étrier', 'Le servofrein', 'Le cylindre de roue'],
      bonne: 0,
      explication: 'Le maître-cylindre crée la pression envoyée aux étriers et cylindres de roue. Le servofrein, lui, aide le conducteur.'
    },
    {
      id: 'frein-q3', sousTheme: 'assistance', type: 'qcm',
      enonce: 'Quel est le rôle de l\'ABS ?',
      choix: ['Empêcher le blocage des roues pour garder le contrôle de la direction', 'Réduire la distance de freinage dans tous les cas', 'Assister l\'effort sur la pédale', 'Refroidir les disques'],
      bonne: 0,
      explication: 'Une roue bloquée ne dirige plus. L\'ABS relâche et réapplique la pression très vite pour éviter le blocage.'
    },
    {
      id: 'frein-q4', sousTheme: 'entretien', type: 'qcm',
      enonce: 'La pédale de frein est molle et spongieuse. Cause la plus probable ?',
      choix: ['De l\'air dans le circuit', 'Des plaquettes neuves', 'Des disques trop épais', 'Un pneu sous-gonflé'],
      bonne: 0,
      explication: 'L\'air se comprime, contrairement au liquide. Il faut trouver la cause puis purger le circuit.'
    },
    {
      id: 'frein-q5', sousTheme: 'organes', type: 'qcm',
      enonce: 'Les plaquettes avant gauches sont usées. Que remplace-t-on ?',
      choix: ['Les plaquettes des deux roues avant', 'Seulement les plaquettes avant gauches', 'Les plaquettes des 4 roues obligatoirement', 'Seulement la plaquette la plus usée'],
      bonne: 0,
      explication: 'On remplace par essieu pour que le freinage reste équilibré à gauche et à droite.'
    },
    {
      id: 'frein-q6', sousTheme: 'entretien', type: 'vf',
      enonce: 'Vrai ou faux : on peut mélanger du DOT 5 (silicone) avec du DOT 4.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : le DOT 5 est à base de silicone et incompatible avec les liquides à base de glycol (DOT 3, 4, 5.1).'
    },
    {
      id: 'frein-q7', sousTheme: 'organes', type: 'qcm',
      enonce: 'Où trouve-t-on l\'épaisseur minimale d\'un disque de frein ?',
      choix: ['Gravée sur le disque ou dans les données constructeur', 'Sur le pneu', 'Sur le bocal de liquide de frein', 'Elle est la même pour tous les véhicules'],
      bonne: 0,
      explication: 'Sous cette épaisseur, le disque doit être remplacé.'
    },
    {
      id: 'frein-q8', sousTheme: 'hydraulique', type: 'qcm',
      enonce: 'Pourquoi le circuit de freinage est-il doublé (par exemple en X) ?',
      choix: ['Pour qu\'il reste du freinage si un circuit fuit', 'Pour freiner deux fois plus fort', 'Pour alimenter l\'ABS', 'Pour refroidir le liquide'],
      bonne: 0,
      explication: 'En X, chaque circuit freine une roue avant et la roue arrière opposée : le véhicule freine encore de façon équilibrée.'
    },
    {
      id: 'frein-q9', sousTheme: 'assistance', type: 'qcm',
      enonce: 'Le servofrein fonctionne grâce à :',
      choix: ['La dépression', 'La pression d\'huile moteur', 'Le courant de l\'alternateur', 'La pression des pneus'],
      bonne: 0,
      explication: 'La dépression vient du collecteur d\'admission (essence) ou d\'une pompe à vide (diesel).'
    },
    {
      id: 'frein-q10', sousTheme: 'organes', type: 'qcm',
      enonce: 'Dans un frein à tambour, quelle pièce écarte les mâchoires ?',
      choix: ['Le cylindre de roue', 'L\'étrier', 'Le maître-cylindre', 'Le ressort de rappel'],
      bonne: 0,
      explication: 'La pression pousse les pistons du cylindre de roue, qui plaquent les mâchoires contre le tambour. Les ressorts les ramènent ensuite.'
    },
    {
      id: 'frein-q11', sousTheme: 'hydraulique', type: 'qcm',
      enonce: 'Pourquoi utilise-t-on un liquide pour transmettre l\'effort de freinage ?',
      choix: ['Parce qu\'un liquide ne se comprime presque pas', 'Parce qu\'il refroidit les disques', 'Parce qu\'il lubrifie les plaquettes', 'Parce qu\'il est plus léger que l\'air'],
      bonne: 0,
      explication: 'La pression créée au maître-cylindre arrive intacte aux étriers. L\'air, lui, se comprime : c\'est ce qui rend la pédale molle.'
    },
    {
      id: 'frein-q12', sousTheme: 'hydraulique', type: 'vf', niveau: 2,
      enonce: 'Vrai ou faux : le niveau de liquide de frein baisse légèrement à mesure que les plaquettes s\'usent.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : les pistons d\'étrier sortent un peu plus pour compenser l\'usure, il y a donc plus de liquide dans les étriers. Une baisse rapide, elle, signale une fuite.'
    },
    {
      id: 'frein-q13', sousTheme: 'assistance', type: 'qcm', niveau: 2,
      enonce: 'Moteur arrêté, après quelques appuis, la pédale de frein devient très dure. Pourquoi ?',
      choix: ['La réserve de dépression du servofrein est épuisée', 'Le liquide de frein est trop vieux', 'Les plaquettes sont neuves', 'L\'ABS est en panne'],
      bonne: 0,
      explication: 'Sans moteur, plus de dépression : le servofrein n\'aide plus et il faut appuyer bien plus fort. C\'est normal, et c\'est même un test simple du servofrein.'
    },
    {
      id: 'frein-q14', sousTheme: 'organes', type: 'qcm', image: 'etrier',
      enonce: 'Quelle est la pièce grise qu\'on voit derrière les rayons de la jante ?',
      choix: ['L\'étrier de frein', 'Le tambour de frein', 'Le maître-cylindre', 'L\'amortisseur'],
      bonne: 0,
      explication: 'L\'étrier contient le ou les pistons qui serrent les plaquettes sur le disque. On aperçoit d\'ailleurs une plaquette à l\'intérieur.'
    },
    {
      id: 'frein-q15', sousTheme: 'organes', type: 'qcm', image: 'disque-etrier',
      enonce: 'Roue démontée : quelle est la grande pièce ronde fixée au moyeu ?',
      choix: ['Le disque de frein', 'Le volant moteur', 'Le tambour de frein', 'La couronne du différentiel'],
      bonne: 0,
      explication: 'Le disque est fixé au moyeu et tourne avec la roue. L\'étrier, sur le côté, vient le pincer.'
    },
    {
      id: 'frein-q16', sousTheme: 'organes', type: 'qcm', image: 'disque',
      enonce: 'Quelle est cette pièce ?',
      choix: ['Un disque de frein plein', 'Un disque d\'embrayage', 'Un volant moteur', 'Une poulie de vilebrequin'],
      bonne: 0,
      explication: 'Un disque plein est une seule galette d\'acier, souvent montée à l\'arrière. Les disques ventilés, avec des canaux entre deux faces, se montent surtout à l\'avant, qui freine le plus.'
    },
    {
      id: 'frein-q17', sousTheme: 'organes', type: 'qcm', image: 'plaquette',
      enonce: 'Quelle est cette pièce ?',
      choix: ['Une plaquette de frein', 'Une mâchoire de frein à tambour', 'Un disque d\'embrayage', 'Un patin d\'essuie-glace'],
      bonne: 0,
      explication: 'Un support métallique et une garniture de friction. Le marquage « 90R » montre qu\'elle est homologuée selon le règlement européen R90.'
    },
    {
      id: 'frein-q18', sousTheme: 'organes', type: 'qcm', image: 'tambour',
      enonce: 'Sur ce frein à tambour (tambour retiré), quelle pièce se trouve en haut, entre les deux mâchoires ?',
      choix: ['Le cylindre de roue', 'Le maître-cylindre', 'L\'étrier', 'Le servofrein'],
      bonne: 0,
      explication: 'Poussés par la pression hydraulique, ses deux pistons écartent les mâchoires contre le tambour. Les ressorts de rappel les ramènent ensuite.'
    },
    {
      id: 'frein-q19', sousTheme: 'hydraulique', type: 'qcm', image: 'maitre-cylindre',
      enonce: 'Quel ensemble voit-on : un bocal blanc et la pièce métallique en dessous ?',
      choix: ['Le maître-cylindre et son réservoir de liquide de frein', 'Le vase d\'expansion du liquide de refroidissement', 'Le réservoir de lave-glace', 'Le filtre à carburant'],
      bonne: 0,
      explication: 'Le bocal contient le liquide de frein, dont le niveau doit être entre MINI et MAXI. Le maître-cylindre est fixé sur le servofrein, contre le tablier.'
    },
    {
      id: 'frein-q20', sousTheme: 'entretien', type: 'qcm',
      enonce: 'En général, tous les combien remplace-t-on le liquide de frein ?',
      choix: ['Environ tous les 2 ans, selon le constructeur', 'À chaque vidange moteur', 'Jamais, il ne s\'use pas', 'Seulement quand la pédale devient dure'],
      bonne: 0,
      explication: 'Comme il absorbe l\'humidité, son point d\'ébullition baisse avec le temps : on le remplace périodiquement, souvent tous les 2 ans environ.'
    },
    {
      id: 'frein-q21', sousTheme: 'entretien', type: 'qcm',
      enonce: 'Du liquide de frein a coulé sur la peinture. Que faut-il faire ?',
      choix: ['Rincer tout de suite à l\'eau, car il attaque la peinture', 'Le laisser sécher, il protège la peinture', 'L\'essuyer avec de l\'essence', 'Rien, il est sans danger'],
      bonne: 0,
      explication: 'Le liquide de frein (glycol) abîme la peinture : on rince rapidement à l\'eau. Et on porte gants et lunettes.'
    },
    {
      id: 'frein-q22', sousTheme: 'assistance', type: 'qcm',
      enonce: 'Sur un moteur diesel, d\'où vient en général la dépression utilisée par le servofrein ?',
      choix: ['D\'une pompe à vide', 'Du turbo', 'Du maître-cylindre', 'Du réservoir de carburant'],
      bonne: 0,
      explication: 'Un diesel crée peu de dépression à l\'admission : une **pompe à vide** la fournit au servofrein.'
    },
    {
      id: 'frein-q23', sousTheme: 'assistance', type: 'qcm',
      enonce: 'Quels capteurs l\'ABS utilise-t-il pour détecter qu\'une roue va se bloquer ?',
      choix: ['Des capteurs de vitesse de roue', 'Des capteurs de pression des pneus', 'Le capteur de niveau de liquide de frein', 'La sonde de température moteur'],
      bonne: 0,
      explication: 'Le calculateur compare la vitesse des roues : une roue qui ralentit trop vite est sur le point de se bloquer.'
    },
    {
      id: 'frein-q24', sousTheme: 'assistance', type: 'vf',
      enonce: 'Vrai ou faux : l\'ABS raccourcit toujours la distance de freinage.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : l\'ABS sert surtout à garder la **direction** en freinant fort. Sur certains sols (gravier, neige fraîche), la distance peut même être un peu plus longue.'
    },
    {
      id: 'frein-q25', sousTheme: 'hydraulique', type: 'qcm', niveau: 2,
      enonce: 'Sur un circuit de freinage monté en X, un des deux circuits fuit. Que reste-t-il pour freiner ?',
      choix: ['Une roue avant et la roue arrière opposée', 'Seulement le frein de parking', 'Les deux roues avant', 'Plus aucun frein'],
      bonne: 0,
      explication: 'En X, chaque circuit freine une roue avant et la roue arrière **opposée**. Le véhicule freine moins, mais reste stable.'
    },
    {
      id: 'frein-q26', sousTheme: 'organes', type: 'qcm', niveau: 2,
      enonce: 'Un disque avant mesure 20,4 mm. L\'épaisseur minimale gravée est de 21 mm. Que faire ?',
      choix: ['Remplacer les disques et les plaquettes de l\'essieu', 'Rien, il reste de la marge', 'Remplacer seulement ce disque', 'Rectifier le disque'],
      bonne: 0,
      explication: 'Sous l\'épaisseur minimale, le disque doit être **remplacé**, et on ne le rectifie pas. Toujours par essieu, avec des plaquettes neuves.'
    },
    {
      id: 'frein-q27', sousTheme: 'entretien', type: 'qcm', niveau: 2,
      enonce: 'Avec un liquide de frein ancien, pourquoi la pédale devient-elle molle dans une longue descente ?',
      choix: ['L\'eau absorbée fait bouillir le liquide : des bulles de vapeur se forment et se compriment', 'Les plaquettes refroidissent trop', 'Le servofrein se remplit d\'huile', 'Le liquide gèle'],
      bonne: 0,
      explication: 'Les freins chauffent beaucoup en descente. Chargé d\'eau, le liquide **bout** plus tôt, et la vapeur se comprime comme de l\'air.'
    },
    {
      id: 'frein-q28', sousTheme: 'organes', type: 'qcm', niveau: 3,
      enonce: 'Le véhicule tire à gauche seulement quand on freine. Que suspecter en premier ?',
      choix: ['Un déséquilibre entre les freins avant gauche et droit (étrier grippé, plaquettes souillées) : contrôle au banc', 'Un amortisseur arrière usé', 'Une pression des pneus trop forte des deux côtés', 'Un liquide de frein neuf'],
      bonne: 0,
      explication: 'Si le véhicule ne tire qu\'au freinage, c\'est un **écart de freinage** entre gauche et droite. Le banc de freinage mesure chaque roue.'
    },
    {
      id: 'frein-q29', sousTheme: 'assistance', type: 'qcm', niveau: 3,
      enonce: 'Moteur arrêté, on pompe plusieurs fois, on garde le pied sur la pédale et on démarre. La pédale s\'enfonce légèrement. Que conclure ?',
      choix: ['Le servofrein fonctionne normalement', 'Le servofrein est hors service', 'Il y a de l\'air dans le circuit', 'Le maître-cylindre fuit'],
      bonne: 0,
      explication: 'Au démarrage, la dépression revient et l\'assistance aide à nouveau : la pédale **descend un peu**. C\'est le test simple du servofrein.'
    },
    {
      id: 'frein-q30', sousTheme: 'hydraulique', type: 'qcm', niveau: 3,
      enonce: 'Pied maintenu sur la pédale, celle-ci s\'enfonce lentement jusqu\'au plancher, sans aucune fuite visible. Que suspecter ?',
      choix: ['Une fuite interne au maître-cylindre (joints usés)', 'De l\'air dans le circuit', 'Des plaquettes neuves', 'Un servofrein trop puissant'],
      bonne: 0,
      explication: 'Sans fuite extérieure, le liquide passe à l\'intérieur du **maître-cylindre**, d\'une chambre à l\'autre. L\'air, lui, donne une pédale spongieuse, pas une pédale qui descend.'
    },
    {
      id: 'frein-q31', sousTheme: 'entretien', type: 'qcm', niveau: 3,
      enonce: 'Juste après un remplacement des plaquettes, au premier freinage, la pédale descend presque au plancher. Que s\'est-il passé ?',
      choix: ['On a oublié de pomper la pédale pour ramener les pistons contre les plaquettes', 'Il y a forcément de l\'air dans le circuit', 'Les plaquettes sont montées à l\'envers', 'Les disques sont trop épais'],
      bonne: 0,
      explication: 'Pour monter les plaquettes neuves, on repousse les pistons d\'étrier. Il faut ensuite **pomper** plusieurs fois pour les ramener au contact, **avant** de rendre le véhicule.'
    },
    {
      id: 'frein-q32', sousTheme: 'organes', type: 'ordre', niveau: 2,
      enonce: 'Remets dans l\'ordre le remplacement des plaquettes avant.',
      etapes: [
        'Lever le véhicule en sécurité et déposer les roues avant',
        'Déposer l\'étrier (ou le faire pivoter) et retirer les plaquettes usées',
        'Contrôler l\'épaisseur et l\'état des disques',
        'Repousser les pistons en surveillant le niveau du bocal',
        'Poser les plaquettes neuves et remonter l\'étrier au couple',
        'Pomper la pédale, puis faire un essai avant de rendre le véhicule'
      ],
      explication: 'On contrôle les **disques** avant de poser des plaquettes neuves, on surveille le **bocal** en repoussant les pistons, et on **pompe** avant de rouler. Les deux côtés de l\'essieu sont faits.'
    },
    {
      id: 'frein-q33', sousTheme: 'entretien', type: 'ordre', niveau: 3,
      enonce: 'Remets dans l\'ordre une purge de freins à deux personnes (pédale).',
      etapes: [
        'Remplir le bocal avec le liquide préconisé',
        'Commencer par la roue indiquée par le constructeur (souvent la plus éloignée du maître-cylindre)',
        'Appuyer sur la pédale et la maintenir, ouvrir la vis de purge, la refermer, puis relâcher',
        'Recommencer jusqu\'à ce que le liquide sorte sans bulles, en surveillant le niveau du bocal',
        'Passer aux autres roues, puis contrôler la pédale et le niveau'
      ],
      explication: 'On **referme** la vis avant de relâcher la pédale, sinon de l\'air est réaspiré. Le bocal ne doit jamais se vider pendant la purge.'
    }
  ]
});
