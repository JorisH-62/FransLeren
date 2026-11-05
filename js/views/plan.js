// 6-maandenplan
import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, toast, confetti, $, $$ } from '../util.js';
import { PLAN } from '../data/plan.js';
import { DECKS } from '../data/vocab.js';

const LINKS = {
  les: t => `#/les/${t.id}`, woorden: t => `#/woorden/set/${t.id}`, verhaal: t => `#/verhaal/${t.id}`, gesprek: t => `#/gesprek/${t.id}`,
  toets: t => `#/toets/${t.id}`, fouten: () => '#/fouten', kaarten: () => '#/woorden/herhaal', mix: () => '#/mix',
  luisteren: () => '#/luisteren', spreken: () => '#/spreken', familie: () => '#/familie', echt: () => null,
};
const MANUAL = ['mix', 'luisteren', 'spreken', 'familie', 'echt', 'fouten', 'kaarten'];

export function planState() {
  const s = store.get();
  if (!s.plan) s.plan = { start: null, checks: {} };
  if (!s.plan.checks) s.plan.checks = {};
  return s.plan;
}

export function taskDone(week, i) {
  const s = store.get();
  const t = week.tasks[i];
  const p = planState();
  if (p.checks[`${week.n}-${i}`]) return true;
  switch (t.type) {
    case 'les': return !!s.lessons[t.id];
    case 'woorden': { const d = DECKS.find(x => x.id === t.id); return !!d && d.words.every(([fr]) => s.cards[fr]); }
    case 'verhaal': return !!s.stories[t.id]?.read;
    case 'gesprek': return !!s.dialogues[t.id]?.done;
    case 'toets': return (s.tests?.[t.id] || 0) >= 80;
    default: return false;
  }
}

export function weekProgress(week) {
  const done = week.tasks.filter((_, i) => taskDone(week, i)).length;
  return { done, total: week.tasks.length, complete: done === week.tasks.length };
}

export function currentWeek() {
  return PLAN.find(w => !weekProgress(w).complete) || PLAN[PLAN.length - 1];
}

export function calendarWeek() {
  const p = planState();
  if (!p.start) return null;
  const days = Math.floor((Date.now() - new Date(p.start + 'T00:00:00').getTime()) / 86400000);
  return Math.min(26, Math.max(1, Math.floor(days / 7) + 1));
}

function taskRow(week, t, i) {
  const done = taskDone(week, i);
  const href = LINKS[t.type]?.(t);
  const manual = MANUAL.includes(t.type);
  return `<div class="row" style="padding:9px 0;border-bottom:1px dashed var(--line)">
    <span style="font-size:1.25rem;width:28px;text-align:center">${done ? '✅' : t.emoji}</span>
    ${href ? `<a href="${href}" style="flex:1;color:inherit;text-decoration:none;${done ? 'opacity:.55;text-decoration:line-through' : ''}">${esc(t.label)}</a>`
      : `<span style="flex:1;${done ? 'opacity:.55;text-decoration:line-through' : ''}">${esc(t.label)}</span>`}
    ${manual ? `<button class="btn small ${done ? 'ghost' : ''}" data-check="${week.n}-${i}" style="min-height:34px;padding:5px 10px">${done ? 'Ongedaan' : 'Gedaan'}</button>` : href && !done ? '<span class="muted">›</span>' : ''}
  </div>`;
}

