// Een complete leerdag als nieuwe gebruiker op iPhone 13
const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  const step = async (name, fn) => { try { await fn(); console.log('✅', name); } catch (e) { console.log('❌', name, e.message.split('\n')[0]); } };
  const B = 'http://localhost:8765/';
  // Generieke oefening-doorloper: klik iets, controleer, verder
  const playExercises = async (max = 60) => {
    for (let n = 0; n < max; n++) {
      if (await p.locator('.result').count()) return true;
      const body = p.locator('#ex-body');
      if (await body.locator('.opt').count() && !(await body.locator('#ml').count())) await body.locator('.opt').first().click();
      else if (await body.locator('#ml').count()) {
        const L = body.locator('#ml .opt'); const k = await L.count();
        for (let i = 0; i < k; i++) { const id = await L.nth(i).getAttribute('data-i'); await L.nth(i).click(); await body.locator(`#mr .opt[data-i="${id}"]`).click(); await p.waitForTimeout(80); }
      } else if (await body.locator('input.answer').count()) await body.locator('input.answer').fill('test');
      else if (await body.locator('.tiles-bank .wtile').count()) await body.locator('.tiles-bank .wtile').first().click();
      const cb = p.locator('#checkbtn'); if (await cb.count() && await cb.isEnabled()) await cb.click();
      await p.waitForTimeout(120);
      if (await p.locator('#nextbtn').count()) await p.locator('#nextbtn').click();
      await p.waitForTimeout(120);
    }
    return !!(await p.locator('.result').count());
  };
  await step('Welkomstscherm bij eerste bezoek', async () => {
    await p.goto(B); await p.waitForTimeout(600);
    if (!(await p.evaluate(() => location.hash)).includes('welkom')) throw new Error('geen welkom');
    await p.fill('#name', 'Joris'); await p.locator('[data-start="A1"]').click(); await p.waitForTimeout(500);
  });
  await step('6-maandenplan starten', async () => {
    await p.goto(B + '?1#/plan'); await p.waitForTimeout(400); await p.click('#start'); await p.waitForTimeout(300);
  });
  await step('Les 1 doen (theorie → oefeningen → resultaat)', async () => {
    await p.goto(B + '?2#/les/a1-groeten'); await p.waitForTimeout(400);
    await p.locator('a[href="#/les/a1-groeten/oefen"]').click(); await p.waitForTimeout(300);
    if (!(await playExercises())) throw new Error('geen resultaatscherm');
  });
  await step('Woordenset leren + kaarten herhalen', async () => {
    await p.goto(B + '?3#/woorden/set/basis'); await p.waitForTimeout(400); await p.click('#learn'); await p.waitForTimeout(300);
    await p.goto(B + '?4#/woorden/herhaal'); await p.waitForTimeout(400);
    for (let i = 0; i < 80; i++) {
      if (await p.locator('.result').count()) break;
      if (await p.locator('#flip').count()) await p.click('#flip');
      await p.waitForTimeout(80);
      const g = p.locator('[data-g="2"]'); if (await g.count()) await g.click();
      await p.waitForTimeout(60);
    }
    if (!(await p.locator('.result').count())) throw new Error('herhalen niet afgerond');
  });
  await step('Verhaal lezen: woord aantikken + quiz', async () => {
    await p.goto(B + '?5#/verhaal/minou'); await p.waitForTimeout(600);
    await p.locator('.w[data-w="chien"]').first().click(); await p.waitForTimeout(200);
    const pop = await p.locator('#popover').innerText(); if (!pop.includes('hond')) throw new Error('popover: ' + pop);
    await p.click('#finish'); await p.waitForTimeout(300);
    if (!(await playExercises())) throw new Error('quiz niet afgerond');
  });
  await step('Gesprek voeren', async () => {
    await p.goto(B + '?6#/gesprek/aankomst'); await p.waitForTimeout(300);
    for (let i = 0; i < 200; i++) {
      if (await p.locator('text=Gesprek geslaagd').count()) break;
      const o = p.locator('#input .opt'); if (await o.count()) { await o.first().click(); continue; }
      const s = p.locator('#skip'); if (await s.count()) { await s.click(); continue; }
      await p.waitForTimeout(200);
    }
    if (!(await p.locator('text=Gesprek geslaagd').count())) throw new Error('niet afgerond');
  });
  await step('Planvoortgang bijgewerkt', async () => {
    await p.goto(B + '?7#/plan'); await p.waitForTimeout(400);
    const t = await p.locator('.card').nth(1).innerText();
    const m = t.match(/(\d)\/(\d)/); console.log('    week 1:', m && m[0]);
    if (!m || +m[1] < 4) throw new Error('verwacht ≥4 taken af');
  });
  await step('Startpagina na een leerdag', async () => {
    await p.goto(B + '?8#/'); await p.waitForTimeout(600);
    const st = await p.evaluate(() => JSON.parse(localStorage.getItem('fransleren.v1')));
    console.log(`    XP ${st.xp}, streak ${st.streak}, kaarten ${Object.keys(st.cards).length}, badges ${Object.keys(st.badges).join(', ')}`);
    await p.screenshot({ path: 'shots/leerdag-home.png' });
  });
  console.log(errs.length ? 'ERRORS: ' + [...new Set(errs)].join(' | ') : 'geen console-fouten');
  await b.close();
})();
