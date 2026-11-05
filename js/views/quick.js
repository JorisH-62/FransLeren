// ⚡ 5-minutenmodus: een korte, gerichte sessie
import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, shuffle, sound, confetti, $ } from '../util.js';
import { LESSONS, byId } from '../data/lessons.js';
import { runExercises } from '../exercise.js';
import { currentWeek } from './plan.js';

export function render(root) {
  const s = store.get();
  const ex = [];
  // 1. Kaarten die aan de beurt zijn (of willekeurige) als snelle vraag
  const due = srs.dueCards();
  const cards = (due.length ? due : shuffle(srs.allCards())).slice(0, 4);
  const all = srs.allCards();
  cards.forEach(c => {
    const others = [...new Set(shuffle(all.filter(x => x.fr !== c.fr && x.nl !== c.nl)).map(x => x.nl))].slice(0, 3);
    if (others.length >= 2) ex.push({ type: 'mc', q: `Wat betekent <b>${esc(c.fr)}</b>?`, options: [c.nl, ...others], noSay: true, _card: c.fr });
  });
  // 2. Oefeningen uit de lessen van deze planweek (of de laatst gedane lessen)
  const wk = s.plan?.start ? currentWeek() : null;
  let lessons = wk ? wk.tasks.filter(t => t.type === 'les').map(t => byId(t.id)).filter(Boolean) : [];
  const doneL = LESSONS.filter(l => s.lessons[l.id]);
  if (!lessons.length) lessons = doneL.slice(-2);
  if (!lessons.length) lessons = LESSONS.slice(0, 1);
  const pool = shuffle(lessons.flatMap(l => l.exercises.filter(e => !['speak', 'match'].includes(e.type))));
  ex.push(...pool.slice(0, 8 - ex.length));

  runExercises(root, shuffle(ex), {
    onQuit: () => { location.hash = '#/'; },
    onFinish: ({ right, total }) => {
      const xp = right * 3 + 5;
      store.addXp(xp);
      sound('win');
      if (right / total >= 0.75) confetti(40);
      root.innerHTML = `<div class="result"><div class="big">⚡</div><h1>${right}/${total} goed!</h1>
        <p class="muted">Vijf minuten goed besteed · <b>+${xp} XP</b></p>
        <div class="stack" style="margin-top:20px"><button class="btn block green" id="again">⚡ Nog 5 minuten</button><a class="btn block ghost" href="#/">Naar start</a></div></div>`;
      $('#again', root).onclick = () => render(root);
    },
  });
}
