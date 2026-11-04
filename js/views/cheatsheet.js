// Spiekbriefje: alle belangrijke regels compact op één pagina
import { tbl, tip } from '../data/helpers.js';

export function render(root) {
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>📝 Spiekbriefje</h1>
    <p class="muted">De belangrijkste regels op één pagina. Handig om even te spieken voor je de familie belt! Tik op Franse woorden om ze te horen.</p>
    <div class="card theory">
      <h2 style="margin-top:0">🧱 De 6 belangrijkste werkwoorden (présent)</h2>
      ${tbl(['', 'être', 'avoir', 'aller', 'faire'], [
        ['je', 'suis', 'ai', 'vais', 'fais'], ['tu', 'es', 'as', 'vas', 'fais'], ['il/elle/on', 'est', 'a', 'va', 'fait'],
        ['nous', 'sommes', 'avons', 'allons', 'faisons'], ['vous', 'êtes', 'avez', 'allez', 'faites'], ['ils/elles', 'sont', 'ont', 'vont', 'font'],
      ], [1, 2, 3, 4])}
      ${tbl(['', 'pouvoir', 'vouloir'], [
        ['je', 'peux', 'veux'], ['tu', 'peux', 'veux'], ['il', 'peut', 'veut'], ['nous', 'pouvons', 'voulons'], ['vous', 'pouvez', 'voulez'], ['ils', 'peuvent', 'veulent'],
      ], [1, 2])}
    </div>
    <div class="card theory">
      <h2 style="margin-top:0">⏱️ De tijden in één oogopslag</h2>
      ${tbl(['Tijd', 'Vorm', 'Voorbeeld', 'Gebruik'], [
        ['Présent', 'stam + e/es/e/ons/ez/ent', 'je parle', 'nu, gewoonte'],
        ['Futur proche', 'aller + infinitief', 'je vais parler', 'gaan doen'],
        ['Passé composé', 'avoir/être + deelwoord', 'j\'ai parlé', 'afgeronde actie'],
        ['Imparfait', 'nous-stam + ais/ait/ions/iez/aient', 'je parlais', 'beschrijving, gewoonte vroeger'],
        ['Futur simple', 'infinitief + ai/as/a/ons/ez/ont', 'je parlerai', 'toekomst'],
        ['Conditionnel', 'futur-stam + ais/ait…', 'je parlerais', 'zou, beleefd'],
        ['Subjonctif', 'ils-stam + e/es/e/ions/iez/ent', 'que je parle', 'na il faut que, vouloir que…'],
      ], [2])}
      ${tip('Passé composé met <b>être</b>: beweging (aller, venir, partir, arriver, entrer, sortir, monter, descendre, tomber, rester, naître, mourir, rentrer) + alle wederkerende werkwoorden.')}
    </div>
    <div class="card theory">
      <h2 style="margin-top:0">📦 Lidwoorden</h2>
      ${tbl(['', 'mannelijk', 'vrouwelijk', 'meervoud'], [
        ['de / het', 'le (l\')', 'la (l\')', 'les'], ['een', 'un', 'une', 'des'], ['wat (delend)', 'du', 'de la', 'des'],
        ['à +', 'au', 'à la', 'aux'], ['de +', 'du', 'de la', 'des'],
      ], [1, 2, 3])}
      <p>Na ontkenning: <span class="fr">pas de</span> (Je n'ai pas <b>de</b> voiture).</p>
    </div>
    <div class="card theory">
      <h2 style="margin-top:0">👤 Voornaamwoorden</h2>
      ${tbl(['onderwerp', 'nadruk', 'lijdend vw.', 'meewerkend vw.', 'bezittelijk (m/v/mv)'], [
        ['je', 'moi', 'me', 'me', 'mon / ma / mes'], ['tu', 'toi', 'te', 'te', 'ton / ta / tes'], ['il / elle', 'lui / elle', 'le / la', 'lui', 'son / sa / ses'],
        ['nous', 'nous', 'nous', 'nous', 'notre / nos'], ['vous', 'vous', 'vous', 'vous', 'votre / vos'], ['ils / elles', 'eux / elles', 'les', 'leur', 'leur / leurs'],
      ], [0, 1, 2, 3, 4])}
      <p><span class="fr">y</span> = daar / eraan · <span class="fr">en</span> = ervan / er (hoeveelheid)</p>
    </div>
    <div class="card theory">
      <h2 style="margin-top:0">❓ Vragen</h2>
      ${tbl(['Frans', 'NL'], [['qui', 'wie'], ['quoi / qu\'est-ce que', 'wat'], ['où', 'waar'], ['quand', 'wanneer'], ['comment', 'hoe'], ['pourquoi', 'waarom'], ['combien', 'hoeveel'], ['quel / quelle', 'welk(e)']], [0])}
      <p>Makkelijkst: zin + stem omhoog (<span class="fr">Tu viens ?</span>) of <span class="fr">Est-ce que</span> + zin.</p>
    </div>
    <div class="card theory">
      <h2 style="margin-top:0">🙅 Ontkenning</h2>
      ${tbl(['Frans', 'NL'], [['ne … pas', 'niet'], ['ne … jamais', 'nooit'], ['ne … plus', 'niet meer'], ['ne … rien', 'niets'], ['ne … personne', 'niemand'], ['ne … pas encore', 'nog niet']], [0])}
      <p>Spreektaal laat <i>ne</i> vaak weg: <span class="fr">Je sais pas.</span></p>
    </div>
    <div class="card theory">
      <h2 style="margin-top:0">🤔 Si-zinnen</h2>
      ${tbl(['Si +', 'dan', 'Voorbeeld'], [
        ['présent', 'présent / futur', 'S\'il pleut, on reste à la maison.'],
        ['imparfait', 'conditionnel', 'Si j\'étais riche, je voyagerais.'],
      ], [2])}
      <p>⚠️ Nooit futur of conditionnel direct na <i>si</i>!</p>
    </div>
    <div class="card theory">
      <h2 style="margin-top:0">🆘 Noodzinnen</h2>
      ${tbl(['Frans', 'NL'], [
        ['Pardon, je n\'ai pas compris.', 'Sorry, ik heb het niet verstaan.'], ['Vous pouvez répéter ?', 'Kunt u dat herhalen?'],
        ['Plus lentement, s\'il vous plaît.', 'Langzamer, alstublieft.'], ['Comment on dit… ?', 'Hoe zeg je…?'], ['Qu\'est-ce que ça veut dire ?', 'Wat betekent dat?'],
      ], [0])}
    </div>
  `;
}
