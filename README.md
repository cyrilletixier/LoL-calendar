# lol calendar

Calendrier League of Legends sur une seule page : saisons et actes, patchs, événements en jeu et compétitions pro d'une année. Quatre années sont disponibles : 2024, 2025, 2026 (année affichée par défaut) et les dates déjà connues de 2027. Le site est disponible en 10 langues : français, anglais, espagnol, portugais (Brésil), allemand, polonais, turc, coréen, chinois simplifié et vietnamien.

## Ce que contient la page

- **En jeu** : les saisons et leurs actes (2025 : Noxus, Spirit Blossom Beyond, Trials of Twilight ; 2026 : For Demacia, Pandemonium, Classic), les splits classés de 2024, les patchs, les sorties et refontes de champions (Smolder, Aurora, Ambessa, Mel, Yunara, Zaahen, Locke…), les événements en jeu (Swarm, Doom Bots, League Classic, Hall of Legends…).
- **Esport** : les compétitions internationales (First Stand, MSI, Esports World Cup, Worlds…) et les ligues LEC, LCK, LPL, LCS, CBLOL, LCP et LFL, avec les vainqueurs connus. Les couloirs prennent le nom de l'année : LTA Nord et LTA Sud en 2025, PCS en 2024.
- **2027** : ce qui est déjà annoncé (lieux du First Stand, du MSI et des Worlds, dates provisoires des Worlds, Esports Nations Cup reportée à novembre 2027), affiché comme « Annoncé » avec des dates approximatives.
- **Résultats** : vainqueur, finaliste, score et MVP des finales, matchs des phases finales des Worlds, et un palmarès de l'année. Chaque équipe a une pastille à ses couleurs.
- **Images** : vignettes et illustrations officielles des champions, chargées depuis Data Dragon, le serveur d'images de Riot Games.
- **Liens officiels** dans chaque fiche : guides et annonces LoL Esports, notes de patch, pages d'événements Riot, dans la langue choisie quand le site officiel la propose.
- Un résumé « en ce moment » (saison, patch, prochain rendez-vous), des filtres par couloir, une frise annuelle et un agenda mois par mois avec une fiche détail.
- Un choix de langue discret en haut à droite. Par défaut, le site prend la langue du navigateur ; le choix du visiteur est ensuite mémorisé.
- Une mise en page adaptée aux smartphones : cartes et filtres défilants, frise à faire glisser, fiche détail qui s'ouvre en panneau depuis le bas de l'écran.
- Les couleurs du client League of Legends (noir hextech, bleus profonds, ors).

Les barres en pointillé signalent des dates approximatives.

## Utilisation

Site statique sans dépendance ni étape de build : ouvrez `index.html` dans un navigateur, ou servez le dossier avec n'importe quel serveur web (GitHub Pages, par exemple).

La langue est choisie dans cet ordre : paramètre `?lang=en` dans l'URL, dernier choix mémorisé, langue du navigateur, puis l'anglais.

## Organisation des fichiers

```
index.html        structure de la page et styles (aucun texte affiché)
js/app.js         logique d'affichage (aucun texte affiché)
data/2024.js … data/2027.js   données de chaque année, indépendantes de la langue : identifiants, dates, couloirs, résultats
data/teams.js     équipes : sigle, nom, couleur de la pastille, logo facultatif
lang/fr.js        tous les textes en français (langue de référence)
lang/en.js        tous les textes en anglais (première langue de secours)
lang/es.js, pt.js, de.js, pl.js, tr.js, ko.js, zh.js, vi.js   les autres langues
```

Chaque fichier de langue contient :

- `meta` : code, nom affiché dans la liste, attribut `lang` du document, et codes de langue des sites officiels (`le` pour LoL Esports, `lol` pour leagueoflegends.com, `sup` pour le support Riot) ;
- `months`, `monthsLong`, `date()` et `sameMonth()` : noms des mois et format des dates ;
- `ui` : textes de l'interface (certains sont des fonctions pour gérer pluriels et variables) ;
- `kinds`, `tags`, `lanes` : libellés des types d'éléments et des couloirs ;
- `linkLabels` : libellés des liens officiels ;
- `sources` : liens vers les sources, avec leur libellé ;
- `items[année][id]` : textes de chaque élément (`t` titre, `s` libellé court, `name` nom de saison, `place` lieu, `res` résultat ou affiche, `notes` précisions) ;
- `ui.tplSeason`, `tplAct`, `tplSplit`, `tplChampNew`, `tplRework`, `tplWorldsFinal`… : modèles de titres, qui évitent de traduire chaque saison ou chaque champion.

Une clé absente d'une langue est reprise de l'anglais, puis du français. Les noms propres identiques partout (par exemple « LEC Spring ») n'ont donc pas besoin d'être recopiés.

2026 est traduite entièrement dans les 10 langues. Pour 2024, 2025 et 2027, les titres sont générés dans chaque langue à partir des modèles et des noms propres ; les lieux et précisions existent en français et en anglais, et les autres langues affichent l'anglais.

## Ajouter une langue

1. Copiez `lang/en.js` en `lang/<code>.js` (par exemple `lang/it.js`) et remplacez `LOL_I18N.en` par `LOL_I18N.it`.
2. Traduisez les textes et adaptez `meta`, `months` et le format des dates.
3. Ajoutez `<script src="lang/it.js"></script>` dans `index.html`, avant `js/app.js`, et le code dans `LANG_ORDER` (`js/app.js`) pour choisir sa place dans la liste.

