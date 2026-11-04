import * as store from '../store.js';
import { esc } from '../util.js';
import { UNITS, LESSONS } from '../data/lessons.js';
import { setLessonIndex } from '../badges.js';

setLessonIndex(LESSONS);

export function render(root) {
  const s = store.get();
  const firstOpen = LESSONS.find(l => !s.lessons[l.id]);
  root.innerHTML = `
    <h1>🗺️ Leerpad</h1>
    <p class="muted">Van de basis tot echt meepraten aan de familietafel. Je mag elke les openen, maar de volgorde helpt.</p>
    ${UNITS.map(u => {
      const ls = LESSONS.filter(l => l.unit === u.id);
      const done = ls.filter(l => s.lessons[l.id]).length;
      return `
      <div class="unit-head"><span class="pill ${u.cls}">${u.id}</span><h2>${esc(u.name.split('—')[1].trim())}</h2><span class="spacer"></span><span class="small muted">${done}/${ls.length}</span></div>
      <p class="muted small" style="margin-top:-4px">${esc(u.desc)}</p>
      ${ls.map(l => {
        const p = s.lessons[l.id];
        const stars = p ? '★'.repeat(p.stars) + '☆'.repeat(3 - p.stars) : '';
        const isNext = firstOpen && firstOpen.id === l.id;
        return `<a class="lesson-item ${p ? 'done' : ''}" href="#/les/${l.id}" ${isNext ? 'style="border-color:var(--blue);border-width:2px"' : ''}>
          <span class="le">${l.emoji}</span>
          <span class="lt"><b>${esc(l.title)}</b><span>${esc(l.sub)}</span></span>
          ${p ? `<span class="stars">${stars}</span>` : isNext ? '<span class="pill a2">Volgende</span>' : ''}
        </a>`;
      }).join('')}`;
    }).join('')}
  `;
}
