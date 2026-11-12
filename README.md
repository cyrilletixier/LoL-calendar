# lol calendar

Calendrier League of Legends sur une seule page : saisons et actes, patchs, événements en jeu et compétitions pro d'une année. La première année renseignée est 2026.

## Ce que contient la page

- **En jeu** : les saisons et leurs actes (2026 : For Demacia, Pandemonium, Classic), les 24 patchs, les événements en jeu (Lunar Revel, Brawl, League Classic, Hall of Legends, HEARTSTEEL…).
- **Esport** : les compétitions internationales (First Stand, MSI, Esports World Cup, Worlds, Nations Cup…) et les ligues LEC, LCK, LPL, LCS, CBLOL, LCP et LFL, avec les vainqueurs connus.
- Un résumé « en ce moment » (saison, patch, prochain rendez-vous), des filtres par couloir, une frise annuelle et un agenda mois par mois avec une fiche détail.

Les barres en pointillé signalent des dates approximatives.

## Utilisation

Site statique sans dépendance ni étape de build : ouvrez `index.html` dans un navigateur, ou servez le dossier avec n'importe quel serveur web (GitHub Pages, par exemple).

## Ajouter une année

Toutes les données sont dans l'objet `CAL` du script de `index.html`. Pour ajouter une année, créez une entrée `CAL[2027] = { items: [...] }` sur le modèle de 2026, puis retirez l'année de `PLANNED_YEARS`.

Chaque élément suit ce format :

```js
{ id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2026", s: "MSI",
  d0: "06-28", d1: "07-12",            // d1 absent = événement d'un jour ; "AAAA-MM-JJ" pour une autre année
  place: "Daejeon, Corée du Sud", res: "Hanwha Life Esports 3-2 Bilibili Gaming",
  notes: "…", approx: false }
```

- `lane` : `season`, `patch`, `event`, `intl`, ou le code d'une ligue (`LEC`, `LCK`, `LPL`, `LCS`, `CBLOL`, `LCP`, `LFL`).
- `kind` : `season`, `act`, `patch`, `event`, `intl` ou `league`.
- `approx: true` affiche la barre en pointillé ; `planned: true` affiche « Annoncé » au lieu de « À venir ».

## Sources des données 2026

Calendrier officiel des patchs de Riot Games, pages d'événements Riot, LoL Esports, Sheep Esports, lolnow.gg et la presse esport (Inven Global, GosuGamers, Dot Esports…). Données arrêtées au 12 novembre 2026.

## Avertissement

Projet de fan, sans lien avec Riot Games. League of Legends est une marque de Riot Games, Inc.
