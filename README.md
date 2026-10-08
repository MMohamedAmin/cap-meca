# CAP Méca — site de révision

Site de révision pour le **CAP Maintenance des véhicules, option voitures particulières** : fiches de cours, cartes mémo et quiz, avec suivi de progression par chapitre et par sous-thème.

## Ouvrir le site

Double-clique sur `index.html` : il s'ouvre dans ton navigateur. Aucune installation n'est nécessaire et aucune connexion internet n'est requise.

Ta progression est enregistrée dans le navigateur. Pour la sauvegarder ou la transférer sur un autre appareil : **Progression → Exporter**, puis **Importer** sur l'autre appareil.

## Ce que contient le site

- **8 chapitres** : moteur, lubrification, refroidissement, électricité, freinage, transmission, liaison au sol, sécurité et environnement.
- **Fiche de cours** par chapitre, avec des encadrés « À retenir » et « Attention ».
- **Cartes mémo** : question, puis retournement, puis « je savais / je ne savais pas ». À la fin, on peut revoir seulement les cartes ratées.
- **Quiz** : 10 questions par chapitre ou 20 en mélangé, explication après chaque réponse, note sur 20 et liste des erreurs.
- **Progression** : réussite par chapitre et par sous-thème, points faibles, dernières séances, série de jours, export et import.
- **Entraînement ciblé** : 15 questions, dont environ 70 % sur tes sous-thèmes les plus faibles et le reste en mélange.
- **Cartes du jour** : répétition espacée en 5 boîtes. Une carte sue revient de plus en plus tard (1, 2, 4, 8 puis 16 jours) et une carte ratée revient le lendemain.
- **Mes erreurs** : les questions ratées la dernière fois. Une question réussie sort de la liste.
- **Reconnaître les pièces** : des questions sur photo (« Quelle est cette pièce ? », « Que constates-tu sur ce soufflet ? »).
- **Examen blanc** : 20 questions sur tous les chapitres en 20 minutes, sans correction pendant l'épreuve, avec la note sur 20 et une correction détaillée à la fin.
- **Progression enrichie** : calendrier d'activité, courbe des examens blancs, répartition des cartes par boîte.
- **Formulaire** : les formules à connaître (moteur, électricité, pneus, unités) avec un exemple chiffré.
- **Calculatrices** : cylindrée, rapport volumétrique, loi d'Ohm et puissance, avec le calcul détaillé étape par étape.
- **Lexique** : 74 mots du métier, avec un filtre et des photos.
- **Recherche** (loupe en haut) : dans le lexique, le formulaire, les fiches, les cartes et les questions, sans se soucier des accents.
- **Installation sur le téléphone** et fonctionnement **sans connexion**, une fois le site mis en ligne.
- Mode clair et sombre, affichage adapté au téléphone.

## Organisation des fichiers

```
index.html                 page unique du site, charge tous les scripts
css/style.css              apparence
js/cap.js                  base : CAP.ajouterChapitre()
js/stockage.js             enregistrement de la progression (navigateur)
js/stats.js                calculs : réussite, sous-thèmes, points faibles
js/series.js               composition des séries (ciblé, erreurs, examen, cartes du jour)
js/calculs.js              calculatrices (cylindrée, rapport volumétrique, Ohm, puissance)
js/recherche.js            recherche dans tout le site
js/pwa.js                  installation sur le téléphone et hors ligne
sw.js                      service worker, GÉNÉRÉ par outils/maj-hors-ligne.js
manifest.webmanifest       description de l'appli installée (nom, icônes, couleurs)
js/ia.js                   emplacement prévu pour l'IA (V4), inactif
js/app.js                  écrans et navigation
data/images.js             les photos et leurs crédits (auteur, licence, source)
data/formulaire.js         les formules à connaître
data/lexique.js            les mots du métier
data/chapitres/*.js        le contenu, un fichier par chapitre
images/pieces/             les photos des pièces (Wikimedia Commons)
images/icones/             les icônes de l'appli
outils/verifier-donnees.js vérification automatique du contenu
outils/maj-hors-ligne.js   met à jour sw.js après une modification
```

## Ajouter ou modifier du contenu

Chaque chapitre est un fichier dans `data/chapitres/`. Pour ajouter une question, copie un bloc existant dans `questions` et change :

- `id` : unique sur tout le site, par exemple `frein-q11` ;
- `sousTheme` : une des clés de `sousThemes` du chapitre ;
- `type` : `qcm`, dont les choix sont mélangés, ou `vf`, avec les choix `['Vrai', 'Faux']` gardés dans l'ordre ;
- `choix` et `bonne`, l'index de la bonne réponse en partant de 0 ;
- `explication`.

Pour illustrer une question par une photo : place l'image dans `images/pieces/`, déclare-la dans `data/images.js` avec son auteur et sa licence, puis ajoute `image: 'sa-cle'` à la question.

Dans les textes, `**mot**` met le mot en gras. Les apostrophes s'écrivent `\'`.

Pour un **nouveau chapitre** : crée le fichier, puis ajoute sa ligne `<script>` dans `index.html`, dans la partie « Contenu ».

Ensuite (il faut avoir Node.js installé), mets à jour la liste des fichiers gardés hors ligne, puis vérifie qu'il n'y a pas d'erreur :

```
node outils/maj-hors-ligne.js
node outils/verifier-donnees.js
```

## Suite prévue

- **V4** : branchement de l'IA (questions générées sur les points faibles, bouton « Explique-moi »), en même temps que la mise en ligne.

## Mettre en ligne (plus tard)

Le site est statique. Il suffit d'envoyer le dossier tel quel sur GitHub Pages, Netlify ou n'importe quel hébergeur. Il doit être servi en **https** : c'est ce qui permet de l'installer sur le téléphone et de l'utiliser sans connexion. En double-cliquant sur `index.html`, tout marche aussi, sauf l'installation.
