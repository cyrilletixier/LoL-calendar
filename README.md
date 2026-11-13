# lol calendar

Calendrier League of Legends sur une seule page : saisons et actes, patchs, événements en jeu et compétitions pro d'une année. Toutes les années du jeu sont disponibles, de 2009 (bêta et sortie de League of Legends) à 2026 (année affichée par défaut), plus les dates déjà connues de 2027. Le site est disponible en 10 langues : français, anglais, espagnol, portugais (Brésil), allemand, polonais, turc, coréen, chinois simplifié et vietnamien.

## Ce que contient la page

- **Choix de l'année** : une liste déroulante (années regroupées par décennie, la plus récente en haut), des flèches pour passer à l'année précédente ou suivante, et un bouton « Aujourd'hui » pour revenir à l'année en cours. L'adresse de la page garde l'année affichée (`?year=2015`), ce qui permet de partager un lien direct.
- **En jeu** : les saisons classées depuis la Saison 1 (2010) avec leurs pré-saisons, les actes (2025 : Noxus, Spirit Blossom Beyond, Trials of Twilight ; 2026 : For Demacia, Pandemonium, Classic), les splits classés de 2023 et 2024, tous les patchs depuis la bêta de 2009, la sortie de chaque champion depuis les 17 premiers de l'alpha, les refontes récentes (Smolder, Aurora, Ambessa, Mel, Yunara, Zaahen, Locke…), les événements et nouveautés marquants (sortie du jeu, ligues classées, Ultra Rapid Fire, Teamfight Tactics, Arena, Swarm, League Classic…).
- **Esport** : les compétitions internationales (Worlds depuis le Season 1 Championship de 2011, MSI, First Stand, Esports World Cup…) et les ligues LEC, LCK, LPL, LCS, CBLOL, LCP et LFL, avec vainqueurs et finalistes. Les couloirs prennent le nom de l'année : OGN Champions (2012–2014), EU LCS et NA LCS (2013–2018), LMS (2015–2019), PCS (2020–2024), LTA Nord et LTA Sud (2025). Une ligue qui n'existait pas encore n'a pas de couloir.
- **Univers** : un troisième groupe de la frise, à côté de « En jeu » et « Esport », pour les sorties liées à Runeterra en dehors du jeu et de l'esport. Trois couloirs : animation (Arcane, cinématiques de saison, clips), livres (romans, livres d'art) et expos & concerts (expositions, concerts, spectacles), de 2024 à 2026. Ils se traitent comme les autres : frise, filtres (y compris « Univers seulement »), agenda mois par mois, fiche détail.
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

La langue est choisie dans cet ordre : paramètre `?lang=en` dans l'URL, dernier choix mémorisé, langue du navigateur, puis l'anglais. L'année suit le même principe : paramètre `?year=2015`, dernier choix mémorisé, puis l'année en cours.

## Organisation des fichiers

```
index.html        structure de la page et styles (aucun texte affiché)
js/app.js         logique d'affichage (aucun texte affiché)
data/2009.js … data/2027.js   données de chaque année, indépendantes de la langue : identifiants, dates, couloirs, résultats
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
- `items[année][id]` : textes de chaque élément, y compris ceux de l'univers (`t` titre, `s` libellé court, `name` nom de saison, `place` lieu, `res` résultat ou affiche, `notes` précisions) ;
- `ui.tplSeason`, `tplAct`, `tplSplit`, `tplRank`, `tplPre`, `tplChampNew`, `tplChampBatch`, `tplRework`, `tplWorldsFinal`… : modèles de titres, qui évitent de traduire chaque saison ou chaque champion ;
- `splits` (facultatif) : noms traduits des phases de ligue (« Spring » → « 스프링 »), utilisés par le modèle `lane`.

Une clé absente d'une langue est reprise de l'anglais, puis du français. Les noms propres identiques partout (par exemple « LEC Spring ») n'ont donc pas besoin d'être recopiés.

Toutes les années sont traduites dans les 10 langues : titres générés à partir des modèles, lieux et précisions rédigés pour chaque langue. Les noms propres officiels (Lunar Revel, Arena, Teamfight Tactics, LEC Spring…) restent identiques partout ; le coréen, le chinois et le vietnamien traduisent en plus les noms des compétitions internationales et des phases de ligue.

Les années 2009 à 2023 ont été établies à partir de listes vérifiées (wiki LoL pour les patchs, les saisons et les champions, Liquipedia pour les compétitions). Pour corriger une date ou un résultat, modifiez directement `data/<année>.js` ; pour un texte, `lang/<code>.js`, rubrique `items[année]`.

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
  patchUrl: "https://www.leagueoflegends.com/{lol}/news/game-updates/patch-{y}-{nn}-notes/",  // adresse des notes de patch ("wiki" : pages du wiki LoL)
  lanes: { LCS: "LTA_N", CBLOL: "LTA_S" },   // nom du couloir cette année-là (libellés dans lang/<code>.js, rubrique lanes)
  items: [ ... ]
};
```

Dans `patchUrl`, `{y}` est l'année du patch, `{n}` le numéro sans zéro (`13.1b` donne `1b`), `{nn}` le numéro sur deux chiffres ; un patch `25.S1.2` donne `s1-2`. Sans `patchUrl`, le modèle de 2026 s'applique. Avec `patchUrl: "wiki"` (2009 à 2019, années sans notes officielles en ligne), le lien mène à la page du patch sur le wiki LoL (`V1.0.0.152`, `V9.22`). Un patch marqué `nolink: true` (bêta de 2009) n'a pas de lien.

