import a1 from './lessons-a1.js';
import a2 from './lessons-a2.js';
import b1 from './lessons-b1.js';
import { EXTRA_A1, EXTRA_A2, EXTRA_B1 } from './lessons-extra.js';
import { EXTRA2_A2, EXTRA2_B1 } from './lessons-extra2.js';
import EX1 from './extra-exercises.js';
import EX2 from './extra-exercises2.js';
const EXTRA_EX = { ...EX1, ...EX2 };

export const UNITS = [
  { id: 'A1', name: 'A1 — De basis', desc: 'Voorstellen, familie, eten, de belangrijkste werkwoorden.', cls: 'a1' },
  { id: 'A2', name: 'A2 — Vertellen', desc: 'Over je weekend en vroeger praten, dagelijkse routine.', cls: 'a2' },
  { id: 'B1', name: 'B1 — Echt meepraten', desc: 'Plannen, meningen, beleefd zijn en echte spreektaal.', cls: 'b1' },
];

// Extra lessen op een logische plek invoegen
function insertAfter(list, afterId, items) {
  const out = [...list];
  const i = out.findIndex(l => l.id === afterId);
  out.splice(i < 0 ? out.length : i + 1, 0, ...items);
  return out;
}

const A1 = insertAfter(insertAfter(a1, 'a1-etre', [EXTRA_A1[1]]), 'a1-bezit', [EXTRA_A1[0]]);
const A2 = insertAfter(insertAfter(a2, 'a2-vergelijken', EXTRA_A2), 'a2-imperatief', EXTRA2_A2);
const B1 = insertAfter(insertAfter(b1, 'b1-mening', EXTRA_B1), 'b1-spreektaal', EXTRA2_B1);

export const LESSONS = [...A1, ...A2, ...B1].map(l => EXTRA_EX[l.id]
  ? { ...l, exercises: [...l.exercises.filter(e => e.type !== 'speak'), ...EXTRA_EX[l.id], ...l.exercises.filter(e => e.type === 'speak')] }
  : l);
export const byId = id => LESSONS.find(l => l.id === id);
