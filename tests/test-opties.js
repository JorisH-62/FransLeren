// Test voor optie-branches (statistieken / herinnering / sync / ai-gesprek): laadt routes met demo-voortgang op iPhone 13
const { chromium, devices } = require('playwright');
const routes = process.argv[2].split(',');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto('http://localhost:8765/');
  const day = n => { const d = new Date(Date.now() - n * 86400000); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  await p.evaluate(h => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, xp: 900, streak: 4, history: h,
    lessons: { 'a1-groeten': { done: true, stars: 3, best: 100 }, 'a1-etre': { done: true, stars: 1, best: 55 }, 'a1-avoir': { done: true, stars: 2, best: 80 } },
    stories: { minou: { read: true } }, dialogues: { aankomst: { done: true } }, tests: { A1: 70 } })), Object.fromEntries([...Array(60)].map((_, i) => [day(i), i % 3 ? 30 + (i % 7) * 5 : 0])));
  let i = 0;
  for (const r of routes) {
    await p.goto(`http://localhost:8765/?o=${i++}#${r}`); await p.waitForTimeout(600);
    const sw = await p.evaluate(() => document.documentElement.scrollWidth);
    console.log(r, '→', (await p.locator('#app').innerText()).slice(0, 90).replace(/\n/g, ' '), '| width', sw);
    await p.screenshot({ path: `tests/shots/optie${r.replace(/\//g, '_')}.png`, fullPage: true });
  }
  console.log(errs.length ? 'ERRORS ' + errs.join(' | ') : 'geen fouten');
  await b.close();
})();
