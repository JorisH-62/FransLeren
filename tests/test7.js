const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['Pixel 7'], colorScheme: 'dark' });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  await p.goto('http://localhost:8765/');
  await p.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, xp: 340, streak: 4 })));
  for (const r of ['/', '/spiekbriefje', '/les/a2-imparfait', '/verhaal/pirate']) {
    await p.goto('http://localhost:8765/#' + r); await p.reload(); await p.waitForTimeout(700);
    await p.screenshot({ path: 'shots/dark' + r.replace(/\//g, '_') + '.png' });
  }
  await p.locator('#addall').click(); await p.waitForTimeout(300);
  console.log('toast:', await p.locator('#toast').innerText());
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
