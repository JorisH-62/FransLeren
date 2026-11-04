// Traditionele Franse kinderliedjes (comptines) — eeuwenoud, publiek domein.
export default [
{
  id: 'frere-jacques', kind: 'song', level: 'A1', emoji: '🔔', color: '#fff3c4', minutes: 2,
  title: 'Frère Jacques', nl: 'Vader Jacob',
  intro: 'Ja, dit is het origineel van "Vader Jacob"! In het Frans is Jacques een monnik die zich verslaapt en de ochtendklokken moet luiden.',
  grammar: 'Vraag met inversie (dormez-vous ?), gebiedende wijs (sonnez)',
  pages: [
    { pic: '🧑‍🦲😴', fr: 'Frère Jacques, frère Jacques, dormez-vous ? Dormez-vous ?', nl: 'Broeder Jacques, broeder Jacques, slaapt u? Slaapt u?' },
    { pic: '🔔', fr: 'Sonnez les matines, sonnez les matines. Ding, dang, dong. Ding, dang, dong.', nl: 'Luid de metten (ochtendgebed), luid de metten. Bim, bam, bom. Bim, bam, bom.' },
  ],
  glossary: { 'frère': 'broeder / broer', 'jacques': 'Jacques (Jacob)', 'dormez-vous': 'slaapt u?', 'dormez': 'slaapt', 'sonnez': 'luid', 'matines': 'metten (vroeg ochtendgebed)', 'ding': 'bim', 'dang': 'bam', 'dong': 'bom' },
  quiz: [
    { q: 'Wat betekent "Dormez-vous ?"', options: ['Slaapt u?', 'Bent u wakker?', 'Waar bent u?', 'Hoort u mij?'] },
    { q: 'Wat moet frère Jacques doen?', options: ['De klokken luiden', 'Ontbijt maken', 'Naar school gaan', 'Zingen'] },
  ],
},
{
  id: 'clair-lune', kind: 'song', level: 'A1', emoji: '🌙', color: '#dfe6ff', minutes: 2,
  title: 'Au clair de la lune', nl: 'In het maanlicht',
  intro: 'Een van de bekendste Franse slaapliedjes. Iemand klopt \'s nachts aan bij zijn vriend Pierrot: zijn kaars is uit en hij wil een pen lenen.',
  grammar: 'Gebiedende wijs (prête-moi, ouvre-moi), ne… plus',
  pages: [
    { pic: '🌕🤡', fr: 'Au clair de la lune, mon ami Pierrot, prête-moi ta plume pour écrire un mot.', nl: 'In het maanlicht, mijn vriend Pierrot, leen me je pen om een woordje te schrijven.' },
    { pic: '🕯️🚪', fr: 'Ma chandelle est morte, je n\'ai plus de feu. Ouvre-moi ta porte, pour l\'amour de Dieu.', nl: 'Mijn kaars is uit, ik heb geen vuur meer. Doe je deur voor me open, in godsnaam.' },
  ],
  glossary: { 'clair': 'licht / helder', 'au clair de la lune': 'in het maanlicht', 'lune': 'maan', 'ami': 'vriend', 'pierrot': 'Pierrot (clown-figuur)', 'prête-moi': 'leen me', 'prête': 'leen', 'plume': 'veer / (ganzen)pen', 'écrire': 'schrijven', 'mot': 'woord / briefje', 'chandelle': 'kaars', 'morte': 'dood / uit', 'feu': 'vuur', 'ouvre-moi': 'doe voor me open', 'ouvre': 'open', 'porte': 'deur', 'amour': 'liefde', 'dieu': 'God', 'pour l\'amour de dieu': 'in godsnaam' },
  quiz: [
    { q: 'Wat wil de zanger lenen?', options: ['Een pen', 'Een kaars', 'Een jas', 'Geld'] },
    { q: 'Waarom?', options: ['Zijn kaars is uit', 'Hij heeft het koud', 'Hij heeft honger', 'Hij is verdwaald'] },
  ],
},
{
  id: 'souris-verte', kind: 'song', level: 'A1', emoji: '🐭', color: '#d8f5d0', minutes: 2,
  title: 'Une souris verte', nl: 'Een groen muisje',
  intro: 'Een supergek liedje dat elk Frans kind kent. Een groene muis wordt in olie en water gedoopt… en verandert in een warme slak! (Gaston vindt het niet grappig.)',
  grammar: 'Imparfait (courait), lijdend voornaamwoord (je l\'attrape), futur (ça fera)',
  pages: [
    { pic: '🐭🌿', fr: 'Une souris verte qui courait dans l\'herbe, je l\'attrape par la queue, je la montre à ces messieurs.', nl: 'Een groen muisje dat door het gras rende, ik pak het bij zijn staart, ik laat het aan deze heren zien.' },
    { pic: '🫒💧', fr: 'Ces messieurs me disent : trempez-la dans l\'huile, trempez-la dans l\'eau, ça fera un escargot tout chaud.', nl: 'Deze heren zeggen tegen me: doop hem in de olie, doop hem in het water, dan wordt het een gloeiend warme slak.' },
  ],
  glossary: { 'souris': 'muis', 'verte': 'groen', 'courait': 'rende', 'herbe': 'gras', 'attrape': 'vang / pak', 'queue': 'staart', 'montre': 'laat zien', 'messieurs': 'heren', 'disent': 'zeggen', 'trempez-la': 'doop hem/haar', 'trempez': 'doop', 'huile': 'olie', 'fera': 'zal maken / worden', 'escargot': 'slak', 'chaud': 'warm' },
  quiz: [
    { q: 'Welke kleur heeft de muis?', options: ['Groen', 'Grijs', 'Wit', 'Zwart'] },
    { q: 'Waarin wordt de muis gedoopt?', options: ['Olie en water', 'Melk en honing', 'Soep', 'Chocolade'] },
    { q: 'Wat wordt de muis uiteindelijk?', options: ['Een warme slak', 'Een kikker', 'Een kaas', 'Een vis'] },
  ],
},
{
  id: 'avignon', kind: 'song', level: 'A1', emoji: '🌉', color: '#ffe0d0', minutes: 2,
  title: 'Sur le pont d\'Avignon', nl: 'Op de brug van Avignon',
  intro: 'Een dansliedje over de beroemde (half ingestorte!) brug van Avignon. Bij "comme ça" doe je een gebaar na: een buiging, een hoed afnemen…',
  grammar: 'Y (daar), on, tous en rond',
  pages: [
    { pic: '🌉💃', fr: 'Sur le pont d\'Avignon, on y danse, on y danse. Sur le pont d\'Avignon, on y danse tous en rond.', nl: 'Op de brug van Avignon, daar dansen we, daar dansen we. Op de brug van Avignon, daar dansen we allemaal in een kring.' },
    { pic: '🎩🙇', fr: 'Les beaux messieurs font comme ça, et puis encore comme ça.', nl: 'De deftige heren doen zo, en dan nog eens zo. (buiging!)' },
    { pic: '👗💃', fr: 'Les belles dames font comme ça, et puis encore comme ça.', nl: 'De mooie dames doen zo, en dan nog eens zo. (reverence!)' },
  ],
  glossary: { 'pont': 'brug', 'avignon': 'Avignon', 'y': 'daar', 'danse': 'danst', 'tous': 'allemaal', 'en rond': 'in een kring', 'rond': 'rond', 'beaux': 'mooie / deftige', 'messieurs': 'heren', 'font': 'doen', 'comme ça': 'zo', 'puis': 'dan', 'encore': 'nog eens', 'belles': 'mooie', 'dames': 'dames' },
  quiz: [
    { q: 'Wat doen de mensen op de brug?', options: ['Dansen', 'Vissen', 'Zingen', 'Eten'] },
    { q: 'Wat betekent "on y danse"?', options: ['Daar dansen we', 'We dansen niet', 'Ze danste daar', 'Dans met mij'] },
  ],
},
{
  id: 'promenons', kind: 'song', level: 'A2', emoji: '🐺', color: '#e4dccb', minutes: 3,
  title: 'Promenons-nous dans les bois', nl: 'Laten we wandelen in het bos',
  intro: 'Een spannend tikspelletje-lied: de kinderen wandelen terwijl de wolf zich aankleedt. Als hij eindelijk klaar is… rennen!',
  grammar: 'Si + imparfait → conditionnel! (si le loup y était, il nous mangerait), vragen met inversie',
  pages: [
    { pic: '🌲🚶', fr: 'Promenons-nous dans les bois pendant que le loup n\'y est pas. Si le loup y était, il nous mangerait. Mais comme il n\'y est pas, il nous mangera pas.', nl: 'Laten we in het bos wandelen terwijl de wolf er niet is. Als de wolf er was, zou hij ons opeten. Maar omdat hij er niet is, zal hij ons niet opeten.' },
    { pic: '🐺❓', fr: 'Loup, y es-tu ? Que fais-tu ? M\'entends-tu ?', nl: 'Wolf, ben je daar? Wat doe je? Hoor je me?' },
    { pic: '🐺👕', fr: 'Je mets ma chemise !', nl: 'Ik trek mijn overhemd aan!' },
    { pic: '🐺👖', fr: 'Je mets mon pantalon !', nl: 'Ik trek mijn broek aan!' },
    { pic: '🐺🧦', fr: 'Je mets mes chaussettes !', nl: 'Ik trek mijn sokken aan!' },
    { pic: '🐺🏃', fr: 'Je mets mes bottes… J\'ARRIVE ! Sauve qui peut !', nl: 'Ik trek mijn laarzen aan… IK KOM ERAAN! Rennen voor je leven!' },
  ],
  glossary: { 'promenons-nous': 'laten we wandelen', 'promenons': 'laten we wandelen', 'bois': 'bos', 'pendant que': 'terwijl', 'loup': 'wolf', 'y': 'daar / er', 'était': 'was', 'mangerait': 'zou opeten', 'comme': 'omdat / zoals', 'mangera': 'zal opeten', 'es-tu': 'ben je', 'fais-tu': 'doe je', 'entends-tu': 'hoor je', 'mets': 'trek aan / zet', 'chemise': 'overhemd', 'pantalon': 'broek', 'chaussettes': 'sokken', 'bottes': 'laarzen', 'arrive': 'kom eraan', 'sauve qui peut': 'rennen voor je leven', 'sauve': 'red' },
  quiz: [
    { q: 'Waarom wandelen de kinderen nu in het bos?', options: ['De wolf is er niet', 'Het is mooi weer', 'Ze zoeken de wolf', 'Ze zijn verdwaald'] },
    { q: 'Wat doet de wolf de hele tijd?', options: ['Zich aankleden', 'Slapen', 'Eten', 'Zingen'] },
    { q: '"Si le loup y était, il nous mangerait" is een…', options: ['Si-zin met imparfait en conditionnel', 'Passé composé', 'Futur proche', 'Gebiedende wijs'] },
  ],
},
{
  id: 'marionnettes', kind: 'song', level: 'A1', emoji: '🎎', color: '#ffd9ec', minutes: 1,
  title: 'Ainsi font, font, font', nl: 'Zo doen, doen, doen',
  intro: 'Het allereerste liedje voor baby\'s: je draait met je handjes als marionetten. Perfect om met kleine nichtjes en neefjes te zingen!',
  grammar: 'Faire (font), s\'en aller (s\'en vont), spreektaal (p\'tits)',
  pages: [
    { pic: '👐🎎', fr: 'Ainsi font, font, font les petites marionnettes. Ainsi font, font, font, trois p\'tits tours et puis s\'en vont.', nl: 'Zo doen, doen, doen de kleine marionetjes. Zo doen, doen, doen: drie rondjes en dan gaan ze weg.' },
  ],
  glossary: { 'ainsi': 'zo', 'font': 'doen', 'marionnettes': 'marionetten', 'p\'': 'kleine (p\'tits = petits, spreektaal)', 'tits': '(p\'tits = petits, kleine)', 'tours': 'rondjes', 'puis': 'dan', 's\'en vont': 'gaan weg', 'vont': 'gaan' },
  quiz: [
    { q: 'Wat zijn "marionnettes"?', options: ['Marionetten / poppetjes', 'Muizen', 'Bloemen', 'Kinderen'] },
    { q: '"p\'tits" is spreektaal voor…', options: ['petits', 'partis', 'pétales', 'pays'] },
  ],
},
];
