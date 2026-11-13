/* Données 2020, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : site officiel. Textes traduits (lieux, précisions) : lang/<code>.js, items[2020]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2020] = {
    patchUrl: "https://www.leagueoflegends.com/{lol}/news/game-updates/patch-{y}-{n}-notes/",
    lanes: { LCP: "PCS" },
    items: [
      /* Saisons classées */
      { id: "ps10", lane: "season", kind: "season", tpl: "pre", n: 10, sy: 2020, color: "s3", d0: "2019-11-20", d1: "01-09" },
      { id: "s10", lane: "season", kind: "season", tpl: "rank", n: 10, sy: 2020, color: "s2", d0: "01-10", d1: "11-09", links: [["patch", "10.1"]] },
      { id: "ps11", lane: "season", kind: "season", tpl: "pre", n: 11, sy: 2021, color: "s3", d0: "11-10", d1: "2021-01-05", links: [["patch", "10.23"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "10.1", d0: "01-08", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "10.2", d0: "01-23" },
      { id: "p03", lane: "patch", kind: "patch", s: "10.3", d0: "02-05" },
      { id: "p04", lane: "patch", kind: "patch", s: "10.4", d0: "02-20" },
      { id: "p05", lane: "patch", kind: "patch", s: "10.5", d0: "03-04" },
      { id: "p06", lane: "patch", kind: "patch", s: "10.6", d0: "03-18" },
      { id: "p07", lane: "patch", kind: "patch", s: "10.7", d0: "04-01" },
      { id: "p08", lane: "patch", kind: "patch", s: "10.8", d0: "04-15" },
      { id: "p09", lane: "patch", kind: "patch", s: "10.9", d0: "04-29" },
      { id: "p10", lane: "patch", kind: "patch", s: "10.10", d0: "05-13" },
      { id: "p11", lane: "patch", kind: "patch", s: "10.11", d0: "05-28" },
      { id: "p12", lane: "patch", kind: "patch", s: "10.12", d0: "06-10" },
      { id: "p13", lane: "patch", kind: "patch", s: "10.13", d0: "06-24" },
      { id: "p14", lane: "patch", kind: "patch", s: "10.14", d0: "07-08" },
      { id: "p15", lane: "patch", kind: "patch", s: "10.15", d0: "07-22" },
      { id: "p16", lane: "patch", kind: "patch", s: "10.16", d0: "08-05" },
      { id: "p17", lane: "patch", kind: "patch", s: "10.17", d0: "08-19" },
      { id: "p18", lane: "patch", kind: "patch", s: "10.18", d0: "09-02" },
      { id: "p19", lane: "patch", kind: "patch", s: "10.19", d0: "09-16" },
      { id: "p20", lane: "patch", kind: "patch", s: "10.20", d0: "09-30" },
      { id: "p21", lane: "patch", kind: "patch", s: "10.21", d0: "10-14" },
      { id: "p22", lane: "patch", kind: "patch", s: "10.22", d0: "10-28" },
      { id: "p23", lane: "patch", kind: "patch", s: "10.23", d0: "11-11", key: true },
      { id: "p24", lane: "patch", kind: "patch", s: "10.24", d0: "11-24" },
      { id: "p25", lane: "patch", kind: "patch", s: "10.25", d0: "12-09" },

      /* Champions */
      { id: "c-sett", lane: "champ", kind: "champ", tpl: "champNew", name: "Sett", d0: "01-14", links: [["patch", "10.1"]], champ: "Sett" },
      { id: "c-lillia", lane: "champ", kind: "champ", tpl: "champNew", name: "Lillia", d0: "07-22", links: [["patch", "10.15"]], champ: "Lillia" },
      { id: "c-yone", lane: "champ", kind: "champ", tpl: "champNew", name: "Yone", d0: "08-06", links: [["patch", "10.16"]], champ: "Yone" },
      { id: "c-samira", lane: "champ", kind: "champ", tpl: "champNew", name: "Samira", d0: "09-21", links: [["patch", "10.19"]], champ: "Samira" },
      { id: "c-seraphine", lane: "champ", kind: "champ", tpl: "champNew", name: "Seraphine", d0: "10-29", links: [["patch", "10.22"]], champ: "Seraphine" },
      { id: "c-rell", lane: "champ", kind: "champ", tpl: "champNew", name: "Rell", d0: "12-10", links: [["patch", "10.25"]], champ: "Rell" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-spirit", lane: "event", kind: "event", t: "Spirit Blossom", s: "Spirit Blossom", d0: "07-22", links: [["patch", "10.15"], ["patch", "10.16"]] },
      { id: "e-kda2", lane: "event", kind: "event", t: "K/DA ALL OUT", s: "K/DA ALL OUT", d0: "10-28", links: [["patch", "10.22"]] },
      { id: "e-items", lane: "event", kind: "event", d0: "11-11", key: true, links: [["patch", "10.23"]] },

      /* International */
      { id: "i-msc", lane: "intl", kind: "intl", t: "Mid-Season Cup 2020", s: "Mid-Season Cup", d0: "05-28", d1: "05-31", r: { w: "TES", l: "FPX" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2020", s: "Worlds", d0: "09-25", d1: "10-31" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "10-31", key: true, r: { w: "DWG", l: "SN", s: "3-1", mvp: "Canyon" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-24", d1: "04-19", r: { w: "G2", l: "FNC" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-12", d1: "09-06", r: { w: "G2", l: "FNC" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "02-05", d1: "04-25", r: { w: "T1", l: "GEN" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "06-17", d1: "09-05", r: { w: "DWG", l: "DRX" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-13", d1: "05-02", r: { w: "JDG", l: "TES" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-05", d1: "08-27", r: { w: "TES", l: "JDG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-25", d1: "04-19", r: { w: "C9", l: "FLY" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-13", d1: "09-06", r: { w: "TSM", l: "FLY" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-25", d1: "05-09", r: { w: "KBM", l: "FLA" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "06-06", d1: "09-05", r: { w: "INTZ", l: "PAIN" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "pcs-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "02-29", d1: "05-03", r: { w: "TLNE", l: "MCX", s: "3-2" } },
      { id: "pcs-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "06-20", d1: "08-30", r: { w: "MCX", l: "TLN" } },

      /* LFL */
      { id: "lfl-sp", lane: "LFL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-21", d1: "04-09", r: { w: "GO", l: "LDLC" } },
      { id: "lfl-su", lane: "LFL", kind: "league", tpl: "lane", sp: "Summer", d0: "07-28", d1: "10-01", r: { w: "GO", l: "GW" } },
      { id: "lfl-fi", lane: "LFL", kind: "league", tpl: "lane", sp: "Finals", d0: "10-07", d1: "10-26", r: { w: "MSFP", l: "GO" } }
    ]
  };
})();
