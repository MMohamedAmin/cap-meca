# CAP Méca — site de révision

Site de révision pour le **CAP Maintenance des véhicules, option voitures particulières** : fiches de cours, cartes mémo et quiz, avec suivi de progression par chapitre et par sous-thème.

## Ouvrir le site

Double-clique sur `index.html` : il s'ouvre dans ton navigateur. Aucune installation n'est nécessaire et aucune connexion internet n'est requise.

Ta progression est enregistrée dans le navigateur. Pour la sauvegarder ou la transférer sur un autre appareil : **Progression → Exporter**, puis **Importer** sur l'autre appareil.

## Ce que contient la V1

- **8 chapitres** : moteur, lubrification, refroidissement, électricité, freinage, transmission, liaison au sol, sécurité et environnement.
- **Fiche de cours** par chapitre, avec des encadrés « À retenir » et « Attention ».
- **Cartes mémo** : question, puis retournement, puis « je savais / je ne savais pas ». À la fin, on peut revoir seulement les cartes ratées.
- **Quiz** : 10 questions par chapitre ou 20 en mélangé, explication après chaque réponse, note sur 20 et liste des erreurs.
- **Progression** : réussite par chapitre et par sous-thème, points faibles, dernières séances, série de jours, export et import.
- Mode clair et sombre, affichage adapté au téléphone.

## Organisation des fichiers

```
index.html                 page unique du site, charge tous les scripts
css/style.css              apparence
js/cap.js                  base : CAP.ajouterChapitre()
js/stockage.js             enregistrement de la progression (navigateur)
js/stats.js                calculs : réussite, sous-thèmes, points faibles
js/ia.js                   emplacement prévu pour l'IA (V4), inactif
js/app.js                  écrans et navigation
data/chapitres/*.js        le contenu, un fichier par chapitre
outils/verifier-donnees.js vérification automatique du contenu
```

## Ajouter ou modifier du contenu

Chaque chapitre est un fichier dans `data/chapitres/`. Pour ajouter une question, copie un bloc existant dans `questions` et change :

- `id` : unique sur tout le site, par exemple `frein-q11` ;
- `sousTheme` : une des clés de `sousThemes` du chapitre ;
- `type` : `qcm`, dont les choix sont mélangés, ou `vf`, avec les choix `['Vrai', 'Faux']` gardés dans l'ordre ;
- `choix` et `bonne`, l'index de la bonne réponse en partant de 0 ;
- `explication`.

Dans les textes, `**mot**` met le mot en gras. Les apostrophes s'écrivent `\'`.

Pour un **nouveau chapitre** : crée le fichier, puis ajoute sa ligne `<script>` dans `index.html`, dans la partie « Contenu ».

Ensuite, vérifie qu'il n'y a pas d'erreur (il faut avoir Node.js installé) :

```
node outils/verifier-donnees.js
```

## Suite prévue

- **V2** : entraînement ciblé sur les points faibles, répétition espacée, révision des erreurs, examen blanc chronométré.
- **V3** : formulaire, calculatrices, lexique, installation sur le téléphone et mode hors ligne.
- **V4** : branchement de l'IA (questions générées sur les points faibles, bouton « Explique-moi »), en même temps que la mise en ligne.

## Mettre en ligne (plus tard)

Le site est statique. Il suffit d'envoyer le dossier tel quel sur GitHub Pages, Netlify ou n'importe quel hébergeur.
