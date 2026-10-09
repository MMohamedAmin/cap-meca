CAP.ajouterChapitre({
  id: 'atelier',
  titre: 'Accueil client et atelier',
  icone: '📋',
  description: 'Réception du véhicule, ordre de réparation, entretien périodique et contrôle technique, restitution au client.',
  sousThemes: {
    accueil: 'Accueil et réception',
    ordre: 'Ordre de réparation',
    entretien: 'Entretien périodique',
    restitution: 'Contrôle et restitution'
  },

  fiche: [
    {
      titre: 'Accueil et réception du véhicule',
      sousTheme: 'accueil',
      contenu: [
        'L\'accueil donne la première image du garage. On **écoute** le client et on note précisément ce qu\'il décrit.',
        { liste: [
          'Poser les bonnes questions : **quand** le problème apparaît, dans **quelles conditions** (à froid, en virage, au freinage, à quelle vitesse), **depuis quand**, **d\'où** vient le bruit.',
          'Faire le tour du véhicule **avec le client** : kilométrage, niveau de carburant, rayures et dégâts déjà présents, objets de valeur.',
          'Avant de monter dans le véhicule : **housses de siège, tapis, protège-volant**, et couvre-ailes quand on ouvre le capot.'
        ] },
        { retenir: 'Une panne qui n\'apparaît pas à l\'arrêt se cherche souvent par un **essai routier**, si possible avec le client.' }
      ]
    },
    {
      titre: 'L\'ordre de réparation',
      sousTheme: 'ordre',
      contenu: [
        'L\'**ordre de réparation** (OR) décrit les travaux à faire. **Signé par le client**, il autorise le garage à intervenir.',
        { liste: [
          'Identification du client et du véhicule : immatriculation, **VIN** (numéro d\'identification, 17 caractères, sur le certificat d\'immatriculation et sur le véhicule), kilométrage.',
          'Travaux demandés et, si besoin, devis.',
          'Toute **panne découverte** pendant les travaux se signale au client : on attend son **accord** avant de réparer.'
        ] },
        'Le VIN identifie exactement la version du véhicule : c\'est lui qu\'on utilise pour **commander les bonnes pièces**.'
      ]
    },
    {
      titre: 'Entretien périodique et contrôle technique',
      sousTheme: 'entretien',
      contenu: [
        'Le **carnet d\'entretien** (ou les données du constructeur) indique les opérations à faire : vidange et filtres, courroie de distribution, liquide de frein, bougies…',
        'Les échéances sont données en **kilomètres** ou en **temps** : c\'est la **première atteinte** qui compte.',
        'En France, une voiture particulière passe son premier **contrôle technique** avant ses **4 ans**, puis **tous les 2 ans**. Certaines défaillances imposent une **contre-visite** après réparation.'
      ]
    },
    {
      titre: 'Contrôle et restitution',
      sousTheme: 'restitution',
      contenu: [
        { liste: [
          '**Contrôler** le travail : serrages, niveaux, absence de fuite, voyants éteints.',
          'Faire un **essai routier** après une intervention sur les freins, la direction ou une panne de comportement.',
          '**Remettre à zéro** l\'indicateur d\'entretien après une révision.',
          'Retirer les **protections** et rendre le véhicule propre.',
          '**Expliquer** au client les travaux réalisés et la facture, et lui signaler ce qui sera à prévoir.'
        ] },
        { retenir: 'Un client qui revient pour une fuite après une vidange : on vérifie d\'abord le **bouchon de vidange** (joint, serrage) et le **filtre à huile**.' }
      ]
    }
  ],

  cartes: [
    { id: 'atel-c1', sousTheme: 'accueil', recto: 'Protections à poser avant de monter dans le véhicule ?', verso: '**Housses de siège, tapis, protège-volant**, et couvre-ailes si on ouvre le capot.' },
    { id: 'atel-c2', sousTheme: 'accueil', recto: 'Que noter à la réception du véhicule ?', verso: '**Kilométrage, carburant, dégâts** déjà présents, objets de valeur.' },
    { id: 'atel-c3', sousTheme: 'accueil', recto: 'Questions à poser sur une panne ?', verso: '**Quand**, **dans quelles conditions**, **depuis quand**, **d\'où** ça vient.' },
    { id: 'atel-c4', sousTheme: 'ordre', recto: 'Rôle de l\'ordre de réparation ?', verso: 'Décrire les travaux et, **signé par le client**, autoriser le garage à les faire.' },
    { id: 'atel-c5', sousTheme: 'ordre', recto: 'Une autre panne est découverte pendant les travaux ?', verso: '**Prévenir le client** et attendre son **accord** avant de réparer.' },
    { id: 'atel-c6', sousTheme: 'ordre', recto: 'Qu\'est-ce que le VIN ?', verso: 'Le **numéro d\'identification** du véhicule (17 caractères), sur la carte grise et sur le véhicule.' },
    { id: 'atel-c7', sousTheme: 'entretien', recto: 'Échéance « en kilomètres ou en années » : laquelle compte ?', verso: 'La **première atteinte**.' },
    { id: 'atel-c8', sousTheme: 'entretien', recto: 'Contrôle technique d\'une voiture particulière ?', verso: 'Avant ses **4 ans**, puis **tous les 2 ans**.' },
    { id: 'atel-c9', sousTheme: 'entretien', recto: 'Où trouver les opérations d\'entretien d\'un véhicule ?', verso: 'Dans le **carnet d\'entretien** ou les données du constructeur.' },
    { id: 'atel-c10', sousTheme: 'restitution', recto: 'Avant de rendre le véhicule ?', verso: '**Contrôler** le travail, **essai** si besoin, retirer les **protections**, **expliquer** au client.' },
    { id: 'atel-c11', sousTheme: 'restitution', recto: 'Après une révision, au tableau de bord ?', verso: '**Remettre à zéro** l\'indicateur d\'entretien.' },
    { id: 'atel-c12', sousTheme: 'restitution', recto: 'Fuite d\'huile juste après une vidange ?', verso: 'Vérifier le **bouchon de vidange** (joint, serrage) et le **filtre à huile**.' }
  ],

  questions: [
    {
      id: 'atel-q1', sousTheme: 'accueil', type: 'qcm',
      enonce: 'Avant de monter dans le véhicule d\'un client, que met-on en place ?',
      choix: ['Des protections : housses de siège, tapis, protège-volant', 'Rien de particulier', 'Une bâche sur le toit', 'Un autocollant du garage'],
      bonne: 0,
      explication: 'On rend le véhicule **aussi propre** qu\'on l\'a reçu : les protections évitent les traces de mains et de chaussures.'
    },
    {
      id: 'atel-q2', sousTheme: 'accueil', type: 'qcm',
      enonce: 'Que note-t-on à la réception du véhicule, avec le client ?',
      choix: ['Le kilométrage, le niveau de carburant et les dégâts déjà présents', 'Seulement le prix des travaux', 'La couleur préférée du client', 'Rien : on verra plus tard'],
      bonne: 0,
      explication: 'Ce relevé, fait **avec le client**, évite les malentendus : une rayure déjà présente ne sera pas reprochée au garage.'
    },
    {
      id: 'atel-q3', sousTheme: 'ordre', type: 'qcm',
      enonce: 'Quel document autorise le garage à faire les travaux ?',
      choix: ['L\'ordre de réparation signé par le client', 'La carte grise', 'Le permis de conduire du client', 'La facture'],
      bonne: 0,
      explication: 'L\'**ordre de réparation** décrit les travaux. Sa signature vaut accord du client.'
    },
    {
      id: 'atel-q4', sousTheme: 'ordre', type: 'qcm',
      enonce: 'Pendant une vidange, on découvre que les plaquettes avant sont usées. Que faire ?',
      choix: ['Prévenir le client et obtenir son accord avant de les changer', 'Les changer sans rien dire', 'Ne rien faire et ne rien dire', 'Les changer et les facturer sans prévenir'],
      bonne: 0,
      explication: 'On ne fait **jamais** de travaux non autorisés. Mais on prévient toujours d\'un défaut, surtout quand il touche à la sécurité.'
    },
    {
      id: 'atel-q5', sousTheme: 'ordre', type: 'qcm',
      enonce: 'Où trouve-t-on le numéro d\'identification du véhicule (VIN) ?',
      choix: ['Sur le certificat d\'immatriculation (carte grise) et sur le véhicule', 'Sur le permis de conduire', 'Sur les pneus', 'Sur le carnet de chèques du client'],
      bonne: 0,
      explication: 'Le **VIN** (17 caractères) figure sur la carte grise, sur une plaque du constructeur et frappé sur la caisse.'
    },
    {
      id: 'atel-q6', sousTheme: 'entretien', type: 'qcm',
      enonce: 'Où trouve-t-on le programme d\'entretien d\'un véhicule ?',
      choix: ['Dans le carnet d\'entretien ou les données du constructeur', 'Sur le pare-brise', 'Dans le code de la route', 'Sur la carte grise'],
      bonne: 0,
      explication: 'Le **constructeur** fixe les opérations et leurs échéances, selon le moteur et l\'usage.'
    },
    {
      id: 'atel-q7', sousTheme: 'entretien', type: 'qcm',
      enonce: 'En France, quand une voiture particulière neuve passe-t-elle son premier contrôle technique ?',
      choix: ['Avant ses 4 ans', 'Après 1 an', 'Après 10 ans', 'Jamais'],
      bonne: 0,
      explication: 'Premier contrôle avant les **4 ans** du véhicule, puis tous les **2 ans**.'
    },
    {
      id: 'atel-q8', sousTheme: 'entretien', type: 'qcm',
      enonce: 'Après le premier contrôle technique, tous les combien une voiture particulière y retourne-t-elle ?',
      choix: ['Tous les 2 ans', 'Tous les ans', 'Tous les 5 ans', 'Plus jamais'],
      bonne: 0,
      explication: 'Le contrôle technique revient **tous les 2 ans**. Certaines défaillances imposent en plus une contre-visite après réparation.'
    },
    {
      id: 'atel-q9', sousTheme: 'restitution', type: 'qcm',
      enonce: 'Avant de rendre le véhicule au client, que fait-on ?',
      choix: ['On contrôle le travail, on retire les protections et on explique les travaux', 'On donne les clés, sans rien dire', 'On vide le réservoir', 'On débranche la batterie'],
      bonne: 0,
      explication: 'La restitution est le dernier contact : un travail **vérifié** et **expliqué** donne confiance au client.'
    },
    {
      id: 'atel-q10', sousTheme: 'restitution', type: 'vf',
      enonce: 'Vrai ou faux : après une révision, on remet à zéro l\'indicateur d\'entretien du tableau de bord.',
      choix: ['Vrai', 'Faux'],
      bonne: 0,
      explication: 'Vrai : sinon, le voyant ou le message d\'entretien continue de s\'afficher, et la prochaine échéance est faussée.'
    },
    {
      id: 'atel-q11', sousTheme: 'accueil', type: 'qcm', niveau: 2,
      enonce: 'Un client dit seulement : « ça fait du bruit ». Que lui demander ?',
      choix: ['Quand et dans quelles conditions (à froid, en virage, au freinage, à quelle vitesse), et d\'où vient le bruit', 'Rien : on démonte tout', 'Seulement son nom', 'De revenir quand ça ne fera plus de bruit'],
      bonne: 0,
      explication: 'Les **conditions** d\'apparition orientent le diagnostic : un bruit au freinage, en virage ou à l\'accélération n\'a pas les mêmes causes.'
    },
    {
      id: 'atel-q12', sousTheme: 'ordre', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi relever le VIN, et pas seulement le modèle, pour commander une pièce ?',
      choix: ['Un même modèle existe en plusieurs versions : le VIN identifie exactement le véhicule', 'Le VIN donne le prix de la pièce', 'C\'est seulement une habitude', 'Le modèle n\'est écrit nulle part'],
      bonne: 0,
      explication: 'Moteur, année, options : deux voitures du même modèle peuvent avoir des pièces **différentes**. Le VIN évite la mauvaise commande.'
    },
    {
      id: 'atel-q13', sousTheme: 'entretien', type: 'qcm', niveau: 2,
      enonce: 'Vidange prévue « tous les 20 000 km ou tous les 2 ans ». Le client roule 5 000 km par an, et la dernière vidange date de 2 ans. Faut-il la faire ?',
      choix: ['Oui : c\'est la première échéance atteinte qui compte', 'Non : il n\'a roulé que 10 000 km', 'Seulement à 20 000 km', 'Seulement si l\'huile est noire'],
      bonne: 0,
      explication: 'Même peu utilisée, l\'huile **vieillit** : ses additifs s\'épuisent et elle se charge d\'humidité. L\'échéance de temps est atteinte.'
    },
    {
      id: 'atel-q14', sousTheme: 'restitution', type: 'qcm', niveau: 2,
      enonce: 'Pourquoi faire un essai routier après une réparation sur les freins ou la direction ?',
      choix: ['Pour vérifier en conditions réelles que la réparation est efficace et sûre', 'Pour faire le plein', 'Pour roder le moteur', 'Ce n\'est pas utile'],
      bonne: 0,
      explication: 'Ce sont des organes de **sécurité** : on s\'assure que tout fonctionne avant que le client reprenne la route.'
    },
    {
      id: 'atel-q15', sousTheme: 'accueil', type: 'qcm', niveau: 3,
      enonce: 'Un client se plaint d\'un claquement « qui va et vient ». À l\'arrêt, rien. Quelle démarche adopter ?',
      choix: ['Faire un essai routier avec le client pour reproduire le bruit et noter les conditions exactes', 'Remplacer les rotules au hasard', 'Dire au client que tout va bien', 'Démonter toute la suspension'],
      bonne: 0,
      explication: 'On ne répare bien que ce qu\'on a **constaté**. Avec le client à bord, on reproduit le bruit dans les mêmes conditions.'
    },
    {
      id: 'atel-q16', sousTheme: 'ordre', type: 'qcm', niveau: 3,
      enonce: 'En réparant une crevaison, on voit un soufflet de transmission fendu. Le client n\'est pas joignable. Que faire ?',
      choix: ['Faire seulement le travail autorisé, noter le défaut sur l\'ordre de réparation et en informer le client dès que possible', 'Remplacer la transmission complète', 'Ne rien noter', 'Changer le soufflet et le facturer sans accord'],
      bonne: 0,
      explication: 'Sans accord, pas de travaux. Mais le défaut est **noté** et **signalé** : le client décidera, et le garage a prévenu.'
    },
    {
      id: 'atel-q17', sousTheme: 'entretien', type: 'qcm', niveau: 3,
      enonce: 'Révision à 120 000 km. Courroie de distribution prévue « à 120 000 km ou 6 ans ». Elle a été changée il y a 7 ans, à 60 000 km. Que proposer ?',
      choix: ['Son remplacement : l\'échéance de temps est dépassée', 'Rien : elle n\'a fait que 60 000 km', 'Attendre qu\'elle fasse du bruit', 'Seulement une vidange'],
      bonne: 0,
      explication: 'Le caoutchouc **vieillit** même sans rouler. Une courroie qui casse peut détruire le moteur : on respecte la première échéance atteinte.'
    },
    {
      id: 'atel-q18', sousTheme: 'restitution', type: 'qcm', niveau: 3,
      enonce: 'Le lendemain d\'une vidange, le client revient : une tache d\'huile sous la voiture. Que vérifier en premier ?',
      choix: ['Le bouchon de vidange (joint, serrage) et le serrage du filtre à huile', 'Le liquide de frein', 'La pression des pneus', 'La batterie'],
      bonne: 0,
      explication: 'Ce sont les deux éléments touchés pendant la vidange. Un joint de bouchon non remplacé ou un filtre mal serré suffit à faire fuir.'
    }
  ]
});
