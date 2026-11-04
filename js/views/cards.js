import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, shuffle, toast, sound, confetti, $, $$ } from '../util.js';
import { DECKS } from '../data/vocab.js';
import * as speech from '../speech.js';
import { runExercises } from '../exercise.js';

export function render(root, params, opts) {
  if (opts.review) return review(root, params[0]);
  if (opts.deck) return deckView(root, params[0]);
  if (opts.quiz) return deckQuiz(root, params[0]);
  return overview(root);
}

function overview(root) {
  const st = srs.stats();
  const cards = store.get().cards;
  root.innerHTML = `
    <h1>🃏 Woorden</h1>
    <div class="card">
      <div class="grid3 center">
        <div><div class="big" style="font-size:1.8rem;color:var(--red)">${st.due}</div><div class="small muted">te herhalen</div></div>
        <div><div class="big" style="font-size:1.8rem;color:var(--blue)">${st.total}</div><div class="small muted">in je kaarten</div></div>
        <div><div class="big" style="font-size:1.8rem;color:var(--green)">${st.learned}</div><div class="small muted">goed gekend</div></div>
      </div>
      <a class="btn block ${st.due ? 'green' : 'ghost'}" href="#/woorden/herhaal" style="margin-top:14px">${st.due ? `▶️ Herhaal ${st.due} kaarten` : '✅ Alles herhaald! (oefen toch)'}</a>
    </div>
    <div class="card small muted">
      💡 <b>Hoe werkt het?</b> Kies hieronder een set en tik op "Leer deze set". De woorden komen dan in je flashcards.
      Elke kaart komt terug precies wanneer je hem bijna vergeet: eerst na 1 dag, dan 2, 4, 7, 15, 30 dagen…
    </div>
    <h2>Woordensets</h2>
    ${[...DECKS].sort((a, b) => a.level.localeCompare(b.level)).map(d => {
      const inCards = d.words.filter(([fr]) => cards[fr]).length;
      const learned = d.words.filter(([fr]) => cards[fr]?.box >= 3).length;
      return `<a class="card tile deck-item" href="#/woorden/set/${d.id}" style="flex-direction:row">
        <span class="de">${d.emoji}</span>
        <span style="flex:1;min-width:0"><b>${esc(d.name)}</b> <span class="pill ${d.level.toLowerCase()}">${d.level}</span><br>
          <span class="small muted">${d.words.length} woorden · ${inCards ? `${inCards} in kaarten, ${learned} gekend` : 'nog niet begonnen'}</span>
          <div class="meter"><div style="width:${(learned / d.words.length) * 100}%"></div></div>
        </span>
      </a>`;
    }).join('')}
    ${ownWordsCard(cards)}
  `;
}

function ownWordsCard(cards) {
  const known = new Set(DECKS.flatMap(d => d.words.map(w => w[0])));
  const own = Object.entries(cards).filter(([fr]) => !known.has(fr));
  if (!own.length) return '';
  return `<h2>Uit lessen & verhalen</h2>
    <div class="card">
      <p class="small muted">${own.length} woorden die je zelf hebt toegevoegd.</p>
      <div class="table-wrap"><table class="conj-table">${own.slice(-60).reverse().map(([fr, c]) =>
        `<tr><td><span class="fr-inline" data-say="${esc(fr)}" style="cursor:pointer">${esc(fr)}</span></td><td>${esc(c.nl)}</td></tr>`).join('')}</table></div>
    </div>`;
}

