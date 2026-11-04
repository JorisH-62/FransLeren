// Tijdelijke startpagina — de volledige app wordt vanavond gebouwd.
import * as store from './store.js';

store.rollDay();
document.getElementById('app').innerHTML = `
  <div class="hero">
    <h1>Bonjour ! 👋</h1>
    <p>FransLeren wordt op dit moment gebouwd.</p>
    <div class="bubble">Gaston de slak werkt hard… nou ja, zo hard als een slak kan. Kom straks terug! 🐌</div>
    <div class="snail-big" aria-hidden="true">🐌</div>
  </div>
  <div class="card">
    <h2 style="margin-top:0">Wat komt er?</h2>
    <p>🗺️ Grammatica van A1 tot B1, uitgelegd in het Nederlands</p>
    <p>🃏 Flashcards met slim herhalen</p>
    <p>📚 Grappige kinderverhalen met tik-om-te-vertalen</p>
    <p>💬 Gesprekken oefenen met de familie</p>
    <p>🔤 Werkwoorden-trainer en Franse uitdrukkingen</p>
  </div>`;
