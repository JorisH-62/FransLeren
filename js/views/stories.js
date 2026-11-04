import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, toast, confetti, sound, $, $$ } from '../util.js';
import { STORIES } from '../data/stories.js';
import { lookup } from '../data/dict.js';
import * as speech from '../speech.js';
import { runExercises } from '../exercise.js';
import { openPopover, closePopover } from '../app.js';

const LEVELS = ['A1', 'A2', 'B1'];
let vocabDict = null;

async function getVocabDict() {
  if (vocabDict) return vocabDict;
  const [{ DECKS }, { LESSONS }] = await Promise.all([import('../data/vocab.js'), import('../data/lessons.js')]);
  vocabDict = {};
  const add = (fr, nl) => {
    const k = fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').replace(/[!?.]/g, '').trim();
    if (k && !k.includes(' ') && !vocabDict[k]) vocabDict[k] = nl;
  };
  DECKS.forEach(d => d.words.forEach(([fr, nl]) => add(fr, nl)));
  LESSONS.forEach(l => (l.vocab || []).forEach(([fr, nl]) => add(fr, nl)));
  return vocabDict;
}

export function render(root, params, opts) {
  if (opts.read) return reader(root, params[0]);
  if (opts.quiz) return quiz(root, params[0]);
  return library(root);
}

function library(root) {
  const s = store.get();
  root.innerHTML = `
    <h1>📚 Verhalen</h1>
    <p class="muted">Grappige verhaaltjes in eenvoudig Frans. Tik op een woord voor de vertaling, laat het voorlezen en doe daarna de quiz.</p>
    ${LEVELS.map(lv => {
      const list = STORIES.filter(st => st.level === lv);
      if (!list.length) return '';
      return `<div class="unit-head"><span class="pill ${lv.toLowerCase()}">${lv}</span><h2>${{ A1: 'Makkelijk', A2: 'Gemiddeld', B1: 'Uitdagend' }[lv]}</h2></div>
      <div class="book-grid">${list.map(st => {
        const p = s.stories[st.id];
        return `<a class="book" href="#/verhaal/${st.id}">
          <div class="cover" style="background:${st.color}">${st.emoji}</div>
          <div class="bt"><b>${esc(st.title)}</b><span>${esc(st.nl)}</span><br>
          <span>⏱ ${st.minutes} min ${p?.read ? ' · ✅' : ''}${p?.quiz != null ? ` · 🎯 ${p.quiz}%` : ''}</span></div>
        </a>`;
      }).join('')}</div>`;
    }).join('')}
  `;
}

// ---------- Lezen ----------
const WORD_RE = /(aujourd'hui|quelqu'un|presqu'île|[A-Za-zÀ-ÖØ-öø-ÿœŒ]+(?:-[A-Za-zÀ-ÖØ-öø-ÿœŒ]+)*'?)/gi;

function wordify(text, pageIdx) {
  let out = '', last = 0, m;
  WORD_RE.lastIndex = 0;
  while ((m = WORD_RE.exec(text))) {
    out += esc(text.slice(last, m.index));
    out += `<span class="w" data-w="${esc(m[0])}" data-o="${m.index}" data-p="${pageIdx}">${esc(m[0])}</span>`;
    last = m.index + m[0].length;
  }
  return out + esc(text.slice(last));
}

