CAP.ajouterChapitre({
  id: 'moteur',
  titre: 'Moteur thermique',
  icone: '⚙️',
  description: 'Principe du moteur 4 temps, organes fixes et mobiles, distribution et caractéristiques (cylindrée, rapport volumétrique).',
  sousThemes: {
    cycle: 'Cycle 4 temps',
    organes: 'Organes du moteur',
    distribution: 'Distribution',
    caracteristiques: 'Caractéristiques'
  },

  fiche: [
    {
      titre: 'Le cycle à 4 temps',
      sousTheme: 'cycle',
      contenu: [
        'Le moteur thermique transforme l\'énergie chimique du carburant en **énergie mécanique**. Le piston fait un mouvement de va-et-vient (alternatif) que la bielle et le vilebrequin transforment en **rotation**.',
        { liste: [
          '**1. Admission** : soupape d\'admission ouverte, le piston descend et aspire l\'air (ou le mélange air-essence).',
          '**2. Compression** : les deux soupapes sont fermées, le piston remonte et comprime les gaz.',
          '**3. Combustion-détente** : le mélange brûle, la pression pousse le piston vers le bas. C\'est le **seul temps moteur**.',
          '**4. Échappement** : soupape d\'échappement ouverte, le piston remonte et chasse les gaz brûlés.'
        ] },
        'Essence : l\'inflammation est provoquée par l\'étincelle de la **bougie d\'allumage**. Diesel : le gazole s\'enflamme tout seul au contact de l\'air très chaud comprimé (**auto-inflammation**). Les bougies de préchauffage du diesel aident seulement au démarrage à froid.',
        { retenir: 'Un cycle complet = **2 tours de vilebrequin** = 1 tour d\'arbre à cames.' }
      ]
    },
    {
      titre: 'Les organes du moteur',
      sousTheme: 'organes',
      contenu: [
        { liste: [
          '**Organes fixes** : culasse, bloc-cylindres (bloc moteur), carter inférieur (carter d\'huile), joint de culasse.',
          '**Organes mobiles** : pistons avec leurs segments, bielles, vilebrequin, volant moteur.'
        ] },
        'Le **joint de culasse** assure l\'étanchéité entre la culasse et le bloc : gaz de combustion, liquide de refroidissement et huile ne doivent pas se mélanger.',
        'Les **segments** assurent l\'étanchéité entre le piston et le cylindre, raclent l\'excès d\'huile sur la paroi et évacuent une partie de la chaleur du piston.',
        'Le **volant moteur** régularise la rotation du vilebrequin et porte la couronne du démarreur et l\'embrayage.'
      ]
    },
    {
      titre: 'La distribution',
      sousTheme: 'distribution',
      contenu: [
        'La distribution commande l\'ouverture et la fermeture des soupapes au bon moment. L\'**arbre à cames** pousse les soupapes ; il est entraîné par le vilebrequin via une **courroie**, une **chaîne** ou des pignons.',
        'L\'arbre à cames tourne **deux fois moins vite** que le vilebrequin. Les deux doivent être **calés** l\'un par rapport à l\'autre (repères de calage).',
        { attention: 'La courroie de distribution se remplace selon la préconisation du constructeur (kilométrage ou âge). Si elle casse, les soupapes peuvent toucher les pistons sur beaucoup de moteurs : grosse casse.' }
      ]
    },
    {
      titre: 'Caractéristiques du moteur',
      sousTheme: 'caracteristiques',
      contenu: [
        { liste: [
          '**PMH** (point mort haut) : position la plus haute du piston. **PMB** : la plus basse.',
          '**Course** : distance parcourue par le piston entre PMB et PMH.',
          '**Alésage** : diamètre du cylindre.'
        ] },
        { formule: 'Cylindrée unitaire = π × alésage² ÷ 4 × course' },
        { formule: 'Cylindrée totale = cylindrée unitaire × nombre de cylindres' },
        { formule: 'Rapport volumétrique = (cylindrée unitaire + volume chambre) ÷ volume chambre' },
        'Le rapport volumétrique est de l\'ordre de 10 pour un moteur essence et nettement plus élevé, autour de 16 à 20, pour un diesel.',
        { retenir: 'Avec l\'alésage et la course en cm, la cylindrée est en cm³.' }
      ]
    }
  ],

  cartes: [
    { id: 'moteur-c1', sousTheme: 'cycle', recto: 'Quel est le seul temps moteur du cycle 4 temps ?', verso: 'La **combustion-détente** : c\'est le seul temps où les gaz poussent le piston.' },
    { id: 'moteur-c2', sousTheme: 'cycle', recto: 'Combien de tours fait le vilebrequin pour un cycle complet ?', verso: '**2 tours** de vilebrequin.' },
    { id: 'moteur-c3', sousTheme: 'caracteristiques', recto: 'Que signifie PMH ?', verso: '**Point mort haut** : la position la plus haute du piston.' },
    { id: 'moteur-c4', sousTheme: 'caracteristiques', recto: 'Formule de la cylindrée unitaire ?', verso: '**π × alésage² ÷ 4 × course**' },
    { id: 'moteur-c5', sousTheme: 'organes', recto: 'Les 3 rôles des segments ?', verso: '**Étanchéité** de la chambre, **raclage** de l\'huile, **évacuation** de la chaleur du piston.' },
    { id: 'moteur-c6', sousTheme: 'distribution', recto: 'À quelle vitesse tourne l\'arbre à cames par rapport au vilebrequin ?', verso: '**Deux fois moins vite.**' },
    { id: 'moteur-c7', sousTheme: 'cycle', recto: 'Comment s\'enflamme le gazole dans un diesel ?', verso: 'Par **auto-inflammation** au contact de l\'air très chaud et comprimé.' }
  ],

  questions: [
    {
      id: 'moteur-q1', sousTheme: 'cycle', type: 'qcm',
      enonce: 'Quel est l\'ordre des temps d\'un moteur 4 temps ?',
      choix: ['Admission, compression, combustion-détente, échappement', 'Compression, admission, échappement, combustion-détente', 'Admission, combustion-détente, compression, échappement', 'Échappement, admission, compression, combustion-détente'],
      bonne: 0,
      explication: 'Les gaz entrent, sont comprimés, brûlent et poussent le piston, puis sont évacués.'
    },
    {
      id: 'moteur-q2', sousTheme: 'organes', type: 'qcm',
      enonce: 'Quelle pièce transforme le mouvement alternatif des pistons en rotation ?',
      choix: ['Le vilebrequin', 'L\'arbre à cames', 'La culasse', 'Le volant moteur'],
      bonne: 0,
      explication: 'Les bielles relient les pistons au vilebrequin, qui transforme le va-et-vient en rotation.'
    },
    {
      id: 'moteur-q3', sousTheme: 'cycle', type: 'qcm',
      enonce: 'Pendant le temps de compression, les soupapes sont :',
      choix: ['Toutes les deux fermées', 'Admission ouverte, échappement fermée', 'Admission fermée, échappement ouverte', 'Toutes les deux ouvertes'],
      bonne: 0,
      explication: 'Pour comprimer les gaz, la chambre doit être fermée : les deux soupapes sont fermées.'
    },
    {
      id: 'moteur-q4', sousTheme: 'caracteristiques', type: 'qcm',
      enonce: 'Un moteur 4 cylindres a une cylindrée unitaire de 400 cm³. Quelle est sa cylindrée totale ?',
      choix: ['1 600 cm³', '400 cm³', '100 cm³', '800 cm³'],
      bonne: 0,
      explication: 'Cylindrée totale = 400 × 4 = 1 600 cm³, soit un moteur « 1.6 ».'
    },
    {
      id: 'moteur-q5', sousTheme: 'cycle', type: 'qcm',
      enonce: 'Dans un moteur diesel, comment s\'enflamme le carburant ?',
      choix: ['Par auto-inflammation dans l\'air chaud comprimé', 'Grâce à la bougie d\'allumage', 'Grâce à la bougie de préchauffage à chaque cycle', 'Par l\'étincelle de la bobine'],
      bonne: 0,
      explication: 'L\'air très comprimé devient très chaud et le gazole injecté s\'enflamme seul. Les bougies de préchauffage servent seulement au démarrage à froid.'
    },
    {
      id: 'moteur-q6', sousTheme: 'distribution', type: 'qcm',
      enonce: 'Par rapport au vilebrequin, l\'arbre à cames tourne :',
      choix: ['Deux fois moins vite', 'À la même vitesse', 'Deux fois plus vite', 'Quatre fois moins vite'],
      bonne: 0,
      explication: 'Chaque soupape s\'ouvre une fois par cycle, et un cycle = 2 tours de vilebrequin. L\'arbre à cames fait donc 1 tour quand le vilebrequin en fait 2.'
    },
    {
      id: 'moteur-q7', sousTheme: 'distribution', type: 'vf',
      enonce: 'Vrai ou faux : on ne remplace la courroie de distribution que lorsqu\'elle casse.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : elle se remplace préventivement selon le constructeur, car sa casse peut détruire le moteur.'
    },
    {
      id: 'moteur-q8', sousTheme: 'organes', type: 'qcm',
      enonce: 'Quel est le rôle du joint de culasse ?',
      choix: ['Assurer l\'étanchéité entre la culasse et le bloc-cylindres', 'Filtrer l\'huile moteur', 'Régler le jeu aux soupapes', 'Fixer le carter d\'huile'],
      bonne: 0,
      explication: 'Il empêche gaz, huile et liquide de refroidissement de fuir ou de se mélanger entre culasse et bloc.'
    },
    {
      id: 'moteur-q9', sousTheme: 'caracteristiques', type: 'qcm',
      enonce: 'Alésage 8 cm, course 8 cm. Quelle est la cylindrée unitaire (environ) ?',
      choix: ['402 cm³', '512 cm³', '64 cm³', '201 cm³'],
      bonne: 0,
      explication: 'π × 8² ÷ 4 × 8 = 3,14 × 64 ÷ 4 × 8 ≈ 402 cm³.'
    },
    {
      id: 'moteur-q10', sousTheme: 'organes', type: 'qcm',
      enonce: 'Lequel de ces organes est un organe mobile ?',
      choix: ['La bielle', 'La culasse', 'Le bloc-cylindres', 'Le carter inférieur'],
      bonne: 0,
      explication: 'La bielle bouge avec le piston et le vilebrequin. Les trois autres sont des organes fixes.'
    },
    {
      id: 'moteur-q11', sousTheme: 'caracteristiques', type: 'qcm',
      enonce: 'Comment calcule-t-on le rapport volumétrique ? (V = cylindrée unitaire, v = volume de la chambre de combustion)',
      choix: ['(V + v) / v', 'V / v', 'V × v', 'v / (V + v)'],
      bonne: 0,
      explication: 'On compare le volume total quand le piston est au PMB (V + v) au volume qui reste quand il est au PMH (v).'
    },
    {
      id: 'moteur-q12', sousTheme: 'caracteristiques', type: 'qcm',
      enonce: 'Par rapport à un moteur essence, le rapport volumétrique d\'un moteur diesel est :',
      choix: ['Plus élevé', 'Plus faible', 'Identique', 'Toujours égal à 1'],
      bonne: 0,
      explication: 'Le diesel doit comprimer fortement l\'air pour le chauffer assez et enflammer le gazole : souvent 16 à 20 en diesel, contre 10 à 12 en essence.'
    },
    {
      id: 'moteur-q13', sousTheme: 'distribution', type: 'qcm',
      enonce: 'Sur beaucoup de moteurs, que se passe-t-il si la courroie de distribution casse en roulant ?',
      choix: ['Les pistons peuvent percuter les soupapes : gros dégâts moteur', 'Le moteur continue de tourner normalement', 'Seule la climatisation s\'arrête', 'La batterie se décharge, sans autre conséquence'],
      bonne: 0,
      explication: 'L\'arbre à cames s\'arrête et des soupapes restent ouvertes pendant que les pistons montent : ils se touchent. C\'est pour ça qu\'on la remplace avant qu\'elle casse.'
    },
    {
      id: 'moteur-q14', sousTheme: 'distribution', type: 'qcm',
      enonce: 'Quelle pièce commande l\'ouverture des soupapes ?',
      choix: ['L\'arbre à cames (directement ou par des culbuteurs)', 'Le vilebrequin, directement', 'Les segments', 'La pression des gaz dans le cylindre'],
      bonne: 0,
      explication: 'Les cames poussent les soupapes pour les ouvrir. Ce sont les ressorts de soupape qui les referment.'
    },
    {
      id: 'moteur-q15', sousTheme: 'organes', type: 'qcm', image: 'vilebrequin',
      enonce: 'Quelle est cette pièce ?',
      choix: ['Un vilebrequin', 'Un arbre à cames', 'Un arbre de boîte de vitesses', 'Un arbre de transmission'],
      bonne: 0,
      explication: 'On reconnaît les manetons décalés, où se fixent les bielles, et les contrepoids. Il transforme le mouvement alternatif des pistons en rotation.'
    },
    {
      id: 'moteur-q16', sousTheme: 'organes', type: 'qcm', image: 'piston-bielle',
      enonce: 'Que voit-on sur cette photo ?',
      choix: ['Des pistons et des bielles', 'Des soupapes et leurs ressorts', 'Des poussoirs hydrauliques', 'Des injecteurs'],
      bonne: 0,
      explication: 'La bielle relie le piston (côté pied de bielle, par l\'axe de piston) au vilebrequin (côté tête de bielle).'
    },
    {
      id: 'moteur-q17', sousTheme: 'organes', type: 'qcm', image: 'segments',
      enonce: 'Comment s\'appellent les anneaux montés dans les gorges en haut de ce piston ?',
      choix: ['Les segments', 'Les coussinets', 'Les joints spi', 'Les clavettes'],
      bonne: 0,
      explication: 'Les segments assurent l\'étanchéité, évacuent la chaleur du piston vers le cylindre et raclent l\'huile.'
    },
    {
      id: 'moteur-q18', sousTheme: 'distribution', type: 'qcm', image: 'arbre-a-cames',
      enonce: 'Quelle est cette pièce ?',
      choix: ['Un arbre à cames', 'Un vilebrequin', 'Un arbre de transmission', 'Une crémaillère de direction'],
      bonne: 0,
      explication: 'Les bossages (les cames) ouvrent les soupapes. Il tourne deux fois moins vite que le vilebrequin.'
    },
    {
      id: 'moteur-q19', sousTheme: 'organes', type: 'qcm', image: 'culasse',
      enonce: 'Quelle est la grosse pièce en aluminium au premier plan ?',
      choix: ['Une culasse', 'Un bloc-cylindres', 'Un carter d\'huile', 'Un collecteur d\'admission'],
      bonne: 0,
      explication: 'La culasse ferme le haut des cylindres : elle porte les chambres de combustion, les soupapes et souvent les arbres à cames (posés à côté sur la photo).'
    },
    {
      id: 'moteur-q20', sousTheme: 'organes', type: 'qcm', image: 'joint-culasse',
      enonce: 'Que constates-tu sur ce joint de culasse ?',
      choix: ['Il est brûlé entre deux cylindres : il n\'est plus étanche', 'Il est neuf, prêt à être monté', 'Il est juste sale : on peut le nettoyer et le remonter', 'Ce n\'est pas un joint de culasse mais un joint de carter'],
      bonne: 0,
      explication: 'Un joint « claqué » fait communiquer deux cylindres (perte de compression, ratés) ou le circuit de refroidissement. Un joint de culasse ne se réutilise jamais.'
    },
    {
      id: 'moteur-q21', sousTheme: 'cycle', type: 'qcm', image: 'bougies',
      enonce: 'Quelles pièces voit-on ?',
      choix: ['Des bougies d\'allumage (moteur essence)', 'Des bougies de préchauffage (moteur diesel)', 'Des injecteurs', 'Des sondes de température'],
      bonne: 0,
      explication: 'Les électrodes au bout produisent l\'étincelle qui enflamme le mélange. Un diesel n\'en a pas : le gazole s\'enflamme seul, les bougies de préchauffage aident seulement au démarrage à froid.'
    },
    {
      id: 'moteur-q22', sousTheme: 'distribution', type: 'qcm', image: 'courroie-distribution',
      enonce: 'Comment s\'appelle la courroie crantée qui entraîne la grande poulie dentée ?',
      choix: ['La courroie de distribution', 'La courroie d\'accessoires', 'La chaîne de distribution', 'La courroie de transmission aux roues'],
      bonne: 0,
      explication: 'Elle est crantée pour ne jamais glisser : le calage entre vilebrequin et arbre à cames doit rester parfait. La courroie d\'accessoires, elle, est striée.'
    },
    {
      id: 'moteur-q23', sousTheme: 'cycle', type: 'qcm', image: 'injecteur',
      enonce: 'Quelle est cette pièce ?',
      choix: ['Un injecteur diesel', 'Une bougie de préchauffage', 'Une sonde lambda', 'Un capteur de pression d\'huile'],
      bonne: 0,
      explication: 'Il pulvérise le gazole sous très haute pression directement dans la chambre de combustion, au bon moment.'
    }
  ]
});
