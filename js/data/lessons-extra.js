import { ex, exs, tbl, tip, warn, f, conj } from './helpers.js';

export const EXTRA_A1 = [
{
  id: 'a1-toniques', unit: 'A1', emoji: '🫵', title: 'Moi, toi, lui: nadruk leggen', sub: 'Moi, je… · Et toi ? · chez moi',
  theory: `
<h2>Beklemtoonde voornaamwoorden</h2>
<p>Naast <i>je, tu, il…</i> heeft het Frans een tweede rij voornaamwoorden. Die gebruik je voor nadruk, na voorzetsels en als losse woorden.</p>
${tbl(['gewoon', 'beklemtoond', 'Nederlands'], [
  ['je', 'moi', 'ik / mij'], ['tu', 'toi', 'jij / jou'], ['il', 'lui', 'hij / hem'], ['elle', 'elle', 'zij / haar'],
  ['nous', 'nous', 'wij / ons'], ['vous', 'vous', 'jullie / u'], ['ils', 'eux', 'zij / hen (m)'], ['elles', 'elles', 'zij / hen (v)'],
], [1])}
<h2>Wanneer?</h2>
${tbl(['Situatie', 'Voorbeeld'], [
  ['Nadruk (heel gebruikelijk!)', 'Moi, je préfère le vin rouge.'],
  ['Korte vraag terug', 'Ça va bien. Et toi ?'],
  ['Na een voorzetsel', 'avec moi, pour toi, chez lui, sans eux'],
  ['Na c\'est', 'C\'est moi ! C\'est lui qui a fait le gâteau.'],
  ['Alleen, zonder werkwoord', 'Qui veut du café ? — Moi !'],
  ['Na vergelijking', 'Il est plus grand que moi.'],
], [1])}
${exs([
  ['Moi, j\'adore le fromage. Lui, il déteste ça.', 'Ik ben dol op kaas. Hij, hij haat het.'],
  ['On mange chez toi ou chez moi ?', 'Eten we bij jou of bij mij?'],
  ['C\'est pour toi, Mamie !', 'Dit is voor jou, oma!'],
  ['Moi aussi ! / Moi non plus.', 'Ik ook! / Ik ook niet.'],
])}
${tip(`Fransen beginnen een zin heel vaak met ${f('Moi, je…')} of ${f('Moi, personnellement…')} Dat klinkt meteen natuurlijk. En ${f('Moi aussi')} / ${f('Moi non plus')} gebruik je de hele dag.`)}
${warn(`"Ik ook niet" is ${f('moi non plus')}, niet "moi aussi pas".`)}
`,
  vocab: [['moi', 'ik / mij (nadruk)'], ['toi', 'jij / jou (nadruk)'], ['lui', 'hij / hem (nadruk)'], ['eux', 'zij / hen'], ['moi aussi', 'ik ook'], ['moi non plus', 'ik ook niet'], ['chez moi', 'bij mij thuis'], ['et toi ?', 'en jij?']],
  exercises: [
    { type: 'mc', s: 'Ça va bien, merci. Et ___ ?', options: ['toi', 'tu', 'te', 'ton'] },
    { type: 'mc', s: 'Tu viens avec ___ ?', q: 'Kom je met mij mee?', options: ['moi', 'je', 'me', 'mon'] },
    { type: 'mc', s: '___, je préfère le thé.', options: ['Moi', 'Je', 'Me', 'Ma'] },
    { type: 'mc', s: 'On dîne chez ___ ce soir.', q: 'bij hen (de ouders)', options: ['eux', 'ils', 'leur', 'les'] },
    { type: 'mc', q: '"Ik ook niet!"', options: ['Moi non plus !', 'Moi aussi pas !', 'Je non plus !', 'Moi pas aussi !'] },
    { type: 'fill', s: 'C\'est ___ qui a fait le gâteau. (hij)', answer: 'lui' },
    { type: 'fill', s: 'Il est plus grand que ___ . (ik)', answer: 'moi' },
    { type: 'translate', nl: 'Dit is voor jou!', answer: ['C\'est pour toi !', 'C\'est pour vous !'] },
    { type: 'translate', nl: 'Ik ook!', answer: ['Moi aussi !'] },
    { type: 'order', nl: 'Eten we bij jou of bij mij?', fr: 'On mange chez toi ou chez moi ?' },
    { type: 'listen', fr: 'Qui veut du café ? — Moi !', options: ['Wie wil er koffie? — Ik!', 'Wil jij koffie? — Nee!', 'Ik wil koffie, en jij?', 'Wie heeft de koffie gemaakt?'] },
    { type: 'speak', fr: 'Moi, je trouve que c\'est une très bonne idée.', nl: 'Ik vind dat een heel goed idee.' },
  ],
},
{
  id: 'a1-cest-ilest', unit: 'A1', emoji: '🤷', title: 'C\'est of il est?', sub: 'C\'est un ami · Il est sympa',
  theory: `
<h2>Twee manieren voor "het is / hij is"</h2>
${tbl(['C\'est / Ce sont', 'Il est / Elle est'], [
  ['+ lidwoord + zelfst. nw.: <b>C\'est un</b> ami.', '+ bijv. nw. over een persoon: <b>Il est</b> sympa.'],
  ['+ naam: <b>C\'est</b> Pierre.', '+ beroep zonder lidwoord: <b>Elle est</b> médecin.'],
  ['+ beklemtoond vnw: <b>C\'est</b> moi.', '+ nationaliteit: <b>Il est</b> français.'],
  ['+ bijv. nw. over een situatie: <b>C\'est</b> génial !', '+ tijd: <b>Il est</b> trois heures.'],
])}
${exs([
  ['C\'est mon oncle. Il est très drôle.', 'Dat is mijn oom. Hij is heel grappig.'],
  ['C\'est une bonne idée !', 'Dat is een goed idee!'],
  ['Elle est infirmière. C\'est une infirmière formidable.', 'Ze is verpleegkundige. Ze is een geweldige verpleegkundige.'],
  ['Ce sont mes cousins. Ils sont belges.', 'Dat zijn mijn neven. Ze zijn Belgisch.'],
  ['Le repas ? C\'est délicieux !', 'Het eten? Het is heerlijk!'],
])}
${tip(`Over een situatie of iets in het algemeen zeg je bijna altijd <b>c'est</b>: ${f('C\'est super !')} ${f('C\'est pas grave.')} ${f('C\'est trop cher.')} ${f('C\'est vrai.')} Die zinnen hoor je honderd keer per dag.`)}
${warn(`Niet: "Il est un ami". Wél: ${f('C\'est un ami.')} — zodra er een lidwoord (un, une, mon…) volgt, gebruik je c'est.`)}
`,
  vocab: [['c\'est vrai', 'dat is waar'], ['c\'est génial', 'dat is geweldig'], ['c\'est trop cher', 'het is te duur'], ['ce sont', 'dat zijn'], ['infirmier / infirmière', 'verpleegkundige'], ['médecin', 'arts'], ['belge', 'Belgisch']],
  exercises: [
    { type: 'mc', s: '___ mon frère.', options: ['C\'est', 'Il est', 'Elle est', 'Ils sont'] },
    { type: 'mc', s: 'Mon frère ? ___ très sympa.', options: ['Il est', 'C\'est', 'Ce sont', 'Elle est'] },
    { type: 'mc', s: '___ médecin.', q: 'Zij is arts.', options: ['Elle est', 'C\'est', 'C\'est une', 'Elle est une'] },
    { type: 'mc', s: '___ une bonne idée !', options: ['C\'est', 'Il est', 'Elle est', 'Ce sont'] },
    { type: 'mc', s: '___ mes parents.', options: ['Ce sont', 'C\'est', 'Ils sont', 'Il est'] },
    { type: 'mc', s: 'Le film ? ___ génial !', options: ['C\'est', 'Il est', 'Elle est', 'Ce sont'] },
    { type: 'mc', s: '___ trois heures.', options: ['Il est', 'C\'est', 'Elle est', 'Ce sont'] },
    { type: 'translate', nl: 'Dat is waar.', answer: ['C\'est vrai.'] },
    { type: 'translate', nl: 'Dat is mijn oom. Hij is grappig.', answer: ['C\'est mon oncle. Il est drôle.', 'C\'est mon oncle. Il est marrant.'] },
    { type: 'order', nl: 'Ze zijn Belgisch.', fr: 'Ils sont belges.' },
    { type: 'listen', fr: 'C\'est ma cousine. Elle est infirmière à Lyon.', options: ['Dat is mijn nicht. Ze is verpleegkundige in Lyon.', 'Mijn nicht woont in Lyon met een verpleegkundige.', 'Dat is mijn tante. Ze is arts in Lyon.', 'Mijn nicht wil verpleegkundige worden.'] },
  ],
},
];

export const EXTRA_A2 = [
{
  id: 'a2-bijwoorden', unit: 'A2', emoji: '🏎️', title: 'Bijwoorden: hoe doe je iets?', sub: 'lentement, vraiment, bien, vite',
  theory: `
