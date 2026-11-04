// Snelle mix: een beetje van alles in 5 minuten
import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, shuffle, pick, sound, confetti, $ } from '../util.js';
import { LESSONS } from '../data/lessons.js';
import { DECKS } from '../data/vocab.js';
import { IDIOMS } from '../data/idioms.js';
import { VERBS, conjugate, withPronoun, answersFor, TENSE_SHORT } from '../data/verbs.js';
import { runExercises } from '../exercise.js';
import { quizFromWords } from './cards.js';

export function render(root) {
  const s = store.get();
  const ex = [];

  // 1. Grammatica uit lessen die je al gedaan hebt (of de eerste lessen)
  let done = LESSONS.filter(l => s.lessons[l.id]);
  if (!done.length) done = LESSONS.slice(0, 2);
  const gram = shuffle(done.flatMap(l => l.exercises.filter(e => e.type !== 'speak' && e.type !== 'match'))).slice(0, 5);
  ex.push(...gram);

  // 2. Woorden: uit je flashcards (bij voorkeur), anders basiswoorden
  const cards = srs.allCards();
  const words = cards.length >= 8 ? cards.map(c => [c.fr, c.nl]) : DECKS[0].words;
  ex.push(...quizFromWords(words, 4).filter(e => e.type !== 'match'));

  // 3. Werkwoorden
  const tenses = done.some(l => l.unit !== 'A1') ? ['present', 'pc', 'imparfait'] : ['present'];
  for (let n = 0; n < 2; n++) {
    const v = pick(VERBS.filter(x => x.top)), t = pick(tenses), i = Math.floor(Math.random() * 6);
    const form = conjugate(v, t)[i];
    const full = withPronoun(i, form, t);
    const pron = full.slice(0, full.length - form.length).trim();
    ex.push({ type: 'fill', q: `<b>${esc(v.inf)}</b> — <i>${TENSE_SHORT[t]}</i>`, s: `${pron}${pron.endsWith("'") ? '' : ' '}___`, answer: answersFor(form) });
  }

  // 4. Uitdrukking
  const it = pick(IDIOMS);
  ex.push({ type: 'mc', q: `${it.e} Wat betekent <b>« ${esc(it.fr)} »</b>?`, options: [it.nl, ...shuffle(IDIOMS.filter(x => x !== it)).slice(0, 2).map(x => x.nl)], noSay: true });

  runExercises(root, shuffle(ex), {
    onQuit: () => { location.hash = '#/'; },
    onFinish: ({ right, total }) => {
      const xp = right * 4 + 10;
      store.addXp(xp);
      sound('win');
      if (right / total > 0.75) confetti();
      root.innerHTML = `<div class="result"><div class="big">🎲</div><h1>${right}/${total} goed!</h1><p class="muted"><b>+${xp} XP</b></p>
        <div class="stack" style="margin-top:20px"><button class="btn block green" id="again">🎲 Nog een mix</button><a class="btn block ghost" href="#/">Naar start</a></div></div>`;
      $('#again', root).onclick = () => render(root);
    },
  });
}
