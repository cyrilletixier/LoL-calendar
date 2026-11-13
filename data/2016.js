/* Données 2016, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2016]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2016] = {
    patchUrl: "wiki",
    lanes: { LEC: "EULCS", LCS: "NALCS", LCP: "LMS" },
    items: [
      /* Saisons classées */
      { id: "ps6", lane: "season", kind: "season", tpl: "pre", n: 6, sy: 2016, color: "s3", d0: "2015-11-11", d1: "01-13" },
      { id: "s6", lane: "season", kind: "season", tpl: "rank", n: 6, sy: 2016, color: "s2", d0: "01-14", d1: "11-09", links: [["patch", "6.1"]] },
      { id: "ps7", lane: "season", kind: "season", tpl: "pre", n: 7, sy: 2017, color: "s3", d0: "11-10", d1: "2017-01-29", links: [["patch", "6.22"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "6.1", d0: "01-14", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "6.2", d0: "01-28" },
      { id: "p03", lane: "patch", kind: "patch", s: "6.3", d0: "02-10" },
      { id: "p04", lane: "patch", kind: "patch", s: "6.4", d0: "02-24" },
      { id: "p05", lane: "patch", kind: "patch", s: "6.5", d0: "03-09" },
      { id: "p06", lane: "patch", kind: "patch", s: "6.6", d0: "03-23" },
      { id: "p07", lane: "patch", kind: "patch", s: "6.7", d0: "04-06" },
      { id: "p08", lane: "patch", kind: "patch", s: "6.8", d0: "04-20" },
      { id: "p09", lane: "patch", kind: "patch", s: "6.9", d0: "05-04" },
      { id: "p10", lane: "patch", kind: "patch", s: "6.10", d0: "05-18" },
      { id: "p11", lane: "patch", kind: "patch", s: "6.11", d0: "06-01" },
      { id: "p12", lane: "patch", kind: "patch", s: "6.12", d0: "06-15" },
      { id: "p13", lane: "patch", kind: "patch", s: "6.13", d0: "06-29" },
      { id: "p14", lane: "patch", kind: "patch", s: "6.14", d0: "07-13" },
      { id: "p15", lane: "patch", kind: "patch", s: "6.15", d0: "07-26" },
      { id: "p16", lane: "patch", kind: "patch", s: "6.16", d0: "08-10" },
      { id: "p17", lane: "patch", kind: "patch", s: "6.17", d0: "08-24" },
      { id: "p18", lane: "patch", kind: "patch", s: "6.18", d0: "09-08" },
      { id: "p19", lane: "patch", kind: "patch", s: "6.19", d0: "09-21" },
      { id: "p20", lane: "patch", kind: "patch", s: "6.20", d0: "10-05" },
      { id: "p21", lane: "patch", kind: "patch", s: "6.21", d0: "10-19" },
      { id: "p22", lane: "patch", kind: "patch", s: "6.22", d0: "11-10", key: true },
      { id: "p23", lane: "patch", kind: "patch", s: "6.23", d0: "11-22" },
      { id: "p24", lane: "patch", kind: "patch", s: "6.24", d0: "12-07" },

      /* Champions */
      { id: "c-jhin", lane: "champ", kind: "champ", tpl: "champNew", name: "Jhin", d0: "02-01", links: [["patch", "6.2"]], champ: "Jhin" },
      { id: "c-aurelionsol", lane: "champ", kind: "champ", tpl: "champNew", name: "Aurelion Sol", d0: "03-24", links: [["patch", "6.6"]], champ: "AurelionSol" },
      { id: "c-taliyah", lane: "champ", kind: "champ", tpl: "champNew", name: "Taliyah", d0: "05-18", links: [["patch", "6.10"]], champ: "Taliyah" },
      { id: "c-kled", lane: "champ", kind: "champ", tpl: "champNew", name: "Kled", d0: "08-10", links: [["patch", "6.16"]], champ: "Kled" },
      { id: "c-ivern", lane: "champ", kind: "champ", tpl: "champNew", name: "Ivern", d0: "10-05", links: [["patch", "6.20"]], champ: "Ivern" },
      { id: "c-camille", lane: "champ", kind: "champ", tpl: "champNew", name: "Camille", d0: "12-07", links: [["patch", "6.24"]], champ: "Camille" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-hextech", lane: "event", kind: "event", t: "Hextech Crafting", s: "Hextech Crafting", d0: "03-09", links: [["patch", "6.5"]] },
      { id: "e-siege", lane: "event", kind: "event", t: "Nexus Siege", s: "Nexus Siege", d0: "07-13", links: [["patch", "6.14"]] },
      { id: "e-doom", lane: "event", kind: "event", t: "Doom Bots of Doom · Harrowing 2016", s: "Doom Bots", d0: "10-19", links: [["patch", "6.21"]] },

      /* International */
      { id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2016", s: "MSI", d0: "05-04", d1: "05-15", r: { w: "SKT", l: "CLG", s: "3-0" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2016", s: "Worlds", d0: "09-29", d1: "10-29" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "10-29", key: true, r: { w: "SKT", l: "SSG", s: "3-2" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-14", d1: "04-17", r: { w: "G2", l: "OG" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-02", d1: "08-28", r: { w: "G2", l: "SPY" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-13", d1: "04-23", r: { w: "SKT", l: "ROX" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "05-25", d1: "08-20", r: { w: "ROX", l: "KT" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-14", d1: "04-23", r: { w: "RNG", l: "EDG" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "05-26", d1: "08-26", r: { w: "EDG", l: "RNG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-16", d1: "04-17", r: { w: "CLG", l: "TSM" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-03", d1: "08-28", r: { w: "TSM", l: "C9" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-16", d1: "04-02", r: { w: "INTZ", l: "KEYD" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "05-19", d1: "07-09", r: { w: "INTZ", l: "CNB" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "lms-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "01-14", d1: "04-12", r: { w: "FW", l: "AHQ" } },
      { id: "lms-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "06-09", d1: "08-21", r: { w: "FW", l: "JT", s: "3-0" } }
    ]
  };
})();