<h2>-ment = -lijk / op een … manier</h2>
<p>Je maakt veel bijwoorden door <b>-ment</b> achter de <b>vrouwelijke</b> vorm van het bijvoeglijk naamwoord te plakken:</p>
${tbl(['bijv. nw. (m → v)', 'bijwoord', 'betekenis'], [
  ['lent → lente', 'lentement', 'langzaam'], ['heureux → heureuse', 'heureusement', 'gelukkig (maar)'], ['doux → douce', 'doucement', 'zachtjes'],
  ['sérieux → sérieuse', 'sérieusement', 'serieus'], ['complet → complète', 'complètement', 'helemaal'], ['malheureux → malheureuse', 'malheureusement', 'helaas'],
], [2])}
<p>Eindigt het woord al op een <b>klinker</b>? Dan gewoon <b>-ment</b> erachter: ${f('vrai → vraiment')}, ${f('poli → poliment')}, ${f('absolu → absolument')}.</p>
<p>Eindigt het op <b>-ant / -ent</b>? Dan wordt het <b>-amment / -emment</b> (beide uitgesproken als "aman"): ${f('courant → couramment')}, ${f('évident → évidemment')}.</p>
<h2>Belangrijke onregelmatige bijwoorden</h2>
${tbl(['bijv. nw.', 'bijwoord'], [['bon (goed)', 'bien'], ['mauvais (slecht)', 'mal'], ['meilleur (beter)', 'mieux'], ['rapide (snel)', 'vite / rapidement'], ['gentil', 'gentiment']], [1])}
${exs([
  ['Tu peux parler plus lentement ?', 'Kun je langzamer praten?'],
  ['Heureusement, il ne pleut pas !', 'Gelukkig regent het niet!'],
  ['Malheureusement, on doit partir.', 'Helaas moeten we gaan.'],
  ['Il parle couramment trois langues.', 'Hij spreekt drie talen vloeiend.'],
  ['Évidemment, le chat a mangé le jambon.', 'Natuurlijk heeft de kat de ham opgegeten.'],
  ['Tu chantes vraiment bien !', 'Je zingt echt goed!'],
])}
${tip(`Handig in gesprekken: ${f('franchement')} (eerlijk gezegd), ${f('justement')} (precies / juist), ${f('carrément')} (helemaal / echt wel), ${f('absolument')} (absoluut), ${f('évidemment')} (vanzelfsprekend).`)}
`,
  vocab: [['lentement', 'langzaam'], ['vite', 'snel'], ['heureusement', 'gelukkig'], ['malheureusement', 'helaas'], ['vraiment', 'echt'], ['doucement', 'zachtjes'], ['complètement', 'helemaal'], ['évidemment', 'vanzelfsprekend'], ['franchement', 'eerlijk gezegd'], ['justement', 'precies / juist'], ['couramment', 'vloeiend'], ['absolument', 'absoluut']],
  exercises: [
    { type: 'mc', q: 'Bijwoord van <b>lent</b> (langzaam):', options: ['lentement', 'lentment', 'lentemment', 'lente'], noSay: true },
    { type: 'mc', q: 'Bijwoord van <b>vrai</b>:', options: ['vraiment', 'vraiement', 'vraimment', 'vraitement'], noSay: true },
    { type: 'mc', q: 'Bijwoord van <b>évident</b>:', options: ['évidemment', 'évidentement', 'évidement', 'évidamment'], noSay: true },
    { type: 'mc', s: 'Tu chantes très ___ !', q: 'goed', options: ['bien', 'bon', 'bonne', 'bonnement'] },
    { type: 'fill', s: '___, il ne pleut pas ! (gelukkig)', answer: ['Heureusement', 'heureusement'] },
    { type: 'fill', s: 'Parle plus ___, s\'il te plaît. (zachtjes)', answer: 'doucement' },
    { type: 'match', pairs: [['malheureusement', 'helaas'], ['franchement', 'eerlijk gezegd'], ['vite', 'snel'], ['complètement', 'helemaal'], ['couramment', 'vloeiend']] },
    { type: 'translate', nl: 'Kun je langzamer praten?', answer: ['Tu peux parler plus lentement ?', 'Vous pouvez parler plus lentement ?', 'Est-ce que tu peux parler plus lentement ?'] },
    { type: 'translate', nl: 'Helaas moeten we gaan.', answer: ['Malheureusement, on doit partir.', 'Malheureusement, nous devons partir.', 'Malheureusement, il faut partir.', 'Malheureusement, on doit y aller.'] },
    { type: 'listen', fr: 'Franchement, c\'est vraiment le meilleur gâteau du monde.', options: ['Eerlijk gezegd is dit echt de lekkerste taart van de wereld.', 'Ik vind deze taart helaas niet lekker.', 'Deze taart is snel gemaakt.', 'Natuurlijk is dit een taart uit Frankrijk.'] },
    { type: 'speak', fr: 'Heureusement, tu parles lentement !', nl: 'Gelukkig praat jij langzaam!' },
  ],
},
];

export const EXTRA_B1 = [
{
  id: 'b1-indirect', unit: 'B1', emoji: '📣', title: 'Navertellen: indirecte rede', sub: 'Mamie a dit que…',
  theory: `
