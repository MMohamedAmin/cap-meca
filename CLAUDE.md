# CLAUDE.md — CAP Méca

Site de révision pour un élève en **CAP Maintenance des véhicules, option voitures particulières** (programme officiel du CAP, pas de cours fournis). Tout le site, le code et le contenu sont en **français**.

## Contraintes techniques

- **Site statique, sans build, sans dépendance, sans framework.** HTML, CSS et JavaScript « vanilla ».
- Le site doit marcher en **double-cliquant sur `index.html`** (protocole `file://`). Donc : pas de `fetch()` de fichiers locaux et pas de modules ES (`import`). Le contenu est chargé par des balises `<script>` classiques qui appellent `CAP.ajouterChapitre({...})`.
- Hébergement : GitHub Pages, publié par `.github/workflows/mise-en-ligne.yml` à chaque envoi sur `main`, seulement si `outils/verifier-donnees.js` passe. Le site est servi dans un sous-dossier (`/cap-meca/`) : tous les chemins doivent rester **relatifs**.
- Mobile d'abord : tout doit être utilisable sur un téléphone de 360 px de large.
- Toute lecture/écriture de `localStorage` est dans un `try/catch`.

## Architecture

- `js/cap.js` : espace de noms global `CAP`, `CAP.ajouterChapitre`, `CAP.ajouterImages`, `CAP.ajouterFormulaire` et `CAP.ajouterLexique`.
- `data/images.js` : les photos (`images/pieces/`) avec leurs crédits : `{ fichier, description, auteur, licence, licenceUrl, source }`. `description` sert de texte alternatif et ne doit pas donner la réponse.
- `data/formulaire.js` : formules par thème `{ nom, formule, unites?, exemple?, calcul? }` (`calcul` = clé d'une calculatrice).
- `data/lexique.js` : mots du métier `{ mot, definition, chapitre?, image? }`.
- `data/chapitres/*.js` : contenu. L'ordre des `<script>` dans `index.html` = l'ordre d'affichage.
- `js/stockage.js` : `CAP.stockage`, la progression dans `localStorage` (clé `capmeca.progression.v1`). Par question : `{vu, ok, derniere, date}`. Par carte : `{sais, pas, derniere, date, boite, prochaine}` (boîtes de Leitner 1 à 5, `prochaine` = jour `AAAA-MM-JJ` où la carte revient ; les cartes sans `boite` venant de la V1 sont complétées à la lecture). Plus les `seances` et les `jours` de révision.
- `js/stats.js` : `CAP.stats`, la réussite par chapitre et par sous-thème, `pointsFaibles()`, la répartition des boîtes, les notes d'examens et l'activité.
- `js/series.js` : `CAP.series`, la composition des séries : entraînement ciblé, erreurs, examen blanc, cartes du jour et reconnaissance des pièces.
- `js/calculs.js` : `CAP.calculs`, les calculatrices (fonctions pures : saisies texte → `{ resultat, etapes }` ou `{ erreur }`).
- `js/recherche.js` : `CAP.recherche`, la recherche globale (sans accents ni majuscules) et le surlignage échappé.
- `js/pwa.js` : `CAP.pwa`, installation et hors ligne. Ne s'active qu'en http(s) : en `file://`, rien n'est chargé.
- `sw.js` : service worker **généré** par `node outils/maj-hors-ligne.js` (liste des fichiers + version = empreinte du contenu). Ne pas le modifier à la main.
- `manifest.webmanifest` et `images/icones/` : manifeste et icônes de l'appli installée.
- `js/ia.js` : `CAP.ia`, stub inactif pour la V4.
- `js/app.js` : routeur par hash (`#/`, `#/chapitre/:id`, `#/chapitre/:id/fiche|cartes|quiz`, `#/melange`, `#/entrainement`, `#/cartes`, `#/erreurs`, `#/examen`, `#/pieces`, `#/credits`, `#/formulaire`, `#/calculs/:cle?`, `#/lexique`, `#/recherche/:texte?`, `#/installer`, `#/chapitre/:id/fiche/:section`, `#/progression`) et rendu des vues avec des template strings.

Tout texte venant du contenu passe par `fmt()` (échappement HTML, puis `**gras**`) ou `echapper()`. Ne jamais injecter du contenu brut.

## Format d'un chapitre

```js
CAP.ajouterChapitre({
  id, titre, icone, description,
  sousThemes: { cle: 'Nom affiché' },
  fiche: [{ titre, sousTheme, contenu: [ 'paragraphe', {liste:[...]}, {formule}, {retenir}, {attention} ] }],
  cartes: [{ id, sousTheme, recto, verso }],
  questions: [{ id, sousTheme, type: 'qcm'|'vf', image?, enonce, choix: [...], bonne: index, explication }]
});
```

- Les `id` sont uniques sur tout le site et **ne doivent jamais changer**, car la progression y est rattachée.
- `qcm` : les choix sont mélangés à l'affichage. Par convention, on met la bonne réponse en premier (`bonne: 0`).
- `vf` : choix `['Vrai', 'Faux']`, non mélangés.
- `image` (facultatif) : clé d'une photo de `data/images.js`. Les questions avec photo forment le mode « Reconnaître les pièces ».
- Chaque sous-thème doit avoir au moins une question. Le sous-thème est la base de l'entraînement ciblé.

## Contenu

- Exactitude technique avant tout : niveau CAP, phrases simples, vocabulaire du métier.
- Les mauvaises réponses doivent être plausibles. L'explication dit **pourquoi**.
- Photos : uniquement sous licence libre (Wikimedia Commons : domaine public, CC0, CC BY, CC BY-SA), en 800 px de large environ, avec le crédit complet dans `data/images.js`. Pas de photo où le nom de la pièce est écrit.
- Après toute modification du site (contenu, code, images) : `node outils/maj-hors-ligne.js`, puis `node outils/verifier-donnees.js`, qui doit afficher « Tout est bon ». Le vérificateur signale un `sw.js` pas à jour : sans lui, les téléphones garderaient l'ancienne version.

## Feuille de route

- **V1 (fait)** : chapitres, fiches, cartes mémo, quiz, progression de base, export et import.
- **V2 (fait)** : mode « Entraînement ciblé » (≈70 % de questions sur les sous-thèmes les plus faibles, 30 % de mélange), répétition espacée des cartes (type Leitner), révision des erreurs, examen blanc chronométré noté sur 20, tableau de progression enrichi.
- **V3 (fait)** : formulaire et calculatrices (cylindrée, rapport volumétrique, loi d'Ohm, puissance), lexique avec recherche, PWA (manifest + service worker, hors ligne), recherche globale.
- **V4** : IA via un intermédiaire serverless (Netlify Functions ou Cloudflare Workers) qui garde la clé API Anthropic côté serveur. Elle sert à générer des questions sur les points faibles, à donner une explication personnalisée après une erreur et à faire un bilan de séance. **Jamais de clé API dans le code client.** Les questions générées doivent avoir un bouton « Signaler une erreur ».
