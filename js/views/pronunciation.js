import * as store from '../store.js';
import { esc, shuffle, sound, confetti, $ } from '../util.js';
import { runExercises } from '../exercise.js';

const SOUNDS = [
  { k: 'u / ou', tip: '<b>u</b> = Nederlandse "uu" (tuut). <b>ou</b> = "oe". Het verschil is belangrijk: <i>dessus</i> (erop) vs. <i>dessous</i> (eronder)!', ex: [['tu', 'jij'], ['tout', 'alles'], ['rue', 'straat'], ['roue', 'wiel'], ['dessus', 'erop'], ['dessous', 'eronder']] },
  { k: 'Neusklanken', tip: 'Spreek de klinker uit door je neus, en zeg de n/m <b>niet</b>. Er zijn er drie: <b>an/en</b> (zoals in "kant" maar door je neus), <b>on</b>, en <b>in/ain/un</b>.', ex: [['blanc', 'wit'], ['enfant', 'kind'], ['bon', 'goed'], ['maison', 'huis'], ['vin', 'wijn'], ['pain', 'brood'], ['un', 'een']] },
  { k: 'De Franse r', tip: 'Een keel-r, zoals de Nederlandse "g" maar zachter en verder achterin. Gorgelen zonder water!', ex: [['rouge', 'rood'], ['Paris', 'Parijs'], ['merci', 'dank je'], ['très', 'heel'], ['heureux', 'gelukkig']] },
  { k: 'é / è / e', tip: '<b>é</b> = gesloten "ee" (zonder na-klank). <b>è / ê</b> = open "è" zoals in "pet". Een <b>e</b> zonder accent is vaak stom of een zachte "uh".', ex: [['café', 'koffie'], ['été', 'zomer'], ['mère', 'moeder'], ['fête', 'feest'], ['le', 'de'], ['petit', 'klein']] },
  { k: 'Stomme letters', tip: 'Medeklinkers aan het eind spreek je meestal niet uit. Uitzondering: <b>c, r, f, l</b> (denk aan "CaReFuL"). En de <b>-ent</b> van werkwoorden is helemaal stom!', ex: [['chaud', 'warm'], ['beaucoup', 'veel'], ['sac', 'tas'], ['sel', 'zout'], ['ils parlent', 'zij praten'], ['neuf', 'negen']] },
  { k: 'Liaison', tip: 'Een stomme eindmedeklinker wordt wél uitgesproken als het volgende woord met een klinker begint: <i>les‿amis</i> (lè-za-mie). Een s wordt dan een z.', ex: [['les amis', 'de vrienden'], ['vous avez', 'jullie hebben'], ['ils ont', 'zij hebben'], ['un petit enfant', 'een klein kind'], ['c\'est un ami', 'het is een vriend']] },
  { k: 'gn, ill, ch, j', tip: '<b>gn</b> = "nj" (champignon). <b>ill</b> = meestal "iej" (famille, fille). <b>ch</b> = "sj". <b>j</b> en zachte <b>g</b> = zoals de "g" in "garage".', ex: [['montagne', 'berg'], ['famille', 'familie'], ['fille', 'dochter'], ['chocolat', 'chocolade'], ['jardin', 'tuin'], ['manger', 'eten']] },
  { k: 'oi, au, eu', tip: '<b>oi</b> = "wa". <b>au / eau</b> = "oo". <b>eu / œu</b> = "eu" (zoals in "neus").', ex: [['moi', 'ik'], ['voiture', 'auto'], ['gâteau', 'taart'], ['jaune', 'geel'], ['deux', 'twee'], ['sœur', 'zus']] },
];

const PAIRS = [
  ['tu', 'tout'], ['dessus', 'dessous'], ['rue', 'roue'], ['vu', 'vous'],
  ['vent', 'vin'], ['bon', 'banc'], ['cent', 'son'], ['blanc', 'blond'],
  ['le', 'les'], ['deux', 'des'], ['ils sont', 'ils ont'], ['poisson', 'poison'],
  ['cheveux', 'chevaux'], ['beau', 'bout'], ['fait', 'fée'], ['russe', 'rousse'],
];

