import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, toast, confetti, sound, shuffle } from '../util.js';
import { LESSONS, byId } from '../data/lessons.js';
import { runExercises } from '../exercise.js';

export function render(root, [id], opts) {
  const lesson = byId(id);
  if (!lesson) { location.hash = '#/leerpad'; return; }
  if (opts.practice) return practice(root, lesson);
  const s = store.get();
  const p = s.lessons[id];
  const idx = LESSONS.indexOf(lesson);
  const prev = LESSONS[idx - 1], next = LESSONS[idx + 1];

  root.innerHTML = `
    <a href="#/leerpad" class="small">‹ Leerpad</a>
    <div class="row" style="margin:10px 0 4px">
      <span style="font-size:2.4rem">${lesson.emoji}</span>
      <div style="flex:1"><span class="pill ${lesson.unit.toLowerCase()}">${lesson.unit}</span> ${p ? `<span class="stars">${'★'.repeat(p.stars)}${'☆'.repeat(3 - p.stars)}</span>` : ''}
        <h1 style="margin:4px 0 0">${esc(lesson.title)}</h1></div>
    </div>
    <div class="card theory">${lesson.theory}</div>
    ${lesson.vocab?.length ? `
    <div class="card">
      <h2 style="margin-top:0">📝 Woorden uit deze les</h2>
      <div class="table-wrap"><table class="conj-table">${lesson.vocab.map(([fr, nl]) => `<tr><td><span class="fr-inline" data-say="${esc(fr)}" style="cursor:pointer">${esc(fr)}</span></td><td>${esc(nl)}</td></tr>`).join('')}</table></div>
      <button class="btn ghost block" id="addvocab" style="margin-top:12px">➕ Zet in mijn flashcards</button>
    </div>` : ''}
    <div class="check-area" style="position:static">
      <a class="btn block green" href="#/les/${id}/oefen">✏️ Start de oefeningen (${lesson.exercises.length})</a>
    </div>
    <div class="row" style="margin-top:16px">
      ${prev ? `<a class="btn ghost small" href="#/les/${prev.id}">‹ ${esc(prev.emoji)}</a>` : ''}
      <span class="spacer"></span>
      ${next ? `<a class="btn ghost small" href="#/les/${next.id}">${esc(next.emoji)} ›</a>` : ''}
    </div>
  `;
  const add = root.querySelector('#addvocab');
  if (add) {
    const refresh = () => {
      const missing = lesson.vocab.filter(([fr]) => !srs.hasCard(fr)).length;
      if (!missing) { add.textContent = '✅ Staat in je flashcards'; add.disabled = true; }
    };
    refresh();
    add.onclick = () => {
      let n = 0;
      lesson.vocab.forEach(([fr, nl]) => { if (srs.addCard(fr, nl, 'les-' + lesson.id)) n++; });
      toast(`${n} woorden toegevoegd 🃏`);
      store.save();
      refresh();
    };
  }
}

function practice(root, lesson) {
  // Volgorde: oefeningen licht schudden, maar 'speak' altijd aan het eind
  const list = lesson.exercises;
  const speak = list.filter(e => e.type === 'speak');
  const rest = shuffle(list.filter(e => e.type !== 'speak'));
  runExercises(root, [...rest, ...speak], {
    onQuit: () => { location.hash = `#/les/${lesson.id}`; },
    onFinish: ({ right, total, pct }) => {
      const stars = pct >= 0.95 ? 3 : pct >= 0.75 ? 2 : 1;
      const xp = right * 5 + 15;
      store.addXp(xp);
      store.setLesson(lesson.id, stars, Math.round(pct * 100));
      // woorden automatisch in de flashcards
      let added = 0;
      (lesson.vocab || []).forEach(([fr, nl]) => { if (srs.addCard(fr, nl, 'les-' + lesson.id)) added++; });
      if (added) store.save();
      sound('win');
      if (stars >= 2) confetti();
      const idx = LESSONS.indexOf(lesson);
      const next = LESSONS[idx + 1];
      const msgs = {
        3: ['Magnifique ! Foutloos!', 'Parfait ! Jij bent een natuurtalent.'],
        2: ['Très bien ! Bijna alles goed.', 'Bravo ! Nog een keer voor 3 sterren?'],
        1: ['Pas mal ! Oefening baart kunst.', 'Courage ! Lees de uitleg nog eens en probeer opnieuw.'],
      }[stars];
      root.innerHTML = `
        <div class="result view-enter">
          <div class="big">${stars === 3 ? '🏆' : stars === 2 ? '🎉' : '💪'}</div>
          <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
          <h1>${msgs[Math.floor(Math.random() * msgs.length)]}</h1>
          <p class="muted">${right} van de ${total} in één keer goed · <b>+${xp} XP</b></p>
          ${added ? `<p class="small">🃏 ${added} nieuwe woorden staan nu in je flashcards.</p>` : ''}
          <div class="stack" style="margin-top:20px">
            ${next ? `<a class="btn block green" href="#/les/${next.id}">Volgende les: ${esc(next.title)} ›</a>` : ''}
            <a class="btn block ghost" href="#/les/${lesson.id}/oefen">🔁 Nog een keer</a>
            <a class="btn block ghost" href="#/les/${lesson.id}">📖 Terug naar de uitleg</a>
          </div>
        </div>`;
    },
  });
}
