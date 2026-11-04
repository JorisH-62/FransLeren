const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['Pixel 7'] })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://localhost:8765/');
  await p.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, xp: 120, streak: 2, lessons: { 'a1-groeten': { done: true, stars: 2, at: Date.now() } } })));
  await p.goto('http://localhost:8765/?v=2#/'); await p.waitForTimeout(800);
  await p.screenshot({ path: 'shots/plan.png', fullPage: true });
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
