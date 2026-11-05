const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['iPhone 13'], acceptDownloads: true });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://localhost:8765/');
  await p.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, settings: { reminder: { on: true, time: '00:00', days: ['MO','TU','WE','TH','FR','SA','SU'] } } })));
  await p.goto('http://localhost:8765/?r1#/'); await p.waitForTimeout(600);
  console.log('banner zichtbaar:', await p.locator('text=Tijd voor je Frans').count() > 0);
  await p.goto('http://localhost:8765/?r2#/profiel'); await p.waitForTimeout(500);
  await p.locator('#remcard').scrollIntoViewIfNeeded();
  await p.screenshot({ path: 'tests/shots/herinnering.png' });
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#remics')]);
  const path = await dl.path(); const txt = require('fs').readFileSync(path, 'utf8');
  console.log('ics:', dl.suggestedFilename(), '|', txt.split('\r\n').filter(l => /RRULE|DTSTART|TRIGGER/.test(l)).join(' | '));
  console.log(errs.length ? 'ERRORS ' + errs.join(' | ') : 'geen fouten');
  await b.close();
})();
