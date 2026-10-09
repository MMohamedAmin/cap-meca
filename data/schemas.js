// Schémas à légender (images de images/schemas/, crédits dans data/images.js).
// Chargé APRÈS les chapitres : chaque schéma devient une question « place les étiquettes »
// (voir CAP.ajouterSchemas). L'élève glisse chaque nom à côté de sa pièce.
// Zone : { id (ne change jamais), nom, role, x, y, cote?, px?, py? }
//   x, y : position de l'étiquette, en % de la largeur et de la hauteur de l'image ;
//   cote : côté où l'étiquette s'affiche par rapport au point (g, d, h, b ; centrée par défaut) ;
//   px, py : pièce visée (en %), quand l'image n'a pas son propre trait de rappel.
// largeur : largeur d'affichage maximale (px) ; largeurMin : en dessous, l'image défile de côté
// (téléphone) pour que les étiquettes restent lisibles.
CAP.ajouterSchemas([
  {
    id: 'moteur-coupe',
    chapitre: 'moteur',
    sousTheme: 'organes',
    titre: 'Coupe d\'un moteur 4 temps',
    image: 'schema-moteur-coupe',
    largeur: 420,
    explication: 'Le **piston** monte et descend dans le cylindre ; la **bielle** transmet ce mouvement au **vilebrequin**, qui tourne. En haut, la culasse porte les **soupapes**, ouvertes par les **arbres à cames**, et la **bougie**.',
    zones: [
      { id: 'arbre-ech', nom: 'Arbre à cames d\'échappement', role: 'ouvre les soupapes d\'échappement (en rouge).', x: 8, y: 8 },
      { id: 'bougie', nom: 'Bougie d\'allumage', role: 'produit l\'étincelle qui enflamme le mélange (moteur essence).', x: 49, y: 7 },
      { id: 'arbre-adm', nom: 'Arbre à cames d\'admission', role: 'ouvre les soupapes d\'admission (en bleu).', x: 92, y: 7 },
      { id: 'soupapes', nom: 'Soupapes', role: 'ouvrent et ferment les conduits d\'admission et d\'échappement.', x: 91, y: 24 },
      { id: 'chambres-eau', nom: 'Chambres d\'eau', role: 'passages du liquide de refroidissement autour du cylindre et dans la culasse.', x: 9, y: 37 },
      { id: 'piston', nom: 'Piston', role: 'reçoit la poussée des gaz et coulisse dans le cylindre.', x: 91, y: 52 },
      { id: 'bielle', nom: 'Bielle', role: 'relie le piston au vilebrequin.', x: 91, y: 69 },
      { id: 'vilebrequin', nom: 'Vilebrequin', role: 'transforme le va-et-vient du piston en rotation.', x: 91, y: 89 }
    ]
  },
  {
    id: 'clim-circuit',
    chapitre: 'climatisation',
    sousTheme: 'principe',
    titre: 'Circuit de climatisation (principe)',
    image: 'schema-clim-circuit',
    largeur: 640,
    explication: 'Le fluide tourne toujours dans le même sens : **compresseur → condenseur → détendeur → évaporateur**, puis retour au compresseur. En rouge, le côté chaud (haute pression) ; en bleu, le côté froid (basse pression).',
    zones: [
      { id: 'condenseur', nom: 'Condenseur', role: 'à l\'avant du véhicule : le fluide chaud y cède sa chaleur à l\'air extérieur et redevient liquide.', x: 24, y: 49.5 },
      { id: 'detendeur', nom: 'Détendeur', role: 'fait chuter la pression du fluide, qui se refroidit fortement.', x: 46, y: 24 },
      { id: 'evaporateur', nom: 'Évaporateur', role: 'dans l\'habitacle : le fluide s\'évapore en prenant la chaleur de l\'air soufflé, qui ressort froid.', x: 68, y: 49.5 },
      { id: 'compresseur', nom: 'Compresseur', role: 'entraîné par le moteur, il aspire le fluide gazeux et le comprime (haute pression, haute température).', x: 46.5, y: 76 }
    ]
  },
  {
    id: 'freinage-circuit',
    chapitre: 'freinage',
    sousTheme: 'hydraulique',
    niveau: 2,
    titre: 'Circuit de freinage',
    image: 'schema-freinage-circuit',
    largeurMin: 620,
    explication: 'La **pédale** pousse le **servofrein**, qui aide le conducteur ; le **maître-cylindre** met le liquide sous pression. Le liquide va aux freins avant et, par le **compensateur**, aux freins arrière. Le **frein de stationnement** agit par câble sur l\'arrière.',
    zones: [
      { id: 'frein-avant', nom: 'Frein à disque avant', role: 'l\'étrier serre les plaquettes sur le disque.', x: 7.2, y: 50 },
      { id: 'bocal', nom: 'Bocal de liquide de frein', role: 'réserve de liquide ; le niveau doit rester entre MINI et MAXI.', x: 28.2, y: 31 },
      { id: 'maitre-cylindre', nom: 'Maître-cylindre', role: 'transforme l\'effort sur la pédale en pression hydraulique, envoyée dans les deux circuits.', x: 33, y: 52, cote: 'b' },
      { id: 'servofrein', nom: 'Servofrein', role: 'multiplie l\'effort du conducteur grâce à la dépression.', x: 43.5, y: 72 },
      { id: 'pedale', nom: 'Pédale de frein', role: 'commande du conducteur : elle pousse la tige du servofrein.', x: 61, y: 90.4 },
      { id: 'compensateur', nom: 'Compensateur de freinage', role: 'limite la pression vers l\'arrière selon la charge, pour éviter le blocage des roues arrière.', x: 68.9, y: 51 },
      { id: 'frein-stationnement', nom: 'Levier de frein de stationnement', role: 'commande mécanique (par câble) des freins arrière.', x: 60.3, y: 22.8 },
      { id: 'tambour', nom: 'Frein à tambour arrière', role: 'les mâchoires, poussées par le cylindre de roue, frottent sur le tambour.', x: 78.7, y: 84.5 }
    ]
  },
  {
    id: 'embrayage-eclate',
    chapitre: 'transmission',
    sousTheme: 'embrayage',
    niveau: 2,
    titre: 'Embrayage en vue éclatée',
    image: 'schema-embrayage-eclate',
    largeurMin: 560,
    explication: 'Embrayé : le **diaphragme** pousse le **plateau de pression**, qui pince le **disque** contre le **volant moteur** ; le moteur entraîne la boîte. Débrayé : la **fourchette** pousse la **butée** sur le diaphragme et le disque est libéré.',
    zones: [
      { id: 'vilebrequin', nom: 'Vilebrequin', role: 'sort du moteur et fait tourner le volant moteur.', x: 9, y: 8, px: 7.4, py: 26 },
      { id: 'volant', nom: 'Volant moteur', role: 'fixé sur le vilebrequin ; le disque est pincé contre sa face.', x: 16, y: 86, px: 23, py: 57 },
      { id: 'disque', nom: 'Disque d\'embrayage', role: 'garni de matériau de friction, il est cannelé sur l\'arbre d\'entrée de boîte.', x: 30, y: 7, px: 29.8, py: 23 },
      { id: 'plateau', nom: 'Plateau de pression', role: 'presse le disque contre le volant moteur.', x: 35, y: 95, px: 35, py: 62 },
      { id: 'diaphragme', nom: 'Diaphragme', role: 'ressort en forme de rondelle qui pousse le plateau de pression.', x: 51, y: 8, px: 49, py: 33 },
      { id: 'couvercle', nom: 'Couvercle', role: 'carter du mécanisme, fixé sur le volant moteur : il porte le diaphragme et le plateau.', x: 55, y: 86, px: 56.4, py: 76 },
      { id: 'fourchette', nom: 'Fourchette', role: 'pousse la butée ; elle est commandée par la pédale (câble ou hydraulique).', x: 76, y: 8, px: 74, py: 25 },
      { id: 'butee', nom: 'Butée d\'embrayage', role: 'appuie sur le centre du diaphragme quand on débraye.', x: 73, y: 95, px: 68.5, py: 66 },
      { id: 'arbre-boite', nom: 'Arbre d\'entrée de boîte', role: 'arbre primaire de la boîte de vitesses, entraîné par le disque.', x: 91, y: 86, px: 92, py: 76 }
    ]
  },
  {
    id: 'pneu-structure',
    chapitre: 'liaison-au-sol',
    sousTheme: 'pneus',
    niveau: 2,
    titre: 'Structure d\'un pneu radial',
    image: 'schema-pneu-structure',
    largeur: 640, largeurMin: 480,
    explication: 'La **carcasse** va d\'un talon à l\'autre ; les **nappes sommet** rigidifient la **bande de roulement**. Le **talon**, renforcé par la **tringle**, tient le pneu sur la jante, et la **gomme intérieure** garde l\'air.',
    zones: [
      { id: 'bande', nom: 'Bande de roulement', role: 'partie en contact avec la route ; elle porte les sculptures.', x: 29.8, y: 7.3, cote: 'g' },
      { id: 'sculptures', nom: 'Sculptures', role: 'creux qui évacuent l\'eau ; profondeur minimale légale : 1,6 mm.', x: 67.7, y: 4, cote: 'd' },
      { id: 'epaulement', nom: 'Épaulement', role: 'bord de la bande de roulement ; il s\'use vite si le pneu est sous-gonflé.', x: 22.5, y: 23.6, cote: 'g' },
      { id: 'flanc', nom: 'Flanc', role: 'côté du pneu, il porte le marquage (dimensions, indices, date).', x: 18.5, y: 53.9, cote: 'g' },
      { id: 'talon', nom: 'Talon', role: 'partie qui s\'appuie sur la jante et assure l\'étanchéité.', x: 29.8, y: 90.3, cote: 'g' },
      { id: 'tringle', nom: 'Tringle', role: 'cercle de fils d\'acier dans le talon : il tient le pneu sur la jante.', x: 45.7, y: 82.3, cote: 'd' },
      { id: 'carcasse', nom: 'Carcasse', role: 'nappes de câbles qui vont d\'un talon à l\'autre (pneu radial) : la structure du pneu.', x: 47.8, y: 34.2, cote: 'g' },
      { id: 'gomme', nom: 'Gomme intérieure', role: 'couche étanche qui garde l\'air dans un pneu sans chambre.', x: 51.75, y: 45.8, cote: 'b' },
      { id: 'nappes', nom: 'Nappes sommet', role: 'câbles d\'acier sous la bande de roulement : ils la rigidifient.', x: 67.4, y: 36.5, cote: 'd' }
    ]
  }
]);
