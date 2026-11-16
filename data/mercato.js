/* Mercato : mouvements de joueurs par équipe. Clé = sigle de data/teams.js.
   Alimenté à la main par Claude à partir de sources publiques : aucune récupération d'actualités en direct.
   Entrée : { date: "AAAA-MM-JJ", type: "arrivée" | "départ" | "prolongation" | "fin de contrat",
   joueur, clubSource, clubDestination, commentaire, source (adresse) }. Champ inconnu : "".
   N'ajouter que des mouvements dont la source est vérifiable. */
window.LOL_MERCATO = {};
