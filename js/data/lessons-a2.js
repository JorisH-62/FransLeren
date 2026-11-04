import { ex, exs, tbl, tip, warn, f, conj } from './helpers.js';

export default [
// ─────────────────────────────────────────────
{
  id: 'a2-pc-avoir', unit: 'A2', emoji: '⏪', title: 'Verleden tijd (1): passé composé met avoir', sub: 'j\'ai mangé, j\'ai vu',
  theory: `
<h2>De belangrijkste verleden tijd in gesprekken</h2>
<p>Het <b>passé composé</b> werkt net als de Nederlandse voltooide tijd: <i>ik <b>heb</b> ge<b>geten</b></i> = ${f('j\'<b>ai</b> mang<b>é</b>')}. Je gebruikt het voor afgeronde gebeurtenissen: wat heb je gedaan?</p>
<p><b>Vorm:</b> avoir (vervoegd) + voltooid deelwoord</p>
<h2>Het voltooid deelwoord maken</h2>
${tbl(['werkwoord op', 'deelwoord', 'voorbeeld'], [
  ['-er', '-é', 'manger → mangé, parler → parlé'],
  ['-ir', '-i', 'finir → fini, dormir → dormi'],
  ['-re', '-u', 'attendre → attendu, vendre → vendu'],
], [1])}
<h2>Onregelmatige deelwoorden (leer deze!)</h2>
${tbl(['werkwoord', 'deelwoord', 'betekenis'], [
  ['avoir', 'eu', 'gehad'], ['être', 'été', 'geweest'], ['faire', 'fait', 'gedaan / gemaakt'],
  ['prendre', 'pris', 'genomen'], ['voir', 'vu', 'gezien'], ['boire', 'bu', 'gedronken'],
  ['lire', 'lu', 'gelezen'], ['dire', 'dit', 'gezegd'], ['écrire', 'écrit', 'geschreven'],
  ['mettre', 'mis', 'gezet / gelegd'], ['pouvoir', 'pu', 'gekund'], ['vouloir', 'voulu', 'gewild'],
  ['devoir', 'dû', 'gemoeten'], ['savoir', 'su', 'geweten'], ['ouvrir', 'ouvert', 'geopend'], ['comprendre', 'compris', 'begrepen'],
], [0, 1])}
${exs([
  ['Hier, j\'ai mangé des escargots.', 'Gisteren heb ik slakken gegeten. (Sorry, Gaston!)'],
  ['Tu as vu le match ?', 'Heb jij de wedstrijd gezien?'],
  ['On a fait une grande promenade.', 'We hebben een grote wandeling gemaakt.'],
  ['Ils ont bu tout le champagne !', 'Ze hebben alle champagne opgedronken!'],
  ['Qu\'est-ce que tu as dit ?', 'Wat zei je?'],
])}
<h2>Ontkenning</h2>
<p><i>ne … pas</i> komt rond het <b>hulpwerkwoord</b>: ${f('Je n\'ai pas compris.')} (Ik heb het niet begrepen.)</p>
${tip(`Het passé composé vertaal je ook vaak met de Nederlandse <b>gewone</b> verleden tijd: ${f('J\'ai vu un film')} = "Ik heb een film gezien" óf "Ik zag een film".`)}
<h2>Tijdswoorden voor het verleden</h2>
${tbl(['Frans', 'Nederlands'], [['hier', 'gisteren'], ['avant-hier', 'eergisteren'], ['la semaine dernière', 'vorige week'], ['l\'année dernière', 'vorig jaar'], ['il y a deux jours', 'twee dagen geleden'], ['déjà', 'al'], ['ce matin', 'vanochtend']], [0])}
`,
  vocab: [['hier', 'gisteren'], ['avant-hier', 'eergisteren'], ['la semaine dernière', 'vorige week'], ['il y a … jours', '… dagen geleden'], ['déjà', 'al'], ['ce matin', 'vanochtend'], ['voir (vu)', 'zien'], ['boire (bu)', 'drinken'], ['lire (lu)', 'lezen'], ['dire (dit)', 'zeggen'], ['mettre (mis)', 'zetten / leggen'], ['finir (fini)', 'afmaken / eindigen']],
  exercises: [
    { type: 'mc', q: 'Wat is het voltooid deelwoord van <b>faire</b>?', options: ['fait', 'fairé', 'fai', 'faisé'], noSay: true },
    { type: 'mc', q: 'Wat is het voltooid deelwoord van <b>voir</b>?', options: ['vu', 'voiré', 'vi', 'vois'], noSay: true },
    { type: 'mc', s: 'Hier, nous ___ mangé au restaurant.', options: ['avons', 'sommes', 'avez', 'ont'] },
    { type: 'fill', s: 'J\'ai ___ un bon livre. (lire)', answer: 'lu' },
    { type: 'fill', s: 'Tu as ___ le match ? (voir)', answer: 'vu' },
    { type: 'fill', s: 'Ils ont ___ tout le champagne ! (boire)', answer: 'bu' },
    { type: 'fill', s: 'Elle a ___ la porte. (ouvrir)', answer: 'ouvert' },
    { type: 'order', nl: 'Ik heb het niet begrepen.', fr: 'Je n\'ai pas compris.' },
    { type: 'translate', nl: 'Gisteren heb ik een film gezien.', answer: ['Hier, j\'ai vu un film.', 'J\'ai vu un film hier.', 'Hier j\'ai vu un film.'] },
    { type: 'translate', nl: 'Wat heb je gedaan?', answer: ['Qu\'est-ce que tu as fait ?', 'Tu as fait quoi ?', 'Qu\'as-tu fait ?', 'Qu\'est-ce que vous avez fait ?'] },
    { type: 'listen', fr: 'On a fait une grande promenade avec le chien.', options: ['We hebben een lange wandeling met de hond gemaakt.', 'We gaan een lange wandeling maken met de hond.', 'De hond heeft een lange wandeling gemaakt.', 'We maken elke dag een wandeling.'] },
    { type: 'speak', fr: 'Ce week-end, j\'ai fait un gâteau au chocolat.', nl: 'Dit weekend heb ik een chocoladetaart gemaakt.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-pc-etre', unit: 'A2', emoji: '🏠', title: 'Verleden tijd (2): passé composé met être', sub: 'je suis allé(e), elle est née',
  theory: `
<h2>Sommige werkwoorden gebruiken être</h2>
<p>Ongeveer 15 werkwoorden (meestal over <b>beweging</b> of <b>verandering</b>) gebruiken <b>être</b> in plaats van avoir — net als in het Nederlands "ik <b>ben</b> gegaan".</p>
${tip(`Ezelsbruggetje: het <b>Huis van Être</b> 🏠. Je <b>komt</b> aan (arriver), <b>gaat</b> naar binnen (entrer), <b>gaat</b> naar boven (monter), <b>valt</b> (tomber), <b>blijft</b> (rester), gaat naar beneden (descendre), naar buiten (sortir) en <b>vertrekt</b> (partir). Je wordt er <b>geboren</b> (naître) en je <b>sterft</b> er (mourir). En je gaat (aller) en komt (venir) en keert terug (revenir, rentrer, retourner).`)}
${tbl(['werkwoord', 'deelwoord', 'betekenis'], [
  ['aller', 'allé', 'gaan'], ['venir', 'venu', 'komen'], ['arriver', 'arrivé', 'aankomen'], ['partir', 'parti', 'vertrekken'],
  ['entrer', 'entré', 'binnengaan'], ['sortir', 'sorti', 'uitgaan'], ['monter', 'monté', 'naar boven gaan'], ['descendre', 'descendu', 'naar beneden gaan'],
  ['tomber', 'tombé', 'vallen'], ['rester', 'resté', 'blijven'], ['naître', 'né', 'geboren worden'], ['mourir', 'mort', 'sterven'],
  ['rentrer', 'rentré', 'naar huis gaan'], ['revenir', 'revenu', 'terugkomen'], ['devenir', 'devenu', 'worden'],
], [0, 1])}
<h2>Het deelwoord past zich aan!</h2>
<p>Met <b>être</b> krijgt het deelwoord een <b>-e</b> (vrouwelijk) en/of <b>-s</b> (meervoud), net als een bijvoeglijk naamwoord:</p>
${tbl(['', 'aller'], [
  ['je suis', 'allé(e)'], ['tu es', 'allé(e)'], ['il est / elle est', 'allé / allée'],
  ['nous sommes', 'allé(e)s'], ['vous êtes', 'allé(e)(s)'], ['ils sont / elles sont', 'allés / allées'],
])}
${exs([
  ['Ma tante est arrivée hier.', 'Mijn tante is gisteren aangekomen.'],
  ['Les enfants sont sortis jouer.', 'De kinderen zijn buiten gaan spelen.'],
  ['Papi est tombé dans la piscine… tout habillé !', 'Opa is in het zwembad gevallen… met kleren aan!'],
  ['Je suis né en 1985.', 'Ik ben in 1985 geboren.'],
  ['On est restés à la maison.', 'We zijn thuisgebleven.'],
])}
<h2>Wederkerende werkwoorden ook met être</h2>
<p>Alle werkwoorden met <i>se</i> (zie volgende les) gebruiken ook être: ${f('Je me suis levé à midi.')} (Ik ben om 12 uur opgestaan.)</p>
${tip(`Het goede nieuws: <i>allé</i>, <i>allée</i> en <i>allés</i> klinken precies hetzelfde. In gesprekken hoor je het verschil dus niet!`)}
`,
  vocab: [['arriver', 'aankomen'], ['partir', 'vertrekken'], ['entrer', 'binnengaan'], ['sortir', 'uitgaan'], ['monter', 'naar boven gaan'], ['descendre', 'naar beneden gaan'], ['tomber', 'vallen'], ['rester', 'blijven'], ['naître', 'geboren worden'], ['mourir', 'sterven'], ['rentrer', 'naar huis gaan'], ['devenir', 'worden']],
  exercises: [
    { type: 'mc', s: 'Hier, je ___ allé au cinéma.', options: ['suis', 'ai', 'es', 'étais'] },
    { type: 'mc', s: 'Nous ___ mangé une pizza.', options: ['avons', 'sommes', 'êtes', 'ont'] },
    { type: 'mc', s: 'Ma sœur est ___ hier soir.', options: ['arrivée', 'arrivé', 'arrivés', 'arriver'] },
    { type: 'mc', s: 'Les enfants sont ___ dans le jardin.', options: ['sortis', 'sorti', 'sortie', 'sortir'] },
    { type: 'fill', s: 'Papi est ___ dans la piscine. (tomber)', answer: 'tombé' },
    { type: 'fill', s: 'Je suis ___ en 1990. (naître)', answer: ['né', 'née'] },
    { type: 'fill', s: 'Elles ___ parties tôt. (être)', answer: 'sont' },
    { type: 'mc', q: 'Welk werkwoord gebruikt <b>avoir</b> in het passé composé?', options: ['manger', 'aller', 'tomber', 'rester'], noSay: true },
    { type: 'translate', nl: 'We zijn thuisgebleven.', answer: ['On est restés à la maison.', 'Nous sommes restés à la maison.', 'On est resté à la maison.', 'Nous sommes restées à la maison.'] },
    { type: 'translate', nl: 'Hij is gisteren vertrokken.', answer: ['Il est parti hier.', 'Hier, il est parti.'] },
    { type: 'order', nl: 'Mijn tante is gisteren aangekomen.', fr: 'Ma tante est arrivée hier.' },
    { type: 'listen', fr: 'Le chat est monté sur le toit et il n\'est pas descendu.', options: ['De kat is op het dak geklommen en niet naar beneden gekomen.', 'De kat is van het dak gevallen.', 'De kat wil niet naar buiten.', 'De kat is naar beneden gekomen.'] },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-wederkerend', unit: 'A2', emoji: '🪥', title: 'Wederkerende werkwoorden', sub: 'je me lève, on s\'amuse',
  theory: `
<h2>Se laver — zich wassen</h2>
<p>Net als in het Nederlands ("ik was <b>me</b>") hebben sommige werkwoorden een extra voornaamwoord. In het Frans zijn het er véél meer!</p>
${conj(['je me lave', 'tu te laves', 'il / elle / on se lave', 'nous nous lavons', 'vous vous lavez', 'ils / elles se lavent'], ['ik was me', 'jij wast je', 'hij / zij wast zich', 'wij wassen ons', 'jullie wassen je', 'zij wassen zich'])}
<p>Voor een klinker: <b>m', t', s'</b>: ${f('je m\'appelle')}, ${f('il s\'habille')}.</p>
<h2>Veelgebruikte wederkerende werkwoorden</h2>
${tbl(['Frans', 'Nederlands'], [
  ['se lever', 'opstaan'], ['se coucher', 'naar bed gaan'], ['se réveiller', 'wakker worden'], ['s\'habiller', 'zich aankleden'],
  ['se doucher', 'douchen'], ['se dépêcher', 'opschieten'], ['s\'amuser', 'plezier hebben'], ['s\'ennuyer', 'zich vervelen'],
  ['se reposer', 'uitrusten'], ['se promener', 'wandelen'], ['se souvenir de', 'zich herinneren'], ['s\'asseoir', 'gaan zitten'],
  ['se disputer', 'ruzie maken'], ['s\'entendre (bien)', 'het (goed) met elkaar kunnen vinden'], ['se marier', 'trouwen'], ['s\'occuper de', 'zorgen voor'],
], [0])}
${exs([
  ['Le dimanche, je me lève à dix heures.', 'Op zondag sta ik om tien uur op.'],
  ['Dépêche-toi, on est en retard !', 'Schiet op, we zijn te laat!'],
  ['Les enfants s\'amusent bien.', 'De kinderen hebben veel plezier.'],
  ['Je m\'entends très bien avec ma belle-sœur.', 'Ik kan het heel goed vinden met mijn schoonzus.'],
  ['Assieds-toi !', 'Ga zitten!'],
])}
<h2>Ontkenning en verleden tijd</h2>
${exs([
  ['Je ne me souviens pas.', 'Ik herinner het me niet.'],
  ['On s\'est bien amusés !', 'We hebben ons goed vermaakt! (passé composé met être)'],
  ['Elle s\'est levée tard.', 'Zij is laat opgestaan.'],
])}
`,
  vocab: [['se lever', 'opstaan'], ['se coucher', 'naar bed gaan'], ['se réveiller', 'wakker worden'], ['s\'habiller', 'zich aankleden'], ['se dépêcher', 'opschieten'], ['s\'amuser', 'plezier hebben'], ['s\'ennuyer', 'zich vervelen'], ['se reposer', 'uitrusten'], ['se promener', 'wandelen'], ['se souvenir de', 'zich herinneren'], ['s\'asseoir', 'gaan zitten'], ['se disputer', 'ruzie maken'], ['s\'entendre bien', 'goed overweg kunnen'], ['se marier', 'trouwen']],
  exercises: [
    { type: 'mc', s: 'Je ___ lève à sept heures.', options: ['me', 'se', 'te', 'nous'] },
    { type: 'mc', s: 'Les enfants ___ amusent.', options: ['s\'', 'se', 'les', 'nous'] },
    { type: 'fill', s: 'Nous ___ promenons dans le parc.', answer: 'nous' },
    { type: 'fill', s: 'Tu ___ couches à quelle heure ?', answer: 'te' },
    { type: 'mc', s: 'Elle s\'___ levée tard.', options: ['est', 'a', 'es', 'ai'] },
    { type: 'match', pairs: [['se dépêcher', 'opschieten'], ['s\'ennuyer', 'zich vervelen'], ['se souvenir', 'zich herinneren'], ['se disputer', 'ruzie maken'], ['s\'asseoir', 'gaan zitten']] },
    { type: 'translate', nl: 'Schiet op!', answer: ['Dépêche-toi !', 'Dépêchez-vous !'] },
    { type: 'translate', nl: 'Ik herinner het me niet.', answer: ['Je ne me souviens pas.', 'Je me souviens pas.', 'Je ne m\'en souviens pas.', 'Je m\'en souviens pas.'] },
    { type: 'order', nl: 'We hebben ons goed vermaakt!', fr: 'On s\'est bien amusés !' },
    { type: 'listen', fr: 'Je m\'entends très bien avec mes beaux-parents.', options: ['Ik kan het heel goed vinden met mijn schoonouders.', 'Ik hoor mijn schoonouders heel goed.', 'Mijn schoonouders zijn heel mooi.', 'Ik maak vaak ruzie met mijn schoonouders.'] },
    { type: 'speak', fr: 'Assieds-toi, je vais faire du café.', nl: 'Ga zitten, ik ga koffie zetten.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-voornaamwoorden', unit: 'A2', emoji: '🎯', title: 'Le, la, lui, leur: voornaamwoorden', sub: 'je le vois, je lui parle',
  theory: `
<h2>Lijdend voorwerp: le, la, les</h2>
<p>Om een zelfstandig naamwoord niet te herhalen. Let op: het voornaamwoord staat <b>vóór</b> het werkwoord!</p>
${tbl(['Frans', 'Nederlands'], [['me (m\')', 'mij'], ['te (t\')', 'jou'], ['le (l\')', 'hem / het'], ['la (l\')', 'haar / het'], ['nous', 'ons'], ['vous', 'jullie / u'], ['les', 'hen / ze']], [0])}
${exs([
  ['Tu vois le chat ? — Oui, je le vois.', 'Zie je de kat? — Ja, ik zie hem.'],
  ['Tu aimes la tarte ? — Je l\'adore !', 'Vind je de taart lekker? — Ik ben er dol op!'],
  ['Où sont mes lunettes ? — Tu les portes !', 'Waar is mijn bril? — Je hebt hem op!'],
  ['Je t\'aime.', 'Ik hou van jou.'],
])}
<h2>Meewerkend voorwerp: lui, leur</h2>
<p>Voor werkwoorden met <b>à</b> + persoon (parler à, téléphoner à, donner à, dire à, écrire à…):</p>
${tbl(['Frans', 'Nederlands'], [['me / te', '(aan) mij / jou'], ['lui', '(aan) hem / haar'], ['nous / vous', '(aan) ons / jullie'], ['leur', '(aan) hen']], [0])}
${exs([
  ['Je téléphone à mamie. → Je lui téléphone.', 'Ik bel oma. → Ik bel haar.'],
  ['Il parle à ses parents. → Il leur parle.', 'Hij praat met zijn ouders. → Hij praat met hen.'],
  ['Tu peux me passer le pain ?', 'Kun je mij het brood aangeven?'],
])}
<h2>Y en en</h2>
${tbl(['', 'vervangt', 'voorbeeld'], [
  ['<b>y</b>', 'à + plaats / ding (daar, eraan)', 'Tu vas à Paris ? — Oui, j\'y vais.'],
  ['<b>en</b>', 'de + iets / hoeveelheid (ervan, er…)', 'Tu veux du gâteau ? — Oui, j\'en veux !'],
])}
${exs([
  ['Combien d\'enfants tu as ? — J\'en ai deux.', 'Hoeveel kinderen heb je? — Ik heb er twee.'],
  ['On y va !', 'Kom, we gaan! (heel veel gebruikt)'],
  ['Il y en a encore ?', 'Is er nog (van)?'],
])}
<h2>Volgorde bij ontkenning en met twee werkwoorden</h2>
${exs([
  ['Je ne le vois pas.', 'Ik zie hem niet.'],
  ['Je vais lui téléphoner.', 'Ik ga haar bellen. (voornaamwoord vóór het hele werkwoord)'],
])}
${tip(`Begin met <b>le / la / les</b> en de vaste uitdrukkingen ${f('On y va !')} en ${f('J\'en ai deux.')} De rest komt vanzelf door veel te luisteren.`)}
`,
  vocab: [['on y va', 'kom, we gaan'], ['je t\'aime', 'ik hou van jou'], ['téléphoner à', 'bellen (naar)'], ['donner à', 'geven aan'], ['dire à', 'zeggen tegen'], ['les lunettes', 'de bril'], ['porter', 'dragen']],
  exercises: [
    { type: 'mc', q: 'Tu vois <b>le chat</b> ? — Oui, je ___ vois.', options: ['le', 'la', 'lui', 'les'], noSay: true },
    { type: 'mc', q: 'Tu aimes <b>ces chaussures</b> ? — Oui, je ___ adore.', options: ['les', 'leur', 'la', 'le'], noSay: true },
    { type: 'mc', q: 'Tu téléphones <b>à ta mère</b> ? — Oui, je ___ téléphone.', options: ['lui', 'la', 'leur', 'le'], noSay: true },
    { type: 'mc', q: 'Il parle <b>à ses enfants</b>. → Il ___ parle.', options: ['leur', 'les', 'lui', 'leurs'], noSay: true },
    { type: 'mc', q: 'Tu vas <b>au marché</b> ? — Oui, j\'___ vais.', options: ['y', 'en', 'le', 'lui'], noSay: true },
    { type: 'mc', q: 'Tu as <b>des frères</b> ? — Oui, j\'___ ai trois.', options: ['en', 'y', 'les', 'leur'], noSay: true },
    { type: 'order', nl: 'Ik zie hem niet.', fr: 'Je ne le vois pas.' },
    { type: 'order', nl: 'Ik ga haar bellen.', fr: 'Je vais lui téléphoner.' },
    { type: 'translate', nl: 'Kom, we gaan!', answer: ['On y va !', 'Allez, on y va !', 'Allons-y !'] },
    { type: 'translate', nl: 'Ik hou van jou.', answer: ['Je t\'aime.'] },
    { type: 'listen', fr: 'Où sont mes lunettes ? — Tu les portes, papi !', options: ['Waar is mijn bril? — Je hebt hem op, opa!', 'Waar zijn mijn schoenen? — Je draagt ze, opa!', 'Waar is opa? — Hij draagt zijn bril!', 'Heb je mijn bril gezien, opa?'] },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-imparfait', unit: 'A2', emoji: '🕰️', title: 'Verleden tijd (3): imparfait', sub: 'quand j\'étais petit…',
  theory: `
<h2>Waarvoor gebruik je de imparfait?</h2>
<ul>
  <li><b>Beschrijvingen</b> in het verleden: hoe was het? (${f('Il faisait beau.')})</li>
  <li><b>Gewoontes</b>: wat deed je vroeger altijd? (${f('Le dimanche, on mangeait chez mamie.')})</li>
  <li><b>Lopende situaties</b>: wat was je aan het doen? (${f('Je dormais quand…')})</li>
</ul>
<h2>Vorm: makkelijk!</h2>
<p>Neem de <b>nous</b>-vorm van het presens, haal <b>-ons</b> eraf, en plak de uitgangen erachter:</p>
${tbl(['', 'uitgang', 'parler (nous parl-ons)', 'faire (nous fais-ons)'], [
  ['je', '-ais', 'je parlais', 'je faisais'],
  ['tu', '-ais', 'tu parlais', 'tu faisais'],
  ['il / elle / on', '-ait', 'il parlait', 'il faisait'],
  ['nous', '-ions', 'nous parlions', 'nous faisions'],
  ['vous', '-iez', 'vous parliez', 'vous faisiez'],
  ['ils / elles', '-aient', 'ils parlaient', 'ils faisaient'],
], [2, 3])}
${tip(`-ais, -ais, -ait en -aient klinken allemaal hetzelfde ("è"). Weer maar 3 klanken te onthouden!`)}
<h2>Enige uitzondering: être</h2>
${conj(['j\'étais', 'tu étais', 'il / elle / on était', 'nous étions', 'vous étiez', 'ils / elles étaient'], ['ik was', 'jij was', 'hij / zij was', 'wij waren', 'jullie waren', 'zij waren'])}
${exs([
  ['Quand j\'étais petit, j\'avais un hamster qui s\'appelait Napoléon.', 'Toen ik klein was, had ik een hamster die Napoleon heette.'],
  ['Avant, on habitait à la campagne.', 'Vroeger woonden we op het platteland.'],
  ['Il faisait chaud et les enfants étaient fatigués.', 'Het was warm en de kinderen waren moe.'],
  ['Mamie chantait toujours en cuisinant.', 'Oma zong altijd tijdens het koken.'],
  ['C\'était génial !', 'Het was geweldig!'],
])}
<h2>Signaalwoorden</h2>
<p>${f('avant')} (vroeger), ${f('autrefois')} (vroeger), ${f('toujours')} (altijd), ${f('souvent')} (vaak), ${f('tous les jours')} (elke dag), ${f('le lundi')} (op maandag = elke maandag), ${f('quand j\'étais petit')} (toen ik klein was).</p>
`,
  vocab: [['avant', 'vroeger / eerder'], ['autrefois', 'vroeger'], ['toujours', 'altijd'], ['souvent', 'vaak'], ['tous les jours', 'elke dag'], ['quand j\'étais petit', 'toen ik klein was'], ['c\'était', 'het was'], ['la campagne', 'het platteland'], ['chanter', 'zingen']],
  exercises: [
    { type: 'mc', s: 'Quand j\'___ petit, j\'adorais les dinosaures.', options: ['étais', 'ai été', 'suis', 'était'] },
    { type: 'mc', s: 'Avant, nous ___ à Lyon.', options: ['habitions', 'habitons', 'avons habité', 'habitaient'] },
    { type: 'fill', s: 'Il ___ beau. (faire, imparfait)', answer: 'faisait' },
    { type: 'fill', s: 'Les enfants ___ fatigués. (être)', answer: 'étaient' },
    { type: 'fill', s: 'Tu ___ toujours en retard ! (arriver)', answer: 'arrivais' },
    { type: 'fill', s: 'Vous ___ beaucoup ? (lire)', answer: 'lisiez', hint: 'nous lisons' },
    { type: 'translate', nl: 'Het was geweldig!', answer: ['C\'était génial !', 'C\'était super !', 'C\'était formidable !'] },
    { type: 'translate', nl: 'Toen ik klein was, had ik een hond.', answer: ['Quand j\'étais petit, j\'avais un chien.', 'Quand j\'étais petite, j\'avais un chien.'] },
    { type: 'order', nl: 'Vroeger woonden we op het platteland.', fr: 'Avant, on habitait à la campagne.' },
    { type: 'listen', fr: 'Mamie chantait toujours en faisant la cuisine.', options: ['Oma zong altijd tijdens het koken.', 'Oma heeft één keer gezongen in de keuken.', 'Oma gaat zingen in de keuken.', 'Oma kookte nooit.'] },
    { type: 'speak', fr: 'Quand j\'étais petit, je passais mes vacances à la mer.', nl: 'Toen ik klein was, bracht ik mijn vakanties door aan zee.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-pc-vs-imp', unit: 'A2', emoji: '🎬', title: 'Passé composé of imparfait?', sub: 'het decor en de actie',
  theory: `
<h2>Denk aan een film 🎬</h2>
${tbl(['Imparfait = het DECOR', 'Passé composé = de ACTIE'], [
  ['hoe het was, beschrijving', 'wat er gebeurde (afgerond)'],
  ['achtergrond, situatie', 'een gebeurtenis op een moment'],
  ['gewoonte (elke dag…)', 'één keer, of een bepaald aantal keer'],
  ['was aan het …', 'opeens, toen, plotseling'],
])}
${exs([
  ['Je dormais quand le téléphone a sonné.', 'Ik sliep (decor) toen de telefoon ging (actie).'],
  ['Il pleuvait, alors on est restés à la maison.', 'Het regende (decor), dus we zijn thuisgebleven (actie).'],
  ['On mangeait tranquillement quand le chien a volé le poulet !', 'We zaten rustig te eten (decor) toen de hond de kip stal (actie)!'],
  ['Quand j\'étais petit, j\'allais à la plage tous les étés. Un jour, j\'ai vu un dauphin.', 'Toen ik klein was, ging ik elke zomer naar het strand (gewoonte). Op een dag zag ik een dolfijn (één keer).'],
])}
<h2>Signaalwoorden</h2>
${tbl(['→ imparfait', '→ passé composé'], [
  ['toujours, souvent, d\'habitude', 'un jour, soudain, tout à coup'],
  ['tous les jours, le lundi', 'hier, lundi dernier, une fois'],
  ['pendant que (terwijl)', 'd\'abord, ensuite, enfin'],
])}
${tip(`Vertellen over je weekend op een familiefeest? De gebeurtenissen in het <b>passé composé</b>, en <i>hoe het was</i> in de imparfait: ${f('On est allés à la mer. C\'était super, il faisait beau !')}`)}
`,
  vocab: [['soudain', 'plotseling'], ['tout à coup', 'opeens'], ['un jour', 'op een dag'], ['d\'habitude', 'gewoonlijk'], ['pendant que', 'terwijl'], ['d\'abord', 'eerst'], ['ensuite', 'daarna'], ['enfin', 'eindelijk / tenslotte'], ['sonner', 'rinkelen / aanbellen'], ['voler', 'stelen / vliegen']],
  exercises: [
    { type: 'mc', s: 'Je ___ quand le téléphone a sonné.', options: ['dormais', 'ai dormi', 'dors', 'dormirai'] },
    { type: 'mc', s: 'Il pleuvait, alors on ___ à la maison.', options: ['est restés', 'restait', 'reste', 'a resté'] },
    { type: 'mc', s: 'Tout à coup, le chien ___ le poulet !', options: ['a volé', 'volait', 'vole', 'volé'] },
    { type: 'mc', s: 'D\'habitude, nous ___ à huit heures.', options: ['mangions', 'avons mangé', 'mangeons mangé', 'sommes mangés'] },
    { type: 'mc', s: 'Hier, j\'___ un film génial.', options: ['ai vu', 'voyais', 'vois', 'étais vu'] },
    { type: 'mc', s: 'C\'___ super, il faisait beau !', options: ['était', 'a été', 'est été', 'étais'] },
    { type: 'fill', s: 'Quand j\'étais petit, j\'___ souvent chez mes grands-parents. (aller)', answer: 'allais' },
    { type: 'fill', s: 'Un jour, j\'___ un dauphin. (voir, actie)', answer: 'ai vu' },
    { type: 'translate', nl: 'Ik sliep toen de telefoon ging.', answer: ['Je dormais quand le téléphone a sonné.'] },
    { type: 'listen', fr: 'On mangeait tranquillement quand le chien a volé le poulet.', options: ['We zaten rustig te eten toen de hond de kip stal.', 'De hond at rustig zijn kip.', 'We hebben de hond kip gegeven.', 'De kip vloog weg toen we aten.'] },
    { type: 'speak', fr: 'Samedi, on est allés à la mer. Il faisait très beau !', nl: 'Zaterdag zijn we naar zee gegaan. Het was heel mooi weer!' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-ir-re', unit: 'A2', emoji: '🔧', title: 'Werkwoorden op -ir en -re', sub: 'finir, partir, attendre',
  theory: `
<h2>Groep 2: -ir zoals finir</h2>
${conj(['je finis', 'tu finis', 'il / elle finit', 'nous finissons', 'vous finissez', 'ils / elles finissent'], ['ik maak af', 'jij maakt af', 'hij / zij maakt af', 'wij maken af', 'jullie maken af', 'zij maken af'])}
<p>Zo ook: ${f('choisir')} (kiezen), ${f('grandir')} (groeien), ${f('réussir')} (slagen), ${f('grossir')} (dikker worden), ${f('maigrir')} (afvallen), ${f('réfléchir')} (nadenken).</p>
<h2>Groep 3a: -ir zoals partir</h2>
${conj(['je pars', 'tu pars', 'il / elle part', 'nous partons', 'vous partez', 'ils / elles partent'])}
<p>Zo ook: ${f('sortir')} (je sors), ${f('dormir')} (je dors), ${f('sentir')} (je sens — ruiken/voelen), ${f('servir')} (je sers).</p>
<h2>Groep 3b: -re zoals attendre</h2>
${conj(['j\'attends', 'tu attends', 'il / elle attend', 'nous attendons', 'vous attendez', 'ils / elles attendent'], ['ik wacht', 'jij wacht', 'hij / zij wacht', 'wij wachten', 'jullie wachten', 'zij wachten'])}
<p>Zo ook: ${f('vendre')} (verkopen), ${f('répondre')} (antwoorden), ${f('entendre')} (horen), ${f('perdre')} (verliezen), ${f('descendre')} (naar beneden gaan).</p>
${exs([
  ['Je choisis le dessert au chocolat.', 'Ik kies het chocoladetoetje.'],
  ['Les enfants grandissent si vite !', 'De kinderen worden zo snel groot!'],
  ['Papa dort sur le canapé… encore.', 'Papa slaapt op de bank… alweer.'],
  ['On vous attend !', 'We wachten op jullie!'],
  ['Tu entends ce bruit ?', 'Hoor je dat geluid?'],
  ['Je perds toujours mes clés.', 'Ik verlies altijd mijn sleutels.'],
])}
${tip(`Een echt Franse familie-uitspraak: ${f('Ça sent bon !')} (Dat ruikt lekker!) als je de keuken binnenloopt.`)}
<h2>Nog een paar belangrijke onregelmatige</h2>
${tbl(['dire (zeggen)', 'lire (lezen)', 'boire (drinken)', 'mettre (zetten)'], [
  ['je dis', 'je lis', 'je bois', 'je mets'],
  ['tu dis', 'tu lis', 'tu bois', 'tu mets'],
  ['il dit', 'il lit', 'il boit', 'il met'],
  ['nous disons', 'nous lisons', 'nous buvons', 'nous mettons'],
  ['vous dites', 'vous lisez', 'vous buvez', 'vous mettez'],
  ['ils disent', 'ils lisent', 'ils boivent', 'ils mettent'],
], [0, 1, 2, 3])}
`,
  vocab: [['finir', 'afmaken / eindigen'], ['choisir', 'kiezen'], ['grandir', 'groeien'], ['réussir', 'slagen'], ['réfléchir', 'nadenken'], ['dormir', 'slapen'], ['sentir', 'ruiken / voelen'], ['attendre', 'wachten'], ['vendre', 'verkopen'], ['répondre', 'antwoorden'], ['entendre', 'horen'], ['perdre', 'verliezen'], ['boire', 'drinken'], ['mettre', 'zetten / leggen / aantrekken'], ['ça sent bon', 'dat ruikt lekker']],
  exercises: [
    { type: 'mc', s: 'Nous ___ le travail à cinq heures.', options: ['finissons', 'finons', 'finisons', 'finssons'] },
    { type: 'fill', s: 'Les enfants ___ si vite ! (grandir)', answer: 'grandissent' },
    { type: 'fill', s: 'Je ___ le bus. (attendre)', answer: 'attends' },
    { type: 'fill', s: 'Papa ___ sur le canapé. (dormir)', answer: 'dort' },
    { type: 'fill', s: 'Vous ___ quoi ? (boire)', answer: 'buvez' },
    { type: 'fill', s: 'Qu\'est-ce que vous ___ ? (dire)', answer: 'dites' },
    { type: 'mc', s: 'Tu ___ ce bruit ?', options: ['entends', 'entend', 'entendez', 'entendre'] },
    { type: 'translate', nl: 'Dat ruikt lekker!', answer: ['Ça sent bon !', 'Ça sent très bon !'] },
    { type: 'translate', nl: 'We wachten op jullie!', answer: ['On vous attend !', 'Nous vous attendons !'] },
    { type: 'order', nl: 'Ik verlies altijd mijn sleutels.', fr: 'Je perds toujours mes clés.' },
    { type: 'listen', fr: 'Je choisis le dessert au chocolat, évidemment !', options: ['Ik kies natuurlijk het chocoladetoetje!', 'Ik heb het chocoladetoetje al op!', 'Ik wil geen toetje!', 'Wie kiest het chocoladetoetje?'] },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-vergelijken', unit: 'A2', emoji: '⚖️', title: 'Vergelijken', sub: 'plus grand que, le meilleur',
  theory: `
<h2>Meer, minder, even</h2>
${tbl(['Frans', 'Nederlands', 'Voorbeeld'], [
  ['plus … que', 'meer… dan / -er dan', 'Paul est plus grand que Marc.'],
  ['moins … que', 'minder … dan', 'C\'est moins cher que ça.'],
  ['aussi … que', 'even … als', 'Elle est aussi drôle que sa mère.'],
], [2])}
${exs([
  ['Mon frère est plus âgé que moi.', 'Mijn broer is ouder dan ik.'],
  ['Le chat est plus intelligent que le chien. (Ne le dis pas au chien.)', 'De kat is slimmer dan de hond. (Niet tegen de hond zeggen.)'],
])}
<h2>De overtreffende trap</h2>
${exs([
  ['C\'est le plus beau jour de ma vie !', 'Dit is de mooiste dag van mijn leven!'],
  ['C\'est la plus petite maison du village.', 'Dat is het kleinste huis van het dorp.'],
])}
<h2>Onregelmatig: bon en bien</h2>
${tbl(['', 'vergrotend', 'overtreffend'], [
  ['bon (goed, bijv. nw.)', 'meilleur', 'le meilleur'],
  ['bien (goed, bijwoord)', 'mieux', 'le mieux'],
  ['mauvais (slecht)', 'pire / plus mauvais', 'le pire'],
], [0, 1, 2])}
${exs([
  ['Ta tarte est meilleure que la mienne.', 'Jouw taart is lekkerder dan de mijne.'],
  ['Mamie fait la meilleure soupe du monde.', 'Oma maakt de lekkerste soep van de wereld.'],
  ['Ça va mieux ?', 'Gaat het beter?'],
  ['C\'est le pire film de l\'année !', 'Dat is de slechtste film van het jaar!'],
])}
${warn(`Nooit "plus bon" zeggen! Altijd ${f('meilleur')}. En "plus bien" bestaat ook niet: ${f('mieux')}.`)}
<h2>Met hoeveelheden</h2>
${exs([['J\'ai plus de cousins que toi.', 'Ik heb meer neven dan jij.'], ['Il y a moins de monde aujourd\'hui.', 'Er zijn vandaag minder mensen.']])}
`,
  vocab: [['plus … que', 'meer … dan'], ['moins … que', 'minder … dan'], ['aussi … que', 'even … als'], ['meilleur', 'beter (bijv. nw.)'], ['mieux', 'beter (bijwoord)'], ['le pire', 'het ergste'], ['âgé', 'oud (persoon)'], ['cher', 'duur / lief'], ['le monde', 'de wereld / de mensen']],
  exercises: [
    { type: 'mc', s: 'Paul est ___ grand que Marc.', options: ['plus', 'aussi', 'le plus', 'meilleur'] },
    { type: 'mc', s: 'Ta soupe est ___ que la mienne !', q: 'lekkerder', options: ['meilleure', 'plus bonne', 'mieux', 'plus meilleure'] },
    { type: 'mc', s: 'Ça va ___ aujourd\'hui ?', q: 'beter', options: ['mieux', 'meilleur', 'plus bien', 'bon'] },
    { type: 'mc', s: 'C\'est ___ film de l\'année !', q: 'de slechtste', options: ['le pire', 'le plus bon', 'le mieux', 'pire'] },
    { type: 'fill', s: 'Elle est ___ drôle que sa mère. (even)', answer: 'aussi' },
    { type: 'fill', s: 'C\'est ___ cher que ça. (minder)', answer: 'moins' },
    { type: 'translate', nl: 'Mijn broer is ouder dan ik.', answer: ['Mon frère est plus âgé que moi.', 'Mon frère est plus vieux que moi.'] },
    { type: 'translate', nl: 'Dit is de mooiste dag van mijn leven!', answer: ['C\'est le plus beau jour de ma vie !'] },
    { type: 'order', nl: 'Oma maakt de lekkerste soep van de wereld.', fr: 'Mamie fait la meilleure soupe du monde.' },
    { type: 'listen', fr: 'Le chat est plus intelligent que le chien.', options: ['De kat is slimmer dan de hond.', 'De hond is slimmer dan de kat.', 'De kat is even slim als de hond.', 'De kat is de slimste.'] },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-imperatief', unit: 'A2', emoji: '📢', title: 'De gebiedende wijs', sub: 'Viens ! Mangez ! Allons-y !',
  theory: `
<h2>Opdrachten geven</h2>
<p>Gewoon de <b>tu</b>-, <b>nous</b>- of <b>vous</b>-vorm zonder voornaamwoord:</p>
${tbl(['', 'tu', 'nous (laten we…)', 'vous'], [
  ['regarder', 'Regarde !', 'Regardons !', 'Regardez !'],
  ['finir', 'Finis !', 'Finissons !', 'Finissez !'],
  ['venir', 'Viens !', 'Venons !', 'Venez !'],
  ['attendre', 'Attends !', 'Attendons !', 'Attendez !'],
], [1, 2, 3])}
${warn(`Bij <b>-er</b> werkwoorden valt de <b>-s</b> weg bij <i>tu</i>: ${f('tu manges')} → ${f('Mange !')} En ook: ${f('tu vas')} → ${f('Va !')}`)}
<h2>Onregelmatig</h2>
${tbl(['', 'tu', 'nous', 'vous'], [
  ['être', 'Sois sage !', 'Soyons…', 'Soyez…'],
  ['avoir', 'Aie…', 'Ayons…', 'Ayez…'],
  ['savoir', 'Sache…', 'Sachons…', 'Sachez…'],
], [1, 2, 3])}
<h2>Met wederkerende werkwoorden</h2>
${exs([
  ['Dépêche-toi !', 'Schiet op!'],
  ['Assieds-toi. / Asseyez-vous.', 'Ga zitten.'],
  ['Ne t\'inquiète pas !', 'Maak je geen zorgen!'],
  ['Amusez-vous bien !', 'Veel plezier!'],
])}
<h2>Wat je de hele dag hoort in een Franse familie</h2>
${exs([
  ['À table !', 'Aan tafel! (eten is klaar)'],
  ['Viens voir !', 'Kom eens kijken!'],
  ['Attends une seconde !', 'Wacht even!'],
  ['Arrête !', 'Stop! / Hou op!'],
  ['Sois sage !', 'Wees lief! (tegen kinderen)'],
  ['Va te brosser les dents !', 'Ga je tanden poetsen!'],
  ['Servez-vous !', 'Schep maar op!'],
  ['Allons-y !', 'Laten we gaan!'],
  ['Écoute-moi !', 'Luister naar me!'],
  ['Regarde-moi ça !', 'Moet je dát nou zien!'],
])}
`,
  vocab: [['À table !', 'Aan tafel!'], ['Viens voir !', 'Kom eens kijken!'], ['Attends !', 'Wacht!'], ['Arrête !', 'Hou op!'], ['Sois sage !', 'Wees lief!'], ['Servez-vous !', 'Schep maar op!'], ['Ne t\'inquiète pas !', 'Maak je geen zorgen!'], ['Amusez-vous bien !', 'Veel plezier!'], ['Allons-y !', 'Laten we gaan!']],
  exercises: [
    { type: 'mc', q: 'Gebiedende wijs van <b>tu manges</b>:', options: ['Mange !', 'Manges !', 'Mangez !', 'Manger !'] },
    { type: 'mc', q: 'Gebiedende wijs van <b>tu vas</b>:', options: ['Va !', 'Vas !', 'Allez !', 'Aller !'] },
    { type: 'mc', q: 'Tegen een kind: "Wees lief!"', options: ['Sois sage !', 'Es sage !', 'Être sage !', 'Soyez sages !'] },
    { type: 'fill', s: '___ ! On est en retard ! (se dépêcher, tu)', answer: ['Dépêche-toi', 'dépêche-toi'] },
    { type: 'fill', s: '___-vous, s\'il vous plaît. (s\'asseoir)', answer: ['Asseyez', 'asseyez'] },
    { type: 'match', pairs: [['À table !', 'Aan tafel!'], ['Arrête !', 'Hou op!'], ['Viens voir !', 'Kom eens kijken!'], ['Servez-vous !', 'Schep maar op!'], ['Attends !', 'Wacht!']] },
    { type: 'translate', nl: 'Maak je geen zorgen!', answer: ['Ne t\'inquiète pas !', 'T\'inquiète pas !', 'Ne vous inquiétez pas !', 'T\'inquiète !'] },
    { type: 'translate', nl: 'Veel plezier!', answer: ['Amusez-vous bien !', 'Amuse-toi bien !', 'Bon amusement !'] },
    { type: 'listen', fr: 'Les enfants, à table ! Et lavez-vous les mains !', options: ['Kinderen, aan tafel! En was jullie handen!', 'Kinderen, dek de tafel! En was af!', 'Kinderen, onder de tafel vandaan!', 'Kinderen, ga spelen en was je handen!'] },
    { type: 'speak', fr: 'Venez, on va manger ! Servez-vous !', nl: 'Kom, we gaan eten! Schep maar op!' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a2-negatie-plus', unit: 'A2', emoji: '🗓️', title: 'Tijd, frequentie en volgorde', sub: 'depuis, pendant, il y a',
  theory: `
<h2>Depuis — sinds / al</h2>
<p>Iets dat nog steeds bezig is: Frans gebruikt de <b>tegenwoordige tijd</b>!</p>
${exs([
  ['J\'apprends le français depuis trois mois.', 'Ik leer al drie maanden Frans.'],
  ['On se connaît depuis l\'école.', 'We kennen elkaar al sinds school.'],
  ['Depuis quand tu habites ici ?', 'Sinds wanneer woon je hier?'],
])}
<h2>Il y a — geleden</h2>
${exs([['Je suis arrivé il y a deux heures.', 'Ik ben twee uur geleden aangekomen.'], ['Ils se sont mariés il y a dix ans.', 'Ze zijn tien jaar geleden getrouwd.']])}
<h2>Pendant — gedurende / tijdens</h2>
${exs([['J\'ai dormi pendant tout le film.', 'Ik heb de hele film geslapen.'], ['Pendant les vacances, on va en Provence.', 'Tijdens de vakantie gaan we naar de Provence.']])}
<h2>Dans — over (toekomst)</h2>
${exs([['Le dîner est prêt dans dix minutes.', 'Het eten is over tien minuten klaar.'], ['On part dans une semaine.', 'We vertrekken over een week.']])}
<h2>Hoe vaak?</h2>
${tbl(['Frans', 'Nederlands'], [
  ['toujours', 'altijd'], ['souvent', 'vaak'], ['parfois / quelquefois', 'soms'], ['rarement', 'zelden'],
  ['ne … jamais', 'nooit'], ['tous les jours', 'elke dag'], ['une fois par semaine', 'één keer per week'], ['de temps en temps', 'af en toe'],
], [0])}
<h2>Een verhaal vertellen</h2>
${tbl(['Frans', 'Nederlands'], [['d\'abord', 'eerst'], ['ensuite / puis', 'daarna / toen'], ['après', 'daarna / na'], ['finalement / enfin', 'uiteindelijk'], ['avant de + inf.', 'voordat'], ['après avoir + deelw.', 'nadat'], ['tout à coup', 'opeens']], [0])}
${exs([['D\'abord, on a mangé. Ensuite, on a joué aux cartes. Finalement, tonton s\'est endormi sur le canapé.', 'Eerst hebben we gegeten. Daarna hebben we gekaart. Uiteindelijk viel ome in slaap op de bank.']])}
`,
  vocab: [['depuis', 'sinds / al'], ['il y a', 'geleden'], ['pendant', 'tijdens / gedurende'], ['dans dix minutes', 'over tien minuten'], ['parfois', 'soms'], ['rarement', 'zelden'], ['de temps en temps', 'af en toe'], ['une fois par semaine', 'één keer per week'], ['d\'abord', 'eerst'], ['ensuite', 'daarna'], ['finalement', 'uiteindelijk'], ['tonton', 'ome (kindertaal)'], ['tata', 'tante (kindertaal)']],
  exercises: [
    { type: 'mc', s: 'J\'apprends le français ___ trois mois.', q: 'Ik leer al drie maanden Frans.', options: ['depuis', 'il y a', 'pendant', 'dans'] },
    { type: 'mc', s: 'Je suis arrivé ___ deux heures.', q: 'twee uur geleden', options: ['il y a', 'depuis', 'dans', 'pendant'] },
    { type: 'mc', s: 'On part ___ une semaine.', q: 'over een week', options: ['dans', 'il y a', 'depuis', 'pendant'] },
    { type: 'mc', s: 'J\'ai dormi ___ tout le film.', options: ['pendant', 'depuis', 'il y a', 'dans'] },
    { type: 'mc', q: 'Hoe zeg je "Ik woon hier al 5 jaar"?', options: ['J\'habite ici depuis cinq ans.', 'J\'ai habité ici depuis cinq ans.', 'J\'habite ici il y a cinq ans.', 'J\'habite ici pendant cinq ans.'] },
    { type: 'match', pairs: [['souvent', 'vaak'], ['parfois', 'soms'], ['rarement', 'zelden'], ['d\'abord', 'eerst'], ['ensuite', 'daarna']] },
    { type: 'translate', nl: 'Het eten is over tien minuten klaar.', answer: ['Le dîner est prêt dans dix minutes.', 'Le repas est prêt dans dix minutes.', 'C\'est prêt dans dix minutes.', 'Le dîner sera prêt dans dix minutes.'] },
    { type: 'translate', nl: 'Sinds wanneer woon je hier?', answer: ['Depuis quand tu habites ici ?', 'Depuis quand est-ce que tu habites ici ?', 'Depuis quand habites-tu ici ?', 'Depuis quand vous habitez ici ?'] },
    { type: 'listen', fr: 'Finalement, tonton s\'est endormi sur le canapé.', options: ['Uiteindelijk viel ome in slaap op de bank.', 'Ome zit altijd op de bank.', 'Eerst ging ome naar bed.', 'Tante viel in slaap op de bank.'] },
    { type: 'speak', fr: 'J\'apprends le français depuis quelques mois.', nl: 'Ik leer sinds een paar maanden Frans.' },
  ],
},
];
