/* Données 2011, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2011]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2011] = {
    patchUrl: "wiki",
    items: [
      /* Saisons classées */
      { id: "s1", lane: "season", kind: "season", tpl: "rank", n: 1, color: "s1", d0: "2010-07-13", d1: "09-19" },
      { id: "s2", lane: "season", kind: "season", tpl: "rank", n: 2, color: "s2", d0: "11-29", d1: "2012-11-13", links: [["patch", "1.0.0.130"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "1.0.0.108", d0: "01-04" },
      { id: "p02", lane: "patch", kind: "patch", s: "1.0.0.109", d0: "01-18" },
      { id: "p03", lane: "patch", kind: "patch", s: "1.0.0.110", d0: "02-01" },
      { id: "p04", lane: "patch", kind: "patch", s: "1.0.0.111", d0: "02-16" },
      { id: "p05", lane: "patch", kind: "patch", s: "1.0.0.112", d0: "03-01" },
      { id: "p06", lane: "patch", kind: "patch", s: "1.0.0.113", d0: "03-15" },
      { id: "p07", lane: "patch", kind: "patch", s: "1.0.0.114", d0: "03-29" },
      { id: "p08", lane: "patch", kind: "patch", s: "1.0.0.115", d0: "04-12" },
      { id: "p09", lane: "patch", kind: "patch", s: "1.0.0.116", d0: "04-26" },
      { id: "p10", lane: "patch", kind: "patch", s: "1.0.0.118", d0: "05-10" },
      { id: "p11", lane: "patch", kind: "patch", s: "1.0.0.119", d0: "06-01" },
      { id: "p12", lane: "patch", kind: "patch", s: "1.0.0.120", d0: "06-22" },
      { id: "p13", lane: "patch", kind: "patch", s: "1.0.0.121", d0: "07-08" },
      { id: "p14", lane: "patch", kind: "patch", s: "1.0.0.122", d0: "07-26" },
      { id: "p15", lane: "patch", kind: "patch", s: "1.0.0.123", d0: "08-09" },
      { id: "p16", lane: "patch", kind: "patch", s: "1.0.0.124", d0: "08-24" },
      { id: "p17", lane: "patch", kind: "patch", s: "1.0.0.125", d0: "09-14" },
      { id: "p18", lane: "patch", kind: "patch", s: "1.0.0.126", d0: "10-05" },
      { id: "p19", lane: "patch", kind: "patch", s: "1.0.0.127", d0: "10-19" },
      { id: "p20", lane: "patch", kind: "patch", s: "1.0.0.128", d0: "11-01" },
      { id: "p21", lane: "patch", kind: "patch", s: "1.0.0.129", d0: "11-15" },
      { id: "p22", lane: "patch", kind: "patch", s: "1.0.0.130", d0: "11-29", key: true },
      { id: "p23", lane: "patch", kind: "patch", s: "1.0.0.131", d0: "12-13" },

      /* Champions */
      { id: "c-caitlyn", lane: "champ", kind: "champ", tpl: "champNew", name: "Caitlyn", d0: "01-04", links: [["patch", "1.0.0.108"]], champ: "Caitlyn" },
      { id: "c-renekton", lane: "champ", kind: "champ", tpl: "champNew", name: "Renekton", d0: "01-18", links: [["patch", "1.0.0.109"]], champ: "Renekton" },
      { id: "c-karma", lane: "champ", kind: "champ", tpl: "champNew", name: "Karma", d0: "02-01", links: [["patch", "1.0.0.110"]], champ: "Karma" },
      { id: "c-maokai", lane: "champ", kind: "champ", tpl: "champNew", name: "Maokai", d0: "02-16", links: [["patch", "1.0.0.111"]], champ: "Maokai" },
      { id: "c-jarvaniv", lane: "champ", kind: "champ", tpl: "champNew", name: "Jarvan IV", d0: "03-01", links: [["patch", "1.0.0.112"]], champ: "JarvanIV" },
      { id: "c-nocturne", lane: "champ", kind: "champ", tpl: "champNew", name: "Nocturne", d0: "03-15", links: [["patch", "1.0.0.113"]], champ: "Nocturne" },
      { id: "c-leesin", lane: "champ", kind: "champ", tpl: "champNew", name: "Lee Sin", d0: "04-01", links: [["patch", "1.0.0.114"]], champ: "LeeSin" },
      { id: "c-brand", lane: "champ", kind: "champ", tpl: "champNew", name: "Brand", d0: "04-12", links: [["patch", "1.0.0.115"]], champ: "Brand" },
      { id: "c-rumble", lane: "champ", kind: "champ", tpl: "champNew", name: "Rumble", d0: "04-26", links: [["patch", "1.0.0.116"]], champ: "Rumble" },
      { id: "c-vayne", lane: "champ", kind: "champ", tpl: "champNew", name: "Vayne", d0: "05-10", links: [["patch", "1.0.0.118"]], champ: "Vayne" },
      { id: "c-orianna", lane: "champ", kind: "champ", tpl: "champNew", name: "Orianna", d0: "06-01", links: [["patch", "1.0.0.119"]], champ: "Orianna" },
      { id: "c-yorick", lane: "champ", kind: "champ", tpl: "champNew", name: "Yorick", d0: "06-22", links: [["patch", "1.0.0.120"]], champ: "Yorick" },
      { id: "c-leona", lane: "champ", kind: "champ", tpl: "champNew", name: "Leona", d0: "07-13", links: [["patch", "1.0.0.121"]], champ: "Leona" },
      { id: "c-wukong", lane: "champ", kind: "champ", tpl: "champNew", name: "Wukong", d0: "07-26", links: [["patch", "1.0.0.122"]], champ: "MonkeyKing" },
      { id: "c-skarner", lane: "champ", kind: "champ", tpl: "champNew", name: "Skarner", d0: "08-09", links: [["patch", "1.0.0.123"]], champ: "Skarner" },
      { id: "c-talon", lane: "champ", kind: "champ", tpl: "champNew", name: "Talon", d0: "08-24", links: [["patch", "1.0.0.124"]], champ: "Talon" },
      { id: "c-riven", lane: "champ", kind: "champ", tpl: "champNew", name: "Riven", d0: "09-14", links: [["patch", "1.0.0.125"]], champ: "Riven" },
      { id: "c-xerath", lane: "champ", kind: "champ", tpl: "champNew", name: "Xerath", d0: "10-05", links: [["patch", "1.0.0.126"]], champ: "Xerath" },
      { id: "c-graves", lane: "champ", kind: "champ", tpl: "champNew", name: "Graves", d0: "10-19", links: [["patch", "1.0.0.127"]], champ: "Graves" },
      { id: "c-shyvana", lane: "champ", kind: "champ", tpl: "champNew", name: "Shyvana", d0: "11-01", links: [["patch", "1.0.0.128"]], champ: "Shyvana" },
      { id: "c-fizz", lane: "champ", kind: "champ", tpl: "champNew", name: "Fizz", d0: "11-15", links: [["patch", "1.0.0.129"]], champ: "Fizz" },
      { id: "c-volibear", lane: "champ", kind: "champ", tpl: "champNew", name: "Volibear", d0: "11-29", links: [["patch", "1.0.0.130"]], champ: "Volibear" },
      { id: "c-ahri", lane: "champ", kind: "champ", tpl: "champNew", name: "Ahri", d0: "12-14", links: [["patch", "1.0.0.131"]], champ: "Ahri" },
      { id: "c-viktor", lane: "champ", kind: "champ", tpl: "champNew", name: "Viktor", d0: "12-29", links: [["patch", "1.0.0.131"]], champ: "Viktor" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-coop", lane: "event", kind: "event", t: "Co-op vs. AI", s: "Co-op vs. AI", d0: "03-10", links: [["patch", "1.0.0.111"]] },
      { id: "e-harrowing", lane: "event", kind: "event", t: "Harrowing 2011", s: "Harrowing", d0: "10-19", links: [["patch", "1.0.0.127"]] },
      { id: "e-snowdown", lane: "event", kind: "event", t: "Snowdown Showdown 2011", s: "Snowdown", d0: "12-13", links: [["patch", "1.0.0.131"]] },

      /* International */
      { id: "i-w-final", lane: "intl", kind: "intl", t: "Season 1 Championship", s: "Season 1 Championship", d0: "06-18", d1: "06-20", key: true, r: { w: "FNC", l: "AAA", s: "2-1" } }
    ]
  };
})();
