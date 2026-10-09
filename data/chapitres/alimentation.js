CAP.ajouterChapitre({
  id: 'alimentation',
  titre: 'Alimentation et allumage',
  icone: '⛽',
  description: 'Circuit de carburant, injection essence et diesel, allumage, admission d\'air et turbo.',
  sousThemes: {
    carburant: 'Circuit de carburant',
    injection: 'Injection essence et diesel',
    allumage: 'Allumage',
    air: 'Admission d\'air et turbo'
  },

  fiche: [
    {
      titre: 'Le circuit de carburant',
      sousTheme: 'carburant',
      contenu: [
        'Le circuit de carburant stocke le carburant et l\'amène au moteur, **propre** et **sous pression**.',
        { liste: [
          '**Réservoir** : stocke le carburant.',
          '**Pompe d\'alimentation** : souvent électrique et placée dans le réservoir, elle envoie le carburant vers le moteur.',
          '**Filtre à carburant** : retient les impuretés. Sur un diesel, le filtre à gazole retient aussi l\'**eau**.',
          '**Canalisations** et **rampe** : amènent le carburant jusqu\'aux injecteurs.'
        ] },
        'Après une panne sèche, un diesel peut refuser de démarrer : de l\'air est entré dans le circuit, il faut le **réamorcer** (purger).',
        { attention: 'Le carburant est très inflammable : pas de flamme ni d\'étincelle, local ventilé, récupérateur adapté. Sur un diesel à rampe commune, la pression est énorme : on n\'ouvre jamais un raccord haute pression moteur tournant.' }
      ]
    },
    {
      titre: 'L\'injection essence et diesel',
      sousTheme: 'injection',
      contenu: [
        'L\'**injection** dose le carburant et l\'envoie au bon moment. Elle est pilotée par le **calculateur** moteur, qui s\'appuie sur des **capteurs** : régime, températures, air admis, position de la pédale d\'accélérateur…',
        { liste: [
          '**Essence** : les injecteurs pulvérisent l\'essence dans le collecteur d\'admission (**injection indirecte**) ou directement dans la chambre de combustion (**injection directe**).',
          '**Diesel** : une pompe haute pression alimente une **rampe commune** (common rail). Les injecteurs envoient le gazole directement dans la chambre, à très haute pression (souvent plus de 1 500 bars).'
        ] },
        { retenir: 'Essence : on règle la puissance en dosant l\'**air** (papillon), l\'injection suit pour garder le bon mélange. Diesel : on la règle en dosant directement le **gazole** injecté.' },
        'Après le remplacement d\'un injecteur diesel, il faut souvent enregistrer son **code** (inscrit sur l\'injecteur) dans le calculateur.'
      ]
    },
    {
      titre: 'L\'allumage (moteur essence)',
      sousTheme: 'allumage',
      contenu: [
        'L\'allumage produit l\'**étincelle** qui enflamme le mélange air-essence, au bon moment. Le calculateur déclenche l\'étincelle un peu **avant le PMH** : c\'est l\'**avance à l\'allumage**, car la combustion prend du temps.',
        { liste: [
          '**Bobine** : transforme le 12 V en très haute tension (plusieurs dizaines de milliers de volts). Aujourd\'hui, souvent une **bobine crayon** par bougie.',
          '**Bougie** : l\'étincelle jaillit entre ses **électrodes**. L\'écartement est donné par le constructeur.',
          '**Capteur de régime** (sur le vilebrequin) : indique au calculateur la position et la vitesse du moteur.'
        ] },
        'Une bougie ou une bobine défectueuse provoque des **ratés** : moteur qui tremble, perte de puissance, voyant moteur.',
        'Un **diesel n\'a pas d\'allumage** : ses bougies de **préchauffage** chauffent seulement la chambre pour aider au démarrage à froid.',
        { attention: 'Haute tension : ne pas toucher une bobine ou un fil de bougie moteur tournant.' }
      ]
    },
    {
      titre: 'Admission d\'air et turbo',
      sousTheme: 'air',
      contenu: [
        'Pour bien brûler le carburant, le moteur a besoin d\'air **propre** et en **quantité** suffisante.',
        { liste: [
          '**Filtre à air** : retient les poussières. Encrassé, il étouffe le moteur : perte de puissance, consommation en hausse.',
          '**Collecteur d\'admission** : distribue l\'air vers les cylindres.',
          '**Débitmètre** ou **capteur de pression** : mesure l\'air admis pour le calculateur.',
          '**Turbocompresseur** : les **gaz d\'échappement** font tourner une turbine, qui entraîne un compresseur qui **pousse plus d\'air** dans le moteur.',
          '**Échangeur** (intercooler) : refroidit l\'air comprimé. Plus froid, il est plus dense et contient plus d\'oxygène.'
        ] },
        { retenir: 'Le turbo tourne très vite et il est graissé par l\'**huile moteur** : une huile de qualité et des vidanges à l\'heure le protègent.' }
      ]
    }
  ],

  cartes: [
    { id: 'alim-c1', sousTheme: 'carburant', recto: 'Que retient le filtre à gazole, en plus des impuretés ?', verso: 'L\'**eau**.' },
    { id: 'alim-c2', sousTheme: 'carburant', recto: 'Où se trouve souvent la pompe d\'alimentation électrique ?', verso: '**Dans le réservoir**.' },
    { id: 'alim-c3', sousTheme: 'carburant', recto: 'Principal danger en intervenant sur le circuit de carburant ?', verso: 'L\'**incendie** : pas de flamme ni d\'étincelle, local ventilé.' },
    { id: 'alim-c4', sousTheme: 'injection', recto: 'Qui pilote l\'injection ?', verso: 'Le **calculateur** moteur, grâce aux **capteurs**.' },
    { id: 'alim-c5', sousTheme: 'injection', recto: 'Injection directe essence : où va l\'essence ?', verso: '**Directement dans la chambre** de combustion.' },
    { id: 'alim-c6', sousTheme: 'injection', recto: 'Que veut dire « common rail » ?', verso: '**Rampe commune** sous haute pression qui alimente tous les injecteurs.' },
    { id: 'alim-c7', sousTheme: 'injection', recto: 'Diesel : que dose-t-on pour régler la puissance ?', verso: 'La quantité de **gazole** injectée.' },
    { id: 'alim-c8', sousTheme: 'allumage', recto: 'Rôle de la bobine d\'allumage ?', verso: 'Transformer le 12 V en **très haute tension** pour la bougie.' },
    { id: 'alim-c9', sousTheme: 'allumage', recto: 'Symptômes d\'un raté d\'allumage ?', verso: 'Moteur qui **tremble**, perte de puissance, voyant moteur.' },
    { id: 'alim-c10', sousTheme: 'allumage', recto: 'Qu\'est-ce que l\'avance à l\'allumage ?', verso: 'Faire jaillir l\'étincelle **avant le PMH**, car la combustion prend du temps.' },
    { id: 'alim-c11', sousTheme: 'air', recto: 'Comment fonctionne un turbo ?', verso: 'Les **gaz d\'échappement** font tourner une turbine qui entraîne un **compresseur** d\'air.' },
    { id: 'alim-c12', sousTheme: 'air', recto: 'Rôle de l\'échangeur (intercooler) ?', verso: '**Refroidir l\'air** comprimé : plus dense, il contient plus d\'oxygène.' },
    { id: 'alim-c13', sousTheme: 'air', recto: 'Filtre à air encrassé : conséquences ?', verso: '**Perte de puissance** et consommation en hausse.' }
  ],

  questions: [
    {
      id: 'alim-q1', sousTheme: 'carburant', type: 'qcm',
      enonce: 'Quel élément retient les impuretés du carburant avant les injecteurs ?',
      choix: ['Le filtre à carburant', 'Le filtre à air', 'Le catalyseur', 'La crépine d\'huile'],
      bonne: 0,
      explication: 'Le **filtre à carburant** protège la pompe et les injecteurs, très sensibles aux impuretés.'
    },
    {
      id: 'alim-q2', sousTheme: 'carburant', type: 'qcm',
      enonce: 'Sur un diesel, que retient aussi le filtre à gazole ?',
      choix: ['L\'eau', 'L\'huile moteur', 'L\'air', 'Le liquide de refroidissement'],
      bonne: 0,
      explication: 'L\'**eau** abîme la pompe et les injecteurs haute pression : le filtre la retient et se purge ou se remplace selon le constructeur.'
    },
    {
      id: 'alim-q3', sousTheme: 'injection', type: 'qcm',
      enonce: 'Sur un moteur moderne, qui commande l\'ouverture des injecteurs ?',
      choix: ['Le calculateur moteur', 'La pédale d\'accélérateur, directement', 'L\'arbre à cames', 'Le régulateur de l\'alternateur'],
      bonne: 0,
      explication: 'Le **calculateur** décide quand et combien injecter, à partir des informations de ses capteurs.'
    },
    {
      id: 'alim-q4', sousTheme: 'injection', type: 'vf',
      enonce: 'Vrai ou faux : sur un diesel à rampe commune, le gazole est injecté à basse pression.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : la pression est **très haute**, souvent plus de 1 500 bars, pour pulvériser finement le gazole dans l\'air très comprimé.'
    },
    {
      id: 'alim-q5', sousTheme: 'allumage', type: 'qcm',
      enonce: 'Quelle pièce transforme le 12 V en très haute tension pour la bougie ?',
      choix: ['La bobine d\'allumage', 'L\'alternateur', 'Le démarreur', 'Le boîtier de préchauffage'],
      bonne: 0,
      explication: 'La **bobine** élève la tension à plusieurs dizaines de milliers de volts : assez pour faire jaillir une étincelle entre les électrodes.'
    },
    {
      id: 'alim-q6', sousTheme: 'allumage', type: 'vf',
      enonce: 'Vrai ou faux : un moteur diesel a des bougies d\'allumage.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : le gazole s\'enflamme seul dans l\'air chaud comprimé. Le diesel a des bougies de **préchauffage**, qui ne servent qu\'au démarrage à froid.'
    },
    {
      id: 'alim-q7', sousTheme: 'air', type: 'qcm',
      enonce: 'Quel est le rôle du filtre à air ?',
      choix: ['Retenir les poussières de l\'air admis', 'Refroidir l\'air', 'Doser le carburant', 'Réduire le bruit d\'échappement'],
      bonne: 0,
      explication: 'Les poussières useraient les cylindres et les segments. Un filtre encrassé, lui, étouffe le moteur.'
    },
    {
      id: 'alim-q8', sousTheme: 'air', type: 'qcm',
      enonce: 'Qu\'est-ce qui fait tourner la turbine d\'un turbocompresseur ?',
      choix: ['Les gaz d\'échappement', 'La courroie d\'accessoires', 'Le démarreur', 'La pompe à carburant'],
      bonne: 0,
      explication: 'Les **gaz d\'échappement** font tourner la turbine, qui entraîne le compresseur placé côté admission.'
    },
    {
      id: 'alim-q9', sousTheme: 'injection', type: 'qcm',
      enonce: 'Quel capteur informe le calculateur de ce que veut le conducteur ?',
      choix: ['Le capteur de position de la pédale d\'accélérateur', 'Le capteur de vitesse de roue', 'Le capteur de niveau d\'huile', 'La sonde de température extérieure'],
      bonne: 0,
      explication: 'Sur les moteurs récents, la pédale n\'est plus reliée par un câble : un **capteur** transmet sa position au calculateur.'
    },
    {
      id: 'alim-q10', sousTheme: 'carburant', type: 'qcm',
      enonce: 'Un client a mis de l\'essence dans son véhicule diesel, sans démarrer. Que faire ?',
      choix: ['Ne pas démarrer : vidanger le réservoir et le circuit', 'Rouler vite pour brûler l\'essence', 'Ajouter de l\'huile dans le réservoir', 'Rien : les deux carburants sont identiques'],
      bonne: 0,
      explication: 'L\'essence ne lubrifie pas la pompe et les injecteurs diesel : ils peuvent être détruits. Tant que le moteur n\'a pas tourné, une **vidange** suffit souvent.'
    },
    {
      id: 'alim-q11', sousTheme: 'injection', type: 'qcm', niveau: 2,
      enonce: 'Injection essence indirecte et directe : quelle est la différence ?',
      choix: ['Indirecte : l\'essence est injectée dans le collecteur d\'admission ; directe : dans la chambre de combustion', 'Indirecte : dans la chambre ; directe : dans le collecteur', 'Indirecte : par un carburateur ; directe : par un injecteur', 'Il n\'y a aucune différence'],
      bonne: 0,
      explication: 'En **directe**, l\'injecteur débouche dans la chambre, comme sur un diesel : l\'injection est plus précise, mais à plus haute pression.'
    },
    {
      id: 'alim-q12', sousTheme: 'air', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi refroidit-on l\'air qui sort du turbo dans un échangeur (intercooler) ?',
      choix: ['L\'air froid est plus dense : il contient plus d\'oxygène pour brûler plus de carburant', 'Pour protéger le filtre à air', 'Pour que le moteur chauffe plus vite', 'Pour supprimer la pression du turbo'],
      bonne: 0,
      explication: 'En comprimant l\'air, le turbo le chauffe. Refroidi, le même volume d\'air contient plus d\'**oxygène** : plus de puissance.'
    },
    {
      id: 'alim-q13', sousTheme: 'allumage', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi l\'étincelle jaillit-elle un peu avant le PMH (avance à l\'allumage) ?',
      choix: ['La combustion prend du temps : allumée en avance, la pression maximale arrive juste après le PMH', 'Pour refroidir la bougie', 'Pour économiser la batterie', 'Parce que la bobine est lente à se recharger'],
      bonne: 0,
      explication: 'Le mélange ne brûle pas instantanément. Avec l\'**avance**, la poussée maximale arrive au bon moment, quand le piston redescend.'
    },
    {
      id: 'alim-q14', sousTheme: 'carburant', type: 'qcm', niveau: 2,
      enonce: 'Après une panne sèche et un plein, un diesel refuse de démarrer. Pourquoi, le plus souvent ?',
      choix: ['De l\'air est entré dans le circuit : il faut le réamorcer (purger)', 'La batterie est forcément vide', 'Les bougies d\'allumage sont noyées', 'Le turbo est cassé'],
      bonne: 0,
      explication: 'La pompe a aspiré de l\'**air** : il faut le chasser selon la méthode du constructeur (pompe d\'amorçage, mise sous contact répétée…).'
    },
    {
      id: 'alim-q15', sousTheme: 'allumage', type: 'qcm', niveau: 3,
      enonce: 'Moteur essence 4 cylindres, une bobine crayon par bougie. Le cylindre 2 a des ratés. Quel essai simple dit si la bobine est en cause ?',
      choix: ['Échanger la bobine du cylindre 2 avec celle du cylindre 3 et voir si le raté change de cylindre', 'Remplacer les 4 bougies et les 4 bobines', 'Débrancher la batterie', 'Rajouter de l\'huile moteur'],
      bonne: 0,
      explication: 'Si le raté **suit la bobine** (il passe au cylindre 3), la bobine est en cause. S\'il reste au cylindre 2, on regarde la bougie, l\'injecteur ou la compression.'
    },
    {
      id: 'alim-q16', sousTheme: 'carburant', type: 'qcm', niveau: 3,
      enonce: 'Le moteur s\'étouffe en pleine accélération, puis repart au ralenti. La pression d\'alimentation chute quand le moteur demande beaucoup. Que suspecter ?',
      choix: ['Un filtre à carburant colmaté ou une pompe d\'alimentation faible', 'Une bougie de préchauffage', 'Le thermostat', 'Un pneu sous-gonflé'],
      bonne: 0,
      explication: 'Au ralenti, le besoin est faible et ça passe. En pleine charge, un filtre bouché ou une pompe usée **ne suit plus** : la pression chute et le moteur manque de carburant.'
    },
    {
      id: 'alim-q17', sousTheme: 'injection', type: 'qcm', niveau: 3,
      enonce: 'Après le remplacement d\'un injecteur diesel, le moteur claque et le voyant moteur s\'allume. Quelle étape a pu être oubliée ?',
      choix: ['Enregistrer le code de l\'injecteur dans le calculateur', 'Purger le circuit de freinage', 'Régler le parallélisme', 'Vidanger la boîte de vitesses'],
      bonne: 0,
      explication: 'Chaque injecteur a un **code** (inscrit dessus) qui corrige ses petites différences de débit. Sans lui, le calculateur dose mal : bruit, fumée, voyant.'
    },
    {
      id: 'alim-q18', sousTheme: 'air', type: 'qcm', niveau: 3,
      enonce: 'Diesel turbo : fumée noire à l\'accélération et perte de puissance. On entend un sifflement anormal. Que contrôler en premier ?',
      choix: ['Le circuit d\'air : filtre à air et durites du turbo (fuite d\'air comprimé)', 'Les bougies d\'allumage', 'Le liquide de frein', 'Le thermostat bloqué ouvert'],
      bonne: 0,
      explication: 'La fumée **noire** signale trop de gazole pour l\'air disponible. Une durite de turbo percée (sifflement) ou un filtre bouché prive le moteur d\'air.'
    },
    {
      id: 'alim-q19', sousTheme: 'carburant', type: 'ordre', niveau: 2,
      enonce: 'Remets dans l\'ordre le remplacement d\'un filtre à gazole.',
      etapes: [
        'Repérer le sens de circulation et placer un récupérateur',
        'Déposer l\'ancien filtre',
        'Poser le filtre neuf dans le bon sens',
        'Réamorcer le circuit (pompe d\'amorçage ou mises sous contact répétées)',
        'Démarrer et contrôler l\'absence de fuite'
      ],
      explication: 'Après l\'ouverture du circuit, de l\'**air** y est entré : sans **réamorçage**, le diesel peut refuser de démarrer.'
    }
  ]
});
