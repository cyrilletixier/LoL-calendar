/* Données 2014, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2014]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2014] = {
    patchUrl: "wiki",
    lanes: { LCK: "OGN", LEC: "EULCS", LCS: "NALCS" },
    items: [
      /* Saisons classées */
      { id: "ps4", lane: "season", kind: "season", tpl: "pre", n: 4, sy: 2014, color: "s3", d0: "2013-11-20", d1: "01-14" },
      { id: "s4", lane: "season", kind: "season", tpl: "rank", n: 4, sy: 2014, color: "s2", d0: "01-15", d1: "11-19", links: [["patch", "4.1"]] },
      { id: "ps5", lane: "season", kind: "season", tpl: "pre", n: 5, sy: 2015, color: "s3", d0: "11-20", d1: "2015-01-14", links: [["patch", "4.20"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "4.1", d0: "01-15", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "4.2", d0: "02-10" },
      { id: "p03", lane: "patch", kind: "patch", s: "4.3", d0: "02-27" },
      { id: "p04", lane: "patch", kind: "patch", s: "4.4", d0: "03-18" },
      { id: "p05", lane: "patch", kind: "patch", s: "4.5", d0: "04-03" },
      { id: "p06", lane: "patch", kind: "patch", s: "4.6", d0: "04-21" },
      { id: "p07", lane: "patch", kind: "patch", s: "4.7", d0: "05-08" },
      { id: "p08", lane: "patch", kind: "patch", s: "4.8", d0: "05-22" },
      { id: "p09", lane: "patch", kind: "patch", s: "4.9", d0: "06-04" },
      { id: "p10", lane: "patch", kind: "patch", s: "4.10", d0: "06-18" },
      { id: "p11", lane: "patch", kind: "patch", s: "4.11", d0: "07-02" },
      { id: "p12", lane: "patch", kind: "patch", s: "4.12", d0: "07-16" },
      { id: "p13", lane: "patch", kind: "patch", s: "4.13", d0: "07-30" },
      { id: "p14", lane: "patch", kind: "patch", s: "4.14", d0: "08-13" },
      { id: "p15", lane: "patch", kind: "patch", s: "4.15", d0: "08-27" },
      { id: "p16", lane: "patch", kind: "patch", s: "4.16", d0: "09-10" },
      { id: "p17", lane: "patch", kind: "patch", s: "4.17", d0: "09-25" },
      { id: "p18", lane: "patch", kind: "patch", s: "4.18", d0: "10-09" },
      { id: "p19", lane: "patch", kind: "patch", s: "4.19", d0: "11-05" },
      { id: "p20", lane: "patch", kind: "patch", s: "4.20", d0: "11-20", key: true },
      { id: "p21", lane: "patch", kind: "patch", s: "4.21", d0: "12-10" },

      /* Champions */
      { id: "c-velkoz", lane: "champ", kind: "champ", tpl: "champNew", name: "Vel'Koz", d0: "02-27", links: [["patch", "4.3"]], champ: "Velkoz" },
      { id: "c-braum", lane: "champ", kind: "champ", tpl: "champNew", name: "Braum", d0: "05-12", links: [["patch", "4.7"]], champ: "Braum" },
      { id: "c-gnar", lane: "champ", kind: "champ", tpl: "champNew", name: "Gnar", d0: "08-14", links: [["patch", "4.14"]], champ: "Gnar" },
      { id: "c-azir", lane: "champ", kind: "champ", tpl: "champNew", name: "Azir", d0: "09-16", links: [["patch", "4.16"]], champ: "Azir" },
      { id: "c-kalista", lane: "champ", kind: "champ", tpl: "champNew", name: "Kalista", d0: "11-20", links: [["patch", "4.20"]], champ: "Kalista" },
      { id: "c-reksai", lane: "champ", kind: "champ", tpl: "champNew", name: "Rek'Sai", d0: "12-11", links: [["patch", "4.21"]], champ: "RekSai" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-lunar", lane: "event", kind: "event", t: "Lunar Revel 2014", s: "Lunar Revel", d0: "01-15", links: [["patch", "4.1"]] },
      { id: "e-teambuilder", lane: "event", kind: "event", t: "Team Builder", s: "Team Builder", d0: "02-27", links: [["patch", "4.3"]] },
      { id: "e-harrowing", lane: "event", kind: "event", t: "Harrowing 2014 · Hexakill", s: "Harrowing", d0: "10-09", links: [["patch", "4.18"]] },
      { id: "e-srupdate", lane: "event", kind: "event", d0: "11-05", key: true, links: [["patch", "4.19"]] },
      { id: "e-snowdown", lane: "event", kind: "event", t: "Snowdown Showdown 2014 · Legend of the Poro King", s: "Snowdown", d0: "12-10", links: [["patch", "4.21"]] },

      /* International */
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2014", s: "Worlds", d0: "09-18", d1: "10-19" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "10-19", key: true, r: { w: "SSW", l: "SHR", s: "3-1" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-14", d1: "04-17", r: { w: "FNC", l: "SK" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "05-20", d1: "08-17", r: { w: "ALL", l: "FNC" } },

      /* OGN Champions puis LCK */
      { id: "ogn-wi13", lane: "LCK", kind: "league", tpl: "lane", sp: "Winter", d0: "2013-11-15", d1: "01-25", r: { w: "SKTK", l: "SSB", s: "3-0" } },
      { id: "ogn-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "03-12", d1: "05-24", r: { w: "SSB", l: "NJWS" } },
      { id: "ogn-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "06-18", d1: "08-16", r: { w: "KTA", l: "SSB" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "02-22", d1: "05-25", r: { w: "EDG", l: "IG" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-14", d1: "08-24", r: { w: "EDG", l: "OMG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-16", d1: "04-20", r: { w: "C9", l: "TSM" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "05-23", d1: "09-01", r: { w: "TSM", l: "C9" } },

      /* CBLOL */
      { id: "cb-cs", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Champions Series", d0: "04-26", d1: "06-08", r: { w: "KEYD", l: "PAIN" } },
      { id: "cb-rf", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Regional Finals", d0: "07-18", d1: "07-26", r: { w: "KBM", l: "CNB" } }
    ]
  };
})();
