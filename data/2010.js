/* Données 2010, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2010]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2010] = {
    patchUrl: "wiki",
    items: [
      /* Saisons classées */
      { id: "s1", lane: "season", kind: "season", tpl: "rank", n: 1, color: "s1", d0: "07-13", d1: "2011-09-19", links: [["patch", "1.0.0.96"]] },

      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "1.0.0.70", d0: "01-13" },
      { id: "p02", lane: "patch", kind: "patch", s: "1.0.0.72", d0: "02-02" },
      { id: "p03", lane: "patch", kind: "patch", s: "1.0.0.74", d0: "02-09" },
      { id: "p04", lane: "patch", kind: "patch", s: "1.0.0.75", d0: "02-24" },
      { id: "p05", lane: "patch", kind: "patch", s: "1.0.0.79", d0: "03-16" },
      { id: "p06", lane: "patch", kind: "patch", s: "1.0.0.81", d0: "03-24" },
      { id: "p07", lane: "patch", kind: "patch", s: "1.0.0.82", d0: "04-08" },
      { id: "p08", lane: "patch", kind: "patch", s: "1.0.0.83", d0: "04-27" },
      { id: "p09", lane: "patch", kind: "patch", s: "1.0.0.85", d0: "05-11" },
      { id: "p10", lane: "patch", kind: "patch", s: "1.0.0.86", d0: "06-01" },
      { id: "p11", lane: "patch", kind: "patch", s: "1.0.0.87", d0: "06-08" },
      { id: "p12", lane: "patch", kind: "patch", s: "1.0.0.94", d0: "06-24" },
      { id: "p13", lane: "patch", kind: "patch", s: "1.0.0.96", d0: "07-13", key: true },
      { id: "p14", lane: "patch", kind: "patch", s: "1.0.0.97", d0: "07-27" },
      { id: "p15", lane: "patch", kind: "patch", s: "1.0.0.98", d0: "08-10" },
      { id: "p16", lane: "patch", kind: "patch", s: "1.0.0.99", d0: "08-24" },
      { id: "p17", lane: "patch", kind: "patch", s: "1.0.0.100", d0: "09-08" },
      { id: "p18", lane: "patch", kind: "patch", s: "1.0.0.101", d0: "09-21" },
      { id: "p19", lane: "patch", kind: "patch", s: "1.0.0.102", d0: "10-05" },
      { id: "p20", lane: "patch", kind: "patch", s: "1.0.0.103", d0: "10-19" },
      { id: "p21", lane: "patch", kind: "patch", s: "1.0.0.104", d0: "11-02" },
      { id: "p22", lane: "patch", kind: "patch", s: "1.0.0.105", d0: "11-16" },
      { id: "p23", lane: "patch", kind: "patch", s: "1.0.0.106", d0: "12-01" },
      { id: "p24", lane: "patch", kind: "patch", s: "1.0.0.107", d0: "12-14" },

      /* Champions */
      { id: "c-poppy", lane: "champ", kind: "champ", tpl: "champNew", name: "Poppy", d0: "01-13", links: [["patch", "1.0.0.70"]], champ: "Poppy" },
      { id: "c-gragas", lane: "champ", kind: "champ", tpl: "champNew", name: "Gragas", d0: "02-02", links: [["patch", "1.0.0.72"]], champ: "Gragas" },
      { id: "c-pantheon", lane: "champ", kind: "champ", tpl: "champNew", name: "Pantheon", d0: "02-02", links: [["patch", "1.0.0.72"]], champ: "Pantheon" },
      { id: "c-mordekaiser", lane: "champ", kind: "champ", tpl: "champNew", name: "Mordekaiser", d0: "02-24", links: [["patch", "1.0.0.75"]], champ: "Mordekaiser" },
      { id: "c-ezreal", lane: "champ", kind: "champ", tpl: "champNew", name: "Ezreal", d0: "03-16", links: [["patch", "1.0.0.79"]], champ: "Ezreal" },
      { id: "c-shen", lane: "champ", kind: "champ", tpl: "champNew", name: "Shen", d0: "03-24", links: [["patch", "1.0.0.81"]], champ: "Shen" },
      { id: "c-kennen", lane: "champ", kind: "champ", tpl: "champNew", name: "Kennen", d0: "04-08", links: [["patch", "1.0.0.82"]], champ: "Kennen" },
      { id: "c-garen", lane: "champ", kind: "champ", tpl: "champNew", name: "Garen", d0: "04-27", links: [["patch", "1.0.0.83"]], champ: "Garen" },
      { id: "c-akali", lane: "champ", kind: "champ", tpl: "champNew", name: "Akali", d0: "05-11", links: [["patch", "1.0.0.85"]], champ: "Akali" },
      { id: "c-malzahar", lane: "champ", kind: "champ", tpl: "champNew", name: "Malzahar", d0: "06-01", links: [["patch", "1.0.0.86"]], champ: "Malzahar" },
      { id: "c-olaf", lane: "champ", kind: "champ", tpl: "champNew", name: "Olaf", d0: "06-09", links: [["patch", "1.0.0.87"]], champ: "Olaf" },
      { id: "c-kogmaw", lane: "champ", kind: "champ", tpl: "champNew", name: "Kog'Maw", d0: "06-24", links: [["patch", "1.0.0.94"]], champ: "KogMaw" },
      { id: "c-xinzhao", lane: "champ", kind: "champ", tpl: "champNew", name: "Xin Zhao", d0: "07-13", links: [["patch", "1.0.0.96"]], champ: "XinZhao" },
      { id: "c-vladimir", lane: "champ", kind: "champ", tpl: "champNew", name: "Vladimir", d0: "07-27", links: [["patch", "1.0.0.97"]], champ: "Vladimir" },
      { id: "c-galio", lane: "champ", kind: "champ", tpl: "champNew", name: "Galio", d0: "08-10", links: [["patch", "1.0.0.98"]], champ: "Galio" },
      { id: "c-urgot", lane: "champ", kind: "champ", tpl: "champNew", name: "Urgot", d0: "08-24", links: [["patch", "1.0.0.99"]], champ: "Urgot" },
      { id: "c-missfortune", lane: "champ", kind: "champ", tpl: "champNew", name: "Miss Fortune", d0: "09-08", links: [["patch", "1.0.0.100"]], champ: "MissFortune" },
      { id: "c-sona", lane: "champ", kind: "champ", tpl: "champNew", name: "Sona", d0: "09-21", links: [["patch", "1.0.0.101"]], champ: "Sona" },
      { id: "c-swain", lane: "champ", kind: "champ", tpl: "champNew", name: "Swain", d0: "10-05", links: [["patch", "1.0.0.102"]], champ: "Swain" },
      { id: "c-lux", lane: "champ", kind: "champ", tpl: "champNew", name: "Lux", d0: "10-19", links: [["patch", "1.0.0.103"]], champ: "Lux" },
      { id: "c-leblanc", lane: "champ", kind: "champ", tpl: "champNew", name: "LeBlanc", d0: "11-02", links: [["patch", "1.0.0.104"]], champ: "Leblanc" },
      { id: "c-irelia", lane: "champ", kind: "champ", tpl: "champNew", name: "Irelia", d0: "11-16", links: [["patch", "1.0.0.105"]], champ: "Irelia" },
      { id: "c-trundle", lane: "champ", kind: "champ", tpl: "champNew", name: "Trundle", d0: "12-01", links: [["patch", "1.0.0.106"]], champ: "Trundle" },
      { id: "c-cassiopeia", lane: "champ", kind: "champ", tpl: "champNew", name: "Cassiopeia", d0: "12-14", links: [["patch", "1.0.0.107"]], champ: "Cassiopeia" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-harrowing", lane: "event", kind: "event", t: "Harrowing 2010", s: "Harrowing", d0: "10-19", links: [["patch", "1.0.0.103"]] },
      { id: "e-snowdown", lane: "event", kind: "event", t: "Snowdown Showdown 2010", s: "Snowdown", d0: "12-14", links: [["patch", "1.0.0.107"]] }
    ]
  };
})();