<h2>Vertellen wat iemand zei</h2>
<p>Perfect voor familieroddels 😉: "Oma zei dat…", "Hij vroeg of…".</p>
<h2>In de tegenwoordige tijd: geen verandering</h2>
${exs([
  ['Elle dit : « Je suis fatiguée. » → Elle dit qu\'elle est fatiguée.', 'Ze zegt dat ze moe is.'],
  ['Il demande : « Tu viens ? » → Il demande si tu viens.', 'Hij vraagt of je komt.'],
])}
<h2>In de verleden tijd: de tijden schuiven op</h2>
${tbl(['Wat iemand zei', '→ Il a dit que…'], [
  ['présent: « Je suis malade. »', 'imparfait: …qu\'il <b>était</b> malade.'],
  ['passé composé: « J\'ai gagné. »', 'plus-que-parfait: …qu\'il <b>avait</b> gagné.'],
  ['futur: « Je viendrai. »', 'conditionnel: …qu\'il <b>viendrait</b>.'],
  ['futur proche: « Je vais partir. »', '…qu\'il <b>allait</b> partir.'],
])}
${exs([
  ['Mamie a dit qu\'elle avait préparé un gâteau.', 'Oma zei dat ze een taart had gemaakt.'],
  ['Julie m\'a dit qu\'elle viendrait samedi.', 'Julie zei tegen me dat ze zaterdag zou komen.'],
  ['Papi a demandé si on avait faim.', 'Opa vroeg of we honger hadden.'],
  ['Il m\'a demandé où j\'habitais.', 'Hij vroeg me waar ik woonde.'],
])}
<h2>Vragen navertellen</h2>
${tbl(['Directe vraag', 'Indirect'], [
  ['ja/nee-vraag', '<b>si</b> (of): Il demande <b>si</b> tu as faim.'],
  ['Qu\'est-ce que… ?', '<b>ce que</b>: Il demande <b>ce que</b> tu veux.'],
  ['Où, quand, pourquoi, comment…', 'blijft: Il demande <b>où</b> tu habites.'],
])}
${tip(`Ook de voornaamwoorden veranderen, net als in het Nederlands: « <b>Je</b> suis content » → Il a dit qu'<b>il</b> était content.`)}
`,
  vocab: [['il a dit que', 'hij zei dat'], ['elle a demandé si', 'ze vroeg of'], ['ce que', 'wat'], ['raconter', 'vertellen'], ['répondre que', 'antwoorden dat'], ['expliquer que', 'uitleggen dat']],
  exercises: [
    { type: 'mc', q: '« Je suis fatigué. » → Il a dit qu\'il ___ fatigué.', options: ['était', 'est', 'sera', 'a été'], noSay: true },
    { type: 'mc', q: '« J\'ai gagné ! » → Elle a dit qu\'elle ___ gagné.', options: ['avait', 'a', 'aurait', 'avais'], noSay: true },
    { type: 'mc', q: '« Je viendrai demain. » → Il a dit qu\'il ___ le lendemain.', options: ['viendrait', 'viendra', 'venait', 'vient'], noSay: true },
    { type: 'mc', q: '« Tu as faim ? » → Papi a demandé ___ j\'avais faim.', options: ['si', 'que', 'ce que', 'quoi'], noSay: true },
    { type: 'mc', q: '« Qu\'est-ce que tu veux ? » → Elle demande ___ tu veux.', options: ['ce que', 'que', 'si', 'qu\'est-ce que'], noSay: true },
    { type: 'fill', s: 'Julie a dit qu\'elle ___ samedi. (venir → conditionnel)', answer: 'viendrait' },
    { type: 'fill', s: 'Il m\'a demandé où j\'___ . (habiter → imparfait)', answer: 'habitais' },
    { type: 'translate', nl: 'Oma zei dat ze moe was.', answer: ['Mamie a dit qu\'elle était fatiguée.', 'Grand-mère a dit qu\'elle était fatiguée.', 'Ma grand-mère a dit qu\'elle était fatiguée.'] },
    { type: 'order', nl: 'Opa vroeg of we honger hadden.', fr: 'Papi a demandé si on avait faim.' },
    { type: 'listen', fr: 'Ma belle-mère m\'a dit qu\'elle avait préparé mon plat préféré.', options: ['Mijn schoonmoeder zei dat ze mijn lievelingsgerecht had gemaakt.', 'Mijn schoonmoeder vroeg wat mijn lievelingsgerecht is.', 'Ik heb mijn schoonmoeder haar lievelingsgerecht gegeven.', 'Mijn schoonmoeder gaat morgen koken.'] },
    { type: 'speak', fr: 'On m\'a dit que vous aviez fait un très beau voyage.', nl: 'Ik hoorde dat jullie een heel mooie reis hebben gemaakt.' },
  ],
},
{
  id: 'b1-verbindingswoorden', unit: 'B1', emoji: '🧩', title: 'Verbindingswoorden', sub: 'pourtant, alors que, en plus, par contre',
  theory: `