const TWISTERS = [
  ['Un chasseur sachant chasser doit savoir chasser sans son chien.', 'Een jager die kan jagen moet kunnen jagen zonder zijn hond.'],
  ['Les chaussettes de l\'archiduchesse sont-elles sèches ou archi-sèches ?', 'Zijn de sokken van de aartshertogin droog of superdroog?'],
  ['Si six scies scient six cyprès, six cent six scies scient six cent six cyprès.', 'Als zes zagen zes cipressen zagen, zagen 606 zagen 606 cipressen.'],
  ['Ton thé t\'a-t-il ôté ta toux ?', 'Heeft je thee je hoest weggenomen?'],
  ['Un pâtissier qui pâtissait chez un tapissier qui tapissait…', 'Een banketbakker die bakte bij een stoffeerder die stoffeerde…'],
  ['Les vers verts levèrent le verre vert vers le ver vert.', 'De groene wormen hieven het groene glas naar de groene worm.'],
  ['Petit pot de beurre, quand te dépetit-pot-de-beurreriseras-tu ?', 'Potje boter, wanneer ont-potje-boter je je? (onzin, maar leuk!)'],
];

export function render(root) {
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>👄 Uitspraak</h1>
    <p class="muted">Tik op een woord om het te horen. Zeg het daarna hardop na. Overdrijf gerust: Frans praat je met je mond in een tuitje! 😗</p>
    <button class="btn block yellow" id="pairs">🎧 Luistertest: welk woord hoor je?</button>
    ${SOUNDS.map(s => `
      <div class="card theory">
        <h2 style="margin-top:0">${esc(s.k)}</h2>
        <p>${s.tip}</p>
        <div class="row wrap">${s.ex.map(([fr, nl]) => `<button class="btn small ghost" data-say="${esc(fr)}">🔊 ${esc(fr)} <span class="muted" style="font-weight:600">· ${esc(nl)}</span></button>`).join('')}</div>
      </div>`).join('')}
    <h2>👅 Tongbrekers (virelangues)</h2>
    ${TWISTERS.map(([fr, nl]) => `
      <div class="card">
        <div class="row" style="align-items:flex-start"><div style="flex:1"><b class="fr-inline">${esc(fr)}</b><div class="small muted">${esc(nl)}</div></div>
        <button class="iconbtn" data-say="${esc(fr)}">🔊</button></div>
        <button class="btn small ghost" data-speak="${esc(fr)}" data-nl="${esc(nl)}" style="margin-top:8px">🎤 Probeer het zelf</button>
      </div>`).join('')}
  `;
  $('#pairs', root).onclick = () => pairsQuiz(root);
  root.onclick = e => {
    const b = e.target.closest('[data-speak]');
    if (!b) return;
    runExercises(root, [{ type: 'speak', fr: b.dataset.speak, nl: b.dataset.nl }], {
      onQuit: () => render(root),
      onFinish: () => { store.addXp(5); render(root); },
    });
  };
}

function pairsQuiz(root) {
  const ex = shuffle(PAIRS).slice(0, 10).map(pair => {
    const [a, b] = Math.random() < 0.5 ? pair : [pair[1], pair[0]];
    return { type: 'listen', fr: a, options: [a, b] };
  });
  runExercises(root, ex, {
    onQuit: () => render(root),
    onFinish: ({ right, total }) => {
      const xp = right * 2;
      store.addXp(xp);
      sound('win');
      if (right / total >= 0.8) confetti();
      root.innerHTML = `<div class="result"><div class="big">🎧</div><h1>${right}/${total} goed gehoord!</h1><p class="muted"><b>+${xp} XP</b></p>
        <div class="stack" style="margin-top:20px"><button class="btn block green" id="again">🔁 Nog een keer</button><button class="btn block ghost" id="back">Terug naar uitspraak</button></div></div>`;
      $('#again', root).onclick = () => pairsQuiz(root);
      $('#back', root).onclick = () => render(root);
    },
  });
}
