export default [
// ═════════════════════════════════════════════
{
  id: 'markt', level: 'A1', emoji: '🧺', title: 'Met oma naar de markt', sub: 'Boodschappen, hoeveelheden, prijzen',
  cast: { mamie: { name: 'Mamie Jeanne', av: '👵', desc: 'oma' }, vendeur: { name: 'Marcel', av: '👨‍🌾', desc: 'groenteboer' } },
  intro: 'Zaterdagochtend. Oma neemt je mee naar de markt en laat jou bestellen. "Zo leer je het!" zegt ze.',
  steps: [
    { npc: 'Bonjour Marcel ! Aujourd\'hui, c\'est mon petit-fils qui commande. Il apprend le français !', nl: 'Goedemorgen Marcel! Vandaag bestelt mijn kleinzoon. Hij leert Frans!', who: 'mamie' },
    { npc: 'Ah, très bien ! Bonjour monsieur ! Qu\'est-ce que je vous sers ?', nl: 'Ah, heel goed! Goedemorgen meneer! Wat mag het zijn?', who: 'vendeur' },
    { choose: [
      { fr: 'Bonjour ! Je voudrais un kilo de tomates, s\'il vous plaît.', nl: 'Goedemorgen! Ik wil graag een kilo tomaten, alstublieft.', ok: true, re: 'Un kilo de tomates, voilà ! Et avec ceci ?', reNl: 'Een kilo tomaten, alstublieft! Anders nog iets?' },
      { fr: 'Tomates. Donne.', nl: 'Tomaten. Geef.', why: 'Haha, een beetje bot! Gebruik "Je voudrais…" en "s\'il vous plaît".' },
      { fr: 'Je voudrais un kilo de tomate, s\'il te plaît.', nl: '(tu tegen de verkoper)', why: 'Tegen een verkoper zeg je vous: s\'il vous plaît. En meervoud: tomates.' },
    ] },
    { note: '"Et avec ceci ?" = "Anders nog iets?" Dit hoor je in élke Franse winkel.' },
    { say: 'Une salade et six œufs, s\'il vous plaît.', nl: 'Een krop sla en zes eieren, alstublieft.' },
    { npc: 'Les fraises sont très bonnes aujourd\'hui. Vous voulez goûter ?', nl: 'De aardbeien zijn erg lekker vandaag. Wilt u proeven?', who: 'vendeur' },
    { choose: [
      { fr: 'Oui, avec plaisir ! … Mmm, elles sont délicieuses !', nl: 'Ja, graag! … Mmm, ze zijn heerlijk!', ok: true, re: 'Ce sont des fraises de Plougastel, les meilleures !', reNl: 'Het zijn aardbeien uit Plougastel, de beste!' },
      { fr: 'Non merci, je n\'aime pas les fraises.', nl: 'Nee dank u, ik hou niet van aardbeien.', ok: true, re: 'Pas de problème ! Chacun ses goûts.', reNl: 'Geen probleem! Ieder z\'n smaak.' },
    ] },
    { npc: 'Prends une barquette de fraises pour le dessert, mon chéri.', nl: 'Neem een bakje aardbeien voor het toetje, lieverd.', who: 'mamie' },
    { say: 'Et une barquette de fraises. C\'est combien ?', nl: 'En een bakje aardbeien. Hoeveel is het?' },
    { npc: 'Alors… ça fait douze euros cinquante.', nl: 'Even kijken… dat is twaalf euro vijftig.', who: 'vendeur' },
    { choose: [
      { fr: 'Voilà vingt euros.', nl: 'Alstublieft, twintig euro.', ok: true, re: 'Merci ! Je vous rends sept euros cinquante.', reNl: 'Dank u! U krijgt zeven euro vijftig terug.' },
      { fr: 'Voilà deux euros.', nl: 'Alstublieft, twee euro.', why: 'Douze euros cinquante = €12,50. Twee euro is wat weinig 😄' },
    ] },
    { npc: 'Merci, bonne journée ! Et bravo pour votre français !', nl: 'Dank u, fijne dag! En bravo voor uw Frans!', who: 'vendeur' },
    { say: 'Merci, bonne journée à vous aussi !', nl: 'Dank u, ook een fijne dag!' },
    { npc: 'Tu vois ? Tu parles comme un vrai Français. Maintenant, on va boire un café !', nl: 'Zie je wel? Je praat als een echte Fransman. Nu gaan we koffie drinken!', who: 'mamie' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'telaat', level: 'A2', emoji: '⏰', title: 'Te laat voor het eten', sub: 'Sorry zeggen en uitleggen',
  cast: { pere: { name: 'Alain', av: '👨‍🦳', desc: 'schoonvader' }, mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' } },
  intro: 'Jullie zouden om 12 uur komen lunchen. Het is nu 13:15. Er stond een enorme file bij Lyon…',
  steps: [
    { npc: 'Ah, vous voilà enfin ! On commençait à s\'inquiéter !', nl: 'Ah, daar zijn jullie eindelijk! We begonnen ons zorgen te maken!', who: 'mere' },
    { choose: [
      { fr: 'Désolé pour le retard ! Il y avait des bouchons énormes.', nl: 'Sorry dat we te laat zijn! Er stonden enorme files.', ok: true, re: 'Ah, les bouchons de Lyon… Ça arrive tout le temps !', reNl: 'Ah, de files bij Lyon… Dat gebeurt constant!' },
      { fr: 'Bonjour ! On est en avance !', nl: 'Hallo! We zijn te vroeg!', why: 'Eh… jullie zijn een uur te láát! En retard, niet en avance.' },
      { fr: 'Désolé, je suis retard.', nl: '(fout)', why: 'Bijna! Het is: je suis en retard (met "en").' },
    ] },
    { npc: 'Vous auriez pu appeler !', nl: 'Jullie hadden kunnen bellen!', who: 'pere' },
    { choose: [
      { fr: 'Tu as raison. Mais mon téléphone n\'avait plus de batterie.', nl: 'Je hebt gelijk. Maar mijn telefoon was leeg.', ok: true, re: 'Bon, l\'important, c\'est que vous soyez là.', reNl: 'Nou, het belangrijkste is dat jullie er zijn.' },
      { fr: 'Non, je n\'aime pas téléphoner.', nl: 'Nee, ik bel niet graag.', why: 'Eerlijk, maar niet zo handig om nu te zeggen 😅 Geef een goede reden of zeg sorry.' },
    ] },
    { say: 'Je suis vraiment désolé. Ça ne se reproduira pas.', nl: 'Het spijt me echt. Het zal niet meer gebeuren.' },
    { npc: 'Ne t\'inquiète pas ! Le gigot est resté au chaud. Mais les enfants ont déjà mangé tout le fromage…', nl: 'Maak je geen zorgen! De lamsbout is warm gebleven. Maar de kinderen hebben al alle kaas opgegeten…', who: 'mere' },
    { choose: [
      { fr: 'Tant pis pour le fromage ! J\'ai une faim de loup.', nl: 'Jammer van de kaas! Ik heb honger als een paard.', ok: true, re: 'Ha ha, alors à table !', reNl: 'Haha, nou, aan tafel dan!' },
      { fr: 'Tant mieux pour le fromage !', nl: 'Mooi zo van de kaas!', why: '"Tant mieux" = mooi zo. Je bedoelt "tant pis" = jammer.' },
    ] },
    { npc: 'Alors, à part les bouchons, la route s\'est bien passée ?', nl: 'En, behalve de files, ging de reis goed?', who: 'pere' },
    { say: 'Oui, on s\'est arrêtés pour manger un sandwich et on a pris de l\'essence.', nl: 'Ja, we zijn gestopt om een broodje te eten en we hebben getankt.' },
    { npc: 'Un sandwich ?! Avant un repas chez Sylvie ? Malheureux !', nl: 'Een broodje?! Vóór een maaltijd bij Sylvie? Ongelukkige!', who: 'pere' },
    { choose: [
      { fr: 'Juste un tout petit ! Il me reste beaucoup de place, promis !', nl: 'Maar een heel klein broodje! Ik heb nog veel ruimte over, beloofd!', ok: true, re: 'J\'espère bien ! Il y a quatre plats.', reNl: 'Dat hoop ik maar! Er zijn vier gangen.' },
      { fr: 'Oui, et maintenant je n\'ai plus faim.', nl: 'Ja, en nu heb ik geen honger meer.', why: 'Oei! Dat is de ergste zin die je bij een Franse schoonmoeder kunt zeggen 😱' },
    ] },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'werk', level: 'A2', emoji: '💼', title: 'Over je werk vertellen', sub: 'Bij het aperitief',
  cast: { oncle: { name: 'Tonton Bernard', av: '🧔', desc: 'oom' } },
  intro: 'Bij de borrel komt oom Bernard naast je zitten. "Vertel eens, wat doe jij eigenlijk?"',
  steps: [
    { npc: 'Alors, qu\'est-ce que tu fais dans la vie, toi ?', nl: 'Zeg, wat doe jij eigenlijk voor werk?', who: 'oncle' },
    { choose: [
      { fr: 'Je travaille dans l\'informatique. Je suis développeur.', nl: 'Ik werk in de IT. Ik ben ontwikkelaar.', ok: true, re: 'Ah, l\'informatique ! Tu peux réparer mon imprimante, alors ?', reNl: 'Ah, IT! Dan kun je zeker mijn printer repareren?' },
      { fr: 'Je fais la vie.', nl: 'Ik doe het leven.', why: '"Qu\'est-ce que tu fais dans la vie" = wat voor werk doe je. Vertel over je baan!' },
    ] },
    { note: 'Elke IT\'er kent dit: in élk land vraagt de familie of je hun printer kunt maken. 😄 Vul in je gedachten je eigen beroep in!' },
    { say: 'Ha ha, peut-être. Mais je ne promets rien !', nl: 'Haha, misschien. Maar ik beloof niets!' },
    { npc: 'Et tu travailles où ? Dans un bureau ?', nl: 'En waar werk je? Op een kantoor?', who: 'oncle' },
    { choose: [
      { fr: 'Je travaille souvent à la maison, et deux jours par semaine au bureau.', nl: 'Ik werk vaak thuis, en twee dagen per week op kantoor.', ok: true, re: 'Le télétravail ! Moi, je ne pourrais pas. Je mangerais toute la journée !', reNl: 'Thuiswerken! Dat zou ik niet kunnen. Ik zou de hele dag eten!' },
      { fr: 'Je travaille dans une maison de bureau.', nl: '(onduidelijk)', why: 'Niet helemaal duidelijk. Probeer: à la maison (thuis) en au bureau (op kantoor).' },
    ] },
    { npc: 'Et ça te plaît ?', nl: 'En vind je het leuk?', who: 'oncle' },
    { choose: [
      { fr: 'Oui, j\'aime beaucoup mon travail. Mes collègues sont très sympas.', nl: 'Ja, ik vind mijn werk erg leuk. Mijn collega\'s zijn heel aardig.', ok: true, re: 'C\'est le plus important !', reNl: 'Dat is het belangrijkste!' },
      { fr: 'Bof, c\'est pas toujours facile, mais ça va.', nl: 'Mwah, het is niet altijd makkelijk, maar het gaat.', ok: true, re: 'Je comprends. Le travail, c\'est le travail !', reNl: 'Ik snap het. Werk is werk!' },
    ] },
    { note: '"Bof" = "mwah". Een typisch Frans geluidje als iets niet geweldig is. Heel handig!' },
    { say: 'Et toi, Bernard ? Tu es à la retraite, non ?', nl: 'En jij, Bernard? Jij bent met pensioen, toch?' },
    { npc: 'Oui, depuis trois ans ! Avant, j\'étais boulanger. Je me levais à trois heures du matin pendant quarante ans !', nl: 'Ja, sinds drie jaar! Daarvoor was ik bakker. Veertig jaar lang stond ik om drie uur \'s nachts op!', who: 'oncle' },
    { choose: [
      { fr: 'À trois heures ?! Et maintenant, tu fais la grasse matinée ?', nl: 'Om drie uur?! En nu slaap je zeker lekker uit?', ok: true, re: 'Tu rigoles ? Je me réveille toujours à trois heures ! L\'habitude…', reNl: 'Maak je een grapje? Ik word nog steeds om drie uur wakker! De gewoonte…' },
      { fr: 'À trois heures ?! Tu te lèves à trois heures demain ?', nl: 'Om drie uur?! Sta je morgen om drie uur op?', why: 'Hij vertelde over vroeger (imparfait). Vraag liever hoe het nu is.' },
    ] },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'spelletjes', level: 'A2', emoji: '🎲', title: 'Spelletjesavond', sub: 'Jouw beurt! Valsspelen! Gewonnen!',
  cast: { cousine: { name: 'Julie', av: '👩', desc: 'nicht' }, lucas: { name: 'Lucas', av: '👦', desc: 'neefje, 7' } },
  intro: 'Na het eten wordt de Mille Bornes-doos (een Frans kaartspel) tevoorschijn gehaald. Lucas wint altijd. Áltijd.',
  steps: [
    { npc: 'On fait un jeu ? Une partie de cartes ?', nl: 'Zullen we een spelletje doen? Een potje kaarten?', who: 'cousine' },
    { say: 'Oui, bonne idée ! Mais je ne connais pas les règles.', nl: 'Ja, goed idee! Maar ik ken de regels niet.' },
    { npc: 'C\'est facile, je vais t\'expliquer. Lucas, tu distribues les cartes ?', nl: 'Het is makkelijk, ik leg het je uit. Lucas, deel jij de kaarten?', who: 'cousine' },
    { npc: 'Oui ! Six cartes chacun. C\'est toi qui commences !', nl: 'Ja! Zes kaarten ieder. Jij mag beginnen!', who: 'lucas' },
    { choose: [
      { fr: 'D\'accord, je joue cette carte. À toi !', nl: 'Oké, ik speel deze kaart. Jouw beurt!', ok: true, re: 'Ha ! Je te mets une crevaison ! Tu ne peux plus avancer !', reNl: 'Ha! Ik geef je een lekke band! Je kunt niet meer verder!' },
      { fr: 'Je passe mon tour pour toujours.', nl: 'Ik sla voor altijd mijn beurt over.', why: 'Zo win je nooit! Speel een kaart en zeg "À toi !" (jouw beurt).' },
    ] },
    { npc: 'C\'est à qui ? C\'est à moi ? Non, c\'est à toi, Julie !', nl: 'Wie is er aan de beurt? Ik? Nee, jij, Julie!', who: 'lucas' },
    { note: '"C\'est à qui ?" = wie is er aan de beurt? "C\'est à moi / à toi" = ik ben / jij bent aan de beurt.' },
    { npc: 'Lucas ! Tu as regardé mes cartes ! Tricheur !', nl: 'Lucas! Je hebt in mijn kaarten gekeken! Valsspeler!', who: 'cousine' },
    { npc: 'Même pas vrai ! Je les ai juste… vues par hasard.', nl: 'Helemaal niet waar! Ik heb ze alleen… per ongeluk gezien.', who: 'lucas' },
    { choose: [
      { fr: 'Ha ha ! Lucas, tu es un petit malin, toi.', nl: 'Haha! Lucas, jij bent een slimmerik.', ok: true, re: 'Merci ! Et j\'ai encore gagné !', reNl: 'Dank je! En ik heb wéér gewonnen!' },
      { fr: 'Lucas, tu es très gentil.', nl: 'Lucas, je bent heel lief.', why: 'Hij speelt vals… "malin" (slimmerik/deugniet) past beter 😄' },
    ] },
    { say: 'Bravo, Lucas ! On fait une revanche ?', nl: 'Bravo, Lucas! Doen we nog een potje (revanche)?' },
    { npc: 'Oui ! Mais cette fois, c\'est moi qui distribue. Et Lucas, les mains sur la table !', nl: 'Ja! Maar deze keer deel ik. En Lucas, handen op tafel!', who: 'cousine' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'ziek', level: 'A2', emoji: '🤒', title: 'Je voelt je niet lekker', sub: 'Lichaam, pijn, beterschap',
  cast: { mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' } },
  intro: 'De ochtend na het familiefeest. Je hebt iets te veel kaas gegeten (en misschien wijn gedronken). Schoonmama maakt zich zorgen.',
  steps: [
    { npc: 'Bonjour ! Oh là là, tu as une petite mine. Ça ne va pas ?', nl: 'Goedemorgen! Jeetje, je ziet er niet zo fris uit. Gaat het niet?', who: 'mere' },
    { choose: [
      { fr: 'Pas très bien. J\'ai mal à la tête et au ventre.', nl: 'Niet zo goed. Ik heb hoofdpijn en buikpijn.', ok: true, re: 'Mon pauvre ! C\'est le fromage d\'hier soir, je pense.', reNl: 'Arme jongen! Het is de kaas van gisteravond, denk ik.' },
      { fr: 'J\'ai mal à le tête.', nl: '(fout lidwoord)', why: 'La tête is vrouwelijk: j\'ai mal à la tête. (En à + le = au: mal au ventre.)' },
      { fr: 'Je suis mal.', nl: 'Ik ben slecht.', why: 'Zo zeg je het niet. Gebruik: "Je ne me sens pas bien" of "J\'ai mal à…"' },
    ] },
    { say: 'Je crois que j\'ai trop mangé hier.', nl: 'Ik denk dat ik gisteren te veel heb gegeten.' },
    { npc: 'Ah, ça, c\'est la crise de foie ! Tout le monde l\'a eue au moins une fois.', nl: 'Ah, dat is een "leveraanval"! Iedereen heeft dat minstens één keer gehad.', who: 'mere' },
    { note: '"La crise de foie" (letterlijk: leveraanval) is wat Fransen zeggen als je je beroerd voelt na te veel eten. Heel Frans!' },
    { npc: 'Tu as de la fièvre ? Tu veux que j\'appelle le médecin ?', nl: 'Heb je koorts? Wil je dat ik de dokter bel?', who: 'mere' },
    { choose: [
      { fr: 'Non, ce n\'est pas nécessaire. Je vais juste me reposer un peu.', nl: 'Nee, dat is niet nodig. Ik ga gewoon wat rusten.', ok: true, re: 'D\'accord. Je vais te faire une tisane.', reNl: 'Oké. Ik maak een kruidenthee voor je.' },
      { fr: 'Oui, appelle les pompiers !', nl: 'Ja, bel de brandweer!', why: 'Een beetje overdreven voor te veel kaas 😄' },
    ] },
    { say: 'Merci, c\'est très gentil. Tu as un médicament contre le mal de tête ?', nl: 'Dank je, heel lief. Heb je een medicijn tegen hoofdpijn?' },
    { npc: 'Oui, il y a du paracétamol dans la salle de bains, dans le placard à gauche.', nl: 'Ja, er is paracetamol in de badkamer, in het kastje links.', who: 'mere' },
    { npc: 'Et pas de fromage aujourd\'hui, hein ! Seulement de la soupe et du riz.', nl: 'En vandaag geen kaas, hè! Alleen soep en rijst.', who: 'mere' },
    { choose: [
      { fr: 'Promis ! Pas de fromage… jusqu\'à demain.', nl: 'Beloofd! Geen kaas… tot morgen.', ok: true, re: 'Ha ha ! Toi, tu es devenu un vrai Français. Repose-toi bien !', reNl: 'Haha! Jij bent een echte Fransman geworden. Rust goed uit!' },
      { fr: 'Promis ! Je mange du fromage maintenant.', nl: 'Beloofd! Ik eet nu kaas.', why: 'Dat is het tegenovergestelde van wat ze vroeg! 😄' },
    ] },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'afscheid', level: 'B1', emoji: '🚗', title: 'Afscheid na het logeerweekend', sub: 'Bedanken, uitnodigen, beloven',
  cast: { pere: { name: 'Alain', av: '👨‍🦳', desc: 'schoonvader' }, mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' }, mamie: { name: 'Mamie Jeanne', av: '👵', desc: 'oma' } },
  intro: 'Zondagmiddag. De auto is ingepakt (met drie kilo kaas en vijf flessen wijn). Tijd om afscheid te nemen.',
  steps: [
    { npc: 'Vous avez tout ? Vous n\'avez rien oublié ?', nl: 'Hebben jullie alles? Niets vergeten?', who: 'mere' },
    { say: 'Je crois qu\'on a tout. Merci pour ce week-end, c\'était vraiment génial.', nl: 'Ik denk dat we alles hebben. Bedankt voor dit weekend, het was echt geweldig.' },
    { npc: 'C\'est nous qui vous remercions ! Ça nous a fait tellement plaisir de vous avoir ici.', nl: 'Wíj moeten jullie bedanken! We vonden het zo fijn om jullie hier te hebben.', who: 'mere' },
    { npc: 'Et la prochaine fois, c\'est vous qui nous invitez aux Pays-Bas !', nl: 'En de volgende keer nodigen jullie ons uit in Nederland!', who: 'pere' },
    { choose: [
      { fr: 'Avec plaisir ! Vous pourriez venir au printemps, quand les tulipes sont en fleurs.', nl: 'Graag! Jullie zouden in de lente kunnen komen, als de tulpen bloeien.', ok: true, re: 'Les tulipes ! Ça, ce serait magnifique.', reNl: 'De tulpen! Dat zou prachtig zijn.' },
      { fr: 'Avec plaisir ! Vous êtes venus au printemps.', nl: '(verleden tijd)', why: 'Ze zijn nog niet geweest! Gebruik de conditionnel: vous pourriez venir…' },
    ] },
    { npc: 'Mais je vous préviens : je ne mangerai pas de hareng cru !', nl: 'Maar ik waarschuw jullie: ik eet geen rauwe haring!', who: 'pere' },
    { say: 'Il faut que tu goûtes au moins une fois ! C\'est délicieux.', nl: 'Je moet het minstens één keer proeven! Het is heerlijk.' },
    { npc: 'On verra… Si tu goûtes encore mon fromage préféré, je goûterai ton hareng. Marché conclu ?', nl: 'We zullen zien… Als jij nog eens mijn favoriete kaas proeft, proef ik jouw haring. Deal?', who: 'pere' },
    { choose: [
      { fr: 'Marché conclu !', nl: 'Deal!', ok: true, re: 'Ha ha ! Topez là !', reNl: 'Haha! Geef me de vijf!' },
      { fr: 'Marché fermé !', nl: 'Markt gesloten!', why: '"Marché conclu" = deal (letterlijk: overeenkomst gesloten). "Marché fermé" is een dichte markt 😄' },
    ] },
    { npc: 'Viens là, mon grand. Tu sais, ton français a fait beaucoup de progrès. Je suis fière de toi.', nl: 'Kom eens hier, jongen. Weet je, je Frans is enorm vooruitgegaan. Ik ben trots op je.', who: 'mamie' },
    { choose: [
      { fr: 'Merci, Mamie. C\'est grâce à vous tous. Vous allez me manquer.', nl: 'Dank je, oma. Dat is dankzij jullie allemaal. Ik ga jullie missen.', ok: true, re: 'Toi aussi, tu vas nous manquer. Appelle-moi quand vous êtes arrivés !', reNl: 'Wij gaan jou ook missen. Bel me als jullie er zijn!' },
      { fr: 'Merci, Mamie. Vous allez me manger.', nl: 'Dank je, oma. Jullie gaan me opeten.', why: 'Haha, "manger" (eten) ≠ "manquer" (missen)! Een klassieke fout 😄' },
    ] },
    { note: 'Let op: "Tu me manques" = ik mis jou (letterlijk: jij ontbreekt mij). De volgorde is omgekeerd vergeleken met het Nederlands!' },
    { say: 'Promis, on vous envoie un message. Bisous à tous !', nl: 'Beloofd, we sturen jullie een berichtje. Kusjes aan iedereen!' },
    { npc: 'Bonne route ! Et soyez prudents !', nl: 'Goede reis! En rij voorzichtig!', who: 'pere' },
  ],
},
];
