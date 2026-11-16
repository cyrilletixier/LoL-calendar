# Consignes pour ce dépôt

Voir README.md pour le format des données et des langues.

## Règles à respecter quoi qu'il arrive

- **Taïwan s'appelle Taïwan.** N'écrire jamais « Taipei chinois », « Chinese Taipei » ni leurs traductions, même si l'organisateur d'une compétition (Jeux asiatiques, etc.) emploie ce nom. Sigle d'équipe : `TWN`, jamais `TPE`. Noms par langue : fr Taïwan, en Taiwan, es Taiwán, pt Taiwan, de Taiwan, pl Tajwan, tr Tayvan, ko 대만, zh 台湾, vi Đài Loan. La ville de Taipei et les noms d'équipes (Taipei Assassins…) ne changent pas.
- Tout texte affiché (titres, lieux, précisions) doit exister dans les 10 langues de `lang/`.

## Mercato (`data/mercato.js`)

- Le site reste statique : aucune récupération d'actualités en direct, aucun appel réseau. Claude alimente le fichier à la main à partir de sources publiques vérifiables.
- Format : `window.LOL_MERCATO = { "SIGLE": [{ date, type, joueur, clubSource, clubDestination, commentaire, source }] }`, avec le sigle de `data/teams.js`. `date` au format `AAAA-MM-JJ`, `type` : arrivée, départ, prolongation ou fin de contrat.
- Ne rien inventer : pas de mouvement sans source vérifiable.
- Composition 2026 : rubrique `rosters` de `data/2026.js`, au même format par sigle.
