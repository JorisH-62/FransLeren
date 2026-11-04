// Luistertraining: zinnen uit gesprekken en het zinnenboek, op instelbaar tempo
import * as store from '../store.js';
import { esc, shuffle, sound, confetti, $, $$ } from '../util.js';
import { DIALOGUES } from '../data/dialogues.js';
import { PHRASES } from '../data/phrases.js';
import { runExercises } from '../exercise.js';

const SPEEDS = [
  { k: 'slow', label: '🐌 Rustig', rate: 0.75 },
  { k: 'normal', label: '🚶 Normaal', rate: 0.95 },
  { k: 'fast', label: '🏃 Zoals de familie', rate: 1.15 },
];

function pool(level) {
  const lv = { A1: ['A1'], A2: ['A1', 'A2'], B1: ['A1', 'A2', 'B1'] }[level];
  const out = [];
  DIALOGUES.filter(d => lv.includes(d.level)).forEach(d => d.steps.forEach(s => {
    if (s.npc && s.nl && !s.npc.startsWith('(')) out.push([s.npc, s.nl]);
    if (s.choose) s.choose.forEach(c => { if (c.re && c.reNl) out.push([c.re, c.reNl]); });
  }));
  PHRASES.forEach(c => c.items.forEach(([fr, nl]) => { if (!fr.includes('…')) out.push([fr, nl]); }));
  return out;
}

export function render(root) {
  const sp = store.setting('listenSpeed') || 'normal';
  const lv = store.setting('listenLevel') || 'A1';
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>🎧 Luisteren</h1>
    <p class="muted">Fransen praten snel! Train je oren met echte zinnen uit familiegesprekken. Begin rustig en zet het tempo steeds hoger.</p>
    <div class="card stack">
      <b>Tempo</b>
      <div class="segmented" id="speed">${SPEEDS.map(s => `<button data-k="${s.k}" class="${s.k === sp ? 'on' : ''}">${s.label}</button>`).join('')}</div>
      <b>Niveau</b>
      <div class="segmented" id="level">${['A1', 'A2', 'B1'].map(l => `<button data-k="${l}" class="${l === lv ? 'on' : ''}">${l}</button>`).join('')}</div>
      <button class="btn block green" id="go">🎧 Start (10 zinnen)</button>
    </div>
    <div class="card small muted">💡 Tip: luister eerst zonder naar de antwoorden te kijken. Probeer de zin in je hoofd na te zeggen. Pas daarna kies je.</div>`;
  const seg = (id, key) => $$(`#${id} button`, root).forEach(b => b.onclick = () => {
    $$(`#${id} button`, root).forEach(x => x.classList.remove('on')); b.classList.add('on'); store.setting(key, b.dataset.k);
  });
  seg('speed', 'listenSpeed'); seg('level', 'listenLevel');
  $('#go', root).onclick = () => start(root);
}

function start(root) {
  const rate = SPEEDS.find(s => s.k === (store.setting('listenSpeed') || 'normal')).rate;
  const all = pool(store.setting('listenLevel') || 'A1');
  const picked = shuffle(all).slice(0, 10);
  const ex = picked.map((p, i) => {
    const words = p[0].split(/\s+/).length;
    if (i % 3 === 2 && words <= 6) return { type: 'dictee', fr: p[0], nl: p[1], rate };
    return { type: 'listen', fr: p[0], rate, options: [p[1], ...shuffle(all.filter(x => x !== p)).slice(0, 3).map(x => x[1])] };
  });
  runExercises(root, ex, {
    onQuit: () => render(root),
    onFinish: ({ right, total }) => {
      const xp = right * 3 + 5;
      store.addXp(xp);
      sound('win');
      if (right / total >= 0.8) confetti();
      root.innerHTML = `<div class="result"><div class="big">🎧</div><h1>${right}/${total} goed verstaan!</h1><p class="muted"><b>+${xp} XP</b></p>
        ${right / total >= 0.8 && store.setting('listenSpeed') !== 'fast' ? '<p>💪 Je bent er klaar voor: zet het tempo een stapje hoger!</p>' : ''}
        <div class="stack" style="margin-top:20px"><button class="btn block green" id="again">🔁 Nog 10 zinnen</button><button class="btn block ghost" id="back">Tempo/niveau aanpassen</button></div></div>`;
      $('#again', root).onclick = () => start(root);
      $('#back', root).onclick = () => render(root);
    },
  });
}