La nouvelle langue apparaît automatiquement dans la liste.

## Ajouter une année

1. Créez `data/2028.js` sur le modèle de `data/2025.js` (`window.LOL_DATA.years[2028] = { items: [...] }`).
2. Ajoutez lieux et précisions sous `items[2028]` dans `lang/fr.js` et `lang/en.js` (et dans les autres langues si vous le souhaitez), avec les mêmes identifiants.
3. Ajoutez `<script src="data/2028.js"></script>` dans `index.html`. `PLANNED_YEARS` (`js/app.js`) permet d'afficher grisée une année pas encore renseignée.

Le site s'ouvre sur l'année en cours si elle existe, sinon sur la dernière année passée disponible.

Réglages possibles au niveau de l'année :

```js
window.LOL_DATA.years[2025] = {
  patchUrl: "https://www.leagueoflegends.com/{lol}/news/game-updates/patch-{y}-{nn}-notes/",  // adresse des notes de patch
  lanes: { LCS: "LTA_N", CBLOL: "LTA_S" },   // nom du couloir cette année-là (libellés dans lang/<code>.js, rubrique lanes)
  items: [ ... ]
};
```

Dans `patchUrl`, `{y}` est l'année du patch, `{n}` le numéro sans zéro, `{nn}` le numéro sur deux chiffres ; un patch `25.S1.2` donne `s1-2`. Sans `patchUrl`, le modèle de 2026 s'applique.

Format d'un élément dans `data/<année>.js` :

```js
{ id: "i-msi", lane: "intl", kind: "intl", d0: "06-28", d1: "07-12", approx: false }
```

- `d0` / `d1` : `"MM-JJ"` dans l'année, ou `"AAAA-MM-JJ"` pour une autre année ; sans `d1`, l'événement dure un jour.
- `lane` : `season`, `patch`, `event`, `intl`, ou le code d'une ligue (`LEC`, `LCK`, `LPL`, `LCS`, `CBLOL`, `LCP`, `LFL`).
- `kind` : `season`, `act`, `patch`, `event`, `intl` ou `league`.
- `approx: true` affiche la barre en pointillé ; `planned: true` affiche « Annoncé » au lieu de « À venir » ; `postponed: true` barre l'élément et l'affiche « Reporté ».
- Pour un patch, `s` donne le numéro (`"26.01"`), identique dans toutes les langues.
- Titres sans traduction à écrire : `t` et `s` donnent un nom propre neutre (`t: "First Stand 2025", s: "First Stand"`), ou `tpl` choisit un modèle traduit : `season` (avec `n` et `name`), `act` (`n`, `a`), `split` (`n`), `champNew` et `rework` (`name`), `worldsFinal`, `lane` (`sp` : « LEC » + « Winter », « LTA Nord » + « Split 2 »). Un titre écrit dans la langue du visiteur (`items[année][id].t`) reste prioritaire.
- Le résultat affiché en texte est déduit de `r` quand aucune langue ne le rédige.
- `links` : liens officiels `[type, adresse]`. Dans l'adresse, `{le}`, `{lol}` et `{sup}` sont remplacés par la langue du visiteur. `["patch", "26.06"]` crée le lien vers les notes de patch, affiché seulement une fois le patch sorti.

## Résultats et équipes

Dans `data/<année>.js`, le champ `r` décrit un résultat :

```js
r: { w: "G2", l: "KC", s: "3-2", mvp: "SkewMond" }        // finale jouée
r: { w: "GEN", l: "BLG", up: true }                         // finale à venir (affiche)
r: { m: [["sf", "GEN", "IG", "3-0"], ["qf", "T1", "KC", "3-1"]] }   // matchs d'une phase
```

Les sigles renvoient à `data/teams.js`. Une équipe s'affiche par défaut comme une pastille portant son sigle sur sa couleur. Pour afficher un logo, ajoutez le fichier dans le dépôt (par exemple `img/teams/g2.png`) et indiquez-le dans `logo` :

```js
"G2": { n: "G2 Esports", c: "#E3242B", logo: "img/teams/g2.png" }
```

Si l'image ne se charge pas, la pastille revient automatiquement au sigle. Les logos appartiennent à leurs équipes : la politique de Riot pour les projets de fans ne les couvre pas.

## Images de champions

Le champ `champ` d'un élément (`champ: "Locke"`) affiche la vignette du champion dans la frise et son illustration dans la fiche. Ces images viennent de Data Dragon (`ddragon.leagueoflegends.com`). La clé est le nom du champion sans espace ni apostrophe (`Belveth` pour Bel'Veth). Hors ligne, la vignette est remplacée par un losange.

## Sources des données

Calendriers officiels des patchs de Riot Games, notes de patch, pages d'événements Riot, LoL Esports, Sheep Esports, lolnow.gg, Wikipédia et la presse esport (Inven Global, GosuGamers, Dot Esports, esports.gg…). Pour 2027 : annonces de Riot sur les lieux, dates provisoires de la KeSPA pour les Worlds, report de l'Esports Nations Cup. Données arrêtées au 13 novembre 2026. La liste détaillée figure en bas de page.

## Avertissement

lol calendar a été créé dans le cadre de la politique « Legal Jibber Jabber » de Riot Games, avec des contenus appartenant à Riot Games. Riot Games ne soutient ni ne sponsorise ce projet. League of Legends est une marque de Riot Games, Inc. Les noms et logos des équipes appartiennent à leurs propriétaires.
