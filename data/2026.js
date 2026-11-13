/* Données 2026, indépendantes de la langue.
   Les textes (titres, lieux, résultats, notes) sont dans lang/<code>.js, sous items[2026][id].
   d0 / d1 : "MM-JJ" dans l'année, ou "AAAA-MM-JJ" pour une autre année. Sans d1 : événement d'un jour.
   approx : dates approximatives (contour pointillé). planned : annoncé mais pas confirmé.
   postponed : reporté ou annulé (barre barrée, ignoré dans « prochain rendez-vous »).
   links : liens officiels [type, adresse]. Le type donne le libellé (lang/<code>.js, linkLabels).
     Dans l'adresse, {le} = langue LoL Esports, {lol} = langue leagueoflegends.com, {sup} = langue support Riot.
     ["patch", "26.06"] : notes de patch officielles, affichées seulement une fois le patch sorti.
   r : résultat. w = vainqueur, l = finaliste (sigles de data/teams.js), s = score, mvp = MVP de la finale,
     up: true = finale à venir (w et l sont alors l'affiche), m = matchs [phase, équipe A, équipe B, score]
     avec phase "sf" (demi-finale) ou "qf" (quart de finale).
   champ : clé du champion sur Data Dragon (images officielles Riot). */
(function () {
  var HB = "https://lolesports.com/{le}/season/115547545029543948/handbook";
  var SPLIT1 = ["handbook", HB + "/115547545030002701"];
  var FST    = ["handbook", HB + "/115548016979679444"];
  var SPLIT2 = ["handbook", HB + "/115548016979679445"];
  var MSI    = ["handbook", HB + "/115548016979679446"];
  var SPLIT3 = ["handbook", HB + "/115548016979679447"];
  var WORLDS = ["handbook", HB + "/115548016979679448"];
  var NEWS_INTL = ["news", "https://lolesports.com/{le}/news/msi-and-worlds-updates"];
  var NEWS_START = ["news", "https://lolesports.com/{le}/news/season-start-2026-lol-esports"];
  var NEWS_HOL = ["news", "https://lolesports.com/{le}/news/caps-becomes-first-western-pro-for-hall-of-legends"];
  var LPL_SITE = ["lpl", "https://lpl.qq.com/"];

  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2026] = {
    items: [
      /* Fin de la Saison 3 de 2025 (7 janvier 2026) */
      { id: "s3-25", lane: "season", kind: "season", tpl: "season", n: 3, name: "Trials of Twilight", color: "s3", d0: "2025-08-27", d1: "01-07" },

      /* Saisons & actes */
      { id: "s1",   lane: "season", kind: "season", color: "s1", d0: "01-08", d1: "04-28", links: [["patch", "26.01"]] },
      { id: "s1a1", lane: "season", kind: "act",    color: "s1", d0: "01-08", d1: "03-03", links: [["patch", "26.01"]] },
      { id: "s1a2", lane: "season", kind: "act",    color: "s1", d0: "03-04", d1: "04-28", links: [["patch", "26.05"]] },
      { id: "s2",   lane: "season", kind: "season", color: "s2", d0: "04-29", d1: "07-28", links: [["patch", "26.09"]] },
      { id: "s2a1", lane: "season", kind: "act",    color: "s2", d0: "04-29", d1: "06-09", links: [["patch", "26.09"]] },
      { id: "s2a2", lane: "season", kind: "act",    color: "s2", d0: "06-10", d1: "07-28", links: [["patch", "26.12"]] },
      { id: "s3",   lane: "season", kind: "season", color: "s3", d0: "07-29", d1: "2027-01-05", links: [["patch", "26.15"]] },
      { id: "s3a1", lane: "season", kind: "act",    color: "s3", d0: "07-29", d1: "10-06",
        links: [["riot", "https://support.riotgames.com/{sup}/league-of-legends/events/league-of-legends-season-3-act-i"], ["patch", "26.15"]] },
      { id: "s3a2", lane: "season", kind: "act",    color: "s3", d0: "10-07", d1: "2027-01-05",
        links: [["riot", "https://support.riotgames.com/{sup}/league-of-legends/events/league-of-legends-season-3-worlds-2026"], ["patch", "26.20"]] },

      /* Patchs (s = numéro de patch, identique dans toutes les langues ; lien vers les notes ajouté automatiquement) */
      { id: "p01", lane: "patch", kind: "patch", s: "26.01", d0: "01-08", key: true },
      { id: "p02", lane: "patch", kind: "patch", s: "26.02", d0: "01-22" },
      { id: "p03", lane: "patch", kind: "patch", s: "26.03", d0: "02-04" },
      { id: "p04", lane: "patch", kind: "patch", s: "26.04", d0: "02-19" },
      { id: "p05", lane: "patch", kind: "patch", s: "26.05", d0: "03-04", key: true },
      { id: "p06", lane: "patch", kind: "patch", s: "26.06", d0: "03-18" },
      { id: "p07", lane: "patch", kind: "patch", s: "26.07", d0: "04-01" },
      { id: "p08", lane: "patch", kind: "patch", s: "26.08", d0: "04-15" },
      { id: "p09", lane: "patch", kind: "patch", s: "26.09", d0: "04-29", key: true },
      { id: "p10", lane: "patch", kind: "patch", s: "26.10", d0: "05-13" },
      { id: "p11", lane: "patch", kind: "patch", s: "26.11", d0: "05-28" },
      { id: "p12", lane: "patch", kind: "patch", s: "26.12", d0: "06-10", key: true },
      { id: "p13", lane: "patch", kind: "patch", s: "26.13", d0: "06-24" },
      { id: "p14", lane: "patch", kind: "patch", s: "26.14", d0: "07-15" },
      { id: "p15", lane: "patch", kind: "patch", s: "26.15", d0: "07-29", key: true },
      { id: "p16", lane: "patch", kind: "patch", s: "26.16", d0: "08-12" },
      { id: "p17", lane: "patch", kind: "patch", s: "26.17", d0: "08-26" },
      { id: "p18", lane: "patch", kind: "patch", s: "26.18", d0: "09-10" },
      { id: "p19", lane: "patch", kind: "patch", s: "26.19", d0: "09-23" },
      { id: "p20", lane: "patch", kind: "patch", s: "26.20", d0: "10-07", key: true },
      { id: "p21", lane: "patch", kind: "patch", s: "26.21", d0: "10-21" },
      { id: "p22", lane: "patch", kind: "patch", s: "26.22", d0: "11-04" },
      { id: "p23", lane: "patch", kind: "patch", s: "26.23", d0: "11-18" },
      { id: "p24", lane: "patch", kind: "patch", s: "26.24", d0: "12-09" },

      /* Champions : nouveaux champions et refontes */
      { id: "c-shyvana", lane: "champ", kind: "champ", d0: "03-18", links: [["patch", "26.06"]], champ: "Shyvana" },
      { id: "c-locke",   lane: "champ", kind: "champ", d0: "06-24", key: true, links: [["patch", "26.13"]], champ: "Locke" },
      { id: "c-belveth", lane: "champ", kind: "champ", d0: "07-29", links: [["patch", "26.15"]], champ: "Belveth" },

      /* Événements en jeu */
      { id: "e-lunar",      lane: "event", kind: "event", d0: "01-22", d1: "03-03", approx: true, links: [["patch", "26.02"], ["patch", "26.04"]] },
      { id: "e-winter",     lane: "event", kind: "event", d0: "02-19", d1: "02-26", links: [["patch", "26.04"]] },
      { id: "e-brawl",      lane: "event", kind: "event", d0: "03-04", d1: "04-28", links: [["patch", "26.05"]] },
      { id: "e-april",      lane: "event", kind: "event", d0: "04-01", links: [["patch", "26.07"]] },
      { id: "e-t1",         lane: "event", kind: "event", d0: "07-15", links: [["patch", "26.14"]] },
      { id: "e-classic",    lane: "event", kind: "event", d0: "07-29",
        links: [["riot", "https://support.riotgames.com/{sup}/league-of-legends/events/league-of-legends-season-3-act-i"], ["patch", "26.15"]] },
      { id: "e-hol",        lane: "event", kind: "event", d0: "09-10", links: [NEWS_HOL, ["patch", "26.18"]] },
      { id: "e-heartsteel", lane: "event", kind: "event", d0: "10-07", links: [["patch", "26.20"]] },
      { id: "e-winterrift", lane: "event", kind: "event", d0: "11-18", d1: "12-31", approx: true, planned: true, links: [["patch", "26.23"]] },

      /* International */
      { id: "i-americas", lane: "intl", kind: "intl", d0: "03-11", d1: "03-15", approx: true, links: [FST], r: { w: "FUR", l: "C9", s: "3-0" } },
      { id: "i-fst",      lane: "intl", kind: "intl", d0: "03-16", d1: "03-22", links: [FST, NEWS_START], r: { w: "BLG", l: "G2", s: "3-1", mvp: "Bin" } },
      { id: "i-msi",      lane: "intl", kind: "intl", d0: "06-28", d1: "07-12", links: [MSI, NEWS_INTL], r: { w: "HLE", l: "BLG", s: "3-2", mvp: "Zeus" } },
      { id: "i-ewc",      lane: "intl", kind: "intl", d0: "07-15", d1: "07-19",
        links: [["ewc", "https://esportsworldcup.com/en/press-releases/dplus-kia-win-lol-at-ewc26"]], r: { w: "DK", l: "KC", s: "3-0" } },
      { id: "i-holc",     lane: "intl", kind: "intl", d0: "08-18", links: [NEWS_HOL] },
      { id: "i-asian",    lane: "intl", kind: "intl", d0: "09-29", d1: "10-02", r: { w: "KOR", l: "TWN", s: "3-0" } },
      { id: "i-w-playin", lane: "intl", kind: "intl", d0: "10-15", d1: "10-18", links: [WORLDS, NEWS_INTL] },
      { id: "i-w-swiss",  lane: "intl", kind: "intl", d0: "10-23", d1: "10-31", links: [WORLDS, NEWS_INTL] },
      { id: "i-w-ko",     lane: "intl", kind: "intl", d0: "11-03", d1: "11-08", links: [WORLDS, NEWS_INTL], r: { m: [["sf", "GEN", "IG", "3-0"], ["sf", "BLG", "T1", "3-1"], ["qf", "T1", "KC", "3-1"], ["qf", "GEN", "LYON", "3-0"], ["qf", "BLG", "DK", "3-0"]] } },
      { id: "i-w-final",  lane: "intl", kind: "intl", d0: "11-14", links: [WORLDS, NEWS_INTL], r: { w: "GEN", l: "BLG", up: true } },

      /* LEC */
      { id: "lec-v",  lane: "LEC", kind: "league", d0: "01-17", d1: "03-01", links: [SPLIT1, ["news", "https://lolesports.com/{le}/news/lec-2026-format-update"]], r: { w: "G2", l: "KC", mvp: "Caps" } },
      { id: "lec-sp", lane: "LEC", kind: "league", d0: "03-28", d1: "06-07", links: [SPLIT2, ["news", "https://lolesports.com/{le}/news/2026-lec-spring-primer"]], r: { w: "G2", l: "KC", s: "3-2", mvp: "SkewMond" } },
      { id: "lec-su", lane: "LEC", kind: "league", d0: "07-24", d1: "09-20", links: [SPLIT3, ["news", "https://lolesports.com/{le}/news/lec-summer-finals-2026-nice"]], r: { w: "G2", l: "MKOI", s: "3-0" } },

      /* LCK */
      { id: "lck-cup", lane: "LCK", kind: "league", d0: "01-14", d1: "03-01", links: [SPLIT1], r: { w: "GEN", l: "BFX", s: "3-0" } },
      { id: "lck-r12", lane: "LCK", kind: "league", d0: "04-01", d1: "05-31", approx: true, links: [SPLIT2] },
      { id: "lck-rtm", lane: "LCK", kind: "league", d0: "06-12", d1: "06-14", links: [SPLIT2] },
      { id: "lck-r34", lane: "LCK", kind: "league", d0: "07-29", d1: "08-23", approx: true, links: [SPLIT3] },
      { id: "lck-po",  lane: "LCK", kind: "league", d0: "08-29", d1: "09-13", links: [SPLIT3], r: { w: "GEN", l: "HLE", s: "3-1", mvp: "Ruler" } },

      /* LPL */
      { id: "lpl-1",  lane: "LPL", kind: "league", d0: "01-14", d1: "03-08", links: [SPLIT1, LPL_SITE], r: { w: "BLG", l: "JDG" } },
      { id: "lpl-2",  lane: "LPL", kind: "league", d0: "04-04", d1: "06-14", links: [SPLIT2, LPL_SITE], r: { w: "BLG", l: "TES", s: "3-0", mvp: "Knight" } },
      { id: "lpl-3",  lane: "LPL", kind: "league", d0: "07-22", d1: "09-13",
        links: [SPLIT3, ["results", "https://lolesports.com/{le}/tournament/115616254668930796/overview"], LPL_SITE], r: { w: "AL", l: "BLG", s: "3-1" } },
      { id: "lpl-rf", lane: "LPL", kind: "league", d0: "09-17", d1: "09-19", links: [SPLIT3, LPL_SITE] },

      /* LCS */
      { id: "lcs-li", lane: "LCS", kind: "league", d0: "01-24", d1: "03-01", links: [SPLIT1], r: { w: "LYON", l: "C9", s: "3-1" } },
      { id: "lcs-sp", lane: "LCS", kind: "league", d0: "04-04", d1: "06-14", links: [SPLIT2], r: { w: "LYON", l: "TL", s: "3-0" } },
      { id: "lcs-su", lane: "LCS", kind: "league", d0: "07-25", d1: "10-04", links: [SPLIT3], r: { w: "TL", l: "LYON", s: "3-1" } },

      /* CBLOL */
      { id: "cb-cup", lane: "CBLOL", kind: "league", d0: "01-17", d1: "03-01", links: [SPLIT1], r: { w: "LOUD", l: "RED", s: "3-0" } },
      { id: "cb-1",   lane: "CBLOL", kind: "league", d0: "03-28", d1: "06-06", approx: true, links: [SPLIT2] },
      { id: "cb-2",   lane: "CBLOL", kind: "league", d0: "07-25", d1: "10-10", approx: true, links: [SPLIT3] },

      /* LCP */
      { id: "lcp-1", lane: "LCP", kind: "league", d0: "01-16", d1: "03-01", links: [SPLIT1] },
      { id: "lcp-2", lane: "LCP", kind: "league", d0: "04-04", d1: "06-07", links: [SPLIT2] },
      { id: "lcp-3", lane: "LCP", kind: "league", d0: "07-25", d1: "08-30", links: [SPLIT3], r: { w: "TSW", l: "CFO", s: "3-0" } },

      /* LFL */
      { id: "lfl-sp", lane: "LFL", kind: "league", d0: "05-06", d1: "06-03",
        links: [["results", "https://lolesports.com/{le}/results/116289311182357180/stage/116289379850489924"]], r: { w: "SLY", l: "GL" } },
      { id: "lfl-su", lane: "LFL", kind: "league", d0: "07-21", d1: "09-02", approx: true,
        links: [["results", "https://lolesports.com/{le}/results/116912368898351701/stage/116912368899269206"]], r: { w: "GL", l: "TLNP", s: "3-1" } }
    ],
    /* Annexe « Univers » : séries et courts métrages d'animation (anim), livres (book), expositions, concerts et
       spectacles (live). Affichée sous l'agenda, hors frise. Même format que items, sans lane ;
       t = titre d'origine quand il est identique dans toutes les langues, sinon lang/<code>.js. */
    extras: [
      { id: "x-salvation",   kind: "anim", t: "Salvation", d0: "01-07",
        links: [["press", "https://www.invenglobal.com/articles/20055/riot-games-reveals-2026-league-of-legends-for-demacia-season-cinematic-salvation"]] },
      { id: "x-bloom",       kind: "anim", t: "Old Friends, New Bloom", d0: "02-05", approx: true,
        links: [["press", "https://gamespace.com/all-articles/news/league-of-legends-lunar-revel-2026-cinematic-old-friends-new-bloom/"]] },
      { id: "x-immersive",   kind: "live", t: "Immersive Arcane", d0: "03-10",
        links: [["press", "https://global.chinadaily.com.cn/a/202604/17/WS69e161dda310d6866eb43e14.html"]] },
      { id: "x-brink",       kind: "anim", t: "Back from the Brink", d0: "06-09", approx: true,
        links: [["press", "https://www.invenglobal.com/articles/22626/new-champion-locke-trailer-revealed-a-demon-hunter-following-in-vaynes-footsteps"]] },
      { id: "x-ambessa-pb",  kind: "book", t: "Ambessa: Chosen of the Wolf", d0: "07-07",
        links: [["publisher", "https://store.orbit-books.co.uk/catalogue/book/9780356519852"]] },
      { id: "x-tempo",       kind: "book", t: "Tempo Point", d0: "10-16",
        links: [["press", "https://www.invenglobal.com/articles/27252/riot-games-and-louis-vuitton-publish-kda-travel-book-tempo-point"]] },
      { id: "x-firestarter", kind: "anim", t: "K/DA · FIRESTARTER", s: "FIRESTARTER", d0: "10-19",
        links: [["press", "https://www.invenglobal.com/articles/27340/kda-returns-after-6-years-unveils-new-song-firestarter"]] },
      { id: "x-netflix",     kind: "anim", d0: "11-12",
        links: [["press", "https://www.whats-on-netflix.com/news/league-of-legends-music-collection-netflix-release-date/"]] },
      { id: "x-chronicles",  kind: "live", t: "CHRONICLES", d0: "11-21",
        links: [["venue", "https://www.spodekkatowice.pl/en/events/chronicles-celebration-of-league-of-legends-music,4058.html"]] },
      { id: "x-headliners",  kind: "book", t: "Headliners: The Music of League of Legends", s: "Headliners", d0: "12-08",
        links: [["publisher", "https://www.simonandschuster.com/books/Headliners/Insight-Editions/9798337407425"]] }
    ]
  };
})();
