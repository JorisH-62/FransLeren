import * as store from '../store.js';
import { esc, shuffle, sound, confetti, $ } from '../util.js';
import { IDIOMS } from '../data/idioms.js';
import { runExercises } from '../exercise.js';
import * as srs from '../srs.js';

export function render(root) {
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>🤪 Uitdrukkingen</h1>
    <p class="muted">Fransen zitten vol beeldspraak, vaak over eten en dieren. Gooi er eens eentje in tijdens het familiediner: gegarandeerd gelach!</p>
    <button class="btn block yellow" id="quiz">🎯 Raad de betekenis (quiz)</button>
    <div style="margin-top:14px">
    ${IDIOMS.map((it, i) => `
      <div class="card idiom">
        <div class="row"><span style="font-size:1.8rem">${it.e}</span><span class="fr" style="flex:1">${esc(it.fr)}</span><button class="iconbtn" data-say="${esc(it.fr)}">🔊</button></div>
        <div class="lit" style="margin-top:4px">Letterlijk: <i>${esc(it.lit)}</i></div>
        <div class="mean">= ${esc(it.nl)}</div>
        <div class="small" style="margin-top:6px"><span data-say="${esc(it.ex)}" style="cursor:pointer">🔊 <i>${esc(it.ex)}</i></span></div>
        <button class="btn small ghost" data-add="${i}" style="margin-top:8px">${srs.hasCard(it.fr) ? '✅ In flashcards' : '➕ Flashcard'}</button>
      </div>`).join('')}
    </div>`;
  root.onclick = e => {
    const b = e.target.closest('[data-add]');
    if (!b) return;
    const it = IDIOMS[+b.dataset.add];
    srs.addCard(it.fr, it.nl, 'uitdrukkingen');
    b.textContent = '✅ In flashcards';
  };
  $('#quiz', root).onclick = () => quiz(root);
}

function quiz(root) {
  const picked = shuffle(IDIOMS).slice(0, 8);
  const ex = picked.map(it => ({
    type: 'mc',
    q: `${it.e} Wat betekent <b>« ${esc(it.fr)} »</b>?<div class="small muted" style="font-weight:600">Letterlijk: ${esc(it.lit)}</div>`,
    options: [it.nl, ...shuffle(IDIOMS.filter(x => x !== it)).slice(0, 3).map(x => x.nl)],
    noSay: true,
    explain: `<i>${esc(it.ex)}</i>`,
  }));
  runExercises(root, ex, {
    onQuit: () => render(root),
    onFinish: ({ right, total }) => {
      const xp = right * 3;
      store.addXp(xp);
      sound('win');
      if (right / total > 0.7) confetti();
      root.innerHTML = `<div class="result"><div class="big">🤪</div><h1>${right}/${total} goed!</h1><p class="muted"><b>+${xp} XP</b></p>
        <div class="stack" style="margin-top:20px"><button class="btn block green" id="again">🔁 Nog een keer</button><a class="btn block ghost" href="#/uitdrukkingen">Alle uitdrukkingen</a></div></div>`;
      $('#again', root).onclick = () => quiz(root);
    },
  });
}
