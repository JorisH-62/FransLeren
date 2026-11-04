const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['Pixel 7'] })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://localhost:8765/');
  await p.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true })));
  await p.goto('http://localhost:8765/?f#/familie'); await p.waitForTimeout(500);
  await p.fill('#name', 'Sylvie'); await p.selectOption('#rel', 'belle-mère'); await p.fill('#city', 'Lyon'); await p.fill('#age', '64'); await p.click('#add');
  await p.fill('#name', 'Bernard'); await p.selectOption('#rel', 'oncle'); await p.click('#add');
  await p.waitForTimeout(300);
  console.log((await p.locator('#app').innerText()).split('\n').filter(l => /présente|appelle|habite|ans\.|c'est/.test(l)).join('\n'));
  await p.screenshot({ path: 'shots/family.png' });
  await p.goto('http://localhost:8765/?s#/spreken'); await p.waitForTimeout(400);
  await p.click('#go'); await p.waitForTimeout(400);
  console.log('speak:', (await p.locator('#ex-body').innerText()).slice(0, 80).replace(/\n/g, ' '));
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
