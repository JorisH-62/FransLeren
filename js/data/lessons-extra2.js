import { exs, tbl, tip, warn, f } from './helpers.js';

export const EXTRA2_A2 = [
{
  id: 'a2-tout', unit: 'A2', emoji: '🌍', title: 'Tout, tous, quelques, plusieurs', sub: 'alles, iedereen, een paar, meerdere',
  theory: `
<h2>Tout past zich aan</h2>
${tbl(['', 'enkelvoud', 'meervoud'], [
  ['mannelijk', 'tout', 'tous'],
  ['vrouwelijk', 'toute', 'toutes'],
], [1, 2])}
${exs([
  ['tout le gâteau', 'de hele taart'],
  ['toute la famille', 'de hele familie'],
  ['tous les enfants', 'alle kinderen'],
  ['toutes les semaines', 'elke week (alle weken)'],
  ['tout le monde', 'iedereen (letterlijk: de hele wereld)'],
])}
${warn(`${f('tout le monde')} = <b>iedereen</b>, met een werkwoord in het enkelvoud: <span class="fr">Tout le monde est là !</span> (Iedereen is er!)`)}
<h2>Tout alleen = alles</h2>
${exs([['Tout va bien.', 'Alles gaat goed.'], ['C\'est tout ?', 'Is dat alles?'], ['Merci pour tout !', 'Bedankt voor alles!'], ['Il a tout mangé.', 'Hij heeft alles opgegeten.']])}
<h2>Tous als voornaamwoord: spreek de s uit!</h2>
<p>${f('Ils sont tous là.')} (Ze zijn er allemaal.) Hier zeg je "toes" mét s. Als bijvoeglijk woord (<i>tous les jours</i>) zeg je "toe".</p>
<h2>Een paar, meerdere, sommige</h2>
${tbl(['Frans', 'Nederlands', 'Voorbeeld'], [
  ['quelques', 'een paar', 'quelques amis'],
  ['plusieurs', 'meerdere / verscheidene', 'plusieurs fois'],
  ['certains / certaines', 'sommige', 'certains jours'],
  ['chaque', 'elk(e)', 'chaque matin'],
  ['quelque chose', 'iets', 'Tu veux quelque chose ?'],
  ['quelqu\'un', 'iemand', 'Il y a quelqu\'un ?'],
], [2])}
${tip(`Handige vaste uitdrukkingen: ${f('tout de suite')} (meteen), ${f('tout à l\'heure')} (straks / zojuist), ${f('pas du tout')} (helemaal niet), ${f('tout à fait')} (helemaal), ${f('en tout cas')} (hoe dan ook).`)}
`,
  vocab: [['tout le monde', 'iedereen'], ['toute la famille', 'de hele familie'], ['tous les jours', 'elke dag'], ['quelques', 'een paar'], ['plusieurs', 'meerdere'], ['chaque', 'elk(e)'], ['quelque chose', 'iets'], ['quelqu\'un', 'iemand'], ['tout de suite', 'meteen'], ['tout à l\'heure', 'straks / zojuist']],
  exercises: [
    { type: 'mc', s: '___ la famille est là.', options: ['Toute', 'Tout', 'Tous', 'Toutes'] },
    { type: 'mc', s: 'Il a mangé ___ le gâteau !', options: ['tout', 'toute', 'tous', 'toutes'] },
    { type: 'mc', s: 'Je bois du café ___ les matins.', options: ['tous', 'tout', 'toute', 'toutes'] },
    { type: 'mc', s: 'On se voit ___ les semaines.', options: ['toutes', 'tous', 'toute', 'tout'] },
    { type: 'mc', s: 'Tout le monde ___ content.', options: ['est', 'sont', 'êtes', 'sommes'] },
    { type: 'fill', s: 'Il y a ___ amis dans le jardin. (een paar)', answer: 'quelques' },
    { type: 'fill', s: 'Je suis venu ___ fois. (meerdere)', answer: 'plusieurs' },
    { type: 'translate', nl: 'Bedankt voor alles!', answer: ['Merci pour tout !'] },
    { type: 'translate', nl: 'Is er iemand?', answer: ['Il y a quelqu\'un ?', 'Y a quelqu\'un ?', 'Est-ce qu\'il y a quelqu\'un ?'] },
    { type: 'order', nl: 'Iedereen is er!', fr: 'Tout le monde est là !' },
    { type: 'listen', fr: 'Ils sont tous partis tout à l\'heure.', options: ['Ze zijn net allemaal vertrokken.', 'Ze vertrekken straks allemaal.', 'Iedereen is er nog.', 'Ze zijn helemaal niet vertrokken.'] },
    { type: 'speak', fr: 'Merci pour tout, c\'était parfait !', nl: 'Bedankt voor alles, het was perfect!' },
  ],
},
];

