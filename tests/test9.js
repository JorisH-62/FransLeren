const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['iPhone SE'] })).newPage();
  await p.goto('http://localhost:8765/');
  await p.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true })));
  for (const id of ['b1-subjonctif', 'a1-bezit', 'a1-getallen', 'a2-pc-avoir']) {
    await p.goto('http://localhost:8765/?x=' + id + '#/les/' + id); await p.waitForTimeout(600);
    const over = await p.evaluate(() => {
      const out = [];
      document.querySelectorAll('#app *').forEach(el => { const r = el.getBoundingClientRect(); if (r.right > window.innerWidth + 1 && !el.closest('.table-wrap')) out.push(el.tagName + '.' + el.className + ' ' + Math.round(r.right)); });
      return { w: window.innerWidth, doc: document.documentElement.scrollWidth, out: out.slice(0, 5) };
    });
    console.log(id, JSON.stringify(over));
  }
  await p.goto('http://localhost:8765/?y#/les/b1-subjonctif'); await p.waitForTimeout(500);
  await p.locator('table').nth(1).scrollIntoViewIfNeeded();
  await p.screenshot({ path: 'shots/se_table.png' });
  await b.close();
})();
