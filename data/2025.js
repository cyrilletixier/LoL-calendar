/* Données 2025, indépendantes de la langue (format décrit dans data/2026.js).
   Les titres viennent de modèles traduits (tpl) ou de noms propres neutres (t, s) ;
   lieux et précisions sont dans lang/fr.js et lang/en.js, sous items[2025]. Les autres langues reprennent l'anglais.
   En 2025, la LCS et le CBLOL fusionnent dans la LTA (conférences Nord et Sud). */
(function () {
  var HB = ["handbook", "https://lolesports.com/{le}/season/113470241010388072/handbook"];
  var WORLDS = ["results", "https://lolesports.com/{le}/tournament/113475452383887518/overview"];
  var LTA = ["news", "https://lolesports.com/{le}/news/an-overview-of-the-2025-lta-season"];
  var LTA1 = ["results", "https://lolesports.com/{le}/season/113470241010388072/split/113470241010912361/league/113475149040947852/overview"];
  var LCP_SF = ["news", "https://lolesports.com/{le}/news/lcp-2025-season-finals-eyntk"];
  var LPL_SITE = ["lpl", "https://lpl.qq.com/"];
  var TWILIGHT2 = ["riot", "https://support.riotgames.com/{sup}/league-of-legends/events/league-of-legends-trials-of-twilight-act-ii"];

  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2025] = {
    /* Notes de patch 2025 : patch-25-s1-1-notes, puis patch-25-05-notes */
    patchUrl: "https://www.leagueoflegends.com/{lol}/news/game-updates/patch-{y}-{nn}-notes/",
    lanes: { LCS: "LTA_N", CBLOL: "LTA_S" },
    items: [
      /* Fin du split 3 de 2024 */
      { id: "sp3-24", lane: "season", kind: "season", tpl: "split", n: 3, color: "s3", d0: "2024-09-25", d1: "01-08" },

      /* Saisons & actes */
      { id: "s1",   lane: "season", kind: "season", tpl: "season", n: 1, name: "Noxus", color: "s1", d0: "01-09", d1: "04-29", links: [["patch", "25.S1.1"]] },
      { id: "s1a1", lane: "season", kind: "act", tpl: "act", n: 1, a: 1, color: "s1", d0: "01-09", d1: "03-04", links: [["patch", "25.S1.1"]] },
      { id: "s1a2", lane: "season", kind: "act", tpl: "act", n: 1, a: 2, color: "s1", d0: "03-05", d1: "04-29", links: [["patch", "25.05"]] },
      { id: "s2",   lane: "season", kind: "season", tpl: "season", n: 2, name: "Spirit Blossom Beyond", color: "s2", d0: "04-30", d1: "08-26", links: [["patch", "25.09"]] },
      { id: "s2a1", lane: "season", kind: "act", tpl: "act", n: 2, a: 1, color: "s2", d0: "04-30", d1: "06-24", links: [["patch", "25.09"]] },
      { id: "s2a2", lane: "season", kind: "act", tpl: "act", n: 2, a: 2, color: "s2", d0: "06-25", d1: "08-26", links: [["patch", "25.13"]] },
      { id: "s3",   lane: "season", kind: "season", tpl: "season", n: 3, name: "Trials of Twilight", color: "s3", d0: "08-27", d1: "2026-01-07", links: [["patch", "25.17"]] },
      { id: "s3a1", lane: "season", kind: "act", tpl: "act", n: 3, a: 1, color: "s3", d0: "08-27", d1: "10-21", links: [["patch", "25.17"]] },
      { id: "s3a2", lane: "season", kind: "act", tpl: "act", n: 3, a: 2, color: "s3", d0: "10-22", d1: "2026-01-07", links: [TWILIGHT2, ["patch", "25.21"]] },

      /* Patchs (25.S1.1 à 25.S1.3, puis numérotation 25.04 à 25.24) */
      { id: "p01", lane: "patch", kind: "patch", s: "25.S1.1", d0: "01-09", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "25.S1.2", d0: "01-23" },
      { id: "p03", lane: "patch", kind: "patch", s: "25.S1.3", d0: "02-05" },
      { id: "p04", lane: "patch", kind: "patch", s: "25.04", d0: "02-20" },
      { id: "p05", lane: "patch", kind: "patch", s: "25.05", d0: "03-05", key: true },
      { id: "p06", lane: "patch", kind: "patch", s: "25.06", d0: "03-19" },
      { id: "p07", lane: "patch", kind: "patch", s: "25.07", d0: "04-02" },
      { id: "p08", lane: "patch", kind: "patch", s: "25.08", d0: "04-16" },
      { id: "p09", lane: "patch", kind: "patch", s: "25.09", d0: "04-30", key: true },
      { id: "p10", lane: "patch", kind: "patch", s: "25.10", d0: "05-14" },
      { id: "p11", lane: "patch", kind: "patch", s: "25.11", d0: "05-28" },
      { id: "p12", lane: "patch", kind: "patch", s: "25.12", d0: "06-11" },
      { id: "p13", lane: "patch", kind: "patch", s: "25.13", d0: "06-25", key: true },
      { id: "p14", lane: "patch", kind: "patch", s: "25.14", d0: "07-16" },
      { id: "p15", lane: "patch", kind: "patch", s: "25.15", d0: "07-30" },
      { id: "p16", lane: "patch", kind: "patch", s: "25.16", d0: "08-13" },
      { id: "p17", lane: "patch", kind: "patch", s: "25.17", d0: "08-27", key: true },
      { id: "p18", lane: "patch", kind: "patch", s: "25.18", d0: "09-10" },
      { id: "p19", lane: "patch", kind: "patch", s: "25.19", d0: "09-24" },
      { id: "p20", lane: "patch", kind: "patch", s: "25.20", d0: "10-08" },
      { id: "p21", lane: "patch", kind: "patch", s: "25.21", d0: "10-22", key: true },
      { id: "p22", lane: "patch", kind: "patch", s: "25.22", d0: "11-05" },
      { id: "p23", lane: "patch", kind: "patch", s: "25.23", d0: "11-19" },
      { id: "p24", lane: "patch", kind: "patch", s: "25.24", d0: "12-10" },

      /* Champions */
      { id: "c-mel",    lane: "champ", kind: "champ", tpl: "champNew", name: "Mel", d0: "01-23", links: [["patch", "25.S1.2"]], champ: "Mel" },
      { id: "c-yunara", lane: "champ", kind: "champ", tpl: "champNew", name: "Yunara", d0: "07-16", key: true, links: [["patch", "25.14"]], champ: "Yunara" },
      { id: "c-zaahen", lane: "champ", kind: "champ", tpl: "champNew", name: "Zaahen", d0: "11-19", links: [["patch", "25.23"]], champ: "Zaahen" },

      /* Événements en jeu */
      { id: "e-arena",   lane: "event", kind: "event", t: "Arena · Noxus", s: "Arena", d0: "03-05", links: [["patch", "25.05"]] },
      { id: "e-koeshin", lane: "event", kind: "event", t: "The Battle of Koeshin", s: "Battle of Koeshin", d0: "07-16", links: [["patch", "25.14"]] },
      { id: "e-doom",    lane: "event", kind: "event", t: "Doom Bots · Trials of Doom", s: "Doom Bots", d0: "08-27", d1: "10-21", approx: true, links: [["patch", "25.17"]] },
      { id: "e-wasd",    lane: "event", kind: "event", t: "WASD", s: "WASD", d0: "12-10", links: [["patch", "25.24"]] },

      /* International */
      { id: "i-fst",     lane: "intl", kind: "intl", t: "First Stand 2025", s: "First Stand", d0: "03-10", d1: "03-16", links: [HB], r: { w: "HLE", l: "KC", s: "3-1" } },
      { id: "i-msi",     lane: "intl", kind: "intl", t: "Mid-Season Invitational 2025", s: "MSI", d0: "06-27", d1: "07-12", links: [HB], r: { w: "GEN", l: "T1", s: "3-2" } },
      { id: "i-ewc",     lane: "intl", kind: "intl", t: "Esports World Cup 2025 · LoL", s: "Esports World Cup", d0: "07-16", d1: "07-20", r: { w: "GEN", l: "AL", s: "3-2" } },
      { id: "i-w-swiss", lane: "intl", kind: "intl", t: "Worlds 2025 · Play-In & Swiss", s: "Worlds · Play-In & Swiss", d0: "10-14", d1: "10-25", links: [WORLDS, HB] },
      { id: "i-w-ko",    lane: "intl", kind: "intl", t: "Worlds 2025 · Knockouts", s: "Worlds · Knockouts", d0: "10-28", d1: "11-02", links: [WORLDS, HB],
        r: { m: [["sf", "KT", "GEN", "3-1"], ["sf", "T1", "TES", "3-0"]] } },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-09", links: [WORLDS, HB], r: { w: "T1", l: "KT", s: "3-2", mvp: "Gumayusi" } },

      /* LEC */
      { id: "lec-v",  lane: "LEC", kind: "league", tpl: "lane", sp: "Winter", d0: "01-18", d1: "03-02", links: [HB], r: { w: "KC", l: "G2", s: "3-0" } },
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "03-29", d1: "06-08", approx: true, links: [HB], r: { w: "MKOI", l: "G2", s: "3-1" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "08-02", d1: "09-28", links: [HB], r: { w: "G2", l: "MKOI", s: "3-0" } },

      /* LCK */
      { id: "lck-cup", lane: "LCK", kind: "league", t: "LCK Cup", s: "LCK Cup", d0: "01-15", d1: "02-23", links: [HB], r: { w: "HLE", l: "GEN", s: "3-2" } },
      { id: "lck-25",  lane: "LCK", kind: "league", tpl: "lane", sp: "2025", d0: "04-02", d1: "09-28", links: [HB], r: { w: "GEN", l: "HLE", s: "3-1" } },

      /* LPL */
      { id: "lpl-1", lane: "LPL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-11", d1: "03-01", approx: true, links: [HB, LPL_SITE], r: { w: "TES", l: "AL", s: "3-1", mvp: "JackeyLove" } },
      { id: "lpl-2", lane: "LPL", kind: "league", tpl: "lane", sp: "Split 2", d0: "03-22", d1: "06-08", approx: true, links: [HB, LPL_SITE], r: { w: "AL", l: "BLG", s: "3-1" } },
      { id: "lpl-3", lane: "LPL", kind: "league", tpl: "lane", sp: "Split 3", d0: "07-19", d1: "09-27", approx: true,
        links: [["results", "https://lolesports.com/{le}/tournament/114162735077666074/overview"], LPL_SITE], r: { w: "BLG", l: "TES", s: "3-2" } },

      /* LTA Nord (couloir LCS) */
      { id: "lta-1",  lane: "LCS", kind: "league", t: "LTA Split 1", s: "Split 1", d0: "01-25", d1: "02-23", links: [LTA1, LTA], r: { w: "TL", l: "100T", s: "3-0" } },
      { id: "lta-n2", lane: "LCS", kind: "league", tpl: "lane", sp: "Split 2", d0: "04-05", d1: "06-15", links: [LTA], r: { w: "FLY", l: "C9", s: "3-2" } },
      { id: "lta-n3", lane: "LCS", kind: "league", tpl: "lane", sp: "Split 3", d0: "07-26", d1: "09-07", links: [LTA], r: { w: "FLY", l: "100T" } },
      { id: "lta-ch", lane: "LCS", kind: "league", t: "LTA Championship", s: "Championship", d0: "09-13", d1: "09-28", links: [LTA], r: { w: "FLY", l: "VKS", s: "3-1" } },

      /* LTA Sud (couloir CBLOL) */
      { id: "lta-s1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-25", d1: "02-09", links: [LTA1, LTA] },
      { id: "lta-s2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "04-05", d1: "06-15", links: [LTA], r: { w: "FUR", l: "PAIN", s: "3-0" } },
      { id: "lta-s3", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 3", d0: "07-26", d1: "09-07", links: [LTA], r: { w: "VKS", l: "RED" } },

      /* LCP */
      { id: "lcp-1", lane: "LCP", kind: "league", t: "LCP Season Kickoff", s: "Season Kickoff", d0: "01-17", d1: "02-23", links: [HB], r: { w: "CFO", l: "TLN", s: "3-1" } },
      { id: "lcp-2", lane: "LCP", kind: "league", t: "LCP Mid Season", s: "Mid Season", d0: "04-19", d1: "06-08", links: [HB], r: { w: "CFO", l: "GAM", s: "3-2" } },
      { id: "lcp-3", lane: "LCP", kind: "league", t: "LCP Season Finals", s: "Season Finals", d0: "07-26", d1: "09-21", links: [LCP_SF, HB], r: { w: "CFO", l: "TSW", s: "3-0" } },

      /* LFL */
      { id: "lfl-fi", lane: "LFL", kind: "league", t: "LFL Flash In", s: "Flash In", d0: "01-15", d1: "02-27", approx: true, r: { w: "KCB", l: "IJC", s: "3-1" } },
      { id: "lfl-sp", lane: "LFL", kind: "league", tpl: "lane", sp: "Spring", d0: "04-02", d1: "05-29", approx: true, r: { w: "BKR", l: "KCB" } },
      { id: "lfl-su", lane: "LFL", kind: "league", tpl: "lane", sp: "Summer", d0: "07-02", d1: "09-12", approx: true, r: { w: "KCB", l: "GL", s: "3-0" } }
    ]
  };
})();
