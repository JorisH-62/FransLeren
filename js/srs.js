// Gespreide herhaling (Leitner-achtig met 8 bakjes)
import * as store from './store.js';

const DAY = 86400000;
// interval per bakje in dagen
const INTERVALS = [0, 1, 2, 4, 7, 15, 30, 60, 120];

export function addCard(fr, nl, deck = 'eigen', extra = {}) {
  const s = store.get();
  if (s.cards[fr]) return false;
  s.cards[fr] = { nl, deck, box: 0, due: Date.now(), reps: 0, lapses: 0, added: Date.now(), ...extra };
  store.save();
  return true;
}

export function hasCard(fr) { return !!store.get().cards[fr]; }

export function removeCard(fr) { delete store.get().cards[fr]; store.save(); }

export function dueCards(deck = null) {
  const now = Date.now();
  return Object.entries(store.get().cards)
    .filter(([, c]) => c.due <= now && (!deck || c.deck === deck))
    .map(([fr, c]) => ({ fr, ...c }))
    .sort((a, b) => a.due - b.due);
}

export function allCards(deck = null) {
  return Object.entries(store.get().cards)
    .filter(([, c]) => !deck || c.deck === deck)
    .map(([fr, c]) => ({ fr, ...c }));
}

// grade: 0 = opnieuw, 1 = moeilijk, 2 = goed, 3 = makkelijk
export function grade(fr, g) {
  const c = store.get().cards[fr];
  if (!c) return;
  c.reps++;
  if (g === 0) { c.lapses++; c.box = 0; c.due = Date.now() + 60 * 1000; }
  else {
    if (g === 1) c.box = Math.max(1, c.box);
    if (g === 2) c.box = Math.min(INTERVALS.length - 1, c.box + 1);
    if (g === 3) c.box = Math.min(INTERVALS.length - 1, c.box + 2);
    const days = INTERVALS[c.box] * (g === 1 ? 0.6 : 1);
    // kleine spreiding zodat niet alles tegelijk terugkomt
    c.due = Date.now() + Math.max(days, 0.4) * DAY * (0.9 + Math.random() * 0.2);
  }
  store.save();
}

export function nextLabel(fr, g) {
  const c = store.get().cards[fr];
  if (!c) return '';
  if (g === 0) return '1 min';
  let box = c.box;
  if (g === 1) box = Math.max(1, box);
  if (g === 2) box = Math.min(INTERVALS.length - 1, box + 1);
  if (g === 3) box = Math.min(INTERVALS.length - 1, box + 2);
  const d = INTERVALS[box] * (g === 1 ? 0.6 : 1);
  if (d < 1) return '< 1 d';
  return Math.round(d) + ' d';
}

export function stats() {
  const cards = Object.values(store.get().cards);
  const now = Date.now();
  return {
    total: cards.length,
    due: cards.filter(c => c.due <= now).length,
    learned: cards.filter(c => c.box >= 3).length,
    mastered: cards.filter(c => c.box >= 6).length,
  };
}
