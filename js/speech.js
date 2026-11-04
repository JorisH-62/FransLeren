// Franse uitspraak via de ingebouwde stem van de browser + spraakherkenning.
import * as store from './store.js';

let voices = [];
function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  voices = speechSynthesis.getVoices().filter(v => /^fr(-|_|$)/i.test(v.lang));
}
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

export function frenchVoices() { loadVoices(); return voices; }
export const canSpeak = () => 'speechSynthesis' in window;

function pickVoice() {
  const want = store.setting('voice');
  if (want) {
    const v = voices.find(v => v.name === want);
    if (v) return v;
  }
  // voorkeur: fr-FR, dan lokale stemmen (werken offline)
  return voices.find(v => /fr[-_]FR/i.test(v.lang) && v.localService)
    || voices.find(v => /fr[-_]FR/i.test(v.lang))
    || voices[0] || null;
}

// Zeg een Franse tekst. opts: { rate, onword(charIndex), onend, button }
export function say(text, opts = {}) {
  if (!canSpeak()) return Promise.resolve();
  speechSynthesis.cancel();
  return new Promise(resolve => {
    const u = new SpeechSynthesisUtterance(cleanForSpeech(text));
    u.lang = 'fr-FR';
    const v = pickVoice();
    if (v) u.voice = v;
    u.rate = opts.rate ?? store.setting('rate') ?? 0.9;
    const btn = opts.button;
    if (btn) btn.classList.add('speaking');
    if (opts.onword) u.onboundary = e => { if (e.name === 'word' || e.name === undefined) opts.onword(e.charIndex); };
    const done = () => { if (btn) btn.classList.remove('speaking'); opts.onend?.(); resolve(); };
    u.onend = done; u.onerror = done;
    speechSynthesis.speak(u);
  });
}

export function stop() { if (canSpeak()) speechSynthesis.cancel(); }

function cleanForSpeech(t) {
  return t.replace(/[*_]/g, '').replace(/\s+/g, ' ').trim();
}

// ---- Spraakherkenning (werkt in Chrome/Android, Safari iOS 14.5+) ----
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
export const canListen = () => !!SR;

export function listen({ onresult, onend, onerror } = {}) {
  if (!SR) { onerror?.('niet-ondersteund'); return null; }
  const r = new SR();
  r.lang = 'fr-FR';
  r.interimResults = true;
  r.maxAlternatives = 5;
  r.continuous = false;
  r.onresult = e => {
    const res = e.results[e.results.length - 1];
    const alts = [];
    for (let i = 0; i < res.length; i++) alts.push(res[i].transcript);
    onresult?.(alts, res.isFinal);
  };
  r.onerror = e => onerror?.(e.error);
  r.onend = () => onend?.();
  try { r.start(); } catch (e) { onerror?.(String(e)); return null; }
  return r;
}

// Een klein "speak"-knopje als HTML
export function speakBtn(text, label = 'Uitspreken') {
  return `<button class="iconbtn" data-say="${escapeAttr(text)}" aria-label="${label}" title="${label}">🔊</button>`;
}

export function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

// Globale delegatie: elk element met data-say wordt uitgesproken bij klik
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b) { e.preventDefault(); say(b.dataset.say, { button: b }); }
});
