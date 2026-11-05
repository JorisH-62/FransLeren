// Round-trip: code maken op 'telefoon', plakken op 'pc'
const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const phone = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
  const pc = await (await b.newContext()).newPage();
  const errs = []; [phone, pc].forEach(p => p.on('pageerror', e => errs.push(e.message)));
  await phone.goto('http://localhost:8765/');
  await phone.evaluate(() => { const c = {}; for (let i = 0; i < 300; i++) c['mot' + i] = { nl: 'woord ' + i, deck: 'x', box: i % 7, due: Date.now(), reps: 3, lapses: 0, added: Date.now() };
    localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, xp: 777, streak: 9, cards: c, lessons: { 'a1-etre': { done: true, stars: 2 } }, settings: { name: 'Joris' } })); });
  await phone.goto('http://localhost:8765/?s#/profiel'); await phone.waitForTimeout(500);
  phone.on('dialog', d => d.accept());
  await phone.click('#mkcode'); await phone.waitForTimeout(300);
  const code = await phone.locator('#codeout').inputValue();
  console.log('codelengte:', code.length, 'tekens (300 kaarten + voortgang)');
  pc.on('dialog', d => d.accept());
  await pc.goto('http://localhost:8765/'); await pc.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true })));
  await pc.goto('http://localhost:8765/?p#/profiel'); await pc.waitForTimeout(500);
  await pc.fill('#codein', code); await pc.click('#usecode'); await pc.waitForTimeout(500);
  const st = await pc.evaluate(() => JSON.parse(localStorage.getItem('fransleren.v1')));
  console.log('na import op pc:', 'xp', st.xp, '| kaarten', Object.keys(st.cards).length, '| naam', st.settings.name, '| les', !!st.lessons['a1-etre']);
  console.log(st.xp === 777 && Object.keys(st.cards).length === 300 ? '✅ round-trip ok' : '❌ mismatch');
  console.log(errs.length ? 'ERRORS ' + errs.join(' | ') : 'geen fouten');
  await b.close();
})();
