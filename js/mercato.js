/* Vue Mercato : choix d'une équipe, composition 2026 (data/2026.js, rubrique rosters) et mouvements (data/mercato.js).
   Aucun appel réseau. Textes : lang/<code>.js, rubrique mercato (repli : anglais, puis français). */
(function () {
  "use strict";

  var TEAMS = window.LOL_TEAMS || {};
  var MERCATO = window.LOL_MERCATO || {};
  var I18N = window.LOL_I18N || {};
  var Y26 = (window.LOL_DATA && window.LOL_DATA.years && window.LOL_DATA.years[2026]) || {};
  var ROSTERS = Y26.rosters || {};

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function lang() { var s = document.getElementById("langSel"); return (s && s.value) || "fr"; }
  function T(k) {
    var c = [I18N[lang()], I18N.en, I18N.fr];
    for (var i = 0; i < c.length; i++) {
      if (c[i] && c[i].mercato && c[i].mercato[k] !== undefined) return c[i].mercato[k];
    }
    return k;
  }
  function teamName(code) { return (TEAMS[code] && TEAMS[code].n) || code; }

  function render() {
    var code = document.getElementById("mercatoTeam").value;
    var box = document.getElementById("mercatoBody");
    if (!code) { box.innerHTML = '<p class="mer-empty">' + esc(T("pickTeam")) + "</p>"; return; }
    var ros = ROSTERS[code] || [];
    var mv = (MERCATO[code] || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var h = "<h3>" + esc(T("roster")) + "</h3>";
    h += ros.length
      ? '<ul class="mer-list">' + ros.map(function (p) {
        return "<li><b>" + esc(p.joueur) + '</b> <span class="mer-m">' + esc(p.role || "") + "</span></li>";
      }).join("") + "</ul>"
      : '<p class="mer-empty">' + esc(T("rosterEmpty")) + "</p>";
    h += "<h3>" + esc(T("moves")) + "</h3>";
    h += mv.length
      ? '<ul class="mer-list">' + mv.map(function (m) {
        return '<li><span class="mer-m">' + esc(m.date) + '</span> <span class="tag">' + esc(m.type) + "</span> <b>" + esc(m.joueur) + "</b> " +
          esc(T("from")) + " " + esc(m.clubSource || "–") + " " + esc(T("to")) + " " + esc(m.clubDestination || "–") +
          (m.commentaire ? '<br><span class="mer-m">' + esc(m.commentaire) + "</span>" : "") +
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
    var codes = Object.keys(TEAMS).sort(function (a, b) { return teamName(a).localeCompare(teamName(b)); });
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
      if (el.id === "mercatoView" || el.tagName === "HEADER" || el.classList.contains("lang-pick")) return;
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
    document.getElementById("langSel").addEventListener("change", labels);
    window.addEventListener("hashchange", apply);
    labels();
    apply();
  }

  init();
})();
