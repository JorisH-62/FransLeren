import * as store from '../store.js';
import { esc, shuffle, sound, confetti, similarity, $, $$ } from '../util.js';
import { DIALOGUES } from '../data/dialogues.js';
import * as speech from '../speech.js';

const LEVELS = ['A1', 'A2', 'B1'];

export function render(root, params, opts) {
  if (opts.play) return play(root, params[0]);
  return list(root);
}

function list(root) {
  const s = store.get();
  root.innerHTML = `
    <h1>💬 Gesprekken</h1>
    <a class="card tile" href="#/spreken" style="flex-direction:row;align-items:center;gap:12px"><span class="te">🎤</span><span style="flex:1"><b>Spreektrainer</b><br><span class="small muted">8 zinnen hardop oefenen</span></span><span>›</span></a>
    <p class="muted">Oefen echte situaties met de (schoon)familie. Kies het juiste antwoord, of zeg de zin hardop. Fout? Geen probleem: je krijgt uitleg en mag opnieuw.</p>
    ${LEVELS.map(lv => {
      const ls = DIALOGUES.filter(d => d.level === lv);
      return `<div class="unit-head"><span class="pill ${lv.toLowerCase()}">${lv}</span><h2>${{ A1: 'Eerste kennismaking', A2: 'Vertellen & meedoen', B1: 'Echt meepraten' }[lv]}</h2></div>
      ${ls.map(d => {
        const p = s.dialogues[d.id];
        return `<a class="lesson-item ${p?.done ? 'done' : ''}" href="#/gesprek/${d.id}">
          <span class="le">${d.emoji}</span>
          <span class="lt"><b>${esc(d.title)}</b><span>${esc(d.sub)}</span></span>
          ${p?.done ? `<span class="stars">${'★'.repeat(p.stars || 1)}${'☆'.repeat(3 - (p.stars || 1))}</span>` : ''}
        </a>`;
      }).join('')}`;
    }).join('')}
    <div class="card small muted" style="margin-top:16px">🎤 <b>Spreken:</b> de microfoon werkt in Chrome (Android/computer) en Safari (iPhone). De eerste keer vraagt je browser om toestemming.</div>
  `;
}

