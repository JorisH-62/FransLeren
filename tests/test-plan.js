// Test 6-maandenplan + 5-minutenmodus op iPhone 13
const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto('http://localhost:8765/');
  await p.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, lessons: { 'a1-groeten': { done: true, stars: 3, at: Date.now() } } })));
  await p.goto('http://localhost:8765/?a#/'); await p.waitForTimeout(700);
  await p.screenshot({ path: 'shots/plan-home-before.png' });
  await p.goto('http://localhost:8765/?b#/plan'); await p.waitForTimeout(500);
  await p.click('#start'); await p.waitForTimeout(400);
  await p.screenshot({ path: 'shots/plan-week1.png' });
  console.log((await p.locator('#app').innerText()).split('\n').slice(0, 14).join(' | '));
  await p.goto('http://localhost:8765/?c#/'); await p.waitForTimeout(700);
  await p.screenshot({ path: 'shots/plan-home-after.png' });
  await p.goto('http://localhost:8765/?d#/vijf'); await p.waitForTimeout(500);
  console.log('vijf:', (await p.locator('#ex-body').innerText()).slice(0, 80).replace(/\n/g, ' '), '| total', await p.locator('.ex-progress span').innerText());
  const over = await p.evaluate(() => document.documentElement.scrollWidth);
  console.log('scrollWidth', over, 'errors:', errs.join('; ') || 'none');
  await b.close();
})();
