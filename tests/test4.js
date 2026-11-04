const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['Pixel 7'] })).newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
  await p.goto('http://localhost:8765/#/');
  await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('fransleren.v1') || '{}'); s.settings = { ...(s.settings || {}), dialogSpeak: false, gender: 'f', name: 'Anna' }; localStorage.setItem('fransleren.v1', JSON.stringify(s)); });
  const ids = await p.evaluate(async () => (await import('./js/data/dialogues.js')).DIALOGUES.map(d => d.id));
  for (const id of ids) {
    await p.goto('http://localhost:8765/#/gesprek/' + id);
    await p.reload();
    let done = false;
    for (let i = 0; i < 120 && !done; i++) {
      await p.waitForTimeout(250);
      if (await p.locator('text=Gesprek geslaagd').count()) { done = true; break; }
      const opts = p.locator('#input .opt');
      if (await opts.count()) { await opts.first().click(); continue; }
      const skip = p.locator('#skip');
      if (await skip.count()) { await skip.click(); continue; }
    }
    const txt = await p.locator('#chat').innerText();
    console.log(id, done ? 'OK' : 'STUCK', txt.includes('Joris') ? '(Joris!)' : '', /petit-fils|mon grand\b/.test(txt) ? '(male form!)' : '');
  }
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
