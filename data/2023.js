/* Données 2023, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : site officiel. Textes traduits (lieux, précisions) : lang/<code>.js, items[2023]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2023] = {
    patchUrl: "https://www.leagueoflegends.com/{lol}/news/game-updates/patch-{y}-{n}-notes/",
    lanes: { LCP: "PCS" },
    items: [
      /* Saisons classées */
      { id: "ps13", lane: "season", kind: "season", tpl: "pre", n: 13, sy: 2023, color: "s3", d0: "2022-11-16", d1: "01-10" },
      { id: "sp1-23", lane: "season", kind: "season", tpl: "split", n: 1, color: "s1", d0: "01-11", d1: "07-18", links: [["patch", "13.1"]] },
      { id: "sp2-23", lane: "season", kind: "season", tpl: "split", n: 2, color: "s2", d0: "07-19", d1: "2024-01-09", links: [["patch", "13.14"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "13.1", d0: "01-11", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "13.1b", d0: "01-25" },
      { id: "p03", lane: "patch", kind: "patch", s: "13.3", d0: "02-09" },
      { id: "p04", lane: "patch", kind: "patch", s: "13.4", d0: "02-23" },
      { id: "p05", lane: "patch", kind: "patch", s: "13.5", d0: "03-08" },
      { id: "p06", lane: "patch", kind: "patch", s: "13.6", d0: "03-22" },
      { id: "p07", lane: "patch", kind: "patch", s: "13.7", d0: "04-05" },
      { id: "p08", lane: "patch", kind: "patch", s: "13.8", d0: "04-19" },
      { id: "p09", lane: "patch", kind: "patch", s: "13.9", d0: "05-03" },
      { id: "p10", lane: "patch", kind: "patch", s: "13.10", d0: "05-17" },
      { id: "p11", lane: "patch", kind: "patch", s: "13.11", d0: "06-01" },
      { id: "p12", lane: "patch", kind: "patch", s: "13.12", d0: "06-14" },
      { id: "p13", lane: "patch", kind: "patch", s: "13.13", d0: "06-28" },
      { id: "p14", lane: "patch", kind: "patch", s: "13.14", d0: "07-19", key: true },
      { id: "p15", lane: "patch", kind: "patch", s: "13.15", d0: "08-02" },
      { id: "p16", lane: "patch", kind: "patch", s: "13.16", d0: "08-16" },
      { id: "p17", lane: "patch", kind: "patch", s: "13.17", d0: "08-30" },
      { id: "p18", lane: "patch", kind: "patch", s: "13.18", d0: "09-13" },
      { id: "p19", lane: "patch", kind: "patch", s: "13.19", d0: "09-27" },
      { id: "p20", lane: "patch", kind: "patch", s: "13.20", d0: "10-11" },
      { id: "p21", lane: "patch", kind: "patch", s: "13.21", d0: "10-25" },
      { id: "p22", lane: "patch", kind: "patch", s: "13.22", d0: "11-08" },
      { id: "p23", lane: "patch", kind: "patch", s: "13.23", d0: "11-21" },
      { id: "p24", lane: "patch", kind: "patch", s: "13.24", d0: "12-06" },

      /* Champions */
      { id: "c-milio", lane: "champ", kind: "champ", tpl: "champNew", name: "Milio", d0: "03-23", links: [["patch", "13.6"]], champ: "Milio" },
      { id: "c-naafiri", lane: "champ", kind: "champ", tpl: "champNew", name: "Naafiri", d0: "07-19", links: [["patch", "13.14"]], champ: "Naafiri" },
      { id: "c-briar", lane: "champ", kind: "champ", tpl: "champNew", name: "Briar", d0: "09-14", links: [["patch", "13.18"]], champ: "Briar" },
      { id: "c-hwei", lane: "champ", kind: "champ", tpl: "champNew", name: "Hwei", d0: "12-05", links: [["patch", "13.24"]], champ: "Hwei" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-arena", lane: "event", kind: "event", t: "Arena", s: "Arena", d0: "07-19", key: true, links: [["patch", "13.14"]] },
      { id: "e-quickplay", lane: "event", kind: "event", t: "Quickplay", s: "Quickplay", d0: "11-08", links: [["patch", "13.22"]] },

      /* International */
      { id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2023", s: "MSI", d0: "05-02", d1: "05-21", r: { w: "JDG", l: "BLG", s: "3-1" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2023", s: "Worlds", d0: "10-10", d1: "11-19" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-19", key: true, r: { w: "T1", l: "WBG", s: "3-0", mvp: "Faker" } },

      /* EU LCS puis LEC */
      { id: "lec-wi", lane: "LEC", kind: "league", tpl: "lane", sp: "Winter", d0: "01-21", d1: "02-26", r: { w: "G2", l: "MAD" } },
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "03-11", d1: "04-23", r: { w: "MAD", l: "BDS" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-17", d1: "07-30", r: { w: "G2", l: "XL" } },
      { id: "lec-sf", lane: "LEC", kind: "league", tpl: "lane", sp: "Season Finals", d0: "08-19", d1: "09-10", r: { w: "G2", l: "FNC" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-18", d1: "04-09", r: { w: "GEN", l: "T1" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "06-07", d1: "08-20", r: { w: "GEN", l: "T1" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-14", d1: "04-15", r: { w: "JDG", l: "BLG" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "05-29", d1: "08-05", r: { w: "JDG", l: "LNG" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-26", d1: "04-09", r: { w: "C9", l: "GG" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-14", d1: "08-20", r: { w: "NRG", l: "C9" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-21", d1: "04-15", r: { w: "LOUD", l: "PAIN", s: "3-0" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "06-10", d1: "09-09", r: { w: "LOUD", l: "PAIN", s: "3-1" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "pcs-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "02-03", d1: "04-09", r: { w: "TLN", l: "FAK", s: "3-0" } },
      { id: "pcs-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "06-30", d1: "09-09", r: { w: "TLN", l: "CFO", s: "3-2" } },

      /* LFL */
      { id: "lfl-sp", lane: "LFL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-18", d1: "03-31", r: { w: "LDLC", l: "TGO" } },
      { id: "lfl-su", lane: "LFL", kind: "league", tpl: "lane", sp: "Summer", d0: "05-31", d1: "08-11", r: { w: "KC", l: "BKR" } }
    ]
  };
})();
