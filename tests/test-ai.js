// AI-gesprek testen met een nep-API (geen echte sleutel of kosten)
const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  const seen = [];
  await p.route('https://api.anthropic.com/v1/messages', async route => {
    const req = route.request(); const body = JSON.parse(req.postData()); seen.push({ h: req.headers(), body });
    const n = body.messages.length;
    const text = n === 1 ? 'Bonjour ! Tu as faim ? Le repas est prêt !' : 'Ah, super ! Tu veux du fromage ?\n💡 Tip: je zei "je suis faim", maar het is "j\'ai faim".';
    await route.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify({ content: [{ type: 'text', text }] }) });
  });
  await p.goto('http://localhost:8765/');
  await p.evaluate(() => localStorage.setItem('fransleren.v1', JSON.stringify({ onboarded: true, settings: { name: 'Joris' } })));
  await p.goto('http://localhost:8765/?a#/ai-gesprek'); await p.waitForTimeout(500);
  console.log('start-knop uit zonder sleutel:', await p.locator('#go').isDisabled());
  await p.fill('#key', 'sk-ant-test-123'); await p.click('#savekey'); await p.waitForTimeout(300);
  await p.click('#go'); await p.waitForTimeout(800);
  await p.fill('#msg', 'Oui, je suis faim !'); await p.click('#send'); await p.waitForTimeout(800);
  await p.screenshot({ path: 'tests/shots/ai-gesprek.png' });
  const txt = await p.locator('#chat').innerText();
  console.log('chat bevat antwoord + tip:', txt.includes('Tu veux du fromage') && txt.includes('💡 Tip'));
  const last = seen[seen.length - 1];
  console.log('headers ok:', last.h['x-api-key'] === 'sk-ant-test-123' && last.h['anthropic-dangerous-direct-browser-access'] === 'true', '| model', last.body.model,
    '| rollen', last.body.messages.map(m => m[0] || m.role).join(','), '| naam in prompt', last.body.system.includes('Joris'));
  console.log(errs.length ? 'ERRORS ' + errs.join(' | ') : 'geen fouten');
  await b.close();
})();
