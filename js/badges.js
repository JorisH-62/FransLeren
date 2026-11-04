// Prestaties / badges
import * as store from './store.js';
import { toast, confetti } from './util.js';

export const BADGES = [
  { id: 'first-lesson', e: '🎓', name: 'Eerste les', desc: 'Rond je eerste les af', test: s => count(s.lessons) >= 1 },
  { id: 'five-lessons', e: '📘', name: 'Studiebol', desc: '5 lessen afgerond', test: s => count(s.lessons) >= 5 },
  { id: 'fifteen-lessons', e: '🧠', name: 'Grammaticabaas', desc: '15 lessen afgerond', test: s => count(s.lessons) >= 15 },
  { id: 'all-a1', e: '🥉', name: 'A1 gehaald', desc: 'Alle A1-lessen af', test: (s, x) => x.allDone('A1') },
  { id: 'all-a2', e: '🥈', name: 'A2 gehaald', desc: 'Alle A2-lessen af', test: (s, x) => x.allDone('A2') },
  { id: 'all-b1', e: '🥇', name: 'B1 gehaald', desc: 'Alle B1-lessen af', test: (s, x) => x.allDone('B1') },
  { id: 'perfect', e: '💯', name: 'Foutloos', desc: 'Een les met 3 sterren', test: s => Object.values(s.lessons).some(l => l.stars >= 3) },
  { id: 'cards-25', e: '🃏', name: 'Woordverzamelaar', desc: '25 woorden in je flashcards', test: s => count(s.cards) >= 25 },
  { id: 'cards-100', e: '📦', name: 'Woordenschat', desc: '100 woorden in je flashcards', test: s => count(s.cards) >= 100 },
  { id: 'cards-300', e: '🏛️', name: 'Woordenboek', desc: '300 woorden in je flashcards', test: s => count(s.cards) >= 300 },
  { id: 'story-1', e: '📖', name: 'Lezer', desc: 'Lees je eerste verhaal', test: s => Object.values(s.stories).filter(x => x.read).length >= 1 },
  { id: 'story-5', e: '📚', name: 'Boekenwurm', desc: 'Lees 5 verhalen', test: s => Object.values(s.stories).filter(x => x.read).length >= 5 },
  { id: 'dialogue-1', e: '💬', name: 'Kletskous', desc: 'Voer je eerste gesprek', test: s => Object.values(s.dialogues).filter(x => x.done).length >= 1 },
  { id: 'dialogue-5', e: '👨‍👩‍👧', name: 'Familiemens', desc: 'Voer 5 gesprekken', test: s => Object.values(s.dialogues).filter(x => x.done).length >= 5 },
  { id: 'streak-3', e: '🔥', name: 'Op dreef', desc: '3 dagen op rij', test: s => s.streak >= 3 },
  { id: 'streak-7', e: '🌟', name: 'Een week!', desc: '7 dagen op rij', test: s => s.streak >= 7 },
  { id: 'streak-30', e: '🏆', name: 'Onstopbaar', desc: '30 dagen op rij', test: s => s.streak >= 30 },
  { id: 'verbs-50', e: '🔤', name: 'Vervoeger', desc: '50 werkwoorden goed', test: s => (s.verbs?.right || 0) >= 50 },
  { id: 'xp-1000', e: '⚡', name: '1000 XP', desc: 'Verzamel 1000 XP', test: s => s.xp >= 1000 },
];

function count(o) { return Object.keys(o || {}).length; }

let lessonIndex = null;
export function setLessonIndex(idx) { lessonIndex = idx; }

const helpers = {
  allDone(unit) {
    if (!lessonIndex) return false;
    const ids = lessonIndex.filter(l => l.unit === unit).map(l => l.id);
    const s = store.get();
    return ids.length > 0 && ids.every(id => s.lessons[id]?.done);
  },
};

let busy = false;
export function checkAll() {
  if (busy) return;
  busy = true;
  const s = store.get();
  for (const b of BADGES) {
    if (!s.badges[b.id] && b.test(s, helpers)) {
      if (store.awardBadge(b.id)) {
        setTimeout(() => { toast(`${b.e} Nieuwe badge: ${b.name}!`, 3000); confetti(40); }, 600);
      }
    }
  }
  busy = false;
}
