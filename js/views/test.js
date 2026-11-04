// Eindtoets per niveau
import * as store from '../store.js';
import { esc, shuffle, sound, confetti, $ } from '../util.js';
import { LESSONS, UNITS } from '../data/lessons.js';
import { runExercises } from '../exercise.js';

export function render(root, [unit]) {
  const u = UNITS.find(x => x.id === unit);
  const best = store.get().tests?.[unit];
  root.innerHTML = `
    <a href="#/leerpad" class="small">‹ Leerpad</a>
    <div class="card center" style="margin-top:14px">
      <div style="font-size:3rem">📜</div>
      <h1>Eindtoets ${esc(unit)}</h1>
      <p class="muted">${esc(u.desc)}</p>
      <p>20 vragen uit alle ${esc(unit)}-lessen. Haal je <b>80%</b> of meer, dan verdien je het diploma ${esc(unit)}! 🎓</p>
      ${best != null ? `<p class="small">Je beste score tot nu toe: <b>${best}%</b></p>` : ''}
      <button class="btn block green" id="go">Start de toets</button>
    </div>`;
  $('#go', root).onclick = () => start(root, unit);
}

function start(root, unit) {
  const pool = LESSONS.filter(l => l.unit === unit).flatMap(l => l.exercises.filter(e => !['speak', 'match'].includes(e.type)));
  const ex = shuffle(pool).slice(0, 20).map(e => ({ ...e, explain: e.explain }));
  runExercises(root, ex, {
    onQuit: () => render(root, [unit]),
    onFinish: ({ right, total, pct }) => {
      const score = Math.round(pct * 100);
      const s = store.get();
      s.tests = s.tests || {};
      const prev = s.tests[unit] || 0;
      s.tests[unit] = Math.max(prev, score);
      store.addXp(right * 5);
      const passed = score >= 80;
      sound('win');
      if (passed) confetti(120);
      root.innerHTML = `<div class="result">
        <div class="big">${passed ? '🎓' : '📚'}</div>
        <h1>${score}%</h1>
        <p>${passed ? `Gefeliciteerd! Je hebt het <b>diploma ${esc(unit)}</b> gehaald! 🎉` : 'Bijna! Herhaal de lessen waar je twijfelt en probeer het opnieuw.'}</p>
        <p class="muted">${right}/${total} goed · <b>+${right * 5} XP</b></p>
        <div class="stack" style="margin-top:20px">
          <button class="btn block ${passed ? 'ghost' : 'green'}" id="again">🔁 Nog een keer</button>
          ${store.mistakes().length ? '<a class="btn block yellow" href="#/fouten">🎯 Oefen je fouten</a>' : ''}
          <a class="btn block ghost" href="#/leerpad">Naar het leerpad</a>
        </div></div>`;
      $('#again', root).onclick = () => start(root, unit);
    },
  });
}
