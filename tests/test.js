const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['Pixel 7'] });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
  const routes = ['/', '/leerpad', '/les/a1-groeten', '/les/b1-subjonctif', '/woorden', '/woorden/set/familie', '/verhalen', '/verhaal/minou', '/verhaal/diner', '/gesprekken', '/werkwoorden', '/werkwoorden/aller', '/uitdrukkingen', '/uitspraak', '/profiel'];
  const dir = process.argv[2];
  for (const r of routes) {
    await p.goto('http://localhost:8765/#' + r);
    await p.waitForTimeout(700);
    const name = r.replace(/\//g, '_') || 'home';
    await p.screenshot({ path: `${dir}/${name}.png`, fullPage: false });
    const h = await p.evaluate(() => document.querySelector('#app').innerText.slice(0, 80).replace(/\n/g, ' '));
    console.log(r, '→', h);
  }
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
