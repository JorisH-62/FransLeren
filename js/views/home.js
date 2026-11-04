import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, dayIndex } from '../util.js';
import { LESSONS } from '../data/lessons.js';
import { speakBtn } from '../speech.js';

const GASTON = [
  'Un escargot qui avance lentement avance quand même. — Ook langzaam kom je er.',
  'Vandaag een les doen? Ik heb er drie dagen over gedaan om hier te komen, dus jij kunt het ook!',
  'Weetje: Fransen eten zo\'n 16.000 ton slakken per jaar. Ik zeg verder niks. 😶',
  'Fouten maken mag! Zo leer je. Ik ben ook ooit verkeerd gekropen.',
  'Tip: zeg alles hardop. Je mond moet ook Frans leren, niet alleen je hoofd.',
  'Tien minuten per dag is beter dan twee uur op zondag. Petit à petit !',
  'Weetje: "Bon appétit" zeg je vóór het eten. Na het eten zeg je "C\'était délicieux !"',
  'Herhalen is het geheim. Kijk even bij je flashcards!',
  'Lees vandaag een verhaaltje. Het is net als Netflix, maar dan met slakken. Nou ja, soms.',
  'Weetje: in het Frans heet een lieveheersbeestje "une coccinelle". Mooi hè?',
];

export function render(root) {
  const s = store.get();
  const lvl = store.level();
  const stats = srs.stats();
  if (!s.onboarded && !Object.keys(s.lessons).length) { location.hash = '#/welkom'; return; }
  const order = { A1: 0, A2: 1, B1: 2 };
  const startU = order[s.settings.startUnit || 'A1'];
  const next = LESSONS.find(l => !s.lessons[l.id] && order[l.unit] >= startU) || LESSONS.find(l => !s.lessons[l.id]);
  const nMistakes = store.mistakes().length;
  const plan = () => {
    const tasks = [
      { done: store.doneToday(s.lessons), e: '✏️', t: store.doneToday(s.lessons) ? 'Les van vandaag gedaan' : next ? `Les: ${next.title}` : 'Herhaal een les', href: next ? `#/les/${next.id}` : '#/leerpad' },
      { done: stats.total > 0 && stats.due === 0, e: '🃏', t: stats.total ? (stats.due ? `Herhaal ${stats.due} kaarten` : 'Kaarten herhaald') : 'Begin een woordenset', href: stats.total ? '#/woorden/herhaal' : '#/woorden' },
      { done: store.doneToday(s.stories) || store.doneToday(s.dialogues), e: '📖', t: 'Lees een verhaal of voer een gesprek', href: Object.keys(s.stories).length <= Object.keys(s.dialogues).length ? '#/verhalen' : '#/gesprekken' },
    ];
    const n = tasks.filter(x => x.done).length;
    return `<div class="card">
      <div class="row"><b>📋 Plan voor vandaag</b><span class="spacer"></span><span class="small muted">${n}/3</span></div>
      ${tasks.map(x => `<a href="${x.href}" class="row" style="text-decoration:none;color:inherit;padding:8px 0;border-bottom:1px dashed var(--line)">
        <span style="font-size:1.2rem">${x.done ? '✅' : x.e}</span><span style="flex:1;${x.done ? 'text-decoration:line-through;opacity:.6' : ''}">${esc(x.t)}</span>${x.done ? '' : '<span class="muted">›</span>'}</a>`).join('')}
      ${n === 3 ? '<p class="small" style="margin:8px 0 0">🎉 Alles gedaan voor vandaag! Gaston is apetrots.</p>' : ''}
    </div>`;
  };
  const hour = new Date().getHours();
  const greet = hour < 6 ? 'Bonne nuit' : hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir';
  const goalPct = Math.min(100, Math.round((s.todayXp / s.dailyGoal) * 100));
  const lvlPct = lvl.next ? Math.round(((s.xp - lvl.min) / (lvl.next - lvl.min)) * 100) : 100;
  const doneCount = Object.keys(s.lessons).length;

  root.innerHTML = `
    <div class="hero">
      <h1>${greet} ! 👋</h1>
      <p>${lvl.emoji} Niveau ${lvl.n}: <b>${esc(lvl.name)}</b></p>
      <div class="bubble">🐌 ${esc(GASTON[dayIndex(GASTON.length, 3)])}</div>
      <div class="snail-big" aria-hidden="true">🐌</div>
    </div>

    <div class="card">
      <div class="row"><b>Dagdoel</b><span class="spacer"></span><span class="small muted">${s.todayXp} / ${s.dailyGoal} XP</span></div>
      <div class="goalbar" style="margin-top:8px"><div style="width:${goalPct}%"></div></div>
      ${goalPct >= 100 ? '<p class="small" style="margin-top:8px">🎉 Dagdoel gehaald! Gaston is trots op je.</p>' : ''}
      <div class="row small muted" style="margin-top:10px">
        <span>🔥 ${s.streak} ${s.streak === 1 ? 'dag' : 'dagen'} op rij</span><span class="spacer"></span>
        <span>${lvl.next ? `${lvl.next - s.xp} XP tot niveau ${lvl.n + 1}` : 'Max niveau!'}</span>
      </div>
      <div class="meter"><div style="width:${lvlPct}%;background:var(--purple)"></div></div>
    </div>

    ${next ? `
    <a class="card tile" href="#/les/${next.id}" style="flex-direction:row;align-items:center;gap:14px">
      <span class="te">${next.emoji}</span>
      <span style="flex:1"><span class="small muted">${doneCount ? 'Ga verder met' : 'Begin hier'} · ${next.unit}</span><br><b>${esc(next.title)}</b></span>
      <span class="btn small">Start</span>
    </a>` : `<div class="card center">🏆 Je hebt alle lessen gedaan! Herhaal ze voor 3 sterren.</div>`}

    ${plan()}

    ${stats.due ? `
    <a class="card tile" href="#/woorden/herhaal" style="flex-direction:row;align-items:center;gap:14px">
      <span class="te">🃏</span>
      <span style="flex:1"><b>${stats.due} ${stats.due === 1 ? 'kaart' : 'kaarten'} te herhalen</b><br><span class="muted small">Slim herhalen: precies op tijd, zodat je het niet vergeet.</span></span>
      <span class="btn small green">Herhaal</span>
    </a>` : ''}

    ${nMistakes ? `
    <a class="card tile" href="#/fouten" style="flex-direction:row;align-items:center;gap:14px">
      <span class="te">🎯</span>
      <span style="flex:1"><b>Oefen je fouten (${nMistakes})</b><br><span class="muted small">Wat je eerder fout had, komt terug tot je het kent.</span></span>
      <span class="btn small yellow">Oefen</span>
    </a>` : ''}

    <div class="grid2" style="margin-bottom:14px">
      <a class="tile" href="#/leerpad"><span class="te">🗺️</span><b>Grammatica</b><span class="muted">${doneCount}/${LESSONS.length} lessen</span></a>
      <a class="tile" href="#/woorden"><span class="te">🃏</span><b>Woorden</b><span class="muted">${stats.total} in je kaarten</span></a>
      <a class="tile" href="#/verhalen"><span class="te">📚</span><b>Verhalen</b><span class="muted">Grappig & met vertaling</span></a>
      <a class="tile" href="#/gesprekken"><span class="te">💬</span><b>Gesprekken</b><span class="muted">Oefen met de familie</span></a>
      <a class="tile" href="#/werkwoorden"><span class="te">🔤</span><b>Werkwoorden</b><span class="muted">Vervoegen & trainen</span></a>
      <a class="tile" href="#/uitdrukkingen"><span class="te">🤪</span><b>Uitdrukkingen</b><span class="muted">Gekke Franse gezegdes</span></a>
      <a class="tile" href="#/uitspraak"><span class="te">👄</span><b>Uitspraak</b><span class="muted">Klanken & tongbrekers</span></a>
      <a class="tile" href="#/mix"><span class="te">🎲</span><b>Snelle mix</b><span class="muted">5 min. van alles</span></a>
      <a class="tile" href="#/zinnen"><span class="te">📖</span><b>Zinnenboek</b><span class="muted">Handige zinnen</span></a>
      <a class="tile" href="#/luisteren"><span class="te">🎧</span><b>Luisteren</b><span class="muted">Verstaan op tempo</span></a>
      <a class="tile" href="#/spiekbriefje"><span class="te">📝</span><b>Spiekbriefje</b><span class="muted">Alle regels kort</span></a>
      <a class="tile" href="#/profiel"><span class="te">🏅</span><b>Badges</b><span class="muted">& instellingen</span></a>
    </div>

    <div id="daily"></div>

    <a class="card tile" href="#/profiel" style="flex-direction:row;align-items:center;gap:14px">
      <span class="te">👤</span><span style="flex:1"><b>Profiel & instellingen</b><br><span class="muted small">Badges, stem, back-up</span></span><span>›</span>
    </a>
  `;

  // Woord + uitdrukking van de dag (lui laden)
  Promise.all([import('../data/vocab.js'), import('../data/idioms.js'), import('../data/stories.js')]).then(([v, i, st]) => {
    const unread = st.STORIES.filter(x => !s.stories[x.id]?.read && x.kind !== 'song');
    const lvl = s.settings.startUnit || 'A1';
    const pool = unread.filter(x => x.level === lvl).length ? unread.filter(x => x.level === lvl) : unread.length ? unread : st.STORIES;
    const story = pool[dayIndex(pool.length, 4)];
    const words = v.DECKS.flatMap(d => d.words);
    const w = words[dayIndex(words.length, 1)];
    const idiom = i.IDIOMS[dayIndex(i.IDIOMS.length, 2)];
    const el = root.querySelector('#daily');
    if (!el) return;
    el.innerHTML = `
      <a class="card tile" href="#/verhaal/${story.id}" style="flex-direction:row;align-items:center;gap:14px">
        <span style="font-size:2.2rem;width:56px;height:56px;display:grid;place-items:center;border-radius:14px;background:${story.color}">${story.emoji}</span>
        <span style="flex:1"><span class="small muted">📖 Verhaal van de dag · ${story.level}</span><br><b>${esc(story.title)}</b><br><span class="small muted">${esc(story.nl)}</span></span>
      </a>
      <div class="card wotd">
        <div class="small muted">📅 Woord van de dag</div>
        <div class="row" style="margin-top:4px"><span class="fr">${esc(w[0])}</span>${speakBtn(w[0])}</div>
        <div>${esc(w[1])}</div>
      </div>
      <div class="card idiom">
        <div class="small muted">🤪 Uitdrukking van de dag</div>
        <div class="row" style="margin-top:4px"><span class="fr">${esc(idiom.fr)}</span>${speakBtn(idiom.fr)}</div>
        <div class="lit">Letterlijk: ${esc(idiom.lit)}</div>
        <div class="mean">${esc(idiom.nl)}</div>
      </div>`;
  }).catch(() => {});
}
