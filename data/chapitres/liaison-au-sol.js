CAP.ajouterChapitre({
  id: 'liaison-au-sol',
  titre: 'Liaison au sol',
  icone: '🛞',
  description: 'Pneumatiques, roues, suspension, direction et géométrie des trains roulants.',
  sousThemes: {
    pneus: 'Pneumatiques',
    suspension: 'Suspension',
    direction: 'Direction',
    geometrie: 'Géométrie'
  },

  fiche: [
    {
      titre: 'Pneumatiques et roues',
      sousTheme: 'pneus',
      contenu: [
        'Exemple de marquage : **205/55 R16 91V**',
        { liste: [
          '**205** : largeur du pneu en mm.',
          '**55** : série, la hauteur du flanc vaut 55 % de la largeur.',
          '**R** : structure radiale.',
          '**16** : diamètre de la jante en pouces.',
          '**91** : indice de charge.',
          '**V** : indice de vitesse.'
        ] },
        'Date de fabrication (marquage DOT) : 4 chiffres, la **semaine** puis l\'**année**. « 1523 » = semaine 15 de 2023.',
        'La pression se contrôle **à froid**, selon la valeur du constructeur (étiquette sur la portière ou la trappe à carburant).',
        { retenir: 'Profondeur minimale légale des sculptures : **1,6 mm** (témoins d\'usure dans les rainures).' },
        'Les roues se serrent à la **clé dynamométrique**, au couple constructeur, **en croix** (en étoile).'
      ]
    },
    {
      titre: 'La suspension',
      sousTheme: 'suspension',
      contenu: [
        { liste: [
          '**Ressorts** : supportent le poids du véhicule.',
          '**Amortisseurs** : freinent les oscillations des ressorts et gardent la roue au contact du sol.',
          '**Barre stabilisatrice** (anti-roulis) : limite l\'inclinaison de la caisse en virage.',
          '**Triangles**, **rotules** et **silentblocs** : guident la roue.'
        ] },
        { attention: 'Amortisseur usé : rebonds, mauvaise tenue de route et **distance de freinage plus longue**. Fuite d\'huile visible possible.' }
      ]
    },
    {
      titre: 'La direction',
      sousTheme: 'direction',
      contenu: [
        'Le volant entraîne la **colonne**, qui fait coulisser la **crémaillère**. Les **biellettes** et les **rotules de direction** orientent les roues.',
        'L\'**assistance** peut être **hydraulique** (pompe et liquide) ou **électrique** (moteur électrique), aujourd\'hui la plus courante.',
        'Un jeu dans les rotules donne un flottement de la direction et doit être corrigé.'
      ]
    },
    {
      titre: 'La géométrie',
      sousTheme: 'geometrie',
      contenu: [
        { liste: [
          '**Parallélisme** : orientation des roues vues de dessus (pincement ou ouverture).',
          '**Carrossage** : inclinaison de la roue vue de face.',
          '**Chasse** : inclinaison de l\'axe de pivot vue de côté, elle aide la direction à revenir en ligne droite.'
        ] },
        { retenir: 'Mauvais parallélisme : **usure anormale** des pneus (sur un bord) et voiture qui **tire** d\'un côté. Un contrôle de géométrie est conseillé après un choc ou le remplacement de pièces de direction.' }
      ]
    }
  ],

  cartes: [
    { id: 'sol-c1', sousTheme: 'pneus', recto: '205/55 R16 : que signifie 16 ?', verso: 'Le **diamètre de la jante en pouces**.' },
    { id: 'sol-c2', sousTheme: 'pneus', recto: 'Profondeur minimale légale des sculptures ?', verso: '**1,6 mm**.' },
    { id: 'sol-c3', sousTheme: 'pneus', recto: 'DOT 0824 : date de fabrication ?', verso: '**Semaine 8 de 2024**.' },
    { id: 'sol-c4', sousTheme: 'suspension', recto: 'Rôle de l\'amortisseur ?', verso: '**Freiner les oscillations** du ressort et garder la roue au sol.' },
    { id: 'sol-c5', sousTheme: 'suspension', recto: 'Rôle de la barre stabilisatrice ?', verso: '**Limiter le roulis** en virage.' },
    { id: 'sol-c6', sousTheme: 'geometrie', recto: 'Conséquences d\'un mauvais parallélisme ?', verso: '**Usure anormale** des pneus et voiture qui **tire**.' },
    { id: 'sol-c7', sousTheme: 'pneus', recto: 'Comment serrer les roues ?', verso: 'À la **clé dynamométrique**, au couple constructeur, **en croix**.' },
    { id: 'sol-c8', sousTheme: 'pneus', recto: '205/55 R16 91V : que veut dire 205 ?', verso: 'La **largeur** du pneu, en mm.' },
    { id: 'sol-c9', sousTheme: 'pneus', recto: '205/55 R16 91V : que veut dire 55 ?', verso: 'La **série** : la hauteur du flanc vaut 55 % de la largeur.' },
    { id: 'sol-c10', sousTheme: 'pneus', recto: '205/55 R16 91V : que veulent dire 91 et V ?', verso: '91 = **indice de charge**, V = **indice de vitesse**.' },
    { id: 'sol-c11', sousTheme: 'pneus', recto: 'Pneu usé au centre ? Usé sur les deux bords ?', verso: 'Centre = **surgonflé**. Deux bords = **sous-gonflé**.' },
    { id: 'sol-c12', sousTheme: 'pneus', recto: 'Où lire la pression de gonflage préconisée ?', verso: 'Sur l\'**étiquette** du constructeur : portière ou trappe à carburant.' },
    { id: 'sol-c13', sousTheme: 'suspension', recto: 'Rôle des ressorts ?', verso: '**Porter** le poids du véhicule.' },
    { id: 'sol-c14', sousTheme: 'suspension', recto: 'Test rapide d\'un amortisseur ?', verso: 'Appuyer sur l\'aile puis relâcher : **une seule oscillation** si l\'amortisseur est bon.' },
    { id: 'sol-c15', sousTheme: 'direction', recto: 'Pièces qui relient la crémaillère aux roues ?', verso: 'Les **biellettes** et les **rotules** de direction.' },
    { id: 'sol-c16', sousTheme: 'direction', recto: 'Les deux types de direction assistée ?', verso: '**Hydraulique** (pompe) ou **électrique**, aujourd\'hui la plus courante.' },
    { id: 'sol-c17', sousTheme: 'geometrie', recto: 'Vue de face, vue de dessus, vue de côté : quels angles ?', verso: 'Face = **carrossage**. Dessus = **parallélisme**. Côté = **chasse**.' },
    { id: 'sol-c18', sousTheme: 'geometrie', recto: 'Deux pneus avant usés sur le bord extérieur ?', verso: 'Un **pincement** excessif.' },
    { id: 'sol-c19', sousTheme: 'geometrie', recto: 'Rôle de la chasse ?', verso: 'Ramener la direction en **ligne droite**.' }
  ],

  questions: [
    {
      id: 'sol-q1', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Sur un pneu 205/55 R16 91V, que signifie « 16 » ?',
      choix: ['Le diamètre de la jante en pouces', 'La largeur en cm', 'L\'indice de charge', 'La pression en bars × 10'],
      bonne: 0,
      explication: '205 = largeur en mm, 55 = série, R = radial, 16 = diamètre de jante en pouces.'
    },
    {
      id: 'sol-q2', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Quelle est la profondeur minimale légale des sculptures d\'un pneu de voiture ?',
      choix: ['1,6 mm', '3 mm', '0,5 mm', '4 mm'],
      bonne: 0,
      explication: 'Les témoins d\'usure dans les rainures indiquent cette limite de 1,6 mm.'
    },
    {
      id: 'sol-q3', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Quand contrôle-t-on la pression des pneus ?',
      choix: ['À froid', 'Après un long trajet', 'Pneus chauds uniquement', 'N\'importe quand, c\'est pareil'],
      bonne: 0,
      explication: 'L\'air chauffe en roulant et la pression augmente : les valeurs constructeur sont données à froid.'
    },
    {
      id: 'sol-q4', sousTheme: 'suspension', type: 'qcm',
      enonce: 'Quel est le rôle de l\'amortisseur ?',
      choix: ['Freiner les oscillations du ressort', 'Porter le poids du véhicule', 'Limiter le roulis', 'Orienter les roues'],
      bonne: 0,
      explication: 'Le ressort porte le poids. L\'amortisseur l\'empêche de rebondir et garde le pneu au contact du sol.'
    },
    {
      id: 'sol-q5', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Un pneu porte le marquage DOT « 1523 ». Quand a-t-il été fabriqué ?',
      choix: ['Semaine 15 de 2023', 'Le 15 février 2023', 'En 2015, semaine 23', 'Le 23 janvier 2015'],
      bonne: 0,
      explication: 'Les deux premiers chiffres sont la semaine, les deux derniers l\'année.'
    },
    {
      id: 'sol-q6', sousTheme: 'geometrie', type: 'qcm',
      enonce: 'Les pneus avant sont usés sur un seul bord. Cause probable ?',
      choix: ['Un défaut de géométrie (parallélisme, carrossage)', 'Une pression trop forte', 'Un amortisseur neuf', 'Un mauvais équilibrage uniquement'],
      bonne: 0,
      explication: 'Une roue mal orientée frotte toujours du même côté. Une pression trop forte use plutôt le centre.'
    },
    {
      id: 'sol-q7', sousTheme: 'suspension', type: 'qcm',
      enonce: 'À quoi sert la barre stabilisatrice ?',
      choix: ['À limiter le roulis en virage', 'À amortir les bosses', 'À régler le parallélisme', 'À porter le moteur'],
      bonne: 0,
      explication: 'Elle relie les deux côtés du train et limite l\'inclinaison de la caisse en virage.'
    },
    {
      id: 'sol-q8', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Comment serre-t-on les écrous ou vis de roue ?',
      choix: ['À la clé dynamométrique, au couple constructeur, en croix', 'Au pistolet pneumatique à fond, dans l\'ordre', 'À la main uniquement', 'Le plus fort possible avec une rallonge'],
      bonne: 0,
      explication: 'Le serrage en croix plaque la roue bien à plat. Trop serrer peut abîmer les filetages ou voiler le disque.'
    },
    {
      id: 'sol-q9', sousTheme: 'suspension', type: 'vf',
      enonce: 'Vrai ou faux : un amortisseur usé peut allonger la distance de freinage.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : la roue rebondit et perd par moments le contact avec la route, donc l\'adhérence diminue.'
    },
    {
      id: 'sol-q10', sousTheme: 'direction', type: 'qcm',
      enonce: 'Dans une direction à crémaillère, quelles pièces relient la crémaillère aux roues ?',
      choix: ['Les biellettes et les rotules de direction', 'Les silentblocs', 'Les amortisseurs', 'Les arbres de transmission'],
      bonne: 0,
      explication: 'La crémaillère coulisse et pousse ou tire les biellettes, qui orientent les roues via les rotules.'
    },
    {
      id: 'sol-q11', sousTheme: 'geometrie', type: 'qcm',
      enonce: 'Qu\'est-ce que le parallélisme ?',
      choix: ['Le pincement ou l\'ouverture des roues d\'un même essieu, vues de dessus', 'L\'inclinaison de la roue vue de face', 'L\'inclinaison de l\'axe de pivot vue de côté', 'La hauteur de caisse du véhicule'],
      bonne: 0,
      explication: 'Vu de dessus : roues plus rapprochées à l\'avant = pincement, plus écartées = ouverture. Vue de face, c\'est le carrossage ; vue de côté, la chasse.'
    },
    {
      id: 'sol-q12', sousTheme: 'geometrie', type: 'qcm',
      enonce: 'Après quelle intervention faut-il contrôler le parallélisme ?',
      choix: ['Le remplacement d\'une biellette ou d\'une rotule de direction', 'Une vidange moteur', 'Le remplacement des plaquettes de frein', 'Le remplacement de la batterie'],
      bonne: 0,
      explication: 'Une biellette ou une rotule neuve modifie le réglage : on contrôle et on règle la géométrie au banc.'
    },
    {
      id: 'sol-q13', sousTheme: 'direction', type: 'qcm',
      enonce: 'Quel est le rôle de la direction assistée ?',
      choix: ['Réduire l\'effort à fournir au volant', 'Ramener seule les roues en ligne droite', 'Augmenter le rayon de braquage', 'Régler le parallélisme en roulant'],
      bonne: 0,
      explication: 'L\'assistance est hydraulique (pompe) ou électrique (moteur électrique). Elle aide surtout à basse vitesse et pour les manœuvres.'
    },
    {
      id: 'sol-q14', sousTheme: 'direction', type: 'qcm', niveau: 2,
      enonce: 'Direction imprécise et claquements sur les bosses. Que contrôle-t-on en premier ?',
      choix: ['Les rotules et biellettes de direction', 'Le niveau de liquide de frein', 'La tension de la courroie d\'accessoires', 'L\'embrayage'],
      bonne: 0,
      explication: 'Une rotule usée prend du jeu : direction floue, bruits et usure des pneus. On la contrôle roue levée, en secouant la roue.'
    },
    {
      id: 'sol-q15', sousTheme: 'suspension', type: 'qcm', image: 'amortisseur',
      enonce: 'Quel ensemble a été déposé ?',
      choix: ['Une jambe de force : ressort et amortisseur, avec le pivot et le disque', 'Une crémaillère de direction', 'Un arbre de transmission', 'Un triangle de suspension seul'],
      bonne: 0,
      explication: 'Sur une suspension de type McPherson, le ressort entoure l\'amortisseur. Pour démonter le ressort, il faut un compresseur de ressort : il est sous tension, c\'est dangereux.'
    },
    {
      id: 'sol-q16', sousTheme: 'direction', type: 'qcm', image: 'rotule-direction',
      enonce: 'Quelle pièce voit-on au centre, avec l\'écrou en haut ?',
      choix: ['Une rotule de direction', 'Un silentbloc', 'Une biellette de barre stabilisatrice', 'Un amortisseur'],
      bonne: 0,
      explication: 'Vissée au bout de la biellette, elle relie la direction au pivot de la roue. Usée, elle prend du jeu : direction floue et usure des pneus.'
    },
    {
      id: 'sol-q17', sousTheme: 'geometrie', type: 'qcm',
      enonce: 'Qu\'est-ce que le carrossage ?',
      choix: ['L\'inclinaison de la roue par rapport à la verticale, vue de face', 'L\'orientation des roues vues de dessus', 'L\'inclinaison de l\'axe de pivot vue de côté', 'La hauteur entre la caisse et le sol'],
      bonne: 0,
      explication: 'Vue de face : c\'est le **carrossage**. Vue de dessus : le parallélisme. Vue de côté : la chasse.'
    },
    {
      id: 'sol-q18', sousTheme: 'geometrie', type: 'qcm',
      enonce: 'Quel angle aide la direction à revenir seule en ligne droite ?',
      choix: ['La chasse', 'Le carrossage', 'Le pincement', 'Le voile de roue'],
      bonne: 0,
      explication: 'La **chasse** (inclinaison de l\'axe de pivot vue de côté) ramène les roues en ligne droite après un virage.'
    },
    {
      id: 'sol-q19', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Sur un pneu 205/55 R16 91V, que signifie « V » ?',
      choix: ['L\'indice de vitesse : la vitesse maximale du pneu', 'L\'indice de charge', 'La structure radiale', 'Un pneu à valve renforcée'],
      bonne: 0,
      explication: '« 91 » est l\'indice de charge, « **V** » l\'indice de vitesse. La lettre « R » indique la structure radiale.'
    },
    {
      id: 'sol-q20', sousTheme: 'suspension', type: 'qcm',
      enonce: 'Quelles pièces supportent le poids du véhicule ?',
      choix: ['Les ressorts', 'Les amortisseurs', 'La barre stabilisatrice', 'Les rotules de direction'],
      bonne: 0,
      explication: 'Les **ressorts** portent le véhicule. Les amortisseurs, eux, freinent seulement leurs oscillations.'
    },
    {
      id: 'sol-q21', sousTheme: 'direction', type: 'qcm',
      enonce: 'Aujourd\'hui, quel type de direction assistée est le plus courant ?',
      choix: ['L\'assistance électrique', 'L\'assistance hydraulique', 'L\'assistance pneumatique', 'Les voitures n\'ont plus de direction assistée'],
      bonne: 0,
      explication: 'L\'assistance **électrique** (un moteur électrique sur la colonne ou la crémaillère) a remplacé la pompe hydraulique sur la plupart des voitures.'
    },
    {
      id: 'sol-q22', sousTheme: 'pneus', type: 'qcm',
      enonce: 'Où trouve-t-on la pression de gonflage préconisée pour un véhicule ?',
      choix: ['Sur l\'étiquette du constructeur, sur la portière ou la trappe à carburant', 'Sur le flanc du pneu', 'Sur la jante', 'C\'est toujours 2 bar pour tous les véhicules'],
      bonne: 0,
      explication: 'Le flanc du pneu indique une pression **maximale**, pas la pression à utiliser. La bonne valeur est donnée par le constructeur du véhicule.'
    },
    {
      id: 'sol-q23', sousTheme: 'pneus', type: 'qcm', niveau: 2,
      enonce: 'Sur un pneu 195/65 R15, quelle est la hauteur du flanc ?',
      choix: ['Environ 127 mm', '65 mm', '195 mm', '98 mm'],
      bonne: 0,
      explication: 'Hauteur = largeur × série ÷ 100 = 195 × 65 ÷ 100 ≈ **127 mm**. Le chiffre 65 est un pourcentage, pas une hauteur.'
    },
    {
      id: 'sol-q24', sousTheme: 'suspension', type: 'qcm', niveau: 2,
      enonce: 'On appuie fort sur l\'aile puis on relâche : la caisse oscille plusieurs fois avant de s\'arrêter. Que suspecter ?',
      choix: ['Un amortisseur usé', 'Un ressort trop dur', 'Une rotule de direction usée', 'Une pression des pneus trop élevée'],
      bonne: 0,
      explication: 'Un bon amortisseur stoppe le mouvement après environ une oscillation. Plusieurs rebonds : il ne freine plus le **ressort**.'
    },
    {
      id: 'sol-q25', sousTheme: 'direction', type: 'qcm', niveau: 2,
      enonce: 'Après un choc contre un trottoir, le volant n\'est plus droit en ligne droite. Que faire ?',
      choix: ['Contrôler les pièces de direction et de suspension, puis la géométrie au banc', 'Gonfler les pneus', 'Remplacer les amortisseurs', 'Rien, on s\'habitue'],
      bonne: 0,
      explication: 'Le choc a pu tordre une biellette ou un bras. On contrôle les **pièces**, puis on règle le **parallélisme** au banc.'
    },
    {
      id: 'sol-q26', sousTheme: 'geometrie', type: 'qcm', niveau: 3,
      enonce: 'Les deux pneus avant sont usés sur le bord extérieur. Quel défaut de parallélisme est le plus probable ?',
      choix: ['Un pincement excessif', 'Une ouverture excessive', 'Une chasse trop faible', 'Une pression trop forte'],
      bonne: 0,
      explication: 'Trop de **pincement** use le bord extérieur ; trop d\'**ouverture** use le bord intérieur. Une pression trop forte use plutôt le centre.'
    },
    {
      id: 'sol-q27', sousTheme: 'pneus', type: 'qcm', niveau: 3,
      enonce: 'Un pneu est usé uniquement au centre de la bande de roulement. Cause probable ?',
      choix: ['Une pression de gonflage trop élevée', 'Une pression trop faible', 'Un pincement excessif', 'Un amortisseur usé'],
      bonne: 0,
      explication: 'Surgonflé, le pneu se bombe et appuie sur son **centre**. Sous-gonflé, il s\'écrase et s\'use sur les deux bords.'
    },
    {
      id: 'sol-q28', sousTheme: 'suspension', type: 'qcm', niveau: 3,
      enonce: 'Au freinage, l\'avant plonge fortement et rebondit. Un amortisseur avant présente une trace d\'huile. Que faire ?',
      choix: ['Remplacer les deux amortisseurs avant', 'Remplacer seulement l\'amortisseur qui fuit', 'Rajouter de l\'huile dans l\'amortisseur', 'Remplacer les plaquettes'],
      bonne: 0,
      explication: 'Un amortisseur qui fuit est hors service. Comme pour les freins, on remplace **par essieu**, pour garder un comportement équilibré.'
    },
    {
      id: 'sol-q29', sousTheme: 'direction', type: 'qcm', niveau: 3,
      enonce: 'Direction assistée hydraulique : direction dure à l\'arrêt et à basse vitesse, avec un sifflement en braquant. Que contrôler en premier ?',
      choix: ['Le niveau de liquide de direction et la courroie qui entraîne la pompe', 'Le parallélisme', 'Les amortisseurs', 'La pression des pneus arrière'],
      bonne: 0,
      explication: 'L\'assistance est surtout utile à basse vitesse. Un manque de liquide ou une **courroie** qui patine (sifflement) réduit la pression fournie par la pompe.'
    },
    {
      id: 'sol-q30', sousTheme: 'geometrie', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi contrôle-t-on la géométrie sur un sol plat, véhicule à vide et pneus à la bonne pression ?',
      choix: ['Parce que la charge, le sol et la pression modifient les angles mesurés', 'Pour ne pas abîmer le banc', 'Pour aller plus vite', 'C\'est inutile : seule la position du volant compte'],
      bonne: 0,
      explication: 'Les angles changent quand la caisse s\'enfonce ou penche. Les valeurs du constructeur sont données dans des **conditions précises** : il faut les reproduire.'
    }
  ]
});