function deckView(root, id) {
  const d = DECKS.find(x => x.id === id);
  if (!d) { location.hash = '#/woorden'; return; }
  const cards = store.get().cards;
  const missing = d.words.filter(([fr]) => !cards[fr]).length;
  root.innerHTML = `
    <a href="#/woorden" class="small">‹ Woorden</a>
    <h1>${d.emoji} ${esc(d.name)}</h1>
    <div class="stack">
      <button class="btn block ${missing ? 'green' : 'ghost'}" id="learn" ${missing ? '' : 'disabled'}>${missing ? `➕ Leer deze set (${missing} nieuw)` : '✅ Alles staat in je kaarten'}</button>
      <a class="btn block yellow" href="#/woorden/quiz/${d.id}">🎯 Snelle quiz</a>
      <a class="btn block ghost" href="#/woorden/herhaal/${d.id}">🃏 Kaarten van deze set oefenen</a>
    </div>
    <div class="card" style="margin-top:14px">
      <div class="table-wrap"><table class="conj-table">
        ${d.words.map(([fr, nl]) => `<tr>
          <td><span class="fr-inline" data-say="${esc(fr)}" style="cursor:pointer">🔊 ${esc(fr)}</span></td>
          <td>${esc(nl)} ${cards[fr] ? `<span class="small" title="bakje ${cards[fr].box}">${'●'.repeat(Math.min(cards[fr].box, 5))}${'○'.repeat(Math.max(0, 5 - cards[fr].box))}</span>` : ''}</td></tr>`).join('')}
      </table></div>
    </div>`;
  $('#learn', root).onclick = () => {
    let n = 0;
    d.words.forEach(([fr, nl]) => { if (srs.addCard(fr, nl, d.id)) n++; });
    store.save();
    toast(`${n} woorden toegevoegd! Ze staan klaar om te herhalen.`);
    deckView(root, id);
  };
}

// ---------- Herhalen met flashcards ----------
function review(root, deckId) {
  let queue = srs.dueCards(deckId || null);
  let practiceMode = false;
  if (!queue.length) {
    // niets te herhalen → oefen een willekeurige selectie
    queue = shuffle(srs.allCards(deckId || null)).slice(0, 15);
    practiceMode = true;
  }
  if (!queue.length) {
    root.innerHTML = `<a href="#/woorden" class="small">‹ Woorden</a>
      <div class="card center" style="margin-top:14px"><div style="font-size:3rem">🃏</div>
      <h2>Nog geen kaarten</h2><p class="muted">Kies eerst een woordenset en tik op "Leer deze set".</p>
      <a class="btn" href="#/woorden">Naar de sets</a></div>`;
    return;
  }
  queue = queue.slice(0, 30);
  let dir = store.setting('cardDir') || 'fr';
  let i = 0, correct = 0, again = 0;
  const totalStart = queue.length;

  function show() {
    if (i >= queue.length) return done();
    const c = queue[i];
    const front = dir === 'fr' ? c.fr : c.nl;
    const back = dir === 'fr' ? c.nl : c.fr;
    root.innerHTML = `
      <div class="ex-progress">
        <a class="x" href="#/woorden" aria-label="Stoppen" style="text-decoration:none">✕</a>
        <div class="bar"><div style="width:${(Math.min(i, totalStart) / totalStart) * 100}%"></div></div>
        <span class="small muted">${Math.min(i + 1, queue.length)}/${queue.length}</span>
      </div>
      ${practiceMode ? '<p class="small muted center">Niets meer te herhalen vandaag — dit is extra oefening (telt niet mee voor het schema).</p>' : ''}
      <div class="segmented" style="margin-bottom:6px">
        <button data-dir="fr" class="${dir === 'fr' ? 'on' : ''}">🇫🇷 → 🇳🇱</button>
        <button data-dir="nl" class="${dir === 'nl' ? 'on' : ''}">🇳🇱 → 🇫🇷</button>
      </div>
      <div class="flash" id="flash" role="button" aria-label="Kaart omdraaien">
        <div class="flash-inner">
          <div class="flash-face"><div class="w">${esc(front)}</div><div class="n">${dir === 'fr' ? 'Wat betekent dit?' : 'Hoe zeg je dit in het Frans?'}</div></div>
          <div class="flash-face back"><div class="w">${esc(back)}</div><div class="n">${esc(front)}</div></div>
        </div>
      </div>
      <div id="actions">
        <button class="btn block" id="flip">Toon antwoord</button>
      </div>`;
    $$('[data-dir]', root).forEach(b => b.onclick = () => { dir = b.dataset.dir; store.setting('cardDir', dir); show(); });
    const flash = $('#flash', root);
    if (dir === 'fr') setTimeout(() => speech.say(c.fr), 200);
    const flip = () => {
      if (flash.classList.contains('flipped')) return;
      flash.classList.add('flipped');
      if (dir === 'nl') speech.say(c.fr);
      $('#actions', root).innerHTML = practiceMode ? `
        <div class="grid2"><button class="btn red" data-g="0">Fout</button><button class="btn green" data-g="2">Goed</button></div>` : `
        <div class="grade">
          <button class="btn red" data-g="0">Opnieuw<small>${srs.nextLabel(c.fr, 0)}</small></button>
          <button class="btn yellow" data-g="1">Moeilijk<small>${srs.nextLabel(c.fr, 1)}</small></button>
          <button class="btn" data-g="2">Goed<small>${srs.nextLabel(c.fr, 2)}</small></button>
          <button class="btn green" data-g="3">Makkelijk<small>${srs.nextLabel(c.fr, 3)}</small></button>
        </div>
        <button class="btn ghost small block" data-say="${esc(c.fr)}" style="margin-top:10px">🔊 Nog eens horen</button>`;
      $$('[data-g]', root).forEach(b => b.onclick = () => gradeIt(+b.dataset.g));
    };
    flash.onclick = flip;
    $('#flip', root).onclick = flip;
    root.onkeydown = e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
      if (flash.classList.contains('flipped') && '1234'.includes(e.key)) gradeIt(+e.key - 1);
    };
  }

  function gradeIt(g) {
    const c = queue[i];
    if (!practiceMode) srs.grade(c.fr, g);
    if (g === 0) { again++; queue.push(c); sound('bad'); }
    else { correct++; sound('ok'); }
    i++;
    show();
  }

  function done() {
    const xp = Math.max(5, correct * 2);
    store.addXp(xp);
    sound('win');
    confetti(40);
    root.innerHTML = `<div class="result">
      <div class="big">🃏</div>
      <h1>Klaar met herhalen!</h1>
      <p class="muted">${correct} kaarten herhaald${again ? `, ${again}× opnieuw` : ''} · <b>+${xp} XP</b></p>
      <div class="stack" style="margin-top:20px">
        <a class="btn block" href="#/woorden">Terug naar woorden</a>
        <a class="btn block ghost" href="#/">Naar start</a>
      </div></div>`;
  }

  show();
}

