/* Données 2015, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2015]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2015] = {
    patchUrl: "wiki",
    lanes: { LEC: "EULCS", LCS: "NALCS", LCP: "LMS" },
    items: [
      /* Saisons classées */
      { id: "ps5", lane: "season", kind: "season", tpl: "pre", n: 5, sy: 2015, color: "s3", d0: "2014-11-20", d1: "01-14" },
      { id: "s5", lane: "season", kind: "season", tpl: "rank", n: 5, sy: 2015, color: "s1", d0: "01-15", d1: "11-10", links: [["patch", "5.1"]] },
      { id: "ps6", lane: "season", kind: "season", tpl: "pre", n: 6, sy: 2016, color: "s3", d0: "11-11", d1: "2016-01-13", links: [["patch", "5.22"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "5.1", d0: "01-15", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "5.2", d0: "01-28" },
      { id: "p03", lane: "patch", kind: "patch", s: "5.3", d0: "02-11" },
      { id: "p04", lane: "patch", kind: "patch", s: "5.4", d0: "02-25" },
      { id: "p05", lane: "patch", kind: "patch", s: "5.5", d0: "03-12" },
      { id: "p06", lane: "patch", kind: "patch", s: "5.6", d0: "03-25" },
      { id: "p07", lane: "patch", kind: "patch", s: "5.7", d0: "04-08" },
      { id: "p08", lane: "patch", kind: "patch", s: "5.8", d0: "04-28" },
      { id: "p09", lane: "patch", kind: "patch", s: "5.9", d0: "05-14" },
      { id: "p10", lane: "patch", kind: "patch", s: "5.10", d0: "05-28" },
      { id: "p11", lane: "patch", kind: "patch", s: "5.11", d0: "06-10" },
      { id: "p12", lane: "patch", kind: "patch", s: "5.12", d0: "06-24" },
      { id: "p13", lane: "patch", kind: "patch", s: "5.13", d0: "07-08" },
      { id: "p14", lane: "patch", kind: "patch", s: "5.14", d0: "07-22" },
      { id: "p15", lane: "patch", kind: "patch", s: "5.15", d0: "08-05" },
      { id: "p16", lane: "patch", kind: "patch", s: "5.16", d0: "08-20" },
      { id: "p17", lane: "patch", kind: "patch", s: "5.17", d0: "09-02" },
      { id: "p18", lane: "patch", kind: "patch", s: "5.18", d0: "09-16" },
      { id: "p19", lane: "patch", kind: "patch", s: "5.19", d0: "09-30" },
      { id: "p20", lane: "patch", kind: "patch", s: "5.20", d0: "10-14" },
      { id: "p21", lane: "patch", kind: "patch", s: "5.21", d0: "10-29" },
      { id: "p22", lane: "patch", kind: "patch", s: "5.22", d0: "11-11", key: true },
      { id: "p23", lane: "patch", kind: "patch", s: "5.23", d0: "11-24" },
      { id: "p24", lane: "patch", kind: "patch", s: "5.24", d0: "12-09" },

      /* Champions */
      { id: "c-bard", lane: "champ", kind: "champ", tpl: "champNew", name: "Bard", d0: "03-12", links: [["patch", "5.5"]], champ: "Bard" },
      { id: "c-ekko", lane: "champ", kind: "champ", tpl: "champNew", name: "Ekko", d0: "05-29", links: [["patch", "5.10"]], champ: "Ekko" },
      { id: "c-tahmkench", lane: "champ", kind: "champ", tpl: "champNew", name: "Tahm Kench", d0: "07-09", links: [["patch", "5.13"]], champ: "TahmKench" },
      { id: "c-kindred", lane: "champ", kind: "champ", tpl: "champNew", name: "Kindred", d0: "10-14", links: [["patch", "5.20"]], champ: "Kindred" },
      { id: "c-illaoi", lane: "champ", kind: "champ", tpl: "champNew", name: "Illaoi", d0: "11-24", links: [["patch", "5.23"]], champ: "Illaoi" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-urf", lane: "event", kind: "event", t: "Ultra Rapid Fire", s: "URF", d0: "03-25", links: [["patch", "5.6"]] },
      { id: "e-mastery", lane: "event", kind: "event", d0: "04-28", links: [["patch", "5.8"]] },
      { id: "e-bilgewater", lane: "event", kind: "event", t: "Bilgewater: Burning Tides", s: "Bilgewater", d0: "07-22", links: [["patch", "5.14"]] },
      { id: "e-harrowing", lane: "event", kind: "event", t: "Harrowing 2015", s: "Harrowing", d0: "10-29", links: [["patch", "5.21"]] },

      /* International */
      { id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2015", s: "MSI", d0: "05-07", d1: "05-10", r: { w: "EDG", l: "SKT", s: "3-2" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2015", s: "Worlds", d0: "10-01", d1: "10-31" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "10-31", key: true, r: { w: "SKT", l: "KOO", s: "3-1" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-22", d1: "04-19", r: { w: "FNC", l: "UOL" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "05-28", d1: "08-23", r: { w: "FNC", l: "OG" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-07", d1: "05-02", r: { w: "SKT", l: "GET" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "05-20", d1: "08-29", r: { w: "SKT", l: "KT" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-16", d1: "04-26", r: { w: "EDG", l: "LGD" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "05-22", d1: "08-23", r: { w: "LGD", l: "QG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-24", d1: "04-19", r: { w: "TSM", l: "C9" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "05-30", d1: "08-23", r: { w: "CLG", l: "TSM" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-17", d1: "04-18", r: { w: "INTZ", l: "KEYD" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "05-23", d1: "08-08", r: { w: "PAIN", l: "INTZ" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "lms-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "01-08", d1: "04-12", r: { w: "AHQ", l: "FW" } },
      { id: "lms-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "05-20", d1: "07-16", r: { w: "AHQ", l: "HKE" } }
    ]
  };
})();
