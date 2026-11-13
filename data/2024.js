/* Données 2024, indépendantes de la langue (format décrit dans data/2026.js).
   Les titres viennent de modèles traduits (tpl) ou de noms propres neutres (t, s) ;
   lieux et précisions sont dans lang/fr.js et lang/en.js, sous items[2024]. Les autres langues reprennent l'anglais.
   En 2024, les saisons classées s'appellent des « splits » et la ligue Pacifique est la PCS. */
(function () {
  var W24 = ["news", "https://lolesports.com/{le}/news/worlds-2024-primer"];

  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2024] = {
    /* Notes de patch 2024 : patch-14-7-notes */
    patchUrl: "https://www.leagueoflegends.com/{lol}/news/game-updates/patch-{y}-{n}-notes/",
    lanes: { LCP: "PCS" },
    items: [
      /* Splits classés */
      { id: "sp1", lane: "season", kind: "season", tpl: "split", n: 1, color: "s1", d0: "01-10", d1: "05-14", links: [["patch", "14.1"]] },
      { id: "sp2", lane: "season", kind: "season", tpl: "split", n: 2, color: "s2", d0: "05-15", d1: "09-24", links: [["patch", "14.10"]] },
      { id: "sp3", lane: "season", kind: "season", tpl: "split", n: 3, color: "s3", d0: "09-25", d1: "2025-01-08", links: [["patch", "14.19"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "14.1",  d0: "01-10", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "14.2",  d0: "01-24" },
      { id: "p03", lane: "patch", kind: "patch", s: "14.3",  d0: "02-07" },
      { id: "p04", lane: "patch", kind: "patch", s: "14.4",  d0: "02-22" },
      { id: "p05", lane: "patch", kind: "patch", s: "14.5",  d0: "03-06" },
      { id: "p06", lane: "patch", kind: "patch", s: "14.6",  d0: "03-20" },
      { id: "p07", lane: "patch", kind: "patch", s: "14.7",  d0: "04-03" },
      { id: "p08", lane: "patch", kind: "patch", s: "14.8",  d0: "04-17" },
      { id: "p09", lane: "patch", kind: "patch", s: "14.9",  d0: "05-01" },
      { id: "p10", lane: "patch", kind: "patch", s: "14.10", d0: "05-15", key: true },
      { id: "p11", lane: "patch", kind: "patch", s: "14.11", d0: "05-30" },
      { id: "p12", lane: "patch", kind: "patch", s: "14.12", d0: "06-12" },
      { id: "p13", lane: "patch", kind: "patch", s: "14.13", d0: "06-26" },
      { id: "p14", lane: "patch", kind: "patch", s: "14.14", d0: "07-17" },
      { id: "p15", lane: "patch", kind: "patch", s: "14.15", d0: "07-31" },
      { id: "p16", lane: "patch", kind: "patch", s: "14.16", d0: "08-14" },
      { id: "p17", lane: "patch", kind: "patch", s: "14.17", d0: "08-28" },
      { id: "p18", lane: "patch", kind: "patch", s: "14.18", d0: "09-11" },
      { id: "p19", lane: "patch", kind: "patch", s: "14.19", d0: "09-25", key: true },
      { id: "p20", lane: "patch", kind: "patch", s: "14.20", d0: "10-09" },
      { id: "p21", lane: "patch", kind: "patch", s: "14.21", d0: "10-23" },
      { id: "p22", lane: "patch", kind: "patch", s: "14.22", d0: "11-06" },
      { id: "p23", lane: "patch", kind: "patch", s: "14.23", d0: "11-20" },
      { id: "p24", lane: "patch", kind: "patch", s: "14.24", d0: "12-11" },

      /* Champions */
      { id: "c-smolder", lane: "champ", kind: "champ", tpl: "champNew", name: "Smolder", d0: "01-31", links: [["patch", "14.2"]], champ: "Smolder" },
      { id: "c-skarner", lane: "champ", kind: "champ", tpl: "rework", name: "Skarner", d0: "04-03", links: [["patch", "14.7"]], champ: "Skarner" },
      { id: "c-aurora",  lane: "champ", kind: "champ", tpl: "champNew", name: "Aurora", d0: "07-17", key: true, links: [["patch", "14.14"]], champ: "Aurora" },
      { id: "c-ambessa", lane: "champ", kind: "champ", tpl: "champNew", name: "Ambessa", d0: "11-06", links: [["patch", "14.22"]], champ: "Ambessa" },

      /* Événements en jeu */
      { id: "e-lunar",     lane: "event", kind: "event", t: "Lunar Revel 2024", s: "Lunar Revel", d0: "02-07", d1: "03-05", approx: true, links: [["patch", "14.3"], ["patch", "14.4"]] },
      { id: "e-april",     lane: "event", kind: "event", t: "April Fools 2024", s: "April Fools", d0: "04-03", links: [["patch", "14.7"]] },
      { id: "e-swarm",     lane: "event", kind: "event", t: "Swarm · Anima Squad", s: "Swarm", d0: "07-17", d1: "08-19", links: [["patch", "14.14"], ["patch", "14.16"]] },
      { id: "e-spellbook", lane: "event", kind: "event", t: "Ultimate Spellbook", s: "Ultimate Spellbook", d0: "09-25", links: [["patch", "14.19"]] },
      { id: "e-arcane",    lane: "event", kind: "event", t: "ARAM · Bridge of Progress", s: "Bridge of Progress", d0: "11-06", links: [["patch", "14.22"]] },

      /* International */
      { id: "i-msi",      lane: "intl", kind: "intl", t: "Mid-Season Invitational 2024", s: "MSI", d0: "05-01", d1: "05-19", r: { w: "GEN", l: "BLG", s: "3-1", mvp: "Lehends" } },
      { id: "i-ewc",      lane: "intl", kind: "intl", t: "Esports World Cup 2024 · LoL", s: "Esports World Cup", d0: "07-04", d1: "07-07",
        links: [["ewc", "https://esportsworldcup.com/en/news/t1-and-top-esports-to-meet-in-league-of-legends"]], r: { w: "T1", l: "TES", s: "3-1" } },
      { id: "i-w-playin", lane: "intl", kind: "intl", t: "Worlds 2024 · Play-In", s: "Worlds · Play-In", d0: "09-25", d1: "09-29", links: [W24] },
      { id: "i-w-swiss",  lane: "intl", kind: "intl", t: "Worlds 2024 · Swiss Stage", s: "Worlds · Swiss", d0: "10-03", d1: "10-13", links: [W24] },
      { id: "i-w-ko",     lane: "intl", kind: "intl", t: "Worlds 2024 · Knockouts", s: "Worlds · Knockouts", d0: "10-17", d1: "10-27", links: [W24] },
      { id: "i-w-final",  lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-02", links: [W24], r: { w: "T1", l: "BLG", s: "3-2", mvp: "Faker" } },

      /* LEC */
      { id: "lec-v",  lane: "LEC", kind: "league", tpl: "lane", sp: "Winter", d0: "01-13", d1: "02-18", r: { w: "G2", l: "MDK", s: "3-1" } },
      { id: "lec-sp", lane: "LEC", kind: "league", tpl: "lane", sp: "Spring", d0: "03-09", d1: "04-14", r: { w: "G2", l: "FNC", s: "3-1" } },
      { id: "lec-su", lane: "LEC", kind: "league", tpl: "lane", sp: "Summer", d0: "06-08", d1: "07-28", r: { w: "G2", l: "FNC", s: "3-0" } },
      { id: "lec-sf", lane: "LEC", kind: "league", tpl: "lane", sp: "Season Finals", d0: "08-10", d1: "09-01", r: { w: "G2", l: "FNC", s: "3-1" } },

      /* LCK */
      { id: "lck-sp", lane: "LCK", kind: "league", tpl: "lane", sp: "Spring", d0: "01-17", d1: "04-14", r: { w: "GEN", l: "T1", s: "3-2" } },
      { id: "lck-su", lane: "LCK", kind: "league", tpl: "lane", sp: "Summer", d0: "06-12", d1: "09-08", r: { w: "HLE", l: "GEN", s: "3-2" } },
      { id: "lck-rf", lane: "LCK", kind: "league", tpl: "lane", sp: "Regional Finals", d0: "09-12", d1: "09-14" },

      /* LPL */
      { id: "lpl-sp", lane: "LPL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-22", d1: "04-20", r: { w: "BLG", l: "TES", s: "3-1" } },
      { id: "lpl-su", lane: "LPL", kind: "league", tpl: "lane", sp: "Summer", d0: "06-01", d1: "08-30", r: { w: "BLG", l: "WBG", s: "3-0" } },

      /* LCS */
      { id: "lcs-sp", lane: "LCS", kind: "league", tpl: "lane", sp: "Spring", d0: "01-20", d1: "03-31", r: { w: "TL", l: "FLY", s: "3-1" } },
      { id: "lcs-su", lane: "LCS", kind: "league", tpl: "lane", sp: "Summer", d0: "06-15", d1: "09-07", r: { w: "FLY", l: "TL", s: "3-1" } },

      /* CBLOL */
      { id: "cb-1", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 1", d0: "01-20", d1: "04-20", approx: true, r: { w: "LOUD", l: "PAIN" } },
      { id: "cb-2", lane: "CBLOL", kind: "league", tpl: "lane", sp: "Split 2", d0: "06-01", d1: "09-07", r: { w: "PAIN", l: "VKS", s: "3-1" } },

      /* PCS (couloir Asie-Pacifique) */
      { id: "pcs-sp", lane: "LCP", kind: "league", tpl: "lane", sp: "Spring", d0: "01-19", d1: "04-07", approx: true, r: { w: "TLN", l: "SHG", s: "3-0" } },
      { id: "pcs-su", lane: "LCP", kind: "league", tpl: "lane", sp: "Summer", d0: "06-08", d1: "09-08", approx: true, r: { w: "TLN", l: "SHG", s: "3-1" } },

      /* LFL */
      { id: "lfl-sp", lane: "LFL", kind: "league", tpl: "lane", sp: "Spring", d0: "01-17", d1: "04-05", r: { w: "KCB", l: "BDSA", s: "3-1" } },
      { id: "lfl-su", lane: "LFL", kind: "league", tpl: "lane", sp: "Summer", d0: "05-29", d1: "08-02", approx: true, r: { w: "BDSA", l: "KCB", s: "3-1" } }
    ],
    /* Annexe « Univers » (format décrit dans data/2026.js) */
    extras: [
      { id: "x-stillhere", kind: "anim", t: "Still Here", d0: "01-10", approx: true },
      { id: "x-arcane2",   kind: "anim", t: "Arcane · Season 2", s: "Arcane S2", d0: "11-09", d1: "11-23",
        links: [["netflix", "https://www.netflix.com/title/81435684"]] },
      { id: "x-artbook",   kind: "book", t: "The Art and Making of Arcane", d0: "12-03", approx: true,
        links: [["press", "https://hypebeast.com/2024/7/the-art-and-making-of-arcane-book-riot-games-fortiche-insight-editions-release-info"]] }
    ]
  };
})();
