// Welkom + plaatsingstest
import * as store from '../store.js';
import { esc, shuffle, sound, confetti, $, $$ } from '../util.js';
import { LESSONS, UNITS } from '../data/lessons.js';
import { runExercises } from '../exercise.js';

export function render(root) {
  const s = store.get();
  root.innerHTML = `
    <div class="hero" style="margin-top:6px">
      <h1>Bienvenue ! 🎉</h1>
      <p>Ik ben <b>Gaston</b>, je slakkige Franse leraar. Samen gaan we ervoor zorgen dat je straks gewoon meepraat met de familie.</p>
      <div class="snail-big" aria-hidden="true">🐌</div>
      <div style="height:40px"></div>
    </div>
    <div class="card stack">
      <label><b>Hoe heet je?</b><br><input class="answer" id="name" value="${esc(s.settings.name || '')}" placeholder="Je voornaam" style="margin-top:4px"></label>
      <div><b>Franse vormen voor jou</b>
        <div class="segmented" id="gender" style="margin-top:6px">
          <button data-k="m" class="${s.settings.gender !== 'f' ? 'on' : ''}">👨 Je suis content</button>
          <button data-k="f" class="${s.settings.gender === 'f' ? 'on' : ''}">👩 Je suis contente</button>
        </div></div>
      <div><b>Hoeveel tijd per dag?</b>
        <div class="segmented" id="goal" style="margin-top:6px">
          ${[[20, '5 min'], [50, '10 min'], [100, '20 min'], [200, '40 min']].map(([v, l]) => `<button data-k="${v}" class="${s.dailyGoal === v ? 'on' : ''}">${l}</button>`).join('')}
        </div></div>
    </div>
    <h2>Wat kun je al?</h2>
    <div class="stack">
      <button class="card tile" data-start="A1" style="text-align:left;border:1px solid var(--line);width:100%;cursor:pointer;font:inherit"><b>🌱 Bijna niets</b><span class="muted">Ik begin bij het begin (A1).</span></button>
      <button class="card tile" data-start="test" style="text-align:left;border:1px solid var(--line);width:100%;cursor:pointer;font:inherit"><b>🧭 Ik ken de basis</b><span class="muted">Doe een korte plaatsingstest (15 vragen, ±4 min) om te zien waar je moet beginnen.</span></button>
    </div>
  `;
  const seg = (id, fn) => $$(`#${id} button`, root).forEach(b => b.onclick = () => {
    $$(`#${id} button`, root).forEach(x => x.classList.remove('on')); b.classList.add('on'); fn(b.dataset.k);
  });
  seg('gender', v => store.setting('gender', v));
  seg('goal', v => { store.get().dailyGoal = +v; store.save(); });
  $('#name', root).onchange = e => store.setting('name', e.target.value.trim());
  $$('[data-start]', root).forEach(b => b.onclick = () => {
    store.setting('name', $('#name', root).value.trim());
    if (b.dataset.start === 'test') return placement(root);
    finish('A1');
  });
}

function finish(unit) {
  store.setting('startUnit', unit);
  store.get().onboarded = true;
  store.save();
  location.hash = '#/';
}

function placement(root) {
  // 5 meerkeuzevragen per niveau, uit de lessen
  const ex = [];
  for (const u of UNITS) {
    const pool = shuffle(LESSONS.filter(l => l.unit === u.id).flatMap(l => l.exercises.filter(e => e.type === 'mc')));
    ex.push(...pool.slice(0, 5));
  }
  const wrapped = ex.map(e => ({ ...e, explain: undefined }));
  runExercises(root, wrapped, {
    onQuit: () => render(root),
    onFinish: ({ right }) => {
      // Schatting op basis van totaalscore
      const score = right / wrapped.length;
      let unit = 'A1';
      if (score >= 0.85) unit = 'B1';
      else if (score >= 0.55) unit = 'A2';
      sound('win'); confetti();
      const u = UNITS.find(x => x.id === unit);
      root.innerHTML = `<div class="result">
        <div class="big">🧭</div>
        <h1>${right} van de ${wrapped.length} goed!</h1>
        <p>Advies: begin bij <span class="pill ${u.cls}">${u.id}</span> <b>${esc(u.name.split('—')[1])}</b></p>
        <p class="small muted">Je kunt altijd elke les openen. De lessen van eerdere niveaus blijven handig om even te herhalen.</p>
        <div class="stack" style="margin-top:20px">
          <button class="btn block green" data-u="${unit}">Begin bij ${unit} 🚀</button>
          ${unit !== 'A1' ? '<button class="btn block ghost" data-u="A1">Toch liever bij A1 beginnen</button>' : ''}
        </div></div>`;
      $$('[data-u]', root).forEach(b => b.onclick = () => finish(b.dataset.u));
    },
  });
}