export function render(root) {
  const p = planState();
  const cur = currentWeek();
  const cal = calendarWeek();
  const doneWeeks = PLAN.filter(w => weekProgress(w).complete).length;
  if (!p.start) {
    root.innerHTML = `
      <a href="#/" class="small">‹ Start</a>
      <div class="hero" style="margin-top:10px">
        <h1>📅 Jouw 6-maandenplan</h1>
        <p>26 weken, een paar keer per week 5–15 minuten. Aan het eind praat je mee aan de familietafel.</p>
        <div class="snail-big" aria-hidden="true">🐌</div><div style="height:30px"></div>
      </div>
      <div class="card theory">
        <h2 style="margin-top:0">Hoe werkt het?</h2>
        <ul>
          <li>Elke week: <b>2–3 lessen</b>, een <b>woordenset</b>, een <b>verhaal</b> en een <b>gesprek</b>.</li>
          <li>Elke <b>4e week</b> is een herhalingsweek: fouten, kaarten, luisteren, en een eindtoets als je een niveau af hebt.</li>
          <li>Week 25: alle eindtoetsen. Week 26: feestweek, bel de familie in het Frans! 🎉</li>
          <li>Weinig tijd? Gebruik de <b>⚡ 5-minutenmodus</b> op de startpagina.</li>
          <li>Je mag sneller of langzamer: het plan schuift gewoon mee.</li>
        </ul>
      </div>
      <button class="btn block green" id="start">🚀 Start mijn plan (vandaag = week 1)</button>
      ${overview(cur)}`;
    $('#start', root).onclick = () => { p.start = store.today(); store.save(); toast('Je plan is gestart! Bon courage ! 💪'); render(root); window.scrollTo(0, 0); };
    bind(root);
    return;
  }
  const prog = weekProgress(cur);
  let pace = '';
  if (cal) {
    if (cur.n < cal) pace = `<p class="small" style="margin:6px 0 0">🐌 Volgens de kalender zit je in week ${cal}. Geen stress: elke week die je afmaakt telt!</p>`;
    else if (cur.n > cal) pace = `<p class="small" style="margin:6px 0 0">🚀 Je loopt voor op schema (kalenderweek ${cal}). Chapeau !</p>`;
  }
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>📅 6-maandenplan</h1>
    <div class="card">
      <div class="row"><b>${doneWeeks} van de 26 weken af</b><span class="spacer"></span><span class="small muted">gestart ${esc(p.start)}</span></div>
      <div class="goalbar" style="margin-top:8px"><div style="width:${(doneWeeks / 26) * 100}%"></div></div>
      ${pace}
    </div>
    <div class="card" style="border:2px solid var(--blue)">
      <div class="row"><span style="font-size:1.8rem">${cur.emoji}</span><div style="flex:1"><div class="small muted">Week ${cur.n} · ${cur.level}${cur.kind === 'herhaling' ? ' · herhaling' : ''}</div><b>${esc(cur.theme)}</b></div><span class="small muted">${prog.done}/${prog.total}</span></div>
      <div class="meter"><div style="width:${(prog.done / prog.total) * 100}%"></div></div>
      ${cur.tasks.map((t, i) => taskRow(cur, t, i)).join('')}
      ${cur.tasks.some(t => t.type === 'echt') ? '<p class="small muted">💡 Voor taken zonder link: tik op "Gedaan" als je het gedaan hebt.</p>' : ''}
    </div>
    ${overview(cur)}`;
  bind(root);
}

function overview(cur) {
  return `<h2>Alle weken</h2>
    ${PLAN.map(w => {
      const pr = weekProgress(w);
      return `<details class="card tight" ${w === cur ? '' : ''} style="margin-bottom:8px">
        <summary class="row" style="cursor:pointer;list-style:none">
          <span style="width:30px;text-align:center">${pr.complete ? '✅' : w.emoji}</span>
          <span style="flex:1"><b>Week ${w.n}</b> <span class="pill ${w.level.toLowerCase()}">${w.level}</span><br><span class="small muted">${esc(w.theme)}</span></span>
          <span class="small muted">${pr.done}/${pr.total}</span>
        </summary>
        <div style="margin-top:6px">${w.tasks.map((t, i) => taskRow(w, t, i)).join('')}</div>
      </details>`;
    }).join('')}`;
}

function bind(root) {
  root.onclick = e => {
    const b = e.target.closest('[data-check]');
    if (!b) return;
    e.preventDefault();
    const p = planState();
    const k = b.dataset.check;
    const was = weekProgress(PLAN.find(w => w.n === +k.split('-')[0])).complete;
    if (p.checks[k]) delete p.checks[k]; else { p.checks[k] = Date.now(); store.addXp(5); }
    store.save();
    const w = PLAN.find(x => x.n === +k.split('-')[0]);
    if (!was && weekProgress(w).complete) { confetti(80); toast(`🎉 Week ${w.n} afgerond!`); }
    render(root);
  };
}
