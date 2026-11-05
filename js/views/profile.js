import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, toast, $ } from '../util.js';
import * as speech from '../speech.js';
import { BADGES } from '../badges.js';
import { LESSONS } from '../data/lessons.js';
import { makeCode, readCode } from '../sync.js';

export function render(root) {
  const s = store.get();
  const lvl = store.level();
  const st = srs.stats();
  const days = last14(s.history);
  const maxDay = Math.max(10, ...days.map(d => d.xp));

  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>👤 Profiel</h1>
    <div class="card center">
      <div style="font-size:3rem">${lvl.emoji}</div>
      <h2 style="margin:4px 0">${esc(s.settings.name || 'Apprenti')} — niveau ${lvl.n}</h2>
      <div class="muted">${esc(lvl.name)}</div>
      <div class="grid3" style="margin-top:14px">
        <div><b style="font-size:1.4rem">${s.xp}</b><div class="small muted">XP</div></div>
        <div><b style="font-size:1.4rem">🔥 ${s.streak}</b><div class="small muted">dagen op rij</div></div>
        <div><b style="font-size:1.4rem">${Object.keys(s.lessons).length}/${LESSONS.length}</b><div class="small muted">lessen</div></div>
        <div><b style="font-size:1.4rem">${st.total}</b><div class="small muted">woorden</div></div>
        <div><b style="font-size:1.4rem">${Object.values(s.stories).filter(x => x.read).length}</b><div class="small muted">verhalen</div></div>
        <div><b style="font-size:1.4rem">${Object.values(s.dialogues).filter(x => x.done).length}</b><div class="small muted">gesprekken</div></div>
      </div>
    </div>

    <div class="card">
      <b>📈 Afgelopen 14 dagen</b>
      <div style="display:flex;align-items:flex-end;gap:4px;height:90px;margin-top:10px" aria-label="XP per dag">
        ${days.map(d => `<div title="${d.date}: ${d.xp} XP" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;height:100%;justify-content:flex-end">
          <div style="width:100%;max-width:22px;height:${Math.max(3, (d.xp / maxDay) * 70)}px;background:${d.xp ? 'var(--blue)' : 'var(--line)'};border-radius:5px"></div>
          <span style="font-size:.62rem" class="muted">${d.label}</span></div>`).join('')}
      </div>
    </div>

    <h2>🏅 Badges</h2>
    <div class="badge-grid">
      ${BADGES.map(b => `<div class="badge ${s.badges[b.id] ? '' : 'locked'}" title="${esc(b.desc)}"><span class="be">${b.e}</span>${esc(b.name)}<div class="muted" style="font-weight:600;font-size:.68rem">${esc(b.desc)}</div></div>`).join('')}
    </div>

    <h2>⚙️ Instellingen</h2>
    <div class="card stack">
      <label>Je naam (wordt gebruikt in gesprekken)<br><input class="answer" id="name" value="${esc(s.settings.name || '')}" placeholder="bv. Joris" style="margin-top:4px"></label>
      <label>Ik ben… (voor Franse vormen als <i>content / contente</i>)<br>
        <select id="gender" style="margin-top:4px;width:100%">
          <option value="m" ${s.settings.gender !== 'f' ? 'selected' : ''}>een man (content, fatigué)</option>
          <option value="f" ${s.settings.gender === 'f' ? 'selected' : ''}>een vrouw (contente, fatiguée)</option>
        </select></label>
      <label>Dagdoel<br>
        <select id="goal" style="margin-top:4px;width:100%">
          ${[[20, 'Rustig (20 XP · ±5 min)'], [50, 'Normaal (50 XP · ±10 min)'], [100, 'Serieus (100 XP · ±20 min)'], [200, 'Intens (200 XP · ±40 min)']].map(([v, l]) => `<option value="${v}" ${s.dailyGoal === v ? 'selected' : ''}>${l}</option>`).join('')}
        </select></label>
      <label>Franse stem<br>
        <select id="voice" style="margin-top:4px;width:100%"><option value="">Automatisch</option></select></label>
      <label>Spreeksnelheid: <b id="ratev">${s.settings.rate}</b><br>
        <input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="${s.settings.rate}" style="width:100%"></label>
      <button class="btn ghost small" data-say="Bonjour ! Je m'appelle Gaston, et je suis un escargot très rapide.">🔊 Test de stem</button>
      ${speech.canSpeak() ? '' : '<p class="small" style="color:var(--red)">⚠️ Je browser ondersteunt geen spraak. Probeer Chrome of Safari.</p>'}
      <label>Thema<br>
        <select id="theme" style="margin-top:4px;width:100%">
          <option value="auto" ${s.settings.theme === 'auto' ? 'selected' : ''}>Automatisch (volgt je telefoon)</option>
          <option value="light" ${s.settings.theme === 'light' ? 'selected' : ''}>Licht</option>
          <option value="dark" ${s.settings.theme === 'dark' ? 'selected' : ''}>Donker</option>
        </select></label>
      <label class="row" style="gap:8px"><input type="checkbox" id="sounds" ${s.settings.sounds ? 'checked' : ''}> Geluidseffecten</label>
    </div>

    <h2>🔄 Overzetten (telefoon ⇄ pc)</h2>
    <div class="card stack">
      <p class="small muted" style="margin:0">Maak op het ene apparaat een overzetcode en plak die op het andere. Er gaat niets via een server: de code bevat je voortgang zelf.</p>
      <button class="btn" id="mkcode">📤 Maak overzetcode</button>
      <textarea class="answer" id="codeout" rows="3" readonly hidden style="font-size:.8rem;font-family:monospace"></textarea>
      <div class="row" id="codebtns" hidden><button class="btn small ghost" id="copycode">📋 Kopieer</button><button class="btn small ghost" id="sharecode">📨 Delen</button><span class="small muted" id="codelen"></span></div>
      <textarea class="answer" id="codein" rows="3" placeholder="Plak hier een overzetcode…" style="font-size:.8rem;font-family:monospace"></textarea>
      <button class="btn ghost" id="usecode">📥 Gebruik deze code</button>
    </div>

    <h2>💾 Back-up</h2>
    <div class="card stack">
      <p class="small muted" style="margin:0">Je voortgang wordt op dit apparaat bewaard. Wil je wisselen tussen telefoon en computer? Exporteer hier en importeer op het andere apparaat.</p>
      <button class="btn ghost" id="export">⬇️ Exporteer voortgang (bestand)</button>
      <button class="btn ghost" id="copy">📋 Kopieer voortgang (tekst)</button>
      <label class="btn ghost" style="cursor:pointer">⬆️ Importeer bestand<input type="file" id="importfile" accept=".json,application/json" hidden></label>
      <button class="btn ghost" id="paste">📥 Plak voortgang (tekst)</button>
      <button class="btn red small" id="reset" style="margin-top:10px">🗑️ Alles wissen</button>
    </div>
    <h2>❓ Hulp & tips</h2>
    <div class="card theory">
      <h3 style="margin-top:0">🗓️ Zo haal je het meeste uit FransLeren</h3>
      <p><b>Elke dag ±15 minuten</b> werkt beter dan één keer per week een uur. Volg het <i>Plan voor vandaag</i> op de startpagina:</p>
      <ol>
        <li><b>Eén les</b> uit het leerpad (lees de uitleg, doe de oefeningen).</li>
        <li><b>Je kaarten herhalen</b>: de app laat precies zien wat je bijna vergeet.</li>
        <li><b>Een verhaal of gesprek</b>: hier oefen je wat je geleerd hebt in context.</li>
      </ol>
      <p>Heb je een familiebezoek gepland? Oefen de week ervoor extra de <b>Gesprekken</b>, het <b>Zinnenboek</b> en de <b>Spreektrainer</b>, en vul <b>Mijn familie</b> in.</p>
      <h3>🎤 Spraak en microfoon</h3>
      <ul>
        <li><b>Android:</b> gebruik Chrome. Geef toestemming voor de microfoon als daarom gevraagd wordt.</li>
        <li><b>iPhone:</b> gebruik Safari. Zet bij Instellingen → Safari → Microfoon op "Vraag" of "Sta toe".</li>
        <li><b>Geen Franse stem?</b> Installeer een Franse stem: Android → Instellingen → Systeem → Taal → Tekst-naar-spraak; iPhone → Instellingen → Toegankelijkheid → Gesproken materiaal → Stemmen → Frans.</li>
        <li>Spraakherkenning werkt niet? Je kunt altijd typen of op "Gezegd!" tikken.</li>
      </ul>
      <h3>💾 Voortgang</h3>
      <p>Je voortgang staat alleen op dit apparaat. Wil je wisselen tussen telefoon en computer? Gebruik <b>Back-up</b> hierboven.</p>
    </div>
    <p class="small muted center">FransLeren · gemaakt met ❤️ en een slak 🐌</p>
  `;

  // stemmen
  const fill = () => {
    const sel = $('#voice', root);
    if (!sel) return;
    const vs = speech.frenchVoices();
    sel.innerHTML = '<option value="">Automatisch</option>' + vs.map(v => `<option value="${esc(v.name)}" ${v.name === s.settings.voice ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('');
  };
  fill();
  setTimeout(fill, 500);

  $('#name', root).onchange = e => { store.setting('name', e.target.value.trim()); toast('Opgeslagen'); };
  $('#gender', root).onchange = e => store.setting('gender', e.target.value);
  $('#goal', root).onchange = e => { s.dailyGoal = +e.target.value; store.save(); toast('Dagdoel aangepast'); };
  $('#voice', root).onchange = e => { store.setting('voice', e.target.value); speech.say('Bonjour !'); };
  $('#rate', root).oninput = e => { $('#ratev', root).textContent = e.target.value; };
  $('#rate', root).onchange = e => { store.setting('rate', +e.target.value); speech.say('Voilà, comme ça.'); };
  $('#theme', root).onchange = e => store.setting('theme', e.target.value);
  $('#sounds', root).onchange = e => store.setting('sounds', e.target.checked);

  $('#mkcode', root).onclick = async () => {
    const code = await makeCode();
    const out = $('#codeout', root); out.value = code; out.hidden = false; out.select();
    $('#codebtns', root).hidden = false; $('#codelen', root).textContent = `${code.length} tekens`;
    if (!navigator.share) $('#sharecode', root).hidden = true;
  };
  $('#copycode', root).onclick = async () => {
    try { await navigator.clipboard.writeText($('#codeout', root).value); toast('Gekopieerd! 📋'); } catch { $('#codeout', root).select(); toast('Selecteer en kopieer de code'); }
  };
  $('#sharecode', root).onclick = () => navigator.share?.({ title: 'FransLeren-voortgang', text: $('#codeout', root).value }).catch(() => {});
  $('#usecode', root).onclick = async () => {
    const v = $('#codein', root).value; if (!v.trim()) return toast('Plak eerst een code');
    if (!confirm('Je voortgang op dit apparaat wordt vervangen door die uit de code. Doorgaan?')) return;
    try { await readCode(v); toast('Voortgang overgezet! ✅'); render(root); } catch (e) { alert('Dat lukte niet: ' + e.message); }
  };

  $('#export', root).onclick = () => {
    const blob = new Blob([store.exportData()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `fransleren-${store.today()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  };
  $('#copy', root).onclick = async () => {
    try { await navigator.clipboard.writeText(store.exportData()); toast('Gekopieerd! Plak het op je andere apparaat.'); }
    catch { prompt('Kopieer deze tekst:', store.exportData()); }
  };
  $('#importfile', root).onchange = async e => {
    const file = e.target.files[0];
    if (!file) return;
    doImport(await file.text());
  };
  $('#paste', root).onclick = () => {
    const t = prompt('Plak hier je geëxporteerde voortgang:');
    if (t) doImport(t);
  };
  $('#reset', root).onclick = () => {
    if (confirm('Weet je het zeker? Al je voortgang wordt gewist.') && confirm('Echt zeker? Dit kan niet ongedaan worden.')) {
      store.reset(); toast('Alles gewist'); location.hash = '#/';
    }
  };
  function doImport(text) {
    try {
      if (!confirm('Je huidige voortgang op dit apparaat wordt vervangen. Doorgaan?')) return;
      store.importData(text); toast('Voortgang geïmporteerd! ✅'); render(root);
    } catch (err) { alert('Importeren mislukt: ' + err.message); }
  }
}

function last14(history) {
  const out = [];
  const dn = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    out.push({ date: key, xp: history[key] || 0, label: dn[d.getDay()] });
  }
  return out;
}
