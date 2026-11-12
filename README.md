# lol calendar

Calendrier League of Legends sur une seule page : saisons et actes, patchs, événements en jeu et compétitions pro d'une année. La première année renseignée est 2026. Le site est disponible en français et en anglais.

## Ce que contient la page

- **En jeu** : les saisons et leurs actes (2026 : For Demacia, Pandemonium, Classic), les 24 patchs, les événements en jeu (Lunar Revel, Brawl, League Classic, Hall of Legends, HEARTSTEEL…).
- **Esport** : les compétitions internationales (First Stand, MSI, Esports World Cup, Worlds, Nations Cup…) et les ligues LEC, LCK, LPL, LCS, CBLOL, LCP et LFL, avec les vainqueurs connus.
- Un résumé « en ce moment » (saison, patch, prochain rendez-vous), des filtres par couloir, une frise annuelle et un agenda mois par mois avec une fiche détail.
- Un choix de langue (FR / EN), mémorisé dans le navigateur.

Les barres en pointillé signalent des dates approximatives.

## Utilisation

Site statique sans dépendance ni étape de build : ouvrez `index.html` dans un navigateur, ou servez le dossier avec n'importe quel serveur web (GitHub Pages, par exemple).

La langue est choisie dans cet ordre : paramètre `?lang=en` dans l'URL, dernier choix mémorisé, langue du navigateur, puis le français par défaut.

## Organisation des fichiers

```
index.html        structure de la page et styles (aucun texte affiché)
js/app.js         logique d'affichage (aucun texte affiché)
data/2026.js      données de l'année, indépendantes de la langue : identifiants, dates, couloirs
lang/fr.js        tous les textes en français (langue de référence)
lang/en.js        tous les textes en anglais
```

Chaque fichier de langue contient :

- `meta` : code, libellé du bouton (`FR`), nom de la langue, attribut `lang` du document ;
- `months`, `monthsLong`, `date()` et `sameMonth()` : noms des mois et format des dates ;
- `ui` : textes de l'interface (certains sont des fonctions pour gérer pluriels et variables) ;
- `kinds`, `tags`, `lanes` : libellés des types d'éléments et des couloirs ;
- `sources` : liens vers les sources, avec leur libellé ;
- `items[année][id]` : textes de chaque élément (`t` titre, `s` libellé court, `name` nom de saison, `place` lieu, `res` résultat ou affiche, `notes` précisions).

Une clé absente d'une langue est reprise du français.

## Ajouter une langue

1. Copiez `lang/en.js` en `lang/<code>.js` (par exemple `lang/es.js`) et remplacez `LOL_I18N.en` par `LOL_I18N.es`.
2. Traduisez les textes et adaptez `meta`, `months` et le format des dates.
3. Ajoutez `<script src="lang/es.js"></script>` dans `index.html`, avant `js/app.js`.

Le bouton de la nouvelle langue apparaît automatiquement.

## Ajouter une année

1. Créez `data/2027.js` sur le modèle de `data/2026.js` (`window.LOL_DATA.years[2027] = { items: [...] }`).
2. Ajoutez les textes dans chaque fichier de langue, sous `items[2027]`, avec les mêmes identifiants.
3. Ajoutez `<script src="data/2027.js"></script>` dans `index.html` et retirez l'année de `PLANNED_YEARS` dans `js/app.js`.

Format d'un élément dans `data/<année>.js` :

```js
{ id: "i-msi", lane: "intl", kind: "intl", d0: "06-28", d1: "07-12", approx: false }
```

- `d0` / `d1` : `"MM-JJ"` dans l'année, ou `"AAAA-MM-JJ"` pour une autre année ; sans `d1`, l'événement dure un jour.
- `lane` : `season`, `patch`, `event`, `intl`, ou le code d'une ligue (`LEC`, `LCK`, `LPL`, `LCS`, `CBLOL`, `LCP`, `LFL`).
- `kind` : `season`, `act`, `patch`, `event`, `intl` ou `league`.
- `approx: true` affiche la barre en pointillé ; `planned: true` affiche « Annoncé » au lieu de « À venir ».
- Pour un patch, `s` donne le numéro (`"26.01"`), identique dans toutes les langues.

## Sources des données 2026

Calendrier officiel des patchs de Riot Games, pages d'événements Riot, LoL Esports, Sheep Esports, lolnow.gg et la presse esport (Inven Global, GosuGamers, Dot Esports…). Données arrêtées au 12 novembre 2026.

## Avertissement

Projet de fan, sans lien avec Riot Games. League of Legends est une marque de Riot Games, Inc.
