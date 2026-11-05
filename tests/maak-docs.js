// Maakt screenshots (docs/img) en een demovideo (docs/demo.webm) op iPhone 13-formaat
const { chromium, devices } = require('playwright');
const fs = require('fs');
const B = 'http://localhost:8765/';
const DEMO = {
  onboarded: true, xp: 1240, streak: 12, todayXp: 35, lastDay: new Date().toISOString().slice(0, 10),
  settings: { name: 'Joris', rate: 0.9, sounds: false, theme: 'auto' },
  lessons: Object.fromEntries(['a1-groeten', 'a1-lidwoorden', 'a1-etre', 'a1-cest-ilest', 'a1-avoir', 'a1-er'].map((id, i) => [id, { done: true, stars: 3 - (i % 2), at: Date.now() - i * 86400000 }])),
  stories: { minou: { read: true, quiz: 100, at: Date.now() }, lunettes: { read: true, quiz: 80, at: Date.now() - 86400000 } },
  dialogues: { aankomst: { done: true, stars: 3, at: Date.now() }, tafel: { done: true, stars: 2 } },
  badges: { 'first-lesson': 1, 'five-lessons': 1, 'story-1': 1, 'dialogue-1': 1, 'streak-3': 1, 'streak-7': 1, 'cards-25': 1, 'perfect': 1 },
  plan: { start: new Date(Date.now() - 16 * 86400000).toISOString().slice(0, 10), checks: {} },
  history: Object.fromEntries([...Array(14)].map((_, i) => [new Date(Date.now() - i * 86400000).toISOString().slice(0, 10), [40, 55, 20, 0, 60, 35, 50, 45, 0, 30, 70, 25, 40, 55][i]])),
};
(async () => {
  const b = await chromium.launch();
  // --- Screenshots ---
  const ctx = await b.newContext({ ...devices['iPhone 13'], deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto(B);
  await p.evaluate(d => localStorage.setItem('fransleren.v1', JSON.stringify(d)), DEMO);
  // woorden toevoegen via de app zelf
  await p.goto(B + '?w#/woorden/set/familie'); await p.waitForTimeout(400); await p.click('#learn');
  const shots = [
    ['01-start', '/'], ['02-plan', '/plan'], ['03-leerpad', '/leerpad'], ['04-les', '/les/a1-avoir'],
    ['06-verhalen', '/verhalen'], ['07-verhaal', '/verhaal/dragon'], ['09-woorden', '/woorden'],
    ['11-profiel', '/profiel'],
  ];
  let n = 0;
  for (const [name, r] of shots) {
    await p.goto(`${B}?s=${n++}#${r}`); await p.waitForTimeout(800);
    await p.screenshot({ path: `docs/img/${name}.png` });
  }
  // oefening
  await p.goto(B + '?e#/les/a1-etre/oefen'); await p.waitForTimeout(500);
  const o = p.locator('#ex-body .opt'); if (await o.count()) await o.first().click();
  await p.screenshot({ path: 'docs/img/05-oefening.png' });
  // woord aantikken in verhaal
  await p.goto(B + '?t#/verhaal/dragon'); await p.waitForTimeout(700);
  await p.locator('.w[data-w="dragon"]').first().scrollIntoViewIfNeeded();
  await p.locator('.w[data-w="dragon"]').first().click(); await p.waitForTimeout(300);
  await p.screenshot({ path: 'docs/img/08-tik-vertaling.png' });
  // gesprek
  await p.goto(B + '?g#/gesprek/tafel'); await p.waitForTimeout(400);
  await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('fransleren.v1')); s.settings.dialogSpeak = false; localStorage.setItem('fransleren.v1', JSON.stringify(s)); });
  await p.goto(B + '?g2#/gesprek/tafel'); await p.waitForTimeout(3500);
  await p.screenshot({ path: 'docs/img/10-gesprek.png' });
  await ctx.close();

  // --- Demovideo ---
  const vctx = await b.newContext({ ...devices['iPhone 13'], deviceScaleFactor: 1, recordVideo: { dir: 'docs/_video', size: { width: 390, height: 844 } } });
  const v = await vctx.newPage();
  await v.goto(B); await v.evaluate(d => { d.settings.dialogSpeak = false; localStorage.setItem('fransleren.v1', JSON.stringify(d)); }, DEMO);
  const pause = ms => v.waitForTimeout(ms);
  await v.goto(B + '?v1#/'); await pause(2500);
  await v.mouse.wheel(0, 500); await pause(1500); await v.mouse.wheel(0, -500); await pause(800);
  await v.goto(B + '?v2#/plan'); await pause(2500); await v.mouse.wheel(0, 400); await pause(1500);
  await v.goto(B + '?v3#/les/a1-avoir'); await pause(2000); await v.mouse.wheel(0, 700); await pause(1500);
  await v.goto(B + '?v4#/les/a1-avoir/oefen'); await pause(1500);
  for (let i = 0; i < 3; i++) {
    const opts = v.locator('#ex-body .opt'); if (await opts.count()) await opts.first().click(); else if (await v.locator('input.answer').count()) await v.locator('input.answer').fill('ai');
    await pause(700); const cb = v.locator('#checkbtn'); if (await cb.isEnabled()) await cb.click(); await pause(1500);
    if (await v.locator('#nextbtn').count()) await v.locator('#nextbtn').click(); await pause(500);
  }
  await v.goto(B + '?v5#/verhalen'); await pause(2000);
  await v.goto(B + '?v6#/verhaal/minou'); await pause(1500); await v.mouse.wheel(0, 650); await pause(1000);
  await v.locator('.w[data-w="chien"]').first().click(); await pause(2000);
  await v.locator('[data-nl="0"]').click().catch(() => {}); await pause(1500);
  await v.goto(B + '?v7#/gesprek/aankomst'); await pause(3500);
  const opt = v.locator('#input .opt'); if (await opt.count()) { await opt.first().click(); await pause(3500); }
  await v.goto(B + '?v8#/woorden/herhaal'); await pause(1500);
  if (await v.locator('#flip').count()) { await v.click('#flip'); await pause(2000); }
  await v.goto(B + '?v9#/'); await pause(1500);
  await vctx.close();
  const f = fs.readdirSync('docs/_video').find(x => x.endsWith('.webm'));
  fs.renameSync('docs/_video/' + f, 'docs/demo.webm'); fs.rmSync('docs/_video', { recursive: true });
  await b.close();
  console.log('klaar');
})();
