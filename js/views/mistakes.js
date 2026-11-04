import * as store from '../store.js';
import { shuffle, sound, confetti, $ } from '../util.js';
import { runExercises } from '../exercise.js';

export function render(root) {
  const list = store.mistakes();
  if (!list.length) {
    root.innerHTML = `<a href="#/" class="small">‹ Start</a>
      <div class="card center" style="margin-top:14px"><div style="font-size:3rem">✨</div>
      <h2>Geen fouten om te herhalen!</h2><p class="muted">Alles wat je fout doet in lessen en quizzen komt hier terug, tot je het in één keer goed hebt.</p>
      <a class="btn" href="#/">Naar start</a></div>`;
    return;
  }
  const batch = shuffle(list.slice(-30)).slice(0, 12);
  runExercises(root, batch, {
    onQuit: () => { location.hash = '#/'; },
    onFinish: ({ right, total }) => {
      const xp = right * 4;
      store.addXp(xp);
      sound('win');
      if (right === total) confetti();
      const left = store.mistakes().length;
      root.innerHTML = `<div class="result"><div class="big">🎯</div><h1>${right}/${total} nu wél goed!</h1>
        <p class="muted"><b>+${xp} XP</b> · nog ${left} ${left === 1 ? 'fout' : 'fouten'} op je lijstje</p>
        <div class="stack" style="margin-top:20px">
          ${left ? '<button class="btn block green" id="again">🔁 Nog een ronde</button>' : '<p>🏆 Je foutenlijst is leeg!</p>'}
          <a class="btn block ghost" href="#/">Naar start</a></div></div>`;
      const a = $('#again', root);
      if (a) a.onclick = () => render(root);
    },
  });
}
