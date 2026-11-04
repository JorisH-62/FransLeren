import { esc, toast, $, $$ } from '../util.js';
import { PHRASES } from '../data/phrases.js';
import * as srs from '../srs.js';

export function render(root) {
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>📖 Zinnenboek</h1>
    <p class="muted">Kant-en-klare zinnen voor bij de familie. Tik op een zin om hem te horen, of op ➕ om hem in je flashcards te zetten.</p>
    <input class="answer" id="q" placeholder="🔍 Zoek (Nederlands of Frans)…" style="margin-bottom:12px">
    <div class="row wrap" style="gap:6px;margin-bottom:12px">${PHRASES.map((c, i) => `<button class="pill" data-jump="${i}" style="border:none;cursor:pointer;padding:5px 10px">${c.e} ${esc(c.cat)}</button>`).join('')}</div>
    <div id="list"></div>`;
  const draw = q => {
    const ql = (q || '').toLowerCase();
    $('#list', root).innerHTML = PHRASES.map((c, ci) => {
      const items = c.items.filter(([fr, nl]) => !ql || fr.toLowerCase().includes(ql) || nl.toLowerCase().includes(ql));
      if (!items.length) return '';
      return `<h2 id="cat${ci}">${c.e} ${esc(c.cat)}</h2><div class="card" style="padding:6px 14px">
        ${items.map(([fr, nl]) => `<div class="row" style="padding:9px 0;border-bottom:1px dashed var(--line);align-items:flex-start">
          <div style="flex:1;cursor:pointer" data-say="${esc(fr)}"><b class="fr-inline">${esc(fr)}</b><div class="small muted">${esc(nl)}</div></div>
          <button class="iconbtn" data-add="${esc(fr)}" data-nl="${esc(nl)}" aria-label="Naar flashcards" style="font-size:.95rem">${srs.hasCard(fr) ? '✅' : '➕'}</button>
        </div>`).join('')}</div>`;
    }).join('') || '<p class="muted">Niets gevonden.</p>';
  };
  draw();
  $('#q', root).oninput = e => draw(e.target.value);
  root.onclick = e => {
    const j = e.target.closest('[data-jump]');
    if (j) { e.preventDefault(); document.getElementById('cat' + j.dataset.jump)?.scrollIntoView({ behavior: 'smooth' }); return; }
    const b = e.target.closest('[data-add]');
    if (!b) return;
    if (srs.addCard(b.dataset.add, b.dataset.nl, 'zinnen')) toast('Toegevoegd aan je flashcards 🃏');
    b.textContent = '✅';
  };
}
