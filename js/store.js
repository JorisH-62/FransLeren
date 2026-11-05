// Voortgang opslaan in de browser (per apparaat), met export/import.
const KEY = 'fransleren.v1';

const DEFAULT = {
  xp: 0,
  streak: 0,
  lastDay: null,          // 'YYYY-MM-DD' van laatste activiteit
  todayXp: 0,
  dailyGoal: 50,
  lessons: {},            // id -> { stars, best, done: true, at }
  cards: {},              // fr -> { nl, deck, box, due, reps, lapses, added }
  stories: {},            // id -> { read: true, quiz: score }
  dialogues: {},          // id -> { done: true, best }
  verbs: { right: 0, wrong: 0 },
  badges: {},
  settings: { rate: 0.9, voice: '', showNl: true, theme: 'auto', sounds: true },
  history: {},            // 'YYYY-MM-DD' -> xp
  mistakes: [],
  tests: {},
  family: [],
  plan: { start: null, checks: {} },              // niveau -> beste %           // oefeningen die fout gingen
  onboarded: false,
};

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULT);
    const s = JSON.parse(raw);
    return deepMerge(structuredClone(DEFAULT), s);
  } catch {
    return structuredClone(DEFAULT);
  }
}

function deepMerge(base, extra) {
  for (const k in extra) {
    if (extra[k] && typeof extra[k] === 'object' && !Array.isArray(extra[k]) && base[k] && typeof base[k] === 'object') {
      base[k] = deepMerge(base[k], extra[k]);
    } else base[k] = extra[k];
  }
  return base;
}

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* privémodus */ }
}

export function get() { return state; }

export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function dayDiff(a, b) {
  const da = new Date(a + 'T12:00:00'), db = new Date(b + 'T12:00:00');
  return Math.round((db - da) / 86400000);
}

// Bij het openen: streak en dag-XP bijwerken
export function rollDay() {
  const t = today();
  if (state.lastDay && state.lastDay !== t) {
    state.todayXp = 0;
    if (dayDiff(state.lastDay, t) > 1) state.streak = 0;
  }
  save();
}

const listeners = new Set();
export function onChange(fn) { listeners.add(fn); }
function emit() { listeners.forEach(fn => fn(state)); }

export function addXp(n) {
  const t = today();
  if (state.lastDay !== t) {
    if (state.lastDay && dayDiff(state.lastDay, t) === 1) state.streak += 1;
    else state.streak = 1;
    state.lastDay = t;
    state.todayXp = 0;
  }
  state.xp += n;
  state.todayXp += n;
  state.history[t] = (state.history[t] || 0) + n;
  save();
  emit();
}

export function setLesson(id, stars, pct) {
  const prev = state.lessons[id];
  state.lessons[id] = {
    done: true,
    stars: Math.max(stars, prev?.stars || 0),
    best: Math.max(pct, prev?.best || 0),
    at: Date.now(),
  };
  save(); emit();
}

export function setStory(id, data) {
  state.stories[id] = { ...(state.stories[id] || {}), ...data, at: Date.now() };
  save(); emit();
}

export function setDialogue(id, data) {
  state.dialogues[id] = { ...(state.dialogues[id] || {}), ...data, at: Date.now() };
  save(); emit();
}

export function setting(k, v) {
  if (v === undefined) return state.settings[k];
  state.settings[k] = v; save(); emit();
}

export function awardBadge(id) {
  if (state.badges[id]) return false;
  state.badges[id] = Date.now();
  save(); emit();
  return true;
}

export function exportData() {
  return JSON.stringify({ app: 'fransleren', version: 1, exported: new Date().toISOString(), state }, null, 1);
}

export function importData(text) {
  const obj = JSON.parse(text);
  if (!obj || obj.app !== 'fransleren' || !obj.state) throw new Error('Dit is geen FransLeren-back-up.');
  state = deepMerge(structuredClone(DEFAULT), obj.state);
  save(); emit();
}

export function reset() {
  state = structuredClone(DEFAULT);
  save(); emit();
}

export function level(xp = state.xp) {
  // Niveaus met grappige Franse titels
  const levels = [
    [0, 'Petit escargot', '🐌'],
    [100, 'Touriste perdu', '🧳'],
    [300, 'Mangeur de baguette', '🥖'],
    [600, 'Amateur de fromage', '🧀'],
    [1000, 'Cousin éloigné', '👋'],
    [1600, 'Neveu sympathique', '😊'],
    [2400, 'Invité au dîner', '🍷'],
    [3400, 'Champion du bavardage', '🗣️'],
    [4800, 'Presque Parisien', '🗼'],
    [6500, 'Membre de la famille', '👨‍👩‍👧'],
    [9000, 'Grand Chef du français', '👨‍🍳'],
  ];
  let i = 0;
  while (i + 1 < levels.length && xp >= levels[i + 1][0]) i++;
  const [min, name, emoji] = levels[i];
  const next = levels[i + 1]?.[0] ?? null;
  return { n: i + 1, name, emoji, min, next };
}

// ---- Fouten bijhouden ----
function mistakeKey(ex) {
  const clean = {};
  for (const k of Object.keys(ex).sort()) if (!k.startsWith('_')) clean[k] = ex[k];
  return JSON.stringify(clean);
}
export function addMistake(ex) {
  const key = mistakeKey(ex);
  const list = state.mistakes || (state.mistakes = []);
  const i = list.findIndex(m => m.key === key);
  if (i >= 0) { list[i].n++; list[i].at = Date.now(); }
  else list.push({ key, n: 1, at: Date.now() });
  if (list.length > 80) list.splice(0, list.length - 80);
  save();
}
export function removeMistake(ex) {
  const key = mistakeKey(ex);
  state.mistakes = (state.mistakes || []).filter(m => m.key !== key);
  save();
}
export function mistakes() {
  return (state.mistakes || []).map(m => { try { return { ...JSON.parse(m.key), _mistake: true }; } catch { return null; } }).filter(Boolean);
}

export function doneToday(obj) {
  const start = new Date(); start.setHours(0, 0, 0, 0);
  return Object.values(obj || {}).some(x => x && x.at >= start.getTime());
}
