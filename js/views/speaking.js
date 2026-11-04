// Spreektrainer: zinnen hardop zeggen
import * as store from '../store.js';
import { esc, shuffle, sound, confetti, $, $$ } from '../util.js';
import { DIALOGUES } from '../data/dialogues.js';
import { PHRASES } from '../data/phrases.js';
import { runExercises } from '../exercise.js';
import * as speech from '../speech.js';

function pool(level) {
  const lv = { A1: ['A1'], A2: ['A1', 'A2'], B1: ['A1', 'A2', 'B1'] }[level];
  const out = [];
  DIALOGUES.filter(d => lv.includes(d.level)).forEach(d => d.steps.forEach(s => {
    if (s.say) out.push([s.say, s.nl]);
    if (s.choose) s.choose.filter(c => c.ok).forEach(c => out.push([c.fr, c.nl]));
  }));
  if (level !== 'A1') PHRASES.forEach(c => c.items.forEach(([fr, nl]) => { if (!fr.includes('…')) out.push([fr, nl]); }));
  else PHRASES.slice(0, 3).forEach(c => c.items.forEach(([fr, nl]) => { if (!fr.includes('…')) out.push([fr, nl]); }));
  const name = store.setting('name');
  return out.filter(([fr]) => fr.split(' ').length <= 14).map(([fr, nl]) => name ? [fr.replace(/\bJoris\b/g, name), nl.replace(/\bJoris\b/g, name)] : [fr, nl]);
}

export function render(root) {
  const lv = store.setting('speakLevel') || 'A1';
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>🎤 Spreektrainer</h1>
    <p class="muted">Praten leer je door te praten! Je krijgt 8 zinnen die je in echte familiegesprekken nodig hebt. Luister eerst (🔊), zeg de zin dan hardop.</p>
    <div class="card stack">
      <b>Niveau</b>
      <div class="segmented" id="level">${['A1', 'A2', 'B1'].map(l => `<button data-k="${l}" class="${l === lv ? 'on' : ''}">${l}</button>`).join('')}</div>
      <button class="btn block green" id="go">🎤 Start (8 zinnen)</button>
    </div>
    <div class="card small muted">
      ${speech.canListen() ? '✅ Je browser kan je spraak herkennen. De eerste keer vraagt hij toestemming voor de microfoon.' : '⚠️ Deze browser herkent geen spraak (probeer Chrome of Safari). Je kunt wel oefenen: zeg de zin hardop en tik op Controleer.'}
      <br><br>💡 Tips: overdrijf de Franse klanken, praat iets langzamer dan normaal, en lach als het misgaat. 😄
    </div>`;
  $$('#level button', root).forEach(b => b.onclick = () => {
    $$('#level button', root).forEach(x => x.classList.remove('on')); b.classList.add('on'); store.setting('speakLevel', b.dataset.k);
  });
  $('#go', root).onclick = () => start(root);
}

function start(root) {
  const items = shuffle(pool(store.setting('speakLevel') || 'A1')).slice(0, 8);
  runExercises(root, items.map(([fr, nl]) => ({ type: 'speak', fr, nl })), {
    onQuit: () => render(root),
    onFinish: ({ right, total }) => {
      const xp = right * 4 + 5;
      store.addXp(xp);
      sound('win');
      if (right >= 6) confetti();
      root.innerHTML = `<div class="result"><div class="big">🎤</div><h1>${right}/${total} goed uitgesproken!</h1><p class="muted"><b>+${xp} XP</b></p>
        <div class="stack" style="margin-top:20px"><button class="btn block green" id="again">🔁 Nog 8 zinnen</button><button class="btn block ghost" id="back">Niveau kiezen</button></div></div>`;
      $('#again', root).onclick = () => start(root);
      $('#back', root).onclick = () => render(root);
    },
  });
}
