/* Données 2027 connues au 13 novembre 2026 (format décrit dans data/2026.js).
   Seuls les lieux et quelques dates provisoires sont annoncés : tout est marqué planned (annoncé)
   et approx (dates approximatives) tant que Riot n'a pas publié le calendrier.
   Lieux et précisions : lang/fr.js et lang/en.js, sous items[2027]. */
(function () {
  window.LOL_DATA = window.LOL_DATA || { years: {} };
  window.LOL_DATA.years[2027] = {
    /* Composition 2027 par sigle d'équipe (vue Mercato), état au 26 novembre 2026. statut : "confirmé" (annonce officielle
       ou contrat en cours donné sans balise rumeur) ou "rumeur". Les postes non pourvus ou inconnus sont absents. */
    rosters: {
      "FNC": [{ joueur: "Soboro", role: "TOP", statut: "rumeur" }, { joueur: "Yike", role: "JNG", statut: "rumeur" }, { joueur: "Vladi", role: "MID", statut: "rumeur" }, { joueur: "Doggo", role: "ADC", statut: "rumeur" }, { joueur: "Labrov", role: "SUP", statut: "rumeur" }],
      "G2": [{ joueur: "Rooster", role: "TOP", statut: "rumeur" }, { joueur: "Lyncas", role: "JNG", statut: "rumeur" }, { joueur: "Caps", role: "MID", statut: "rumeur" }, { joueur: "Hans sama", role: "ADC", statut: "confirmé" }, { joueur: "Mikyx", role: "SUP", statut: "rumeur" }],
      "GX": [{ joueur: "Myrwn", role: "TOP", statut: "rumeur" }, { joueur: "Thayger", role: "JNG", statut: "rumeur" }, { joueur: "Feisty", role: "MID", statut: "rumeur" }, { joueur: "Harpoon", role: "ADC", statut: "rumeur" }, { joueur: "Piero", role: "SUP", statut: "rumeur" }],
      "TH": [{ joueur: "Tracyn", role: "TOP", statut: "confirmé" }, { joueur: "Razork", role: "JNG", statut: "rumeur" }, { joueur: "Jackies", role: "MID", statut: "rumeur" }, { joueur: "Hype", role: "ADC", statut: "rumeur" }, { joueur: "Jun", role: "SUP", statut: "rumeur" }],
      "KC": [{ joueur: "Canna", role: "TOP", statut: "rumeur" }, { joueur: "SkewMond", role: "JNG", statut: "confirmé" }, { joueur: "Kyeahoo", role: "MID", statut: "confirmé" }, { joueur: "Caliste", role: "ADC", statut: "confirmé" }, { joueur: "Busio", role: "SUP", statut: "rumeur" }],
      "MKOI": [{ joueur: "BrokenBlade", role: "TOP", statut: "rumeur" }, { joueur: "Elyoya", role: "JNG", statut: "confirmé" }, { joueur: "Jojopyun", role: "MID", statut: "confirmé" }, { joueur: "Carzzy", role: "ADC", statut: "rumeur" }, { joueur: "Alvaro", role: "SUP", statut: "rumeur" }],
      "NAVI": [{ joueur: "Zest", role: "TOP", statut: "rumeur" }, { joueur: "Rhilech", role: "JNG", statut: "confirmé" }, { joueur: "Karis", role: "MID", statut: "rumeur" }, { joueur: "Supa", role: "ADC", statut: "rumeur" }, { joueur: "Parus", role: "SUP", statut: "rumeur" }],
      "SHF": [{ joueur: "Kamiloo", role: "MID", statut: "rumeur" }, { joueur: "SamD", role: "ADC", statut: "rumeur" }, { joueur: "Fleshy", role: "SUP", statut: "rumeur" }],
      "SK": [{ joueur: "Kryze", role: "TOP", statut: "rumeur" }, { joueur: "Zicssi", role: "JNG", statut: "rumeur" }, { joueur: "SlowQ", role: "MID", statut: "rumeur" }, { joueur: "3XA", role: "ADC", statut: "rumeur" }, { joueur: "Lospa", role: "SUP", statut: "rumeur" }],
      "VIT": [{ joueur: "Sheo", role: "JNG", statut: "rumeur" }, { joueur: "Guti", role: "MID", statut: "rumeur" }, { joueur: "Jopa", role: "ADC", statut: "rumeur" }, { joueur: "Targamas", role: "SUP", statut: "rumeur" }],
      "BFX": [{ joueur: "Thanatos", role: "TOP", statut: "rumeur" }, { joueur: "Vincenzo", role: "JNG", statut: "confirmé" }, { joueur: "VicLaLee", role: "MID", statut: "confirmé" }, { joueur: "Noah", role: "ADC", statut: "confirmé" }],
      "BRO": [{ joueur: "Casting", role: "TOP", statut: "confirmé" }, { joueur: "Gideon", role: "JNG", statut: "confirmé" }, { joueur: "SeTab", role: "MID", statut: "confirmé" }, { joueur: "Teddy", role: "ADC", statut: "confirmé" }, { joueur: "Namgung", role: "SUP", statut: "confirmé" }],
      "DK": [{ joueur: "Doran", role: "TOP", statut: "confirmé" }, { joueur: "Kanavi", role: "JNG", statut: "confirmé" }, { joueur: "ShowMaker", role: "MID", statut: "confirmé" }, { joueur: "Smash", role: "ADC", statut: "confirmé" }, { joueur: "Delight", role: "SUP", statut: "confirmé" }],
      "DNS": [{ joueur: "DuDu", role: "TOP", statut: "confirmé" }, { joueur: "Cuzz", role: "JNG", statut: "confirmé" }, { joueur: "Ucal", role: "MID", statut: "confirmé" }, { joueur: "deokdam", role: "ADC", statut: "confirmé" }, { joueur: "Bluffing", role: "SUP", statut: "confirmé" }],
      "KRX": [{ joueur: "Lucid", role: "JNG", statut: "rumeur" }, { joueur: "Duro", role: "SUP", statut: "rumeur" }],
      "GEN": [{ joueur: "Siwoo", role: "TOP", statut: "confirmé" }, { joueur: "Sharvel", role: "JNG", statut: "confirmé" }, { joueur: "Chovy", role: "MID", statut: "confirmé" }, { joueur: "Ruler", role: "ADC", statut: "confirmé" }, { joueur: "Cloud", role: "SUP", statut: "confirmé" }],
      "HLE": [{ joueur: "Kiin", role: "TOP", statut: "rumeur" }, { joueur: "Canyon", role: "JNG", statut: "confirmé" }, { joueur: "Zeka", role: "MID", statut: "confirmé" }, { joueur: "Gumayusi", role: "ADC", statut: "confirmé" }, { joueur: "Career", role: "SUP", statut: "rumeur" }],
      "KT": [{ joueur: "PerfecT", role: "TOP", statut: "confirmé" }, { joueur: "Raptor", role: "JNG", statut: "confirmé" }, { joueur: "Bdd", role: "MID", statut: "confirmé" }, { joueur: "Taeyoon", role: "ADC", statut: "rumeur" }, { joueur: "Kellin", role: "SUP", statut: "confirmé" }],
      "NS": [{ joueur: "Kingen", role: "TOP", statut: "confirmé" }, { joueur: "Pyosik", role: "JNG", statut: "confirmé" }, { joueur: "Calix", role: "MID", statut: "confirmé" }, { joueur: "Deft", role: "ADC", statut: "confirmé" }, { joueur: "Andil", role: "SUP", statut: "confirmé" }],
      "T1": [{ joueur: "Zeus", role: "TOP", statut: "confirmé" }, { joueur: "Oner", role: "JNG", statut: "confirmé" }, { joueur: "Faker", role: "MID", statut: "confirmé" }, { joueur: "Peyz", role: "ADC", statut: "confirmé" }, { joueur: "Keria", role: "SUP", statut: "confirmé" }],
      "C9": [{ joueur: "Frog", role: "TOP", statut: "rumeur" }, { joueur: "Blaber", role: "JNG", statut: "rumeur" }, { joueur: "Loki", role: "MID", statut: "rumeur" }, { joueur: "Yeon", role: "ADC", statut: "rumeur" }, { joueur: "CoreJJ", role: "SUP", statut: "rumeur" }],
      "FLY": [{ joueur: "Zamudo", role: "TOP", statut: "rumeur" }, { joueur: "Yukino", role: "JNG", statut: "rumeur" }, { joueur: "HHwichan", role: "MID", statut: "rumeur" }, { joueur: "Zven", role: "ADC", statut: "rumeur" }, { joueur: "Cryogen", role: "SUP", statut: "rumeur" }],
      "LYON": [{ joueur: "Naak Nako", role: "TOP", statut: "rumeur" }, { joueur: "Inspired", role: "JNG", statut: "rumeur" }, { joueur: "Saint", role: "MID", statut: "rumeur" }, { joueur: "Berserker", role: "ADC", statut: "rumeur" }],
      "SR": [{ joueur: "Clear", role: "TOP", statut: "rumeur" }, { joueur: "Gryffinn", role: "JNG", statut: "rumeur" }, { joueur: "Quad", role: "MID", statut: "rumeur" }, { joueur: "Massu", role: "ADC", statut: "rumeur" }, { joueur: "Vulcan", role: "SUP", statut: "rumeur" }],
      "TL": [{ joueur: "Morgan", role: "TOP", statut: "confirmé" }, { joueur: "Josedeodo", role: "JNG", statut: "rumeur" }, { joueur: "Quid", role: "MID", statut: "rumeur" }, { joueur: "Ackerman", role: "SUP", statut: "rumeur" }],
      "SLY": [{ joueur: "Boukada", role: "JNG", statut: "confirmé" }, { joueur: "Toffe", role: "MID", statut: "confirmé" }, { joueur: "Cypher", role: "ADC", statut: "confirmé" }, { joueur: "Thumb", role: "SUP", statut: "confirmé" }],
      "GL": [{ joueur: "Skeanz", role: "JNG", statut: "rumeur" }, { joueur: "Serin", role: "MID", statut: "rumeur" }],
      "KCB": [{ joueur: "TaoXu", role: "TOP", statut: "rumeur" }, { joueur: "Oleg", role: "JNG", statut: "rumeur" }, { joueur: "PandaHamza", role: "MID", statut: "rumeur" }, { joueur: "Looki", role: "ADC", statut: "rumeur" }, { joueur: "Myrtus", role: "SUP", statut: "rumeur" }]
    },
    items: [
      /* Fin de la Saison 3 de 2026 (5 janvier 2027) */
      { id: "s3-26", lane: "season", kind: "season", tpl: "season", n: 3, name: "Classic", color: "s3", d0: "2026-07-29", d1: "01-05" },

      /* LEC : début du Winter Split annoncé le 15 janvier 2027 (fin non annoncée) */
      { id: "lec-v", lane: "LEC", kind: "league", tpl: "lane", sp: "Winter", d0: "01-15", planned: true,
        links: [["news", "https://lolesports.com/{le}/news/2027-lec-a-look-at-the-year-ahead"]] },

      /* International */
      { id: "i-fst",     lane: "intl", kind: "intl", t: "First Stand 2027", s: "First Stand", d0: "03-15", d1: "03-21", approx: true, planned: true },
      { id: "i-msi",     lane: "intl", kind: "intl", t: "Mid-Season Invitational 2027", s: "MSI", d0: "06-26", d1: "07-11", approx: true, planned: true },
      { id: "i-worlds",  lane: "intl", kind: "intl", t: "Worlds 2027", s: "Worlds", d0: "10-15", d1: "11-13", approx: true, planned: true },
      { id: "i-w-final", lane: "intl", kind: "intl", tpl: "worldsFinal", d0: "11-14", approx: true, planned: true },
      { id: "i-enc",     lane: "intl", kind: "intl", t: "Esports Nations Cup 2027", s: "Esports Nations Cup", d0: "11-01", d1: "11-30", approx: true, planned: true }
    ]
  };
})();
