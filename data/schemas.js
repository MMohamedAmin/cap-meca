// Schémas dessinés pour le site (SVG). Chargé APRÈS les chapitres : chaque repère numéroté
// devient une question (voir CAP.ajouterSchemas). Les couleurs viennent du CSS (classes sch-*),
// pour suivre le thème clair ou sombre. Le SVG est écrit ici, à la main : jamais de contenu externe,
// pas de <script> ni d'attribut on… (contrôlé par le vérificateur).
// Repère : { id (ne change jamais), nom, role, x, y (position du numéro), niveau? }
CAP.ajouterSchemas([
  {
    id: 'coupe-moteur',
    chapitre: 'moteur',
    sousTheme: 'organes',
    titre: 'Coupe d\'un cylindre',
    viewBox: '0 0 320 360',
    svg: `
      <path class="sch-plein" d="M153 166 L167 166 L186 282 L170 288 Z"/>
      <rect class="sch-plein" x="70" y="22" width="180" height="56" rx="4"/>
      <rect class="sch-plein" x="70" y="84" width="30" height="166"/>
      <rect class="sch-plein" x="220" y="84" width="30" height="166"/>
      <rect class="sch-joint" x="70" y="78" width="180" height="6"/>
      <rect class="sch-plein" x="104" y="132" width="112" height="48" rx="4"/>
      <g class="sch-trait-fin"><line x1="104" y1="140" x2="216" y2="140"/><line x1="104" y1="147" x2="216" y2="147"/><line x1="104" y1="154" x2="216" y2="154"/></g>
      <circle class="sch-plein" cx="160" cy="166" r="6"/>
      <g class="sch-trait"><line x1="125" y1="10" x2="125" y2="86"/><line x1="195" y1="10" x2="195" y2="86"/></g>
      <path class="sch-piece" d="M110 92 L140 92 L130 85 L120 85 Z"/>
      <path class="sch-piece" d="M180 92 L210 92 L200 85 L190 85 Z"/>
      <rect class="sch-piece" x="155" y="4" width="10" height="34" rx="2"/>
      <line class="sch-trait" x1="160" y1="38" x2="160" y2="92"/>
      <circle class="sch-trait-fin sch-pointille" cx="160" cy="292" r="22"/>
      <path class="sch-plein" d="M149 302 L171 275 L186 289 L165 312 Z"/>
      <circle class="sch-plein" cx="160" cy="294" r="12"/>
      <circle class="sch-piece" cx="178" cy="284" r="7"/>
      <path class="sch-huile" d="M72 332 Q100 327 128 332 T184 332 T248 332 L248 336 Q248 348 234 348 L86 348 Q72 348 72 336 Z"/>
      <path class="sch-trait" d="M70 250 L70 334 Q70 350 86 350 L234 350 Q250 350 250 334 L250 250"/>
      <text class="sch-texte" x="119" y="14" text-anchor="end">admission →</text>
      <text class="sch-texte" x="201" y="14">← échappement</text>`,
    reperes: [
      { id: 'culasse', nom: 'Culasse', role: 'ferme le haut du cylindre et porte les soupapes et la bougie.', x: 88, y: 52 },
      { id: 'joint', nom: 'Joint de culasse', role: 'assure l\'étanchéité entre la culasse et le bloc.', x: 266, y: 81 },
      { id: 'soupape-adm', nom: 'Soupape d\'admission', role: 'laisse entrer l\'air (ou le mélange) pendant l\'admission.', x: 108, y: 110 },
      { id: 'bougie', nom: 'Bougie d\'allumage', role: 'produit l\'étincelle qui enflamme le mélange (moteur essence).', x: 178, y: 30 },
      { id: 'soupape-ech', nom: 'Soupape d\'échappement', role: 'laisse sortir les gaz brûlés pendant l\'échappement.', x: 212, y: 110 },
      { id: 'piston', nom: 'Piston', role: 'reçoit la poussée des gaz et coulisse dans le cylindre.', x: 126, y: 168 },
      { id: 'segments', nom: 'Segments', role: 'assurent l\'étanchéité, raclent l\'huile et évacuent la chaleur du piston.', x: 235, y: 147 },
      { id: 'bielle', nom: 'Bielle', role: 'relie le piston au vilebrequin.', x: 196, y: 226 },
      { id: 'vilebrequin', nom: 'Vilebrequin', role: 'transforme le mouvement alternatif du piston en rotation.', x: 124, y: 296 },
      { id: 'bloc', nom: 'Bloc-cylindres', role: 'contient le cylindre dans lequel coulisse le piston.', x: 85, y: 215 },
      { id: 'carter', nom: 'Carter d\'huile', role: 'réservoir d\'huile fixé sous le moteur.', x: 216, y: 318 }
    ]
  },
  {
    id: 'circuit-refroidissement',
    chapitre: 'refroidissement',
    sousTheme: 'composants',
    titre: 'Circuit de refroidissement',
    viewBox: '0 0 340 250',
    svg: `
      <path class="sch-tuyau sch-chaud" d="M172 112 L130 112 L130 60 L106 60"/>
      <path class="sch-tuyau sch-froid" d="M106 182 L166 182"/>
      <path class="sch-tuyau sch-chaud sch-pointille" d="M182 124 L182 168"/>
      <path class="sch-tuyau-fin" d="M152 42 L152 50 L82 50 L82 40"/>
      <path class="sch-tuyau sch-chaud" d="M265 100 L265 62"/>
      <path class="sch-tuyau sch-froid" d="M295 62 L295 100"/>
      <circle class="sch-trait" cx="28" cy="115" r="22"/>
      <path class="sch-piece" d="M28 115 L24 95 Q34 96 28 115 Z M28 115 L46 124 Q40 132 28 115 Z M28 115 L10 125 Q8 116 28 115 Z"/>
      <rect class="sch-plein" x="58" y="40" width="48" height="150" rx="3"/>
      <g class="sch-trait-fin"><line x1="66" y1="46" x2="66" y2="184"/><line x1="74" y1="46" x2="74" y2="184"/><line x1="82" y1="46" x2="82" y2="184"/><line x1="90" y1="46" x2="90" y2="184"/><line x1="98" y1="46" x2="98" y2="184"/></g>
      <rect class="sch-plein" x="190" y="100" width="120" height="100" rx="6"/>
      <text class="sch-texte" x="250" y="155" text-anchor="middle">moteur</text>
      <rect class="sch-piece" x="172" y="104" width="20" height="20" rx="3"/>
      <circle class="sch-piece" cx="179" cy="182" r="13"/>
      <rect class="sch-plein" x="120" y="8" width="64" height="34" rx="6"/>
      <rect class="sch-liquide" x="123" y="24" width="58" height="15" rx="4"/>
      <rect class="sch-piece" x="146" y="2" width="14" height="8" rx="2"/>
      <rect class="sch-plein" x="248" y="22" width="62" height="40" rx="3"/>
      <g class="sch-trait-fin"><line x1="258" y1="26" x2="258" y2="58"/><line x1="270" y1="26" x2="270" y2="58"/><line x1="282" y1="26" x2="282" y2="58"/><line x1="294" y1="26" x2="294" y2="58"/></g>
      <text class="sch-texte" x="20" y="240">rouge : chaud · bleu : refroidi · pointillé : petit circuit</text>`,
    reperes: [
      { id: 'radiateur', nom: 'Radiateur', role: 'cède la chaleur du liquide à l\'air.', x: 82, y: 207 },
      { id: 'motoventilateur', nom: 'Motoventilateur', role: 'force l\'air à travers le radiateur à l\'arrêt et à basse vitesse.', x: 28, y: 152 },
      { id: 'thermostat', nom: 'Thermostat', role: 's\'ouvre à chaud pour envoyer le liquide vers le radiateur. Fermé, le liquide prend le petit circuit.', x: 156, y: 136 },
      { id: 'pompe', nom: 'Pompe à eau', role: 'fait circuler le liquide de refroidissement.', x: 179, y: 214 },
      { id: 'vase', nom: 'Vase d\'expansion', role: 'absorbe la dilatation du liquide et porte le bouchon taré.', x: 202, y: 25 },
      { id: 'aerotherme', nom: 'Aérotherme', role: 'radiateur de chauffage : chauffe l\'habitacle avec le liquide chaud.', x: 326, y: 42 }
    ]
  },
  {
    id: 'circuit-clim',
    chapitre: 'climatisation',
    sousTheme: 'principe',
    titre: 'Circuit de climatisation',
    viewBox: '0 0 340 250',
    svg: `
      <path class="sch-tuyau sch-chaud" d="M206 205 L48 205 L48 180"/>
      <path class="sch-tuyau sch-chaud" d="M48 60 L48 42 L112 42"/>
      <path class="sch-tuyau sch-chaud" d="M134 42 L222 42"/>
      <path class="sch-tuyau sch-froid" d="M258 42 L295 42 L295 80"/>
      <path class="sch-tuyau sch-froid" d="M295 170 L295 205 L254 205"/>
      <rect class="sch-plein" x="20" y="60" width="56" height="120" rx="3"/>
      <g class="sch-trait-fin"><line x1="28" y1="66" x2="28" y2="174"/><line x1="38" y1="66" x2="38" y2="174"/><line x1="48" y1="66" x2="48" y2="174"/><line x1="58" y1="66" x2="58" y2="174"/><line x1="68" y1="66" x2="68" y2="174"/></g>
      <rect class="sch-plein" x="112" y="18" width="22" height="48" rx="10"/>
      <path class="sch-piece" d="M222 32 L240 42 L222 52 Z M258 32 L240 42 L258 52 Z"/>
      <rect class="sch-plein" x="270" y="80" width="50" height="90" rx="3"/>
      <g class="sch-trait-fin"><line x1="278" y1="86" x2="278" y2="164"/><line x1="290" y1="86" x2="290" y2="164"/><line x1="302" y1="86" x2="302" y2="164"/><line x1="312" y1="86" x2="312" y2="164"/></g>
      <circle class="sch-plein" cx="230" cy="205" r="24"/>
      <circle class="sch-piece" cx="230" cy="205" r="8"/>
      <text class="sch-texte" x="20" y="240">rouge : haute pression · bleu : basse pression (froid)</text>`,
    reperes: [
      { id: 'compresseur', nom: 'Compresseur', role: 'comprime le fluide gazeux et le fait circuler.', x: 230, y: 168 },
      { id: 'condenseur', nom: 'Condenseur', role: 'le fluide y cède sa chaleur à l\'air extérieur et redevient liquide.', x: 96, y: 120 },
      { id: 'bouteille', nom: 'Bouteille déshydratante', role: 'retient l\'humidité et filtre le fluide.', x: 123, y: 86 },
      { id: 'detendeur', nom: 'Détendeur', role: 'fait chuter la pression : le fluide devient très froid.', x: 240, y: 70 },
      { id: 'evaporateur', nom: 'Évaporateur', role: 'le fluide s\'y évapore en prenant la chaleur de l\'air de l\'habitacle.', x: 250, y: 125 }
    ]
  },
  {
    id: 'freinage-x',
    chapitre: 'freinage',
    sousTheme: 'hydraulique',
    titre: 'Circuit de freinage en X (vu de dessus)',
    viewBox: '0 0 300 340',
    svg: `
      <rect class="sch-trait" x="70" y="20" width="160" height="300" rx="40"/>
      <text class="sch-texte" x="150" y="13" text-anchor="middle">avant</text>
      <path class="sch-tuyau sch-chaud" d="M176 136 L190 136 L190 90 L80 90"/>
      <path class="sch-tuyau sch-chaud" d="M190 136 L190 196 L220 253"/>
      <path class="sch-tuyau sch-froid" d="M176 144 L205 144 L205 83 L220 83"/>
      <path class="sch-tuyau sch-froid" d="M205 144 L205 176 L80 253"/>
      <g class="sch-plein"><rect x="48" y="58" width="22" height="54" rx="5"/><rect x="230" y="58" width="22" height="54" rx="5"/><rect x="48" y="228" width="22" height="54" rx="5"/><rect x="230" y="228" width="22" height="54" rx="5"/></g>
      <g class="sch-piece"><rect x="70" y="70" width="10" height="26" rx="2"/><rect x="220" y="70" width="10" height="26" rx="2"/><rect x="70" y="240" width="10" height="26" rx="2"/><rect x="220" y="240" width="10" height="26" rx="2"/></g>
      <circle class="sch-plein" cx="112" cy="140" r="22"/>
      <rect class="sch-plein" x="134" y="132" width="42" height="16" rx="3"/>
      <rect class="sch-plein" x="144" y="114" width="26" height="16" rx="3"/>
      <text class="sch-texte" x="150" y="336" text-anchor="middle">rouge et bleu : les deux circuits indépendants</text>`,
    reperes: [
      { id: 'servofrein', nom: 'Servofrein', role: 'multiplie l\'effort du conducteur grâce à la dépression.', x: 112, y: 178 },
      { id: 'maitre-cylindre', nom: 'Maître-cylindre', role: 'transforme l\'effort sur la pédale en pression hydraulique.', x: 155, y: 166 },
      { id: 'bocal', nom: 'Bocal de liquide de frein', role: 'réserve de liquide de frein, niveau entre MINI et MAXI.', x: 132, y: 106 },
      { id: 'etrier', nom: 'Étrier de frein avant', role: 'serre les plaquettes sur le disque.', x: 96, y: 60 },
      { id: 'frein-arriere', nom: 'Frein arrière', role: 'freine la roue arrière (disque ou tambour selon le véhicule).', x: 100, y: 276 },
      { id: 'circuit-1', nom: 'Circuit avant gauche et arrière droit', role: 'un des deux circuits du montage en X : si l\'autre fuit, il freine encore une roue avant et la roue arrière opposée.', x: 205, y: 222, niveau: 2 },
      { id: 'circuit-2', nom: 'Circuit avant droit et arrière gauche', role: 'un des deux circuits du montage en X : si l\'autre fuit, il freine encore une roue avant et la roue arrière opposée.', x: 205, y: 110, niveau: 2 }
    ]
  }
]);
