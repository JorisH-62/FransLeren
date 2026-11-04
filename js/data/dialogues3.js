export default [
{
  id: 'anekdote', level: 'B1', emoji: '🍷', title: 'Een anekdote vertellen', sub: 'Verhaal vertellen aan tafel',
  cast: { pere: { name: 'Alain', av: '👨‍🦳', desc: 'schoonvader' }, cousine: { name: 'Julie', av: '👩', desc: 'nicht' } },
  intro: 'Aan het einde van het diner vraagt schoonvader Alain: "Vertel eens een grappig verhaal uit Nederland!" Alle ogen zijn op jou gericht…',
  steps: [
    { npc: 'Alors, raconte-nous une histoire drôle des Pays-Bas !', nl: 'Nou, vertel ons eens een grappig verhaal uit Nederland!', who: 'pere' },
    { choose: [
      { fr: 'D\'accord ! Alors, l\'année dernière, il m\'est arrivé un truc incroyable…', nl: 'Oké! Nou, vorig jaar overkwam me iets ongelooflijks…', ok: true, re: 'Oh, ça commence bien ! Vas-y !', reNl: 'Oh, dat begint goed! Vertel!' },
      { fr: 'D\'accord ! Alors, l\'année prochaine, il m\'est arrivé…', nl: '(tijd klopt niet)', why: 'L\'année prochaine = volgend jaar. Voor een verhaal uit het verleden: l\'année dernière.' },
    ] },
    { note: 'Een verhaal vertellen: het decor in de imparfait (wat was de situatie?), de gebeurtenissen in het passé composé (wat gebeurde er?).' },
    { choose: [
      { fr: 'Il faisait très froid, et tous les canaux étaient gelés.', nl: 'Het was heel koud, en alle grachten waren bevroren.', ok: true, re: 'Gelés ? Comme sur les cartes postales !', reNl: 'Bevroren? Net als op de ansichtkaarten!' },
      { fr: 'Il a fait très froid, et tous les canaux ont été gelés.', nl: '(passé composé voor het decor)', why: 'Niet helemaal fout, maar voor de beschrijving van de situatie gebruik je de imparfait: il faisait, étaient.' },
    ] },
    { say: 'Alors, j\'ai décidé d\'aller au travail en patins à glace.', nl: 'Dus besloot ik op schaatsen naar mijn werk te gaan.' },
    { npc: 'En patins ?! Au travail ? Vous êtes fous, les Hollandais !', nl: 'Op schaatsen?! Naar je werk? Jullie zijn gek, jullie Hollanders!', who: 'cousine' },
    { choose: [
      { fr: 'Attends, ce n\'est pas fini ! Au bout de dix minutes, je suis tombé… juste devant mon patron.', nl: 'Wacht, het is nog niet afgelopen! Na tien minuten viel ik… precies voor de voeten van mijn baas.', ok: true, re: 'Non ! Et qu\'est-ce qu\'il a dit ?', reNl: 'Nee! En wat zei hij?' },
      { fr: 'Attends ! Au bout de dix minutes, je tombais.', nl: '(imparfait voor een gebeurtenis)', why: 'Vallen is één gebeurtenis → passé composé: je suis tombé.' },
    ] },
    { say: 'Il m\'a regardé et il a dit : « Tu es en retard. Mais bon, joli style ! »', nl: 'Hij keek me aan en zei: "Je bent te laat. Maar goed, mooie stijl!"' },
    { npc: 'Ha ha ha ! Excellent ! Et après ?', nl: 'Hahaha! Geweldig! En toen?', who: 'pere' },
    { choose: [
      { fr: 'Bref, depuis ce jour-là, je prends le vélo. Même quand il gèle !', nl: 'Kortom, sinds die dag neem ik de fiets. Zelfs als het vriest!', ok: true, re: 'Ha ! Tu racontes très bien les histoires, toi. Encore une !', reNl: 'Ha! Jij vertelt heel goed. Nog eentje!' },
      { fr: 'Bref, depuis ce jour-là, j\'ai pris le vélo.', nl: '(depuis + passé composé)', why: 'Bij "depuis" (sindsdien, nog steeds zo) gebruik je de tegenwoordige tijd: je prends.' },
    ] },
    { note: 'Goed gedaan! Handige vertelwoordjes: alors (nou), au bout de (na), juste (precies), bref (kortom), depuis ce jour-là (sinds die dag).' },
  ],
},
{
  id: 'film', level: 'B1', emoji: '🎬', title: 'Een film bespreken', sub: 'Mening geven, subjonctif, nuance',
  cast: { cousine: { name: 'Julie', av: '👩', desc: 'nicht, filmliefhebber' } },
  intro: 'Jullie zijn net met nicht Julie naar de bioscoop geweest. Zij vond de film geweldig. Jij… iets minder.',
  steps: [
    { npc: 'Alors, tu as aimé ? Moi, j\'ai adoré ! C\'est le meilleur film de l\'année !', nl: 'En, vond je het leuk? Ik vond hem geweldig! Het is de beste film van het jaar!', who: 'cousine' },
    { choose: [
      { fr: 'Franchement ? Les acteurs étaient très bons, mais je l\'ai trouvé un peu long.', nl: 'Eerlijk? De acteurs waren heel goed, maar ik vond hem een beetje lang.', ok: true, re: 'Long ? Trois heures, ce n\'est pas long !', reNl: 'Lang? Drie uur is toch niet lang!' },
      { fr: 'C\'était nul. Point.', nl: 'Hij was waardeloos. Punt.', why: 'Mag natuurlijk, maar Julie was zo enthousiast… Probeer het genuanceerder: "les acteurs étaient bons, mais…"' },
    ] },
    { say: 'Ha ha, je ne suis pas sûr que tout le monde soit d\'accord avec toi !', nl: 'Haha, ik weet niet zeker of iedereen het met je eens is!' },
    { note: '"Je ne suis pas sûr que" + subjonctif (soit). Twijfel → subjonctif.' },
    { npc: 'D\'accord, d\'accord. Mais la fin ? Tu ne trouves pas qu\'elle était géniale ?', nl: 'Oké, oké. Maar het einde? Vind je niet dat dat geniaal was?', who: 'cousine' },
    { choose: [
      { fr: 'Si, la fin était vraiment surprenante. Je ne m\'y attendais pas du tout.', nl: 'Jawel, het einde was echt verrassend. Dat had ik totaal niet verwacht.', ok: true, re: 'Tu vois ! Je savais que tu aimerais.', reNl: 'Zie je wel! Ik wist dat je het leuk zou vinden.' },
      { fr: 'Oui, la fin était vraiment surprenante.', nl: 'Ja, het einde was verrassend.', ok: true, re: 'Ah, tu vois ! Petit à petit, tu changes d\'avis !', reNl: 'Ah, zie je! Langzaamaan verander je van mening!' },
    ] },
    { note: 'Wist je? Op een ontkennende vraag ("Tu ne trouves pas… ?") antwoord je "Si !" als je het wél vindt, niet "Oui".' },
    { npc: 'Et l\'acteur principal ? Il est beau, hein ?', nl: 'En de hoofdrolspeler? Knap, hè?', who: 'cousine' },
    { choose: [
      { fr: 'Il joue bien, c\'est vrai. Mais à mon avis, l\'actrice était encore meilleure.', nl: 'Hij speelt goed, dat is waar. Maar volgens mij was de actrice nog beter.', ok: true, re: 'Ah oui, elle était incroyable. Ça, je te l\'accorde.', reNl: 'Ah ja, zij was ongelooflijk. Dat geef ik toe.' },
      { fr: 'Il joue bien. Mais l\'actrice était encore plus bonne.', nl: '(plus bonne)', why: 'Nooit "plus bonne"! Zeg: meilleure.' },
    ] },
    { npc: 'Bon, la prochaine fois, c\'est toi qui choisis le film. Mais pas de film d\'action, hein !', nl: 'Goed, de volgende keer kies jij de film. Maar geen actiefilm, hè!', who: 'cousine' },
    { say: 'Marché conclu ! Mais il faut que tu viennes avec du pop-corn.', nl: 'Deal! Maar dan moet jij met popcorn komen.' },
  ],
},
];
