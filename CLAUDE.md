# Consignes pour ce dépôt

Voir README.md pour le format des données et des langues.

## Règles à respecter quoi qu'il arrive

- **Taïwan s'appelle Taïwan.** N'écrire jamais « Taipei chinois », « Chinese Taipei » ni leurs traductions, même si l'organisateur d'une compétition (Jeux asiatiques, etc.) emploie ce nom. Sigle d'équipe : `TWN`, jamais `TPE`. Noms par langue : fr Taïwan, en Taiwan, es Taiwán, pt Taiwan, de Taiwan, pl Tajwan, tr Tayvan, ko 대만, zh 台湾, vi Đài Loan. La ville de Taipei et les noms d'équipes (Taipei Assassins…) ne changent pas.
- Tout texte affiché (titres, lieux, précisions) doit exister dans les 10 langues de `lang/`.

## Mercato (`data/mercato.js`, rubrique `rosters` de `data/2026.js` et `data/2027.js`)

- Le site reste statique : aucune récupération d'actualités en direct, aucun appel réseau. Claude alimente les fichiers à la main à partir de sources publiques vérifiables (suivis d'effectifs de Team aAa et Strafe, Rostermania, Sheep Esports, annonces officielles des équipes).
- Mouvements : `window.LOL_MERCATO = { "SIGLE": [{ date, type, statut, joueur, role, clubSource | clubDestination, commentaire, source }] }`, avec le sigle de `data/teams.js`. `date` : `AAAA-MM-JJ` (ou `AAAA-MM` si le jour est inconnu). `type` : arrivée, départ, prolongation ou fin de contrat. `statut` : `officiel` (annonce de l'équipe ou du joueur) ou `rumeur` (tout le reste, y compris « aurait trouvé un accord »). `role` : TOP, JNG, MID, ADC ou SUP (vide si inconnu). `commentaire` : vide ou une clé traduite (retraite, accord, rachat), jamais de texte libre. `source` : adresse de la page qui porte l'information, obligatoire.
- Un transfert s'écrit sur les deux équipes : un `départ` chez l'équipe quittée et une `arrivée` chez l'équipe d'accueil, avec le même statut et la même source. Quand le départ est officiel et la destination seulement rumeur, deux entrées de statut différent.
- Compositions : `rosters` de `data/2026.js` (fin de saison 2026, remplaçants compris) et de `data/2027.js` (état connu, avec `statut` : `confirmé` ou `rumeur`), au même format par sigle. Une équipe dont la liste est incomplète n'est pas saisie. Ne jamais compléter un poste inconnu par déduction.
- Ne rien inventer : pas de mouvement sans source vérifiable. Une rumeur démentie ou dépassée est corrigée ou retirée.
- Les libellés de la vue (types, statuts, rôles, motifs) sont dans la rubrique `mercato` de chaque `lang/<code>.js`, dans les 10 langues.
- Les entraîneurs et les staffs ne sont pas suivis.
