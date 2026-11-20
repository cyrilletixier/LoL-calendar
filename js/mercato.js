/* Vue Mercato : choix d'une équipe, composition 2026 (data/2026.js) et 2027 (data/2027.js), rubrique rosters, et mouvements (data/mercato.js).
   Aucun appel réseau. Textes : lang/<code>.js, rubrique mercato (repli : anglais, puis français). */
(function () {
  "use strict";

  var TEAMS = window.LOL_TEAMS || {};
  var MERCATO = window.LOL_MERCATO || {};
  var I18N = window.LOL_I18N || {};
  var YEARS = (window.LOL_DATA && window.LOL_DATA.years) || {};
  var R26 = (YEARS[2026] && YEARS[2026].rosters) || {};
  var R27 = (YEARS[2027] && YEARS[2027].rosters) || {};
  var ORDER = ["TOP", "JNG", "MID", "ADC", "SUP"];
  /* Valeurs des données (français) -> clés des libellés traduits */
  var TYPE_KEY = { "arrivée": "arrival", "départ": "departure", "prolongation": "extension", "fin de contrat": "expiry" };
  var STATUS_KEY = { "officiel": "official", "rumeur": "rumor", "confirmé": "confirmed" };
  var REASON_KEY = { "retraite": "retirement", "accord": "verbal", "rachat": "buyout" };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function lang() { var s = document.getElementById("langSel"); return (s && s.value) || "fr"; }
  function T(k, sub) {
    var c = [I18N[lang()], I18N.en, I18N.fr];
    for (var i = 0; i < c.length; i++) {
      var m = c[i] && c[i].mercato;
      if (!m) continue;
      if (sub === undefined && m[k] !== undefined) return m[k];
      if (sub !== undefined && m[k] && m[k][sub] !== undefined) return m[k][sub];
    }
    return sub === undefined ? k : sub;
  }
  function teamName(code) { return (TEAMS[code] && TEAMS[code].n) || code; }
  function hasData(code) { return !!((MERCATO[code] && MERCATO[code].length) || R26[code] || R27[code]); }
  function byRole(list) {
    return list.slice().sort(function (a, b) { return ORDER.indexOf(a.role) - ORDER.indexOf(b.role); });
  }
  function status(st) {
    var k = STATUS_KEY[st] || st;
    return '<span class="mer-st mer-st-' + esc(k) + '">' + esc(T("statuts", k)) + "</span>";
  }
  function players(list, withStatus) {
    return '<ul class="mer-list">' + byRole(list).map(function (p) {
      return '<li><span class="mer-role">' + esc(p.role ? T("roles", p.role) : "") + "</span> <b>" + esc(p.joueur) + "</b>" +
        (withStatus && p.statut ? " " + status(p.statut) : "") + "</li>";
    }).join("") + "</ul>";
  }

  var LATEST = 10;
  function teamLink(code) {
    var n = esc(teamName(code));
    return TEAMS[code] ? '<a href="#mercato" class="mer-team" data-team="' + esc(code) + '">' + n + "</a>" : n;
  }
  /* Dernières rumeurs toutes équipes confondues : un transfert écrit sur deux équipes n'apparaît qu'une fois */
  function latestRumors() {
    var all = [];
    Object.keys(MERCATO).forEach(function (code) {
      (MERCATO[code] || []).forEach(function (m) { if (m.statut === "rumeur") all.push({ code: code, m: m }); });
    });
    all.sort(function (a, b) {
      if (a.m.date !== b.m.date) return a.m.date < b.m.date ? 1 : -1;
      return (b.m.type === "arrivée") - (a.m.type === "arrivée");
    });
    var seen = {}, out = [];
    all.forEach(function (e) {
      var k = e.m.joueur + "|" + e.m.date + "|" + (e.m.source || "");
      if (seen[k]) return;
      seen[k] = 1; out.push(e);
    });
    return out.slice(0, LATEST);
  }
  function latestHtml() {
    var list = latestRumors();
    if (!list.length) return '<p class="mer-empty">' + esc(T("latestEmpty")) + "</p>";
    return '<ul class="mer-list">' + list.map(function (e) {
      var m = e.m, path;
      if (m.type === "arrivée") path = (m.clubSource ? teamLink(m.clubSource) + " → " : "→ ") + teamLink(e.code);
      else if (m.type === "départ") path = teamLink(e.code) + (m.clubDestination ? " → " + teamLink(m.clubDestination) : "");
      else path = '<span class="tag">' + esc(T("types", TYPE_KEY[m.type] || m.type)) + "</span> " + teamLink(e.code);
      var why = m.commentaire ? T("reasons", REASON_KEY[m.commentaire] || m.commentaire) : "";
      return '<li><span class="mer-m">' + esc(m.date) + "</span> " + status(m.statut) + "<b>" + esc(m.joueur) + "</b>" +
        (m.role ? ' <span class="mer-m">' + esc(T("roles", m.role)) + "</span>" : "") +
        ' <span class="mer-m">' + path + "</span>" +
        (why ? ' <span class="mer-m">(' + esc(why) + ")</span>" : "") +
        (m.source ? ' · <a href="' + esc(m.source) + '" target="_blank" rel="noopener">' + esc(T("source")) + "</a>" : "") + "</li>";
    }).join("") + "</ul>";
  }

  function render() {
    var code = document.getElementById("mercatoTeam").value;
    var box = document.getElementById("mercatoBody");
    if (!code) {
      box.innerHTML = '<p class="mer-empty">' + esc(T("pickTeam")) + "</p><h3>" + esc(T("latest")) + "</h3>" + latestHtml();
      return;
    }
    var r26 = R26[code] || [], r27 = R27[code] || [];
    var mv = (MERCATO[code] || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
    var h = "<h3>" + esc(T("roster")) + "</h3>";
    h += r26.length ? players(r26, false) : '<p class="mer-empty">' + esc(T("rosterEmpty")) + "</p>";
    h += "<h3>" + esc(T("roster27")) + "</h3>";
    h += r27.length ? players(r27, true) : '<p class="mer-empty">' + esc(T("roster27Empty")) + "</p>";
    h += "<h3>" + esc(T("moves")) + "</h3>";
    h += mv.length
      ? '<ul class="mer-list">' + mv.map(function (m) {
        var club = m.type === "arrivée" ? (m.clubSource ? "← " + teamName(m.clubSource) : "") :
          m.type === "départ" ? (m.clubDestination ? "→ " + teamName(m.clubDestination) : "") : "";
        var why = m.commentaire ? T("reasons", REASON_KEY[m.commentaire] || m.commentaire) : "";
        return '<li><span class="mer-m">' + esc(m.date) + '</span> <span class="tag">' + esc(T("types", TYPE_KEY[m.type] || m.type)) + "</span> " +
          status(m.statut) + "<b>" + esc(m.joueur) + "</b>" +
          (m.role ? ' <span class="mer-m">' + esc(T("roles", m.role)) + "</span>" : "") +
          (club ? ' <span class="mer-m">' + esc(club) + "</span>" : "") +
          (why ? ' <span class="mer-m">(' + esc(why) + ")</span>" : "") +
          (m.source ? ' · <a href="' + esc(m.source) + '" target="_blank" rel="noopener">' + esc(T("source")) + "</a>" : "") + "</li>";
      }).join("") + "</ul>"
      : '<p class="mer-empty">' + esc(T("movesEmpty")) + "</p>";
    box.innerHTML = h;
  }

  function labels() {
    var sel = document.getElementById("mercatoTeam"), cur = sel.value;
    document.getElementById("mercatoLink").textContent = T("nav");
    document.getElementById("mercatoTitle").textContent = T("title");
    document.getElementById("mercatoLbl").textContent = T("team");
    document.getElementById("mercatoNote").textContent = T("note");
    document.getElementById("mercatoBack").textContent = T("back");
    var codes = Object.keys(TEAMS).filter(hasData).sort(function (a, b) { return teamName(a).localeCompare(teamName(b)); });
    sel.innerHTML = '<option value="">—</option>' + codes.map(function (c) {
      return '<option value="' + esc(c) + '">' + esc(teamName(c)) + "</option>";
    }).join("");
    sel.value = TEAMS[cur] ? cur : "";
    render();
  }

  /* Affiche la vue si le hash vaut #mercato, sinon le calendrier */
  function apply() {
    var on = location.hash === "#mercato";
    document.getElementById("mercatoView").hidden = !on;
    document.querySelector(".ctrls").style.display = on ? "none" : "";
    Array.prototype.forEach.call(document.querySelector(".wrap").children, function (el) {
      if (el.id === "mercatoView" || el.tagName === "HEADER" || el.tagName === "FOOTER" || el.classList.contains("lang-pick")) return;
      el.style.display = on ? "none" : "";
    });
    if (on) render();
  }

  function init() {
    var wrap = document.querySelector(".wrap");
    var link = document.createElement("a");
    link.className = "btn"; link.id = "mercatoLink"; link.href = "#mercato";
    document.querySelector(".ctrls").appendChild(link);
    var v = document.createElement("section");
    v.id = "mercatoView"; v.className = "mercato"; v.hidden = true;
    v.innerHTML = '<h2 id="mercatoTitle"></h2>' +
      '<div class="mer-pick"><label for="mercatoTeam" id="mercatoLbl"></label><select id="mercatoTeam"></select></div>' +
      '<div id="mercatoBody"></div><p class="mer-note" id="mercatoNote"></p><p><a href="#" id="mercatoBack"></a></p>';
    wrap.insertBefore(v, wrap.querySelector("footer"));
    document.getElementById("mercatoTeam").addEventListener("change", render);
    document.getElementById("mercatoBody").addEventListener("click", function (ev) {
      var a = ev.target.closest && ev.target.closest("a[data-team]");
      if (!a) return;
      ev.preventDefault();
      document.getElementById("mercatoTeam").value = a.getAttribute("data-team");
      render();
    });
    document.getElementById("langSel").addEventListener("change", labels);
    window.addEventListener("hashchange", apply);
    labels();
    apply();
  }

  init();
})();
