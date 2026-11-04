// Kleine hulpfuncties
import * as store from './store.js';

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Normaliseren voor vergelijken van antwoorden
export function norm(s, { accents = true } = {}) {
  let t = String(s ?? '').toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[«»“”"]/g, '')
    .replace(/\s*'\s*/g, "'")
    .replace(/[.,!?;:…¡¿()\-–—]/g, ' ')
    .replace(/œ/g, 'oe').replace(/æ/g, 'ae')
    .replace(/\s+/g, ' ').trim();
  if (!accents) t = t.normalize('NFD').replace(/[̀-ͯ]/g, '');
  return t;
}

// Vergelijk een antwoord met een of meer goede antwoorden.
// Geeft { ok, accentOnly, closest, typo }
export function check(input, answers) {
  const list = Array.isArray(answers) ? answers : [answers];
  const a = norm(input);
  for (const ans of list) if (norm(ans) === a) return { ok: true, closest: ans };
  const an = norm(input, { accents: false });
  for (const ans of list) if (norm(ans, { accents: false }) === an) return { ok: true, accentOnly: true, closest: ans };
  // kleine typfout (1 letter) in langere antwoorden toestaan
  for (const ans of list) {
    const target = norm(ans, { accents: false });
    if (target.length >= 8 && lev(an, target) === 1) return { ok: true, typo: true, closest: ans };
  }
  return { ok: false, closest: list[0] };
}

export function lev(a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

// Gelijkenis 0..1 (voor spraakherkenning)
export function similarity(a, b) {
  const x = norm(a, { accents: false }), y = norm(b, { accents: false });
  if (!x && !y) return 1;
  return 1 - lev(x, y) / Math.max(x.length, y.length);
}

let toastTimer;
export function toast(msg, ms = 2200) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), ms);
}

export function confetti(n = 70) {
  const box = document.createElement('div');
  box.className = 'confetti';
  const colors = ['#2b4cc4', '#e2484f', '#f4b400', '#1f9d63', '#7a4cc4', '#ffffff'];
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = 1.6 + Math.random() * 1.8 + 's';
    p.style.animationDelay = Math.random() * .4 + 's';
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 4000);
}

// Geluidjes met WebAudio (geen bestanden nodig)
let ctx;
export function sound(kind) {
  if (!store.setting('sounds')) return;
  try {
    ctx ||= new (window.AudioContext || window.webkitAudioContext)();
    const notes = {
      ok: [[660, 0], [880, .09]],
      bad: [[220, 0], [180, .12]],
      win: [[523, 0], [659, .1], [784, .2], [1047, .3]],
      tap: [[500, 0]],
    }[kind] || [];
    notes.forEach(([f, t]) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = kind === 'bad' ? 'sawtooth' : 'sine';
      o.frequency.value = f;
      const st = ctx.currentTime + t;
      g.gain.setValueAtTime(0.0001, st);
      g.gain.exponentialRampToValueAtTime(kind === 'bad' ? 0.05 : 0.12, st + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, st + 0.18);
      o.connect(g).connect(ctx.destination);
      o.start(st); o.stop(st + 0.2);
    });
  } catch { /* geen audio */ }
}

// Deterministische "dag-random" (zelfde woord van de dag hele dag)
export function dayIndex(len, salt = 0) {
  const d = new Date();
  const n = d.getFullYear() * 400 + d.getMonth() * 32 + d.getDate() + salt * 7919;
  return ((n * 2654435761) >>> 0) % len;
}

export function plural(n, one, many) { return `${n} ${n === 1 ? one : many}`; }