Format d'un élément dans `data/<année>.js` :

```js
{ id: "i-msi", lane: "intl", kind: "intl", d0: "06-28", d1: "07-12", approx: false }
```

- `d0` / `d1` : `"MM-JJ"` dans l'année, ou `"AAAA-MM-JJ"` pour une autre année ; sans `d1`, l'événement dure un jour.
- `lane` : `season`, `patch`, `event`, `intl`, ou le code d'une ligue (`LEC`, `LCK`, `LPL`, `LCS`, `CBLOL`, `LCP`, `LFL`).
- `kind` : `season`, `act`, `patch`, `event`, `intl` ou `league`.
- `approx: true` affiche la barre en pointillé ; `planned: true` affiche « Annoncé » au lieu de « À venir » ; `postponed: true` barre l'élément et l'affiche « Reporté ».
- Pour un patch, `s` donne le numéro (`"26.01"`), identique dans toutes les langues.
- Titres sans traduction à écrire : `t` et `s` donnent un nom propre neutre (`t: "First Stand 2025", s: "First Stand"`), ou `tpl` choisit un modèle traduit : `season` (avec `n` et `name`), `act` (`n`, `a`), `split` (`n`), `rank` (saison classée : `n`, et `sy` pour l'année officielle, « Saison 2014 »), `pre` (pré-saison : `n`, `sy`), `champNew` et `rework` (`name`), `champBatch` (`n` champions d'un coup, noms dans `list`), `worldsFinal`, `lane` (`sp` : « LEC » + « Winter », « LTA Nord » + « Split 2 »). Un titre écrit dans la langue du visiteur (`items[année][id].t`) reste prioritaire.
- Le résultat affiché en texte est déduit de `r` quand aucune langue ne le rédige.
- `links` : liens officiels `[type, adresse]`. Dans l'adresse, `{le}`, `{lol}` et `{sup}` sont remplacés par la langue du visiteur. `["patch", "26.06"]` crée le lien vers les notes de patch, affiché seulement une fois le patch sorti.

## Univers

Les sorties de l'univers hors jeu et hors esport sont des éléments de `items` comme les autres, avec un couloir par type :

```js
{ id: "x-arcane2", lane: "anim", kind: "anim", t: "Arcane · Season 2", s: "Arcane S2", d0: "11-09", d1: "11-23",
  links: [["netflix", "https://www.netflix.com/title/81435684"]] }
```

- `lane` et `kind` prennent la même valeur : `anim` (séries, cinématiques, clips), `book` (romans, livres d'art) ou `live` (expositions, concerts, spectacles). Libellés dans `lanes`, `kinds` et `tags` de chaque langue, couleurs `--c-anim`, `--c-book` et `--c-live` dans `index.html`.
- `d0`, `d1`, `approx`, `planned` et `links` fonctionnent comme pour les autres éléments.
- `t` porte le titre d'origine quand il est le même partout ; lieux et précisions vont dans `items[année][id]` de `lang/fr.js` et `lang/en.js`. Les autres langues reprennent l'anglais.
- Types de liens : `netflix`, `fortiche`, `venue`, `publisher`, `press` (libellés dans `linkLabels`).
- Un couloir sans élément cette année-là n'apparaît pas ; le groupe « Univers » disparaît avec ses trois couloirs.

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

**Règle du projet, sans exception : Taïwan s'appelle Taïwan.** Jamais « Taipei chinois » ni « Chinese Taipei », quel que soit le nom employé par l'organisateur (Jeux asiatiques, etc.). Le sigle est `TWN`, jamais `TPE`. Les noms dans les langues : Taïwan, Taiwan (en, pt, de), Taiwán, Tajwan, Tayvan, 대만, 台湾, Đài Loan. La ville de Taipei et les noms d'équipes comme Taipei Assassins restent inchangés.

## Images de champions

Le champ `champ` d'un élément (`champ: "Locke"`) affiche la vignette du champion dans la frise et son illustration dans la fiche. Ces images viennent de Data Dragon (`ddragon.leagueoflegends.com`). La clé est le nom du champion sans espace ni apostrophe (`Belveth` pour Bel'Veth). Hors ligne, la vignette est remplacée par un losange.

## Sources des données

Wiki League of Legends (dates de tous les patchs et des saisons classées), Liquipedia (dates, vainqueurs et finalistes des ligues, des Worlds et du MSI depuis 2011), liste des dates de sortie des champions, calendriers officiels des patchs de Riot Games, notes de patch, pages d'événements Riot, LoL Esports, Sheep Esports, lolnow.gg, Wikipédia et la presse esport (Inven Global, GosuGamers, Dot Esports, esports.gg…). Pour l'univers : Fortiche, éditeurs (Orbit, Insight Editions, Louis Vuitton), salles de concert et presse. Pour 2027 : annonces de Riot sur les lieux, dates provisoires de la KeSPA pour les Worlds, report de l'Esports Nations Cup. Données arrêtées au 13 novembre 2026. La liste détaillée figure en bas de page.

## Avertissement

lol calendar a été créé dans le cadre de la politique « Legal Jibber Jabber » de Riot Games, avec des contenus appartenant à Riot Games. Riot Games ne soutient ni ne sponsorise ce projet. League of Legends est une marque de Riot Games, Inc. Les noms et logos des équipes appartiennent à leurs propriétaires.
