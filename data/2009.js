/* Données 2009, indépendantes de la langue (format décrit dans data/2026.js).
   Fichier généré à partir des listes du wiki LoL et de Liquipedia (voir README).
   Notes de patch : pages du wiki LoL (patchUrl: "wiki"). Textes traduits (lieux, précisions) : lang/<code>.js, items[2009]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2009] = {
    patchUrl: "wiki",
    items: [
      /* Patchs */
      { id: "p01", lane: "patch", kind: "patch", s: "0.8.22.115", d0: "07-24", nolink: true },
      { id: "p02", lane: "patch", kind: "patch", s: "0.9.22.7", d0: "08-07", nolink: true },
      { id: "p03", lane: "patch", kind: "patch", s: "0.9.22.15", d0: "08-19", nolink: true },
      { id: "p04", lane: "patch", kind: "patch", s: "0.9.22.16", d0: "09-02", nolink: true },
      { id: "p05", lane: "patch", kind: "patch", s: "0.9.25.21", d0: "09-19", nolink: true },
      { id: "p06", lane: "patch", kind: "patch", s: "0.9.25.24", d0: "10-01", nolink: true },
      { id: "p07", lane: "patch", kind: "patch", s: "0.9.25.34", d0: "10-10", nolink: true },
      { id: "p08", lane: "patch", kind: "patch", s: "1.0.0.32", d0: "10-21", key: true },
      { id: "p09", lane: "patch", kind: "patch", s: "1.0.0.52", d0: "11-11" },
      { id: "p10", lane: "patch", kind: "patch", s: "1.0.0.58", d0: "11-20" },
      { id: "p11", lane: "patch", kind: "patch", s: "1.0.0.61", d0: "12-02" },
      { id: "p12", lane: "patch", kind: "patch", s: "1.0.0.63", d0: "12-17" },

      /* Champions */
      { id: "c-alpha", lane: "champ", kind: "champ", tpl: "champBatch", n: 17, d0: "02-21", champ: "Annie", list: ["Alistar", "Annie", "Ashe", "Fiddlesticks", "Jax", "Kayle", "Master Yi", "Morgana", "Nunu & Willump", "Ryze", "Sion", "Sivir", "Soraka", "Teemo", "Tristana", "Twisted Fate", "Warwick"] },
      { id: "c-singed", lane: "champ", kind: "champ", tpl: "champNew", name: "Singed", d0: "04-18", champ: "Singed" },
      { id: "c-zilean", lane: "champ", kind: "champ", tpl: "champNew", name: "Zilean", d0: "04-18", champ: "Zilean" },
      { id: "c-evelynn", lane: "champ", kind: "champ", tpl: "champNew", name: "Evelynn", d0: "05-01", champ: "Evelynn" },
      { id: "c-tryndamere", lane: "champ", kind: "champ", tpl: "champNew", name: "Tryndamere", d0: "05-01", champ: "Tryndamere" },
      { id: "c-twitch", lane: "champ", kind: "champ", tpl: "champNew", name: "Twitch", d0: "05-01", champ: "Twitch" },
      { id: "c-karthus", lane: "champ", kind: "champ", tpl: "champNew", name: "Karthus", d0: "06-12", champ: "Karthus" },
      { id: "c-amumu", lane: "champ", kind: "champ", tpl: "champNew", name: "Amumu", d0: "06-26", champ: "Amumu" },
      { id: "c-chogath", lane: "champ", kind: "champ", tpl: "champNew", name: "Cho'Gath", d0: "06-26", champ: "Chogath" },
      { id: "c-anivia", lane: "champ", kind: "champ", tpl: "champNew", name: "Anivia", d0: "07-10", champ: "Anivia" },
      { id: "c-rammus", lane: "champ", kind: "champ", tpl: "champNew", name: "Rammus", d0: "07-10", champ: "Rammus" },
      { id: "c-veigar", lane: "champ", kind: "champ", tpl: "champNew", name: "Veigar", d0: "07-24", champ: "Veigar" },
      { id: "c-kassadin", lane: "champ", kind: "champ", tpl: "champNew", name: "Kassadin", d0: "08-07", champ: "Kassadin" },
      { id: "c-gangplank", lane: "champ", kind: "champ", tpl: "champNew", name: "Gangplank", d0: "08-19", champ: "Gangplank" },
      { id: "c-taric", lane: "champ", kind: "champ", tpl: "champNew", name: "Taric", d0: "08-19", champ: "Taric" },
      { id: "c-blitzcrank", lane: "champ", kind: "champ", tpl: "champNew", name: "Blitzcrank", d0: "09-02", champ: "Blitzcrank" },
      { id: "c-drmundo", lane: "champ", kind: "champ", tpl: "champNew", name: "Dr. Mundo", d0: "09-02", champ: "DrMundo" },
      { id: "c-janna", lane: "champ", kind: "champ", tpl: "champNew", name: "Janna", d0: "09-02", champ: "Janna" },
      { id: "c-malphite", lane: "champ", kind: "champ", tpl: "champNew", name: "Malphite", d0: "09-02", champ: "Malphite" },
      { id: "c-corki", lane: "champ", kind: "champ", tpl: "champNew", name: "Corki", d0: "09-19", champ: "Corki" },
      { id: "c-katarina", lane: "champ", kind: "champ", tpl: "champNew", name: "Katarina", d0: "09-19", champ: "Katarina" },
      { id: "c-nasus", lane: "champ", kind: "champ", tpl: "champNew", name: "Nasus", d0: "10-01", champ: "Nasus" },
      { id: "c-heimerdinger", lane: "champ", kind: "champ", tpl: "champNew", name: "Heimerdinger", d0: "10-10", champ: "Heimerdinger" },
      { id: "c-shaco", lane: "champ", kind: "champ", tpl: "champNew", name: "Shaco", d0: "10-10", champ: "Shaco" },
      { id: "c-udyr", lane: "champ", kind: "champ", tpl: "champNew", name: "Udyr", d0: "12-02", links: [["patch", "1.0.0.61"]], champ: "Udyr" },
      { id: "c-nidalee", lane: "champ", kind: "champ", tpl: "champNew", name: "Nidalee", d0: "12-17", links: [["patch", "1.0.0.63"]], champ: "Nidalee" },

      /* Événements en jeu (titres neutres ici, traductions dans lang/<code>.js) */
      { id: "e-launch", lane: "event", kind: "event", d0: "10-27", key: true }
    ]
  };
})();
