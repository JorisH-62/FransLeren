// 6-maandenplan: 26 weken. Elke 4e week herhaling, week 25 eindtoetsen, week 26 feestweek.
import { LESSONS } from './lessons.js';
import { STORIES } from './stories.js';
import { DIALOGUES } from './dialogues.js';
import { DECKS } from './vocab.js';

const ORDER = { A1: 0, A2: 1, B1: 2 };
const REVIEW_WEEKS = [4, 8, 12, 16, 20, 24];

function picker(list) {
  const used = new Set();
  return level => {
    // eerst hetzelfde niveau, dan lager, dan wat er nog is
    const cands = [level, ...Object.keys(ORDER).filter(l => ORDER[l] < ORDER[level]).reverse(), ...Object.keys(ORDER)];
    for (const lv of cands) {
      const it = list.find(x => x.level === lv && !used.has(x.id));
      if (it) { used.add(it.id); return it; }
    }
    return null;
  };
}

function themeOf(ls) {
  const short = ls.map(l => l.title.split(/[:—]/)[0].trim());
  const all = short.join(' · ');
  return all.length <= 42 ? all : `${short[0]} + ${short.length - 1} meer`;
}

function build() {
  const learnWeeks = [];
  for (let w = 1; w <= 24; w++) if (!REVIEW_WEEKS.includes(w)) learnWeeks.push(w);
  // lessen eerlijk verdelen over de leerweken
  const groups = learnWeeks.map(() => []);
  LESSONS.forEach((l, i) => groups[Math.floor((i * learnWeeks.length) / LESSONS.length)].push(l));

  const nextStory = picker(STORIES.filter(s => s.kind !== 'song'));
  const nextSong = picker(STORIES.filter(s => s.kind === 'song'));
  const nextDialog = picker(DIALOGUES);
  const nextDeck = picker(DECKS);

  const weeks = [];
  let lastLevel = 'A1';
  const finished = new Set(); // niveaus waarvan alle lessen al ingepland zijn
  for (let w = 1; w <= 26; w++) {
    const li = learnWeeks.indexOf(w);
    if (li >= 0) {
      const ls = groups[li];
      const level = ls[0]?.unit || lastLevel;
      lastLevel = ls[ls.length - 1]?.unit || level;
      const tasks = ls.map(l => ({ type: 'les', id: l.id, label: l.title, emoji: l.emoji }));
      const deck = nextDeck(level);
      if (deck) tasks.push({ type: 'woorden', id: deck.id, label: `Woordenset: ${deck.name}`, emoji: deck.emoji });
      const story = nextStory(level);
      if (story) tasks.push({ type: 'verhaal', id: story.id, label: story.title, emoji: story.emoji });
      const dlg = nextDialog(level);
      if (dlg) tasks.push({ type: 'gesprek', id: dlg.id, label: dlg.title, emoji: dlg.emoji });
      if (w % 3 === 1) { const song = nextSong('A1'); if (song) tasks.push({ type: 'verhaal', id: song.id, label: `Liedje: ${song.title}`, emoji: song.emoji }); }
      // niveau afgerond als de volgende lessen een hoger niveau hebben
      const later = new Set(groups.slice(li + 1).flat().map(l => l.unit));
      ls.forEach(l => { if (!later.has(l.unit)) finished.add(l.unit); });
      weeks.push({ n: w, kind: 'leren', level, theme: themeOf(ls), emoji: ls[0]?.emoji || '📘', tasks });
    } else if (REVIEW_WEEKS.includes(w)) {
      const tasks = [
        { type: 'fouten', label: 'Oefen al je fouten', emoji: '🎯' },
        { type: 'kaarten', label: 'Herhaal al je flashcards', emoji: '🃏' },
        { type: 'mix', label: 'Doe 2× de snelle mix', emoji: '🎲' },
        { type: 'luisteren', label: 'Luistertraining (10 zinnen)', emoji: '🎧' },
      ];
      const toetsLevel = [...finished].filter(l => !weeks.some(x => x.tasks.some(t => t.type === 'toets' && t.id === l))).pop();
      if (toetsLevel) tasks.push({ type: 'toets', id: toetsLevel, label: `Eindtoets ${toetsLevel}`, emoji: '📜' });
      else tasks.push({ type: 'spreken', label: 'Spreektrainer (8 zinnen)', emoji: '🎤' });
      weeks.push({ n: w, kind: 'herhaling', level: lastLevel, theme: 'Herhalingsweek', emoji: '🔁', tasks });
    } else if (w === 25) {
      weeks.push({ n: w, kind: 'toets', level: 'B1', theme: 'Eindtoetsen', emoji: '🎓', tasks: ['A1', 'A2', 'B1'].map(u => ({ type: 'toets', id: u, label: `Eindtoets ${u} (80%)`, emoji: '📜' })) });
    } else {
      weeks.push({ n: w, kind: 'feest', level: 'B1', theme: 'Feestweek: praat met de familie!', emoji: '🎉', tasks: [
        { type: 'gesprek', id: 'afscheid', label: 'Herhaal: afscheid na het logeerweekend', emoji: '🚗' },
        { type: 'familie', label: 'Oefen de zinnen over je eigen familie', emoji: '👨‍👩‍👧' },
        { type: 'echt', label: 'Bel of video-bel je (schoon)familie… in het Frans!', emoji: '📞' },
      ] });
    }
  }
  return weeks;
}

export const PLAN = build();
