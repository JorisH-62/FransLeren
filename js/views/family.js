// Mijn familie: echte familieleden invoeren en daar oefenzinnen van maken
import * as store from '../store.js';
import * as srs from '../srs.js';
import { esc, toast, $, $$ } from '../util.js';

const RELATIONS = [
  ['belle-mère', 'f', 'schoonmoeder'], ['beau-père', 'm', 'schoonvader'], ['mari', 'm', 'man / echtgenoot'], ['femme', 'f', 'vrouw / echtgenote'],
  ['copain', 'm', 'vriend (partner)'], ['copine', 'f', 'vriendin (partner)'], ['fils', 'm', 'zoon'], ['fille', 'f', 'dochter'],
  ['frère', 'm', 'broer'], ['sœur', 'f', 'zus'], ['beau-frère', 'm', 'zwager'], ['belle-sœur', 'f', 'schoonzus'],
  ['grand-père', 'm', 'opa'], ['grand-mère', 'f', 'oma'], ['oncle', 'm', 'oom'], ['tante', 'f', 'tante'],
  ['cousin', 'm', 'neef (kind van oom/tante)'], ['cousine', 'f', 'nicht (kind van oom/tante)'], ['neveu', 'm', 'neef (kind van broer/zus)'], ['nièce', 'f', 'nicht (kind van broer/zus)'],
  ['ami', 'm', 'vriend'], ['amie', 'f', 'vriendin'], ['père', 'm', 'vader'], ['mère', 'f', 'moeder'],
];

const vowel = w => /^[aeiouéèêh]/i.test(w);
const poss = (rel, g) => (g === 'm' || vowel(rel)) ? 'mon' : 'ma';
const relNl = rel => RELATIONS.find(r => r[0] === rel)?.[2] || rel;

function sentences(p) {
  const [rel, g] = [p.rel, RELATIONS.find(r => r[0] === p.rel)?.[1] || 'm'];
  const pr = g === 'f' ? 'Elle' : 'Il';
  const my = `${poss(rel, g)} ${rel}`;
  const nlMy = `mijn ${relNl(rel).split(' (')[0]}`;
  const out = [
    [`Je vous présente ${my}, ${p.name}.`, `Mag ik u voorstellen: ${nlMy}, ${p.name}.`],
    [`${pr} s'appelle ${p.name}.`, `${g === 'f' ? 'Zij' : 'Hij'} heet ${p.name}.`],
    [`${p.name}, c'est ${my}.`, `${p.name} is ${nlMy}.`],
  ];
  if (p.city) out.push([`${pr} habite à ${p.city}.`, `${g === 'f' ? 'Zij' : 'Hij'} woont in ${p.city}.`]);
  if (p.age) out.push([`${pr} a ${p.age} ans.`, `${g === 'f' ? 'Zij' : 'Hij'} is ${p.age} jaar.`]);
  out.push([`Comment va ${p.name} ?`, `Hoe gaat het met ${p.name}?`]);
  out.push([`Tu peux dire bonjour à ${p.name} de ma part ?`, `Kun je ${p.name} de groeten doen van mij?`]);
  return out;
}

export function render(root) {
  const s = store.get();
  const fam = s.family || [];
  root.innerHTML = `
    <a href="#/" class="small">‹ Start</a>
    <h1>👨‍👩‍👧 Mijn familie</h1>
    <p class="muted">Voeg je echte (schoon)familie toe. FransLeren maakt er oefenzinnen van, zodat je hen straks in het Frans kunt voorstellen en naar hen kunt vragen.</p>
    <div class="card stack">
      <b>➕ Familielid toevoegen</b>
      <input class="answer" id="name" placeholder="Naam (bv. Sylvie)" autocomplete="off">
      <select id="rel" style="width:100%">${RELATIONS.map(([fr, g, nl]) => `<option value="${esc(fr)}">${esc(nl)} — ${poss(fr, g)} ${esc(fr)}</option>`).join('')}</select>
      <div class="row"><input class="answer" id="city" placeholder="Woonplaats (optioneel)" autocomplete="off"><input class="answer" id="age" placeholder="Leeftijd" inputmode="numeric" style="max-width:110px"></div>
      <button class="btn green" id="add">Toevoegen</button>
    </div>
    ${fam.length ? '' : '<p class="muted center">Nog niemand toegevoegd.</p>'}
    ${fam.map((p, i) => `
      <div class="card">
        <div class="row"><b style="font-size:1.1rem">${esc(p.name)}</b><span class="pill">${esc(relNl(p.rel))}</span><span class="spacer"></span>
          <button class="iconbtn" data-del="${i}" aria-label="Verwijderen" style="background:var(--red-soft);color:var(--red)">🗑️</button></div>
        ${sentences(p).map(([fr, nl]) => `<div class="row" style="padding:7px 0;border-bottom:1px dashed var(--line)">
          <div style="flex:1;cursor:pointer" data-say="${esc(fr)}"><span class="fr-inline">${esc(fr)}</span><div class="small muted">${esc(nl)}</div></div>
          <button class="iconbtn" data-add="${esc(fr)}" data-nl="${esc(nl)}" style="font-size:.95rem">${srs.hasCard(fr) ? '✅' : '➕'}</button></div>`).join('')}
      </div>`).join('')}
  `;
  $('#add', root).onclick = () => {
    const name = $('#name', root).value.trim();
    if (!name) return toast('Vul een naam in');
    const age = parseInt($('#age', root).value, 10);
    s.family = [...fam, { name, rel: $('#rel', root).value, city: $('#city', root).value.trim(), age: age > 0 && age < 130 ? age : null }];
    store.save();
    render(root);
  };
  root.onclick = e => {
    const d = e.target.closest('[data-del]');
    if (d) { if (confirm('Verwijderen?')) { s.family.splice(+d.dataset.del, 1); store.save(); render(root); } return; }
    const a = e.target.closest('[data-add]');
    if (a) { if (srs.addCard(a.dataset.add, a.dataset.nl, 'familie')) toast('Toegevoegd aan je flashcards 🃏'); a.textContent = '✅'; }
  };
}
