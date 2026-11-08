/* Engineering Tools & Ecosystem — rendering + interaction.
   Data lives in assets/js/engineering-tools-data.js (window.ET_DATA). */
(function () {
  'use strict';
  var D = window.ET_DATA, root = document.getElementById('et-app');
  if (!D || !root) return;

  var SVG = {
    search: '<path d="M11 4a7 7 0 1 0 4.2 12.6l4.6 4.6 1.4-1.4-4.6-4.6A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"/>',
    close: '<path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z"/>',
    ext: '<path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H5v12h12v-6h2v8H3V5h2Z"/>',
    folder: '<path d="M10 4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6Z"/>',
    info: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"/>',
    empty: '<path d="M11 4a7 7 0 1 0 4.2 12.6l4.6 4.6 1.4-1.4-4.6-4.6A7 7 0 0 0 11 4Zm-2.5 4.5 2.5 2.5 2.5-2.5 1 1-2.5 2.5 2.5 2.5-1 1-2.5-2.5-2.5 2.5-1-1L10 12 7.5 9.5l1-1Z"/>'
  };
  function icon(name, vb, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="' + (vb || '0 0 24 24') + '" fill="currentColor" aria-hidden="true" focusable="false">' + SVG[name] + '</svg>';
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function mono(name) {
    var w = name.replace(/[^A-Za-z0-9 ]/g, ' ').trim().split(/\s+/).filter(Boolean);
    if (!w.length) return '?';
    return (w.length === 1 ? w[0].slice(0, 2) : (w[0][0] + w[1][0])).replace(/^./, function (c) { return c.toUpperCase(); });
  }

  var cats = D.categories, catById = {}, tools = D.tools, STAT = D.statuses;
  cats.forEach(function (c) { catById[c.id] = c; });
  var counts = { all: tools.length };
  cats.forEach(function (c) { counts[c.id] = tools.filter(function (t) { return t.cats.indexOf(c.id) > -1; }).length; });
  tools.forEach(function (t) {
    t._hay = (t.name + ' ' + t.desc + ' ' + t.cats.map(function (id) { return catById[id].label; }).join(' ')).toLowerCase();
  });

  var state = { cat: 'all', q: '', status: 'all' };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var section = document.getElementById('engineering-tools');

  // ---------- skeleton ----------
  root.innerHTML =
    '<div class="et-bar">' +
      '<div class="et-search" role="search">' + icon('search') +
        '<input id="et-q" type="search" inputmode="search" autocomplete="off" spellcheck="false" placeholder="Search tools, platforms, technologies..." aria-label="Search tools, platforms and technologies" aria-controls="et-grid">' +
        '<button type="button" class="et-clear" id="et-clear" hidden aria-label="Clear search">' + icon('close') + '</button>' +
      '</div>' +
      '<div class="et-row">' +
        '<p class="et-count" id="et-count" role="status" aria-live="polite"></p>' +
        '<div class="et-seg" id="et-seg" role="group" aria-label="Filter by experience"></div>' +
      '</div>' +
    '</div>' +
    '<div class="et-tabs-wrap"><div class="et-tabs" id="et-tabs"><div class="et-track" role="tablist" aria-label="Tool categories" id="et-track"><span class="et-ind" id="et-ind" aria-hidden="true"></span></div></div></div>' +
    '<div class="et-panel" id="et-panel" role="tabpanel" tabindex="-1" aria-live="off"></div>' +
    '<p class="et-note">' + icon('info') + '<span>This directory lists tools and platforms I have worked with, studied or am exploring. Listing a tool is not a claim of mastery — the badge on a card shows my actual experience level where I have set one.</span></p>';

  var $q = root.querySelector('#et-q'), $clear = root.querySelector('#et-clear'), $count = root.querySelector('#et-count'),
      $seg = root.querySelector('#et-seg'), $track = root.querySelector('#et-track'), $ind = root.querySelector('#et-ind'),
      $tabs = root.querySelector('#et-tabs'), $panel = root.querySelector('#et-panel');

  // ---------- tabs ----------
  function tabHTML(id, label, svgBody) {
    return '<button type="button" class="et-tab" role="tab" id="et-tab-' + id + '" data-cat="' + id + '" aria-selected="false" aria-controls="et-panel" tabindex="-1">' +
      (svgBody ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' + svgBody + '</svg>' : '') +
      '<span>' + esc(label) + '</span><small>' + counts[id] + '</small></button>';
  }
  var allIcon = '<path d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z"/>';
  $track.insertAdjacentHTML('beforeend', tabHTML('all', 'All Tools', allIcon) + cats.map(function (c) { return tabHTML(c.id, c.label, c.icon); }).join(''));
  var tabEls = Array.prototype.slice.call($track.querySelectorAll('.et-tab'));

  function placeIndicator() {
    var el = $track.querySelector('.et-tab[aria-selected="true"]');
    if (!el) return;
    if (!('transform' in $ind.style)) { section.classList.add('et-noind'); return; }
    $ind.style.width = el.offsetWidth + 'px';
    $ind.style.height = el.offsetHeight + 'px';
    $ind.style.transform = 'translate3d(' + el.offsetLeft + 'px,0,0)';
  }
  function selectTab(id, focus) {
    state.cat = id;
    tabEls.forEach(function (b) {
      var on = b.dataset.cat === id;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      if (on) {
        placeIndicator();
        if (focus) b.focus({ preventScroll: true });
        var left = b.offsetLeft - ($tabs.clientWidth - b.offsetWidth) / 2;
        $tabs.scrollTo({ left: left, behavior: reduce ? 'auto' : 'smooth' });
      }
    });
    $panel.setAttribute('aria-labelledby', 'et-tab-' + id);
    render();
  }
  $track.addEventListener('click', function (e) { var b = e.target.closest('.et-tab'); if (b) selectTab(b.dataset.cat); });
  $track.addEventListener('keydown', function (e) {
    var i = tabEls.indexOf(document.activeElement); if (i < 0) return;
    var n = tabEls.length, t = null;
    if (e.key === 'ArrowRight') t = (i + 1) % n; else if (e.key === 'ArrowLeft') t = (i - 1 + n) % n;
    else if (e.key === 'Home') t = 0; else if (e.key === 'End') t = n - 1;
    if (t !== null) { e.preventDefault(); selectTab(tabEls[t].dataset.cat, true); }
  });
  window.addEventListener('resize', placeIndicator);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeIndicator);

  // ---------- status filter ----------
  var segDefs = [['all', 'All']].concat(Object.keys(STAT).map(function (k) { return [k, STAT[k]]; }));
  $seg.innerHTML = segDefs.map(function (d) {
    return '<button type="button" data-st="' + d[0] + '" aria-pressed="' + (d[0] === 'all') + '">' +
      (d[0] === 'all' ? '' : '<span class="et-dot ' + d[0] + '"></span>') + esc(d[1]) + '</button>';
  }).join('');
  $seg.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    state.status = b.dataset.st;
    Array.prototype.forEach.call($seg.children, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    render();
  });

  // ---------- search ----------
  var tm;
  $q.addEventListener('input', function () {
    $clear.hidden = !$q.value;
    clearTimeout(tm); tm = setTimeout(function () { state.q = $q.value.trim().toLowerCase(); render(); }, 90);
  });
  $q.addEventListener('keydown', function (e) { if (e.key === 'Escape' && $q.value) { e.preventDefault(); clearSearch(); } });
  $clear.addEventListener('click', clearSearch);
  function clearSearch() { $q.value = ''; state.q = ''; $clear.hidden = true; $q.focus(); render(); }

  // ---------- grid ----------
  function filtered() {
    var terms = state.q ? state.q.split(/\s+/) : [];
    var list = tools.filter(function (t) {
      if (state.cat !== 'all' && t.cats.indexOf(state.cat) < 0) return false;
      if (state.status !== 'all' && t.status !== state.status) return false;
      for (var i = 0; i < terms.length; i++) if (t._hay.indexOf(terms[i]) < 0) return false;
      return true;
    });
    if (state.cat !== 'all') list = list.filter(function (t) { return t.feature; }).concat(list.filter(function (t) { return !t.feature; }));
    return list;
  }
  function cardHTML(t, i) {
    var primary = catById[t.cats[0]];
    var vis = t.icon
      ? '<span class="et-ped"><img src="' + esc(t.icon) + '" alt="" width="44" height="44" loading="lazy" decoding="async"></span>'
      : '<span class="et-ped"><span class="et-mono" aria-hidden="true">' + esc(mono(t.name)) + '</span></span>';
    var st = t.status ? '<span class="et-st"><span class="et-dot ' + t.status + '"></span>' + esc(STAT[t.status]) + '</span>' : '';
    return '<li style="--i:' + i + '"><button type="button" class="et-card' + (t.feature ? ' is-feature' : '') + '" data-id="' + t.id + '" data-cat="' + t.cats[0] + '" aria-haspopup="dialog" aria-label="' + esc(t.name) + ' — ' + esc(primary.label) + (t.status ? ', ' + esc(STAT[t.status]) : '') + '. Open details">' +
      st + vis +
      '<span><span class="et-name" style="display:-webkit-box">' + esc(t.name) + '</span><span class="et-cat" style="display:block">' + esc(primary.label) + '</span></span>' +
      '<span class="et-hint">' + esc(t.desc) + '</span></button></li>';
  }
  function render() {
    var list = filtered();
    var total = state.cat === 'all' ? tools.length : counts[state.cat];
    $count.innerHTML = 'Showing <b>' + list.length + '</b> of ' + total + ' tool' + (total === 1 ? '' : 's') + (state.cat !== 'all' ? ' in <b>' + esc(catById[state.cat].label) + '</b>' : '');
    var note = state.cat !== 'all' ? '<p class="et-cat-note">' + esc(catById[state.cat].use) + '</p>' : '';
    if (!list.length) {
      $panel.innerHTML = note + '<div class="et-empty">' + icon('empty') + '<h3>No tools found</h3><p>Nothing matches' + (state.q ? ' “' + esc($q.value.trim()) + '”' : ' these filters') + '. Try a different keyword, category or experience filter.</p><button type="button" class="et-btn" id="et-reset">Reset all filters</button></div>';
      var r = $panel.querySelector('#et-reset');
      r.addEventListener('click', function () { $q.value = ''; state.q = ''; $clear.hidden = true; state.status = 'all'; Array.prototype.forEach.call($seg.children, function (x) { x.setAttribute('aria-pressed', x.dataset.st === 'all' ? 'true' : 'false'); }); selectTab('all'); });
      return;
    }
    $panel.innerHTML = note + '<ul class="et-grid" id="et-grid" aria-label="Tools">' + list.map(cardHTML).join('') + '</ul>';
  }
  $panel.addEventListener('click', function (e) {
    var c = e.target.closest('.et-card'); if (c) openDialog(c.dataset.id, c);
  });

  // ---------- dialog ----------
  var dlg = document.getElementById('et-dialog'), lastTrigger = null;
  function openDialog(id, trigger) {
    var t = tools.filter(function (x) { return x.id === id; })[0]; if (!t) return;
    lastTrigger = trigger;
    var vis = t.icon ? '<span class="et-ped"><img src="' + esc(t.icon) + '" alt="" width="58" height="58"></span>' : '<span class="et-ped"><span class="et-mono" aria-hidden="true">' + esc(mono(t.name)) + '</span></span>';
    var chips = t.cats.map(function (c) { return '<span class="et-chip">' + esc(catById[c].label) + '</span>'; }).join('') +
      (t.status ? '<span class="et-chip"><span class="et-dot ' + t.status + '"></span>' + esc(STAT[t.status]) + '</span>' : '<span class="et-chip">Experience level not specified</span>');
    var use = t.use || catById[t.cats[0]].use;
    var projs = (t.projects || []).filter(function (s) { return D.projects[s]; });
    var projHTML = projs.length
      ? '<ul class="et-links">' + projs.map(function (s) { return '<li><a href="projects/' + esc(s) + '.html">' + icon('folder') + esc(D.projects[s]) + '</a></li>'; }).join('') + '</ul>'
      : '<p class="mut">No related projects linked yet.</p>';
    var link = t.url ? '<div><h4>Official website</h4><ul class="et-links"><li><a href="' + esc(t.url) + '" target="_blank" rel="noopener noreferrer">' + icon('ext') + esc(t.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')) + '</a></li></ul></div>' : '';
    dlg.innerHTML = '<div class="et-dlg"><button type="button" class="et-dlg-close" aria-label="Close details">' + icon('close') + '</button>' +
      '<div class="et-dlg-top">' + vis + '<div><h3 id="et-dlg-title">' + esc(t.name) + '</h3><div class="et-chips">' + chips + '</div></div></div>' +
      '<div class="et-dlg-body"><div><h4>Overview</h4><p>' + esc(t.desc) + '</p></div><div><h4>Practical use case</h4><p>' + esc(use) + '</p></div>' +
      '<div><h4>Related projects</h4>' + projHTML + '</div>' + link + '</div></div>';
    dlg.setAttribute('aria-labelledby', 'et-dlg-title');
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    var cb = dlg.querySelector('.et-dlg-close'); if (cb) cb.focus();
  }
  function closeDialog() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target.closest('.et-dlg-close')) closeDialog();
  });
  dlg.addEventListener('close', function () { if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true }); });

  // header stats
  var s1 = document.getElementById('et-n-tools'), s2 = document.getElementById('et-n-cats');
  if (s1) s1.textContent = tools.length; if (s2) s2.textContent = cats.length;

  selectTab('all');
})();
