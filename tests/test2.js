const { chromium, devices } = require('playwright');
(async () => {
  const dir = process.argv[2];
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['Pixel 7'] });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
  // Lesson: answer every exercise (wrong-ish), until result
  await p.goto('http://localhost:8765/#/les/a1-etre/oefen');
  await p.waitForTimeout(500);
  for (let n = 0; n < 40; n++) {
    if (await p.locator('.result').count()) break;
    const kind = await p.locator('.ex-kind').first().innerText().catch(() => '');
    if (await p.locator('#ex-body .opt').count() && !kind.includes('Koppel')) await p.locator('#ex-body .opt').first().click();
    else if (kind.includes('Koppel')) {
      const L = p.locator('#ml .opt'), R = p.locator('#mr .opt');
      const n2 = await L.count();
      for (let i = 0; i < n2; i++) { const id = await L.nth(i).getAttribute('data-i'); await L.nth(i).click(); await p.locator(`#mr .opt[data-i="${id}"]`).click(); await p.waitForTimeout(300); }
    }
    else if (await p.locator('input.answer').count()) await p.locator('input.answer').fill('suis');
    else if (await p.locator('.tiles-bank .wtile').count()) await p.locator('.tiles-bank .wtile').first().click();
    if (n === 2) await p.screenshot({ path: dir + '/ex.png' });
    const cb = p.locator('#checkbtn');
    if (await cb.isEnabled().catch(() => false)) await cb.click();
    await p.waitForTimeout(200);
    if (n === 2) await p.screenshot({ path: dir + '/fb.png' });
    if (await p.locator('#nextbtn').count()) await p.locator('#nextbtn').click();
    await p.waitForTimeout(200);
  }
  console.log('lesson result:', (await p.locator('#app').innerText()).slice(0, 120).replace(/\n/g, ' '));
  await p.screenshot({ path: dir + '/result.png' });
  // Story word tap
  await p.goto('http://localhost:8765/#/verhaal/vache');
  await p.waitForTimeout(600);
  await p.locator('.w[data-w="ascenseur"]').first().click();
  await p.waitForTimeout(300);
  console.log('popover:', await p.locator('#popover').innerText());
  await p.screenshot({ path: dir + '/popover.png' });
  // Unknown-ish words coverage check
  const missing = await p.evaluate(async () => {
    const { STORIES } = await import('./js/data/stories.js');
    const { lookup } = await import('./js/data/dict.js');
    const out = {};
    const re = /(aujourd'hui|quelqu'un|[A-Za-zÀ-ÖØ-öø-ÿœŒ]+(?:-[A-Za-zÀ-ÖØ-öø-ÿœŒ]+)*'?)/g;
    for (const s of STORIES) { const miss = new Set(); for (const pg of s.pages) for (const m of pg.fr.matchAll(re)) { const w = m[0]; if (!lookup(w, s.glossary) && !lookup(w.replace(/'$/, 'e'), s.glossary)) miss.add(w.toLowerCase()); } out[s.id] = [...miss].join(' '); }
    return out;
  });
  console.log(JSON.stringify(missing, null, 1));
  // Dialogue
  await p.goto('http://localhost:8765/#/gesprek/aankomst');
  await p.waitForTimeout(2500);
  await p.screenshot({ path: dir + '/dialog.png' });
  // cards
  await p.goto('http://localhost:8765/#/woorden/set/familie');
  await p.locator('#learn').click();
  await p.goto('http://localhost:8765/#/woorden/herhaal');
  await p.waitForTimeout(500);
  await p.locator('#flip').click();
  await p.waitForTimeout(600);
  await p.screenshot({ path: dir + '/card.png' });
  // verb trainer
  await p.goto('http://localhost:8765/#/werkwoorden-trainer');
  await p.waitForTimeout(400);
  console.log('verb ex:', (await p.locator('#ex-body').innerText()).replace(/\n/g, ' '));
  await p.goto('http://localhost:8765/#/mix');
  await p.waitForTimeout(400);
  console.log('mix ok:', await p.locator('#ex-body').count());
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
