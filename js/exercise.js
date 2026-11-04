// Oefeningen-motor. Conventie in de data: bij keuzevragen is de EERSTE optie de juiste
// (de opties worden bij het tonen geschud).
//
// Types:
//  mc        { q, s?, options[], explain? }            — kies het juiste antwoord
//  fill      { q?, s: 'Nous ___ là.', answer: str|[], hint?, explain? }
//  order     { nl, fr, extra?[] }                      — zet woorden in de juiste volgorde
//  translate { nl, answer: str|[], hint? }             — vertaal naar het Frans (typen)
//  listen    { fr, options[] (NL, eerste = juist) }    — luister en kies de betekenis
//  dictee    { fr, nl? }                               — luister en typ wat je hoort
//  match     { pairs: [[fr, nl], ...] }                — koppel paren
//  speak     { fr, nl }                                — zeg de zin hardop
import { esc, shuffle, check, toast, sound, similarity, $, $$ } from './util.js';
import * as speech from './speech.js';

const ACCENTS = ['é', 'è', 'ê', 'à', 'â', 'ç', 'ô', 'î', 'û', 'ù', 'ë', 'ï', 'œ', "'"];

export function runExercises(root, exercises, { title = '', onFinish, onQuit } = {}) {
  const queue = exercises.map((e, i) => ({ ...e, _i: i }));
  const total = exercises.length;
  const firstTry = new Map(); // _i -> bool
  let done = 0;
  let pos = 0;
  document.body.classList.add('in-exercise');

  function cleanup() {
    document.body.classList.remove('in-exercise');
    $('.feedback')?.remove();
    speech.stop();
  }

  function render() {
    $('.feedback')?.remove();
    if (pos >= queue.length) return finish();
    const ex = queue[pos];
    const isRetry = firstTry.has(ex._i);
    root.innerHTML = `
      <div class="view-enter">
        <div class="ex-progress">
          <button class="x" aria-label="Stoppen">✕</button>
          <div class="bar"><div style="width:${(done / total) * 100}%"></div></div>
          <span class="small muted">${done}/${total}</span>
        </div>
        ${isRetry ? '<div class="pill" style="margin-bottom:8px">🔁 Nog een keer</div>' : ''}
        <div id="ex-body"></div>
        <div class="check-area"><button class="btn block" id="checkbtn" disabled>Controleer</button></div>
      </div>`;
    $('.x', root).onclick = () => {
      if (confirm('Stoppen met deze oefening? Je voortgang van deze ronde gaat verloren.')) { cleanup(); onQuit?.(); }
    };
    const body = $('#ex-body', root);
    const btn = $('#checkbtn', root);
    const api = renderers[ex.type](body, ex, btn);
    btn.onclick = () => {
      if (btn.dataset.mode === 'next') return next();
      const res = api.check();
      if (!res) return;
      feedback(ex, res, isRetry);
    };
    // Enter = controleren
    root.onkeydown = e => {
      if (e.key === 'Enter' && !e.shiftKey && !btn.disabled) { e.preventDefault(); btn.click(); }
    };
    window.scrollTo(0, 0);
  }

  function feedback(ex, res, isRetry) {
    const { ok, msg, solution } = res;
    if (!isRetry) firstTry.set(ex._i, ok);
    if (ok) { done += isRetry ? 0 : 1; sound('ok'); }
    else {
      sound('bad');
      if (!isRetry) queue.push(ex); // aan het eind nog eens
    }
    if (isRetry && ok) done += 1;
    const fb = document.createElement('div');
    fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
    const praise = ['Super !', 'Très bien !', 'Parfait !', 'Bravo !', 'Génial !', 'Excellent !', 'Chapeau !', 'Nickel !'];
    const oops = ['Oups…', 'Pas tout à fait…', 'Presque !', 'Aïe…'];
    fb.innerHTML = `<div class="inner">
      <h3>${ok ? praise[Math.floor(Math.random() * praise.length)] : oops[Math.floor(Math.random() * oops.length)]}</h3>
      ${msg ? `<p>${msg}</p>` : ''}
      ${!ok && solution ? `<p>Juist: <b>${esc(solution)}</b> ${speech.speakBtn(solution)}</p>` : ''}
      ${ex.explain ? `<p class="small">💡 ${ex.explain}</p>` : ''}
      <button class="btn block ${ok ? 'green' : 'red'}" id="nextbtn">Verder</button>
    </div>`;
    document.body.appendChild(fb);
    const nb = $('#nextbtn', fb);
    nb.focus();
    nb.onclick = next;
    const cb = $('#checkbtn');
    if (cb) { cb.dataset.mode = 'next'; cb.disabled = false; }
    // Bij goed antwoord: zin automatisch uitspreken als die Frans is
    const sayText = res.say;
    if (sayText) speech.say(sayText);
  }

  function next() {
    pos++;
    render();
  }

  function finish() {
    cleanup();
    let right = 0;
    firstTry.forEach(v => { if (v) right++; });
    const pct = total ? right / total : 1;
    onFinish?.({ right, total, pct });
  }

  render();
  return { stop: cleanup };
}