<h2>Van losse zinnetjes naar echt vertellen</h2>
<p>Met deze woorden klinkt je Frans meteen een niveau hoger. Ze verbinden je ideeën.</p>
${tbl(['Functie', 'Frans', 'Nederlands'], [
  ['toevoegen', 'en plus / de plus / aussi', 'bovendien / ook'],
  ['tegenstelling', 'mais / par contre / pourtant', 'maar / daarentegen / toch'],
  ['tegenstelling (zin)', 'alors que / tandis que', 'terwijl (juist)'],
  ['toegeving', 'même si / bien que (+ subj.)', 'ook al / hoewel'],
  ['oorzaak', 'parce que / comme / puisque', 'omdat / aangezien'],
  ['gevolg', 'donc / alors / du coup', 'dus / daardoor'],
  ['doel', 'pour / pour que (+ subj.)', 'om te / zodat'],
  ['trouwens', 'd\'ailleurs / au fait', 'trouwens'],
  ['samenvatten', 'bref / en tout cas', 'kortom / hoe dan ook'],
], [1])}
${exs([
  ['Le restaurant est cher. Par contre, la cuisine est excellente.', 'Het restaurant is duur. Het eten is daarentegen uitstekend.'],
  ['Il a beaucoup mangé, et pourtant il a encore faim !', 'Hij heeft veel gegeten, en toch heeft hij nog honger!'],
  ['Moi, j\'adore la mer, alors que mon mari préfère la montagne.', 'Ik ben dol op de zee, terwijl mijn man de bergen verkiest.'],
  ['Comme il pleuvait, on est restés à la maison.', 'Omdat het regende, zijn we thuisgebleven.'],
  ['Même si c\'est difficile, j\'adore apprendre le français.', 'Ook al is het moeilijk, ik vind Frans leren geweldig.'],
  ['Au fait, tu as des nouvelles de Julie ?', 'Trouwens, heb je nog iets van Julie gehoord?'],
  ['En plus, il fait beau ! Bref, c\'est le week-end parfait.', 'Bovendien is het mooi weer! Kortom, het perfecte weekend.'],
])}
${tip(`<b>Comme</b> (omdat) staat altijd aan het <b>begin</b> van de zin: ${f('Comme je suis fatigué, je vais me coucher.')} In het midden gebruik je <b>parce que</b>.`)}
`,
  vocab: [['en plus', 'bovendien'], ['par contre', 'daarentegen'], ['pourtant', 'toch'], ['alors que', 'terwijl'], ['même si', 'ook al'], ['puisque', 'aangezien'], ['d\'ailleurs', 'trouwens'], ['au fait', 'trouwens / tussen haakjes'], ['en tout cas', 'hoe dan ook'], ['donc', 'dus']],
  exercises: [
    { type: 'match', pairs: [['pourtant', 'toch'], ['par contre', 'daarentegen'], ['en plus', 'bovendien'], ['même si', 'ook al'], ['au fait', 'trouwens']] },
    { type: 'mc', s: 'Il a beaucoup mangé, et ___ il a encore faim !', options: ['pourtant', 'donc', 'parce que', 'en plus'] },
    { type: 'mc', s: '___ il pleuvait, on est restés à la maison.', options: ['Comme', 'Pourtant', 'Même si', 'Par contre'] },
    { type: 'mc', s: 'J\'aime la mer, ___ mon mari préfère la montagne.', options: ['alors que', 'donc', 'comme', 'pour'] },
    { type: 'mc', s: 'Je suis fatigué, ___ je vais me coucher.', options: ['donc', 'pourtant', 'alors que', 'même si'] },
    { type: 'mc', s: '___ c\'est difficile, j\'adore le français.', options: ['Même si', 'Parce que', 'Donc', 'Comme'] },
    { type: 'fill', s: 'Le restaurant est cher. Par ___, la cuisine est excellente.', answer: 'contre' },
    { type: 'translate', nl: 'Trouwens, heb je nog iets van Julie gehoord?', answer: ['Au fait, tu as des nouvelles de Julie ?', 'D\'ailleurs, tu as des nouvelles de Julie ?', 'Au fait, est-ce que tu as des nouvelles de Julie ?'] },
    { type: 'order', nl: 'Bovendien is het mooi weer!', fr: 'En plus, il fait beau !' },
    { type: 'listen', fr: 'Bref, c\'était un week-end parfait, même s\'il a plu un peu.', options: ['Kortom, het was een perfect weekend, ook al heeft het een beetje geregend.', 'Het weekend was niet leuk omdat het regende.', 'Volgend weekend wordt perfect, als het niet regent.', 'Het regende het hele weekend, dus bleven we thuis.'] },
    { type: 'speak', fr: 'Au fait, merci encore pour le dîner. C\'était délicieux, et en plus, très sympa.', nl: 'Trouwens, nogmaals bedankt voor het eten. Het was heerlijk, en bovendien heel gezellig.' },
  ],
},
];
