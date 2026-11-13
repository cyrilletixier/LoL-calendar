/* Données 2017, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2017]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2017] = {
    patchUrl: "wiki",
    lanes: { LEC: "EULCS", LCS: "NALCS", LCP: "LMS" },
    items: [
      /* Saisons classées */
      { id: "ps7", lane: "season", kind: "season", tpl: "pre", n: 7, sy: 2017, color: "s3", d0: "2016-11-10", d1: "01-29" },
      { id: "s7", lane: "season", kind: "season", tpl: "rank", n: 7, sy: 2017, color: "s1", d0: "01-30", d1: "11-07" },
      { id: "ps8", lane: "season", kind: "season", tpl: "pre", n: 8, sy: 2018, color: "s3", d0: "11-08", d1: "2018-01-15", links: [["patch", "7.22"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "7.1", d0: "01-11", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "7.2", d0: "01-25" },
      { id: "p03", lane: "patch", kind: "patch", s: "7.3", d0: "02-08" },
      { id: "p04", lane: "patch", kind: "patch", s: "7.4", d0: "02-23" },
      { id: "p05", lane: "patch", kind: "patch", s: "7.5", d0: "03-08" },
      { id: "p06", lane: "patch", kind: "patch", s: "7.6", d0: "03-22" },
      { id: "p07", lane: "patch", kind: "patch", s: "7.7", d0: "04-05" },
      { id: "p08", lane: "patch", kind: "patch", s: "7.8", d0: "04-19" },
      { id: "p09", lane: "patch", kind: "patch", s: "7.9", d0: "05-03" },
      { id: "p10", lane: "patch", kind: "patch", s: "7.10", d0: "05-17" },
      { id: "p11", lane: "patch", kind: "patch", s: "7.11", d0: "06-01" },
      { id: "p12", lane: "patch", kind: "patch", s: "7.12", d0: "06-14" },
      { id: "p13", lane: "patch", kind: "patch", s: "7.13", d0: "06-28" },
      { id: "p14", lane: "patch", kind: "patch", s: "7.14", d0: "07-12" },
      { id: "p15", lane: "patch", kind: "patch", s: "7.15", d0: "07-26" },
      { id: "p16", lane: "patch", kind: "patch", s: "7.16", d0: "08-09" },
      { id: "p17", lane: "patch", kind: "patch", s: "7.17", d0: "08-23" },
      { id: "p18", lane: "patch", kind: "patch", s: "7.18", d0: "09-13" },
      { id: "p19", lane: "patch", kind: "patch", s: "7.19", d0: "09-27" },
      { id: "p20", lane: "patch", kind: "patch", s: "7.20", d0: "10-11" },
      { id: "p21", lane: "patch", kind: "patch", s: "7.21", d0: "10-25" },
      { id: "p22", lane: "patch", kind: "patch", s: "7.22", d0: "11-08", key: true },
      { id: "p23", lane: "patch", kind: "patch", s: "7.23", d0: "11-21" },
      { id: "p24", lane: "patch", kind: "patch", s: "7.24", d0: "12-06" },
      { id: "p25", lane: "patch", kind: "patch", s: "7.24b", d0: "12-14" },

      /* Champions */
      { id: "c-rakan", lane: "champ", kind: "champ", tpl: "champNew", name: "Rakan", d0: "04-19", links: [["patch", "7.8"]], champ: "Rakan" },
      { id: "c-xayah", lane: "champ", kind: "champ", tpl: "champNew", name: "Xayah", d0: "04-19", links: [["patch", "7.8"]], champ: "Xayah" },
      { id: "c-kayn", lane: "champ", kind: "champ", tpl: "champNew", name: "Kayn", d0: "07-12", links: [["patch", "7.14"]], champ: "Kayn" },
      { id: "c-ornn", lane: "champ", kind: "champ", tpl: "champNew", name: "Ornn", d0: "08-23", links: [["patch", "7.17"]], champ: "Ornn" },
      { id: "c-zoe", lane: "champ", kind: "champ", tpl: "champNew", name: "Zoe", d0: "11-21", links: [["patch", "7.23"]], champ: "Zoe" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-practice", lane: "event", kind: "event", t: "Practice Tool", s: "Practice Tool", d0: "02-08", links: [["patch", "7.3"]] },
      { id: "e-honor", lane: "event", kind: "event", d0: "06-28", links: [["patch", "7.13"]] },
      { id: "e-invasion", lane: "event", kind: "event", t: "Star Guardian: Invasion", s: "Invasion", d0: "08-23", links: [["patch", "7.17"]] },
      { id: "e-runes", lane: "event", kind: "event", t: "Runes Reforged", s: "Runes Reforged", d0: "11-08", key: true, links: [["patch", "7.22"]] },

      /* International */
      { id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2017", s: "MSI", d0: "04-28", d1: "05-21", r: { w: "SKT", l: "G2", s: "3-1" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2017", s: "Worlds", d0: "09-23", d1: "11-04" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-04", key: true, r: { w: "SSG", l: "SKT", s: "3-0", mvp: "Ruler" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-19", d1: "04-23", r: { w: "G2", l: "UOL" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-01", d1: "09-03", r: { w: "G2", l: "MSF" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-17", d1: "04-22", r: { w: "SKT", l: "KT" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "05-30", d1: "08-26", r: { w: "LZ", l: "SKT" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-19", d1: "04-29", r: { w: "WE", l: "RNG" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-08", d1: "09-01", r: { w: "EDG", l: "RNG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-20", d1: "04-23", r: { w: "TSM", l: "C9" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-02", d1: "09-03", r: { w: "TSM", l: "IMT" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-21", d1: "04-08", r: { w: "RED", l: "KEYD" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "06-03", d1: "09-02", r: { w: "ONE", l: "PAIN" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "lms-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "01-21", d1: "04-23", r: { w: "FW", l: "AHQ" } },
      { id: "lms-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "06-02", d1: "08-25", r: { w: "FW", l: "AHQ" } }
    ]
  };
})();