// Vrouwelijke vormen voor de zinnen die jij zelf zegt
function adapt(text) {
  if (store.setting('gender') !== 'f') return text;
  return text
    .replace(/\bcontent\b/g, 'contente').replace(/\bEnchanté\b/g, 'Enchantée').replace(/\bfatigué\b/g, 'fatiguée')
    .replace(/\bnéerlandais\b/g, 'néerlandaise').replace(/\bvenu\b/g, 'venue').replace(/\bun ingénieur\b/g, 'une ingénieure')
    .replace(/je suis le gendre/g, 'je suis la belle-fille').replace(/\bJe suis néerlandais\b/g, 'Je suis néerlandaise');
}
// Wat de familie tegen jou zegt, aangepast als je een vrouw bent
function adaptNpc(text) {
  if (store.setting('gender') !== 'f' || !text) return text;
  return text
    .replace(/mon petit-fils/g, 'ma petite-fille').replace(/Il apprend le français/g, 'Elle apprend le français')
    .replace(/Mon pauvre/g, 'Ma pauvre').replace(/Tu t'es bien régalé \?/g, "Tu t'es bien régalée ?").replace(/Merci d'être venu !/g, "Merci d'être venue !").replace(/Oh, flatteur !/g, 'Oh, flatteuse !').replace(/vleier!/g, 'vleister!').replace(/mon grand\b/g, 'ma grande').replace(/Mon chéri/g, 'Ma chérie').replace(/mon chéri/g, 'ma chérie')
    .replace(/devenu un vrai Français/g, 'devenue une vraie Française').replace(/comme un vrai Français/g, 'comme une vraie Française')
    .replace(/il est affectueux, le Hollandais/g, 'elle est affectueuse, la Hollandaise').replace(/Lui, il a compris/g, 'Elle, elle a compris')
    .replace(/il est diplomate/g, 'elle est diplomate').replace(/C'est toi, le Hollandais/g, 'C\'est toi, la Hollandaise')
    .replace(/kleinzoon/g, 'kleindochter').replace(/Arme jongen/g, 'Arm meisje').replace(/\bjongen\b/g, 'meid').replace(/Fransman/g, 'Française')
    .replace(/hij is aanhankelijk, die Hollander/g, 'zij is aanhankelijk, die Hollandse').replace(/Hij snapt het tenminste/g, 'Zij snapt het tenminste')
    .replace(/hij is diplomatiek/g, 'zij is diplomatiek').replace(/Ben jij de Hollander/g, 'Ben jij de Hollandse')
    .replace(/Le Hollandais !/g, 'La Hollandaise !').replace(/De Hollander!/g, 'De Hollandse!').replace(/Vous êtes drôle, vous/g, 'Vous êtes drôle, vous');
}
function personalize(text) {
  const name = store.setting('name');
  return name ? text.replace(/\bJoris\b/g, name) : text;
}
const mine = t => personalize(adapt(t));

function play(root, id) {
  const d = DIALOGUES.find(x => x.id === id);
  if (!d) { location.hash = '#/gesprekken'; return; }
  let step = 0, firstTry = 0, questions = 0, lastWho = Object.keys(d.cast)[0];
  let showNl = store.setting('dialogNl') !== false;
  let autoSpeak = store.setting('dialogSpeak') !== false;
  let alive = true;
  let recog = null;

  root.innerHTML = `
    <a href="#/gesprekken" class="small">‹ Gesprekken</a>
    <div class="scene-head" style="margin:10px 0">
      <span class="se">${d.emoji}</span>
      <div><span class="pill ${d.level.toLowerCase()}">${d.level}</span><h1 style="margin:2px 0 0;font-size:1.3rem">${esc(d.title)}</h1></div>
    </div>
    <div class="card small">
      ${esc(d.intro)}
      <div style="margin-top:8px">${Object.values(d.cast).map(c => `<span class="pill" style="margin:2px">${c.av} ${esc(c.name)} — ${esc(c.desc)}</span>`).join(' ')}</div>
    </div>
    <div class="row wrap" style="margin-bottom:10px">
      <button class="btn small ghost" id="tnl">${showNl ? '🇳🇱 Vertaling: aan' : '🇳🇱 Vertaling: uit'}</button>
      <button class="btn small ghost" id="tsp">${autoSpeak ? '🔊 Voorlezen: aan' : '🔇 Voorlezen: uit'}</button>
    </div>
    <div class="chat" id="chat"></div>
    <div id="input"></div>
  `;
  const chat = $('#chat', root), input = $('#input', root);
  $('#tnl', root).onclick = e => {
    showNl = !showNl; store.setting('dialogNl', showNl);
    e.target.textContent = showNl ? '🇳🇱 Vertaling: aan' : '🇳🇱 Vertaling: uit';
    $$('.msg:not(.me) .nl', chat).forEach(n => n.hidden = !showNl);
  };
  $('#tsp', root).onclick = e => {
    autoSpeak = !autoSpeak; store.setting('dialogSpeak', autoSpeak);
    e.target.textContent = autoSpeak ? '🔊 Voorlezen: aan' : '🔇 Voorlezen: uit';
  };

  const wait = ms => new Promise(r => setTimeout(r, ms));
  const scrollDown = () => input.scrollIntoView({ behavior: 'smooth', block: 'end' });

  function bubble(kind, html) {
    const m = document.createElement('div');
    m.className = 'msg ' + kind;
    m.innerHTML = html;
    chat.appendChild(m);
    scrollDown();
    return m;
  }

  async function npcSay(fr, nl, who) {
    fr = personalize(adaptNpc(fr)); nl = personalize(adaptNpc(nl));
    const c = d.cast[who] || d.cast[lastWho];
    lastWho = who || lastWho;
    const t = bubble('', `<span class="av">${c.av}</span><div class="bub"><div class="typing"><i></i><i></i><i></i></div></div>`);
    await wait(500 + Math.min(fr.length * 12, 900));
    if (!alive) return;
    t.querySelector('.bub').innerHTML = `<div class="small muted" style="font-weight:800">${esc(c.name)}</div>
      <div class="fr">${esc(fr)} <button class="iconbtn" data-say="${esc(fr)}" style="width:30px;height:30px;font-size:.85rem;vertical-align:middle">🔊</button></div>
      <div class="nl" ${showNl ? '' : 'hidden'}>${esc(nl)}</div>`;
    scrollDown();
    if (autoSpeak) await speech.say(fr);
    else await wait(600);
  }

  async function next() {
    if (!alive) return;
    if (step >= d.steps.length) return finish();
    const st = d.steps[step++];
    input.innerHTML = '';
    if (st.npc) { await npcSay(st.npc, st.nl, st.who); return next(); }
    if (st.note) { bubble('note', `<div class="bub">💡 ${esc(st.note)}</div>`); await wait(700); return next(); }
    if (st.choose) return choose(st);
    if (st.say) return say(st);
  }

  function choose(st) {
    questions++;
    let tries = 0;
    const opts = shuffle(st.choose.map(o => ({ ...o })));
    const draw = () => {
      input.innerHTML = `<div class="ex-kind" style="margin-bottom:8px">Wat zeg je?</div>
        <div class="options">${opts.map((o, i) => o._gone ? '' : `<button class="opt" data-i="${i}">${esc(mine(o.fr))}${o.nl && showNl ? `<div class="small muted" style="font-weight:600;margin-top:2px">${esc(o.nl)}</div>` : ''}</button>`).join('')}</div>`;
      scrollDown();
    };
    draw();
    let busy = false;
    const onPick = async e => {
      const b = e.target.closest('.opt');
      if (!b || busy) return;
      busy = true;
      const o = opts[+b.dataset.i];
      tries++;
      input.innerHTML = '';
      bubble('me', `<span class="av">🙂</span><div class="bub"><div class="fr">${esc(mine(o.fr))}</div></div>`);
      if (autoSpeak) speech.say(mine(o.fr));
      if (o.ok) {
        input.onclick = null;
        sound('ok');
        if (tries === 1) firstTry++;
        if (autoSpeak) await wait(Math.min(400 + o.fr.length * 45, 3500));
        if (o.re) await npcSay(o.re, o.reNl || '', lastWho);
        next();
      } else {
        sound('bad');
        await wait(500);
        bubble('note', `<div class="bub">❌ ${esc(o.why || 'Dat past hier niet zo goed.')} Probeer het nog eens!</div>`);
        o._gone = true;
        draw();
        busy = false;
      }
    };
    input.onclick = onPick;
  }

  function say(st) {
    questions++;
    const target = mine(st.say);
    let attempts = 0;
    input.innerHTML = `
      <div class="card" style="border:2px solid var(--blue)">
        <div class="ex-kind">Jouw beurt — zeg het hardop</div>
        <div class="row" style="align-items:flex-start;margin-top:6px">
          <div style="flex:1"><div class="fr-inline" style="font-size:1.15rem">${esc(target)}</div><div class="small muted">${esc(st.nl)}</div></div>
          <button class="iconbtn" data-say="${esc(target)}">🔊</button>
        </div>
        <div class="row" style="margin-top:12px;justify-content:center;gap:16px">
          ${speech.canListen() ? '<button class="iconbtn mic" id="mic" aria-label="Spreek">🎤</button>' : ''}
        </div>
        <p class="small muted center" id="heard">${speech.canListen() ? 'Tik op de microfoon en spreek de zin uit.' : 'Je browser ondersteunt geen spraakherkenning. Typ de zin, of zeg hem hardop en tik op "Gezegd!".'}</p>
        <div class="row" style="gap:8px">
          <input class="answer" id="typed" placeholder="…of typ de zin" autocomplete="off" autocapitalize="off" spellcheck="false" lang="fr" style="font-size:1rem;padding:10px 12px">
          <button class="btn small" id="sendtyped">OK</button>
        </div>
        <button class="btn ghost small block" id="skip" style="margin-top:10px">Gezegd! (zonder controle)</button>
      </div>`;
    scrollDown();
    const heard = $('#heard', input);
    const accept = (text, viaMic) => {
      bubble('me', `<span class="av">🙂</span><div class="bub"><div class="fr">${esc(text || target)}</div>${viaMic ? '<div class="nl">🎤 uitgesproken</div>' : ''}</div>`);
      input.innerHTML = '';
      sound('ok');
      if (attempts <= 1) firstTry++;
      setTimeout(next, 500);
    };
    const mic = $('#mic', input);
    if (mic) mic.onclick = () => {
      attempts++;
      mic.classList.add('listening');
      heard.textContent = 'Ik luister…';
      recog = speech.listen({
        onresult(alts, final) {
          const scores = alts.map(a => similarity(a, target));
          const best = Math.max(...scores);
          const txt = alts[scores.indexOf(best)];
          heard.innerHTML = `Ik hoorde: <b>${esc(txt)}</b>`;
          if (final) {
            mic.classList.remove('listening');
            if (best >= 0.7) { heard.innerHTML += ` — ✅ ${Math.round(best * 100)}%`; setTimeout(() => accept(txt, true), 700); }
            else { sound('bad'); heard.innerHTML += ` — ${Math.round(best * 100)}%. Luister nog eens (🔊) en probeer opnieuw!`; }
          }
        },
        onend() { mic.classList.remove('listening'); },
        onerror(err) {
          mic.classList.remove('listening');
          heard.textContent = err === 'not-allowed' ? '🎤 Geen toegang tot de microfoon. Typ de zin of tik op "Gezegd!".' : 'Niets gehoord. Probeer het nog eens.';
        },
      });
    };
    const typed = $('#typed', input);
    const sendTyped = () => {
      if (!typed.value.trim()) return;
      attempts++;
      const sim = similarity(typed.value, target);
      if (sim >= 0.85) accept(typed.value);
      else { sound('bad'); heard.innerHTML = `Nog niet helemaal (${Math.round(sim * 100)}%). Kijk goed naar de zin hierboven.`; }
    };
    $('#sendtyped', input).onclick = sendTyped;
    typed.onkeydown = e => { if (e.key === 'Enter') sendTyped(); };
    $('#skip', input).onclick = () => { attempts = Math.max(attempts, 1); accept(target); };
  }

  function finish() {
    const pct = questions ? firstTry / questions : 1;
    const stars = pct >= 0.9 ? 3 : pct >= 0.65 ? 2 : 1;
    const xp = 20 + firstTry * 4;
    const prev = store.get().dialogues[d.id];
    store.setDialogue(d.id, { done: true, stars: Math.max(stars, prev?.stars || 0) });
    store.addXp(xp);
    sound('win');
    confetti();
    const idx = DIALOGUES.indexOf(d);
    const nextD = DIALOGUES[idx + 1];
    input.innerHTML = `<div class="card center" style="margin-top:10px">
      <div style="font-size:3rem">🎉</div>
      <div class="stars" style="font-size:1.8rem">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
      <h2 style="margin:6px 0">Gesprek geslaagd!</h2>
      <p class="muted">${firstTry} van de ${questions} in één keer goed · <b>+${xp} XP</b></p>
      <div class="stack">
        ${nextD ? `<a class="btn block green" href="#/gesprek/${nextD.id}">Volgend gesprek: ${esc(nextD.title)}</a>` : ''}
        <a class="btn block ghost" href="#/gesprek/${d.id}" id="again">🔁 Nog een keer</a>
        <a class="btn block ghost" href="#/gesprekken">Alle gesprekken</a>
      </div></div>`;
    $('#again', input).onclick = e => { e.preventDefault(); play(root, id); };
    scrollDown();
  }

  next();
  return { destroy() { alive = false; speech.stop(); try { recog?.abort(); } catch { } } };
}
