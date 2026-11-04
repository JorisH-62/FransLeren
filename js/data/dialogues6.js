export default [
{
  id: 'hobbys', level: 'A2', emoji: '☕', title: 'Bij de koffie: hobby\'s en vrije tijd', sub: 'Vertellen wat je graag doet',
  cast: { mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' } },
  intro: 'Zondagmiddag, koffie en taart. Schoonmoeder Sylvie wil je beter leren kennen.',
  steps: [
    { npc: 'Alors, qu\'est-ce que tu fais quand tu ne travailles pas ?', nl: 'Zeg, wat doe je als je niet werkt?', who: 'mere' },
    { choose: [
      { fr: 'J\'aime beaucoup faire du vélo et cuisiner.', nl: 'Ik fiets en kook graag.', ok: true, re: 'Du vélo ! Évidemment, tu es hollandais !', reNl: 'Fietsen! Natuurlijk, je bent Nederlander!' },
      { fr: 'J\'aime beaucoup de faire du vélo.', nl: '(fout: de)', why: 'Na aimer komt direct het werkwoord: j\'aime faire du vélo (zonder "de").' },
    ] },
    { npc: 'Et tu cuisines quoi, par exemple ?', nl: 'En wat kook je bijvoorbeeld?', who: 'mere' },
    { say: 'Je fais souvent des pâtes, et le dimanche, je fais une soupe aux légumes.', nl: 'Ik maak vaak pasta, en op zondag maak ik groentesoep.' },
    { npc: 'Oh, très bien ! Moi, je fais du jardinage. J\'ai des tomates, des courgettes et beaucoup trop de salades !', nl: 'Oh, heel goed! Ik tuinier. Ik heb tomaten, courgettes en veel te veel sla!', who: 'mere' },
    { choose: [
      { fr: 'C\'est super ! Tu me montres ton jardin après le café ?', nl: 'Super! Laat je me na de koffie je tuin zien?', ok: true, re: 'Avec plaisir ! Et tu repartiras avec des salades, je te préviens.', reNl: 'Graag! En je gaat naar huis met sla, ik waarschuw je.' },
      { fr: 'Je n\'aime pas les salades.', nl: 'Ik hou niet van sla.', why: 'Eerlijk… maar ze is trots op haar tuin! Toon liever interesse.' },
    ] },
    { npc: 'Et le week-end, vous faites quoi, en général ?', nl: 'En in het weekend, wat doen jullie meestal?', who: 'mere' },
    { choose: [
      { fr: 'Le samedi, on fait souvent une promenade. Et le dimanche, on se repose.', nl: 'Op zaterdag maken we vaak een wandeling. En op zondag rusten we uit.', ok: true, re: 'C\'est bien, il faut se reposer.', reNl: 'Dat is goed, je moet uitrusten.' },
      { fr: 'Le samedi, on a fait une promenade.', nl: '(verleden tijd)', why: 'Ze vraagt wat jullie meestal doen: gebruik de tegenwoordige tijd (on fait).' },
    ] },
    { note: 'Gewoontes: "le samedi" (met lidwoord) = elke zaterdag. "Samedi" (zonder) = aanstaande/afgelopen zaterdag.' },
    { npc: 'Tu fais du sport aussi ?', nl: 'Doe je ook aan sport?', who: 'mere' },
    { say: 'Je joue au tennis une fois par semaine. Mais je ne suis pas très bon !', nl: 'Ik tennis één keer per week. Maar ik ben niet zo goed!' },
    { npc: 'Ha ha, l\'important, c\'est de participer ! Allez, encore un peu de tarte ?', nl: 'Haha, meedoen is belangrijker dan winnen! Kom, nog een stukje taart?', who: 'mere' },
    { say: 'Oui, avec plaisir. Elle est délicieuse !', nl: 'Ja, graag. Hij is heerlijk!' },
  ],
},
{
  id: 'uitje', level: 'A2', emoji: '🗺️', title: 'Een uitje plannen', sub: 'Voorstellen doen, futur proche, afspreken',
  cast: { pere: { name: 'Alain', av: '👨‍🦳', desc: 'schoonvader' }, cousine: { name: 'Julie', av: '👩', desc: 'nicht' } },
  intro: 'Het is zaterdagochtend en de zon schijnt. Wat gaan we vandaag doen met z\'n allen?',
  steps: [
    { npc: 'Il fait beau ! Qu\'est-ce qu\'on fait aujourd\'hui ?', nl: 'Het is mooi weer! Wat doen we vandaag?', who: 'pere' },
    { choose: [
      { fr: 'On pourrait aller à la plage ?', nl: 'We zouden naar het strand kunnen gaan?', ok: true, re: 'Bonne idée, mais il y aura beaucoup de monde…', reNl: 'Goed idee, maar het zal er erg druk zijn…' },
      { fr: 'Et si on visitait le château ?', nl: 'Zullen we het kasteel bezoeken?', ok: true, re: 'Le château ? Je l\'ai déjà vu cinquante fois… mais pourquoi pas !', reNl: 'Het kasteel? Dat heb ik al vijftig keer gezien… maar waarom niet!' },
      { fr: 'On va dormir.', nl: 'We gaan slapen.', why: 'Met dit mooie weer? Doe een voorstel: "On pourrait…" of "Et si on…?"' },
    ] },
    { note: 'Voorstellen doen: "On pourrait + infinitief" (we zouden kunnen…) of "Et si on + imparfait ?" (zullen we…?). Beide heel gebruikelijk!' },
    { npc: 'Moi, je propose un pique-nique au bord du lac. Il y a des tables et on peut se baigner.', nl: 'Ik stel een picknick voor aan het meer. Er zijn tafels en je kunt er zwemmen.', who: 'cousine' },
    { choose: [
      { fr: 'Super idée ! Je vais préparer des sandwichs.', nl: 'Super idee! Ik ga broodjes maken.', ok: true, re: 'Parfait ! Et moi, je vais acheter des boissons.', reNl: 'Perfect! En ik ga drinken kopen.' },
      { fr: 'Super idée ! J\'ai préparé des sandwichs hier.', nl: 'Super idee! Ik heb gisteren broodjes gemaakt.', why: 'Oudbakken broodjes van gisteren? 😄 Gebruik de nabije toekomst: je vais préparer.' },
    ] },
    { npc: 'On part à quelle heure ?', nl: 'Hoe laat vertrekken we?', who: 'pere' },
    { say: 'On part à onze heures ? Comme ça, on mange là-bas.', nl: 'Vertrekken we om elf uur? Dan eten we daar.' },
    { npc: 'D\'accord. Et qui conduit ? Moi, je ne veux pas, la route est pleine de virages.', nl: 'Oké. En wie rijdt er? Ik wil niet, de weg zit vol bochten.', who: 'pere' },
    { choose: [
      { fr: 'Je peux conduire, si tu veux.', nl: 'Ik kan rijden, als je wilt.', ok: true, re: 'Merci ! Mais attention, en France, on roule à droite !', reNl: 'Dank je! Maar let op, in Frankrijk rijden we rechts!' },
      { fr: 'Je peux conduis.', nl: '(fout)', why: 'Na pouvoir komt het hele werkwoord: je peux conduire.' },
    ] },
    { say: 'Ha ha, aux Pays-Bas aussi ! Bon, rendez-vous dans la voiture à onze heures.', nl: 'Haha, in Nederland ook! Goed, afspraak om elf uur in de auto.' },
    { npc: 'N\'oubliez pas les maillots de bain ! Et la crème solaire !', nl: 'Vergeet de zwemkleding niet! En de zonnebrand!', who: 'cousine' },
  ],
},
];
