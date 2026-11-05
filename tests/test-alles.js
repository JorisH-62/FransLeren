// Alle schermen op meerdere toestellen + licht/donker: console-fouten en horizontaal scrollen
const { chromium, devices } = require('playwright');
const ROUTES = ['/', '/leerpad', '/woorden', '/woorden/set/familie', '/woorden/herhaal', '/verhalen', '/verhaal/minou', '/verhaal/minou/quiz',
  '/gesprekken', '/gesprek/aankomst', '/werkwoorden', '/werkwoorden/aller', '/werkwoorden-trainer', '/uitdrukkingen', '/uitspraak', '/profiel',
  '/zinnen', '/luisteren', '/spreken', '/familie', '/plan', '/vijf', '/toets/A1', '/spiekbriefje', '/fouten', '/welkom', '/mix'];
(async () => {
  const b = await chromium.launch();
  const lessons = await (async () => { const p = await b.newPage(); await p.goto('http://localhost:8765/'); const ids = await p.evaluate(async () => (await import('./js/data/lessons.js')).LESSONS.map(l => l.id)); await p.close(); return ids; })();
  const all = [...ROUTES, ...lessons.map(id => '/les/' + id)];
  const shotOnly = process.argv.includes('--shots');
  for (const [dev, scheme] of [['iPhone 13', 'light'], ['iPhone 13', 'dark'], ['iPhone SE', 'light'], ['Pixel 7', 'dark']]) {
    const ctx = await b.newContext({ ...devices[dev], colorScheme: scheme });
    const p = await ctx.newPage();
    const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto('http://localhost:8765/');
    await p.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, xp: 420, streak: 5, lessons: { 'a1-groeten': { done: true, stars: 3, at: Date.now() } }, plan: { start: '2026-11-01', checks: {} } })));
    const problems = [];
    let i = 0;
    for (const r of all) {
      await p.goto(`http://localhost:8765/?n=${i++}#${r}`);
      await p.waitForTimeout(r.startsWith('/les/') ? 150 : 450);
      const w = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, vw: window.innerWidth, txt: document.querySelector('#app').innerText.length }));
      if (w.sw > w.vw + 1) problems.push(`${r}: horizontaal scrollen (${w.sw} > ${w.vw})`);
      if (w.txt < 20) problems.push(`${r}: lege pagina?`);
      if (dev === 'iPhone 13' && scheme === 'light' && shotOnly && !r.startsWith('/les/')) await p.screenshot({ path: `shots/ip13${r.replace(/\//g, '_') || '_home'}.png` });
    }
    console.log(`${dev} (${scheme}): ${all.length} schermen, ${problems.length} problemen, ${errs.length} console-fouten`);
    problems.forEach(x => console.log('   ', x));
    [...new Set(errs)].slice(0, 5).forEach(x => console.log('    ERR', x));
    await ctx.close();
  }
  await b.close();
})();
