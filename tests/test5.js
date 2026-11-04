const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['Pixel 7'] })).newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  await p.goto('http://localhost:8765/#/profiel');
  await p.evaluate(() => { localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, settings: { sounds: false, rate: 3 } })); });
  const lessons = await p.evaluate(async () => (await import('./js/data/lessons.js')).LESSONS.map(l => ({ id: l.id, ex: l.exercises })));
  let fails = 0, total = 0;
  for (const l of lessons) {
    // Run each exercise individually through the engine with the correct answer
    await p.goto('http://localhost:8765/#/profiel'); await p.waitForTimeout(150);
    for (const e of l.ex) {
      if (e.type === 'speak') continue;
      total++;
      await p.evaluate(async ex => {
        const { runExercises } = await import('./js/exercise.js');
        window.__done = false;
        runExercises(document.querySelector('#app'), [ex], { onFinish: r => { window.__done = r; } });
      }, e);
      await p.waitForTimeout(80);
      const t = e.type;
      if (t === 'mc' || t === 'listen') {
        const target = e.options[0];
        const opts = p.locator('#ex-body .opt');
        const n = await opts.count();
        for (let i = 0; i < n; i++) { const tx = (await opts.nth(i).innerText()).replace(/^\d+\s*/, '').trim(); if (tx === target.replace(/<[^>]+>/g,'').trim()) { await opts.nth(i).click(); break; } }
      } else if (t === 'fill' || t === 'translate') {
        await p.locator('input.answer').fill(Array.isArray(e.answer) ? e.answer[0] : e.answer);
      } else if (t === 'dictee') {
        await p.locator('input.answer').fill(e.fr);
      } else if (t === 'order') {
        const words = e.fr.replace(/[.,!?;:«»]/g, ' ').split(/\s+/).filter(Boolean);
        for (const w of words) {
          const tiles = p.locator('.tiles-bank .wtile:not(.used)');
          const n = await tiles.count();
          for (let i = 0; i < n; i++) if ((await tiles.nth(i).innerText()) === w) { await tiles.nth(i).click(); break; }
        }
      } else if (t === 'match') {
        for (let i = 0; i < e.pairs.length; i++) { await p.locator(`#ml .opt[data-i="${i}"]`).click(); await p.locator(`#mr .opt[data-i="${i}"]`).click(); await p.waitForTimeout(60); }
        await p.waitForTimeout(200);
      }
      if (t !== 'match') { const cb = p.locator('#checkbtn'); if (await cb.isEnabled()) await cb.click(); }
      await p.waitForTimeout(80);
      const ok = await p.locator('.feedback.ok').count();
      if (!ok) { fails++; console.log('FAIL', l.id, t, JSON.stringify(e).slice(0, 140)); }
      await p.evaluate(() => { document.querySelector('.feedback')?.remove(); document.body.classList.remove('in-exercise'); });
    }
  }
  console.log(`checked ${total}, failed ${fails}`);
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
