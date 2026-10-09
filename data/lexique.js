// Lexique : les mots du métier. Affiché par ordre alphabétique (l'ordre ici n'a pas d'importance).
// « chapitre » (facultatif) : id du chapitre lié. « image » (facultatif) : clé de data/images.js.
CAP.ajouterLexique([
  // Moteur
  { mot: 'Alésage', definition: 'Diamètre intérieur d\'un cylindre du moteur.', chapitre: 'moteur' },
  { mot: 'Arbre à cames', definition: 'Arbre muni de cames qui commandent l\'ouverture des soupapes. Il tourne deux fois moins vite que le vilebrequin.', chapitre: 'moteur', image: 'arbre-a-cames' },
  { mot: 'Bielle', definition: 'Pièce qui relie le piston au vilebrequin.', chapitre: 'moteur', image: 'piston-bielle' },
  { mot: 'Bougie d\'allumage', definition: 'Pièce qui produit l\'étincelle qui enflamme le mélange air-essence dans le cylindre (moteur essence).', chapitre: 'moteur', image: 'bougies' },
  { mot: 'Bougie de préchauffage', definition: 'Résistance qui chauffe la chambre de combustion d\'un moteur diesel pour faciliter le démarrage à froid.', chapitre: 'moteur' },
  { mot: 'Couple', definition: 'Effort de rotation, en newtons-mètres (N·m). Le couple moteur multiplié par la vitesse de rotation donne la puissance.', chapitre: 'moteur' },
  { mot: 'Courroie de distribution', definition: 'Courroie crantée qui entraîne l\'arbre à cames depuis le vilebrequin en gardant leur calage. Elle se remplace à l\'intervalle prévu par le constructeur.', chapitre: 'moteur', image: 'courroie-distribution' },
  { mot: 'Course', definition: 'Distance parcourue par le piston entre le PMH et le PMB.', chapitre: 'moteur' },
  { mot: 'Culasse', definition: 'Partie haute du moteur qui ferme les cylindres. Elle contient les chambres de combustion et les soupapes.', chapitre: 'moteur', image: 'culasse' },
  { mot: 'Cylindrée', definition: 'Volume balayé par les pistons : cylindrée unitaire × nombre de cylindres. Elle s\'exprime en cm³ ou en litres.', chapitre: 'moteur' },
  { mot: 'Injecteur', definition: 'Pièce qui pulvérise le carburant dans le moteur, au bon moment et en bonne quantité.', chapitre: 'moteur', image: 'injecteur' },
  { mot: 'Joint de culasse', definition: 'Joint placé entre la culasse et le bloc-cylindres. Il assure l\'étanchéité des gaz, de l\'huile et du liquide de refroidissement.', chapitre: 'moteur', image: 'joint-culasse' },
  { mot: 'Piston', definition: 'Pièce qui coulisse dans le cylindre et reçoit la pression des gaz de combustion.', chapitre: 'moteur', image: 'piston-bielle' },
  { mot: 'PMB', definition: 'Point mort bas : la position la plus basse du piston dans le cylindre.', chapitre: 'moteur' },
  { mot: 'PMH', definition: 'Point mort haut : la position la plus haute du piston dans le cylindre.', chapitre: 'moteur' },
  { mot: 'Rapport volumétrique', definition: 'Rapport entre le volume au-dessus du piston au PMB (cylindrée unitaire + chambre) et le volume de la chambre de combustion seule.', chapitre: 'moteur' },
  { mot: 'Segments', definition: 'Anneaux montés dans les gorges du piston. Ils assurent l\'étanchéité, évacuent la chaleur et raclent l\'huile.', chapitre: 'moteur', image: 'segments' },
  { mot: 'Soupape', definition: 'Clapet de la culasse qui ouvre ou ferme le passage des gaz : admission ou échappement.', chapitre: 'moteur' },
  { mot: 'Vilebrequin', definition: 'Arbre qui transforme le mouvement alternatif des pistons en rotation.', chapitre: 'moteur', image: 'vilebrequin' },

  // Alimentation et allumage
  { mot: 'Avance à l\'allumage', definition: 'Fait de déclencher l\'étincelle un peu avant le PMH, car la combustion prend du temps.', chapitre: 'alimentation' },
  { mot: 'Bobine d\'allumage', definition: 'Pièce qui transforme le 12 V en très haute tension pour faire jaillir l\'étincelle de la bougie.', chapitre: 'alimentation' },
  { mot: 'Échangeur (intercooler)', definition: 'Radiateur qui refroidit l\'air comprimé par le turbo : plus dense, il contient plus d\'oxygène.', chapitre: 'alimentation' },
  { mot: 'Filtre à air', definition: 'Filtre qui retient les poussières de l\'air admis. Encrassé, il fait perdre de la puissance.', chapitre: 'alimentation' },
  { mot: 'Rampe commune (common rail)', definition: 'Réservoir de gazole sous très haute pression qui alimente tous les injecteurs d\'un moteur diesel.', chapitre: 'alimentation' },
  { mot: 'Turbocompresseur', definition: 'Turbine entraînée par les gaz d\'échappement, qui fait tourner un compresseur pour pousser plus d\'air dans le moteur.', chapitre: 'alimentation' },

  // Dépollution et échappement
  { mot: 'AdBlue', definition: 'Solution d\'urée injectée dans l\'échappement des diesels équipés SCR, pour transformer les oxydes d\'azote en azote et en eau.', chapitre: 'depollution' },
  { mot: 'Catalyseur', definition: 'Élément de la ligne d\'échappement qui transforme les gaz polluants (CO, HC, NOx) en gaz moins nocifs. Il ne fonctionne que chaud.', chapitre: 'depollution' },
  { mot: 'Filtre à particules (FAP)', definition: 'Filtre de l\'échappement diesel qui retient les suies, puis les brûle pendant la régénération.', chapitre: 'depollution' },
  { mot: 'OBD', definition: 'Autodiagnostic embarqué : le calculateur surveille le moteur et la dépollution, mémorise les défauts et allume le voyant moteur. Prise de diagnostic standard.', chapitre: 'depollution' },
  { mot: 'Sonde lambda', definition: 'Capteur qui mesure l\'oxygène dans les gaz d\'échappement, pour que le calculateur règle le mélange air-carburant.', chapitre: 'depollution' },
  { mot: 'Vanne EGR', definition: 'Vanne qui renvoie une partie des gaz d\'échappement à l\'admission pour réduire les oxydes d\'azote.', chapitre: 'depollution' },

  // Éclairage et signalisation
  { mot: 'Commodo', definition: 'Manette sous le volant qui commande les feux, les clignotants ou les essuie-glaces.', chapitre: 'eclairage' },
  { mot: 'Relais', definition: 'Interrupteur commandé : un faible courant dans sa bobine (bornes 85-86) ferme un contact (30-87) qui laisse passer un fort courant.', chapitre: 'eclairage' },
  { mot: 'Réglophare', definition: 'Appareil qui sert à contrôler et régler la hauteur et l\'orientation du faisceau des projecteurs.', chapitre: 'eclairage' },
  { mot: 'Xénon', definition: 'Lampe de projecteur à décharge, alimentée par un ballast en très haute tension : on intervient toujours hors tension.', chapitre: 'eclairage' },

  // Climatisation
  { mot: 'Condenseur', definition: 'Échangeur placé à l\'avant du véhicule, où le fluide de climatisation cède sa chaleur à l\'air et redevient liquide.', chapitre: 'climatisation' },
  { mot: 'Détendeur', definition: 'Organe de la climatisation qui fait chuter la pression du fluide liquide, ce qui le refroidit fortement.', chapitre: 'climatisation' },
  { mot: 'Évaporateur', definition: 'Échangeur placé dans la planche de bord, où le fluide de climatisation s\'évapore en prenant la chaleur de l\'air de l\'habitacle.', chapitre: 'climatisation' },
  { mot: 'Fluide frigorigène', definition: 'Fluide qui transporte la chaleur dans la climatisation (R134a ou R1234yf). Il se récupère avec une station, jamais à l\'air libre.', chapitre: 'climatisation' },
  { mot: 'Pressostat', definition: 'Capteur de pression qui coupe le compresseur de climatisation si la pression est trop basse ou trop haute.', chapitre: 'climatisation' },

  // Lubrification
  { mot: 'Carter d\'huile', definition: 'Réservoir fixé sous le moteur, qui contient l\'huile.', chapitre: 'lubrification' },
  { mot: 'Clapet de décharge', definition: 'Clapet du circuit de graissage qui limite la pression d\'huile maximale.', chapitre: 'lubrification' },
  { mot: 'Crépine', definition: 'Filtre grossier placé à l\'entrée de la pompe à huile, au fond du carter.', chapitre: 'lubrification' },
  { mot: 'Jauge d\'huile', definition: 'Tige graduée qui permet de contrôler le niveau d\'huile moteur entre les repères mini et maxi.', chapitre: 'lubrification', image: 'jauge-huile' },
  { mot: 'Viscosité', definition: 'Résistance d\'une huile à l\'écoulement : plus elle est élevée, plus l\'huile est épaisse. Sur une 5W30, 5W concerne le froid et 30 le chaud.', chapitre: 'lubrification' },

  // Refroidissement
  { mot: 'Liquide de refroidissement', definition: 'Mélange d\'eau, de glycol (antigel) et d\'additifs qui circule dans le moteur pour évacuer la chaleur.', chapitre: 'refroidissement', image: 'bouchon-radiateur' },
  { mot: 'Motoventilateur', definition: 'Ventilateur électrique qui force l\'air à travers le radiateur, surtout à l\'arrêt et à basse vitesse.', chapitre: 'refroidissement' },
  { mot: 'Pompe à eau', definition: 'Pompe qui fait circuler le liquide de refroidissement dans le moteur et le radiateur.', chapitre: 'refroidissement' },
  { mot: 'Radiateur', definition: 'Échangeur où le liquide de refroidissement cède sa chaleur à l\'air extérieur.', chapitre: 'refroidissement' },
  { mot: 'Réfractomètre', definition: 'Appareil qui mesure la protection antigel du liquide de refroidissement.', chapitre: 'refroidissement' },
  { mot: 'Thermostat', definition: 'Vanne qui reste fermée moteur froid et s\'ouvre moteur chaud pour envoyer le liquide vers le radiateur.', chapitre: 'refroidissement' },
  { mot: 'Vase d\'expansion', definition: 'Réservoir qui absorbe la dilatation du liquide de refroidissement et permet de contrôler son niveau. On ne l\'ouvre jamais moteur chaud.', chapitre: 'refroidissement' },

  // Électricité
  { mot: 'Alternateur', definition: 'Générateur entraîné par la courroie d\'accessoires. Il recharge la batterie et alimente le véhicule quand le moteur tourne.', chapitre: 'electricite', image: 'alternateur' },
  { mot: 'Ampère (A)', definition: 'Unité de l\'intensité du courant électrique.', chapitre: 'electricite' },
  { mot: 'Capacité d\'une batterie', definition: 'Quantité d\'électricité qu\'une batterie peut fournir, en ampères-heures (Ah).', chapitre: 'electricite', image: 'batterie' },
  { mot: 'Démarreur', definition: 'Moteur électrique qui lance le moteur thermique en entraînant la couronne du volant moteur.', chapitre: 'electricite', image: 'demarreur' },
  { mot: 'Électrolyte', definition: 'Liquide d\'une batterie au plomb : de l\'acide sulfurique dilué. Il est corrosif : gants et lunettes.', chapitre: 'electricite' },
  { mot: 'Fusible', definition: 'Composant qui fond et coupe le circuit en cas de courant trop fort, pour protéger les fils et les appareils.', chapitre: 'electricite' },
  { mot: 'Multimètre', definition: 'Appareil qui mesure une tension, une intensité ou une résistance selon la position du sélecteur.', chapitre: 'electricite', image: 'multimetre' },
  { mot: 'Ohm (Ω)', definition: 'Unité de la résistance électrique.', chapitre: 'electricite' },
  { mot: 'Pont de diodes', definition: 'Ensemble de diodes de l\'alternateur qui transforme le courant alternatif en courant continu.', chapitre: 'electricite' },
  { mot: 'Volt (V)', definition: 'Unité de la tension électrique.', chapitre: 'electricite' },
  { mot: 'Watt (W)', definition: 'Unité de la puissance.', chapitre: 'electricite' },

  // Freinage
  { mot: 'ABS', definition: 'Système antiblocage des roues : il évite le blocage des roues lors d\'un freinage fort, pour garder le contrôle de la direction.', chapitre: 'freinage' },
  { mot: 'Cylindre de roue', definition: 'Organe hydraulique du frein à tambour dont les pistons écartent les mâchoires.', chapitre: 'freinage', image: 'tambour' },
  { mot: 'Disque de frein', definition: 'Disque fixé au moyeu et serré par les plaquettes. Il a une épaisseur minimale à respecter.', chapitre: 'freinage', image: 'disque' },
  { mot: 'DOT', definition: 'Norme des liquides de frein : DOT 3, DOT 4 et DOT 5.1 sont à base de glycol, le DOT 5 au silicone ne se mélange pas avec eux.', chapitre: 'freinage' },
  { mot: 'Étrier', definition: 'Pièce du frein à disque qui contient le ou les pistons et serre les plaquettes sur le disque.', chapitre: 'freinage', image: 'etrier' },
  { mot: 'Hygroscopique', definition: 'Qui absorbe l\'humidité de l\'air. C\'est le cas du liquide de frein : il faut le remplacer régulièrement.', chapitre: 'freinage' },
  { mot: 'Mâchoire', definition: 'Pièce garnie du frein à tambour (on dit aussi segment de frein), écartée contre le tambour par le cylindre de roue.', chapitre: 'freinage', image: 'tambour' },
  { mot: 'Maître-cylindre', definition: 'Organe qui transforme l\'effort sur la pédale de frein en pression hydraulique.', chapitre: 'freinage', image: 'maitre-cylindre' },
  { mot: 'Plaquette de frein', definition: 'Pièce garnie de matériau de friction, serrée contre le disque par l\'étrier. On les remplace toujours par essieu.', chapitre: 'freinage', image: 'plaquette' },
  { mot: 'Purge', definition: 'Opération qui chasse l\'air d\'un circuit, par exemple du circuit de freinage quand la pédale est molle.', chapitre: 'freinage' },
  { mot: 'Servofrein', definition: 'Assistance de freinage qui utilise la dépression pour multiplier l\'effort du conducteur sur la pédale.', chapitre: 'freinage' },

  // Transmission
  { mot: 'Boîte de vitesses', definition: 'Ensemble de pignons qui adapte le couple et la vitesse transmis aux roues selon le rapport engagé.', chapitre: 'transmission' },
  { mot: 'Butée d\'embrayage', definition: 'Roulement qui appuie sur le diaphragme du mécanisme d\'embrayage pour débrayer.', chapitre: 'transmission' },
  { mot: 'Différentiel', definition: 'Mécanisme qui permet aux roues motrices de tourner à des vitesses différentes, notamment en virage.', chapitre: 'transmission', image: 'differentiel' },
  { mot: 'Embrayage', definition: 'Organe qui accouple ou sépare progressivement le moteur et la boîte de vitesses.', chapitre: 'transmission', image: 'kit-embrayage' },
  { mot: 'Joint homocinétique', definition: 'Joint d\'arbre de transmission qui transmet la rotation à vitesse constante, même roue braquée.', chapitre: 'transmission' },
  { mot: 'Soufflet', definition: 'Protection en caoutchouc en accordéon qui garde la graisse et empêche la saleté d\'entrer (transmission, direction).', chapitre: 'transmission', image: 'soufflet-cardan' },
  { mot: 'Synchroniseur', definition: 'Pièce de la boîte de vitesses qui égalise les vitesses de rotation pour engager un rapport sans craquement.', chapitre: 'transmission' },

  // Liaison au sol
  { mot: 'Amortisseur', definition: 'Organe qui freine les oscillations du ressort de suspension, pour garder les roues en contact avec la route.', chapitre: 'liaison-au-sol', image: 'amortisseur' },
  { mot: 'Barre stabilisatrice', definition: 'Barre qui relie les deux côtés d\'un essieu et limite le roulis en virage.', chapitre: 'liaison-au-sol' },
  { mot: 'Carrossage', definition: 'Inclinaison de la roue par rapport à la verticale, vue de face.', chapitre: 'liaison-au-sol' },
  { mot: 'Chasse', definition: 'Inclinaison de l\'axe de pivot de la roue, vue de côté. Elle aide la direction à revenir en ligne droite.', chapitre: 'liaison-au-sol' },
  { mot: 'Crémaillère', definition: 'Barre dentée de la direction, déplacée par le pignon relié au volant. Elle pousse ou tire les biellettes.', chapitre: 'liaison-au-sol' },
  { mot: 'Indice de charge et de vitesse', definition: 'Code sur le flanc du pneu, par exemple 91V : 91 indique la charge maximale par pneu (615 kg), V la vitesse maximale (240 km/h).', chapitre: 'liaison-au-sol' },
  { mot: 'Parallélisme', definition: 'Réglage du pincement ou de l\'ouverture des roues d\'un même essieu, vues de dessus.', chapitre: 'liaison-au-sol' },
  { mot: 'Rotule de direction', definition: 'Articulation au bout de la biellette de direction, qui la relie au pivot de la roue.', chapitre: 'liaison-au-sol', image: 'rotule-direction' },
  { mot: 'Témoin d\'usure', definition: 'Petits bossages au fond des sculptures du pneu. Quand la bande de roulement les atteint (1,6 mm), le pneu doit être remplacé.', chapitre: 'liaison-au-sol' },

  // Sécurité
  { mot: 'Chandelle', definition: 'Support réglable sur lequel on pose un véhicule levé pour travailler dessous en sécurité.', chapitre: 'securite', image: 'chandelles' },
  { mot: 'Cric', definition: 'Appareil qui sert à lever un véhicule. On ne travaille jamais sous un véhicule tenu seulement par un cric.', chapitre: 'securite' },
  { mot: 'EPI', definition: 'Équipement de protection individuelle : gants, lunettes, chaussures de sécurité, protections auditives…', chapitre: 'securite' },
  { mot: 'FDS', definition: 'Fiche de données de sécurité : elle décrit les dangers d\'un produit et les protections à utiliser.', chapitre: 'securite' },
  { mot: 'Habilitation électrique', definition: 'Autorisation donnée par l\'employeur, après une formation, pour intervenir sur les véhicules électriques ou hybrides (câbles orange, haute tension).', chapitre: 'securite' }
]);
