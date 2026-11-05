// Statistieken: voortgang over tijd en per niveau
import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc } from '../util.js';
import { LESSONS, UNITS } from '../data/lessons.js';
import { STORIES } from '../data/stories.js';
import { DIALOGUES } from '../data/dialogues.js';

function bars(rows, color = 'var(--blue)') {
  const max = Math.max(10, ...rows.map(r => r.v));
  return `<div style="display:flex;align-items:flex-end;gap:4px;height:120px;margin-top:10px">
    ${rows.map(r => `<div title="${esc(r.title || '')}: ${r.v} XP" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:3px">
      <span style="font-size:.6rem" class="muted">${r.v || ''}</span>
      <div style="width:100%;max-width:26px;height:${Math.max(3, (r.v / max) * 90)}px;background:${r.v ? color : 'var(--line)'};border-radius:5px"></div>
      <span style="font-size:.62rem" class="muted">${esc(r.label)}</span></div>`).join('')}
  </div>`;
}

const key = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function render(root) {
  const s = store.get();
  const h = s.history || {};
  // XP per week (laatste 12 weken)
  const weeks = [];
  for (let w = 11; w >= 0; w--) {
    let v = 0;
    for (let d = 0; d < 7; d++) { const dt = new Date(); dt.setDate(dt.getDate() - (w * 7 + d)); v += h[key(dt)] || 0; }
    weeks.push({ v, label: w === 0 ? 'nu' : `-${w}`, title: w === 0 ? 'deze week' : `${w} weken geleden` });
  }
  // XP per maand (laatste 6 maanden)
  const mnames = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  const months = [];
  for (let m = 5; m >= 0; m--) {
    const dt = new Date(); dt.setDate(1); dt.setMonth(dt.getMonth() - m);
    const prefix = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}`;
    const v = Object.entries(h).filter(([k]) => k.startsWith(prefix)).reduce((a, [, x]) => a + x, 0);
    months.push({ v, label: mnames[dt.getMonth()], title: prefix });
  }
  const activeDays = Object.values(h).filter(x => x > 0).length;
  const totalXp = Object.values(h).reduce((a, x) => a + x, 0);
  // per niveau
  const perUnit = UNITS.map(u => {
    const ls = LESSONS.filter(l => l.unit === u.id);
    const st = STORIES.filter(x => x.level === u.id && x.kind !== 'song');
    const dl = DIALOGUES.filter(x => x.level === u.id);
    return { u, l: [ls.filter(l => s.lessons[l.id]).length, ls.length], s: [st.filter(x => s.stories[x.id]?.read).length, st.length], d: [dl.filter(x => s.dialogues[x.id]?.done).length, dl.length], test: s.tests?.[u.id] };
  });
  // sterk / zwak o.b.v. beste score per les
  const done = LESSONS.filter(l => s.lessons[l.id]).map(l => ({ l, best: s.lessons[l.id].best ?? (s.lessons[l.id].stars * 33) }));
  const strong = [...done].sort((a, b) => b.best - a.best).filter(x => x.best >= 80).slice(0, 3);
  const weak = [...done].sort((a, b) => a.best - b.best).filter(x => x.best < 80 && !strong.includes(x)).slice(0, 3);
  const cs = srs.stats();
  const pct = ([a, b]) => b ? Math.round((a / b) * 100) : 0;

  root.innerHTML = `
    <a href="#/profiel" class="small">‹ Profiel</a>
    <h1>📊 Statistieken</h1>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
      <div class="card tight center"><b style="font-size:1.4rem">${totalXp}</b><div class="small muted">XP totaal</div></div>
      <div class="card tight center"><b style="font-size:1.4rem">${activeDays}</b><div class="small muted">dagen geleerd</div></div>
      <div class="card tight center"><b style="font-size:1.4rem">${cs.learned}</b><div class="small muted">woorden gekend</div></div>
    </div>
    <div class="card"><b>📈 XP per week</b><span class="small muted"> (laatste 12 weken)</span>${bars(weeks)}</div>
    <div class="card"><b>🗓️ XP per maand</b>${bars(months, 'var(--purple)')}</div>
    <h2>Per niveau</h2>
    ${perUnit.map(x => `<div class="card">
      <div class="row"><span class="pill ${x.u.cls}">${x.u.id}</span><b>${esc(x.u.name.split('—')[1].trim())}</b><span class="spacer"></span>${x.test != null ? `<span class="pill ${x.test >= 80 ? 'done' : ''}">toets ${x.test}%</span>` : ''}</div>
      ${[['Lessen', x.l], ['Verhalen', x.s], ['Gesprekken', x.d]].map(([n, v]) => `
        <div class="row small" style="margin-top:8px"><span style="width:90px">${n}</span><div class="meter" style="flex:1;margin:0"><div style="width:${pct(v)}%"></div></div><span class="muted" style="width:46px;text-align:right">${v[0]}/${v[1]}</span></div>`).join('')}
    </div>`).join('')}
    <h2>Sterk & zwak</h2>
    <div class="card">
      ${done.length ? `
        <b>💪 Je sterkste lessen</b>
        ${strong.length ? '' : '<p class="small muted">Nog geen lessen met 80% of meer.</p>'}${strong.map(x => `<div class="row small" style="padding:4px 0"><span>${x.l.emoji}</span><span style="flex:1">${esc(x.l.title)}</span><b>${x.best}%</b></div>`).join('')}
        <b style="display:block;margin-top:12px">🎯 Hier valt winst te halen</b>
        ${weak.length ? weak.map(x => `<a class="row small" href="#/les/${x.l.id}" style="padding:4px 0;color:inherit;text-decoration:none"><span>${x.l.emoji}</span><span style="flex:1">${esc(x.l.title)}</span><b>${x.best}%</b> ›</a>`).join('') : '<p class="small muted">Alles 80% of hoger. Knap!</p>'}
        <p class="small muted">Je hebt nu ${store.mistakes().length} fouten op je lijstje. <a href="#/fouten">Oefen ze</a>.</p>`
        : '<p class="muted">Doe eerst een paar lessen, dan zie je hier waar je sterk en zwak in bent.</p>'}
    </div>`;
}
