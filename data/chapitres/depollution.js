CAP.ajouterChapitre({
  id: 'depollution',
  titre: 'Dépollution et échappement',
  icone: '🌫️',
  description: 'Ligne d\'échappement, catalyseur et sondes lambda, filtre à particules, vanne EGR, AdBlue, voyant moteur et diagnostic.',
  sousThemes: {
    echappement: 'Ligne d\'échappement',
    essence: 'Dépollution essence',
    diesel: 'Dépollution diesel',
    controle: 'Voyant moteur et diagnostic'
  },

  fiche: [
    {
      titre: 'La ligne d\'échappement',
      sousTheme: 'echappement',
      contenu: [
        'La ligne d\'échappement évacue les gaz brûlés, les **dépollue** et réduit le **bruit**.',
        { liste: [
          '**Collecteur d\'échappement** : récupère les gaz à la sortie des cylindres.',
          '**Catalyseur** et, sur un diesel, **filtre à particules** : traitent les polluants.',
          '**Sondes** (lambda, température, pression) : informent le calculateur.',
          '**Silencieux** : réduisent le bruit.',
          '**Supports en caoutchouc** (silentblocs) : absorbent les vibrations et laissent la ligne se dilater.'
        ] },
        { attention: 'Une fuite d\'échappement près du moteur peut faire entrer du **monoxyde de carbone** dans l\'habitacle. Elle fausse aussi la mesure des sondes.' }
      ]
    },
    {
      titre: 'La dépollution essence',
      sousTheme: 'essence',
      contenu: [
        'Les principaux polluants sont le **monoxyde de carbone (CO)**, les **hydrocarbures imbrûlés (HC)** et les **oxydes d\'azote (NOx)**.',
        'Le **catalyseur 3 voies** les transforme en gaz carbonique (CO2), en eau et en azote. Il ne fonctionne bien que **chaud** (plusieurs centaines de degrés) et avec un mélange bien dosé.',
        { liste: [
          '**Sonde lambda amont** (avant le catalyseur) : mesure l\'oxygène restant dans les gaz. Le calculateur corrige l\'injection pour garder le mélange idéal (**lambda = 1**, environ 14,7 kg d\'air pour 1 kg d\'essence).',
          '**Sonde lambda aval** (après le catalyseur) : surveille l\'efficacité du catalyseur.'
        ] },
        { retenir: 'Des **ratés d\'allumage** envoient de l\'essence imbrûlée dans le catalyseur : il surchauffe et peut être détruit.' }
      ]
    },
    {
      titre: 'La dépollution diesel',
      sousTheme: 'diesel',
      contenu: [
        'Un diesel rejette surtout des **particules** (suies) et des **oxydes d\'azote (NOx)**.',
        { liste: [
          '**Catalyseur d\'oxydation** : traite le CO et les HC.',
          '**Filtre à particules (FAP)** : retient les suies, puis les brûle quand il est assez chaud : c\'est la **régénération**. Sur petits trajets, il n\'a pas le temps de se régénérer et se colmate.',
          '**Vanne EGR** : renvoie une partie des gaz d\'échappement à l\'admission. La combustion est moins chaude, donc produit moins de NOx. Elle s\'encrasse avec le temps.',
          '**SCR et AdBlue** : on injecte de l\'**AdBlue** (solution d\'urée) dans l\'échappement pour transformer les NOx en azote et en eau. Si le réservoir d\'AdBlue est vide, le véhicule peut refuser de redémarrer.'
        ] },
        { attention: 'Supprimer un filtre à particules ou une vanne EGR est **interdit**. Le véhicule est refusé au contrôle technique.' }
      ]
    },
    {
      titre: 'Voyant moteur et diagnostic',
      sousTheme: 'controle',
      contenu: [
        'Les véhicules ont un système d\'**autodiagnostic** (OBD) : le calculateur surveille les organes de dépollution et du moteur. En cas de défaut, il **mémorise un code** et allume le **voyant moteur** (orange).',
        'On lit les codes avec une **valise de diagnostic**, branchée sur la **prise OBD** (sous le tableau de bord).',
        { liste: [
          'Voyant **fixe** : défaut à faire contrôler.',
          'Voyant **clignotant** : ratés graves, risque pour le catalyseur. Réduire l\'allure et faire contrôler au plus vite.'
        ] },
        { retenir: 'Effacer un code ne répare rien : si le défaut est toujours là, le voyant se rallume. On cherche d\'abord la **cause**.' }
      ]
    }
  ],

  cartes: [
    { id: 'depol-c1', sousTheme: 'echappement', recto: 'Les éléments d\'une ligne d\'échappement ?', verso: '**Collecteur, catalyseur (et FAP), sondes, silencieux, supports**.' },
    { id: 'depol-c2', sousTheme: 'echappement', recto: 'Dangers d\'une fuite d\'échappement près du moteur ?', verso: '**Monoxyde de carbone** dans l\'habitacle, bruit, mesure des sondes faussée.' },
    { id: 'depol-c3', sousTheme: 'essence', recto: 'Les 3 polluants traités par le catalyseur 3 voies ?', verso: '**CO, HC et NOx**.' },
    { id: 'depol-c4', sousTheme: 'essence', recto: 'Rôle de la sonde lambda amont ?', verso: 'Mesurer l\'**oxygène** dans les gaz pour que le calculateur règle le **mélange**.' },
    { id: 'depol-c5', sousTheme: 'essence', recto: 'Rôle de la sonde lambda aval ?', verso: 'Surveiller l\'**efficacité du catalyseur**.' },
    { id: 'depol-c6', sousTheme: 'essence', recto: 'Mélange idéal air-essence (lambda = 1) ?', verso: 'Environ **14,7 kg d\'air** pour 1 kg d\'essence.' },
    { id: 'depol-c7', sousTheme: 'diesel', recto: 'Rôle du filtre à particules ?', verso: '**Retenir les suies**, puis les **brûler** (régénération).' },
    { id: 'depol-c8', sousTheme: 'diesel', recto: 'Rôle de la vanne EGR ?', verso: 'Recycler une partie des gaz d\'échappement pour **réduire les NOx**.' },
    { id: 'depol-c9', sousTheme: 'diesel', recto: 'Rôle de l\'AdBlue (système SCR) ?', verso: 'Transformer les **NOx** en **azote** et en **eau**.' },
    { id: 'depol-c10', sousTheme: 'controle', recto: 'Que veut dire OBD ?', verso: '**Autodiagnostic embarqué** : le calculateur surveille et mémorise les défauts. Prise de diagnostic standard.' },
    { id: 'depol-c11', sousTheme: 'controle', recto: 'Voyant moteur qui clignote ?', verso: '**Ratés graves** : risque pour le catalyseur. Réduire l\'allure et faire contrôler vite.' },
    { id: 'depol-c12', sousTheme: 'controle', recto: 'Peut-on supprimer un FAP ou une vanne EGR ?', verso: '**Non, c\'est interdit** : refus au contrôle technique.' }
  ],

  questions: [
    {
      id: 'depol-q1', sousTheme: 'echappement', type: 'qcm',
      enonce: 'Quel est le rôle du silencieux d\'échappement ?',
      choix: ['Réduire le bruit des gaz d\'échappement', 'Retenir les particules', 'Refroidir le moteur', 'Mesurer l\'oxygène des gaz'],
      bonne: 0,
      explication: 'Les gaz sortent du moteur par à-coups très bruyants. Le **silencieux** les détend et atténue le bruit.'
    },
    {
      id: 'depol-q2', sousTheme: 'echappement', type: 'qcm',
      enonce: 'Une fuite d\'échappement près du moteur : quel danger pour les occupants ?',
      choix: ['Du monoxyde de carbone peut entrer dans l\'habitacle', 'Les freins vont surchauffer', 'Le liquide de refroidissement va geler', 'Aucun danger, seulement du bruit'],
      bonne: 0,
      explication: 'Le **monoxyde de carbone** est inodore et mortel. Une fuite d\'échappement se répare sans attendre.'
    },
    {
      id: 'depol-q3', sousTheme: 'essence', type: 'qcm',
      enonce: 'Quels polluants le catalyseur 3 voies d\'un moteur essence traite-t-il ?',
      choix: ['Le CO, les HC et les NOx', 'Seulement le CO2', 'Seulement les particules', 'L\'oxygène et l\'azote'],
      bonne: 0,
      explication: '« 3 voies » : il traite les **3 polluants** CO, HC et NOx, transformés en CO2, eau et azote.'
    },
    {
      id: 'depol-q4', sousTheme: 'essence', type: 'qcm',
      enonce: 'Que mesure la sonde lambda ?',
      choix: ['L\'oxygène restant dans les gaz d\'échappement', 'La température du liquide de refroidissement', 'La pression d\'huile', 'Le régime moteur'],
      bonne: 0,
      explication: 'Selon l\'**oxygène** mesuré, le calculateur sait si le mélange est trop riche ou trop pauvre, et corrige l\'injection.'
    },
    {
      id: 'depol-q5', sousTheme: 'diesel', type: 'qcm',
      enonce: 'Quel est le rôle du filtre à particules (FAP) ?',
      choix: ['Retenir les suies contenues dans les gaz d\'échappement', 'Filtrer l\'air admis', 'Filtrer le gazole', 'Réduire le bruit'],
      bonne: 0,
      explication: 'Le **FAP** retient les suies, puis les brûle lors de la régénération.'
    },
    {
      id: 'depol-q6', sousTheme: 'diesel', type: 'qcm',
      enonce: 'À quoi sert l\'AdBlue sur un diesel équipé d\'un système SCR ?',
      choix: ['À réduire les oxydes d\'azote (NOx)', 'À nettoyer les injecteurs', 'À remplacer le gazole en hiver', 'À graisser le turbo'],
      bonne: 0,
      explication: 'Injecté dans l\'échappement, l\'**AdBlue** transforme les NOx en azote et en eau. Il a son propre réservoir.'
    },
    {
      id: 'depol-q7', sousTheme: 'diesel', type: 'vf',
      enonce: 'Vrai ou faux : on peut supprimer le filtre à particules si le client le demande.',
      choix: ['Vrai', 'Faux'],
      bonne: 1,
      explication: 'Faux : c\'est **interdit**. Le véhicule pollue davantage et il est refusé au contrôle technique.'
    },
    {
      id: 'depol-q8', sousTheme: 'controle', type: 'qcm',
      enonce: 'Que signale le voyant moteur orange allumé ?',
      choix: ['Le calculateur a détecté un défaut du moteur ou de la dépollution', 'Il faut faire le plein', 'Le liquide de frein est bas', 'Une porte est mal fermée'],
      bonne: 0,
      explication: 'Le système d\'**autodiagnostic** a mémorisé un code défaut. On le lit à la valise pour trouver la cause.'
    },
    {
      id: 'depol-q9', sousTheme: 'controle', type: 'qcm',
      enonce: 'Avec quel outil lit-on les codes défauts mémorisés par le calculateur ?',
      choix: ['Une valise de diagnostic branchée sur la prise OBD', 'Un réfractomètre', 'Un manomètre de pression d\'huile', 'Une clé dynamométrique'],
      bonne: 0,
      explication: 'La **prise OBD** (souvent sous le tableau de bord) donne accès aux calculateurs. La **valise** lit et efface les codes.'
    },
    {
      id: 'depol-q10', sousTheme: 'echappement', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi la ligne d\'échappement est-elle accrochée par des supports en caoutchouc ?',
      choix: ['Pour absorber les vibrations du moteur et laisser la ligne se dilater en chauffant', 'Pour l\'isoler électriquement', 'Pour refroidir les gaz', 'Pour réduire la pollution'],
      bonne: 0,
      explication: 'La ligne bouge avec le moteur et s\'allonge en chauffant. Fixée rigidement, elle se fissurerait. Un support cassé donne des **bruits** et des fuites.'
    },
    {
      id: 'depol-q11', sousTheme: 'essence', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi un catalyseur dépollue-t-il mal pendant les premières minutes après un démarrage à froid ?',
      choix: ['Il doit être chaud, à plusieurs centaines de degrés, pour fonctionner', 'Il est vide de gaz au démarrage', 'La sonde lambda est éteinte la nuit', 'Il ne marche qu\'à haute vitesse'],
      bonne: 0,
      explication: 'Les réactions du catalyseur ne démarrent qu\'à **haute température**. Les petits trajets à froid sont donc les plus polluants.'
    },
    {
      id: 'depol-q12', sousTheme: 'diesel', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi le filtre à particules se colmate-t-il sur une voiture qui ne fait que de petits trajets en ville ?',
      choix: ['Il ne chauffe pas assez pour brûler les suies (régénération)', 'Il prend l\'eau', 'Il manque d\'AdBlue', 'L\'huile moteur est trop neuve'],
      bonne: 0,
      explication: 'La régénération demande des gaz **très chauds**, donc un moteur qui travaille un moment. En ville, les suies s\'accumulent.'
    },
    {
      id: 'depol-q13', sousTheme: 'diesel', type: 'qcm', niveau: 2,
      enonce: 'Comment la vanne EGR réduit-elle les oxydes d\'azote (NOx) ?',
      choix: ['Elle renvoie une partie des gaz d\'échappement à l\'admission : la combustion est moins chaude', 'Elle filtre les particules', 'Elle injecte de l\'AdBlue', 'Elle augmente la pression du turbo'],
      bonne: 0,
      explication: 'Les NOx se forment surtout à **très haute température**. Les gaz recyclés, pauvres en oxygène, refroidissent la combustion.'
    },
    {
      id: 'depol-q14', sousTheme: 'controle', type: 'qcm', niveau: 2,
      enonce: 'Le voyant moteur clignote et le moteur tremble. Que conseiller au client ?',
      choix: ['Réduire l\'allure et faire contrôler rapidement : les ratés peuvent détruire le catalyseur', 'Continuer à rouler normalement', 'Accélérer fort pour décrasser le moteur', 'Ajouter de l\'AdBlue'],
      bonne: 0,
      explication: 'Un voyant **clignotant** signale des ratés graves : l\'essence imbrûlée brûle dans le catalyseur et le fait surchauffer.'
    },
    {
      id: 'depol-q15', sousTheme: 'echappement', type: 'qcm', niveau: 3,
      enonce: 'Une fuite d\'échappement se trouve juste avant la sonde lambda amont. Quel effet sur le moteur essence ?',
      choix: ['La sonde voit trop d\'oxygène : le calculateur croit le mélange trop pauvre et l\'enrichit à tort', 'Aucun effet sur le mélange', 'Le moteur ne peut plus démarrer', 'La sonde voit moins d\'oxygène et le calculateur appauvrit le mélange'],
      bonne: 0,
      explication: 'Par la fuite, de l\'**air extérieur** est aspiré dans le flux de gaz. La sonde mesure trop d\'oxygène : la correction est faussée, la consommation et la pollution augmentent.'
    },
    {
      id: 'depol-q16', sousTheme: 'essence', type: 'qcm', niveau: 3,
      enonce: 'Moteur essence : la sonde lambda aval donne le même signal que la sonde amont. Que peut-on en conclure ?',
      choix: ['Le catalyseur n\'agit plus : il est probablement usé', 'Le catalyseur est neuf et parfait', 'La batterie est faible', 'Le filtre à air est bouché'],
      bonne: 0,
      explication: 'Un catalyseur en bon état « lisse » l\'oxygène : la sonde aval reste stable. Si elle **recopie** la sonde amont, le catalyseur ne fait plus son travail.'
    },
    {
      id: 'depol-q17', sousTheme: 'diesel', type: 'qcm', niveau: 3,
      enonce: 'Diesel : voyant du filtre à particules allumé et perte de puissance. Le client ne fait que de petits trajets. Que faire en premier, si le constructeur le permet ?',
      choix: ['Un trajet sur voie rapide à régime soutenu, ou une régénération forcée à la valise', 'Retirer le filtre à particules', 'Laisser tourner au ralenti une heure', 'Vidanger la boîte de vitesses'],
      bonne: 0,
      explication: 'Le FAP est colmaté faute de régénération. On lui donne l\'occasion de **chauffer** (trajet ou régénération forcée), puis on cherche s\'il y a une autre cause.'
    },
    {
      id: 'depol-q18', sousTheme: 'controle', type: 'qcm', niveau: 3,
      enonce: 'Après une réparation, on efface les codes défauts et le voyant moteur se rallume tout de suite. Qu\'en déduire ?',
      choix: ['Le défaut est toujours présent : la cause n\'a pas été réparée', 'La valise de diagnostic est en panne', 'Il suffit d\'effacer encore', 'C\'est normal après un effacement'],
      bonne: 0,
      explication: 'Effacer le code ne répare rien. Si le calculateur détecte encore le défaut, il le **mémorise à nouveau**. Il faut chercher la vraie cause.'
    }
  ]
});
