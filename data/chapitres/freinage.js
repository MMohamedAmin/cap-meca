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
    { id: 'frein-c7', sousTheme: 'hydraulique', recto: 'Intérêt du double circuit en X ?', verso: 'Si un circuit fuit, l\'autre freine encore **une roue avant et une roue arrière opposées**.' }
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
    }
  ]
});
