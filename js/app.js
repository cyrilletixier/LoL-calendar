/* lol calendar : logique d'affichage. Aucun texte ici : tout vient de lang/<code>.js. */
(function () {
  "use strict";

  /* ============ Configuration (sans texte) ============ */
  var DATA = window.LOL_DATA || { years: {} };
  var I18N = window.LOL_I18N || {};
  var REF = "fr";                    // langue de référence pour les clés manquantes
  var FALLBACK = "en";               // seconde langue de secours pour les autres langues
  var LANG_ORDER = ["fr", "en", "es", "pt", "de", "pl", "tr", "ko", "zh", "vi"];
  var PLANNED_YEARS = [2027];        // années affichées grisées, pas encore renseignées
  var LANES = [
    { group: "groupGame" },
    { id: "season", cat: "var(--gold)" },
    { id: "patch",  cat: "var(--c-patch)" },
    { id: "champ",  cat: "var(--c-champ)" },
    { id: "event",  cat: "var(--c-event)" },
    { group: "groupPro" },
    { id: "intl",  cat: "var(--c-intl)" },
    { id: "LEC",   cat: "var(--c-league)" },
    { id: "LCK",   cat: "var(--c-league)" },
    { id: "LPL",   cat: "var(--c-league)" },
    { id: "LCS",   cat: "var(--c-league)" },
    { id: "CBLOL", cat: "var(--c-league)" },
    { id: "LCP",   cat: "var(--c-league)" },
    { id: "LFL",   cat: "var(--c-league)" }
  ];
  var GAME_LANES = ["season", "patch", "champ", "event"];
  var DAY = 86400000;

  /* ============ Stockage local (facultatif) ============ */
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ============ Langue ============ */
  function pickLang() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (q && I18N[q]) return q;
    var saved = store.get("lolcal-lang", null);
    if (saved && I18N[saved]) return saved;
    var prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < prefs.length; i++) {
      var c = String(prefs[i]).slice(0, 2).toLowerCase();
      if (I18N[c]) return c;
    }
    return I18N[FALLBACK] ? FALLBACK : REF;
  }
  var lang = pickLang();
  var L = I18N[lang];

  /* Chaîne de repli : langue choisie, puis anglais, puis français */
  function chain() {
    var c = [L];
    if (lang !== FALLBACK && I18N[FALLBACK]) c.push(I18N[FALLBACK]);
    if (lang !== REF && I18N[REF]) c.push(I18N[REF]);
    return c;
  }
  function pick(fn) {
    var c = chain();
    for (var i = 0; i < c.length; i++) { var v = fn(c[i]); if (v !== undefined && v !== null) return { v: v, src: c[i] }; }
    return { v: undefined, src: L };
  }
  function ui(key) {
    var r = pick(function (x) { return x.ui && x.ui[key]; });
    var v = r.v;
    if (typeof v === "function") return v.apply(null, Array.prototype.slice.call(arguments, 1));
    return v === undefined ? key : v;
  }
  function statusLabel(k) { return pick(function (x) { return x.ui && x.ui.status && x.ui.status[k]; }).v || k; }
  function kindLabel(k) { return pick(function (x) { return x.kinds && x.kinds[k]; }).v || k; }
  function tagLabel(k) { return pick(function (x) { return x.tags && x.tags[k]; }).v || k; }
  function linkLabel(k, arg) {
    var v = pick(function (x) { return x.linkLabels && x.linkLabels[k]; }).v;
    return typeof v === "function" ? v(arg) : (v || k);
  }
  function laneText(id, f) {
    var v = pick(function (x) { return x.lanes && x.lanes[id] && x.lanes[id][f]; }).v;
    return v !== undefined ? v : (f === "label" ? id : "");
  }
  function itemText(id, f) {
    var v = pick(function (x) { return x.items && x.items[year] && x.items[year][id] && x.items[year][id][f]; }).v;
    return v !== undefined ? v : "";
  }
  function meta(k) { return pick(function (x) { return x.meta && x.meta[k]; }).v; }
  function months() { return pick(function (x) { return x.months; }).v; }
  function monthsLong() { return pick(function (x) { return x.monthsLong; }).v; }
  function fmt(d, withYear) {
    var r = pick(function (x) { return x.date; });
    return r.v.call(r.src, d.getDate(), d.getMonth(), withYear ? d.getFullYear() : null);
  }
  function monthTitle(m, y) {
    var r = pick(function (x) { return x.monthTitle; });
    return r.v ? r.v.call(r.src, m, y) : monthsLong()[m] + " " + y;
  }
  function fmtRange(it) {
    var a = it.start, b = it.end;
    var pre = it.approx ? "≈ " : "";
    if (!it.range) return pre + fmt(a, a.getFullYear() !== year);
    var cross = b.getFullYear() !== a.getFullYear();
    if (!cross && a.getMonth() === b.getMonth()) {
      var r = pick(function (x) { return x.sameMonth; });
      return pre + r.v.call(r.src, a.getDate(), b.getDate(), a.getMonth());
    }
    return pre + fmt(a, cross) + " → " + fmt(b, cross);
  }
  /* Liens officiels, adaptés à la langue */
  function patchUrl(p) {
    var n = parseInt(String(p).split(".")[1], 10);
    return "https://www.leagueoflegends.com/" + (meta("lol") || "en-us") + "/news/game-updates/league-of-legends-patch-" + String(p).split(".")[0] + "-" + n + "-notes/";
  }
  function linksOf(it) {
    var out = [], t = today0(), seen = {};
    var list = (it.links || []).slice();
    if (it.kind === "patch") list.unshift(["patch", it.s]);
    list.forEach(function (l) {
      var url, label;
      if (l[0] === "patch") {
        var pt = ITEMS.filter(function (x) { return x.kind === "patch" && x.s === l[1]; })[0];
        if (pt && pt.start > t) return;            // notes pas encore publiées
        url = patchUrl(l[1]); label = linkLabel("patch", l[1]);
      } else {
        url = l[1].replace("{le}", meta("le") || "en-US").replace("{lol}", meta("lol") || "en-us").replace("{sup}", meta("sup") || "en-us");
        label = linkLabel(l[0]);
      }
      if (seen[url]) return; seen[url] = 1;
      out.push({ url: url, label: label });
    });
    return out;
  }

  /* ============ Outils ============ */
  function parseD(str, y) {
    var full = str.length === 5 ? y + "-" + str : str;
    var p = full.split("-").map(Number);
    return new Date(p[0], p[1] - 1, p[2]);
  }
  function today0() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function status(it) {
    if (it.postponed) return "postponed";
    var t = today0();
    if (t > it.end) return "done";
    if (t >= it.start) return "live";
    return it.planned ? "planned" : "next";
  }
  function pillClass(k) { return k === "live" ? "live" : (k === "next" || k === "planned") ? "next" : k === "postponed" ? "off" : ""; }
  function isMobile() { return window.matchMedia && matchMedia("(max-width: 700px)").matches; }
  function isSheet() { return window.matchMedia && matchMedia("(max-width: 900px)").matches; }
  function cssPx(name, d) { return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || d; }
  function catOf(it) {
    if (it.kind === "season" || it.kind === "act") return "var(--" + it.color + ")";
    if (it.kind === "patch") return "var(--c-patch)";
    if (it.kind === "champ") return "var(--c-champ)";
    if (it.kind === "event") return "var(--c-event)";
    if (it.kind === "intl") return "var(--c-intl)";
    return "var(--c-league)";
  }
  function reduceMotion() { return window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches; }
  function labelWidth() { return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--label-w")) || 178; }

  /* ============ État ============ */
  var yearsAvail = Object.keys(DATA.years).map(Number).sort();
  var year = Number(store.get("lolcal-year", yearsAvail[0]));
  if (!DATA.years[year]) year = yearsAvail[0];
  var hidden = new Set(store.get("lolcal-hidden", []));
  var selId = null;
  var ITEMS = [];

  function prepare() {
    var y0 = new Date(year, 0, 1), y1 = new Date(year, 11, 31);
    ITEMS = DATA.years[year].items.map(function (raw) {
      var it = Object.assign({}, raw);
      it.start = parseD(raw.d0, year);
      it.range = !!raw.d1;
      it.end = raw.d1 ? parseD(raw.d1, year) : it.start;
      it.cont = it.end > y1;
      var vs = it.start < y0 ? y0 : it.start;
      var ve = it.end > y1 ? y1 : it.end;
      it.dayStart = Math.round((vs - y0) / DAY);
      it.days = Math.round((ve - vs) / DAY) + 1;
      it.cat = catOf(it);
      if (it.kind === "patch") { it.t = ui("patch") + " " + raw.s; it.s = raw.s; }
      else { it.t = itemText(raw.id, "t") || raw.id; it.s = itemText(raw.id, "s") || it.t; }
      it.name = itemText(raw.id, "name");
      it.place = itemText(raw.id, "place");
      it.res = itemText(raw.id, "res");
      it.notes = itemText(raw.id, "notes");
      return it;
    }).sort(function (a, b) { return (a.start - b.start) || (b.days - a.days); });
  }

  /* ============ Textes fixes de la page ============ */
  function applyStatic() {
    document.documentElement.lang = meta("htmlLang") || lang;
    document.title = ui("title");
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = ui(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", ui(el.getAttribute("data-i18n-aria"))); });
    var src = pick(function (x) { return x.sources; }).v || [];
    document.getElementById("sources").innerHTML = src.map(function (s) {
      return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + "</a></li>";
    }).join("");
  }

  /* ============ Sélecteurs langue et année ============ */
  function renderLangs() {
    var sel = document.getElementById("langSel");
    var codes = LANG_ORDER.filter(function (c) { return I18N[c]; }).concat(Object.keys(I18N).filter(function (c) { return LANG_ORDER.indexOf(c) < 0; }));
    sel.innerHTML = codes.map(function (c) {
      var m = I18N[c].meta || { name: c };
      return '<option value="' + esc(c) + '" lang="' + esc(m.htmlLang || c) + '"' + (c === lang ? " selected" : "") + ">" + esc(m.name) + "</option>";
    }).join("");
    sel.setAttribute("aria-label", ui("langNav"));
    document.getElementById("langSelLabel").textContent = ui("langNav");
    if (!sel.dataset.bound) {
      sel.dataset.bound = "1";
      sel.addEventListener("change", function () {
        lang = sel.value; L = I18N[lang]; store.set("lolcal-lang", lang);
        renderAll(false);
      });
    }
  }
  function renderYears() {
    var nav = document.getElementById("years");
    nav.innerHTML = yearsAvail.map(function (y) {
      return '<button type="button" class="btn" aria-pressed="' + (y === year) + '" data-y="' + y + '">' + y + "</button>";
    }).join("") + PLANNED_YEARS.filter(function (y) { return !DATA.years[y]; }).map(function (y) {
      return '<button type="button" class="btn" disabled title="' + esc(ui("yearNotReady")) + '">' + y + "</button>";
    }).join("");
    nav.querySelectorAll("button[data-y]").forEach(function (b) {
      b.addEventListener("click", function () {
        year = Number(b.dataset.y); store.set("lolcal-year", year); selId = null; renderAll();
      });
    });
  }

  /* ============ Maintenant ============ */
  function renderNow() {
    var el = document.getElementById("now");
    var t = today0();
    var y0 = new Date(year, 0, 1), y1 = new Date(year, 11, 31);
    var acts = ITEMS.filter(function (i) { return i.kind === "act"; });
    var patches = ITEMS.filter(function (i) { return i.kind === "patch"; });
    var pro = ITEMS.filter(function (i) { return i.kind === "intl" || i.kind === "league"; });
    var tiles = [];

    if (t < y0 || t > y1) {
      tiles.push('<div class="tile"><span class="k">' + year + '</span><span class="v">' + esc(t < y0 ? ui("yearUpcoming") : ui("yearDone")) + '</span><span class="s">' + esc(ui("yearSummary", acts.length, patches.length, pro.length)) + "</span></div>");
      ITEMS.filter(function (i) { return i.id === "i-fst" || i.id === "i-msi" || i.id === "i-w-final"; }).forEach(function (c) {
        tiles.push('<button type="button" class="tile" data-sel="' + c.id + '"><span class="k">' + esc(c.s) + '</span><span class="v">' + esc(c.res || c.t) + '</span><span class="s">' + esc(fmtRange(c)) + "</span></button>");
      });
    } else {
      var act = acts.filter(function (a) { return t >= a.start && t <= a.end; })[0];
      var season = ITEMS.filter(function (s) { return s.kind === "season" && t >= s.start && t <= s.end; })[0];
      if (act) {
        tiles.push('<button type="button" class="tile" data-sel="' + act.id + '"><span class="k">' + esc(ui("currentSeason")) + '</span><span class="v">' + esc(act.t) + '</span><span class="s">' + (season && season.name ? esc(season.name) + " · " : "") + esc(ui("until", fmt(act.end, act.end.getFullYear() !== year))) + "</span></button>");
      }
      var past = patches.filter(function (p) { return p.start <= t; }), fut = patches.filter(function (p) { return p.start > t; });
      var cur = past[past.length - 1], nxt = fut[0];
      tiles.push('<button type="button" class="tile"' + (cur ? ' data-sel="' + cur.id + '"' : "") + '><span class="k">' + esc(ui("currentPatch")) + '</span><span class="v">' + (cur ? esc(cur.s) : "—") + '</span><span class="s">' + esc(nxt ? ui("nextPatch", nxt.s, fmt(nxt.start)) : ui("lastPatch")) + "</span></button>");
      var live = ITEMS.filter(function (i) { return !i.postponed && i.kind !== "season" && i.kind !== "act" && i.kind !== "patch" && i.range && t >= i.start && t <= i.end; });
      tiles.push('<div class="tile"><span class="k">' + esc(ui("rightNow")) + "</span>" + (live.length
        ? "<ul>" + live.map(function (l) { return '<li><span class="v" style="font-size:15px">' + esc(l.t) + '</span> <span class="s">' + esc(ui("until", fmt(l.end))) + "</span></li>"; }).join("") + "</ul>"
        : '<span class="v">' + esc(ui("nothingLive")) + '</span><span class="s">' + esc(ui("nothingLiveSub")) + "</span>") + "</div>");
      var upcoming = pro.filter(function (i) { return i.start > t && !i.postponed; }).slice(0, 2);
      if (upcoming[0]) {
        var u = upcoming[0], days = Math.round((u.start - t) / DAY);
        tiles.push('<button type="button" class="tile" data-sel="' + u.id + '"><span class="k">' + esc(ui("nextUp", days)) + '</span><span class="v">' + esc(u.t) + '</span><span class="s">' + esc(fmtRange(u)) + (u.res ? " · " + esc(u.res) : (u.place ? " · " + esc(u.place) : "")) + "</span>" + (upcoming[1] ? '<span class="s">' + esc(ui("then", upcoming[1].t, fmtRange(upcoming[1]))) + "</span>" : "") + "</button>");
      }
    }
    el.innerHTML = tiles.join("");
    el.querySelectorAll("[data-sel]").forEach(function (b) { b.addEventListener("click", function () { select(b.dataset.sel, true); }); });
  }

  /* ============ Filtres ============ */
  function renderFilters() {
    var el = document.getElementById("filters");
    var lanes = LANES.filter(function (l) { return l.id; });
    el.innerHTML = '<span class="lbl">' + esc(ui("show")) + "</span>" + lanes.map(function (l) {
      return '<button type="button" class="chip" style="--cat:' + l.cat + '" aria-pressed="' + !hidden.has(l.id) + '" data-lane="' + l.id + '">' + esc(laneText(l.id, "label")) + "</button>";
    }).join("") +
      '<button type="button" class="chip mini" id="fAll">' + esc(ui("all")) + "</button>" +
      '<button type="button" class="chip mini" id="fGame">' + esc(ui("gameOnly")) + "</button>" +
      '<button type="button" class="chip mini" id="fPro">' + esc(ui("proOnly")) + "</button>";
    el.querySelectorAll("[data-lane]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.dataset.lane;
        if (hidden.has(id)) hidden.delete(id); else hidden.add(id);
        saveHidden(); renderAll(false);
      });
    });
    document.getElementById("fAll").onclick = function () { hidden = new Set(); saveHidden(); renderAll(false); };
    document.getElementById("fGame").onclick = function () { hidden = new Set(lanes.map(function (l) { return l.id; }).filter(function (i) { return GAME_LANES.indexOf(i) < 0; })); saveHidden(); renderAll(false); };
    document.getElementById("fPro").onclick = function () { hidden = new Set(GAME_LANES); saveHidden(); renderAll(false); };
  }
  function saveHidden() { store.set("lolcal-hidden", Array.from(hidden)); }

  /* ============ Frise ============ */
  var measureCtx = null;
  function measure(text, patch) {
    if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d");
    measureCtx.font = (patch ? "500 11.5px" : "600 12.5px") + ' "Barlow Condensed", "Arial Narrow", sans-serif';
    return measureCtx.measureText(text).width;
  }
  var ROW = 28, BAR = 22, PAD = 7;
  function layoutLane(items, ppd, trackW) {
    var rows = [];
    items.forEach(function (it) {
      var x = it.dayStart * ppd;
      var isPatch = it.kind === "patch";
      var label = it.s + (it.cont ? " ›" : "");
      var lw = Math.ceil(measure(label, isPatch)) + 4;
      var w = 0, left, right;
      it.flip = false; it.inside = false;
      if (isPatch) {
        left = x - 1; right = left + 2 + 4 + lw;
      } else if (!it.range) {
        left = x - 8; right = left + 15 + 4 + lw;
        if (right > trackW) { it.flip = true; right = x + 8; left = right - 15 - 4 - lw; }
      } else {
        w = Math.max(it.days * ppd - 1.5, 4);
        it.inside = lw + 14 <= w;
        left = x;
        right = it.inside ? x + w : x + w + 4 + lw;
        if (!it.inside && right > trackW) { it.flip = true; right = x + w; left = x - 4 - lw; }
      }
      it.w = w; it.left = left; it.label = label;
      var r = -1;
      for (var i = 0; i < rows.length; i++) { if (rows[i] <= left + 0.6) { r = i; break; } }
      if (r < 0) { r = rows.length; rows.push(0); }
      rows[r] = right + (it.inside ? 0 : isPatch ? 3 : 6);
      it.row = r;
    });
    return Math.max(rows.length, 1);
  }
  function renderTimeline() {
    var scroll = document.getElementById("tlScroll"), tl = document.getElementById("tl");
    var labelW = labelWidth();
    ROW = cssPx("--row", 28); BAR = cssPx("--bar", 22);
    var trackW = Math.max(scroll.clientWidth - labelW - 2, isMobile() ? 1240 : 1060);
    var daysInYear = Math.round((new Date(year + 1, 0, 1) - new Date(year, 0, 1)) / DAY);
    var ppd = trackW / daysInYear;
    var M = months();
    tl.style.width = (labelW + trackW) + "px";
    var html = '<div class="row head"><div class="lane-label">' + year + '</div><div class="track months">';
    for (var m = 0; m < 12; m++) {
      var mx = Math.round((new Date(year, m, 1) - new Date(year, 0, 1)) / DAY) * ppd;
      html += '<span class="mlabel" style="left:' + mx + 'px">' + esc(M[m]) + "</span>";
    }
    html += "</div></div>";
    var pendingGroup = null;
    LANES.forEach(function (lane) {
      if (lane.group) { pendingGroup = lane.group; return; }
      if (hidden.has(lane.id)) return;
      if (pendingGroup) { html += '<div class="row group"><div class="lane-label">' + esc(ui(pendingGroup)) + '</div><div class="track"></div></div>'; pendingGroup = null; }
      var items = ITEMS.filter(function (i) { return i.lane === lane.id; });
      var nRows = layoutLane(items, ppd, trackW);
      var h = nRows * ROW + PAD * 2 - (ROW - BAR);
      var sub = laneText(lane.id, "sub");
      var short = laneText(lane.id, "short") || laneText(lane.id, "label");
      html += '<div class="row"><div class="lane-label" style="--cat:' + lane.cat + '"><span class="sw" aria-hidden="true"></span><span class="ll-full">' + esc(laneText(lane.id, "label")) + (sub ? "<small>" + esc(sub) + "</small>" : "") + '</span><span class="ll-short" title="' + esc(laneText(lane.id, "label")) + '">' + esc(short) + '</span></div><div class="track" style="height:' + h + 'px">';
      items.forEach(function (it) {
        var top = PAD + it.row * ROW;
        var cls = ["item", it.kind, it.approx ? "approx" : "", it.postponed ? "off" : "", it.cont ? "cont" : "", it.flip ? "flip" : "", it.key ? "key" : "", it.id === selId ? "sel" : ""].join(" ");
        var aria = esc(it.t + ", " + fmtRange(it) + (it.res ? ", " + it.res : "") + (it.postponed ? ", " + statusLabel("postponed") : ""));
        var inner;
        if (it.kind === "patch") inner = '<span class="tick"></span><span class="out">' + esc(it.label) + "</span>";
        else if (!it.range) inner = '<span class="dia"></span><span class="out">' + esc(it.label) + "</span>";
        else inner = '<span class="fill" style="width:' + it.w + 'px">' + (it.inside ? esc(it.label) : "") + "</span>" + (it.inside ? "" : '<span class="out">' + esc(it.label) + "</span>");
        html += '<button type="button" class="' + cls + '" style="--cat:' + it.cat + ";left:" + it.left + "px;top:" + top + 'px" data-id="' + it.id + '" aria-label="' + aria + '" title="' + aria + '">' + inner + "</button>";
      });
      html += "</div></div>";
    });
    html += '<div class="overlay" style="left:' + labelW + "px;width:" + trackW + 'px">';
    for (var k = 1; k < 12; k++) {
      var lx = Math.round((new Date(year, k, 1) - new Date(year, 0, 1)) / DAY) * ppd;
      html += '<span class="mline" style="left:' + lx + 'px"></span>';
    }
    var t = today0();
    if (t.getFullYear() === year) {
      var tx = Math.round((t - new Date(year, 0, 1)) / DAY) * ppd + ppd / 2;
      html += '<span class="today" style="left:' + tx + 'px"><span>' + esc(fmt(t)) + "</span></span>";
    }
    html += "</div>";
    tl.innerHTML = html;
    tl.querySelectorAll(".item").forEach(function (b) { b.addEventListener("click", function () { select(b.dataset.id, false); }); });
  }

  /* ============ Agenda ============ */
  function renderAgenda() {
    var el = document.getElementById("agenda");
    var vis = ITEMS.filter(function (i) { return !hidden.has(i.lane); });
    if (!vis.length) { el.innerHTML = "<p>" + esc(ui("noLanes")) + "</p>"; return; }
    var byMonth = [];
    for (var m = 0; m < 12; m++) byMonth.push([]);
    vis.forEach(function (i) { byMonth[i.start.getFullYear() < year ? 0 : i.start.getMonth()].push(i); });
    var tNow = today0(), curM = tNow.getFullYear() === year ? tNow.getMonth() : -1;
    var M = months(), ML = monthsLong();
    var html = '<nav class="jump" aria-label="' + esc(ui("monthJumpAria")) + '">' + M.map(function (n, mi) {
      return '<button type="button" data-m="' + mi + '"' + (byMonth[mi].length ? "" : " disabled") + ' class="btn' + (mi === curM ? " cur" : "") + '">' + esc(n) + "</button>";
    }).join("") + "</nav>";
    byMonth.forEach(function (list, mi) {
      if (!list.length) return;
      var pro = list.filter(function (i) { return i.kind === "intl" || i.kind === "league"; }).length;
      html += '<section id="mois-' + (mi + 1) + '"><h3>' + esc(monthTitle(mi, year)) + "<small>" + esc(ui("entries", list.length)) + (pro ? " · " + esc(ui("competitions", pro)) : "") + '</small></h3><div class="ag-list">';
      list.forEach(function (i) {
        var st = status(i);
        var meta;
        if (i.kind === "patch") meta = i.notes ? esc(i.notes) : "";
        else meta = [i.place ? esc(i.place) : null, i.res ? "<b>" + esc(i.res) + "</b>" : null].filter(Boolean).join(" · ");
        var tag = i.kind === "league" ? i.lane : tagLabel(i.kind);
        html += '<button type="button" class="ag ' + (i.kind === "patch" ? "patch " : "") + (i.postponed ? "off " : "") + (i.id === selId ? "sel" : "") + '" style="--cat:' + i.cat + '" data-id="' + i.id + '">' +
          '<span class="d">' + esc(fmtRange(i)) + "</span>" +
          '<span class="body"><span class="t"><span class="tag">' + esc(tag) + "</span>" + esc(i.t) + "</span>" + (meta ? '<br><span class="m">' + meta + "</span>" : "") + "</span>" +
          '<span class="pill ' + pillClass(st) + (i.approx ? " approx" : "") + '">' + esc(statusLabel(st)) + "</span></button>";
      });
      html += "</div></section>";
    });
    el.innerHTML = html;
    el.querySelectorAll(".ag").forEach(function (b) { b.addEventListener("click", function () { select(b.dataset.id, true); }); });
    el.querySelectorAll(".jump button[data-m]").forEach(function (b) {
      b.addEventListener("click", function () {
        var s = document.getElementById("mois-" + (Number(b.dataset.m) + 1));
        if (s) s.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
      });
    });
  }

  /* ============ Fiche détail ============ */
  function renderDetail() {
    var el = document.getElementById("detail");
    var it = ITEMS.filter(function (i) { return i.id === selId; })[0];
    var closeBtn = '<span class="grab" aria-hidden="true"></span><button type="button" class="close" id="detailClose" aria-label="' + esc(ui("close")) + '">×</button>';
    if (!it) { el.innerHTML = closeBtn + "<p>" + esc(ui("pickItem")) + "</p>"; bindClose(); return; }
    var st = status(it);
    el.style.setProperty("--cat", it.cat);
    var kind = it.kind === "league" ? ui("leagueKind", laneText(it.lane, "label")) : kindLabel(it.kind);
    var dl = "";
    if (it.place) dl += "<div><dt>" + esc(ui("place")) + "</dt><dd>" + esc(it.place) + "</dd></div>";
    if (it.res) dl += "<div><dt>" + esc(st === "postponed" ? ui("statusTitle") : st === "done" ? ui("result") : ui("matchup")) + '</dt><dd class="res">' + esc(it.res) + "</dd></div>";
    if (it.notes) dl += "<div><dt>" + esc(ui("notes")) + "</dt><dd>" + esc(it.notes) + "</dd></div>";
    var lk = linksOf(it);
    if (lk.length) dl += "<div><dt>" + esc(ui("links")) + '</dt><dd><ul class="links">' + lk.map(function (l) {
      return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + ' <span aria-hidden="true">↗</span></a></li>';
    }).join("") + "</ul></dd></div>";
    if (it.range) {
      var n = Math.round((it.end - it.start) / DAY) + 1;
      dl += "<div><dt>" + esc(ui("duration")) + "</dt><dd>" + esc(ui("days", n)) + (it.approx ? " " + esc(ui("approx")) : "") + "</dd></div>";
    }
    el.innerHTML = closeBtn + '<span class="kind"><i aria-hidden="true"></i>' + esc(kind) + "</span>" +
      "<h2>" + esc(it.t) + "</h2>" +
      '<div class="when"><span>' + esc(fmtRange(it)) + '</span><span class="pill ' + pillClass(st) + '">' + esc(statusLabel(st)) + "</span></div>" +
      (dl ? "<dl>" + dl + "</dl>" : "");
    bindClose();
  }
  function bindClose() {
    var b = document.getElementById("detailClose");
    if (b) b.addEventListener("click", closeSheet);
  }
  var lastFocus = null;
  function openSheet() {
    if (!isSheet()) return;
    var d = document.getElementById("detail");
    lastFocus = document.activeElement;
    d.classList.add("open"); d.scrollTop = 0;
    document.getElementById("scrim").classList.add("open");
    var c = document.getElementById("detailClose"); if (c) c.focus({ preventScroll: true });
  }
  function closeSheet() {
    document.getElementById("detail").classList.remove("open");
    document.getElementById("scrim").classList.remove("open");
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  /* ============ Sélection ============ */
  function select(id, scrollTl) {
    selId = id;
    document.querySelectorAll(".item.sel,.ag.sel").forEach(function (e) { e.classList.remove("sel"); });
    document.querySelectorAll('[data-id="' + CSS.escape(id) + '"]').forEach(function (e) { e.classList.add("sel"); });
    renderDetail();
    openSheet();
    if (scrollTl) {
      var b = document.querySelector('.item[data-id="' + CSS.escape(id) + '"]'), sc = document.getElementById("tlScroll");
      if (b) {
        var lw = labelWidth();
        var target = b.offsetLeft - (sc.clientWidth - lw) / 2 + lw / 2;
        sc.scrollTo({ left: Math.max(0, target), behavior: reduceMotion() ? "auto" : "smooth" });
      }
    }
  }
  function defaultSel() {
    var t = today0();
    var pro = ITEMS.filter(function (i) { return i.kind === "intl" || i.kind === "league"; });
    var live = pro.filter(function (i) { return t >= i.start && t <= i.end && i.kind === "intl"; })[0];
    var nxt = pro.filter(function (i) { return i.start > t && !i.postponed; })[0];
    return (live || nxt || ITEMS.filter(function (i) { return i.id === "i-w-final"; })[0] || ITEMS[0]).id;
  }

  /* ============ Assemblage ============ */
  function renderAll(resetSel) {
    prepare();
    if (resetSel !== false && !selId) selId = defaultSel();
    applyStatic(); renderLangs(); renderYears(); renderNow(); renderFilters(); renderTimeline(); renderAgenda(); renderDetail();
  }

  document.getElementById("scrim").addEventListener("click", closeSheet);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeSheet(); });
  var rT;
  window.addEventListener("resize", function () { clearTimeout(rT); rT = setTimeout(renderTimeline, 120); });
  renderAll();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measureCtx = null; renderTimeline(); });
  requestAnimationFrame(function () {
    var sc = document.getElementById("tlScroll"), td = document.querySelector(".today");
    if (td && sc.scrollWidth > sc.clientWidth) sc.scrollLeft = Math.max(0, td.offsetLeft - sc.clientWidth * 0.6);
  });
})();
