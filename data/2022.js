/* Données 2022, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : site officiel. Textes traduits (lieux, précisions) : lang/<code>.js, items[2022]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2022] = {
    patchUrl: "https://www.leagueoflegends.com/{lol}/news/game-updates/patch-{y}-{n}-notes/",
    lanes: { LCP: "PCS" },
    items: [
      /* Saisons classées */
      { id: "ps12", lane: "season", kind: "season", tpl: "pre", n: 12, sy: 2022, color: "s3", d0: "2021-11-17", d1: "01-05" },
      { id: "s12", lane: "season", kind: "season", tpl: "rank", n: 12, sy: 2022, color: "s2", d0: "01-06", d1: "11-15", links: [["patch", "12.1"]] },
      { id: "ps13", lane: "season", kind: "season", tpl: "pre", n: 13, sy: 2023, color: "s3", d0: "11-16", d1: "2023-01-10", links: [["patch", "12.22"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "12.1", d0: "01-05", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "12.2", d0: "01-20" },
      { id: "p03", lane: "patch", kind: "patch", s: "12.3", d0: "02-02" },
      { id: "p04", lane: "patch", kind: "patch", s: "12.4", d0: "02-16" },
      { id: "p05", lane: "patch", kind: "patch", s: "12.5", d0: "03-02" },
      { id: "p06", lane: "patch", kind: "patch", s: "12.6", d0: "03-30" },
      { id: "p07", lane: "patch", kind: "patch", s: "12.7", d0: "04-13" },
      { id: "p08", lane: "patch", kind: "patch", s: "12.8", d0: "04-27" },
      { id: "p09", lane: "patch", kind: "patch", s: "12.9", d0: "05-11" },
      { id: "p10", lane: "patch", kind: "patch", s: "12.10", d0: "05-25" },
      { id: "p11", lane: "patch", kind: "patch", s: "12.11", d0: "06-08" },
      { id: "p12", lane: "patch", kind: "patch", s: "12.12", d0: "06-23" },
      { id: "p13", lane: "patch", kind: "patch", s: "12.13", d0: "07-13" },
      { id: "p14", lane: "patch", kind: "patch", s: "12.14", d0: "07-27" },
      { id: "p15", lane: "patch", kind: "patch", s: "12.15", d0: "08-10" },
      { id: "p16", lane: "patch", kind: "patch", s: "12.16", d0: "08-24" },
      { id: "p17", lane: "patch", kind: "patch", s: "12.17", d0: "09-08" },
      { id: "p18", lane: "patch", kind: "patch", s: "12.18", d0: "09-21" },
      { id: "p19", lane: "patch", kind: "patch", s: "12.19", d0: "10-05" },
      { id: "p20", lane: "patch", kind: "patch", s: "12.20", d0: "10-19" },
      { id: "p21", lane: "patch", kind: "patch", s: "12.21", d0: "11-02" },
      { id: "p22", lane: "patch", kind: "patch", s: "12.22", d0: "11-16", key: true },
      { id: "p23", lane: "patch", kind: "patch", s: "12.23", d0: "12-07" },

      /* Champions */
      { id: "c-zeri", lane: "champ", kind: "champ", tpl: "champNew", name: "Zeri", d0: "01-20", links: [["patch", "12.2"]], champ: "Zeri" },
      { id: "c-renataglasc", lane: "champ", kind: "champ", tpl: "champNew", name: "Renata Glasc", d0: "02-17", links: [["patch", "12.4"]], champ: "Renata" },
      { id: "c-belveth", lane: "champ", kind: "champ", tpl: "champNew", name: "Bel'Veth", d0: "06-09", links: [["patch", "12.11"]], champ: "Belveth" },
      { id: "c-nilah", lane: "champ", kind: "champ", tpl: "champNew", name: "Nilah", d0: "07-13", links: [["patch", "12.13"]], champ: "Nilah" },
      { id: "c-ksante", lane: "champ", kind: "champ", tpl: "champNew", name: "K'Sante", d0: "11-02", links: [["patch", "12.21"]], champ: "KSante" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-durability", lane: "event", kind: "event", d0: "05-25", links: [["patch", "12.10"]] },
      { id: "e-sg", lane: "event", kind: "event", t: "Star Guardian 2022", s: "Star Guardian", d0: "07-13", links: [["patch", "12.13"]] },
      { id: "e-jungle", lane: "event", kind: "event", d0: "11-16", links: [["patch", "12.22"]] },

      /* International */
      { id: "i-msi", lane: "intl", kind: "intl", t: "Mid-Season Invitational 2022", s: "MSI", d0: "05-10", d1: "05-29", r: { w: "RNG", l: "T1", s: "3-2" } },
      { id: "i-worlds", lane: "intl", kind: "intl", t: "Worlds 2022", s: "Worlds", d0: "09-29", d1: "11-05" },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-05", key: true, r: { w: "DRX", l: "T1", s: "3-2", mvp: "Zeka" } },

      /* EU LCS puis LEC */
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "01-14", d1: "04-10", r: { w: "G2", l: "RGE" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-17", d1: "09-11", r: { w: "RGE", l: "G2" } },

      /* OGN Champions puis LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-12", d1: "04-02", r: { w: "T1", l: "GEN" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "06-15", d1: "08-28", r: { w: "GEN", l: "T1" } },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-10", d1: "04-23", r: { w: "RNG", l: "TES" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-10", d1: "09-01", r: { w: "JDG", l: "TES" } },

      /* NA LCS puis LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "02-05", d1: "04-24", r: { w: "EG", l: "100T" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-18", d1: "09-11", r: { w: "C9", l: "100T" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-22", d1: "04-23", r: { w: "RED", l: "PAIN" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "06-11", d1: "09-03", r: { w: "LOUD", l: "PAIN", s: "3-0" } },

      /* LMS puis PCS (couloir Asie-Pacifique) */
      { id: "pcs-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "02-11", d1: "04-17", r: { w: "TLN", l: "CFO", s: "3-2" } },
      { id: "pcs-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "07-01", d1: "09-04", r: { w: "CFO", l: "BYG" } },

      /* LFL */
      { id: "lfl-sp", lane: "LFL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-12", d1: "03-31", r: { w: "LDLC", l: "BDSA" } },
      { id: "lfl-su", lane: "LFL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-01", d1: "08-18", r: { w: "LDLC", l: "BDSA" } }
    ]
  };
})();
