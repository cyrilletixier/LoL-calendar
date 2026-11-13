/* Données 2018, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2018]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2018] = {
    patchUrl: "wiki",
    lanes: { LEC: "EULCS", LCS: "NALCS", LCP: "LMS" },
    items: [
      /* Saisons classées */
      { id: "ps8", lane: "season", kind: "season", tpl: "pre", n: 8, sy: 2018, color: "s3", d0: "2017-11-08", d1: "01-15" },
      { id: "s8", lane: "season", kind: "season", tpl: "rank", n: 8, sy: 2018, color: "s2", d0: "01-16", d1: "11-12" },
      { id: "ps9", lane: "season", kind: "season", tpl: "pre", n: 9, sy: 2019, color: "s3", d0: "11-20", d1: "2019-01-23", links: [["patch", "8.23"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "8.1", d0: "01-10", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "8.2", d0: "01-24" },
      { id: "p03", lane: "patch", kind: "patch", s: "8.3", d0: "02-07" },
      { id: "p04", lane: "patch", kind: "patch", s: "8.4", d0: "02-22" },
      { id: "p05", lane: "patch", kind: "patch", s: "8.5", d0: "03-07" },
      { id: "p06", lane: "patch", kind: "patch", s: "8.6", d0: "03-21" },
      { id: "p07", lane: "patch", kind: "patch", s: "8.7", d0: "04-04" },
      { id: "p08", lane: "patch", kind: "patch", s: "8.8", d0: "04-18" },
      { id: "p09", lane: "patch", kind: "patch", s: "8.9", d0: "05-02" },
      { id: "p10", lane: "patch", kind: "patch", s: "8.10", d0: "05-16" },
      { id: "p11", lane: "patch", kind: "patch", s: "8.11", d0: "05-31" },
      { id: "p12", lane: "patch", kind: "patch", s: "8.12", d0: "06-13" },
      { id: "p13", lane: "patch", kind: "patch", s: "8.13", d0: "06-27" },
      { id: "p14", lane: "patch", kind: "patch", s: "8.14", d0: "07-18" },
      { id: "p15", lane: "patch", kind: "patch", s: "8.15", d0: "08-01" },
      { id: "p16", lane: "patch", kind: "patch", s: "8.16", d0: "08-15" },
      { id: "p17", lane: "patch", kind: "patch", s: "8.17", d0: "08-29" },
      { id: "p18", lane: "patch", kind: "patch", s: "8.18", d0: "09-12" },
      { id: "p19", lane: "patch", kind: "patch", s: "8.19", d0: "09-26" },
      { id: "p20", lane: "patch", kind: "patch", s: "8.20", d0: "10-10" },
      { id: "p21", lane: "patch", kind: "patch", s: "8.21", d0: "10-24" },
      { id: "p22", lane: "patch", kind: "patch", s: "8.22", d0: "11-07" },
      { id: "p23", lane: "patch", kind: "patch", s: "8.23", d0: "11-20", key: true },
      { id: "p24", lane: "patch", kind: "patch", s: "8.24", d0: "12-05" },
      { id: "p25", lane: "patch", kind: "patch", s: "8.24b", d0: "12-18" },

      /* Champions */
      { id: "c-kaisa", lane: "champ", kind: "champ", tpl: "champNew", name: "Kai'Sa", d0: "03-07", links: [["patch", "8.5"]], champ: "Kaisa" },
      { id: "c-pyke", lane: "champ", kind: "champ", tpl: "champNew", name: "Pyke", d0: "05-31", links: [["patch", "8.11"]], champ: "Pyke" },
      { id: "c-neeko", lane: "champ", kind: "champ", tpl: "champNew", name: "Neeko", d0: "12-05", links: [["patch", "8.24"]], champ: "Neeko" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-blitz", lane: "event", kind: "event", t: "Nexus Blitz", s: "Nexus Blitz", d0: "08-15", links: [["patch", "8.16"]] },
      { id: "e-odyssey", lane: "event", kind: "event", t: "Odyssey: Extraction", s: "Odyssey", d0: "09-12", links: [["patch", "8.18"]] },
      { id: "e-kda", lane: "event", kind: "event", t: "K/DA · POP/STARS", s: "K/DA", d0: "11-03", links: [["patch", "8.21"]] },

      /* International */
      { id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2018", s: "MSI", d0: "05-03", d1: "05-20", r: { w: "RNG", l: "KZ", s: "3-1" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2018", s: "Worlds", d0: "10-01", d1: "11-03" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-03", key: true, r: { w: "IG", l: "FNC", s: "3-0", mvp: "Ning" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-19", d1: "04-08", r: { w: "FNC", l: "G2" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-15", d1: "09-09", r: { w: "FNC", l: "S04" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-16", d1: "04-14", r: { w: "KZ", l: "AFS" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "06-12", d1: "09-08", r: { w: "KT", l: "GRF" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-15", d1: "04-28", r: { w: "RNG", l: "EDG" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-11", d1: "09-14", r: { w: "RNG", l: "IG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-20", d1: "04-08", r: { w: "TL", l: "100T", s: "3-0" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-16", d1: "09-09", r: { w: "TL", l: "C9", s: "3-0" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-20", d1: "04-14", r: { w: "KBM", l: "KEYD" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "06-09", d1: "09-16", r: { w: "KBM", l: "FLA" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "lms-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "01-20", d1: "04-22", r: { w: "FW", l: "GRX", s: "3-0" } },
      { id: "lms-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "06-23", d1: "09-15", r: { w: "FW", l: "MADT", s: "3-0" } }
    ]
  };
})();