export const EXTRA2_B1 = [
{
  id: 'b1-avoir-faire', unit: 'B1', emoji: '🎭', title: 'Uitdrukkingen met avoir en faire', sub: 'avoir l\'air, faire semblant, faire exprès…',
  theory: `
<h2>Avoir in vaste uitdrukkingen</h2>
${tbl(['Frans', 'Nederlands', 'Voorbeeld'], [
  ['avoir l\'air (+ bijv. nw.)', 'er … uitzien', 'Tu as l\'air fatigué.'],
  ['avoir l\'habitude de', 'gewend zijn om', 'J\'ai l\'habitude de me lever tôt.'],
  ['avoir du mal à', 'moeite hebben met', 'J\'ai du mal à comprendre.'],
  ['avoir hâte de', 'niet kunnen wachten om', 'J\'ai hâte de vous voir !'],
  ['avoir de la chance', 'geluk hebben', 'Tu as de la chance !'],
  ['avoir le temps', 'tijd hebben', 'Je n\'ai pas le temps.'],
  ['avoir lieu', 'plaatsvinden', 'Le mariage a lieu en juin.'],
  ['en avoir marre', 'er genoeg van hebben', 'J\'en ai marre de la pluie !'],
], [2])}
<h2>Faire in vaste uitdrukkingen</h2>
${tbl(['Frans', 'Nederlands', 'Voorbeeld'], [
  ['faire semblant de', 'doen alsof', 'Il fait semblant de dormir.'],
  ['faire exprès', 'expres doen', 'Je ne l\'ai pas fait exprès !'],
  ['faire attention (à)', 'opletten', 'Fais attention à la marche !'],
  ['faire la queue', 'in de rij staan', 'On a fait la queue pendant une heure.'],
  ['faire la fête', 'feesten', 'Ce soir, on fait la fête !'],
  ['faire plaisir (à)', 'plezier doen', 'Ça me fait très plaisir.'],
  ['faire peur (à)', 'bang maken', 'Tu m\'as fait peur !'],
  ['faire la tête', 'mokken / chagrijnig doen', 'Pourquoi tu fais la tête ?'],
  ['ça fait … que', 'het is al … dat', 'Ça fait dix ans qu\'on se connaît.'],
  ['ne t\'en fais pas', 'maak je geen zorgen', 'Ne t\'en fais pas, ça va aller.'],
], [2])}
${exs([
  ['Ne fais pas semblant de ne pas comprendre !', 'Doe niet alsof je het niet begrijpt!'],
  ['Pardon, je ne l\'ai pas fait exprès.', 'Sorry, ik deed het niet expres.'],
  ['Tu as l\'air content aujourd\'hui !', 'Je ziet er blij uit vandaag!'],
  ['J\'ai hâte d\'être en vacances.', 'Ik kan niet wachten tot het vakantie is.'],
])}
${tip(`${f('Avoir l\'air')} is superhandig om op mensen te reageren: ${f('Tu as l\'air en forme !')} (Je ziet er fit uit!), ${f('Ça a l\'air bon !')} (Dat ziet er lekker uit!).`)}
`,
  vocab: [['avoir l\'air', 'er … uitzien'], ['avoir hâte de', 'niet kunnen wachten om'], ['avoir du mal à', 'moeite hebben met'], ['en avoir marre', 'er genoeg van hebben'], ['avoir lieu', 'plaatsvinden'], ['faire semblant', 'doen alsof'], ['faire exprès', 'expres doen'], ['faire attention', 'opletten'], ['faire la queue', 'in de rij staan'], ['faire la tête', 'mokken'], ['ne t\'en fais pas', 'maak je geen zorgen']],
  exercises: [
    { type: 'match', pairs: [['faire semblant', 'doen alsof'], ['faire exprès', 'expres doen'], ['avoir hâte de', 'niet kunnen wachten'], ['faire la tête', 'mokken'], ['avoir lieu', 'plaatsvinden']] },
    { type: 'mc', s: 'Tu as ___ fatigué.', q: 'Je ziet er moe uit.', options: ['l\'air', 'la tête', 'le temps', 'du mal'] },
    { type: 'mc', s: 'Pardon, je ne l\'ai pas fait ___ !', options: ['exprès', 'semblant', 'attention', 'plaisir'] },
    { type: 'mc', s: 'Il fait ___ de dormir.', options: ['semblant', 'exprès', 'la tête', 'attention'] },
    { type: 'mc', s: 'J\'en ai ___ de la pluie !', options: ['marre', 'hâte', 'l\'air', 'lieu'] },
    { type: 'fill', s: 'J\'ai ___ de vous voir ! (kan niet wachten)', answer: 'hâte' },
    { type: 'fill', s: 'Fais ___ à la marche !', answer: 'attention' },
    { type: 'translate', nl: 'Je hebt me bang gemaakt!', answer: ['Tu m\'as fait peur !', 'Vous m\'avez fait peur !'] },
    { type: 'translate', nl: 'Dat ziet er lekker uit!', answer: ['Ça a l\'air bon !', 'Ça a l\'air délicieux !'] },
    { type: 'order', nl: 'Maak je geen zorgen, het komt goed.', fr: 'Ne t\'en fais pas, ça va aller.' },
    { type: 'listen', fr: 'Ça fait dix ans qu\'on se connaît !', options: ['We kennen elkaar al tien jaar!', 'Over tien jaar kennen we elkaar.', 'Tien jaar geleden kende ik je niet.', 'We hebben elkaar tien keer gezien.'] },
    { type: 'speak', fr: 'Tu as l\'air en forme ! J\'ai hâte de passer le week-end avec vous.', nl: 'Je ziet er fit uit! Ik kan niet wachten om het weekend met jullie door te brengen.' },
  ],
},
];
