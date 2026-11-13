/* Données 2012, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2012]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2012] = {
    patchUrl: "wiki",
    lanes: { LCK: "OGN" },
    items: [
      /* Saisons classées */
      { id: "s2", lane: "season", kind: "season", tpl: "rank", n: 2, color: "s2", d0: "2011-11-29", d1: "11-13" },
      { id: "ps3", lane: "season", kind: "season", tpl: "pre", n: 3, color: "s3", d0: "11-20", d1: "2013-01-31", links: [["patch", "1.0.0.152"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "1.0.0.132", d0: "01-17" },
      { id: "p02", lane: "patch", kind: "patch", s: "1.0.0.133", d0: "02-01" },
      { id: "p03", lane: "patch", kind: "patch", s: "1.0.0.134", d0: "02-14" },
      { id: "p04", lane: "patch", kind: "patch", s: "1.0.0.135", d0: "02-29" },
      { id: "p05", lane: "patch", kind: "patch", s: "1.0.0.136", d0: "03-20" },
      { id: "p06", lane: "patch", kind: "patch", s: "1.0.0.138", d0: "04-18" },
      { id: "p07", lane: "patch", kind: "patch", s: "1.0.0.139", d0: "05-01" },
      { id: "p08", lane: "patch", kind: "patch", s: "1.0.0.140", d0: "05-23" },
      { id: "p09", lane: "patch", kind: "patch", s: "1.0.0.140b", d0: "06-05" },
      { id: "p10", lane: "patch", kind: "patch", s: "1.0.0.141", d0: "06-17" },
      { id: "p11", lane: "patch", kind: "patch", s: "1.0.0.142", d0: "07-07" },
      { id: "p12", lane: "patch", kind: "patch", s: "1.0.0.143", d0: "07-19" },
      { id: "p13", lane: "patch", kind: "patch", s: "1.0.0.144", d0: "08-01" },
      { id: "p14", lane: "patch", kind: "patch", s: "1.0.0.145", d0: "08-14" },
      { id: "p15", lane: "patch", kind: "patch", s: "1.0.0.146", d0: "08-30" },
      { id: "p16", lane: "patch", kind: "patch", s: "1.0.0.147", d0: "09-12" },
      { id: "p17", lane: "patch", kind: "patch", s: "1.0.0.148", d0: "09-27" },
      { id: "p18", lane: "patch", kind: "patch", s: "1.0.0.149", d0: "10-17" },
      { id: "p19", lane: "patch", kind: "patch", s: "1.0.0.150", d0: "10-25" },
      { id: "p20", lane: "patch", kind: "patch", s: "1.0.0.151", d0: "11-13" },
      { id: "p21", lane: "patch", kind: "patch", s: "1.0.0.152", d0: "12-04", key: true },
      { id: "p22", lane: "patch", kind: "patch", s: "1.0.0.153", d0: "12-14" },

      /* Champions */
      { id: "c-sejuani", lane: "champ", kind: "champ", tpl: "champNew", name: "Sejuani", d0: "01-17", links: [["patch", "1.0.0.132"]], champ: "Sejuani" },
      { id: "c-ziggs", lane: "champ", kind: "champ", tpl: "champNew", name: "Ziggs", d0: "02-01", links: [["patch", "1.0.0.133"]], champ: "Ziggs" },
      { id: "c-nautilus", lane: "champ", kind: "champ", tpl: "champNew", name: "Nautilus", d0: "02-14", links: [["patch", "1.0.0.134"]], champ: "Nautilus" },
      { id: "c-fiora", lane: "champ", kind: "champ", tpl: "champNew", name: "Fiora", d0: "02-29", links: [["patch", "1.0.0.135"]], champ: "Fiora" },
      { id: "c-lulu", lane: "champ", kind: "champ", tpl: "champNew", name: "Lulu", d0: "03-20", links: [["patch", "1.0.0.136"]], champ: "Lulu" },
      { id: "c-hecarim", lane: "champ", kind: "champ", tpl: "champNew", name: "Hecarim", d0: "04-18", links: [["patch", "1.0.0.138"]], champ: "Hecarim" },
      { id: "c-varus", lane: "champ", kind: "champ", tpl: "champNew", name: "Varus", d0: "05-08", links: [["patch", "1.0.0.139"]], champ: "Varus" },
      { id: "c-darius", lane: "champ", kind: "champ", tpl: "champNew", name: "Darius", d0: "05-23", links: [["patch", "1.0.0.140"]], champ: "Darius" },
      { id: "c-draven", lane: "champ", kind: "champ", tpl: "champNew", name: "Draven", d0: "06-06", links: [["patch", "1.0.0.140b"]], champ: "Draven" },
      { id: "c-jayce", lane: "champ", kind: "champ", tpl: "champNew", name: "Jayce", d0: "07-07", links: [["patch", "1.0.0.142"]], champ: "Jayce" },
      { id: "c-zyra", lane: "champ", kind: "champ", tpl: "champNew", name: "Zyra", d0: "07-24", links: [["patch", "1.0.0.143"]], champ: "Zyra" },
      { id: "c-diana", lane: "champ", kind: "champ", tpl: "champNew", name: "Diana", d0: "08-07", links: [["patch", "1.0.0.144"]], champ: "Diana" },
      { id: "c-rengar", lane: "champ", kind: "champ", tpl: "champNew", name: "Rengar", d0: "08-21", links: [["patch", "1.0.0.145"]], champ: "Rengar" },
      { id: "c-syndra", lane: "champ", kind: "champ", tpl: "champNew", name: "Syndra", d0: "09-13", links: [["patch", "1.0.0.147"]], champ: "Syndra" },
      { id: "c-khazix", lane: "champ", kind: "champ", tpl: "champNew", name: "Kha'Zix", d0: "09-27", links: [["patch", "1.0.0.148"]], champ: "Khazix" },
      { id: "c-elise", lane: "champ", kind: "champ", tpl: "champNew", name: "Elise", d0: "10-26", links: [["patch", "1.0.0.150"]], champ: "Elise" },
      { id: "c-zed", lane: "champ", kind: "champ", tpl: "champNew", name: "Zed", d0: "11-13", links: [["patch", "1.0.0.151"]], champ: "Zed" },
      { id: "c-nami", lane: "champ", kind: "champ", tpl: "champNew", name: "Nami", d0: "12-07", links: [["patch", "1.0.0.152"]], champ: "Nami" },
      { id: "c-vi", lane: "champ", kind: "champ", tpl: "champNew", name: "Vi", d0: "12-19", links: [["patch", "1.0.0.153"]], champ: "Vi" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-spectator", lane: "event", kind: "event", d0: "05-01", links: [["patch", "1.0.0.139"]] },
      { id: "e-snowdown", lane: "event", kind: "event", t: "Snowdown Showdown 2012", s: "Snowdown", d0: "12-14", links: [["patch", "1.0.0.153"]] },

      /* International */
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Season 2 World Championship", s: "Worlds", d0: "10-04", d1: "10-13" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "10-13", key: true, r: { w: "TPA", l: "AZF", s: "3-1" } },

      /* OGN Champions puis LCK */
      { id: "ogn-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "03-21", d1: "05-19", r: { w: "MIGB", l: "MIGF", s: "3-0" } },
      { id: "ogn-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "07-04", d1: "09-08", r: { w: "AZF", l: "CLGEU" } },
      { id: "ogn-wi12", lane: "LCK", kind: "league", tpl: "lane", sp: "Winter", d0: "11-09", d1: "2013-02-02" },

      /* CBLOL */
      { id: "cb-12", lane: "CBLOL", kind: "league", t: "Riot Brazilian Championship 2012", s: "Riot Brazilian Championship 2012", d0: "10-11", d1: "10-14", r: { w: "VTI", l: "VTN", s: "2-0" } }
    ]
  };
})();
