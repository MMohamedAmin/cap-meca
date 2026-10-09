CAP.ajouterChapitre({
  id: 'transmission',
  titre: 'Transmission',
  icone: '🔩',
  description: 'Embrayage, boîte de vitesses, différentiel et arbres de transmission.',
  sousThemes: {
    embrayage: 'Embrayage',
    boite: 'Boîte de vitesses',
    differentiel: 'Différentiel',
    transmissions: 'Arbres de transmission'
  },

  fiche: [
    {
      titre: 'La chaîne de transmission',
      sousTheme: 'boite',
      contenu: [
        'Le mouvement va du **moteur** aux **roues** : moteur → **embrayage** → **boîte de vitesses** → **différentiel** → **arbres de transmission** → roues.',
        'La boîte **adapte le couple et la vitesse** du moteur aux besoins : la **1re** donne beaucoup de couple aux roues mais peu de vitesse, les rapports supérieurs l\'inverse.',
        'Les **synchroniseurs** égalisent la vitesse des pignons avant l\'engagement : on passe les vitesses sans craquement.',
        'La **marche arrière** utilise un **pignon intermédiaire** (inverseur) qui change le sens de rotation.'
      ]
    },
    {
      titre: 'L\'embrayage',
      sousTheme: 'embrayage',
      contenu: [
        'Rôle : **accoupler et désaccoupler** progressivement le moteur et la boîte.',
        { liste: [
          '**Volant moteur** (sur le vilebrequin).',
          '**Disque** avec ses garnitures, solidaire de l\'arbre d\'entrée de boîte.',
          '**Mécanisme** : le **plateau de pression** et son **diaphragme** serrent le disque contre le volant.',
          '**Butée** : appuie sur le diaphragme pour débrayer.',
          '**Commande** par câble ou hydraulique (émetteur et récepteur).'
        ] },
        { retenir: 'Embrayage qui **patine** : le régime moteur monte mais la voiture n\'accélère pas, odeur de brûlé possible. Garnitures usées ou huilées.' }
      ]
    },
    {
      titre: 'Le différentiel',
      sousTheme: 'differentiel',
      contenu: [
        'En virage, la roue extérieure parcourt plus de chemin que la roue intérieure. Le **différentiel** permet aux deux roues motrices de **tourner à des vitesses différentes** tout en recevant le couple.'
      ]
    },
    {
      titre: 'Les arbres de transmission',
      sousTheme: 'transmissions',
      contenu: [
        'Ils relient le différentiel aux roues. Leurs **joints homocinétiques** transmettent le mouvement à vitesse constante malgré le braquage et les mouvements de suspension.',
        'Les joints sont protégés par des **soufflets** remplis de graisse.',
        { attention: 'Soufflet déchiré : la graisse s\'échappe et la saleté entre. Le joint s\'use et **claque en virage** braqué. Il faut remplacer le soufflet dès que possible.' }
      ]
    }
  ],

  cartes: [
    { id: 'trans-c1', sousTheme: 'differentiel', recto: 'Rôle du différentiel ?', verso: 'Permettre aux roues motrices de **tourner à des vitesses différentes** en virage.' },
    { id: 'trans-c2', sousTheme: 'boite', recto: 'Rôle des synchroniseurs ?', verso: '**Égaliser les vitesses** avant l\'engagement d\'un rapport, pour passer sans craquement.' },
    { id: 'trans-c3', sousTheme: 'embrayage', recto: 'Symptômes d\'un embrayage qui patine ?', verso: 'Le **régime monte** mais la voiture **n\'accélère pas**, odeur de brûlé.' },
    { id: 'trans-c4', sousTheme: 'embrayage', recto: 'Rôle de la butée d\'embrayage ?', verso: 'Appuyer sur le **diaphragme** pour **débrayer**.' },
    { id: 'trans-c5', sousTheme: 'transmissions', recto: 'Symptôme d\'un joint homocinétique usé ?', verso: '**Claquements en virage** braqué.' },
    { id: 'trans-c6', sousTheme: 'boite', recto: 'Comment la marche arrière inverse-t-elle le sens ?', verso: 'Grâce à un **pignon intermédiaire** (inverseur).' },
    { id: 'trans-c7', sousTheme: 'boite', recto: 'La chaîne de transmission, dans l\'ordre ?', verso: 'Moteur → **embrayage** → **boîte** → **différentiel** → **arbres de transmission** → roues.' },
    { id: 'trans-c8', sousTheme: 'boite', recto: 'Quel rapport donne le plus de couple aux roues ?', verso: 'La **1re**.' },
    { id: 'trans-c9', sousTheme: 'boite', recto: 'Une vitesse saute toute seule : cause ?', verso: '**Crabots, fourchette ou verrouillage** usés dans la boîte.' },
    { id: 'trans-c10', sousTheme: 'embrayage', recto: 'Rôle de l\'embrayage ?', verso: '**Accoupler et désaccoupler progressivement** le moteur et la boîte.' },
    { id: 'trans-c11', sousTheme: 'embrayage', recto: 'Que contient un kit d\'embrayage ?', verso: 'Le **mécanisme** (plateau et diaphragme), le **disque** et la **butée**.' },
    { id: 'trans-c12', sousTheme: 'embrayage', recto: 'Les deux types de commande d\'embrayage ?', verso: 'Par **câble**, ou **hydraulique** (émetteur et récepteur).' },
    { id: 'trans-c13', sousTheme: 'embrayage', recto: 'Disque d\'embrayage huilé : que réparer en plus du kit ?', verso: 'La **fuite d\'huile**, souvent un joint spi.' },
    { id: 'trans-c14', sousTheme: 'differentiel', recto: 'En virage, quelle roue motrice tourne le plus vite ?', verso: 'La roue **extérieure**.' },
    { id: 'trans-c15', sousTheme: 'differentiel', recto: 'Où se trouve le différentiel d\'une traction à moteur transversal ?', verso: 'Dans la **boîte-pont**, avec la boîte de vitesses.' },
    { id: 'trans-c16', sousTheme: 'transmissions', recto: 'Rôle du soufflet de transmission ?', verso: 'Garder la **graisse** et empêcher la **saleté** d\'entrer.' },
    { id: 'trans-c17', sousTheme: 'transmissions', recto: 'Vibrations seulement en accélérant ?', verso: 'Un joint de transmission **côté boîte** usé.' },
    { id: 'trans-c18', sousTheme: 'transmissions', recto: 'Que veut dire « homocinétique » ?', verso: '« Même **vitesse** » : la rotation reste régulière malgré l\'angle.' }
  ],

  questions: [
    {
      id: 'trans-q1', sousTheme: 'differentiel', type: 'qcm',
      enonce: 'Quel est le rôle du différentiel ?',
      choix: ['Permettre aux roues motrices de tourner à des vitesses différentes', 'Changer de rapport de vitesse', 'Désaccoupler le moteur de la boîte', 'Bloquer les roues à l\'arrêt'],
      bonne: 0,
      explication: 'En virage, la roue extérieure doit tourner plus vite que la roue intérieure.'
    },
    {
      id: 'trans-q2', sousTheme: 'embrayage', type: 'qcm',
      enonce: 'En accélérant, le régime moteur monte mais la voiture n\'accélère pas. Cause probable ?',
      choix: ['L\'embrayage patine', 'Les synchroniseurs sont usés', 'Le différentiel est cassé', 'Un soufflet de transmission est déchiré'],
      bonne: 0,
      explication: 'Le disque glisse au lieu de transmettre tout le couple : garnitures usées ou huilées.'
    },
    {
      id: 'trans-q3', sousTheme: 'boite', type: 'qcm',
      enonce: 'À quoi servent les synchroniseurs ?',
      choix: ['À égaliser les vitesses pour engager un rapport sans craquement', 'À synchroniser l\'allumage', 'À répartir le couple entre les roues', 'À commander l\'embrayage'],
      bonne: 0,
      explication: 'Ils freinent ou accélèrent le pignon pour qu\'il tourne à la même vitesse que l\'arbre avant l\'engagement.'
    },
    {
      id: 'trans-q4', sousTheme: 'transmissions', type: 'qcm',
      enonce: 'Que risque-t-on avec un soufflet de transmission déchiré ?',
      choix: ['L\'usure du joint homocinétique, avec des claquements en virage', 'Une fuite de liquide de frein', 'Un patinage de l\'embrayage', 'Une surchauffe moteur'],
      bonne: 0,
      explication: 'La graisse sort, la saleté entre, et le joint s\'use rapidement.'
    },
    {
      id: 'trans-q5', sousTheme: 'boite', type: 'qcm',
      enonce: 'Comment la boîte inverse-t-elle le sens de rotation pour la marche arrière ?',
      choix: ['Avec un pignon intermédiaire (inverseur)', 'En inversant le sens du moteur', 'Avec le différentiel', 'En débrayant'],
      bonne: 0,
      explication: 'Un pignon de plus entre deux pignons change le sens de rotation.'
    },
    {
      id: 'trans-q6', sousTheme: 'embrayage', type: 'qcm',
      enonce: 'Quelle pièce serre le disque d\'embrayage contre le volant moteur ?',
      choix: ['Le plateau de pression (mécanisme à diaphragme)', 'La butée', 'Le récepteur', 'Le synchroniseur'],
      bonne: 0,
      explication: 'Le diaphragme pousse le plateau de pression, qui pince le disque contre le volant.'
    },
    {
      id: 'trans-q7', sousTheme: 'boite', type: 'qcm',
      enonce: 'Quel rapport donne le plus de couple aux roues ?',
      choix: ['La 1re', 'La 5e', 'La 3e', 'Ils donnent tous le même couple'],
      bonne: 0,
      explication: 'La 1re est la plus démultipliée : beaucoup de couple, peu de vitesse. Idéale pour démarrer.'
    },
    {
      id: 'trans-q8', sousTheme: 'embrayage', type: 'qcm',
      enonce: 'Quel est le rôle de la butée d\'embrayage ?',
      choix: ['Appuyer sur le diaphragme pour débrayer', 'Limiter la course de la pédale', 'Égaliser les vitesses', 'Fixer le disque sur l\'arbre'],
      bonne: 0,
      explication: 'Quand on appuie sur la pédale, la butée pousse le centre du diaphragme, qui libère le disque.'
    },
    {
      id: 'trans-q9', sousTheme: 'embrayage', type: 'vf',
      enonce: 'Vrai ou faux : l\'embrayage permet de désaccoupler progressivement le moteur de la boîte.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : c\'est son rôle, pour démarrer et changer de vitesse.'
    },
    {
      id: 'trans-q10', sousTheme: 'differentiel', type: 'qcm', niveau: 2,
      enonce: 'Une roue motrice patine sur la glace, l\'autre reste immobile. Pourquoi ?',
      choix: ['Le différentiel envoie la rotation vers la roue qui résiste le moins', 'Le différentiel est cassé', 'L\'embrayage patine', 'La boîte est restée au point mort'],
      bonne: 0,
      explication: 'Un différentiel classique répartit le couple à égalité : si une roue n\'accroche pas, l\'autre ne reçoit presque rien. D\'où l\'antipatinage ou le différentiel à glissement limité.'
    },
    {
      id: 'trans-q11', sousTheme: 'differentiel', type: 'qcm',
      enonce: 'Où se trouve le différentiel sur une traction avant à moteur transversal ?',
      choix: ['Dans le carter de la boîte de vitesses (boîte-pont)', 'Dans le carter moteur', 'Sous le plancher, au milieu du véhicule', 'Dans le moyeu de chaque roue'],
      bonne: 0,
      explication: 'Sur la plupart des tractions, la boîte et le différentiel forment un seul ensemble : la boîte-pont.'
    },
    {
      id: 'trans-q12', sousTheme: 'transmissions', type: 'qcm',
      enonce: 'Quel joint transmet la rotation à vitesse constante, même roue braquée ?',
      choix: ['Le joint homocinétique', 'Le joint de cardan simple', 'Le silentbloc', 'Le joint spi'],
      bonne: 0,
      explication: '« Homocinétique » veut dire « même vitesse ». Un cardan simple, lui, crée des à-coups quand il travaille en angle.'
    },
    {
      id: 'trans-q13', sousTheme: 'transmissions', type: 'vf',
      enonce: 'Vrai ou faux : sur une traction avant, chaque roue avant reçoit le mouvement par son propre arbre de transmission.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : chaque arbre (appelé aussi « cardan ») a un joint côté boîte et un joint homocinétique côté roue.'
    },
    {
      id: 'trans-q14', sousTheme: 'embrayage', type: 'qcm', image: 'kit-embrayage',
      enonce: 'Que contient ce kit ?',
      choix: ['Un mécanisme d\'embrayage, un disque et une butée', 'Des disques et des plaquettes de frein', 'Un kit de distribution', 'Un volant moteur et son démarreur'],
      bonne: 0,
      explication: 'Le mécanisme (la grosse pièce avec le diaphragme) serre le disque contre le volant moteur. La butée appuie sur le diaphragme pour débrayer.'
    },
    {
      id: 'trans-q15', sousTheme: 'differentiel', type: 'qcm', image: 'differentiel',
      enonce: 'Quel organe voit-on, avec sa grande couronne dentée ?',
      choix: ['Un différentiel', 'Une boîte de vitesses', 'Un embrayage', 'Une pompe à huile'],
      bonne: 0,
      explication: 'La couronne est entraînée par le pignon d\'attaque. Dans le boîtier, les satellites et les planétaires permettent aux roues de tourner à des vitesses différentes.'
    },
    {
      id: 'trans-q16', sousTheme: 'transmissions', type: 'qcm', image: 'soufflet-cardan',
      enonce: 'Que constates-tu sur ce soufflet de transmission ?',
      choix: ['Il est fendu : il faut le remplacer rapidement', 'Il est en bon état', 'Il est juste sale : un nettoyage suffit', 'C\'est normal, un soufflet se fend toujours avec le temps et ne sert à rien'],
      bonne: 0,
      explication: 'Par la fente, la graisse sort et la saleté entre : le joint homocinétique va s\'user puis claquer en virage. On remplace le soufflet et on regraisse dès qu\'on le voit.'
    },
    {
      id: 'trans-q17', sousTheme: 'boite', type: 'qcm',
      enonce: 'Dans quel ordre le mouvement va-t-il du moteur aux roues ?',
      choix: ['Embrayage, boîte de vitesses, différentiel, arbres de transmission', 'Boîte de vitesses, embrayage, arbres de transmission, différentiel', 'Différentiel, embrayage, boîte de vitesses, arbres de transmission', 'Embrayage, différentiel, boîte de vitesses, arbres de transmission'],
      bonne: 0,
      explication: 'Moteur → **embrayage** → **boîte** → **différentiel** → **arbres de transmission** → roues.'
    },
    {
      id: 'trans-q18', sousTheme: 'boite', type: 'qcm', niveau: 2,
      enonce: 'Un craquement se fait entendre en passant une vitesse. Que suspecter ?',
      choix: ['Des synchroniseurs usés ou un embrayage qui débraye mal', 'Un différentiel cassé', 'Une huile moteur trop vieille', 'Un soufflet de transmission déchiré'],
      bonne: 0,
      explication: 'Les **synchroniseurs** égalisent les vitesses avant l\'engagement. Usés, ou si le moteur n\'est pas bien désaccouplé, les dents craquent.'
    },
    {
      id: 'trans-q19', sousTheme: 'boite', type: 'vf',
      enonce: 'Vrai ou faux : la 5e donne plus de couple aux roues que la 1re.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : c\'est la **1re** qui donne le plus de couple, pour démarrer. Les rapports supérieurs donnent de la vitesse.'
    },
    {
      id: 'trans-q20', sousTheme: 'differentiel', type: 'vf',
      enonce: 'Vrai ou faux : en virage, la roue extérieure tourne plus vite que la roue intérieure.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : elle parcourt plus de chemin dans le même temps. Le **différentiel** permet cette différence de vitesse.'
    },
    {
      id: 'trans-q21', sousTheme: 'transmissions', type: 'qcm',
      enonce: 'Que contient un soufflet de transmission ?',
      choix: ['De la graisse', 'De l\'huile de boîte', 'Du liquide de frein', 'De l\'air sous pression'],
      bonne: 0,
      explication: 'La **graisse** lubrifie le joint homocinétique. Le soufflet la garde et empêche la saleté d\'entrer.'
    },
    {
      id: 'trans-q22', sousTheme: 'embrayage', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi un embrayage patine-t-il quand ses garnitures sont imbibées d\'huile ?',
      choix: ['L\'huile diminue l\'adhérence : le disque glisse au lieu d\'entraîner', 'L\'huile fait gonfler le volant moteur', 'L\'huile bloque la butée', 'L\'huile augmente trop le couple'],
      bonne: 0,
      explication: 'L\'embrayage transmet le couple par **frottement**. Avec de l\'huile, il glisse. Il faut aussi trouver d\'où vient l\'huile (souvent un joint spi).'
    },
    {
      id: 'trans-q23', sousTheme: 'boite', type: 'qcm', niveau: 2,
      enonce: 'En 1re, le moteur tourne 3 fois plus vite que l\'arbre de sortie de la boîte. Que fait la boîte ?',
      choix: ['Elle divise la vitesse par 3 et multiplie le couple par 3 (sans compter les pertes)', 'Elle augmente la vitesse et le couple', 'Elle divise le couple par 3', 'Elle transmet tel quel'],
      bonne: 0,
      explication: 'Une démultiplication échange de la **vitesse** contre du **couple** : c\'est ce qui permet de démarrer en côte.'
    },
    {
      id: 'trans-q24', sousTheme: 'transmissions', type: 'qcm', niveau: 2,
      enonce: 'Claquements seulement en virage serré, en accélérant. Quelle pièce suspecter ?',
      choix: ['Le joint homocinétique côté roue', 'Le différentiel', 'L\'embrayage', 'Les plaquettes de frein'],
      bonne: 0,
      explication: 'Roue braquée, le **joint homocinétique** côté roue travaille en grand angle : usé, il claque. On regarde aussi l\'état de son soufflet.'
    },
    {
      id: 'trans-q25', sousTheme: 'embrayage', type: 'qcm', niveau: 3,
      enonce: 'Les vitesses passent bien moteur arrêté, mais mal moteur tournant, pédale à fond. Que suspecter ?',
      choix: ['L\'embrayage débraye mal (réglage, récepteur, air dans la commande hydraulique)', 'Des synchroniseurs neufs', 'Le différentiel', 'L\'huile moteur'],
      bonne: 0,
      explication: 'Moteur arrêté, rien ne tourne : les vitesses passent. Moteur tournant, si le disque reste un peu entraîné, ça **craque** : l\'embrayage ne désaccouple pas complètement.'
    },
    {
      id: 'trans-q26', sousTheme: 'embrayage', type: 'qcm', niveau: 3,
      enonce: 'Odeur de brûlé en côte, régime qui monte sans que la voiture accélère, et trace d\'huile sous le carter d\'embrayage. Que remplacer ?',
      choix: ['Le kit d\'embrayage et la bague d\'étanchéité (joint spi) qui fuit', 'Seulement le disque, sans chercher la fuite', 'La boîte de vitesses', 'Le différentiel'],
      bonne: 0,
      explication: 'Le disque est huilé et patine. Sans réparer la **fuite** (joint spi de vilebrequin ou d\'arbre de boîte), le kit neuf sera vite abîmé.'
    },
    {
      id: 'trans-q27', sousTheme: 'differentiel', type: 'qcm', niveau: 3,
      enonce: 'Pourquoi ne faut-il pas monter deux pneus de diamètres différents sur l\'essieu moteur ?',
      choix: ['Le différentiel compense en permanence la différence de vitesse : il chauffe et s\'use', 'Le compteur de vitesse s\'arrête', 'L\'embrayage ne fonctionne plus', 'Ce n\'est pas un problème'],
      bonne: 0,
      explication: 'Même en ligne droite, les deux roues tourneraient à des vitesses différentes : le **différentiel** travaillerait sans arrêt, comme dans un virage permanent.'
    },
    {
      id: 'trans-q28', sousTheme: 'boite', type: 'qcm', niveau: 3,
      enonce: 'Une vitesse saute toute seule au point mort quand on accélère ou qu\'on relâche l\'accélérateur. Que suspecter ?',
      choix: ['Une usure dans la boîte : crabots, fourchette ou verrouillage', 'L\'embrayage qui patine', 'Le différentiel', 'Un soufflet de transmission déchiré'],
      bonne: 0,
      explication: 'Ce sont les **crabots** et le **verrouillage** des baladeurs qui gardent la vitesse engagée. Usés, ils la laissent sortir sous l\'effort. On vérifie aussi les supports moteur.'
    },
    {
      id: 'trans-q29', sousTheme: 'transmissions', type: 'qcm', niveau: 3,
      enonce: 'Vibrations à l\'accélération entre 60 et 100 km/h, qui disparaissent dès qu\'on relâche l\'accélérateur. Que suspecter ?',
      choix: ['Un joint de transmission côté boîte usé', 'Un mauvais équilibrage des roues', 'Un disque de frein voilé', 'Une rotule de direction'],
      bonne: 0,
      explication: 'Le défaut n\'apparaît que quand la transmission est **sous effort** : c\'est un joint de transmission. Un mauvais équilibrage vibre aussi quand on relâche, un disque voilé au freinage.'
    },
    {
      id: 'trans-q30', sousTheme: 'boite', type: 'ordre', niveau: 1,
      enonce: 'Remets dans l\'ordre le contrôle du niveau d\'huile d\'une boîte de vitesses manuelle.',
      etapes: [
        'Mettre le véhicule à plat',
        'Nettoyer autour du bouchon de remplissage, puis le déposer',
        'Vérifier que l\'huile arrive au ras de l\'orifice',
        'Compléter si besoin avec l\'huile préconisée',
        'Reposer le bouchon avec un joint neuf, au couple'
      ],
      explication: 'Sur beaucoup de boîtes manuelles, le bon niveau est **au ras de l\'orifice** de remplissage. Le véhicule doit être **à plat**, sinon la mesure est fausse.'
    }
  ]
});
