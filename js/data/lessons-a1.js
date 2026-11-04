import { ex, exs, tbl, tip, warn, f, conj } from './helpers.js';

export default [
// ─────────────────────────────────────────────
{
  id: 'a1-groeten', unit: 'A1', emoji: '👋', title: 'Begroeten & beleefd zijn', sub: 'Bonjour, ça va ?',
  theory: `
<h2>Hallo zeggen</h2>
<p>In Frankrijk zeg je bijna altijd ${f('Bonjour')} als je ergens binnenkomt: in de bakkerij, bij de buren, bij familie. Zonder <i>bonjour</i> beginnen vinden Fransen echt onbeleefd!</p>
${exs([
  ['Bonjour !', 'Goedendag / hallo (overdag)'],
  ['Bonsoir !', 'Goedenavond (vanaf ± 18 uur)'],
  ['Salut !', 'Hoi / doei (informeel, vrienden en familie)'],
  ['Coucou !', 'Hoihoi! (heel informeel, lief, voor familie)'],
  ['Au revoir !', 'Tot ziens'],
  ['À bientôt !', 'Tot snel'],
  ['À demain !', 'Tot morgen'],
  ['Bonne nuit !', 'Welterusten'],
])}
<h2>Hoe gaat het?</h2>
${exs([
  ['Comment allez-vous ?', 'Hoe gaat het met u? (beleefd)'],
  ['Ça va ?', 'Gaat het? / Hoe is het? (informeel)'],
  ['Ça va bien, merci. Et toi ?', 'Goed, dank je. En met jou?'],
  ['Très bien !', 'Heel goed!'],
  ['Comme ci, comme ça.', 'Zozo.'],
  ['Pas mal.', 'Niet slecht.'],
])}
${tip(`Bij familie geef je meestal <b>la bise</b>: kusjes op de wang. Hoeveel? Dat verschilt per regio (2 in Parijs, soms 3 of zelfs 4 in het zuiden). Volg gewoon de ander!`)}
<h2>Beleefdheidswoorden</h2>
${tbl(['Frans', 'Nederlands'], [
  ['s\'il te plaît', 'alsjeblieft (tegen jij)'],
  ['s\'il vous plaît', 'alstublieft (tegen u / jullie)'],
  ['merci (beaucoup)', 'dank je (wel)'],
  ['de rien', 'graag gedaan'],
  ['pardon / excusez-moi', 'sorry / pardon'],
  ['oui / non', 'ja / nee'],
], [0])}
<h2>Jezelf voorstellen</h2>
${exs([
  ['Je m\'appelle Joris.', 'Ik heet Joris.'],
  ['Comment tu t\'appelles ?', 'Hoe heet jij?'],
  ['Enchanté !', 'Aangenaam! (een vrouw schrijft: enchantée)'],
  ['Je suis néerlandais.', 'Ik ben Nederlands. (vrouw: néerlandaise)'],
])}
<h2>Uitspraak: de belangrijkste regels</h2>
${tbl(['Regel', 'Voorbeeld'], [
  ['De laatste medeklinker spreek je meestal <b>niet</b> uit (behalve vaak c, r, f, l)', '<span class="fr">petit, grand, vous, Paris</span>'],
  ['<b>ou</b> klinkt als oe', '<span class="fr">vous, nous, bonjour</span>'],
  ['<b>u</b> klinkt als de Nederlandse u', '<span class="fr">tu, salut</span>'],
  ['<b>oi</b> klinkt als wa', '<span class="fr">moi, toi, au revoir</span>'],
  ['<b>au / eau</b> klinkt als oo', '<span class="fr">au, beau, gâteau</span>'],
  ['<b>ch</b> klinkt als sj', '<span class="fr">chat, chocolat</span>'],
  ['<b>h</b> zeg je nooit', '<span class="fr">hôtel, homme</span>'],
  ['<b>on / an / en / in</b> zijn neusklanken', '<span class="fr">bonjour, maman, enfant, vin</span>'],
  ['<b>é</b> = ee, <b>è / ê</b> = è (als in "pet")', '<span class="fr">café, mère, fête</span>'],
  ['<b>gn</b> klinkt als nj', '<span class="fr">champagne, montagne</span>'],
])}
${tip(`Druk op 🔊 bij elk voorbeeld om het te horen. Je kunt de spreeksnelheid aanpassen in je profiel.`)}
`,
  vocab: [['bonjour', 'goedendag'], ['bonsoir', 'goedenavond'], ['salut', 'hoi / doei'], ['au revoir', 'tot ziens'], ['à bientôt', 'tot snel'], ['merci', 'dank je'], ['de rien', 'graag gedaan'], ['s\'il te plaît', 'alsjeblieft'], ['s\'il vous plaît', 'alstublieft'], ['pardon', 'sorry / pardon'], ['enchanté', 'aangenaam'], ['ça va ?', 'hoe gaat het?']],
  exercises: [
    { type: 'mc', q: 'Je stapt \'s ochtends een bakkerij binnen. Wat zeg je?', options: ['Bonjour !', 'Bonne nuit !', 'Salut, mec !', 'Au revoir !'] },
    { type: 'mc', q: 'Wat betekent <b>À bientôt</b>?', options: ['Tot snel', 'Goedemorgen', 'Dank je wel', 'Hoe gaat het?'] },
    { type: 'listen', fr: 'Comment allez-vous ?', options: ['Hoe gaat het met u?', 'Hoe heet u?', 'Waar woont u?', 'Hoe laat is het?'] },
    { type: 'match', pairs: [['merci', 'dank je'], ['de rien', 'graag gedaan'], ['pardon', 'sorry'], ['oui', 'ja'], ['bonsoir', 'goedenavond']] },
    { type: 'mc', q: 'Tegen je schoonmoeder die je voor het eerst ontmoet zeg je "alstublieft" als:', options: ['s\'il vous plaît', 's\'il te plaît', 'salut', 'de rien'] },
    { type: 'order', nl: 'Ik heet Joris.', fr: 'Je m\'appelle Joris.' },
    { type: 'translate', nl: 'Goed, dank je. En met jou?', answer: ['Ça va bien, merci. Et toi ?', 'Bien, merci. Et toi ?', 'Ça va, merci. Et toi ?', 'Très bien, merci. Et toi ?', 'Ça va bien merci et toi'] },
    { type: 'mc', q: 'Hoe spreek je <b>oi</b> uit, zoals in <i>moi</i>?', options: ['wa', 'oj', 'oo', 'oi'], noSay: true },
    { type: 'fill', s: 'Comment tu t\'___ ?', answer: 'appelles', hint: 'Hoe heet jij?' },
    { type: 'dictee', fr: 'Bonne nuit !', nl: 'Welterusten!' },
    { type: 'speak', fr: 'Bonjour, je m\'appelle Joris. Enchanté !', nl: 'Hallo, ik heet Joris. Aangenaam!' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-lidwoorden', unit: 'A1', emoji: '📦', title: 'Lidwoorden & mannelijk/vrouwelijk', sub: 'le, la, les, un, une, des',
  theory: `
<h2>Alles is mannelijk of vrouwelijk</h2>
<p>In het Frans heeft elk zelfstandig naamwoord een geslacht: <b>mannelijk</b> of <b>vrouwelijk</b>. Er is geen "het". Een tafel is vrouwelijk (${f('la table')}), een boek mannelijk (${f('le livre')}). Leer daarom elk woord <b>mét</b> lidwoord!</p>
<h2>Bepaald lidwoord (de/het)</h2>
${tbl(['', 'Frans', 'Voorbeeld'], [
  ['mannelijk', 'le', 'le chat — de kat'],
  ['vrouwelijk', 'la', 'la maison — het huis'],
  ['voor klinker of stomme h', 'l\'', 'l\'enfant, l\'hôtel'],
  ['meervoud (m + v)', 'les', 'les chats, les maisons'],
], [1])}
<h2>Onbepaald lidwoord (een)</h2>
${tbl(['', 'Frans', 'Voorbeeld'], [
  ['mannelijk', 'un', 'un chien — een hond'],
  ['vrouwelijk', 'une', 'une pomme — een appel'],
  ['meervoud', 'des', 'des pommes — (een paar) appels'],
], [1])}
${tip(`Nederlands zegt "appels", Frans zegt ${f('des pommes')}. Het meervoud heeft in het Frans bijna altijd een lidwoord nodig.`)}
<h2>Meervoud maken</h2>
<p>Meestal plak je er een <b>-s</b> achter, die je <b>niet</b> uitspreekt. Je hoort het meervoud dus aan het lidwoord: <i>le chat</i> vs. <i>les chats</i>.</p>
${exs([['le chat → les chats', 'de kat → de katten'], ['un gâteau → des gâteaux', 'een taart → taarten (-eau wordt -eaux)'], ['un journal → des journaux', 'een krant → kranten (-al wordt -aux)']])}
<h2>Trucjes voor het geslacht</h2>
${tbl(['Meestal vrouwelijk', 'Meestal mannelijk'], [
  ['-tion (la question)', '-ment (le moment)'],
  ['-té (la liberté)', '-age (le fromage) — maar: la plage!'],
  ['-ette (la baguette)', '-eau (le gâteau) — maar: l\'eau (v)!'],
  ['-ure (la voiture)', '-isme (le tourisme)'],
  ['-ie (la boulangerie)', '-er/-ier (le boucher, le cahier)'],
])}
${warn(`Pas op voor valse vrienden: ${f('la mer')} (de zee) maar ${f('le mur')} (de muur). En ${f('le livre')} = het boek, maar ${f('la livre')} = het pond!`)}
`,
  vocab: [['le chat', 'de kat'], ['le chien', 'de hond'], ['la maison', 'het huis'], ['l\'enfant', 'het kind'], ['la pomme', 'de appel'], ['le livre', 'het boek'], ['la table', 'de tafel'], ['le gâteau', 'de taart'], ['la voiture', 'de auto'], ['le fromage', 'de kaas'], ['la plage', 'het strand'], ['l\'eau', 'het water (v)']],
  exercises: [
    { type: 'mc', s: '___ maison est grande.', q: 'Kies het lidwoord (maison is vrouwelijk).', options: ['La', 'Le', 'Les', 'L\''] },
    { type: 'mc', s: 'J\'ai ___ chien.', q: '"Ik heb een hond" — chien is mannelijk.', options: ['un', 'une', 'des', 'la'] },
    { type: 'mc', s: '___ enfant joue.', options: ['L\'', 'Le', 'La', 'Un\''] },
    { type: 'fill', s: 'Il mange ___ pommes.', answer: 'des', hint: 'Hij eet appels (onbepaald, meervoud)' },
    { type: 'mc', q: 'Welk woord is waarschijnlijk vrouwelijk?', options: ['question', 'fromage', 'moment', 'gâteau'], noSay: true },
    { type: 'mc', q: 'Wat is het meervoud van <b>le gâteau</b>?', options: ['les gâteaux', 'les gâteaus', 'des gâteau', 'la gâteaux'] },
    { type: 'match', pairs: [['la voiture', 'de auto'], ['le livre', 'het boek'], ['la plage', 'het strand'], ['le fromage', 'de kaas'], ['l\'eau', 'het water']] },
    { type: 'translate', nl: 'de kat en de hond', answer: ['le chat et le chien'] },
    { type: 'translate', nl: 'een appel', answer: ['une pomme'] },
    { type: 'listen', fr: 'Les enfants mangent des gâteaux.', options: ['De kinderen eten taartjes.', 'Het kind eet een taart.', 'De katten eten kaas.', 'De kinderen maken taarten.'] },
    { type: 'order', nl: 'Het huis is mooi.', fr: 'La maison est belle.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-etre', unit: 'A1', emoji: '🙋', title: 'Être — zijn', sub: 'je suis, tu es, il est…',
  theory: `
<h2>Persoonlijke voornaamwoorden</h2>
${tbl(['Frans', 'Nederlands', 'Let op'], [
  ['je (j\')', 'ik', 'j\' voor een klinker: j\'ai'],
  ['tu', 'jij', 'informeel: familie, vrienden, kinderen'],
  ['il / elle', 'hij / zij', 'ook voor dingen: la table → elle'],
  ['on', 'men / wij', '<b>Heel veel gebruikt</b> in spreektaal voor "wij"!'],
  ['nous', 'wij', 'iets formeler / schrijftaal'],
  ['vous', 'jullie / u', 'meervoud óf beleefd enkelvoud'],
  ['ils / elles', 'zij (mv)', 'elles alleen als het allemaal vrouwen zijn'],
], [0])}
${tip(`<b>Tu of vous?</b> Tegen familie zeg je meestal <i>tu</i>. Tegen schoonouders die je net kent of oudere familieleden: begin met <i>vous</i> en wacht tot ze zeggen <span class="fr">"On peut se tutoyer !"</span> (we kunnen jij zeggen).`)}
<h2>Être (zijn)</h2>
${conj(['je suis', 'tu es', 'il / elle / on est', 'nous sommes', 'vous êtes', 'ils / elles sont'], ['ik ben', 'jij bent', 'hij / zij / men is', 'wij zijn', 'jullie zijn / u bent', 'zij zijn'])}
${exs([
  ['Je suis fatigué.', 'Ik ben moe.'],
  ['Tu es drôle !', 'Jij bent grappig!'],
  ['Elle est à la maison.', 'Zij is thuis.'],
  ['On est en vacances !', 'We zijn op vakantie!'],
  ['Vous êtes très gentils.', 'Jullie zijn heel aardig.'],
  ['Ils sont en retard.', 'Ze zijn te laat.'],
])}
<h2>Beroep zonder lidwoord</h2>
<p>Net als in het Nederlands: ${f('Je suis professeur.')} (Ik ben leraar.) Maar met ${f('c\'est')} gebruik je wél een lidwoord: ${f('C\'est un professeur.')}</p>
<h2>C'est — het is / dat is</h2>
${exs([['C\'est super !', 'Dat is super!'], ['C\'est mon frère.', 'Dat is mijn broer.'], ['Ce sont mes parents.', 'Dat zijn mijn ouders.']])}
`,
  vocab: [['fatigué', 'moe'], ['drôle', 'grappig'], ['content', 'blij / tevreden'], ['gentil', 'aardig'], ['en retard', 'te laat'], ['en vacances', 'op vakantie'], ['à la maison', 'thuis'], ['malade', 'ziek']],
  exercises: [
    { type: 'mc', s: 'Je ___ content.', options: ['suis', 'es', 'est', 'sommes'] },
    { type: 'mc', s: 'Nous ___ en vacances.', options: ['sommes', 'sont', 'êtes', 'est'] },
    { type: 'fill', s: 'Vous ___ très gentils.', answer: 'êtes', hint: 'être, vous' },
    { type: 'fill', s: 'Ils ___ en retard.', answer: 'sont' },
    { type: 'fill', s: 'Tu ___ drôle !', answer: 'es' },
    { type: 'mc', q: 'Je wil zeggen "We zijn thuis" op een ontspannen manier, zoals Fransen het echt zeggen:', options: ['On est à la maison.', 'On sommes à la maison.', 'Nous est à la maison.', 'On sont à la maison.'] },
    { type: 'mc', q: 'Je ontmoet de opa van je partner voor het eerst. Welk woord voor "u"?', options: ['vous', 'tu', 'on', 'il'], noSay: true },
    { type: 'translate', nl: 'Ik ben moe.', answer: ['Je suis fatigué.', 'Je suis fatiguée.'] },
    { type: 'translate', nl: 'Zij is ziek.', answer: ['Elle est malade.'] },
    { type: 'order', nl: 'Dat is mijn broer.', fr: 'C\'est mon frère.' },
    { type: 'listen', fr: 'Vous êtes en retard !', options: ['Jullie zijn te laat!', 'Wij zijn moe!', 'U bent op vakantie!', 'Zij zijn thuis!'] },
    { type: 'speak', fr: 'Je suis content d\'être ici.', nl: 'Ik ben blij om hier te zijn.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-avoir', unit: 'A1', emoji: '🎒', title: 'Avoir — hebben', sub: 'j\'ai faim, j\'ai 40 ans',
  theory: `
<h2>Avoir (hebben)</h2>
${conj(['j\'ai', 'tu as', 'il / elle / on a', 'nous avons', 'vous avez', 'ils / elles ont'], ['ik heb', 'jij hebt', 'hij / zij / men heeft', 'wij hebben', 'jullie hebben / u heeft', 'zij hebben'])}
${warn(`${f('ils ont')} (ze hebben, met z-klank: <i>ilz-on</i>) en ${f('ils sont')} (ze zijn, met s: <i>il-son</i>) klinken bijna hetzelfde. Luister goed!`)}
<h2>Avoir waar Nederlands "zijn" gebruikt</h2>
<p>Fransen <b>hebben</b> honger, dorst en een leeftijd:</p>
${tbl(['Frans', 'Nederlands'], [
  ['avoir faim', 'honger hebben'],
  ['avoir soif', 'dorst hebben'],
  ['avoir chaud / froid', 'het warm / koud hebben'],
  ['avoir sommeil', 'slaap hebben'],
  ['avoir peur (de)', 'bang zijn (voor)'],
  ['avoir raison / tort', 'gelijk / ongelijk hebben'],
  ['avoir … ans', '… jaar oud zijn'],
  ['avoir besoin de', 'nodig hebben'],
  ['avoir envie de', 'zin hebben in'],
], [0])}
${exs([
  ['J\'ai quarante ans.', 'Ik ben veertig (jaar).'],
  ['Tu as faim ?', 'Heb je honger?'],
  ['Le chat a peur de l\'aspirateur.', 'De kat is bang voor de stofzuiger.'],
  ['On a envie d\'une glace !', 'We hebben zin in een ijsje!'],
  ['Mamie a toujours raison.', 'Oma heeft altijd gelijk.'],
])}
<h2>Il y a — er is / er zijn</h2>
${exs([['Il y a un problème.', 'Er is een probleem.'], ['Il y a trois chats dans la cuisine !', 'Er zitten drie katten in de keuken!'], ['Qu\'est-ce qu\'il y a ?', 'Wat is er (aan de hand)?']])}
`,
  vocab: [['avoir faim', 'honger hebben'], ['avoir soif', 'dorst hebben'], ['avoir peur', 'bang zijn'], ['avoir raison', 'gelijk hebben'], ['avoir envie de', 'zin hebben in'], ['avoir besoin de', 'nodig hebben'], ['il y a', 'er is / er zijn'], ['avoir chaud', 'het warm hebben'], ['avoir froid', 'het koud hebben']],
  exercises: [
    { type: 'mc', s: 'J\'___ faim.', options: ['ai', 'as', 'a', 'suis'] },
    { type: 'mc', s: 'Nous ___ un chien.', options: ['avons', 'avez', 'ont', 'sommes'] },
    { type: 'fill', s: 'Vous ___ raison.', answer: 'avez' },
    { type: 'fill', s: 'Mes parents ___ une grande maison.', answer: 'ont' },
    { type: 'mc', q: 'Hoe zeg je "Ik ben 35 jaar"?', options: ['J\'ai trente-cinq ans.', 'Je suis trente-cinq ans.', 'J\'ai trente-cinq années.', 'Je suis trente-cinq.'] },
    { type: 'translate', nl: 'Heb je dorst?', answer: ['Tu as soif ?', 'As-tu soif ?', 'Est-ce que tu as soif ?', 'Vous avez soif ?'] },
    { type: 'translate', nl: 'Ik heb het koud.', answer: ['J\'ai froid.'] },
    { type: 'listen', fr: 'Ils ont peur du chien.', options: ['Ze zijn bang voor de hond.', 'Ze zijn de hond.', 'Ze hebben een hond.', 'De hond is bang.'] },
    { type: 'order', nl: 'Er is een probleem.', fr: 'Il y a un problème.' },
    { type: 'match', pairs: [['avoir faim', 'honger hebben'], ['avoir peur', 'bang zijn'], ['avoir sommeil', 'slaap hebben'], ['avoir tort', 'ongelijk hebben']] },
    { type: 'mc', q: 'Welke zin betekent "ze zijn"?', options: ['ils sont', 'ils ont', 'ils sons', 'ils on'], noSay: true },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-er', unit: 'A1', emoji: '⚙️', title: 'Regelmatige werkwoorden op -er', sub: 'parler, manger, aimer',
  theory: `
<h2>90% van de werkwoorden eindigt op -er</h2>
<p>Haal <b>-er</b> van het hele werkwoord af (<i>parl-er</i>) en plak de uitgang erachter:</p>
${tbl(['Persoon', 'Uitgang', 'parler (praten)'], [
  ['je', '-e', 'je parle'],
  ['tu', '-es', 'tu parles'],
  ['il / elle / on', '-e', 'il parle'],
  ['nous', '-ons', 'nous parlons'],
  ['vous', '-ez', 'vous parlez'],
  ['ils / elles', '-ent', 'ils parlent'],
], [2])}
${tip(`Goed nieuws: <i>parle, parles, parle, parlent</i> klinken <b>precies hetzelfde</b>! De -e, -es en -ent spreek je niet uit. In spraak hoef je dus maar 3 vormen te onthouden.`)}
<h2>Handige -er werkwoorden</h2>
${tbl(['Frans', 'Nederlands'], [
  ['parler', 'praten / spreken'], ['aimer', 'houden van / leuk vinden'], ['manger', 'eten'], ['habiter', 'wonen'],
  ['travailler', 'werken'], ['regarder', 'kijken (naar)'], ['écouter', 'luisteren (naar)'], ['chercher', 'zoeken'],
  ['trouver', 'vinden'], ['jouer', 'spelen'], ['cuisiner', 'koken'], ['adorer', 'dol zijn op'], ['détester', 'een hekel hebben aan'], ['penser', 'denken'],
], [0])}
${exs([
  ['Je parle un peu français.', 'Ik spreek een beetje Frans.'],
  ['Tu habites où ?', 'Waar woon jij?'],
  ['Mon oncle adore le fromage qui pue.', 'Mijn oom is dol op kaas die stinkt.'],
  ['Nous mangeons à huit heures.', 'We eten om acht uur.'],
  ['Les enfants regardent la télé.', 'De kinderen kijken tv.'],
])}
${warn(`Twee kleine uitzonderingen bij <b>nous</b>: ${f('nous mangeons')} (extra e, zodat de g zacht blijft) en ${f('nous commençons')} (ç, zodat de c als s klinkt).`)}
<h2>Aimer + lidwoord</h2>
<p>Na <i>aimer, adorer, détester</i> gebruik je het bepaald lidwoord: ${f('J\'aime le chocolat.')} (Ik hou van chocola.) — niet "j'aime chocolat".</p>
`,
  vocab: [['parler', 'praten'], ['aimer', 'houden van'], ['manger', 'eten'], ['habiter', 'wonen'], ['travailler', 'werken'], ['regarder', 'kijken'], ['écouter', 'luisteren'], ['chercher', 'zoeken'], ['trouver', 'vinden'], ['jouer', 'spelen'], ['cuisiner', 'koken'], ['adorer', 'dol zijn op'], ['détester', 'een hekel hebben aan'], ['penser', 'denken']],
  exercises: [
    { type: 'mc', s: 'Nous ___ français.', options: ['parlons', 'parlez', 'parlent', 'parle'] },
    { type: 'fill', s: 'Tu ___ où ?', answer: 'habites', hint: 'habiter' },
    { type: 'fill', s: 'Vous ___ beaucoup !', answer: 'travaillez', hint: 'travailler' },
    { type: 'fill', s: 'Les enfants ___ dans le jardin.', answer: 'jouent', hint: 'jouer' },
    { type: 'fill', s: 'Nous ___ à huit heures.', answer: 'mangeons', hint: 'manger — let op!' },
    { type: 'mc', q: 'Welke vormen klinken hetzelfde?', options: ['je parle, tu parles, ils parlent', 'nous parlons, vous parlez', 'tu parles, vous parlez', 'je parle, nous parlons'], noSay: true },
    { type: 'mc', s: 'J\'adore ___ chocolat.', options: ['le', 'un', 'du', '—'] },
    { type: 'translate', nl: 'Ik spreek een beetje Frans.', answer: ['Je parle un peu français.', 'Je parle un peu le français.'] },
    { type: 'translate', nl: 'Zij kijkt tv.', answer: ['Elle regarde la télé.', 'Elle regarde la télévision.'] },
    { type: 'order', nl: 'Mijn oom is dol op kaas.', fr: 'Mon oncle adore le fromage.' },
    { type: 'listen', fr: 'On cherche le chat depuis une heure !', options: ['We zoeken de kat al een uur!', 'De kat zoekt ons al een uur!', 'We hebben de kat gevonden!', 'We eten over een uur!'] },
    { type: 'speak', fr: 'J\'habite aux Pays-Bas et je parle un peu français.', nl: 'Ik woon in Nederland en ik spreek een beetje Frans.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-negatie', unit: 'A1', emoji: '🙅', title: 'Ontkennen', sub: 'ne… pas, ne… jamais',
  theory: `
<h2>Ne … pas = niet</h2>
<p>De ontkenning is een "sandwich" rond het werkwoord:</p>
${exs([
  ['Je ne parle pas allemand.', 'Ik spreek geen Duits.'],
  ['Il n\'aime pas les épinards.', 'Hij houdt niet van spinazie. (ne → n\' voor een klinker)'],
  ['Ce n\'est pas grave.', 'Het is niet erg.'],
])}
<h2>Andere ontkenningen</h2>
${tbl(['Frans', 'Nederlands', 'Voorbeeld'], [
  ['ne … jamais', 'nooit', 'Il ne cuisine jamais.'],
  ['ne … plus', 'niet meer', 'Je n\'ai plus faim.'],
  ['ne … rien', 'niets', 'Je ne comprends rien !'],
  ['ne … personne', 'niemand', 'Je ne vois personne.'],
  ['ne … pas encore', 'nog niet', 'Il n\'est pas encore là.'],
], [2])}
<h2>"Geen" = pas de</h2>
<p>Na een ontkenning worden <i>un, une, des, du, de la</i> gewoon <b>de</b> (of <b>d'</b>):</p>
${exs([
  ['J\'ai un chien. → Je n\'ai pas de chien.', 'Ik heb een hond. → Ik heb geen hond.'],
  ['Il y a du pain ? → Il n\'y a plus de pain.', 'Is er brood? → Er is geen brood meer.'],
])}
${tip(`<b>Spreektaal:</b> in gesprekken laten Fransen de <i>ne</i> heel vaak weg! ${f('Je sais pas.')} (Weet ik niet.) ${f('C\'est pas grave.')} ${f('J\'aime pas ça.')} Je hoort het overal in de familie. Schrijf het wel netjes met <i>ne</i>.`)}
`,
  vocab: [['jamais', 'nooit'], ['rien', 'niets'], ['personne', 'niemand'], ['plus', 'niet meer (ne… plus)'], ['pas encore', 'nog niet'], ['ce n\'est pas grave', 'het is niet erg'], ['je ne sais pas', 'ik weet het niet'], ['comprendre', 'begrijpen']],
  exercises: [
    { type: 'order', nl: 'Ik spreek geen Duits.', fr: 'Je ne parle pas allemand.' },
    { type: 'mc', s: 'Il ___ aime pas les épinards.', options: ['n\'', 'ne', 'pas', 'non'] },
    { type: 'mc', q: 'Maak ontkennend: <i>J\'ai un chat.</i>', options: ['Je n\'ai pas de chat.', 'Je n\'ai pas un chat.', 'Je ai ne pas chat.', 'Je n\'ai pas chat.'] },
    { type: 'fill', s: 'Je n\'ai ___ faim. (niet meer)', answer: 'plus' },
    { type: 'fill', s: 'Il ne cuisine ___ . (nooit)', answer: 'jamais' },
    { type: 'fill', s: 'Je ne comprends ___ ! (niets)', answer: 'rien' },
    { type: 'translate', nl: 'Het is niet erg.', answer: ['Ce n\'est pas grave.', 'C\'est pas grave.'] },
    { type: 'translate', nl: 'Ik heb geen auto.', answer: ['Je n\'ai pas de voiture.', 'J\'ai pas de voiture.'] },
    { type: 'listen', fr: 'Je sais pas, moi !', options: ['Weet ik veel!', 'Ik ben het niet!', 'Ik wil niet!', 'Ik ga niet!'] },
    { type: 'mc', q: 'Wat hoor je vaak in spreektaal in plaats van <i>Je ne sais pas</i>?', options: ['Je sais pas.', 'Je ne sais.', 'Ne sais pas.', 'Pas je sais.'], noSay: true },
    { type: 'speak', fr: 'Désolé, je ne comprends pas.', nl: 'Sorry, ik begrijp het niet.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-vragen', unit: 'A1', emoji: '❓', title: 'Vragen stellen', sub: 'est-ce que, où, quand, pourquoi',
  theory: `
<h2>Drie manieren om een ja/nee-vraag te stellen</h2>
${tbl(['Manier', 'Voorbeeld', 'Gebruik'], [
  ['1. Intonatie (stem omhoog)', 'Tu as faim ?', '⭐ meest gebruikt in gesprekken'],
  ['2. Est-ce que + zin', 'Est-ce que tu as faim ?', 'neutraal, altijd goed'],
  ['3. Omkeren (inversie)', 'As-tu faim ?', 'formeel / geschreven'],
], [1])}
${tip(`Begin met manier 1 en 2. Met <i>est-ce que</i> kun je nooit iets fout doen! Spreek uit als "eske".`)}
<h2>Vraagwoorden</h2>
${tbl(['Frans', 'Nederlands', 'Voorbeeld'], [
  ['qui', 'wie', 'Qui est-ce ?'],
  ['quoi / qu\'est-ce que', 'wat', 'Qu\'est-ce que tu fais ?'],
  ['où', 'waar', 'Tu habites où ?'],
  ['quand', 'wanneer', 'Quand est-ce que vous arrivez ?'],
  ['comment', 'hoe', 'Comment ça va ?'],
  ['pourquoi', 'waarom', 'Pourquoi tu ris ?'],
  ['combien (de)', 'hoeveel', 'Combien ça coûte ?'],
  ['quel / quelle', 'welk(e)', 'Quelle heure est-il ?'],
], [2])}
<h2>Twee stijlen</h2>
${exs([
  ['Où est-ce que tu habites ?', 'Waar woon je? (netjes)'],
  ['Tu habites où ?', 'Waar woon je? (spreektaal: vraagwoord achteraan)'],
  ['Qu\'est-ce que tu manges ?', 'Wat eet je?'],
  ['Tu manges quoi ?', 'Wat eet je? (spreektaal)'],
])}
<h2>Pourquoi? Parce que!</h2>
${exs([['Pourquoi tu ris ? — Parce que le chien porte tes chaussettes !', 'Waarom lach je? — Omdat de hond jouw sokken draagt!']])}
`,
  vocab: [['qui', 'wie'], ['quoi', 'wat'], ['où', 'waar'], ['quand', 'wanneer'], ['comment', 'hoe'], ['pourquoi', 'waarom'], ['parce que', 'omdat'], ['combien', 'hoeveel'], ['quel / quelle', 'welk(e)'], ['est-ce que', '(vraagpartikel)']],
  exercises: [
    { type: 'match', pairs: [['où', 'waar'], ['quand', 'wanneer'], ['pourquoi', 'waarom'], ['qui', 'wie'], ['combien', 'hoeveel']] },
    { type: 'mc', s: '___ tu habites ? — À Utrecht.', options: ['Où', 'Quand', 'Qui', 'Pourquoi'] },
    { type: 'mc', s: '___ ça coûte ? — Cinq euros.', options: ['Combien', 'Comment', 'Où', 'Quel'] },
    { type: 'mc', s: '___ est-ce ? — C\'est ma tante.', options: ['Qui', 'Quoi', 'Où', 'Quand'] },
    { type: 'fill', s: '___ que tu as faim ?', answer: ['Est-ce', 'est-ce'], hint: 'het vraagpartikel' },
    { type: 'order', nl: 'Wat eet je?', fr: 'Qu\'est-ce que tu manges ?' },
    { type: 'translate', nl: 'Waarom lach je?', answer: ['Pourquoi tu ris ?', 'Pourquoi est-ce que tu ris ?', 'Pourquoi ris-tu ?'] },
    { type: 'translate', nl: 'Hoe gaat het?', answer: ['Comment ça va ?', 'Ça va ?', 'Comment allez-vous ?', 'Comment vas-tu ?'] },
    { type: 'listen', fr: 'Quand est-ce que vous arrivez ?', options: ['Wanneer komen jullie aan?', 'Waar komen jullie vandaan?', 'Hoe komen jullie?', 'Waarom komen jullie?'] },
    { type: 'mc', q: 'Welke vraag is het meest formeel?', options: ['Avez-vous faim ?', 'Vous avez faim ?', 'Est-ce que vous avez faim ?', 'Faim ?'], noSay: true },
    { type: 'speak', fr: 'Qu\'est-ce que tu fais ce week-end ?', nl: 'Wat doe je dit weekend?' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-bijv', unit: 'A1', emoji: '🎨', title: 'Bijvoeglijke naamwoorden', sub: 'petit, petite, petits',
  theory: `
<h2>Het bijvoeglijk naamwoord past zich aan</h2>
<p>Een bijvoeglijk naamwoord krijgt hetzelfde geslacht en getal als het woord waar het bij hoort:</p>
${tbl(['', 'enkelvoud', 'meervoud'], [
  ['mannelijk', 'un chat noir', 'des chats noirs'],
  ['vrouwelijk', 'une voiture noire', 'des voitures noires'],
], [1, 2])}
<h2>Vrouwelijke vormen</h2>
${tbl(['Regel', 'Mannelijk → Vrouwelijk'], [
  ['+ e', 'grand → grande, petit → petite'],
  ['eindigt al op -e: blijft gelijk', 'jeune → jeune, drôle → drôle'],
  ['-eux → -euse', 'heureux → heureuse, délicieux → délicieuse'],
  ['-if → -ive', 'sportif → sportive'],
  ['-en → -enne', 'italien → italienne'],
  ['-er → -ère', 'cher → chère'],
])}
${tip(`Hoor je het verschil? ${f('petit')} (zonder t) vs. ${f('petite')} (mét t). De -e zorgt dat je de medeklinker ervóór wél uitspreekt.`)}
<h2>Waar staat het bijvoeglijk naamwoord?</h2>
<p>Meestal <b>achter</b> het zelfstandig naamwoord: ${f('un pull rouge')} (een rode trui), ${f('un film drôle')}.</p>
<p>Maar een paar korte, veelgebruikte woorden staan <b>ervoor</b>. Onthoud ze met <b>BAGS</b>:</p>
${tbl(['', 'Betekenis', 'Voorbeelden'], [
  ['<b>B</b>eauty', 'mooi', 'beau, joli'],
  ['<b>A</b>ge', 'leeftijd', 'jeune, vieux, nouveau'],
  ['<b>G</b>oodness', 'goed/slecht', 'bon, mauvais, gentil'],
  ['<b>S</b>ize', 'grootte', 'grand, petit, gros'],
])}
${exs([['une jolie maison', 'een mooi huis'], ['un petit chien', 'een klein hondje'], ['une bonne idée', 'een goed idee']])}
<h2>Onregelmatig: beau, nouveau, vieux</h2>
${tbl(['mannelijk', 'm. voor klinker', 'vrouwelijk'], [
  ['beau', 'bel (un bel homme)', 'belle'],
  ['nouveau', 'nouvel', 'nouvelle'],
  ['vieux', 'vieil', 'vieille'],
], [0, 1, 2])}
`,
  vocab: [['grand', 'groot'], ['petit', 'klein'], ['beau / belle', 'mooi'], ['jeune', 'jong'], ['vieux / vieille', 'oud'], ['nouveau / nouvelle', 'nieuw'], ['bon / bonne', 'goed / lekker'], ['mauvais', 'slecht'], ['heureux / heureuse', 'gelukkig'], ['délicieux', 'heerlijk'], ['rouge', 'rood'], ['noir', 'zwart'], ['blanc / blanche', 'wit'], ['vert', 'groen'], ['bleu', 'blauw']],
  exercises: [
    { type: 'mc', s: 'une voiture ___', q: 'een zwarte auto', options: ['noire', 'noir', 'noirs', 'noires'] },
    { type: 'mc', s: 'des chats ___', q: 'grappige katten', options: ['drôles', 'drôle', 'drôlees', 'drôlent'] },
    { type: 'mc', q: 'Welke volgorde klopt?', options: ['un petit chien', 'un chien petit', 'petit un chien', 'un chien petite'] },
    { type: 'mc', q: 'Welke volgorde klopt?', options: ['un pull rouge', 'un rouge pull', 'une pull rouge', 'un pull rouges'] },
    { type: 'fill', s: 'Ma grand-mère est très ___ . (gelukkig)', answer: 'heureuse', hint: 'heureux → vrouwelijk' },
    { type: 'fill', s: 'C\'est une ___ idée ! (goed)', answer: 'bonne' },
    { type: 'mc', s: 'un ___ homme', q: 'een mooie man (homme begint met een stomme h)', options: ['bel', 'beau', 'belle', 'beaux'] },
    { type: 'translate', nl: 'een mooi huis', answer: ['une jolie maison', 'une belle maison'] },
    { type: 'translate', nl: 'Het eten is heerlijk!', answer: ['Le repas est délicieux !', 'C\'est délicieux !', 'La nourriture est délicieuse !', 'Le dîner est délicieux !'] },
    { type: 'order', nl: 'Mijn tante heeft een oude rode auto.', fr: 'Ma tante a une vieille voiture rouge.' },
    { type: 'listen', fr: 'Il a un petit chien blanc.', options: ['Hij heeft een klein wit hondje.', 'Hij heeft een grote witte hond.', 'Hij is een kleine witte hond.', 'Hij heeft een klein zwart hondje.'] },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-bezit', unit: 'A1', emoji: '👨‍👩‍👧', title: 'Mijn familie: bezittelijke voornaamwoorden', sub: 'mon père, ma mère, mes enfants',
  theory: `
<h2>Mijn, jouw, zijn…</h2>
<p>Het bezittelijk voornaamwoord past zich aan aan het <b>bezit</b>, niet aan de bezitter!</p>
${tbl(['', 'mannelijk', 'vrouwelijk', 'meervoud'], [
  ['mijn', 'mon', 'ma', 'mes'],
  ['jouw', 'ton', 'ta', 'tes'],
  ['zijn / haar', 'son', 'sa', 'ses'],
  ['ons / onze', 'notre', 'notre', 'nos'],
  ['jullie / uw', 'votre', 'votre', 'vos'],
  ['hun', 'leur', 'leur', 'leurs'],
], [1, 2, 3])}
${warn(`${f('sa mère')} kan dus zowel "<b>zijn</b> moeder" als "<b>haar</b> moeder" betekenen. Het hangt af van <i>mère</i> (vrouwelijk), niet van wie de moeder heeft.`)}
${tip(`Voor een vrouwelijk woord dat met een klinker begint gebruik je toch <b>mon/ton/son</b> (klinkt mooier): ${f('mon amie')} (mijn vriendin), ${f('son école')} (zijn/haar school).`)}
<h2>De familie</h2>
${tbl(['Frans', 'Nederlands', 'Frans', 'Nederlands'], [
  ['le père / papa', 'vader / papa', 'la mère / maman', 'moeder / mama'],
  ['le frère', 'broer', 'la sœur', 'zus'],
  ['le fils', 'zoon', 'la fille', 'dochter'],
  ['le grand-père / papi', 'opa', 'la grand-mère / mamie', 'oma'],
  ['l\'oncle', 'oom', 'la tante', 'tante'],
  ['le cousin', 'neef (kind van oom)', 'la cousine', 'nicht'],
  ['le neveu', 'neef (kind van broer/zus)', 'la nièce', 'nicht'],
  ['le mari', 'echtgenoot', 'la femme', 'vrouw / echtgenote'],
  ['le beau-père', 'schoonvader', 'la belle-mère', 'schoonmoeder'],
  ['le beau-frère', 'zwager', 'la belle-sœur', 'schoonzus'],
  ['les parents', 'ouders (én familieleden!)', 'les petits-enfants', 'kleinkinderen'],
], [0, 2])}
${exs([
  ['Voici ma femme et mes enfants.', 'Dit zijn mijn vrouw en mijn kinderen.'],
  ['Ton frère est très drôle !', 'Jouw broer is heel grappig!'],
  ['Notre fille a dix ans.', 'Onze dochter is tien.'],
  ['Leurs enfants sont adorables.', 'Hun kinderen zijn schattig.'],
])}
`,
  vocab: [['le père', 'de vader'], ['la mère', 'de moeder'], ['le frère', 'de broer'], ['la sœur', 'de zus'], ['le fils', 'de zoon'], ['la fille', 'de dochter / het meisje'], ['le grand-père', 'de opa'], ['la grand-mère', 'de oma'], ['l\'oncle', 'de oom'], ['la tante', 'de tante'], ['le cousin', 'de neef (kind van oom/tante)'], ['la cousine', 'de nicht (kind van oom/tante)'], ['le neveu', 'de neef (kind van broer/zus)'], ['la nièce', 'de nicht (kind van broer/zus)'], ['le mari', 'de echtgenoot'], ['la femme', 'de vrouw / echtgenote'], ['la belle-mère', 'de schoonmoeder'], ['le beau-père', 'de schoonvader'], ['les parents', 'de ouders'], ['les petits-enfants', 'de kleinkinderen']],
  exercises: [
    { type: 'mc', s: '___ mère est française.', q: 'Mijn moeder…', options: ['Ma', 'Mon', 'Mes', 'Me'] },
    { type: 'mc', s: '___ enfants jouent dehors.', q: 'Onze kinderen…', options: ['Nos', 'Notre', 'Mes', 'Leur'] },
    { type: 'mc', s: 'Pierre aime ___ sœur.', q: 'Pierre houdt van zijn zus.', options: ['sa', 'son', 'ses', 'leur'] },
    { type: 'mc', s: 'Marie adore ___ père.', q: 'Marie is dol op haar vader.', options: ['son', 'sa', 'ses', 'mon'] },
    { type: 'mc', s: 'C\'est ___ amie Julie.', q: 'Dat is mijn vriendin Julie.', options: ['mon', 'ma', 'mes', 'me'] },
    { type: 'fill', s: 'Comment s\'appelle ___ frère ? (jouw)', answer: 'ton' },
    { type: 'match', pairs: [['la belle-mère', 'de schoonmoeder'], ['le neveu', 'de neef (zoon van broer)'], ['la tante', 'de tante'], ['les petits-enfants', 'de kleinkinderen'], ['le mari', 'de echtgenoot']] },
    { type: 'translate', nl: 'Dit zijn mijn ouders.', answer: ['Ce sont mes parents.', 'Voici mes parents.', 'C\'est mes parents.'] },
    { type: 'translate', nl: 'Mijn zus heeft twee kinderen.', answer: ['Ma sœur a deux enfants.', 'Ma soeur a deux enfants.'] },
    { type: 'listen', fr: 'Leurs petits-enfants viennent dimanche.', options: ['Hun kleinkinderen komen zondag.', 'Hun kinderen komen maandag.', 'Mijn kleinkinderen komen zondag.', 'Hun ouders komen zondag.'] },
    { type: 'order', nl: 'Jouw broer is heel grappig!', fr: 'Ton frère est très drôle !' },
    { type: 'speak', fr: 'Je vous présente ma femme et mes enfants.', nl: 'Mag ik u voorstellen aan mijn vrouw en mijn kinderen.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-getallen', unit: 'A1', emoji: '🔢', title: 'Getallen, tijd en datum', sub: 'soixante-dix-neuf (!)',
  theory: `
<h2>0 – 20</h2>
${tbl(['', '', '', ''], [
  ['0 zéro', '1 un', '2 deux', '3 trois'],
  ['4 quatre', '5 cinq', '6 six', '7 sept'],
  ['8 huit', '9 neuf', '10 dix', '11 onze'],
  ['12 douze', '13 treize', '14 quatorze', '15 quinze'],
  ['16 seize', '17 dix-sept', '18 dix-huit', '19 dix-neuf'],
])}
<h2>Tientallen</h2>
${tbl(['', ''], [
  ['20 vingt', '30 trente'],
  ['40 quarante', '50 cinquante'],
  ['60 soixante', '70 soixante-dix (60+10)'],
  ['80 quatre-vingts (4×20)', '90 quatre-vingt-dix (4×20+10)'],
  ['100 cent', '1000 mille'],
])}
${exs([
  ['vingt et un', '21 (met "et")'],
  ['vingt-deux', '22'],
  ['soixante et onze', '71 (60 + 11)'],
  ['soixante-dix-neuf', '79 (60 + 19)'],
  ['quatre-vingt-un', '81 (géén "et"!)'],
  ['quatre-vingt-dix-sept', '97 (4×20 + 17)'],
])}
${tip(`Ja, 97 is echt "vier-twintig-tien-zeven". Fransen rekenen gewoon in twintigtallen 😄. In België en Zwitserland zeggen ze trouwens gewoon <i>septante</i> (70) en <i>nonante</i> (90).`)}
<h2>Hoe laat is het?</h2>
${exs([
  ['Quelle heure est-il ?', 'Hoe laat is het?'],
  ['Il est trois heures.', 'Het is drie uur.'],
  ['Il est huit heures et demie.', 'Het is half negen. (8 uur en een half!)'],
  ['Il est midi / minuit.', 'Het is 12 uur \'s middags / middernacht.'],
  ['On mange à vingt heures.', 'We eten om 20 uur. (Fransen gebruiken vaak 24 uur)'],
  ['Il est dix heures et quart.', 'Het is kwart over tien.'],
  ['Il est six heures moins le quart.', 'Het is kwart voor zes.'],
])}
${warn(`"Half negen" is in het Frans ${f('huit heures et demie')} — 8 uur en een half. Niet negen!`)}
<h2>Dagen en maanden</h2>
<p><b>Dagen:</b> lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</p>
<p><b>Maanden:</b> janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre</p>
${exs([['On est le combien aujourd\'hui ? — On est le 14 juillet.', 'De hoeveelste is het vandaag? — Het is 14 juli.'], ['Mon anniversaire, c\'est le premier mai.', 'Mijn verjaardag is op 1 mei. (1 = le premier)']])}
`,
  vocab: [['un', '1'], ['deux', '2'], ['trois', '3'], ['quatre', '4'], ['cinq', '5'], ['six', '6'], ['sept', '7'], ['huit', '8'], ['neuf', '9'], ['dix', '10'], ['vingt', '20'], ['soixante-dix', '70'], ['quatre-vingts', '80'], ['quatre-vingt-dix', '90'], ['cent', '100'], ['lundi', 'maandag'], ['mardi', 'dinsdag'], ['mercredi', 'woensdag'], ['jeudi', 'donderdag'], ['vendredi', 'vrijdag'], ['samedi', 'zaterdag'], ['dimanche', 'zondag'], ['l\'anniversaire', 'de verjaardag']],
  exercises: [
    { type: 'mc', q: 'Wat is <b>soixante-quinze</b>?', options: ['75', '65', '95', '57'], noSay: true },
    { type: 'mc', q: 'Wat is <b>quatre-vingt-dix-huit</b>?', options: ['98', '88', '78', '4920'], noSay: true },
    { type: 'listen', fr: 'Il est huit heures et demie.', options: ['Het is half negen.', 'Het is half acht.', 'Het is acht uur.', 'Het is kwart over acht.'] },
    { type: 'mc', q: 'Hoe zeg je 71?', options: ['soixante et onze', 'septante-un', 'soixante-dix-un', 'sept-un'] },
    { type: 'fill', s: 'J\'ai ___ ans. (40)', answer: 'quarante' },
    { type: 'match', pairs: [['lundi', 'maandag'], ['mercredi', 'woensdag'], ['jeudi', 'donderdag'], ['samedi', 'zaterdag'], ['dimanche', 'zondag']] },
    { type: 'dictee', fr: 'trente-deux', nl: '32' },
    { type: 'translate', nl: 'Hoe laat is het?', answer: ['Quelle heure est-il ?', 'Il est quelle heure ?'] },
    { type: 'translate', nl: 'Het is kwart over tien.', answer: ['Il est dix heures et quart.', 'Il est dix heures quinze.'] },
    { type: 'listen', fr: 'Mon anniversaire, c\'est le premier août.', options: ['Mijn verjaardag is op 1 augustus.', 'Mijn verjaardag is op 1 oktober.', 'Mijn verjaardag is in april.', 'Het feest is op 8 augustus.'] },
    { type: 'mc', q: 'Wat betekent <b>midi</b>?', options: ['12 uur \'s middags', 'middernacht', 'woensdag', 'het middageten'], noSay: true },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-onregelmatig', unit: 'A1', emoji: '🌀', title: 'Belangrijke onregelmatige werkwoorden', sub: 'aller, faire, vouloir, pouvoir…',
  theory: `
<p>Deze werkwoorden gebruik je de hele dag. Ze zijn onregelmatig, dus gewoon uit je hoofd leren. Druk op de vormen om ze te horen!</p>
<h2>Aller (gaan)</h2>
${conj(['je vais', 'tu vas', 'il / elle / on va', 'nous allons', 'vous allez', 'ils / elles vont'])}
<h2>Faire (doen / maken)</h2>
${conj(['je fais', 'tu fais', 'il / elle / on fait', 'nous faisons', 'vous faites', 'ils / elles font'])}
${exs([['Qu\'est-ce que tu fais ?', 'Wat doe je?'], ['Il fait beau / froid.', 'Het is mooi weer / koud.'], ['On fait les courses.', 'We doen boodschappen.']])}
<h2>Vouloir (willen) & Pouvoir (kunnen / mogen)</h2>
${tbl(['vouloir', 'pouvoir'], [
  ['je veux', 'je peux'], ['tu veux', 'tu peux'], ['il veut', 'il peut'],
  ['nous voulons', 'nous pouvons'], ['vous voulez', 'vous pouvez'], ['ils veulent', 'ils peuvent'],
], [0, 1])}
${tip(`Wil je beleefd iets vragen? Zeg niet <i>je veux</i> maar ${f('je voudrais')} (ik zou graag willen). <span class="fr">Je voudrais un café, s'il vous plaît.</span>`)}
<h2>Prendre (nemen), Venir (komen), Savoir (weten)</h2>
${tbl(['prendre', 'venir', 'savoir'], [
  ['je prends', 'je viens', 'je sais'], ['tu prends', 'tu viens', 'tu sais'], ['il prend', 'il vient', 'il sait'],
  ['nous prenons', 'nous venons', 'nous savons'], ['vous prenez', 'vous venez', 'vous savez'], ['ils prennent', 'ils viennent', 'ils savent'],
], [0, 1, 2])}
${exs([
  ['Tu veux du gâteau ?', 'Wil je taart?'],
  ['Je peux t\'aider ?', 'Kan ik je helpen?'],
  ['Vous venez d\'où ?', 'Waar komen jullie vandaan?'],
  ['On prend le train.', 'We nemen de trein.'],
  ['Tu sais nager ?', 'Kun je zwemmen? (weet je hoe)'],
])}
`,
  vocab: [['aller', 'gaan'], ['faire', 'doen / maken'], ['vouloir', 'willen'], ['pouvoir', 'kunnen / mogen'], ['prendre', 'nemen'], ['venir', 'komen'], ['savoir', 'weten'], ['je voudrais', 'ik zou graag willen'], ['il fait beau', 'het is mooi weer'], ['faire les courses', 'boodschappen doen']],
  exercises: [
    { type: 'mc', s: 'Je ___ à Paris demain.', options: ['vais', 'va', 'vas', 'allons'] },
    { type: 'mc', s: 'Qu\'est-ce que vous ___ ?', options: ['faites', 'faisez', 'font', 'fais'] },
    { type: 'fill', s: 'Ils ___ du café. (prendre)', answer: 'prennent' },
    { type: 'fill', s: 'Tu ___ venir ? (vouloir)', answer: 'veux' },
    { type: 'fill', s: 'Nous ne ___ pas venir. (pouvoir)', answer: 'pouvons' },
    { type: 'fill', s: 'Elles ___ de Lyon. (venir)', answer: 'viennent' },
    { type: 'mc', q: 'Beleefd een koffie bestellen:', options: ['Je voudrais un café, s\'il vous plaît.', 'Je veux café !', 'Donne café.', 'Je vais un café.'] },
    { type: 'translate', nl: 'Het is mooi weer.', answer: ['Il fait beau.', 'Il fait beau aujourd\'hui.'] },
    { type: 'translate', nl: 'Kan ik je helpen?', answer: ['Je peux t\'aider ?', 'Est-ce que je peux t\'aider ?', 'Puis-je t\'aider ?', 'Je peux vous aider ?'] },
    { type: 'order', nl: 'Waar komen jullie vandaan?', fr: 'Vous venez d\'où ?' },
    { type: 'listen', fr: 'On fait les courses et après on va à la plage.', options: ['We doen boodschappen en daarna gaan we naar het strand.', 'We gaan naar het strand en doen daarna boodschappen.', 'We maken een taart voor op het strand.', 'Ze gaan winkelen aan het strand.'] },
    { type: 'speak', fr: 'Je voudrais un croissant, s\'il vous plaît.', nl: 'Ik zou graag een croissant willen, alstublieft.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-voorzetsels', unit: 'A1', emoji: '📍', title: 'À, de en plaatsen', sub: 'au, du, chez, en France',
  theory: `
<h2>À + lidwoord (naar / in / aan)</h2>
${tbl(['', 'wordt', 'voorbeeld'], [
  ['à + le', '<b>au</b>', 'Je vais au marché.'],
  ['à + la', 'à la', 'Je vais à la plage.'],
  ['à + l\'', 'à l\'', 'Il est à l\'école.'],
  ['à + les', '<b>aux</b>', 'Je parle aux enfants.'],
], [2])}
<h2>De + lidwoord (van / uit)</h2>
${tbl(['', 'wordt', 'voorbeeld'], [
  ['de + le', '<b>du</b>', 'Je viens du marché.'],
  ['de + la', 'de la', 'la maison de la tante'],
  ['de + l\'', 'de l\'', 'Il sort de l\'hôpital.'],
  ['de + les', '<b>des</b>', 'le jouet des enfants'],
], [2])}
${tip(`"Het huis van mijn oom" = ${f('la maison de mon oncle')}. Frans heeft geen "'s": <i>Papa's auto</i> = ${f('la voiture de papa')}.`)}
<h2>Chez = bij (iemand thuis)</h2>
${exs([['On dîne chez mamie.', 'We eten bij oma.'], ['Viens chez moi !', 'Kom naar mijn huis!'], ['Je suis chez le médecin.', 'Ik ben bij de dokter.']])}
<h2>Landen en steden</h2>
${tbl(['', 'voorzetsel', 'voorbeeld'], [
  ['steden', 'à', 'à Paris, à Amsterdam'],
  ['vrouwelijke landen (meestal -e)', 'en', 'en France, en Belgique'],
  ['mannelijke landen', 'au', 'au Canada, au Maroc'],
  ['meervoudige landen', 'aux', 'aux Pays-Bas, aux États-Unis'],
], [2])}
${exs([['J\'habite aux Pays-Bas.', 'Ik woon in Nederland.'], ['On part en vacances en Bretagne.', 'We gaan op vakantie naar Bretagne.']])}
<h2>Waar is het?</h2>
${tbl(['Frans', 'Nederlands'], [
  ['sur', 'op'], ['sous', 'onder'], ['dans', 'in'], ['devant', 'voor'], ['derrière', 'achter'],
  ['à côté de', 'naast'], ['entre', 'tussen'], ['près de', 'dichtbij'], ['loin de', 'ver van'],
], [0])}
${exs([['Le chat dort sur le frigo.', 'De kat slaapt op de koelkast.'], ['Les clés sont sous le canapé.', 'De sleutels liggen onder de bank.']])}
`,
  vocab: [['chez', 'bij (thuis)'], ['sur', 'op'], ['sous', 'onder'], ['dans', 'in'], ['devant', 'voor'], ['derrière', 'achter'], ['à côté de', 'naast'], ['entre', 'tussen'], ['près de', 'dichtbij'], ['loin de', 'ver van'], ['le marché', 'de markt'], ['l\'école', 'de school'], ['les Pays-Bas', 'Nederland']],
  exercises: [
    { type: 'mc', s: 'Je vais ___ marché.', options: ['au', 'à le', 'à la', 'du'] },
    { type: 'mc', s: 'Elle parle ___ enfants.', options: ['aux', 'à les', 'des', 'au'] },
    { type: 'mc', s: 'J\'habite ___ Pays-Bas.', options: ['aux', 'en', 'au', 'à'] },
    { type: 'mc', s: 'On part ___ France.', options: ['en', 'au', 'à', 'aux'] },
    { type: 'fill', s: 'On dîne ___ mamie ce soir.', answer: 'chez', hint: 'bij oma (thuis)' },
    { type: 'fill', s: 'Je viens ___ marché. (de + le)', answer: 'du' },
    { type: 'translate', nl: 'de auto van papa', answer: ['la voiture de papa', 'la voiture de mon père', 'la voiture de Papa'] },
    { type: 'translate', nl: 'De kat slaapt op de koelkast.', answer: ['Le chat dort sur le frigo.', 'Le chat dort sur le réfrigérateur.'] },
    { type: 'match', pairs: [['sous', 'onder'], ['derrière', 'achter'], ['à côté de', 'naast'], ['loin de', 'ver van'], ['entre', 'tussen']] },
    { type: 'listen', fr: 'Les clés sont sous le canapé, derrière le chien.', options: ['De sleutels liggen onder de bank, achter de hond.', 'De sleutels liggen op de bank, naast de hond.', 'De hond ligt onder de bank.', 'De sleutels liggen in de keuken.'] },
    { type: 'order', nl: 'We gaan naar het strand.', fr: 'On va à la plage.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-futur-proche', unit: 'A1', emoji: '🔮', title: 'De nabije toekomst', sub: 'je vais manger',
  theory: `
<h2>Aller + heel werkwoord</h2>
<p>De makkelijkste manier om over de toekomst te praten — precies zoals "gaan" in het Nederlands:</p>
${tbl(['aller', '+ infinitief', 'betekenis'], [
  ['je vais', 'manger', 'ik ga eten'],
  ['tu vas', 'voir', 'je gaat zien'],
  ['il va', 'pleuvoir', 'het gaat regenen'],
  ['nous allons', 'partir', 'we gaan vertrekken'],
  ['vous allez', 'adorer', 'jullie gaan het geweldig vinden'],
  ['ils vont', 'arriver', 'ze gaan aankomen'],
], [0, 1])}
${exs([
  ['Ce soir, on va manger une raclette !', 'Vanavond gaan we raclette eten!'],
  ['Tu vas voir, c\'est super.', 'Je gaat het zien, het is super.'],
  ['Attention, il va tomber !', 'Pas op, hij gaat vallen!'],
  ['Qu\'est-ce que vous allez faire demain ?', 'Wat gaan jullie morgen doen?'],
])}
<h2>Ontkennen</h2>
<p>De ontkenning komt rond <b>aller</b>: ${f('Je ne vais pas manger.')} (Ik ga niet eten.)</p>
<h2>Handige tijdswoorden</h2>
${tbl(['Frans', 'Nederlands'], [
  ['aujourd\'hui', 'vandaag'], ['demain', 'morgen'], ['après-demain', 'overmorgen'], ['ce soir', 'vanavond'],
  ['ce week-end', 'dit weekend'], ['la semaine prochaine', 'volgende week'], ['bientôt', 'binnenkort'], ['plus tard', 'later'],
], [0])}
`,
  vocab: [['aujourd\'hui', 'vandaag'], ['demain', 'morgen'], ['après-demain', 'overmorgen'], ['ce soir', 'vanavond'], ['ce week-end', 'dit weekend'], ['la semaine prochaine', 'volgende week'], ['bientôt', 'binnenkort'], ['plus tard', 'later'], ['pleuvoir', 'regenen'], ['partir', 'vertrekken']],
  exercises: [
    { type: 'mc', s: 'Ce soir, je ___ manger chez Paul.', options: ['vais', 'va', 'suis', 'veux aller'] },
    { type: 'mc', s: 'Ils ___ arriver demain.', options: ['vont', 'vais', 'allez', 'va'] },
    { type: 'fill', s: 'Il ___ pleuvoir. (het gaat regenen)', answer: 'va' },
    { type: 'fill', s: 'Qu\'est-ce que vous ___ faire ?', answer: 'allez' },
    { type: 'order', nl: 'Ik ga niet eten.', fr: 'Je ne vais pas manger.' },
    { type: 'translate', nl: 'We gaan morgen vertrekken.', answer: ['On va partir demain.', 'Nous allons partir demain.', 'Demain, on va partir.', 'Demain, nous allons partir.'] },
    { type: 'translate', nl: 'Je gaat het zien!', answer: ['Tu vas voir !', 'Vous allez voir !'] },
    { type: 'match', pairs: [['demain', 'morgen'], ['ce soir', 'vanavond'], ['bientôt', 'binnenkort'], ['plus tard', 'later'], ['aujourd\'hui', 'vandaag']] },
    { type: 'listen', fr: 'Attention, le gâteau va tomber !', options: ['Pas op, de taart gaat vallen!', 'Pas op, de taart is gevallen!', 'De taart gaat in de oven!', 'Wij gaan taart eten!'] },
    { type: 'speak', fr: 'Ce week-end, on va rendre visite à la famille.', nl: 'Dit weekend gaan we bij de familie op bezoek.' },
  ],
},
// ─────────────────────────────────────────────
{
  id: 'a1-partitif', unit: 'A1', emoji: '🥖', title: 'Eten en drinken: du, de la', sub: 'Tu veux du fromage ?',
  theory: `
<h2>Het delend lidwoord: "wat" / "een beetje"</h2>
<p>Bij dingen die je niet kunt tellen (brood, water, kaas…) zegt het Frans <b>du / de la / de l'</b>. In het Nederlands zeg je meestal niets.</p>
${tbl(['', 'Frans', 'voorbeeld'], [
  ['mannelijk', 'du', 'du pain — (wat) brood'],
  ['vrouwelijk', 'de la', 'de la confiture — (wat) jam'],
  ['voor klinker', 'de l\'', 'de l\'eau — (wat) water'],
  ['meervoud', 'des', 'des frites — friet'],
], [1])}
${exs([
  ['Tu veux du fromage ?', 'Wil je kaas?'],
  ['Je bois de l\'eau.', 'Ik drink water.'],
  ['Il mange de la soupe.', 'Hij eet soep.'],
  ['On achète des fraises.', 'We kopen aardbeien.'],
])}
<h2>Drie situaties naast elkaar</h2>
${tbl(['Je bedoelt…', 'Frans', 'Voorbeeld'], [
  ['in het algemeen (houden van)', 'le / la / les', 'J\'aime <b>le</b> fromage.'],
  ['een deel / onbepaalde hoeveelheid', 'du / de la / des', 'Je mange <b>du</b> fromage.'],
  ['één heel exemplaar', 'un / une', 'J\'achète <b>un</b> fromage (een hele kaas).'],
])}
<h2>Na ontkenning en hoeveelheden → de</h2>
${exs([
  ['Je ne mange pas de viande.', 'Ik eet geen vlees.'],
  ['Il n\'y a plus de lait !', 'Er is geen melk meer!'],
  ['beaucoup de sucre', 'veel suiker'],
  ['un peu de vin', 'een beetje wijn'],
  ['un verre d\'eau', 'een glas water'],
  ['trop de chocolat', 'te veel chocola (bestaat dat?)'],
])}
<h2>Aan tafel</h2>
${tbl(['Frans', 'Nederlands'], [
  ['le pain', 'het brood'], ['le fromage', 'de kaas'], ['la viande', 'het vlees'], ['le poisson', 'de vis'],
  ['les légumes', 'de groenten'], ['les fruits', 'het fruit'], ['le vin', 'de wijn'], ['l\'eau', 'het water'],
  ['le lait', 'de melk'], ['le sucre', 'de suiker'], ['le sel', 'het zout'], ['le poivre', 'de peper'],
], [0])}
${tip(`Aan tafel: ${f('Tu peux me passer le sel, s\'il te plaît ?')} (Kun je me het zout aangeven?) en ${f('C\'est délicieux !')} — die twee zinnen maken je populair bij elk familiediner.`)}
`,
  vocab: [['le pain', 'het brood'], ['la viande', 'het vlees'], ['le poisson', 'de vis'], ['les légumes', 'de groenten'], ['les fruits', 'het fruit'], ['le vin', 'de wijn'], ['le lait', 'de melk'], ['le sucre', 'de suiker'], ['le sel', 'het zout'], ['le poivre', 'de peper'], ['la confiture', 'de jam'], ['la soupe', 'de soep'], ['les fraises', 'de aardbeien'], ['beaucoup de', 'veel'], ['un peu de', 'een beetje'], ['trop de', 'te veel']],
  exercises: [
    { type: 'mc', s: 'Tu veux ___ pain ?', options: ['du', 'de la', 'des', 'le'] },
    { type: 'mc', s: 'Je bois ___ eau.', options: ['de l\'', 'du', 'de la', 'le'] },
    { type: 'mc', s: 'Elle mange ___ soupe.', options: ['de la', 'du', 'des', 'de'] },
    { type: 'mc', s: 'J\'adore ___ fromage !', q: 'Algemeen: houden van', options: ['le', 'du', 'de', 'un'] },
    { type: 'mc', s: 'Je ne mange pas ___ viande.', options: ['de', 'de la', 'du', 'la'] },
    { type: 'fill', s: 'Il y a beaucoup ___ sucre.', answer: 'de' },
    { type: 'fill', s: 'Un verre ___ eau, s\'il vous plaît.', answer: 'd\'' },
    { type: 'translate', nl: 'Wil je kaas?', answer: ['Tu veux du fromage ?', 'Vous voulez du fromage ?', 'Est-ce que tu veux du fromage ?'] },
    { type: 'translate', nl: 'Er is geen melk meer.', answer: ['Il n\'y a plus de lait.', 'Y a plus de lait.', 'Il y a plus de lait.'] },
    { type: 'order', nl: 'Kun je me het zout aangeven, alsjeblieft?', fr: 'Tu peux me passer le sel, s\'il te plaît ?' },
    { type: 'listen', fr: 'On achète du pain, du fromage et un peu de vin.', options: ['We kopen brood, kaas en een beetje wijn.', 'We eten brood met kaas en veel wijn.', 'Ik koop brood maar geen kaas.', 'Er is geen brood, kaas of wijn.'] },
    { type: 'speak', fr: 'C\'est délicieux ! Je peux en reprendre ?', nl: 'Het is heerlijk! Mag ik nog wat?' },
  ],
},
];
