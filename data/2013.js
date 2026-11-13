/* Données 2013, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2013]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2013] = {
    patchUrl: "wiki",
    lanes: { LCK: "OGN", LEC: "EULCS", LCS: "NALCS" },
    items: [
      /* Saisons classées */
      { id: "ps3", lane: "season", kind: "season", tpl: "pre", n: 3, color: "s3", d0: "2012-11-20", d1: "01-31" },
      { id: "s3", lane: "season", kind: "season", tpl: "rank", n: 3, color: "s1", d0: "02-01", d1: "11-19", links: [["patch", "3.01"]] },
      { id: "ps4", lane: "season", kind: "season", tpl: "pre", n: 4, sy: 2014, color: "s3", d0: "11-20", d1: "2014-01-14", links: [["patch", "3.14"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "1.0.0.154", d0: "01-16" },
      { id: "p02", lane: "patch", kind: "patch", s: "3.01", d0: "02-01", key: true },
      { id: "p03", lane: "patch", kind: "patch", s: "3.02", d0: "02-13" },
      { id: "p04", lane: "patch", kind: "patch", s: "3.03", d0: "03-01" },
      { id: "p05", lane: "patch", kind: "patch", s: "3.04", d0: "03-19" },
      { id: "p06", lane: "patch", kind: "patch", s: "3.5", d0: "03-28" },
      { id: "p07", lane: "patch", kind: "patch", s: "3.6", d0: "04-30" },
      { id: "p08", lane: "patch", kind: "patch", s: "3.7", d0: "05-15" },
      { id: "p09", lane: "patch", kind: "patch", s: "3.8", d0: "06-13" },
      { id: "p10", lane: "patch", kind: "patch", s: "3.9", d0: "07-09" },
      { id: "p11", lane: "patch", kind: "patch", s: "3.10", d0: "07-30" },
      { id: "p12", lane: "patch", kind: "patch", s: "3.10a", d0: "08-22" },
      { id: "p13", lane: "patch", kind: "patch", s: "3.11", d0: "09-04" },
      { id: "p14", lane: "patch", kind: "patch", s: "3.12", d0: "10-01" },
      { id: "p15", lane: "patch", kind: "patch", s: "3.13", d0: "10-29" },
      { id: "p16", lane: "patch", kind: "patch", s: "3.14", d0: "11-20", key: true },
      { id: "p17", lane: "patch", kind: "patch", s: "3.15", d0: "12-13" },

      /* Champions */
      { id: "c-thresh", lane: "champ", kind: "champ", tpl: "champNew", name: "Thresh", d0: "01-23", links: [["patch", "1.0.0.154"]], champ: "Thresh" },
      { id: "c-quinn", lane: "champ", kind: "champ", tpl: "champNew", name: "Quinn", d0: "03-01", links: [["patch", "3.03"]], champ: "Quinn" },
      { id: "c-zac", lane: "champ", kind: "champ", tpl: "champNew", name: "Zac", d0: "03-29", links: [["patch", "3.5"]], champ: "Zac" },
      { id: "c-lissandra", lane: "champ", kind: "champ", tpl: "champNew", name: "Lissandra", d0: "04-30", links: [["patch", "3.6"]], champ: "Lissandra" },
      { id: "c-aatrox", lane: "champ", kind: "champ", tpl: "champNew", name: "Aatrox", d0: "06-13", links: [["patch", "3.8"]], champ: "Aatrox" },
      { id: "c-lucian", lane: "champ", kind: "champ", tpl: "champNew", name: "Lucian", d0: "08-22", links: [["patch", "3.10a"]], champ: "Lucian" },
      { id: "c-jinx", lane: "champ", kind: "champ", tpl: "champNew", name: "Jinx", d0: "10-10", links: [["patch", "3.12"]], champ: "Jinx" },
      { id: "c-yasuo", lane: "champ", kind: "champ", tpl: "champNew", name: "Yasuo", d0: "12-13", links: [["patch", "3.15"]], champ: "Yasuo" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-leagues", lane: "event", kind: "event", d0: "02-01", key: true, links: [["patch", "3.01"]] },
      { id: "e-harrowing", lane: "event", kind: "event", t: "Harrowing 2013", s: "Harrowing", d0: "10-29", links: [["patch", "3.13"]] },
      { id: "e-snowdown", lane: "event", kind: "event", t: "Snowdown Showdown 2013", s: "Snowdown", d0: "12-13", links: [["patch", "3.15"]] },

      /* International */
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Season 3 World Championship", s: "Worlds", d0: "09-15", d1: "10-04" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "10-04", key: true, r: { w: "SKTK", l: "RYL", s: "3-0" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "02-09", d1: "04-28", r: { w: "FNC", l: "GMB" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-15", d1: "08-25", r: { w: "FNC", l: "LD" } },

      /* OGN Champions puis LCK */
      { id: "ogn-wi12", lane: "LCK", kind: "league", tpl: "lane", sp: "Winter", d0: "2012-11-09", d1: "02-02", r: { w: "NJS", l: "AZF", s: "3-0" } },
      { id: "ogn-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "04-03", d1: "06-15", r: { w: "MVPO", l: "CJB" } },
      { id: "ogn-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "07-03", d1: "08-31", r: { w: "SKTK", l: "KTB", s: "3-2" } },
      { id: "ogn-wi13", lane: "LCK", kind: "league", tpl: "lane", sp: "Winter", d0: "11-15", d1: "2014-01-25" },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "03-16", d1: "06-23", r: { w: "OMG", l: "PE" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "07-12", d1: "11-24", r: { w: "PE", l: "OMG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "02-07", d1: "04-28", r: { w: "TSM", l: "GGU" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-12", d1: "09-01", r: { w: "C9", l: "TSM" } },

      /* CBLOL */
      { id: "cb-13", lane: "CBLOL", kind: "league", t: "Riot Brazilian Championship 2013", s: "Riot Brazilian Championship 2013", d0: "07-19", d1: "07-21", r: { w: "PAIN", l: "CNB", s: "3-1" } }
    ]
  };
})();
