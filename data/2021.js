/* Données 2021, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : site officiel. Textes traduits (lieux, précisions) : lang/<code>.js, items[2021]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2021] = {
    patchUrl: "https://www.leagueoflegends.com/{lol}/news/game-updates/patch-{y}-{n}-notes/",
    lanes: { LCP: "PCS" },
    items: [
      /* Saisons classées */
      { id: "ps11", lane: "season", kind: "season", tpl: "pre", n: 11, sy: 2021, color: "s3", d0: "2020-11-10", d1: "01-05" },
      { id: "s11", lane: "season", kind: "season", tpl: "rank", n: 11, sy: 2021, color: "s1", d0: "01-06", d1: "11-16", links: [["patch", "11.1"]] },
      { id: "ps12", lane: "season", kind: "season", tpl: "pre", n: 12, sy: 2022, color: "s3", d0: "11-17", d1: "2022-01-05", links: [["patch", "11.23"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "11.1", d0: "01-06", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "11.2", d0: "01-21" },
      { id: "p03", lane: "patch", kind: "patch", s: "11.3", d0: "02-03" },
      { id: "p04", lane: "patch", kind: "patch", s: "11.4", d0: "02-18" },
      { id: "p05", lane: "patch", kind: "patch", s: "11.5", d0: "03-03" },
      { id: "p06", lane: "patch", kind: "patch", s: "11.6", d0: "03-17" },
      { id: "p07", lane: "patch", kind: "patch", s: "11.7", d0: "03-31" },
      { id: "p08", lane: "patch", kind: "patch", s: "11.8", d0: "04-14" },
      { id: "p09", lane: "patch", kind: "patch", s: "11.9", d0: "04-28" },
      { id: "p10", lane: "patch", kind: "patch", s: "11.10", d0: "05-12" },
      { id: "p11", lane: "patch", kind: "patch", s: "11.11", d0: "05-26" },
      { id: "p12", lane: "patch", kind: "patch", s: "11.12", d0: "06-09" },
      { id: "p13", lane: "patch", kind: "patch", s: "11.13", d0: "06-23" },
      { id: "p14", lane: "patch", kind: "patch", s: "11.14", d0: "07-08" },
      { id: "p15", lane: "patch", kind: "patch", s: "11.15", d0: "07-21" },
      { id: "p16", lane: "patch", kind: "patch", s: "11.16", d0: "08-11" },
      { id: "p17", lane: "patch", kind: "patch", s: "11.17", d0: "08-25" },
      { id: "p18", lane: "patch", kind: "patch", s: "11.18", d0: "09-09" },
      { id: "p19", lane: "patch", kind: "patch", s: "11.19", d0: "09-22" },
      { id: "p20", lane: "patch", kind: "patch", s: "11.20", d0: "10-06" },
      { id: "p21", lane: "patch", kind: "patch", s: "11.21", d0: "10-20" },
      { id: "p22", lane: "patch", kind: "patch", s: "11.22", d0: "11-03" },
      { id: "p23", lane: "patch", kind: "patch", s: "11.23", d0: "11-17", key: true },
      { id: "p24", lane: "patch", kind: "patch", s: "11.24", d0: "12-08" },

      /* Champions */
      { id: "c-viego", lane: "champ", kind: "champ", tpl: "champNew", name: "Viego", d0: "01-21", links: [["patch", "11.2"]], champ: "Viego" },
      { id: "c-gwen", lane: "champ", kind: "champ", tpl: "champNew", name: "Gwen", d0: "04-15", links: [["patch", "11.8"]], champ: "Gwen" },
      { id: "c-akshan", lane: "champ", kind: "champ", tpl: "champNew", name: "Akshan", d0: "07-22", links: [["patch", "11.15"]], champ: "Akshan" },
      { id: "c-vex", lane: "champ", kind: "champ", tpl: "champNew", name: "Vex", d0: "09-23", links: [["patch", "11.19"]], champ: "Vex" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-spellbook", lane: "event", kind: "event", t: "Ultimate Spellbook", s: "Ultimate Spellbook", d0: "07-08", links: [["patch", "11.14"]] },
      { id: "e-arcane", lane: "event", kind: "event", t: "Arcane", s: "Arcane", d0: "11-06", key: true, links: [["patch", "11.22"]] },

      /* International */
      { id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2021", s: "MSI", d0: "05-06", d1: "05-23", r: { w: "RNG", l: "DWGK", s: "3-2" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2021", s: "Worlds", d0: "10-05", d1: "11-06" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-06", key: true, r: { w: "EDG", l: "DWGK", s: "3-2", mvp: "Scout" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-22", d1: "04-11", r: { w: "MAD", l: "RGE" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-11", d1: "08-29", r: { w: "MAD", l: "FNC" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-13", d1: "04-10", r: { w: "DWGK", l: "GEN" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "06-09", d1: "08-28", r: { w: "DWGK", l: "T1" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-09", d1: "04-18", r: { w: "RNG", l: "FPX" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-07", d1: "09-02", r: { w: "EDG", l: "FPX" } },

      /* NA LCS puis LCS */
      { id: "lcs-li", lane: "LCS", kind: "league", tpl: "lane", sp: "Lock-In", d0: "01-15", d1: "01-31", r: { w: "TL", l: "C9", s: "3-2" } },
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "02-05", d1: "04-11", r: { w: "C9", l: "TL" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-04", d1: "08-29", r: { w: "100T", l: "TL", s: "3-0" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-16", d1: "04-18", r: { w: "PAIN", l: "VRX" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "06-05", d1: "09-04", r: { w: "RED", l: "RNS" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "pcs-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "02-19", d1: "04-18", r: { w: "TLN", l: "BYG", s: "3-0" } },
      { id: "pcs-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "07-09", d1: "08-29", r: { w: "TLN", l: "BYG", s: "3-2" } },

      /* LFL */
      { id: "lfl-sp", lane: "LFL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-19", d1: "03-25", r: { w: "KC", l: "MSFP", s: "3-0" } },
      { id: "lfl-su", lane: "LFL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-08", d1: "08-12", r: { w: "MSFP", l: "KC" } },
      { id: "lfl-fi", lane: "LFL", kind: "league", tpl: "lane", sp: "Finals", d0: "08-27", d1: "10-04", r: { w: "MSFP", l: "KC" } }
    ]
  };
})();
