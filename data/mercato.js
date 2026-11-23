/* Mercato : mouvements de joueurs par équipe. Clé = sigle de data/teams.js.
   Alimenté à la main par Claude à partir de sources publiques : aucune récupération d'actualités en direct.
   Entrée : { date: "AAAA-MM-JJ" (ou "AAAA-MM"), type: "arrivée" | "départ" | "prolongation" | "fin de contrat",
   statut: "officiel" | "rumeur", joueur, role: "TOP" | "JNG" | "MID" | "ADC" | "SUP" ("" si inconnu),
   clubSource (arrivée) ou clubDestination (départ, sigle de data/teams.js ou nom), commentaire: "" ou clé traduite
   (retraite, accord, rachat), source (adresse) }. Champ inconnu : "".
   N'ajouter que des mouvements dont la source est vérifiable. État au 23 novembre 2026. */
window.LOL_MERCATO = {
  "BFX": [
    {"date": "2026-11-20", "type": "arrivée", "statut": "officiel", "joueur": "Vincenzo", "role": "JNG", "clubSource": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-20", "type": "prolongation", "statut": "officiel", "joueur": "VicLa", "role": "MID", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-20", "type": "départ", "statut": "officiel", "joueur": "Clear", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-20", "type": "départ", "statut": "officiel", "joueur": "Taeyoon", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "rumeur", "joueur": "Thanatos", "role": "TOP", "clubSource": "C9", "commentaire": "", "source": "https://www.sheepesports.com/en/articles/sources-thanatos-set-to-join-bnk-fearx-in-the-lck/en"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "officiel", "joueur": "Noah", "role": "ADC", "clubSource": "GX", "commentaire": "", "source": "https://x.com/Sheep_Esports/status/2123688881136562530"},
    {"date": "2026-11-20", "type": "départ", "statut": "officiel", "joueur": "Kellin", "role": "SUP", "clubDestination": "KT", "commentaire": "", "source": "https://x.com/Sheep_Esports/status/2123721774613594147"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Raptor", "role": "JNG", "clubDestination": "KT", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-10-20", "type": "départ", "statut": "rumeur", "joueur": "Taeyoon", "role": "ADC", "clubDestination": "KT", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-kt-rolster-ferait-plusieurs-changements-en-prevision-de-2027-et-ciblerait-raptor-taeyoon-et-kellin_137349"}
  ],
  "BRO": [
    {"date": "2026-11-18", "type": "arrivée", "statut": "officiel", "joueur": "SeTab", "role": "MID", "clubSource": "NS Academy", "commentaire": "", "source": "https://x.com/Sheep_Esports/status/2122985267858419974"},
    {"date": "2026-10-28", "type": "prolongation", "statut": "officiel", "joueur": "Teddy", "role": "ADC", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-hanjin-brion-officialise-la-prolongation-de-son-cinq-de-depart-pour-2027_137404"},
    {"date": "2026-10-28", "type": "prolongation", "statut": "officiel", "joueur": "Roamer", "role": "MID", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-hanjin-brion-officialise-la-prolongation-de-son-cinq-de-depart-pour-2027_137404"},
    {"date": "2026-10-28", "type": "prolongation", "statut": "officiel", "joueur": "Namgung", "role": "SUP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-hanjin-brion-officialise-la-prolongation-de-son-cinq-de-depart-pour-2027_137404"},
    {"date": "2026-10-28", "type": "prolongation", "statut": "officiel", "joueur": "Gideon", "role": "JNG", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-hanjin-brion-officialise-la-prolongation-de-son-cinq-de-depart-pour-2027_137404"},
    {"date": "2026-10-28", "type": "prolongation", "statut": "officiel", "joueur": "Casting", "role": "TOP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-hanjin-brion-officialise-la-prolongation-de-son-cinq-de-depart-pour-2027_137404"}
  ],
  "C9": [
    {"date": "2026-11-20", "type": "départ", "statut": "rumeur", "joueur": "Thanatos", "role": "TOP", "clubDestination": "BFX", "commentaire": "", "source": "https://www.sheepesports.com/en/articles/sources-thanatos-set-to-join-bnk-fearx-in-the-lck/en"},
    {"date": "2026-11-19", "type": "arrivée", "statut": "rumeur", "joueur": "Frog", "role": "TOP", "clubSource": "KRX", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-les-premieres-annonces-tombent-du-cote-des-equipes-coreennes_137656"},
    {"date": "2026-11-16", "type": "départ", "statut": "rumeur", "joueur": "Vulcan", "role": "SUP", "clubDestination": "SR", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-12", "type": "arrivée", "statut": "rumeur", "joueur": "Yeon", "role": "ADC", "clubSource": "TL", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-yeon-et-corejj-quitteraient-team-liquid-pour-cloud9-pour-la-saison-2027_137604"},
    {"date": "2026-11-12", "type": "arrivée", "statut": "rumeur", "joueur": "CoreJJ", "role": "SUP", "clubSource": "TL", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-yeon-et-corejj-quitteraient-team-liquid-pour-cloud9-pour-la-saison-2027_137604"},
    {"date": "2026-10-21", "type": "départ", "statut": "officiel", "joueur": "Zven", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-cloud9-se-separerait-dapa-et-zven-apres-son-echec-aux-worlds-2026_137358"},
    {"date": "2026-10-21", "type": "départ", "statut": "officiel", "joueur": "APA", "role": "MID", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-cloud9-se-separerait-dapa-et-zven-apres-son-echec-aux-worlds-2026_137358"}
  ],
  "DIG": [
    {"date": "2026-09-24", "type": "départ", "statut": "officiel", "joueur": "Palafox", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-dignitas-poursuit-sa-refonte-et-se-separe-de-palafox-et-ignar_137134"},
    {"date": "2026-09-24", "type": "départ", "statut": "officiel", "joueur": "Ignar", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-dignitas-poursuit-sa-refonte-et-se-separe-de-palafox-et-ignar_137134"},
    {"date": "2026-09-18", "type": "prolongation", "statut": "officiel", "joueur": "Denathor", "role": "TOP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-dignitas-prolonge-denathor-jusquen-2028-lequipe-entame-sa-reconstruction_137108"},
    {"date": "2026-09-13", "type": "départ", "statut": "officiel", "joueur": "Dardoch", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/breve/mercato-lol-lcs-dardoch-quitte-dignitas-au-terme-dune-saison-2026-catastrophique_137062"}
  ],
  "DK": [
    {"date": "2026-11-20", "type": "départ", "statut": "officiel", "joueur": "Siwoo", "role": "TOP", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-20", "type": "départ", "statut": "rumeur", "joueur": "Lucid", "role": "JNG", "clubDestination": "KRX", "commentaire": "", "source": "https://www.sheepesports.com/en/articles/sources-lucid-set-to-join-kiwoom-drx-for-2027-lck-season/en"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "officiel", "joueur": "Kanavi", "role": "JNG", "clubSource": "HLE", "commentaire": "", "source": "https://x.com/DplusKia/status/2123746641744482355"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "officiel", "joueur": "Doran", "role": "TOP", "clubSource": "T1", "commentaire": "", "source": "https://x.com/DplusKia/status/2123745977987473551"},
    {"date": "2026-11-19", "type": "prolongation", "statut": "officiel", "joueur": "Smash", "role": "ADC", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-19", "type": "départ", "statut": "rumeur", "joueur": "Siwoo", "role": "TOP", "clubDestination": "GEN", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-gen-g-acte-les-departs-de-kiin-et-canyon-siwoo-pressenti-a-la-toplane-pour-2027_137683"},
    {"date": "2026-11-19", "type": "prolongation", "statut": "officiel", "joueur": "ShowMaker", "role": "MID", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11", "type": "départ", "statut": "rumeur", "joueur": "Career", "role": "SUP", "clubDestination": "HLE", "commentaire": "", "source": "https://rostermania.lol/fr"}
  ],
  "DNS": [
    {"date": "2026-11-20", "type": "prolongation", "statut": "officiel", "joueur": "deokdam", "role": "ADC", "commentaire": "", "source": "https://x.com/Sheep_Esports/status/2123731260141142403"},
    {"date": "2026-11-17", "type": "arrivée", "statut": "officiel", "joueur": "Cuzz", "role": "JNG", "clubSource": "KT", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-les-premieres-annonces-tombent-du-cote-des-equipes-coreennes_137656"},
    {"date": "2026-11-16", "type": "prolongation", "statut": "officiel", "joueur": "DuDu", "role": "TOP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11", "type": "arrivée", "statut": "officiel", "joueur": "Ucal", "role": "MID", "clubSource": "KRX", "commentaire": "", "source": "https://rostermania.lol/fr"}
  ],
  "FLY": [
    {"date": "2026-11-18", "type": "arrivée", "statut": "rumeur", "joueur": "Zven", "role": "ADC", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-17", "type": "arrivée", "statut": "rumeur", "joueur": "Yukino", "role": "JNG", "clubSource": "KCB", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-yukino-quitterait-la-karmine-corp-blue-et-la-lfl-pour-rejoindre-flyquest_137661"},
    {"date": "2026-11-16", "type": "départ", "statut": "rumeur", "joueur": "Massu", "role": "ADC", "clubDestination": "SR", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11", "type": "départ", "statut": "rumeur", "joueur": "Quad", "role": "MID", "clubDestination": "SR", "commentaire": "", "source": "https://rostermania.lol/fr"},
    {"date": "2026-11", "type": "départ", "statut": "rumeur", "joueur": "Gryffinn", "role": "JNG", "clubDestination": "SR", "commentaire": "", "source": "https://rostermania.lol/fr"}
  ],
  "FNC": [
    {"date": "2026-11-20", "type": "départ", "statut": "officiel", "joueur": "Upset", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lec-2027-transfer-market-tracker-all-moves-so-far/"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Lospa", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://x.com/FNATIC/status/2123415716074295744"},
    {"date": "2026-11-18", "type": "départ", "statut": "officiel", "joueur": "Razork", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-fnatic-annonce-le-depart-de-razork-et-accelere-sa-refonte_137660"},
    {"date": "2026-11-17", "type": "prolongation", "statut": "rumeur", "joueur": "Soboro", "role": "TOP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-fnatic-prolongerait-soboro-sur-la-toplane_137666"},
    {"date": "2026-11-17", "type": "arrivée", "statut": "rumeur", "joueur": "Doggo", "role": "ADC", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-fnatic-bouclerait-son-effectif-avec-larrivee-de-doggo-sur-la-botlane_137664"},
    {"date": "2026-11-12", "type": "arrivée", "statut": "rumeur", "joueur": "Yike", "role": "JNG", "clubSource": "KC", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-remplace-par-skewmond-yike-quitterait-la-karmine-corp-pour-fnatic_137598"},
    {"date": "2026-11-12", "type": "prolongation", "statut": "rumeur", "joueur": "Vladi", "role": "MID", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-fnatic-prolongerait-vladi-pour-mener-son-nouveau-projet-en-2027_137594"},
    {"date": "2026-11-09", "type": "arrivée", "statut": "rumeur", "joueur": "Labrov", "role": "SUP", "clubSource": "G2", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-malgre-loffre-de-g2-esports-labrov-aurait-choisi-de-rejoindre-fnatic-pour-la-saison-2027_137564"}
  ],
  "FUR": [
    {"date": "2026-11-13", "type": "prolongation", "statut": "rumeur", "joueur": "Tatu", "role": "JNG", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"}
  ],
  "G2": [
    {"date": "2026-11-18", "type": "départ", "statut": "rumeur", "joueur": "SkewMond", "role": "JNG", "clubDestination": "KC", "commentaire": "rachat", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-la-karmine-corp-aurait-finalise-le-rachat-du-contrat-de-skewmond-pour-la-saison-2027_137672"},
    {"date": "2026-11-18", "type": "arrivée", "statut": "rumeur", "joueur": "Rooster", "role": "TOP", "clubSource": "SHF", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-le-toplaner-rooster-completerait-leffectif-de-g2-esports-pour-2027_137679"},
    {"date": "2026-11-16", "type": "départ", "statut": "officiel", "joueur": "Labrov", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-labrov-quitte-officiellement-g2-esports-au-milieu-dun-remaniement-massif-de-leffectif_137646"},
    {"date": "2026-11-16", "type": "prolongation", "statut": "officiel", "joueur": "Hans sama", "role": "ADC", "commentaire": "", "source": "https://www.strafe.com/news/read/lec-2027-transfer-market-tracker-all-moves-so-far/"},
    {"date": "2026-11-10", "type": "arrivée", "statut": "rumeur", "joueur": "Mikyx", "role": "SUP", "clubSource": "SK", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-mikyx-retrouverait-la-botlane-de-g2-esports-pour-la-saison-2027_137572"},
    {"date": "2026-11-09", "type": "départ", "statut": "rumeur", "joueur": "BrokenBlade", "role": "TOP", "clubDestination": "MKOI", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-brokenblade-quitterait-g2-esports-pour-rejoindre-movistar-koi_137565"},
    {"date": "2026-11-06", "type": "arrivée", "statut": "rumeur", "joueur": "Lyncas", "role": "JNG", "clubSource": "VIT", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/g2-esports-maintiendrait-son-accord-avec-lyncas-au-coeur-dun-mercato-tumultueux_137528"}
  ],
  "GEN": [
    {"date": "2026-11-20", "type": "départ", "statut": "rumeur", "joueur": "Duro", "role": "SUP", "clubDestination": "KRX", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "rumeur", "joueur": "Cloud", "role": "SUP", "clubSource": "", "commentaire": "", "source": "https://www.sheepesports.com/us/articles/sources-cloud-joins-gen-g-in-the-lck/en"},
    {"date": "2026-11-19", "type": "arrivée", "statut": "rumeur", "joueur": "Siwoo", "role": "TOP", "clubSource": "DK", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-gen-g-acte-les-departs-de-kiin-et-canyon-siwoo-pressenti-a-la-toplane-pour-2027_137683"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Kiin", "role": "TOP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-gen-g-acte-les-departs-de-kiin-et-canyon-siwoo-pressenti-a-la-toplane-pour-2027_137683"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Canyon", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-gen-g-acte-les-departs-de-kiin-et-canyon-siwoo-pressenti-a-la-toplane-pour-2027_137683"}
  ],
  "GL": [
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Harpoon", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://x.com/Galions_/status/2123462853223158158"},
    {"date": "2026-11-18", "type": "départ", "statut": "officiel", "joueur": "Zoelys", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-05", "type": "arrivée", "statut": "rumeur", "joueur": "Skeanz", "role": "JNG", "clubSource": "SK", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lfl-skeanz-ferait-route-vers-galions-pour-la-saison-2027_137522"},
    {"date": "2026-10-22", "type": "arrivée", "statut": "rumeur", "joueur": "Serin", "role": "MID", "clubSource": "TH", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lfl-serin-ferait-un-retour-chez-galions-pour-2027_137373"}
  ],
  "GX": [
    {"date": "2026-11-14", "type": "départ", "statut": "officiel", "joueur": "Lot", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lec-2027-transfer-market-tracker-all-moves-so-far/"},
    {"date": "2026-11-14", "type": "départ", "statut": "officiel", "joueur": "Oscarinin", "role": "TOP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-giantx-officialise-les-departs-doscarinin-et-flakked_137642"},
    {"date": "2026-11-14", "type": "arrivée", "statut": "rumeur", "joueur": "Harpoon", "role": "ADC", "clubSource": "GL", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-harpoon-cloturerait-leffectif-de-giantx-pour-la-saison-2027_137635"},
    {"date": "2026-11-14", "type": "départ", "statut": "officiel", "joueur": "Flakked", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-giantx-officialise-les-departs-doscarinin-et-flakked_137642"},
    {"date": "2026-11-13", "type": "départ", "statut": "officiel", "joueur": "Noah", "role": "ADC", "clubDestination": "BFX", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-giantx-officialise-les-departs-de-jun-lot-noah-et-isma_137607"},
    {"date": "2026-11-13", "type": "départ", "statut": "officiel", "joueur": "Jun", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-giantx-officialise-les-departs-de-jun-lot-noah-et-isma_137607"},
    {"date": "2026-11-13", "type": "départ", "statut": "officiel", "joueur": "Isma", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-giantx-officialise-les-departs-de-jun-lot-noah-et-isma_137607"},
    {"date": "2026-11-12", "type": "arrivée", "statut": "rumeur", "joueur": "Myrwn", "role": "TOP", "clubSource": "MKOI", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-myrwn-rejoindrait-giantx-comme-nouveau-toplaner-en-2027_137600"},
    {"date": "2026-11-12", "type": "départ", "statut": "officiel", "joueur": "Jackies", "role": "MID", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-pressenti-chez-team-heretics-jackies-fait-ses-adieux-a-giantx_137595"},
    {"date": "2026-11-09", "type": "arrivée", "statut": "rumeur", "joueur": "Thayger", "role": "JNG", "clubSource": "GL", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-thayger-pressenti-pour-remplacer-isma-chez-giantx-en-2027_137549"},
    {"date": "2026-11-06", "type": "arrivée", "statut": "rumeur", "joueur": "Feisty", "role": "MID", "clubSource": "LOS", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-feisty-saccorderait-avec-giantx-pour-remplacer-jackies-sur-la-midlane_137532"}
  ],
  "HLE": [
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Zeus", "role": "TOP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Kanavi", "role": "JNG", "clubDestination": "DK", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-18", "type": "arrivée", "statut": "rumeur", "joueur": "Kiin", "role": "TOP", "clubSource": "GEN", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-kiin-et-canyon-chez-hanwha-life-esports-pour-2027_137678"},
    {"date": "2026-11-18", "type": "arrivée", "statut": "rumeur", "joueur": "Canyon", "role": "JNG", "clubSource": "GEN", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-kiin-et-canyon-chez-hanwha-life-esports-pour-2027_137678"},
    {"date": "2026-11", "type": "arrivée", "statut": "rumeur", "joueur": "Career", "role": "SUP", "clubSource": "DK", "commentaire": "", "source": "https://rostermania.lol/fr"}
  ],
  "KC": [
    {"date": "2026-11-18", "type": "départ", "statut": "officiel", "joueur": "Yike", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-18", "type": "arrivée", "statut": "rumeur", "joueur": "SkewMond", "role": "JNG", "clubSource": "G2", "commentaire": "rachat", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-la-karmine-corp-aurait-finalise-le-rachat-du-contrat-de-skewmond-pour-la-saison-2027_137672"},
    {"date": "2026-11-12", "type": "prolongation", "statut": "officiel", "joueur": "Kyeahoo", "role": "MID", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-la-karmine-corp-officialise-la-prolongation-de-kyeahoo-pour-2027_137593"},
    {"date": "2026-11-12", "type": "prolongation", "statut": "officiel", "joueur": "Caliste", "role": "ADC", "commentaire": "", "source": "https://www.strafe.com/news/read/lec-2027-transfer-market-tracker-all-moves-so-far/"}
  ],
  "KCB": [
    {"date": "2026-11-17", "type": "départ", "statut": "rumeur", "joueur": "Yukino", "role": "JNG", "clubDestination": "FLY", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-yukino-quitterait-la-karmine-corp-blue-et-la-lfl-pour-rejoindre-flyquest_137661"},
    {"date": "2026-11-08", "type": "prolongation", "statut": "rumeur", "joueur": "Looki", "role": "ADC", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"}
  ],
  "KRX": [
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "Rich", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "Frog", "role": "TOP", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "Willer", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "Aiming", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "Andil", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "Vincenzo", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "rumeur", "joueur": "Lucid", "role": "JNG", "clubSource": "DK", "commentaire": "", "source": "https://www.sheepesports.com/en/articles/sources-lucid-set-to-join-kiwoom-drx-for-2027-lck-season/en"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "rumeur", "joueur": "Duro", "role": "SUP", "clubSource": "GEN", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-19", "type": "départ", "statut": "rumeur", "joueur": "Frog", "role": "TOP", "clubDestination": "C9", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-les-premieres-annonces-tombent-du-cote-des-equipes-coreennes_137656"},
    {"date": "2026-11", "type": "départ", "statut": "officiel", "joueur": "Ucal", "role": "MID", "clubDestination": "DNS", "commentaire": "", "source": "https://rostermania.lol/fr"}
  ],
  "KT": [
    {"date": "2026-11-20", "type": "départ", "statut": "officiel", "joueur": "Effort", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-20", "type": "départ", "statut": "officiel", "joueur": "Jiwoo", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "officiel", "joueur": "Kellin", "role": "SUP", "clubSource": "BFX", "commentaire": "", "source": "https://x.com/Sheep_Esports/status/2123721774613594147"},
    {"date": "2026-11-19", "type": "arrivée", "statut": "officiel", "joueur": "Raptor", "role": "JNG", "clubSource": "BFX", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "Cuzz", "role": "JNG", "clubDestination": "DNS", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-les-premieres-annonces-tombent-du-cote-des-equipes-coreennes_137656"},
    {"date": "2026-10-20", "type": "arrivée", "statut": "rumeur", "joueur": "Taeyoon", "role": "ADC", "clubSource": "BFX", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-kt-rolster-ferait-plusieurs-changements-en-prevision-de-2027-et-ciblerait-raptor-taeyoon-et-kellin_137349"},
    {"date": "2026-10-09", "type": "prolongation", "statut": "officiel", "joueur": "PerfecT", "role": "TOP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-kt-rolster-securise-perfect-et-bdd-jusquen-2028_137260"},
    {"date": "2026-10-09", "type": "prolongation", "statut": "officiel", "joueur": "Bdd", "role": "MID", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-kt-rolster-securise-perfect-et-bdd-jusquen-2028_137260"}
  ],
  "LOS": [
    {"date": "2026-11-20", "type": "arrivée", "statut": "rumeur", "joueur": "FIESTA", "role": "MID", "clubSource": "VIT", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"}
  ],
  "LYON": [
    {"date": "2026-11-17", "type": "prolongation", "statut": "rumeur", "joueur": "Saint", "role": "MID", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-17", "type": "arrivée", "statut": "rumeur", "joueur": "Naak Nako", "role": "TOP", "clubSource": "VIT", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-naak-nako-aurait-finalement-un-accord-avec-lyon-gaming_137662"}
  ],
  "MKOI": [
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "Supa", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-17", "type": "prolongation", "statut": "officiel", "joueur": "Elyoya", "role": "JNG", "commentaire": "", "source": "https://www.strafe.com/news/read/lec-2027-transfer-market-tracker-all-moves-so-far/"},
    {"date": "2026-11-14", "type": "départ", "statut": "officiel", "joueur": "Myrwn", "role": "TOP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-movistar-koi-annonce-le-depart-de-myrwn_137622"},
    {"date": "2026-11-11", "type": "arrivée", "statut": "rumeur", "joueur": "Carzzy", "role": "ADC", "clubSource": "VIT", "commentaire": "accord", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-carzzy-aurait-conclu-un-accord-verbal-avec-movistar-koi_137586"},
    {"date": "2026-11-09", "type": "arrivée", "statut": "rumeur", "joueur": "BrokenBlade", "role": "TOP", "clubSource": "G2", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-brokenblade-quitterait-g2-esports-pour-rejoindre-movistar-koi_137565"},
    {"date": "2026-09-23", "type": "prolongation", "statut": "officiel", "joueur": "Jojopyun", "role": "MID", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-movistar-koi-verrouille-jojopyun-jusquen-2027-avant-son-envol-pour-les-worlds_137164"}
  ],
  "NAVI": [
    {"date": "2026-11-19", "type": "arrivée", "statut": "rumeur", "joueur": "Karis", "role": "MID", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-le-midlaner-coreen-karis-completerait-le-roster-de-navi-pour-2027_137687"},
    {"date": "2026-11-17", "type": "départ", "statut": "officiel", "joueur": "SamD", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-14", "type": "arrivée", "statut": "rumeur", "joueur": "Zest", "role": "TOP", "clubSource": "LOS", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-le-toplaner-zest-sengagerait-avec-navi-pour-2027_137619"},
    {"date": "2026-11-12", "type": "arrivée", "statut": "rumeur", "joueur": "Supa", "role": "ADC", "clubSource": "MKOI", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-supa-rejoindrait-navi-pour-la-saison-2027_137601"},
    {"date": "2026-11-12", "type": "prolongation", "statut": "rumeur", "joueur": "Parus", "role": "SUP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-parus-honorerait-son-contrat-chez-navi-pour-la-saison-2027_137606"},
    {"date": "2026-10-29", "type": "prolongation", "statut": "rumeur", "joueur": "Rhilech", "role": "JNG", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-navi-preparerait-2027-en-reconstruisant-son-equipe-autour-de-rhilech_137464"}
  ],
  "NS": [
    {"date": "2026-11-19", "type": "arrivée", "statut": "officiel", "joueur": "Pyosik", "role": "JNG", "clubSource": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-19", "type": "arrivée", "statut": "officiel", "joueur": "Andil", "role": "SUP", "clubSource": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-19", "type": "prolongation", "statut": "officiel", "joueur": "Kingen", "role": "TOP", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-19", "type": "prolongation", "statut": "officiel", "joueur": "Calix", "role": "MID", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Lehends", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Scout", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Diable", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Sponge", "role": "", "clubDestination": "", "commentaire": "", "source": "https://www.strafe.com/news/read/lck-2027-transfer-market-tracker-all-moves/"},
    {"date": "2026-11-19", "type": "arrivée", "statut": "officiel", "joueur": "Deft", "role": "ADC", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-nongshim-redforce-officialise-le-recrutement-de-deft-pour-la-saison-2027_137686"}
  ],
  "SHF": [
    {"date": "2026-11-20", "type": "arrivée", "statut": "rumeur", "joueur": "SamD", "role": "ADC", "clubSource": "NAVI", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-shifters-lancerait-sa-reconstruction-avec-le-recrutement-de-samd_137699"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "rumeur", "joueur": "Kamiloo", "role": "MID", "clubSource": "KCB", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-shifters-ferait-revenir-kamiloo-sur-la-midlane-pour-le-lec-2027_137700"},
    {"date": "2026-11-20", "type": "arrivée", "statut": "rumeur", "joueur": "Fleshy", "role": "SUP", "clubSource": "VIT", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-shifters-verrouillerait-fleshy-au-poste-de-support-pour-2027_137703"},
    {"date": "2026-11-18", "type": "départ", "statut": "rumeur", "joueur": "Sheo", "role": "JNG", "clubDestination": "VIT", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-sheo-sengagerait-avec-team-vitality_137681"},
    {"date": "2026-11-18", "type": "départ", "statut": "rumeur", "joueur": "Rooster", "role": "TOP", "clubDestination": "G2", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-le-toplaner-rooster-completerait-leffectif-de-g2-esports-pour-2027_137679"},
    {"date": "2026-09-29", "type": "départ", "statut": "officiel", "joueur": "Stend", "role": "SUP", "clubDestination": "", "commentaire": "retraite", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-stend-revoit-ses-plans-et-annonce-son-depart-a-la-retraite_137197"},
    {"date": "2026-08-24", "type": "départ", "statut": "officiel", "joueur": "nuc", "role": "MID", "clubDestination": "", "commentaire": "retraite", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-nuc-annonce-son-retrait-de-la-competition-apres-le-summer-split_136924"}
  ],
  "SK": [
    {"date": "2026-11-16", "type": "départ", "statut": "officiel", "joueur": "Wunder", "role": "TOP", "clubDestination": "", "commentaire": "", "source": "https://x.com/SKGamingLeague/status/2122352896175985025"},
    {"date": "2026-11-16", "type": "départ", "statut": "officiel", "joueur": "Skeanz", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://x.com/SKGamingLeague/status/2122352896175985025"},
    {"date": "2026-11-16", "type": "départ", "statut": "officiel", "joueur": "Mikyx", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://x.com/SKGamingLeague/status/2122352896175985025"},
    {"date": "2026-11-16", "type": "départ", "statut": "officiel", "joueur": "LIDER", "role": "MID", "clubDestination": "", "commentaire": "", "source": "https://x.com/SKGamingLeague/status/2122352896175985025"},
    {"date": "2026-11-16", "type": "départ", "statut": "officiel", "joueur": "Jopa", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://x.com/SKGamingLeague/status/2122352896175985025"},
    {"date": "2026-11-12", "type": "arrivée", "statut": "rumeur", "joueur": "Kryze", "role": "TOP", "clubSource": "SLY", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-kryze-ferait-son-retour-au-sein-de-la-ligue-europeenne-chez-sk-gaming_137599"},
    {"date": "2026-11-06", "type": "arrivée", "statut": "rumeur", "joueur": "Zicssi", "role": "JNG", "clubSource": "SLY", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-zicssi-en-route-pour-la-jungle-de-sk-gaming_137525"},
    {"date": "2026-11-02", "type": "arrivée", "statut": "rumeur", "joueur": "Lospa", "role": "SUP", "clubSource": "FNC", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-lospa-rejoindrait-sk-gaming-pour-la-saison-2027_137496"},
    {"date": "2026-10-26", "type": "arrivée", "statut": "rumeur", "joueur": "3XA", "role": "ADC", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-3xa-signerait-son-retour-chez-sk-gaming-pour-la-saison-2027_137401"}
  ],
  "SLY": [
    {"date": "2026-11-18", "type": "arrivée", "statut": "officiel", "joueur": "Toffe", "role": "MID", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-18", "type": "arrivée", "statut": "officiel", "joueur": "Thumb", "role": "SUP", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-18", "type": "arrivée", "statut": "officiel", "joueur": "Cypher", "role": "ADC", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-18", "type": "arrivée", "statut": "officiel", "joueur": "Boukada", "role": "JNG", "clubSource": "SHF", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-10", "type": "départ", "statut": "officiel", "joueur": "Kryze", "role": "TOP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lfl-solary-officialise-le-depart-de-son-cinq-de-depart-et-prepare-un-remaniement-massif-pour-2027_137569"},
    {"date": "2026-11-08", "type": "départ", "statut": "officiel", "joueur": "Zicssi", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lfl-solary-officialise-le-depart-de-son-cinq-de-depart-et-prepare-un-remaniement-massif-pour-2027_137569"},
    {"date": "2026-11-07", "type": "départ", "statut": "officiel", "joueur": "Jool", "role": "MID", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lfl-solary-officialise-le-depart-de-son-cinq-de-depart-et-prepare-un-remaniement-massif-pour-2027_137569"},
    {"date": "2026-11-05", "type": "départ", "statut": "officiel", "joueur": "Piero", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lfl-solary-officialise-le-depart-de-son-cinq-de-depart-et-prepare-un-remaniement-massif-pour-2027_137569"},
    {"date": "2026-11-05", "type": "départ", "statut": "officiel", "joueur": "Aetinoth", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lfl-solary-officialise-le-depart-de-son-cinq-de-depart-et-prepare-un-remaniement-massif-pour-2027_137569"}
  ],
  "SR": [
    {"date": "2026-11-18", "type": "arrivée", "statut": "rumeur", "joueur": "Clear", "role": "TOP", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-16", "type": "arrivée", "statut": "rumeur", "joueur": "Vulcan", "role": "SUP", "clubSource": "C9", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-16", "type": "arrivée", "statut": "rumeur", "joueur": "Massu", "role": "ADC", "clubSource": "FLY", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11", "type": "arrivée", "statut": "rumeur", "joueur": "Quad", "role": "MID", "clubSource": "FLY", "commentaire": "", "source": "https://rostermania.lol/fr"},
    {"date": "2026-11", "type": "arrivée", "statut": "rumeur", "joueur": "Gryffinn", "role": "JNG", "clubSource": "FLY", "commentaire": "", "source": "https://rostermania.lol/fr"}
  ],
  "T1": [
    {"date": "2026-11-19", "type": "départ", "statut": "officiel", "joueur": "Doran", "role": "TOP", "clubDestination": "DK", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-t1-officialise-le-depart-de-son-toplaner-doran_137684"},
    {"date": "2026-11-17", "type": "arrivée", "statut": "rumeur", "joueur": "Zeus", "role": "TOP", "clubSource": "HLE", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lck-vers-un-retour-de-zeus-chez-t1-pour-la-saison-2027_137663"}
  ],
  "TH": [
    {"date": "2026-11-18", "type": "départ", "statut": "officiel", "joueur": "Daglas", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-06", "type": "départ", "statut": "officiel", "joueur": "Way", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-team-heretics-officialise-le-depart-de-son-support-way_137540"},
    {"date": "2026-11-03", "type": "prolongation", "statut": "officiel", "joueur": "Tracyn", "role": "TOP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-team-heretics-prolonge-son-troplaner-tracyn-jusquen-2028_137500"},
    {"date": "2026-11-03", "type": "départ", "statut": "officiel", "joueur": "Serin", "role": "MID", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-team-heretics-acte-le-depart-de-serin-et-lance-sa-reconstruction_137436"},
    {"date": "2026-11-02", "type": "prolongation", "statut": "rumeur", "joueur": "Hype", "role": "ADC", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-team-heretics-conserverait-hype-comme-botlaner-pour-la-saison-2027_137497"},
    {"date": "2026-10-21", "type": "arrivée", "statut": "rumeur", "joueur": "Razork", "role": "JNG", "clubSource": "FNC", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-razork-donnerait-sa-priorite-a-team-heretics-face-a-giantx-pour-2027_137361"},
    {"date": "2026-09-20", "type": "arrivée", "statut": "rumeur", "joueur": "Jackies", "role": "MID", "clubSource": "GX", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-jackies-ferait-route-vers-team-heretics-en-prevision-de-la-saison-2027_137144"}
  ],
  "TL": [
    {"date": "2026-11-12", "type": "départ", "statut": "rumeur", "joueur": "Yeon", "role": "ADC", "clubDestination": "C9", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-yeon-et-corejj-quitteraient-team-liquid-pour-cloud9-pour-la-saison-2027_137604"},
    {"date": "2026-11-12", "type": "départ", "statut": "rumeur", "joueur": "CoreJJ", "role": "SUP", "clubDestination": "C9", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-yeon-et-corejj-quitteraient-team-liquid-pour-cloud9-pour-la-saison-2027_137604"},
    {"date": "2026-08-03", "type": "prolongation", "statut": "officiel", "joueur": "Morgan", "role": "TOP", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-team-liquid-verrouille-son-toplaner-morgan-jusquen-2028_136789"}
  ],
  "VIT": [
    {"date": "2026-11-20", "type": "départ", "statut": "rumeur", "joueur": "FIESTA", "role": "MID", "clubDestination": "LOS", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/le-mercato-league-of-legends-de-lintersaison-2026-2027-tous-les-transferts-toutes-les-rumeurs_137145"},
    {"date": "2026-11-19", "type": "arrivée", "statut": "rumeur", "joueur": "Targamas", "role": "SUP", "clubSource": "", "commentaire": "accord", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-targamas-aurait-trouve-un-accord-verbal-pour-rejoindre-team-vitality-en-2027_137692"},
    {"date": "2026-11-18", "type": "arrivée", "statut": "rumeur", "joueur": "Sheo", "role": "JNG", "clubSource": "SHF", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-sheo-sengagerait-avec-team-vitality_137681"},
    {"date": "2026-11-17", "type": "départ", "statut": "rumeur", "joueur": "Naak Nako", "role": "TOP", "clubDestination": "LYON", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lcs-naak-nako-aurait-finalement-un-accord-avec-lyon-gaming_137662"},
    {"date": "2026-11-16", "type": "arrivée", "statut": "rumeur", "joueur": "Guti", "role": "MID", "clubSource": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-team-vitality-devrait-recruter-le-jeune-midlaner-coreen-guti_137654"},
    {"date": "2026-11-16", "type": "départ", "statut": "officiel", "joueur": "Fleshy", "role": "SUP", "clubDestination": "", "commentaire": "", "source": "https://x.com/TeamVitalityLOL/status/2122366838302491015"},
    {"date": "2026-11-13", "type": "arrivée", "statut": "rumeur", "joueur": "Jopa", "role": "ADC", "clubSource": "SK", "commentaire": "accord", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-jopa-aurait-trouve-un-accord-verbal-avec-team-vitality_137613"},
    {"date": "2026-11-13", "type": "départ", "statut": "officiel", "joueur": "Carzzy", "role": "ADC", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-team-vitality-officialise-le-depart-de-carzzy_137617"},
    {"date": "2026-11-11", "type": "départ", "statut": "officiel", "joueur": "Lyncas", "role": "JNG", "clubDestination": "", "commentaire": "", "source": "https://www.team-aaa.com/fr/actualite/mercato-lol-lec-pressenti-pour-rejoindre-g2-lyncas-quitte-team-vitality_137587"}
  ]
};
