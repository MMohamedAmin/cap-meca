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
    }
  ]
});
