const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['Pixel 7'] })).newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
  await p.goto('http://localhost:8765/#/');
  await p.waitForTimeout(500);
  const missing = await p.evaluate(async () => {
    const { STORIES } = await import('./js/data/stories.js');
    const { lookup } = await import('./js/data/dict.js');
    const out = {};
    const re = /(aujourd'hui|quelqu'un|[A-Za-zÀ-ÖØ-öø-ÿœŒ]+(?:-[A-Za-zÀ-ÖØ-öø-ÿœŒ]+)*'?)/gi;
    for (const s of STORIES) { const miss = new Set(); for (const pg of s.pages) for (const m of pg.fr.matchAll(re)) { const w = m[0]; if (!lookup(w, s.glossary) && !lookup(w.replace(/'$/, 'e'), s.glossary)) miss.add(w.toLowerCase()); } if (miss.size) out[s.id] = [...miss].join(' '); }
    return out;
  });
  console.log(JSON.stringify(missing, null, 1));
  for (const r of (process.argv[2] || '').split(',').filter(Boolean)) {
    await p.goto('http://localhost:8765/#' + r); await p.waitForTimeout(700);
    console.log(r, '→', (await p.locator('#app').innerText()).slice(0, 100).replace(/\n/g, ' '));
    if (process.argv[3]) await p.screenshot({ path: process.argv[3] + '/' + r.replace(/\//g, '_') + '.png' });
  }
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
