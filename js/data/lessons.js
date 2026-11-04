import a1 from './lessons-a1.js';
import a2 from './lessons-a2.js';
import b1 from './lessons-b1.js';

export const UNITS = [
  { id: 'A1', name: 'A1 — De basis', desc: 'Voorstellen, familie, eten, de belangrijkste werkwoorden.', cls: 'a1' },
  { id: 'A2', name: 'A2 — Vertellen', desc: 'Over je weekend en vroeger praten, dagelijkse routine.', cls: 'a2' },
  { id: 'B1', name: 'B1 — Echt meepraten', desc: 'Plannen, meningen, beleefd zijn en echte spreektaal.', cls: 'b1' },
];

export const LESSONS = [...a1, ...a2, ...b1];
export const byId = id => LESSONS.find(l => l.id === id);