// ---------- Renderers ----------
function accentBar(input) {
  const bar = document.createElement('div');
  bar.className = 'accents';
  bar.innerHTML = ACCENTS.map(a => `<button type="button" tabindex="-1">${a}</button>`).join('');
  bar.onclick = e => {
    const b = e.target.closest('button');
    if (!b) return;
    const s = input.selectionStart ?? input.value.length, en = input.selectionEnd ?? s;
    input.value = input.value.slice(0, s) + b.textContent + input.value.slice(en);
    input.focus();
    input.setSelectionRange(s + 1, s + 1);
    input.dispatchEvent(new Event('input'));
  };
  bar.onmousedown = e => e.preventDefault();
  return bar;
}

function sentenceHtml(s) {
  return esc(s).replace(/_{2,}/g, '<span class="gap">?</span>');
}

function fillWith(s, word) {
  return s.replace(/_{2,}/, word);
}

function choiceButtons(body, options, btn) {
  const correct = options[0];
  const shuffled = shuffle(options);
  const box = document.createElement('div');
  box.className = 'options';
  box.innerHTML = shuffled.map((o, i) => `<button class="opt" data-i="${i}"><span class="muted small">${i + 1}</span>&nbsp; ${esc(o)}</button>`).join('');
  body.appendChild(box);
  let sel = null;
  box.onclick = e => {
    const b = e.target.closest('.opt');
    if (!b || box.dataset.locked) return;
    $$('.opt', box).forEach(x => x.classList.remove('sel'));
    b.classList.add('sel');
    sel = shuffled[+b.dataset.i];
    btn.disabled = false;
    sound('tap');
  };
  // toetsen 1-4
  const keyh = e => {
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= shuffled.length && !box.dataset.locked && document.contains(box)) $$('.opt', box)[n - 1].click();
    if (!document.contains(box)) document.removeEventListener('keydown', keyh);
  };
  document.addEventListener('keydown', keyh);
  return {
    get value() { return sel; },
    correct,
    reveal() {
      box.dataset.locked = 1;
      $$('.opt', box).forEach(b => {
        const v = shuffled[+b.dataset.i];
        if (v === correct) b.classList.add('right');
        else if (v === sel) b.classList.add('wrong');
      });
    },
  };
}

function textInput(body, btn, placeholder = 'Typ in het Frans…') {
  const input = document.createElement('input');
  input.className = 'answer';
  input.type = 'text';
  input.autocomplete = 'off';
  input.autocapitalize = 'off';
  input.spellcheck = false;
  input.setAttribute('autocorrect', 'off');
  input.lang = 'fr';
  input.placeholder = placeholder;
  body.appendChild(input);
  body.appendChild(accentBar(input));
  input.oninput = () => { btn.disabled = !input.value.trim(); };
  setTimeout(() => input.focus(), 50);
  return input;
}

function typedResult(input, answers, sayFull) {
  const r = check(input.value, answers);
  input.disabled = true;
  input.classList.add(r.ok ? 'right' : 'wrong');
  let msg = '';
  if (r.accentOnly) msg = `Bijna perfect — let op de accenten: <b>${esc(r.closest)}</b>`;
  else if (r.typo) msg = `Goed! Klein tikfoutje: <b>${esc(r.closest)}</b>`;
  return { ok: r.ok, msg, solution: r.ok ? null : r.closest, say: r.ok ? (sayFull ? sayFull(r.closest) : null) : null };
}

