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
- **Trois niveaux de difficulté** : 1 (connaître), 2 (comprendre, calculer), 3 (diagnostiquer comme à l'atelier). Quand un thème est maîtrisé, les questions du niveau suivant se débloquent ; une erreur peut faire redescendre. L'examen blanc mélange les trois niveaux.
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
- **Assistant IA** (avec un code d'accès) : « Explique-moi mon erreur » après une mauvaise réponse, questions inventées sur les points faibles, bilan personnalisé en fin de séance. Chaque contenu de l'IA a un bouton « Signaler une erreur ».
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
outils/preparer-site.js    assemble le site à publier dans _site/ (mise en ligne)
outils/tests-ia.mjs        tests de l'assistant IA (npm run test-ia), sans clé API
netlify/functions/ia.mjs   fonction Netlify de l'assistant IA (garde la clé API)
netlify/ia/coeur.mjs       consignes envoyées à Claude et contrôle des réponses
netlify.toml, package.json configuration Netlify et dépendance de la fonction
.github/workflows/         mise en ligne automatique sur GitHub Pages
```

## Ajouter ou modifier du contenu

Chaque chapitre est un fichier dans `data/chapitres/`. Pour ajouter une question, copie un bloc existant dans `questions` et change :

- `id` : unique sur tout le site, par exemple `frein-q11` ;
- `sousTheme` : une des clés de `sousThemes` du chapitre ;
- `niveau` (facultatif) : `2` ou `3` pour une question plus difficile (1 par défaut) ;
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

## Mettre en ligne (GitHub Pages)

Le site est publié automatiquement par GitHub à chaque envoi sur la branche `main` (fichier `.github/workflows/mise-en-ligne.yml`). Avant de publier, GitHub lance `node outils/verifier-donnees.js` : si le contenu a une erreur ou si `sw.js` n'est pas à jour, rien n'est publié et l'ancienne version reste en ligne. Seuls les fichiers du site sont publiés (`outils/preparer-site.js`), pas les outils ni la documentation.

**Première fois :**

1. Sur github.com, crée un dépôt **public** vide nommé `cap-meca`, sans README ni licence.
2. Dans le dépôt : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
3. Relie le dossier au dépôt et envoie-le (remplace `TON-PSEUDO`) :

   ```
   git remote add origin https://github.com/TON-PSEUDO/cap-meca.git
   git push -u origin main
   ```

4. Onglet **Actions** du dépôt : attends la coche verte (1 à 2 minutes). Le site est alors à l'adresse `https://TON-PSEUDO.github.io/cap-meca/`.

**Ensuite, à chaque modification :** `node outils/maj-hors-ligne.js`, `node outils/verifier-donnees.js`, un commit, puis `git push`. Sur un téléphone où le site est installé, la nouvelle version arrive à l'ouverture suivante.

Le site doit être servi en **https** : c'est ce qui permet de l'installer sur le téléphone et de l'utiliser sans connexion. En double-cliquant sur `index.html`, tout marche aussi, sauf l'installation.

## Assistant IA (Netlify)

**État actuel : en sommeil.** Le code est prêt mais l'assistant n'est pas branché, car l'API d'une IA est payante (l'offre gratuite de Gemini est interdite pour un site utilisé en Europe). Tant qu'il n'est pas branché, il est invisible et le reste du site marche normalement. Pour l'activer un jour, il suffit de suivre les étapes ci-dessous ; avec un modèle économique comme Claude Haiku 5.5 (à changer dans `MODELE`), quelques dollars de crédit sans recharge automatique durent très longtemps.

L'assistant passe par une petite fonction hébergée sur Netlify, qui garde la clé API Anthropic cachée : elle n'est jamais dans le code du site. L'élève l'active une fois avec un **code d'accès**, pour que personne d'autre ne puisse l'utiliser à tes frais.

**Mise en route (une seule fois) :**

1. Sur [platform.claude.com](https://platform.claude.com), crée une clé API. Dans les réglages de dépenses de la console, fixe une **limite mensuelle** (par exemple 5 €) : c'est la vraie protection contre une mauvaise surprise.
2. Sur [netlify.com](https://www.netlify.com), crée un compte, puis **Add new project → Import an existing project → GitHub → cap-meca**. Les réglages de construction sont lus dans `netlify.toml` : il n'y a rien à changer.
3. Dans le projet Netlify : **Project configuration → Environment variables**, ajoute :
   - `ANTHROPIC_API_KEY` : la clé API (coche « Contains secret values ») ;
   - `CODE_ACCES` : un code de ton choix, à donner à l'élève.
4. Relance le déploiement (**Deploys → Trigger deploy**). Le site est alors aussi à l'adresse `https://NOM.netlify.app`, avec l'assistant.
5. Pour l'activer aussi sur la version GitHub Pages : mets l'adresse `https://NOM.netlify.app/api/ia` dans `URL_FONCTION` (`js/ia.js`), puis `node outils/maj-hors-ligne.js`, commit et `git push`.

**Utilisation :** sur le site, **Assistant IA** → saisir le code. Les signalements d'erreur se lisent dans Netlify : **Logs → Functions → ia**, en cherchant `[signalement]`.

**Coût indicatif** (modèle Claude Opus 5.5) : environ 1 à 2 centimes de dollar par explication ou bilan, 5 à 10 centimes pour une série de 5 questions inventées. Le modèle se change dans `netlify/ia/coeur.mjs` (`MODELE`).
