// AI-gesprekspartner (eigen Anthropic API-sleutel, alleen lokaal bewaard)
import * as store from '../store.js';
import { esc, toast, $, $$ } from '../util.js';
import * as speech from '../speech.js';

const MODEL = 'claude-haiku-5-5';
const KEY = 'fransleren.apikey';
const START = '(Begin het gesprek met een korte begroeting en een vraag.)';
const SCENES = {
  diner: { t: '🍽️ Aan tafel bij de schoonfamilie', who: 'Sylvie, je schoonmoeder', s: 'Het is zondagmiddag, jullie zitten aan tafel. Zij heeft een stoofpot gemaakt.' },
  telefoon: { t: '📞 Bellen met oma', who: 'Mamie Jeanne (89), de oma van je partner', s: 'Je belt oma om te vragen hoe het gaat. Ze is lief, een beetje doof en vertelt graag over vroeger.' },
  weekend: { t: '🗓️ Over je weekend', who: 'Julie, de nicht van je partner (32)', s: 'Julie belt via video en wil alles weten over je weekend.' },
  vrij: { t: '💬 Vrij gesprek', who: 'Alain, je schoonvader', s: 'Een ontspannen gesprek over van alles: werk, hobby\'s, Nederland, het weer, eten.' },
};

const getKey = () => { try { return localStorage.getItem(KEY) || ''; } catch { return ''; } };
const setKey = k => { try { if (k) localStorage.setItem(KEY, k); else localStorage.removeItem(KEY); } catch { /* privémodus */ } };

function systemPrompt(level, scene, name) {
  const sc = SCENES[scene];
  const style = level === 'A1' ? 'heel korte, eenvoudige zinnen in de tegenwoordige tijd'
    : level === 'A2' ? 'korte zinnen, ook passé composé en futur proche' : 'natuurlijk Frans met wat spreektaal, maar duidelijk';
  return `Je speelt ${sc.who} in een Frans oefengesprek met ${name || 'de leerling'}, een Nederlander die Frans leert (niveau ${level}). Situatie: ${sc.s}
Regels:
- Spreek ALLEEN Frans in je rol, passend bij niveau ${level}: ${style}.
- Maximaal 2-3 zinnen per beurt en eindig meestal met een vraag, zodat het gesprek doorgaat.
- Wees warm, grappig en geduldig, als een echt familielid.
- Maakt de leerling een fout, geef dan ná je antwoord op een nieuwe regel een korte correctie in het Nederlands, zo: "💡 Tip: ..." (alleen bij echte fouten, max. 1 zin).
- Begrijpt de leerling iets niet of schrijft hij Nederlands, help dan kort in het Nederlands en ga daarna in het Frans verder.`;
}

export function render(root) {
  const key = getKey();
  const level = store.setting('aiLevel') || 'A1';
  const scene = store.setting('aiScene') || 'diner';
  root.innerHTML = `
    <a href="#/gesprekken" class="small">‹ Gesprekken</a>
    <h1>🤖 Vrij gesprek (AI)</h1>
    <p class="muted">Praat vrij in het Frans met een AI-familielid. Het reageert op wat jij zegt en geeft tips bij fouten.</p>
    ${key ? '' : `
    <div class="card theory">
      <h3 style="margin-top:0">🔑 Eenmalig instellen</h3>
      <ol class="small">
        <li>Maak een account op <b>console.anthropic.com</b> en zet er wat tegoed op (bv. €5).</li>
        <li>Maak een API-sleutel aan (begint met <code>sk-ant-</code>) en plak die hieronder.</li>
      </ol>
      <p class="small"><b>Kosten:</b> een gesprek van 10 beurten kost ongeveer <b>1 cent</b> (model Haiku). Met €5 voer je honderden gesprekken.</p>
      <p class="small muted">De sleutel wordt alleen in deze browser bewaard en alleen naar api.anthropic.com gestuurd.</p>
      <input class="answer" id="key" placeholder="sk-ant-…" autocomplete="off" autocapitalize="off" spellcheck="false">
      <button class="btn block" id="savekey" style="margin-top:10px">Bewaar sleutel</button>
    </div>`}
    <div class="card stack">
      <b>Niveau</b>
      <div class="segmented" id="lvl">${['A1', 'A2', 'B1'].map(l => `<button data-k="${l}" class="${l === level ? 'on' : ''}">${l}</button>`).join('')}</div>
      <b>Situatie</b>
      <select id="scene" style="width:100%">${Object.entries(SCENES).map(([k, v]) => `<option value="${k}" ${k === scene ? 'selected' : ''}>${esc(v.t)}</option>`).join('')}</select>
      <button class="btn block green" id="go" ${key ? '' : 'disabled'}>💬 Start gesprek</button>
      ${key ? '<button class="btn small ghost" id="forget">🗑️ Vergeet mijn sleutel</button>' : ''}
    </div>`;
  $$('#lvl button', root).forEach(b => b.onclick = () => {
    $$('#lvl button', root).forEach(x => x.classList.remove('on')); b.classList.add('on'); store.setting('aiLevel', b.dataset.k);
  });
  $('#scene', root).onchange = e => store.setting('aiScene', e.target.value);
  const sk = $('#savekey', root);
  if (sk) sk.onclick = () => {
    const v = $('#key', root).value.trim();
    if (!v.startsWith('sk-')) return toast('Dat lijkt geen geldige sleutel');
    setKey(v); toast('Sleutel bewaard 🔑'); render(root);
  };
  const fg = $('#forget', root);
  if (fg) fg.onclick = () => { if (confirm('Sleutel verwijderen van dit apparaat?')) { setKey(''); render(root); } };
  $('#go', root).onclick = () => chat(root, store.setting('aiLevel') || 'A1', store.setting('aiScene') || 'diner');
}

