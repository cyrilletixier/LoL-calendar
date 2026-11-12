/* Données 2026, indépendantes de la langue.
   Les textes (titres, lieux, résultats, notes) sont dans lang/<code>.js, sous items[2026][id].
   d0 / d1 : "MM-JJ" dans l'année, ou "AAAA-MM-JJ" pour une autre année. Sans d1 : événement d'un jour.
   approx : dates approximatives (contour pointillé). planned : annoncé mais pas confirmé. */
window.LOL_DATA = window.LOL_DATA || { years: {} };
window.LOL_DATA.years[2026] = {
  items: [
    /* Saisons & actes */
    { id: "s1",   lane: "season", kind: "season", color: "s1", d0: "01-08", d1: "04-28" },
    { id: "s1a1", lane: "season", kind: "act",    color: "s1", d0: "01-08", d1: "03-03" },
    { id: "s1a2", lane: "season", kind: "act",    color: "s1", d0: "03-04", d1: "04-28" },
    { id: "s2",   lane: "season", kind: "season", color: "s2", d0: "04-29", d1: "07-28" },
    { id: "s2a1", lane: "season", kind: "act",    color: "s2", d0: "04-29", d1: "06-09" },
    { id: "s2a2", lane: "season", kind: "act",    color: "s2", d0: "06-10", d1: "07-28" },
    { id: "s3",   lane: "season", kind: "season", color: "s3", d0: "07-29", d1: "2027-01-05" },
    { id: "s3a1", lane: "season", kind: "act",    color: "s3", d0: "07-29", d1: "10-06" },
    { id: "s3a2", lane: "season", kind: "act",    color: "s3", d0: "10-07", d1: "2027-01-05" },

    /* Patchs (s = numéro de patch, identique dans toutes les langues) */
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

    /* Événements en jeu */
    { id: "e-lunar",      lane: "event", kind: "event", d0: "01-22", d1: "03-03", approx: true },
    { id: "e-winter",     lane: "event", kind: "event", d0: "02-19", d1: "02-26" },
    { id: "e-brawl",      lane: "event", kind: "event", d0: "03-04", d1: "04-28" },
    { id: "e-april",      lane: "event", kind: "event", d0: "04-01" },
    { id: "e-t1",         lane: "event", kind: "event", d0: "07-15" },
    { id: "e-classic",    lane: "event", kind: "event", d0: "07-29" },
    { id: "e-hol",        lane: "event", kind: "event", d0: "09-10" },
    { id: "e-heartsteel", lane: "event", kind: "event", d0: "10-07" },
    { id: "e-winterrift", lane: "event", kind: "event", d0: "11-18", d1: "12-31", approx: true, planned: true },

    /* International */
    { id: "i-americas", lane: "intl", kind: "intl", d0: "03-11", d1: "03-15", approx: true },
    { id: "i-fst",      lane: "intl", kind: "intl", d0: "03-16", d1: "03-22" },
    { id: "i-msi",      lane: "intl", kind: "intl", d0: "06-28", d1: "07-12" },
    { id: "i-ewc",      lane: "intl", kind: "intl", d0: "07-15", d1: "07-19" },
    { id: "i-holc",     lane: "intl", kind: "intl", d0: "08-18" },
    { id: "i-asian",    lane: "intl", kind: "intl", d0: "09-29", d1: "10-02" },
    { id: "i-w-playin", lane: "intl", kind: "intl", d0: "10-15", d1: "10-18" },
    { id: "i-w-swiss",  lane: "intl", kind: "intl", d0: "10-23", d1: "10-31" },
    { id: "i-w-ko",     lane: "intl", kind: "intl", d0: "11-03", d1: "11-08" },
    { id: "i-w-final",  lane: "intl", kind: "intl", d0: "11-14" },
    { id: "i-enc",      lane: "intl", kind: "intl", d0: "11-21", d1: "11-29" },

    /* LEC */
    { id: "lec-v",  lane: "LEC", kind: "league", d0: "01-17", d1: "03-01" },
    { id: "lec-sp", lane: "LEC", kind: "league", d0: "03-28", d1: "06-07" },
    { id: "lec-su", lane: "LEC", kind: "league", d0: "07-24", d1: "09-20" },

    /* LCK */
    { id: "lck-cup", lane: "LCK", kind: "league", d0: "01-14", d1: "03-01" },
    { id: "lck-r12", lane: "LCK", kind: "league", d0: "04-01", d1: "05-31", approx: true },
    { id: "lck-rtm", lane: "LCK", kind: "league", d0: "06-12", d1: "06-14" },
    { id: "lck-r34", lane: "LCK", kind: "league", d0: "07-29", d1: "08-23", approx: true },
    { id: "lck-po",  lane: "LCK", kind: "league", d0: "08-29", d1: "09-13" },

    /* LPL */
    { id: "lpl-1",  lane: "LPL", kind: "league", d0: "01-14", d1: "03-08" },
    { id: "lpl-2",  lane: "LPL", kind: "league", d0: "04-04", d1: "06-14" },
    { id: "lpl-3",  lane: "LPL", kind: "league", d0: "07-22", d1: "09-13" },
    { id: "lpl-rf", lane: "LPL", kind: "league", d0: "09-17", d1: "09-19" },

    /* LCS */
    { id: "lcs-li", lane: "LCS", kind: "league", d0: "01-24", d1: "03-01" },
    { id: "lcs-sp", lane: "LCS", kind: "league", d0: "04-04", d1: "06-14" },
    { id: "lcs-su", lane: "LCS", kind: "league", d0: "07-25", d1: "10-04" },

    /* CBLOL */
    { id: "cb-cup", lane: "CBLOL", kind: "league", d0: "01-17", d1: "03-01" },
    { id: "cb-1",   lane: "CBLOL", kind: "league", d0: "03-28", d1: "06-06", approx: true },
    { id: "cb-2",   lane: "CBLOL", kind: "league", d0: "07-25", d1: "10-10", approx: true },

    /* LCP */
    { id: "lcp-1", lane: "LCP", kind: "league", d0: "01-16", d1: "03-01" },
    { id: "lcp-2", lane: "LCP", kind: "league", d0: "04-04", d1: "06-07" },
    { id: "lcp-3", lane: "LCP", kind: "league", d0: "07-25", d1: "08-30" },

    /* LFL */
    { id: "lfl-sp", lane: "LFL", kind: "league", d0: "05-06", d1: "06-03" },
    { id: "lfl-su", lane: "LFL", kind: "league", d0: "07-21", d1: "09-02", approx: true }
  ]
};
