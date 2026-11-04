import { ex, exs, tbl, tip, warn, f, conj } from './helpers.js';

export default [
// ─────────────────────────────────────────────
{
  id: 'b1-futur', unit: 'B1', emoji: '🚀', title: 'De toekomende tijd: futur simple', sub: 'je mangerai, ce sera',
  theory: `
<h2>Futur simple</h2>
<p>Naast <i>je vais manger</i> (nabije toekomst) heeft het Frans een "echte" toekomende tijd. Die gebruik je voor plannen verder weg, voorspellingen en beloftes.</p>
<p><b>Vorm:</b> heel werkwoord (bij -re zonder de e) + uitgangen van <i>avoir</i>:</p>
${tbl(['', 'uitgang', 'parler', 'finir', 'prendre'], [
  ['je', '-ai', 'parlerai', 'finirai', 'prendrai'],
  ['tu', '-as', 'parleras', 'finiras', 'prendras'],
  ['il / elle', '-a', 'parlera', 'finira', 'prendra'],
  ['nous', '-ons', 'parlerons', 'finirons', 'prendrons'],
  ['vous', '-ez', 'parlerez', 'finirez', 'prendrez'],
  ['ils / elles', '-ont', 'parleront', 'finiront', 'prendront'],
], [2, 3, 4])}
<h2>Onregelmatige stammen (de uitgangen blijven gelijk!)</h2>
${tbl(['werkwoord', 'stam', 'voorbeeld'], [
  ['être', 'ser-', 'je serai'], ['avoir', 'aur-', 'j\'aurai'], ['aller', 'ir-', 'j\'irai'], ['faire', 'fer-', 'je ferai'],
  ['venir', 'viendr-', 'je viendrai'], ['pouvoir', 'pourr-', 'je pourrai'], ['vouloir', 'voudr-', 'je voudrai'], ['voir', 'verr-', 'je verrai'],
  ['savoir', 'saur-', 'je saurai'], ['devoir', 'devr-', 'je devrai'], ['il faut', 'faudr-', 'il faudra'], ['il pleut', 'pleuvr-', 'il pleuvra'],
], [2])}
${exs([
  ['Un jour, je parlerai couramment français.', 'Op een dag zal ik vloeiend Frans spreken.'],
  ['On verra !', 'We zullen zien! (heel gebruikelijk)'],
  ['Ce sera génial.', 'Het wordt geweldig.'],
  ['Quand tu seras grand, tu comprendras.', 'Als je groot bent, zul je het begrijpen.'],
  ['Je t\'appellerai demain.', 'Ik bel je morgen.'],
])}
${warn(`Na <b>quand</b> (als/wanneer) over de toekomst gebruikt het Frans ook de futur: ${f('Quand j\'aurai le temps, je viendrai.')} — Nederlands zegt "als ik tijd <i>heb</i>".`)}
`,
  vocab: [['on verra', 'we zullen zien'], ['un jour', 'op een dag'], ['couramment', 'vloeiend'], ['l\'avenir', 'de toekomst'], ['bientôt', 'binnenkort'], ['plus tard', 'later'], ['promettre', 'beloven']],
  exercises: [
    { type: 'mc', s: 'Demain, je ___ mes grands-parents.', options: ['verrai', 'voirai', 'voyerai', 'vais voirai'] },
    { type: 'mc', s: 'Ce ___ génial !', options: ['sera', 'serai', 'era', 'être'] },
    { type: 'fill', s: 'Nous ___ en France cet été. (aller)', answer: 'irons' },
    { type: 'fill', s: 'Tu ___ le temps ? (avoir)', answer: 'auras' },
    { type: 'fill', s: 'Ils ___ samedi. (venir)', answer: 'viendront' },
    { type: 'fill', s: 'Je vous ___ demain. (téléphoner)', answer: 'téléphonerai' },
    { type: 'mc', s: 'Quand j\'___ le temps, je viendrai.', options: ['aurai', 'ai', 'avais', 'aurais'] },
    { type: 'translate', nl: 'We zullen zien!', answer: ['On verra !', 'Nous verrons !'] },
    { type: 'translate', nl: 'Ik bel je morgen.', answer: ['Je t\'appellerai demain.', 'Je te téléphonerai demain.', 'Je t\'appelle demain.', 'Je vais t\'appeler demain.'] },
    { type: 'order', nl: 'Op een dag zal ik vloeiend Frans spreken.', fr: 'Un jour, je parlerai couramment français.' },
    { type: 'listen', fr: 'Il fera beau demain, on pourra faire un pique-nique.', options: ['Morgen wordt het mooi weer, dan kunnen we picknicken.', 'Gisteren was het mooi, we hebben gepicknickt.', 'Morgen regent het, geen picknick.', 'Het is mooi weer, laten we nu picknicken.'] },
    { type: 'speak', fr: 'L\'année prochaine, on viendra vous voir en France.', nl: 'Volgend jaar komen we jullie opzoeken in Frankrijk.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'b1-conditionnel', unit: 'B1', emoji: '🙏', title: 'De voorwaardelijke wijs (beleefd zijn)', sub: 'je voudrais, tu pourrais…',
  theory: `
<h2>Conditionnel = "zou"</h2>
<p><b>Vorm:</b> stam van de futur + uitgangen van de imparfait (-ais, -ais, -ait, -ions, -iez, -aient).</p>
${tbl(['', 'aimer', 'pouvoir', 'être'], [
  ['je', 'aimerais', 'pourrais', 'serais'], ['tu', 'aimerais', 'pourrais', 'serais'], ['il / elle', 'aimerait', 'pourrait', 'serait'],
  ['nous', 'aimerions', 'pourrions', 'serions'], ['vous', 'aimeriez', 'pourriez', 'seriez'], ['ils / elles', 'aimeraient', 'pourraient', 'seraient'],
], [1, 2, 3])}
<h2>1. Beleefd vragen (super belangrijk!)</h2>
${exs([
  ['Je voudrais un café, s\'il vous plaît.', 'Ik zou graag een koffie willen.'],
  ['Tu pourrais m\'aider ?', 'Zou je me kunnen helpen?'],
  ['Vous auriez un peu de temps ?', 'Zou u wat tijd hebben?'],
  ['J\'aimerais bien venir.', 'Ik zou graag komen.'],
])}
<h2>2. Advies geven</h2>
${exs([
  ['Tu devrais te reposer.', 'Je zou moeten uitrusten.'],
  ['À ta place, je mangerais encore un peu de fromage.', 'Als ik jou was, zou ik nog wat kaas eten.'],
  ['Il vaudrait mieux partir tôt.', 'Het zou beter zijn om vroeg te vertrekken.'],
])}
<h2>3. Wensen en dromen</h2>
${exs([
  ['Ce serait génial !', 'Dat zou geweldig zijn!'],
  ['J\'adorerais habiter en Provence.', 'Ik zou het heerlijk vinden om in de Provence te wonen.'],
])}
${tip(`Het verschil ${f('je voudrais')} (beleefd) en ${f('je veux')} (direct, soms bot) maakt écht uit voor de eerste indruk bij schoonfamilie!`)}
`,
  vocab: [['je voudrais', 'ik zou graag willen'], ['tu pourrais', 'zou je kunnen'], ['j\'aimerais', 'ik zou graag'], ['tu devrais', 'je zou moeten'], ['ce serait', 'het zou … zijn'], ['à ta place', 'als ik jou was'], ['il vaudrait mieux', 'het zou beter zijn']],
  exercises: [
    { type: 'mc', s: 'Tu ___ m\'aider, s\'il te plaît ?', q: 'Zou je kunnen…', options: ['pourrais', 'pourras', 'peux pas', 'pouvais'] },
    { type: 'mc', s: 'Ce ___ génial !', q: 'Dat zou geweldig zijn!', options: ['serait', 'sera', 'était', 'soit'] },
    { type: 'fill', s: 'J\'___ bien venir. (aimer)', answer: 'aimerais' },
    { type: 'fill', s: 'Tu ___ te reposer. (devoir)', answer: 'devrais' },
    { type: 'fill', s: 'Vous ___ un peu de temps ? (avoir)', answer: 'auriez' },
    { type: 'mc', q: 'Wat is het beleefdst om iets te vragen?', options: ['Je voudrais un verre d\'eau, s\'il vous plaît.', 'Je veux de l\'eau.', 'De l\'eau !', 'Donnez-moi de l\'eau.'] },
    { type: 'translate', nl: 'Zou je me kunnen helpen?', answer: ['Tu pourrais m\'aider ?', 'Vous pourriez m\'aider ?', 'Pourrais-tu m\'aider ?', 'Pourriez-vous m\'aider ?'] },
    { type: 'translate', nl: 'Je zou moeten uitrusten.', answer: ['Tu devrais te reposer.', 'Vous devriez vous reposer.'] },
    { type: 'order', nl: 'Als ik jou was, zou ik vroeg vertrekken.', fr: 'À ta place, je partirais tôt.' },
    { type: 'listen', fr: 'J\'adorerais habiter dans une petite maison en Provence.', options: ['Ik zou graag in een huisje in de Provence wonen.', 'Ik woon in een klein huis in de Provence.', 'Ik heb in de Provence gewoond.', 'Ik ga een huis kopen in de Provence.'] },
    { type: 'speak', fr: 'Est-ce que vous pourriez répéter plus lentement, s\'il vous plaît ?', nl: 'Zou u het langzamer kunnen herhalen, alstublieft?' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'b1-si', unit: 'B1', emoji: '🤔', title: 'Als… dan: si-zinnen', sub: 'Si j\'étais riche…',
  theory: `
<h2>Drie soorten als-zinnen</h2>
${tbl(['Type', 'si + …', 'hoofdzin', 'Voorbeeld'], [
  ['1. echt mogelijk', 'présent', 'présent / futur', 'S\'il pleut, on restera à la maison.'],
  ['2. denkbeeldig', 'imparfait', 'conditionnel', 'Si j\'étais riche, j\'achèterais un château.'],
  ['3. gemiste kans (verleden)', 'plus-que-parfait', 'conditionnel passé', 'Si j\'avais su, je serais venu.'],
], [3])}
${warn(`Na <b>si</b> komt <b>nooit</b> de futur of de conditionnel! Dus niet "si j'aurais", maar ${f('si j\'avais')}. (Ook veel Fransen maken deze fout, maar oma zal het merken 😉.)`)}
<h2>Type 1 — echte mogelijkheid</h2>
${exs([['Si tu as faim, il y a du gâteau.', 'Als je honger hebt, er is taart.'], ['Si vous venez en août, on ira à la plage.', 'Als jullie in augustus komen, gaan we naar het strand.']])}
<h2>Type 2 — dromen en fantasie</h2>
${exs([
  ['Si j\'avais plus de temps, j\'apprendrais à cuisiner.', 'Als ik meer tijd had, zou ik leren koken.'],
  ['Si j\'étais toi, je dirais oui.', 'Als ik jou was, zou ik ja zeggen.'],
  ['Si le chat pouvait parler, il se plaindrait tout le temps.', 'Als de kat kon praten, zou hij de hele tijd klagen.'],
])}
<h2>Type 3 — spijt (ter herkenning)</h2>
${exs([['Si j\'avais su, je ne serais pas venu !', 'Als ik dat had geweten, was ik niet gekomen!']])}
<h2>Leuke familievraag</h2>
${exs([['Qu\'est-ce que tu ferais si tu gagnais au loto ?', 'Wat zou je doen als je de loterij won?']])}
`,
  vocab: [['si', 'als / indien'], ['riche', 'rijk'], ['gagner au loto', 'de loterij winnen'], ['le château', 'het kasteel'], ['si j\'étais toi', 'als ik jou was'], ['se plaindre', 'klagen'], ['si j\'avais su', 'als ik het had geweten']],
  exercises: [
    { type: 'mc', s: 'S\'il pleut, on ___ à la maison.', options: ['restera', 'resterait', 'restait', 'soit resté'] },
    { type: 'mc', s: 'Si j\'___ riche, j\'achèterais un château.', options: ['étais', 'serais', 'suis', 'serai'] },
    { type: 'mc', s: 'Si j\'avais le temps, je ___ à cuisiner.', options: ['apprendrais', 'apprendrai', 'apprenais', 'apprends'] },
    { type: 'fill', s: 'Si tu ___ faim, il y a du gâteau. (avoir, présent)', answer: 'as' },
    { type: 'fill', s: 'Qu\'est-ce que tu ___ si tu gagnais au loto ? (faire)', answer: 'ferais' },
    { type: 'mc', q: 'Welke zin is <b>fout</b>?', options: ['Si j\'aurais su, je serais venu.', 'Si j\'avais su, je serais venu.', 'Si tu viens, on ira au cinéma.', 'Si j\'étais toi, je dirais oui.'], noSay: true },
    { type: 'translate', nl: 'Als ik jou was, zou ik ja zeggen.', answer: ['Si j\'étais toi, je dirais oui.', 'À ta place, je dirais oui.'] },
    { type: 'order', nl: 'Als ik rijk was, zou ik een kasteel kopen.', fr: 'Si j\'étais riche, j\'achèterais un château.' },
    { type: 'listen', fr: 'Si le chat pouvait parler, il se plaindrait tout le temps.', options: ['Als de kat kon praten, zou hij de hele tijd klagen.', 'De kat praat en klaagt de hele tijd.', 'Als de kat praat, klaagt hij.', 'De kat kan niet praten, maar wel klagen.'] },
    { type: 'speak', fr: 'Si j\'avais plus de temps, je viendrais plus souvent.', nl: 'Als ik meer tijd had, zou ik vaker komen.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'b1-relatief', unit: 'B1', emoji: '🔗', title: 'Betrekkelijke voornaamwoorden', sub: 'qui, que, où, dont',
  theory: `
<h2>Zinnen aan elkaar knopen</h2>
${tbl(['', 'functie', 'voorbeeld'], [
  ['<b>qui</b>', 'onderwerp (die/dat + werkwoord)', 'Le monsieur <b>qui</b> parle est mon oncle.'],
  ['<b>que (qu\')</b>', 'lijdend voorwerp (die/dat + onderwerp)', 'Le gâteau <b>que</b> tu as fait est délicieux.'],
  ['<b>où</b>', 'plaats of tijd (waar / waarop)', 'La maison <b>où</b> j\'ai grandi.'],
  ['<b>dont</b>', 'met <i>de</i> (waarvan / over wie)', 'Le livre <b>dont</b> je t\'ai parlé.'],
])}
${tip(`Truc: staat er direct een <b>werkwoord</b> na? → <b>qui</b>. Staat er een <b>onderwerp</b> (je, tu, mon père…) na? → <b>que</b>.`)}
${exs([
  ['C\'est ma cousine qui habite à Marseille.', 'Dat is mijn nicht die in Marseille woont.'],
  ['Le film qu\'on a vu était nul.', 'De film die we zagen was waardeloos.'],
  ['Le jour où on s\'est rencontrés, il pleuvait.', 'De dag waarop we elkaar ontmoetten, regende het.'],
  ['C\'est le restaurant dont tout le monde parle.', 'Dat is het restaurant waar iedereen het over heeft.'],
  ['Voilà le chien qui a mangé mes chaussures.', 'Daar is de hond die mijn schoenen heeft opgegeten.'],
])}
<h2>Ce qui / ce que = wat</h2>
${exs([
  ['Ce qui est drôle, c\'est que…', 'Wat grappig is, is dat…'],
  ['Je ne comprends pas ce que tu dis.', 'Ik begrijp niet wat je zegt.'],
  ['Fais ce que tu veux.', 'Doe wat je wilt.'],
])}
`,
  vocab: [['qui', 'die / dat (onderwerp)'], ['que', 'die / dat (lijdend vw.)'], ['où', 'waar / waarop'], ['dont', 'waarvan / waarover'], ['ce que', 'wat'], ['ce qui', 'wat'], ['nul', 'waardeloos'], ['se rencontrer', 'elkaar ontmoeten'], ['tout le monde', 'iedereen']],
  exercises: [
    { type: 'mc', s: 'Le monsieur ___ parle est mon oncle.', options: ['qui', 'que', 'où', 'dont'] },
    { type: 'mc', s: 'Le gâteau ___ tu as fait est délicieux.', options: ['que', 'qui', 'où', 'dont'] },
    { type: 'mc', s: 'La maison ___ j\'ai grandi est à vendre.', options: ['où', 'que', 'qui', 'dont'] },
    { type: 'mc', s: 'C\'est le livre ___ je t\'ai parlé.', options: ['dont', 'que', 'qui', 'où'] },
    { type: 'fill', s: 'Voilà le chien ___ a mangé mes chaussures.', answer: 'qui' },
    { type: 'fill', s: 'Le film ___ on a vu était nul.', answer: ['qu\'', 'que'] },
    { type: 'fill', s: 'Je ne comprends pas ce ___ tu dis.', answer: 'que' },
    { type: 'translate', nl: 'Doe wat je wilt.', answer: ['Fais ce que tu veux.', 'Faites ce que vous voulez.'] },
    { type: 'order', nl: 'Dat is mijn nicht die in Marseille woont.', fr: 'C\'est ma cousine qui habite à Marseille.' },
    { type: 'listen', fr: 'Le jour où on s\'est rencontrés, il pleuvait des cordes.', options: ['De dag waarop we elkaar ontmoetten, regende het pijpenstelen.', 'We ontmoeten elkaar op een regenachtige dag.', 'Het regent altijd als we elkaar zien.', 'De dag dat we trouwden, scheen de zon.'] },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'b1-subjonctif', unit: 'B1', emoji: '💭', title: 'De subjonctif (basis)', sub: 'il faut que tu viennes',
  theory: `
<h2>Wat is de subjonctif?</h2>
<p>Een werkwoordsvorm na uitdrukkingen van <b>moeten, willen, gevoel en twijfel</b> + <b>que</b>. Nederlands heeft dit nauwelijks, maar in het Frans hoor je het constant — vooral na ${f('il faut que')}.</p>
<h2>Vorm</h2>
<p>Neem de <b>ils</b>-vorm van het presens, haal <b>-ent</b> weg, en voeg toe: -e, -es, -e, -ions, -iez, -ent.</p>
${tbl(['', 'parler (ils parl-ent)', 'finir (ils finiss-ent)', 'partir (ils part-ent)'], [
  ['que je', 'parle', 'finisse', 'parte'], ['que tu', 'parles', 'finisses', 'partes'], ['qu\'il', 'parle', 'finisse', 'parte'],
  ['que nous', 'parlions', 'finissions', 'partions'], ['que vous', 'parliez', 'finissiez', 'partiez'], ['qu\'ils', 'parlent', 'finissent', 'partent'],
], [1, 2, 3])}
<h2>De belangrijkste onregelmatige</h2>
${tbl(['être', 'avoir', 'aller', 'faire', 'pouvoir', 'vouloir'], [
  ['que je sois', 'que j\'aie', 'que j\'aille', 'que je fasse', 'que je puisse', 'que je veuille'],
  ['que tu sois', 'que tu aies', 'que tu ailles', 'que tu fasses', 'que tu puisses', 'que tu veuilles'],
  ['qu\'il soit', 'qu\'il ait', 'qu\'il aille', 'qu\'il fasse', 'qu\'il puisse', 'qu\'il veuille'],
  ['que nous soyons', 'que nous ayons', 'que nous allions', 'que nous fassions', 'que nous puissions', 'que nous voulions'],
  ['que vous soyez', 'que vous ayez', 'que vous alliez', 'que vous fassiez', 'que vous puissiez', 'que vous vouliez'],
  ['qu\'ils soient', 'qu\'ils aient', 'qu\'ils aillent', 'qu\'ils fassent', 'qu\'ils puissent', 'qu\'ils veuillent'],
], [0, 1, 2, 3, 4, 5])}
<h2>Wanneer?</h2>
${tbl(['Uitdrukking', 'Voorbeeld'], [
  ['il faut que (het moet)', 'Il faut que tu goûtes ce fromage !'],
  ['je veux que (ik wil dat)', 'Je veux que tu sois heureux.'],
  ['je suis content que', 'Je suis content que vous soyez là.'],
  ['avant que (voordat)', 'Mangeons avant que ça refroidisse.'],
  ['pour que (zodat)', 'Je parle lentement pour que tu comprennes.'],
  ['bien que (hoewel)', 'Bien qu\'il pleuve, on sort.'],
])}
${exs([
  ['Il faut que je parte.', 'Ik moet gaan.'],
  ['Je suis tellement content que vous soyez venus !', 'Ik ben zo blij dat jullie gekomen zijn!'],
  ['Il faut qu\'on fasse les courses.', 'We moeten boodschappen doen.'],
])}
${tip(`Leer eerst gewoon deze drie zinnen uit je hoofd: ${f('Il faut que j\'y aille.')} (Ik moet gaan), ${f('Je suis content que tu sois là.')} en ${f('Il faut que tu goûtes ça !')} Daarmee kom je al heel ver.`)}
`,
  vocab: [['il faut que', 'het moet / … moet'], ['il faut que j\'y aille', 'ik moet gaan'], ['avant que', 'voordat'], ['pour que', 'zodat'], ['bien que', 'hoewel'], ['goûter', 'proeven'], ['refroidir', 'afkoelen']],
  exercises: [
    { type: 'mc', s: 'Il faut que tu ___ ce fromage !', options: ['goûtes', 'goûtais', 'goûteras', 'goûter'] },
    { type: 'mc', s: 'Je suis content que vous ___ là.', options: ['soyez', 'êtes', 'serez', 'étiez'] },
    { type: 'mc', s: 'Il faut que j\'y ___ .', q: 'Ik moet gaan.', options: ['aille', 'vais', 'allais', 'irai'] },
    { type: 'fill', s: 'Il faut qu\'on ___ les courses. (faire)', answer: 'fasse' },
    { type: 'fill', s: 'Je veux que tu ___ heureux. (être)', answer: 'sois' },
    { type: 'fill', s: 'Je parle lentement pour que tu ___ . (comprendre)', answer: 'comprennes' },
    { type: 'mc', q: 'Na welke uitdrukking volgt <b>geen</b> subjonctif?', options: ['je pense que', 'il faut que', 'je veux que', 'avant que'], noSay: true },
    { type: 'translate', nl: 'Ik moet gaan.', answer: ['Il faut que j\'y aille.', 'Il faut que je parte.', 'Je dois partir.', 'Je dois y aller.'] },
    { type: 'order', nl: 'Ik ben zo blij dat jullie gekomen zijn!', fr: 'Je suis tellement content que vous soyez venus !' },
    { type: 'listen', fr: 'Mangeons avant que ça refroidisse !', options: ['Laten we eten voordat het koud wordt!', 'Het eten is al koud!', 'We eten later, als het afgekoeld is.', 'Zet het eten in de koelkast!'] },
    { type: 'speak', fr: 'Je suis vraiment content que vous soyez là.', nl: 'Ik ben echt blij dat jullie er zijn.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'b1-mening', unit: 'B1', emoji: '🗣️', title: 'Je mening geven en reageren', sub: 'à mon avis, je trouve que…',
  theory: `
<h2>Je mening geven</h2>
${exs([
  ['À mon avis, c\'est une bonne idée.', 'Volgens mij is het een goed idee.'],
  ['Je trouve que ce fromage sent un peu fort.', 'Ik vind dat deze kaas een beetje sterk ruikt.'],
  ['Je pense que oui / non.', 'Ik denk van wel / van niet.'],
  ['Pour moi, le plus important, c\'est la famille.', 'Voor mij is familie het belangrijkst.'],
  ['J\'ai l\'impression que…', 'Ik heb het idee dat…'],
])}
<h2>Eens of oneens</h2>
${tbl(['Eens', 'Oneens'], [
  ['Tout à fait !', 'Pas du tout !'],
  ['Je suis d\'accord.', 'Je ne suis pas d\'accord.'],
  ['Tu as raison.', 'Je ne crois pas.'],
  ['Exactement !', 'Ça dépend…'],
  ['Bien sûr !', 'Oui, mais…'],
], [0, 1])}
<h2>Reageren in een gesprek (heel belangrijk!)</h2>
<p>Deze kleine woordjes laten zien dat je luistert. Ze maken je Frans meteen veel natuurlijker:</p>
${tbl(['Frans', 'Nederlands'], [
  ['Ah bon ?', 'O ja? / Echt waar?'],
  ['C\'est vrai ?', 'Echt?'],
  ['Sans blague !', 'Je meent het!'],
  ['Ah, d\'accord.', 'Ah, oké.'],
  ['Je vois.', 'Ik snap het.'],
  ['C\'est pas vrai !', 'Niet te geloven!'],
  ['Trop bien !', 'Super!'],
  ['Oh là là !', 'Oei! / Jeetje!'],
  ['Tant mieux !', 'Gelukkig! / Mooi zo!'],
  ['Tant pis.', 'Jammer dan.'],
  ['Ça alors !', 'Wel heb je ooit!'],
  ['Bref…', 'Hoe dan ook… / Kortom…'],
], [0])}
<h2>Tijd winnen terwijl je nadenkt</h2>
${exs([
  ['Euh…', 'Eh…'],
  ['Alors…', 'Nou…'],
  ['Comment dire…', 'Hoe zeg je dat…'],
  ['Tu vois ce que je veux dire ?', 'Snap je wat ik bedoel?'],
  ['Comment on dit … en français ?', 'Hoe zeg je … in het Frans?'],
])}
${tip(`Een topzin voor familiediners: ${f('Excusez-moi, je n\'ai pas compris. Vous pouvez répéter ?')} Niemand vindt het erg — ze zijn juist blij dat je het probeert!`)}
`,
  vocab: [['à mon avis', 'volgens mij'], ['je trouve que', 'ik vind dat'], ['être d\'accord', 'het eens zijn'], ['tout à fait', 'helemaal'], ['pas du tout', 'helemaal niet'], ['ça dépend', 'dat hangt ervan af'], ['ah bon ?', 'o ja? / echt?'], ['sans blague !', 'je meent het!'], ['tant mieux', 'mooi zo'], ['tant pis', 'jammer dan'], ['bref', 'kortom'], ['comment dire', 'hoe zeg je dat']],
  exercises: [
    { type: 'match', pairs: [['tant mieux', 'mooi zo'], ['tant pis', 'jammer dan'], ['sans blague !', 'je meent het!'], ['ça dépend', 'dat hangt ervan af'], ['pas du tout', 'helemaal niet']] },
    { type: 'mc', q: 'Je schoonvader vertelt dat hij 3 kilo vis heeft gevangen. Je reageert verbaasd:', options: ['Sans blague !', 'Tant pis.', 'Pas du tout.', 'Bref.'] },
    { type: 'mc', q: 'Iemand zegt dat het morgen regent en de barbecue niet doorgaat. Je zegt:', options: ['Tant pis.', 'Tant mieux !', 'Trop bien !', 'Tout à fait !'] },
    { type: 'fill', s: 'À mon ___, c\'est une bonne idée.', answer: 'avis' },
    { type: 'fill', s: 'Je ne suis pas d\'___ .', answer: 'accord' },
    { type: 'translate', nl: 'Ik vind dat het een goed idee is.', answer: ['Je trouve que c\'est une bonne idée.', 'Je pense que c\'est une bonne idée.'] },
    { type: 'translate', nl: 'Hoe zeg je "fiets" in het Frans?', answer: ['Comment on dit "fiets" en français ?', 'Comment dit-on "fiets" en français ?', 'Comment on dit fiets en français ?'] },
    { type: 'order', nl: 'Sorry, ik heb het niet begrepen. Kunt u het herhalen?', fr: 'Excusez-moi, je n\'ai pas compris. Vous pouvez répéter ?' },
    { type: 'listen', fr: 'Ah bon ? C\'est pas vrai ! Raconte !', options: ['O ja? Niet te geloven! Vertel!', 'Oké, dat is niet waar. Stop!', 'Ah, goed. Dat klopt. Ga verder.', 'Echt waar? Ik geloof je niet.'] },
    { type: 'speak', fr: 'À mon avis, c\'est le meilleur fromage du monde.', nl: 'Volgens mij is dit de lekkerste kaas van de wereld.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'b1-spreektaal', unit: 'B1', emoji: '😎', title: 'Echt Frans: spreektaal', sub: 'ouais, truc, bouffer, t\'inquiète',
  theory: `
<h2>Wat je op school niet leert</h2>
<p>Aan de keukentafel praten Fransen heel anders dan in het lesboek. Hier zijn de belangrijkste verschillen, zodat je de familie écht kunt volgen.</p>
<h2>1. Woorden inslikken</h2>
${tbl(['Lesboek', 'Spreektaal', 'Nederlands'], [
  ['Je ne sais pas.', 'Chais pas.', 'Weet ik niet.'],
  ['Il y a…', 'Y a…', 'Er is…'],
  ['Tu es…', 'T\'es…', 'Je bent…'],
  ['Il ne faut pas.', 'Faut pas.', 'Moet je niet doen.'],
  ['Ce n\'est pas grave.', 'C\'est pas grave.', 'Geeft niks.'],
  ['Tu ne t\'inquiètes pas.', 'T\'inquiète !', 'Maak je geen zorgen!'],
], [0, 1])}
<h2>2. Informele woorden</h2>
${tbl(['Spreektaal', 'Netjes', 'Betekenis'], [
  ['ouais', 'oui', 'ja'], ['un truc / un machin', 'une chose', 'een ding, dinges'], ['bouffer', 'manger', 'eten (vreten)'],
  ['la bouffe', 'la nourriture', 'het eten'], ['un mec', 'un homme', 'een vent / gast'], ['une nana', 'une femme', 'een meid'],
  ['un gamin / un gosse', 'un enfant', 'een kind'], ['le boulot', 'le travail', 'het werk'], ['la bagnole', 'la voiture', 'de auto'],
  ['le fric / les sous', 'l\'argent', 'het geld'], ['crevé', 'très fatigué', 'kapot / doodmoe'], ['sympa', 'sympathique', 'aardig / leuk'],
  ['super / génial / top', 'très bien', 'super'], ['nul', 'très mauvais', 'waardeloos'], ['kiffer', 'aimer', 'tof vinden'],
  ['grave', 'très', 'heel erg (jongeren)'], ['un pote', 'un ami', 'een maat'], ['bosser', 'travailler', 'werken / blokken'],
  ['flipper', 'avoir peur', 'freaken / bang zijn'], ['se planter', 'se tromper / échouer', 'de mist ingaan'],
], [0, 1])}
<h2>3. Verkorte woorden</h2>
<p>${f('le resto')} (restaurant), ${f('l\'apéro')} (apéritif — heilig in Frankrijk!), ${f('le petit-déj')} (ontbijt), ${f('la télé')}, ${f('le frigo')}, ${f('l\'ordi')} (computer), ${f('le prof')}, ${f('la fac')} (universiteit), ${f('d\'acc')} (oké), ${f('à plus')} / ${f('à +')} (later!), ${f('sympa')}, ${f('McDo')}.</p>
<h2>4. Verlan: woorden achterstevoren</h2>
<p>Jongeren draaien lettergrepen om (<i>verlan</i> = <i>l'envers</i>, omgekeerd):</p>
${tbl(['Verlan', 'Origineel', 'Betekenis'], [['ouf', 'fou', 'gek'], ['relou', 'lourd', 'irritant, vervelend'], ['chelou', 'louche', 'raar, verdacht'], ['vénère', 'énervé', 'boos'], ['meuf', 'femme', 'meid / vriendin'], ['laisse béton', 'laisse tomber', 'laat maar']], [0])}
<h2>5. Opvulwoorden</h2>
${exs([
  ['Bah, je sais pas, moi.', 'Tja, weet ik veel.'],
  ['Du coup, on y va ?', 'Dus, gaan we? (du coup = dus, hoor je constant!)'],
  ['En fait, c\'est pas mal.', 'Eigenlijk is het niet slecht.'],
  ['Bon ben, on mange ?', 'Nou, zullen we eten?'],
  ['Genre, il a mangé tout le gâteau.', 'Zo van, hij heeft de hele taart opgegeten.'],
  ['Carrément !', 'Absoluut! / Echt wel!'],
])}
${warn(`Begrijpen is belangrijker dan zelf gebruiken. Woorden als <i>bouffer</i> of <i>mec</i> zijn prima bij vrienden, maar bij de schoonouders blijf je in het begin beter bij de nette vorm.`)}
`,
  vocab: [['ouais', 'ja (informeel)'], ['un truc', 'een ding'], ['bouffer', 'eten (informeel)'], ['le boulot', 'het werk'], ['crevé', 'doodmoe'], ['sympa', 'aardig / leuk'], ['nul', 'waardeloos'], ['un pote', 'een maat'], ['le fric', 'het geld'], ['du coup', 'dus'], ['en fait', 'eigenlijk'], ['carrément', 'absoluut'], ['l\'apéro', 'de borrel'], ['relou', 'irritant'], ['chelou', 'raar'], ['t\'inquiète', 'maak je geen zorgen']],
  exercises: [
    { type: 'match', pairs: [['le boulot', 'het werk'], ['crevé', 'doodmoe'], ['la bagnole', 'de auto'], ['le fric', 'het geld'], ['un pote', 'een maat']] },
    { type: 'mc', q: 'Wat betekent <b>Chais pas</b>?', options: ['Weet ik niet', 'Ik ben er niet', 'Kaas, nee', 'Ik wil niet'], noSay: true },
    { type: 'mc', q: 'Wat betekent <b>du coup</b>?', options: ['dus / daardoor', 'opeens', 'een klap', 'tegelijk'], noSay: true },
    { type: 'mc', q: '<b>Relou</b> is verlan voor…', options: ['lourd (irritant)', 'rouler (rijden)', 'loup (wolf)', 'roux (roodharig)'], noSay: true },
    { type: 'mc', q: 'Iemand nodigt je uit voor <b>l\'apéro</b>. Wat gaat er gebeuren?', options: ['Een borrel met hapjes vóór het eten', 'Een sportwedstrijd', 'Een les Frans', 'Een ontbijt'], noSay: true },
    { type: 'listen', fr: 'Ouais, je suis crevé, j\'ai trop bossé cette semaine.', options: ['Ja, ik ben kapot, ik heb deze week te hard gewerkt.', 'Ja, ik heb honger, ik heb deze week niet gegeten.', 'Nee, ik ben niet moe, ik heb vrij.', 'Ja, de auto is kapot.'] },
    { type: 'listen', fr: 'Du coup, on se fait un petit resto ce soir ?', options: ['Dus, gaan we vanavond uit eten?', 'Dus, koken we vanavond zelf?', 'Gisteren waren we in een restaurant.', 'Het restaurant is vanavond dicht.'] },
    { type: 'mc', q: 'Wat is de nette versie van "<b>T\'inquiète !</b>"?', options: ['Ne t\'inquiète pas !', 'Tu es inquiet !', 'T\'es où ?', 'Inquiète-toi !'] },
    { type: 'translate', nl: 'Weet ik veel. (spreektaal, met "moi")', answer: ['Je sais pas, moi.', 'Chais pas, moi.', 'Bah, je sais pas, moi.', 'Je ne sais pas, moi.'] },
    { type: 'speak', fr: 'Bon ben, on mange ? J\'ai une faim de loup !', nl: 'Nou, zullen we eten? Ik heb honger als een paard! (letterlijk: wolf)' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'b1-gerondif', unit: 'B1', emoji: '🚶', title: 'Gérondif en plus-que-parfait', sub: 'en mangeant, j\'avais déjà mangé',
  theory: `
<h2>Gérondif: en + -ant = terwijl / door te</h2>
<p>Neem de <b>nous</b>-vorm, haal <b>-ons</b> weg en plak er <b>-ant</b> achter. Zet er <b>en</b> voor.</p>
${tbl(['werkwoord', 'nous-vorm', 'gérondif'], [
  ['manger', 'nous mangeons', 'en mangeant'], ['parler', 'nous parlons', 'en parlant'], ['faire', 'nous faisons', 'en faisant'],
  ['lire', 'nous lisons', 'en lisant'], ['être', '—', 'en étant (onregelmatig)'], ['avoir', '—', 'en ayant (onregelmatig)'],
], [2])}
${exs([
  ['Papi chante en faisant la vaisselle.', 'Opa zingt tijdens de afwas.'],
  ['On apprend en faisant des erreurs.', 'Je leert door fouten te maken.'],
  ['Ne parle pas en mangeant !', 'Niet praten met je mond vol!'],
  ['Il est tombé en courant.', 'Hij is gevallen tijdens het rennen.'],
])}
<h2>Plus-que-parfait: had gedaan</h2>
<p>Iets dat <b>nog eerder</b> in het verleden gebeurde. Vorm: <b>imparfait</b> van avoir/être + voltooid deelwoord.</p>
${exs([
  ['Quand on est arrivés, ils avaient déjà mangé.', 'Toen we aankwamen, hadden ze al gegeten.'],
  ['J\'avais oublié son anniversaire…', 'Ik was haar verjaardag vergeten…'],
  ['Elle était déjà partie.', 'Ze was al vertrokken.'],
  ['Si j\'avais su !', 'Had ik dat maar geweten!'],
])}
<h2>Venir de: net gedaan</h2>
${exs([['Je viens de manger.', 'Ik heb net gegeten.'], ['Ils viennent d\'arriver.', 'Ze zijn net aangekomen.']])}
<h2>Être en train de: bezig zijn met</h2>
${exs([['Je suis en train de cuisiner.', 'Ik ben aan het koken.'], ['Chut, le bébé est en train de dormir !', 'Sst, de baby ligt te slapen!']])}
`,
  vocab: [['en mangeant', 'tijdens het eten'], ['faire la vaisselle', 'afwassen'], ['une erreur', 'een fout'], ['oublier', 'vergeten'], ['venir de', 'net (gedaan hebben)'], ['être en train de', 'bezig zijn met'], ['chut !', 'sst!'], ['courir', 'rennen']],
  exercises: [
    { type: 'mc', s: 'Papi chante en ___ la vaisselle.', options: ['faisant', 'faire', 'fait', 'faisons'] },
    { type: 'fill', s: 'Ne parle pas en ___ ! (manger)', answer: 'mangeant' },
    { type: 'fill', s: 'On apprend en ___ des erreurs. (faire)', answer: 'faisant' },
    { type: 'mc', s: 'Quand on est arrivés, ils ___ déjà mangé.', options: ['avaient', 'ont', 'auront', 'sont'] },
    { type: 'mc', s: 'Elle ___ déjà partie.', options: ['était', 'avait', 'a', 'est été'] },
    { type: 'mc', q: '"Ik heb net gegeten" =', options: ['Je viens de manger.', 'Je vais manger.', 'Je suis en train de manger.', 'J\'avais mangé.'] },
    { type: 'fill', s: 'Je suis en ___ de cuisiner.', answer: 'train' },
    { type: 'translate', nl: 'Ze zijn net aangekomen.', answer: ['Ils viennent d\'arriver.', 'Elles viennent d\'arriver.'] },
    { type: 'translate', nl: 'Ik was zijn verjaardag vergeten.', answer: ['J\'avais oublié son anniversaire.'] },
    { type: 'listen', fr: 'Chut, le bébé est en train de dormir !', options: ['Sst, de baby ligt te slapen!', 'Sst, de baby gaat zo slapen!', 'De baby heeft net geslapen.', 'De baby wil niet slapen!'] },
    { type: 'speak', fr: 'On apprend une langue en faisant des erreurs.', nl: 'Je leert een taal door fouten te maken.' },
  ],
},
];