async function callClaude(system, messages) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': getKey(),
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({ model: MODEL, max_tokens: 300, system, messages }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error?.message || `Fout ${res.status}`);
  return (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n').trim();
}

function chat(root, level, scene) {
  const sc = SCENES[scene];
  const system = systemPrompt(level, scene, store.setting('name'));
  const messages = [{ role: 'user', content: START }];
  root.innerHTML = `
    <a href="#/ai-gesprek" class="small">‹ Stoppen</a>
    <h2 style="margin:8px 0">${esc(sc.t)} <span class="pill">${level}</span></h2>
    <div class="chat" id="chat"></div>
    <div class="card" style="position:sticky;bottom:calc(var(--tabbar-h) + env(safe-area-inset-bottom) + 8px);padding:10px">
      <div class="row" style="gap:8px">
        <input class="answer" id="msg" placeholder="Schrijf in het Frans…" lang="fr" autocomplete="off" style="font-size:1rem;padding:10px 12px">
        ${speech.canListen() ? '<button class="iconbtn" id="mic" aria-label="Inspreken" style="background:var(--red-soft);color:var(--red)">🎤</button>' : ''}
        <button class="btn small" id="send">➤</button>
      </div>
    </div>`;
  const chatEl = $('#chat', root);
  const input = $('#msg', root);
  const add = (who, html) => {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    d.innerHTML = html;
    chatEl.appendChild(d);
    d.scrollIntoView({ behavior: 'smooth', block: 'end' });
    return d;
  };
  const show = text => {
    const [fr, ...rest] = text.split(/\n(?=💡)/);
    add('', `<span class="av">🧑‍🦳</span><div class="bub"><div class="fr">${esc(fr)} <button class="iconbtn" data-say="${esc(fr)}" style="width:30px;height:30px;font-size:.85rem">🔊</button></div>${rest.length ? `<div class="nl" style="margin-top:6px">${esc(rest.join('\n'))}</div>` : ''}</div>`);
    speech.say(fr);
  };
  let busy = false;
  const turn = async () => {
    busy = true;
    const typing = add('', '<span class="av">🧑‍🦳</span><div class="bub"><div class="typing"><i></i><i></i><i></i></div></div>');
    try {
      const reply = await callClaude(system, messages);
      typing.remove();
      messages.push({ role: 'assistant', content: reply });
      show(reply);
    } catch (e) {
      typing.remove();
      messages.pop();
      add('note', `<div class="bub">⚠️ ${esc(e.message)}</div>`);
    }
    busy = false;
  };
  const send = async () => {
    const v = input.value.trim();
    if (!v || busy) return;
    input.value = '';
    add('me', `<span class="av">🙂</span><div class="bub"><div class="fr">${esc(v)}</div></div>`);
    messages.push({ role: 'user', content: v });
    await turn();
  };
  $('#send', root).onclick = send;
  input.onkeydown = e => { if (e.key === 'Enter') send(); };
  const mic = $('#mic', root);
  if (mic) mic.onclick = () => {
    mic.classList.add('speaking');
    speech.listen({
      onresult: (alts, fin) => { input.value = alts[0]; if (fin) mic.classList.remove('speaking'); },
      onend: () => mic.classList.remove('speaking'),
      onerror: () => mic.classList.remove('speaking'),
    });
  };
  turn();
}
