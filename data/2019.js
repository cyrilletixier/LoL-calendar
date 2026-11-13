/* Données 2019, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2019]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2019] = {
    patchUrl: "wiki",
    lanes: { LCP: "LMS" },
    items: [
      /* Saisons classées */
      { id: "ps9", lane: "season", kind: "season", tpl: "pre", n: 9, sy: 2019, color: "s3", d0: "2018-11-20", d1: "01-23" },
      { id: "s9", lane: "season", kind: "season", tpl: "rank", n: 9, sy: 2019, color: "s1", d0: "01-24", d1: "11-19", links: [["patch", "9.2"]] },
      { id: "ps10", lane: "season", kind: "season", tpl: "pre", n: 10, sy: 2020, color: "s3", d0: "11-20", d1: "2020-01-09", links: [["patch", "9.23"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "9.1", d0: "01-09" },
      { id: "p02", lane: "patch", kind: "patch", s: "9.2", d0: "01-24", key: true },
      { id: "p03", lane: "patch", kind: "patch", s: "9.3", d0: "02-06" },
      { id: "p04", lane: "patch", kind: "patch", s: "9.4", d0: "02-21" },
      { id: "p05", lane: "patch", kind: "patch", s: "9.5", d0: "03-06" },
      { id: "p06", lane: "patch", kind: "patch", s: "9.6", d0: "03-20" },
      { id: "p07", lane: "patch", kind: "patch", s: "9.7", d0: "04-03" },
      { id: "p08", lane: "patch", kind: "patch", s: "9.8", d0: "04-17" },
      { id: "p09", lane: "patch", kind: "patch", s: "9.9", d0: "05-01" },
      { id: "p10", lane: "patch", kind: "patch", s: "9.10", d0: "05-14" },
      { id: "p11", lane: "patch", kind: "patch", s: "9.11", d0: "05-30" },
      { id: "p12", lane: "patch", kind: "patch", s: "9.12", d0: "06-12" },
      { id: "p13", lane: "patch", kind: "patch", s: "9.13", d0: "06-26" },
      { id: "p14", lane: "patch", kind: "patch", s: "9.14", d0: "07-17" },
      { id: "p15", lane: "patch", kind: "patch", s: "9.15", d0: "07-31" },
      { id: "p16", lane: "patch", kind: "patch", s: "9.16", d0: "08-14" },
      { id: "p17", lane: "patch", kind: "patch", s: "9.17", d0: "08-28" },
      { id: "p18", lane: "patch", kind: "patch", s: "9.18", d0: "09-11" },
      { id: "p19", lane: "patch", kind: "patch", s: "9.19", d0: "09-25" },
      { id: "p20", lane: "patch", kind: "patch", s: "9.20", d0: "10-09" },
      { id: "p21", lane: "patch", kind: "patch", s: "9.21", d0: "10-23" },
      { id: "p22", lane: "patch", kind: "patch", s: "9.22", d0: "11-06" },
      { id: "p23", lane: "patch", kind: "patch", s: "9.23", d0: "11-20", key: true },
      { id: "p24", lane: "patch", kind: "patch", s: "9.24", d0: "12-11" },
      { id: "p25", lane: "patch", kind: "patch", s: "9.24b", d0: "12-18" },

      /* Champions */
      { id: "c-sylas", lane: "champ", kind: "champ", tpl: "champNew", name: "Sylas", d0: "01-25", links: [["patch", "9.2"]], champ: "Sylas" },
      { id: "c-yuumi", lane: "champ", kind: "champ", tpl: "champNew", name: "Yuumi", d0: "05-14", links: [["patch", "9.10"]], champ: "Yuumi" },
      { id: "c-qiyana", lane: "champ", kind: "champ", tpl: "champNew", name: "Qiyana", d0: "06-28", links: [["patch", "9.13"]], champ: "Qiyana" },
      { id: "c-senna", lane: "champ", kind: "champ", tpl: "champNew", name: "Senna", d0: "11-10", links: [["patch", "9.22"]], champ: "Senna" },
      { id: "c-aphelios", lane: "champ", kind: "champ", tpl: "champNew", name: "Aphelios", d0: "12-11", links: [["patch", "9.24"]], champ: "Aphelios" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-tft", lane: "event", kind: "event", t: "Teamfight Tactics", s: "TFT", d0: "06-26", key: true, links: [["patch", "9.13"]] },
      { id: "e-10y", lane: "event", kind: "event", d0: "10-09", d1: "11-19", approx: true, links: [["patch", "9.20"], ["patch", "9.22"]] },
      { id: "e-elements", lane: "event", kind: "event", t: "Rise of the Elements", s: "Rise of the Elements", d0: "11-20", links: [["patch", "9.23"]] },

      /* International */
      { id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2019", s: "MSI", d0: "05-01", d1: "05-19", r: { w: "G2", l: "TL", s: "3-0" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2019", s: "Worlds", d0: "10-02", d1: "11-10" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-10", key: true, r: { w: "FPX", l: "G2", s: "3-0", mvp: "Tian" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-18", d1: "04-14", r: { w: "G2", l: "OG" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-07", d1: "09-08", r: { w: "G2", l: "FNC" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-16", d1: "04-13", r: { w: "SKT", l: "GRF" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "06-05", d1: "08-31", r: { w: "SKT", l: "GRF" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-14", d1: "04-21", r: { w: "IG", l: "JDG" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-01", d1: "09-06", r: { w: "FPX", l: "RNG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-26", d1: "04-13", r: { w: "TL", l: "TSM", s: "3-2" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-01", d1: "08-25", r: { w: "TL", l: "C9", s: "3-2" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-12", d1: "04-13", r: { w: "INTZ", l: "FLA" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "06-01", d1: "09-07", r: { w: "FLA", l: "INTZ" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "lms-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "01-17", d1: "04-20", r: { w: "FW", l: "MADT", s: "3-0" } },
      { id: "lms-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "06-14", d1: "08-31", r: { w: "JT", l: "AHQ", s: "3-1" } },

      /* LFL */
      { id: "lfl-sp", lane: "LFL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-22", d1: "04-03", r: { w: "TLDLC", l: "MSFP" } },
      { id: "lfl-su", lane: "LFL", kind: "league", tpl: "lane", sp: "Summer", d0: "05-21", d1: "07-31", r: { w: "TLDLC", l: "VITB" } },
      { id: "lfl-fi", lane: "LFL", kind: "league", tpl: "lane", sp: "Finals", d0: "10-30", d1: "10-31", r: { w: "TLDLC", l: "MSFP" } }
    ]
  };
})();