async function reader(root, id) {
  const st = STORIES.find(x => x.id === id);
  if (!st) { location.hash = '#/verhalen'; return; }
  const vd = await getVocabDict();
  let showNl = store.setting('showNl') === true && false; // start altijd zonder vertaling
  root.innerHTML = `
    <a href="#/verhalen" class="small">‹ Verhalen</a>
    <div class="reader-cover" style="background:${st.color};margin-top:10px">${st.emoji}</div>
    <span class="pill ${st.level.toLowerCase()}">${st.level}</span> <span class="small muted">· ${esc(st.grammar)}</span>
    <h1 style="margin-top:6px">${esc(st.title)}</h1>
    <p class="muted" style="margin-top:-6px"><i>${esc(st.nl)}</i></p>
    <div class="card small">${esc(st.intro)}<br><br>👆 <b>Tik op een woord</b> voor de vertaling. 🔊 leest de alinea voor.</div>
    <div class="row wrap" style="margin-bottom:6px">
      <button class="btn small yellow" id="readall">▶️ Lees alles voor</button>
      <button class="btn small ghost" id="togglenl">🇳🇱 Vertaling tonen</button>
    </div>
    <div class="card reader">
      ${st.pages.map((p, i) => `
        <div class="para-wrap" data-i="${i}">
          <div class="pic">${p.pic}</div>
          <p class="para" lang="fr">${wordify(p.fr, i)}</p>
          <div class="trans" ${showNl ? '' : 'hidden'}>${esc(p.nl)}</div>
          <div class="para-tools">
            <button class="iconbtn" data-read="${i}" aria-label="Voorlezen">🔊</button>
            <button class="iconbtn" data-slow="${i}" aria-label="Langzaam voorlezen" title="Langzaam">🐌</button>
            <button class="iconbtn" data-nl="${i}" aria-label="Vertaling">🇳🇱</button>
          </div>
        </div>`).join('')}
    </div>
    <button class="btn block ghost" id="addall" style="margin-bottom:12px">➕ Woorden uit dit verhaal naar mijn flashcards</button>
    <button class="btn block green" id="finish">✅ Uit! Naar de quiz</button>
  `;

  const readPara = (i, rate) => {
    const p = st.pages[i];
    const spans = $$(`.w[data-p="${i}"]`, root);
    return speech.say(p.fr, {
      rate,
      button: $(`[data-read="${i}"]`, root),
      onword: idx => {
        spans.forEach(s => s.classList.remove('reading'));
        const sp = [...spans].reverse().find(s => +s.dataset.o <= idx);
        sp?.classList.add('reading');
      },
      onend: () => spans.forEach(s => s.classList.remove('reading')),
    });
  };

  root.onclick = async e => {
    const w = e.target.closest('.w');
    if (w) {
      e.stopPropagation();
      $$('.w.active', root).forEach(x => x.classList.remove('active'));
      w.classList.add('active');
      const word = w.dataset.w;
      const clean = word.replace(/'$/, "'");
      const tr = lookup(clean, st.glossary, vd) || lookup(clean.replace(/'$/, 'e'), st.glossary, vd);
      speech.say(clean.replace(/'$/, ''), { rate: 0.8 });
      const para = st.pages[+w.dataset.p];
      const cardKey = clean.toLowerCase();
      openPopover(w, `
        <div class="row"><span class="pw">${esc(clean)}</span><span class="spacer"></span><button class="iconbtn" data-say="${esc(clean)}">🔊</button></div>
        <div class="pt">${tr ? esc(tr) : '<span class="muted">Geen losse vertaling. Zie de zin hieronder:</span>'}</div>
        ${tr ? '' : `<div class="small muted" style="margin-bottom:8px">${esc(para.nl)}</div>`}
        ${tr && !srs.hasCard(cardKey) ? `<button class="btn small ghost block" id="addw">➕ Naar mijn flashcards</button>` : tr ? '<div class="small muted">✅ Staat in je flashcards</div>' : ''}
      `);
      const add = $('#addw');
      if (add) add.onclick = () => { srs.addCard(cardKey, tr, 'verhaal-' + st.id); toast('Toegevoegd aan je flashcards 🃏'); closePopover(); };
      return;
    }
    const r = e.target.closest('[data-read]');
    if (r) return readPara(+r.dataset.read);
    const sl = e.target.closest('[data-slow]');
    if (sl) return readPara(+sl.dataset.slow, 0.6);
    const n = e.target.closest('[data-nl]');
    if (n) { const t = $(`.para-wrap[data-i="${n.dataset.nl}"] .trans`, root); t.hidden = !t.hidden; }
  };

  let reading = false;
  $('#readall', root).onclick = async () => {
    const btn = $('#readall', root);
    if (reading) { reading = false; speech.stop(); btn.textContent = '▶️ Lees alles voor'; return; }
    reading = true; btn.textContent = '⏹ Stop';
    for (let i = 0; i < st.pages.length && reading; i++) {
      $(`.para-wrap[data-i="${i}"]`, root)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      await readPara(i);
      await new Promise(r => setTimeout(r, 400));
    }
    reading = false; if (document.contains(btn)) btn.textContent = '▶️ Lees alles voor';
  };
  $('#togglenl', root).onclick = () => {
    showNl = !showNl;
    $$('.trans', root).forEach(t => t.hidden = !showNl);
    $('#togglenl', root).textContent = showNl ? '🇳🇱 Vertaling verbergen' : '🇳🇱 Vertaling tonen';
  };
  $('#addall', root).onclick = () => {
    let n = 0;
    for (const [fr, nl] of Object.entries(st.glossary)) {
      if (/^[A-ZÀ-Ý]/.test(nl) && nl.toLowerCase().startsWith(fr.slice(0, 3))) continue; // namen overslaan
      if (fr.length < 3) continue;
      if (srs.addCard(fr, nl, 'verhaal-' + st.id)) n++;
      if (n >= 40) break;
    }
    toast(n ? `${n} woorden toegevoegd aan je flashcards 🃏` : 'Alle woorden staan er al in ✅');
    $('#addall', root).disabled = true;
  };
  $('#finish', root).onclick = () => {
    const first = !store.get().stories[st.id]?.read;
    store.setStory(st.id, { read: true });
    if (first) { store.addXp(20); toast('+20 XP voor het lezen! 📖'); }
    location.hash = `#/verhaal/${st.id}/quiz`;
  };
  return { destroy() { reading = false; speech.stop(); } };
}

// ---------- Quiz ----------
function quiz(root, id) {
  const st = STORIES.find(x => x.id === id);
  if (!st) { location.hash = '#/verhalen'; return; }
  const exercises = st.quiz.map(q => ({ type: 'mc', q: esc(q.q), options: q.options, noSay: true }));
  // plus 2 luister-oefeningen met zinnen uit het verhaal
  const sentences = st.pages.flatMap(p => splitSentences(p.fr)).filter(x => {
    const n = x.fr.split(/\s+/).length;
    return n >= 4 && n <= 9 && !/[«»:]/.test(x.fr);
  });
  const pick = sentences.sort(() => Math.random() - 0.5).slice(0, 2);
  pick.forEach(sn => exercises.push({ type: 'order', nl: '📖 Zet deze zin uit het verhaal weer in elkaar:', fr: sn.fr }));
  runExercises(root, exercises, {
    onQuit: () => { location.hash = `#/verhaal/${st.id}`; },
    onFinish: ({ right, total, pct }) => {
      const score = Math.round(pct * 100);
      const prev = store.get().stories[st.id]?.quiz ?? 0;
      store.setStory(st.id, { read: true, quiz: Math.max(prev, score) });
      const xp = right * 4;
      store.addXp(xp);
      sound('win');
      if (pct >= 0.8) confetti();
      const next = STORIES[STORIES.indexOf(st) + 1];
      root.innerHTML = `<div class="result">
        <div class="big">${st.emoji}</div>
        <h1>${pct >= 0.8 ? 'Bravo, grand lecteur !' : pct >= 0.5 ? 'Pas mal du tout !' : 'On relit ?'}</h1>
        <p class="muted">${right}/${total} goed · <b>+${xp} XP</b></p>
        <div class="stack" style="margin-top:20px">
          ${next ? `<a class="btn block green" href="#/verhaal/${next.id}">Volgend verhaal: ${esc(next.title)}</a>` : ''}
          <a class="btn block ghost" href="#/verhaal/${st.id}">📖 Nog eens lezen</a>
          <a class="btn block ghost" href="#/verhalen">Alle verhalen</a>
        </div></div>`;
    },
  });
}

// alleen de Franse zinnen splitsen (voor dictee hoeven we geen vertaling per zin)
function splitSentences(fr) {
  return fr.split(/(?<=[.!?…])\s+(?=[A-ZÀ-Ý«])/).map(s => ({ fr: s.replace(/[«»]/g, '').trim() }));
}