const renderers = {
  mc(body, ex, btn) {
    body.innerHTML = `<div class="ex-kind">Kies het juiste antwoord</div>
      ${ex.q ? `<div class="ex-prompt">${ex.q}</div>` : ''}
      ${ex.s ? `<div class="ex-sentence">${sentenceHtml(ex.s)}</div>` : ''}`;
    const c = choiceButtons(body, ex.options, btn);
    return {
      check() {
        c.reveal();
        const ok = c.value === c.correct;
        const full = ex.s ? fillWith(ex.s, c.correct) : null;
        return { ok, solution: ok ? null : (full || c.correct), say: ok && full && !ex.noSay ? full : null };
      },
    };
  },

  fill(body, ex, btn) {
    body.innerHTML = `<div class="ex-kind">Vul in</div>
      ${ex.q ? `<div class="ex-prompt">${ex.q}</div>` : ''}
      <div class="ex-sentence">${sentenceHtml(ex.s)}</div>
      ${ex.hint ? `<p class="muted small">Hint: ${ex.hint}</p>` : ''}`;
    const input = textInput(body, btn, 'Ontbrekend woord…');
    const answers = Array.isArray(ex.answer) ? ex.answer : [ex.answer];
    return {
      check() {
        const r = typedResult(input, answers, a => fillWith(ex.s, a));
        if (!r.ok) r.solution = fillWith(ex.s, answers[0]);
        return r;
      },
    };
  },

  translate(body, ex, btn) {
    body.innerHTML = `<div class="ex-kind">Vertaal naar het Frans</div>
      <div class="ex-sentence">${esc(ex.nl)}</div>
      ${ex.hint ? `<p class="muted small">Hint: ${ex.hint}</p>` : ''}`;
    const input = textInput(body, btn);
    const answers = Array.isArray(ex.answer) ? ex.answer : [ex.answer];
    return { check: () => typedResult(input, answers, a => a) };
  },

  order(body, ex, btn) {
    const words = tokenize(ex.fr);
    const bank = shuffle([...words, ...(ex.extra || [])].map((w, i) => ({ w, i })));
    body.innerHTML = `<div class="ex-kind">Zet de woorden in de goede volgorde</div>
      <div class="ex-sentence">${esc(ex.nl)}</div>
      <div class="tiles-answer" aria-label="Jouw zin"></div>
      <div class="tiles-bank"></div>`;
    const ans = $('.tiles-answer', body), bk = $('.tiles-bank', body);
    const chosen = [];
    bk.innerHTML = bank.map((t, k) => `<button class="wtile" data-k="${k}">${esc(t.w)}</button>`).join('');
    const redraw = () => {
      ans.innerHTML = chosen.map((k, j) => `<button class="wtile" data-j="${j}">${esc(bank[k].w)}</button>`).join('');
      $$('.wtile', bk).forEach(b => b.classList.toggle('used', chosen.includes(+b.dataset.k)));
      btn.disabled = chosen.length === 0;
    };
    bk.onclick = e => {
      const b = e.target.closest('.wtile'); if (!b || body.dataset.locked) return;
      const k = +b.dataset.k; if (chosen.includes(k)) return;
      chosen.push(k); sound('tap'); redraw();
    };
    ans.onclick = e => {
      const b = e.target.closest('.wtile'); if (!b || body.dataset.locked) return;
      chosen.splice(+b.dataset.j, 1); redraw();
    };
    return {
      check() {
        body.dataset.locked = 1;
        const attempt = chosen.map(k => bank[k].w).join(' ');
        const ok = check(attempt, [words.join(' ')]).ok;
        return { ok, solution: ok ? null : ex.fr, say: ok ? ex.fr : null };
      },
    };
  },

  listen(body, ex, btn) {
    body.innerHTML = `<div class="ex-kind">Luister en kies de betekenis</div>
      <div class="row" style="margin:10px 0 16px">
        <button class="btn yellow" id="play">🔊 Afspelen</button>
        <button class="btn ghost small" id="slow">🐌 Langzaam</button>
      </div>`;
    $('#play', body).onclick = () => speech.say(ex.fr);
    $('#slow', body).onclick = () => speech.say(ex.fr, { rate: 0.6 });
    setTimeout(() => speech.say(ex.fr), 300);
    const c = choiceButtons(body, ex.options, btn);
    return {
      check() {
        c.reveal();
        const ok = c.value === c.correct;
        return { ok, msg: `De zin was: <b>${esc(ex.fr)}</b>`, solution: ok ? null : c.correct };
      },
    };
  },

  dictee(body, ex, btn) {
    body.innerHTML = `<div class="ex-kind">Dictee — typ wat je hoort</div>
      <div class="row" style="margin:10px 0 16px">
        <button class="btn yellow" id="play">🔊 Afspelen</button>
        <button class="btn ghost small" id="slow">🐌 Langzaam</button>
      </div>`;
    $('#play', body).onclick = () => speech.say(ex.fr);
    $('#slow', body).onclick = () => speech.say(ex.fr, { rate: 0.6 });
    setTimeout(() => speech.say(ex.fr), 300);
    const input = textInput(body, btn, 'Wat hoor je?');
    return {
      check() {
        const r = typedResult(input, [ex.fr], null);
        if (ex.nl) r.msg = (r.msg ? r.msg + '<br>' : '') + `Betekenis: ${esc(ex.nl)}`;
        return r;
      },
    };
  },

  match(body, ex, btn) {
    const left = shuffle(ex.pairs.map((p, i) => ({ t: p[0], i })));
    const right = shuffle(ex.pairs.map((p, i) => ({ t: p[1], i })));
    body.innerHTML = `<div class="ex-kind">Koppel de paren</div>
      <div class="ex-prompt">Tik een Frans woord en daarna de vertaling.</div>
      <div class="match-grid">
        <div class="options" id="ml">${left.map(x => `<button class="opt" data-i="${x.i}" data-say="${speech.escapeAttr(x.t)}">${esc(x.t)}</button>`).join('')}</div>
        <div class="options" id="mr">${right.map(x => `<button class="opt" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>
      </div>`;
    let selL = null, selR = null, mistakes = 0, matched = 0;
    const tryMatch = () => {
      if (!selL || !selR) return;
      if (selL.dataset.i === selR.dataset.i) {
        [selL, selR].forEach(b => { b.classList.remove('sel'); b.classList.add('right'); setTimeout(() => b.classList.add('gone'), 250); });
        matched++; sound('ok');
        if (matched === ex.pairs.length) { btn.disabled = false; btn.click(); }
      } else {
        mistakes++; sound('bad');
        const a = selL, b = selR;
        [a, b].forEach(x => x.classList.add('wrong'));
        setTimeout(() => [a, b].forEach(x => x.classList.remove('wrong', 'sel')), 450);
      }
      selL = selR = null;
    };
    $('#ml', body).onclick = e => {
      const b = e.target.closest('.opt'); if (!b) return;
      $$('#ml .opt', body).forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); selL = b; tryMatch();
    };
    $('#mr', body).onclick = e => {
      const b = e.target.closest('.opt'); if (!b) return;
      $$('#mr .opt', body).forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); selR = b; tryMatch();
    };
    btn.textContent = 'Koppel alle paren';
    return {
      check() {
        const ok = mistakes <= 1;
        return { ok, msg: mistakes ? `${mistakes} fout${mistakes > 1 ? 'en' : ''} gemaakt.` : 'Foutloos!' };
      },
    };
  },

  speak(body, ex, btn) {
    body.innerHTML = `<div class="ex-kind">Spreek uit</div>
      <div class="ex-prompt">Zeg deze zin hardop:</div>
      <div class="row" style="align-items:flex-start">
        <div class="ex-sentence" style="flex:1;margin:0">${esc(ex.fr)}</div>
        ${speech.speakBtn(ex.fr)}
      </div>
      <p class="muted">${esc(ex.nl || '')}</p>
      <div class="center" style="margin:18px 0">
        <button class="iconbtn mic" id="mic" aria-label="Opnemen">🎤</button>
        <p class="small muted" id="heard">${speech.canListen() ? 'Tik op de microfoon en spreek.' : 'Spraakherkenning werkt niet in deze browser. Zeg de zin hardop en tik op Controleer.'}</p>
      </div>`;
    let best = 0, heard = '';
    btn.disabled = false; // altijd verder kunnen, ook zonder microfoon
    $('#mic', body).onclick = () => {
      const mic = $('#mic', body);
      mic.classList.add('listening');
      $('#heard', body).textContent = 'Ik luister…';
      speech.listen({
        onresult(alts, final) {
          const scores = alts.map(a => similarity(a, ex.fr));
          const i = scores.indexOf(Math.max(...scores));
          heard = alts[i];
          $('#heard', body).innerHTML = `Ik hoorde: <b>${esc(heard)}</b>`;
          if (final) { best = Math.max(best, scores[i]); btn.disabled = false; }
        },
        onend() { mic.classList.remove('listening'); btn.disabled = false; },
        onerror(err) {
          mic.classList.remove('listening');
          $('#heard', body).textContent = err === 'not-allowed' ? 'Geef de browser toestemming voor de microfoon.' : 'Niets gehoord. Probeer opnieuw, of tik op Controleer.';
          btn.disabled = false;
        },
      });
    };
    return {
      check() {
        if (!speech.canListen() || !heard) return { ok: true, msg: 'Geoefend! (Niet automatisch gecontroleerd.)', say: ex.fr };
        const pct = Math.round(best * 100);
        const ok = best >= 0.75;
        return { ok, msg: `Overeenkomst: ${pct}%. ${ok ? 'Goed verstaanbaar!' : 'Luister nog eens en probeer het opnieuw.'}`, solution: ok ? null : ex.fr };
      },
    };
  },
};

// Splits een zin in woorden voor de "order"-oefening (leestekens weg, apostrof blijft aan woord vast)
export function tokenize(s) {
  return s.replace(/[.,!?;:«»]/g, ' ').split(/\s+/).filter(Boolean);
}