// ---------- Quiz uit een set ----------
export function quizFromWords(words, n = 10) {
  const pool = shuffle(words);
  const picked = pool.slice(0, n);
  const others = w => shuffle(words.filter(x => x !== w)).slice(0, 3);
  const exercises = [];
  picked.forEach((w, k) => {
    const kind = k % 4;
    if (kind === 0) exercises.push({ type: 'mc', q: `Wat betekent <b>${esc(w[0])}</b>?`, options: [w[1], ...others(w).map(o => o[1])], noSay: true });
    else if (kind === 1) exercises.push({ type: 'listen', fr: w[0], options: [w[1], ...others(w).map(o => o[1])] });
    else if (kind === 2) exercises.push({ type: 'mc', q: `Hoe zeg je <b>${esc(w[1])}</b> in het Frans?`, options: [w[0], ...others(w).map(o => o[0])], noSay: true });
    else if (w[0].includes('↔') || w[0].length > 40) exercises.push({ type: 'mc', q: `Wat betekent <b>${esc(w[0])}</b>?`, options: [w[1], ...others(w).map(o => o[1])], noSay: true });
    else exercises.push({ type: 'translate', nl: w[1], answer: [w[0], stripArticle(w[0]), ...w[0].split(' / ')] });
  });
  const pairs = shuffle(words.filter(w => !picked.includes(w))).slice(0, 5);
  if (pairs.length >= 4) exercises.splice(Math.floor(exercises.length / 2), 0, { type: 'match', pairs });
  return exercises;
}

function stripArticle(s) {
  return s.replace(/^(le|la|les|l'|un|une|des)\s*/i, '');
}

function deckQuiz(root, id) {
  const d = DECKS.find(x => x.id === id);
  if (!d) { location.hash = '#/woorden'; return; }
  runExercises(root, quizFromWords(d.words, 10), {
    onQuit: () => { location.hash = `#/woorden/set/${id}`; },
    onFinish: ({ right, total }) => {
      const xp = right * 3 + 5;
      store.addXp(xp);
      sound('win');
      if (right / total > 0.8) confetti();
      root.innerHTML = `<div class="result">
        <div class="big">🎯</div>
        <h1>${right}/${total} goed!</h1>
        <p class="muted"><b>+${xp} XP</b></p>
        <div class="stack" style="margin-top:20px">
          <a class="btn block green" href="#/woorden/quiz/${id}">🔁 Nog een quiz</a>
          <a class="btn block ghost" href="#/woorden/set/${id}">Terug naar ${esc(d.name)}</a>
        </div></div>`;
    },
  });
}
