const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['Pixel 7'] })).newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  await p.goto('http://localhost:8765/');
  await p.waitForTimeout(600);
  console.log('first visit hash:', await p.evaluate(() => location.hash));
  await p.screenshot({ path: process.argv[2] + '/welcome.png' });
  await p.fill('#name', 'Joris');
  await p.locator('[data-start="test"]').click();
  for (let i = 0; i < 40; i++) {
    if (await p.locator('.result').count()) break;
    const o = p.locator('#ex-body .opt'); if (await o.count()) await o.nth(i % 2).click();
    await p.locator('#checkbtn').click(); await p.waitForTimeout(100);
    if (await p.locator('#nextbtn').count()) await p.locator('#nextbtn').click();
    await p.waitForTimeout(100);
  }
  console.log('placement:', (await p.locator('.result').innerText()).replace(/\n/g, ' '));
  await p.locator('[data-u]').first().click();
  await p.waitForTimeout(600);
  console.log('home has mistakes card:', await p.locator('a[href="#/fouten"]').count());
  await p.screenshot({ path: process.argv[2] + '/home2.png' });
  await p.goto('http://localhost:8765/#/fouten'); await p.waitForTimeout(400);
  console.log('mistakes view:', (await p.locator('#app').innerText()).slice(0, 80).replace(/\n/g, ' '));
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
