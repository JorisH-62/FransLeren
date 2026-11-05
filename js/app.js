// FransLeren — router en app-schil
import * as store from './store.js';
import { $, $$, esc } from './util.js';
import * as speech from './speech.js';
import * as badges from './badges.js';
import { LESSONS } from './data/lessons.js';

badges.setLessonIndex(LESSONS);

const routes = [
  [/^\/$/, () => import('./views/home.js'), 'home'],
  [/^\/leerpad$/, () => import('./views/path.js'), 'leerpad'],
  [/^\/les\/([\w-]+)$/, () => import('./views/lesson.js'), 'leerpad'],
  [/^\/les\/([\w-]+)\/oefen$/, () => import('./views/lesson.js'), 'leerpad', { practice: true }],
  [/^\/woorden$/, () => import('./views/cards.js'), 'woorden'],
  [/^\/woorden\/herhaal(?:\/([\w-]+))?$/, () => import('./views/cards.js'), 'woorden', { review: true }],
  [/^\/woorden\/set\/([\w-]+)$/, () => import('./views/cards.js'), 'woorden', { deck: true }],
  [/^\/woorden\/quiz\/([\w-]+)$/, () => import('./views/cards.js'), 'woorden', { quiz: true }],
  [/^\/verhalen$/, () => import('./views/stories.js'), 'verhalen'],
  [/^\/verhaal\/([\w-]+)$/, () => import('./views/stories.js'), 'verhalen', { read: true }],
  [/^\/verhaal\/([\w-]+)\/quiz$/, () => import('./views/stories.js'), 'verhalen', { quiz: true }],
  [/^\/gesprekken$/, () => import('./views/dialogues.js'), 'gesprekken'],
  [/^\/gesprek\/([\w-]+)$/, () => import('./views/dialogues.js'), 'gesprekken', { play: true }],
  [/^\/werkwoorden$/, () => import('./views/verbs.js'), 'home'],
  [/^\/werkwoorden\/([\w-]+)$/, () => import('./views/verbs.js'), 'home', { verb: true }],
  [/^\/werkwoorden-trainer$/, () => import('./views/verbs.js'), 'home', { train: true }],
  [/^\/uitdrukkingen$/, () => import('./views/idioms.js'), 'home'],
  [/^\/uitspraak$/, () => import('./views/pronunciation.js'), 'home'],
  [/^\/profiel$/, () => import('./views/profile.js'), 'home'],
  [/^\/mix$/, () => import('./views/mix.js'), 'home'],
  [/^\/zinnen$/, () => import('./views/phrases.js'), 'home'],
  [/^\/toets\/(A1|A2|B1)$/, () => import('./views/test.js'), 'leerpad'],
  [/^\/spreken$/, () => import('./views/speaking.js'), 'gesprekken'],
  [/^\/familie$/, () => import('./views/family.js'), 'home'],
  [/^\/statistieken$/, () => import('./views/stats.js'), 'home'],
  [/^\/plan$/, () => import('./views/plan.js'), 'home'],
  [/^\/vijf$/, () => import('./views/quick.js'), 'home'],
  [/^\/spiekbriefje$/, () => import('./views/cheatsheet.js'), 'home'],
  [/^\/welkom$/, () => import('./views/welcome.js'), 'home'],
  [/^\/fouten$/, () => import('./views/mistakes.js'), 'home'],
  [/^\/luisteren$/, () => import('./views/listening.js'), 'home'],
];

const app = $('#app');
let current = null;

async function route() {
  const hash = location.hash.replace(/^#/, '') || '/';
  speech.stop();
  closePopover();
  document.body.classList.remove('in-exercise');
  $('.feedback')?.remove();
  current?.destroy?.();
  current = null;
  app.onclick = null;
  app.onkeydown = null;

  for (const [re, loader, tab, opts] of routes) {
    const m = hash.match(re);
    if (!m) continue;
    $$('#tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
    try {
      const mod = await loader();
      app.innerHTML = '';
      app.className = 'view-enter';
      current = await mod.render(app, m.slice(1), opts || {}) || null;
      // animatie opnieuw starten
      void app.offsetWidth;
    } catch (err) {
      console.error(err);
      app.innerHTML = `<div class="card"><h2>Oeps 🐌💥</h2><p>Er ging iets mis bij het laden.</p><pre class="small muted" style="white-space:pre-wrap">${esc(err.message)}</pre><a class="btn" href="#/">Naar start</a></div>`;
    }
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
    return;
  }
  location.hash = '#/';
}

function renderTopstats() {
  const s = store.get();
  const lvl = store.level();
  $('#topstats').innerHTML = `
    <a href="#/profiel" style="display:flex;gap:10px;text-decoration:none;color:inherit" aria-label="Profiel">
      <span title="Dagen op rij">🔥 ${s.streak}</span>
      <span title="Ervaringspunten">⭐ ${s.xp}</span>
      <span title="${esc(lvl.name)}">${lvl.emoji}</span>
    </a>`;
}

// ---- Popover voor woord-vertalingen e.d. ----
export function openPopover(anchor, html) {
  const pop = $('#popover');
  pop.innerHTML = html;
  pop.hidden = false;
  const r = anchor.getBoundingClientRect();
  const pw = Math.min(320, window.innerWidth - 32);
  let left = Math.max(16, Math.min(r.left + r.width / 2 - pw / 2, window.innerWidth - pw - 16));
  pop.style.width = pw + 'px';
  pop.style.left = left + 'px';
  const ph = pop.offsetHeight;
  let top = r.bottom + 8;
  if (top + ph > window.innerHeight - 80) top = Math.max(70, r.top - ph - 8);
  pop.style.top = top + 'px';
}
export function closePopover() {
  const pop = $('#popover');
  if (pop) pop.hidden = true;
  $$('.w.active').forEach(w => w.classList.remove('active'));
}
document.addEventListener('click', e => {
  const pop = $('#popover');
  if (!pop.hidden && !pop.contains(e.target) && !e.target.closest('.w')) closePopover();
});
window.addEventListener('scroll', () => { /* popover blijft staan */ }, { passive: true });

// ---- Thema ----
function applyTheme() {
  const t = store.setting('theme');
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
  else delete document.documentElement.dataset.theme;
}

store.rollDay();
applyTheme();
renderTopstats();
store.onChange(() => { renderTopstats(); applyTheme(); badges.checkAll(); });
window.addEventListener('hashchange', route);
// Link naar dezelfde pagina (bv. "nog een keer") → opnieuw laden
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (a && a.getAttribute('href') === location.hash && !e.defaultPrevented) { e.preventDefault(); route(); }
});
route();

// ---- Offline (service worker) ----
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
