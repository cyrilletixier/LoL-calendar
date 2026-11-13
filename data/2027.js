/* Données 2027 connues au 13 novembre 2026 (format décrit dans data/2026.js).
   Seuls les lieux et quelques dates provisoires sont annoncés : tout est marqué planned (annoncé)
   et approx (dates approximatives) tant que Riot n'a pas publié le calendrier.
   Lieux et précisions : lang/fr.js et lang/en.js, sous items[2027]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2027] = {
    items: [
      /* Fin de la Saison 3 de 2026 (5 janvier 2027) */
      { id: "s3-26", lane: "season", kind: "season", tpl: "season", n: 3, name: "Classic", color: "s3", d0: "2026-07-29", d1: "01-05" },

      /* International */
      { id: "i-fst",     lane: "intl", kind: "intl", t: "First Stand 2027", s: "First Stand", d0: "03-15", d1: "03-21", approx: true, planned: true },
      { id: "i-msi",     lane: "intl", kind: "intl", t: "Mid-Season Invitational 2027", s: "MSI", d0: "06-26", d1: "07-11", approx: true, planned: true },
      { id: "i-worlds",  lane: "intl", kind: "intl", t: "Worlds 2027", s: "Worlds", d0: "10-15", d1: "11-13", approx: true, planned: true },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-14", approx: true, planned: true },
      { id: "i-enc",     lane: "intl", kind: "intl", t: "Esports Nations Cup 2027", s: "Esports Nations Cup", d0: "11-01", d1: "11-30", approx: true, planned: true }
    ]
  };
})();
