import * as store from '../store.js';
import { esc, shuffle, pick, sound, confetti, $, $$ } from '../util.js';
import { VERBS, TENSES, TENSE_SHORT, conjugate, withPronoun, PRON_LABEL, answersFor } from '../data/verbs.js';
import { runExercises } from '../exercise.js';

export function render(root, params, opts) {
  if (opts.verb) return verbPage(root, decodeURIComponent(params[0]));
  if (opts.train) return trainer(root);
  return list(root);
}

function list(root) {
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>🔤 Werkwoorden</h1>
    <div class="card">
      <b>🏋️ Trainer</b>
      <p class="small muted">Kies welke tijden je wilt oefenen. Je krijgt 12 willekeurige vervoegingen.</p>
      <div class="stack" id="tensepick">
        ${Object.entries(TENSES).map(([k, v]) => `<label class="row" style="gap:8px"><input type="checkbox" value="${k}" ${(store.setting('verbTenses') || ['present']).includes(k) ? 'checked' : ''}> ${esc(v)}</label>`).join('')}
        <label class="row" style="gap:8px;margin-top:6px"><input type="checkbox" id="toponly" ${store.setting('verbTop') !== false ? 'checked' : ''}> Alleen de belangrijkste werkwoorden ⭐</label>
      </div>
      <button class="btn block green" id="go" style="margin-top:12px">Start de trainer</button>
      <p class="small muted" style="margin-top:8px">Totaal goed: ${store.get().verbs.right || 0}</p>
    </div>
    <input class="answer" id="search" placeholder="🔍 Zoek een werkwoord (Frans of Nederlands)" style="margin-bottom:12px">
    <div id="vlist"></div>
  `;
  const draw = q => {
    const ql = (q || '').toLowerCase();
    $('#vlist', root).innerHTML = VERBS.filter(v => !ql || v.inf.includes(ql) || v.nl.toLowerCase().includes(ql)).map(v =>
      `<a class="lesson-item" href="#/werkwoorden/${encodeURIComponent(v.inf)}" style="padding:10px 14px">
        <span class="lt"><b>${esc(v.inf)} ${v.top ? '⭐' : ''}</b><span>${esc(v.nl)}${v.group === 'irr' ? ' · onregelmatig' : ` · regelmatig -${v.group}`}</span></span><span>›</span></a>`).join('');
  };
  draw();
  $('#search', root).oninput = e => draw(e.target.value);
  $('#go', root).onclick = () => {
    const tenses = $$('#tensepick input[value]:checked', root).map(i => i.value);
    if (!tenses.length) return alert('Kies minstens één tijd.');
    store.setting('verbTenses', tenses);
    store.setting('verbTop', $('#toponly', root).checked);
    location.hash = '#/werkwoorden-trainer';
  };
}

function verbPage(root, inf) {
  const v = VERBS.find(x => x.inf === inf);
  if (!v) { location.hash = '#/werkwoorden'; return; }
  root.innerHTML = `
    <a href="#/werkwoorden" class="small">‹ Werkwoorden</a>
    <h1>${esc(v.inf)} <span class="muted" style="font-size:1rem">— ${esc(v.nl)}</span></h1>
    <p class="small muted">${v.group === 'irr' ? 'Onregelmatig' : 'Regelmatig'} · passé composé met <b>${v.aux}</b>. Tik op een vorm om hem te horen.</p>
    ${Object.entries(TENSES).map(([k, label]) => {
      const forms = conjugate(v, k);
      return `<div class="card tight"><h3 style="margin-top:0">${esc(label)}</h3>
        <table class="conj-table">${forms.map((f, i) => {
          const full = withPronoun(i, f, k);
          return `<tr><td>${PRON_LABEL[i]}</td><td data-say="${esc(full.replace(/\(e\)|\(s\)/g, ''))}" style="cursor:pointer">${esc(full)}</td></tr>`;
        }).join('')}</table></div>`;
    }).join('')}
  `;
}

function trainer(root) {
  const tenses = store.setting('verbTenses') || ['present'];
  const top = store.setting('verbTop') !== false;
  const pool = VERBS.filter(v => !top || v.top);
  const exercises = [];
  for (let n = 0; n < 12; n++) {
    const v = pick(pool), t = pick(tenses), i = Math.floor(Math.random() * 6);
    const form = conjugate(v, t)[i];
    const full = withPronoun(i, form, t);
    const pron = full.slice(0, full.length - form.length).trim();
    exercises.push({
      type: 'fill',
      q: `<b>${esc(v.inf)}</b> (${esc(v.nl)}) — <i>${TENSE_SHORT[t]}</i>`,
      s: `${pron}${pron.endsWith("'") ? '' : ' '}___`,
      answer: answersFor(form),
      explain: `${esc(full)}`,
    });
  }
  runExercises(root, exercises, {
    onQuit: () => { location.hash = '#/werkwoorden'; },
    onFinish: ({ right, total }) => {
      const s = store.get();
      s.verbs.right = (s.verbs.right || 0) + right;
      s.verbs.wrong = (s.verbs.wrong || 0) + (total - right);
      const xp = right * 3;
      store.addXp(xp);
      sound('win');
      if (right / total > 0.8) confetti();
      root.innerHTML = `<div class="result">
        <div class="big">🔤</div>
        <h1>${right}/${total} goed!</h1>
        <p class="muted"><b>+${xp} XP</b></p>
        <div class="stack" style="margin-top:20px">
          <button class="btn block green" id="again">🔁 Nog een ronde</button>
          <a class="btn block ghost" href="#/werkwoorden">Terug</a>
        </div></div>`;
      $('#again', root).onclick = () => trainer(root);
    },
  });
}
