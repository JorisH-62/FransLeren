import more from './dialogues2.js';
import more3 from './dialogues3.js';
import more4 from './dialogues4.js';
// Gespreksoefeningen met de (schoon)familie.
// Stappen:
//  { npc: 'fr', nl: '...', who?: 'sleutel' }                    — iemand zegt iets
//  { choose: [ { fr, nl, ok: true, re?: 'fr', reNl?: '' }, { fr, nl, why: 'uitleg waarom niet' } ] }
//  { say: 'fr', nl: '...' }                                       — zeg/typ deze zin zelf
//  { note: 'tip in het Nederlands' }
const BASE = [
// ═════════════════════════════════════════════
{
  id: 'aankomst', level: 'A1', emoji: '🚪', title: 'Aankomst bij de schoonfamilie', sub: 'Begroeten, voorstellen, cadeautje geven',
  cast: { mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' }, pere: { name: 'Alain', av: '👨‍🦳', desc: 'schoonvader' } },
  intro: 'Je komt voor het eerst aan bij de ouders van je partner in Frankrijk. Je hebt bloemen bij je. Je staat voor de deur… ding dong!',
  steps: [
    { npc: 'Ah, vous êtes là ! Bonjour, bonjour ! Entrez !', nl: 'Ah, daar zijn jullie! Goedendag! Kom binnen!', who: 'mere' },
    { choose: [
      { fr: 'Bonjour madame ! Je suis très content de vous rencontrer.', nl: 'Goedendag mevrouw! Ik ben heel blij u te ontmoeten.', ok: true, re: 'Oh, moi aussi ! Mais appelle-moi Sylvie !', reNl: 'Oh, ik ook! Maar noem me Sylvie!' },
      { fr: 'Salut, ça roule ?', nl: 'Hoi, alles goed? (heel informeel)', why: 'Te informeel voor een eerste ontmoeting met je schoonmoeder! Begin met bonjour + vous.' },
      { fr: 'Au revoir, madame !', nl: 'Tot ziens, mevrouw!', why: 'Je komt net binnen — au revoir zeg je bij het weggaan. 😄' },
    ] },
    { note: 'Nu volgen de kusjes (la bise). Draai je hoofd eerst naar rechts (je raakt hun rechterwang) — of volg gewoon de ander.' },
    { npc: 'On se fait la bise ! Alors, vous avez fait bon voyage ?', nl: 'Laten we zoenen! Nou, hebben jullie een goede reis gehad?', who: 'mere' },
    { choose: [
      { fr: 'Oui, très bon voyage, merci ! Un peu long, mais ça va.', nl: 'Ja, een heel goede reis, dank u! Beetje lang, maar het gaat.', ok: true, re: 'Ah, c\'est loin, les Pays-Bas ! Vous devez être fatigués.', reNl: 'Ach, Nederland is ver! Jullie zullen wel moe zijn.' },
      { fr: 'Oui, j\'ai faim.', nl: 'Ja, ik heb honger.', why: 'Grappig eerlijk, maar ze vroeg naar de reis! Zeg eerst iets over de reis.' },
      { fr: 'Non, je n\'ai pas de voyage.', nl: 'Nee, ik heb geen reis.', why: 'Dat klopt niet helemaal… Ze vraagt of jullie een goede reis hadden.' },
    ] },
    { say: 'Tenez, c\'est pour vous. Ce sont des fleurs.', nl: 'Alstublieft, dit is voor u. Het zijn bloemen.' },
    { npc: 'Oh, elles sont magnifiques ! Il ne fallait pas ! Merci beaucoup !', nl: 'Oh, ze zijn prachtig! Dat had niet gehoeven! Heel erg bedankt!', who: 'mere' },
    { npc: 'Bonjour, bonjour ! Moi, c\'est Alain. Bienvenue chez nous !', nl: 'Hallo! Ik ben Alain. Welkom bij ons!', who: 'pere' },
    { choose: [
      { fr: 'Enchanté, Alain ! Merci pour l\'invitation.', nl: 'Aangenaam, Alain! Bedankt voor de uitnodiging.', ok: true, re: 'Avec plaisir ! Allez, entrez, on va prendre l\'apéro !', reNl: 'Graag gedaan! Kom binnen, we gaan een borrel drinken!' },
      { fr: 'Enchanté, Alain ! Je m\'appelle Alain.', nl: 'Aangenaam, Alain! Ik heet Alain.', why: 'Tenzij je toevallig ook Alain heet… 😄 Zeg je eigen naam, of bedank voor de uitnodiging.' },
      { fr: 'Bienvenue chez nous !', nl: 'Welkom bij ons!', why: 'Dat zegt de gastheer, niet de gast!' },
    ] },
    { npc: 'Alors, on se tutoie ? On est de la famille maintenant !', nl: 'Zullen we jij en jou zeggen? We zijn nu familie!', who: 'pere' },
    { choose: [
      { fr: 'Oui, avec plaisir !', nl: 'Ja, graag!', ok: true, re: 'Parfait ! Tu bois quoi ? Un petit rosé ?', reNl: 'Perfect! Wat drink je? Een rosétje?' },
      { fr: 'Non, je préfère vous dire vous… pour toujours.', nl: 'Nee, ik zeg liever u… voor altijd.', why: 'Dat is nogal afstandelijk als hij het zelf aanbiedt! Zeg gewoon ja.' },
    ] },
    { say: 'Oui, un petit rosé, avec plaisir !', nl: 'Ja, een rosétje, graag!' },
    { npc: 'Santé ! À notre nouvelle famille !', nl: 'Proost! Op onze nieuwe familie!', who: 'pere' },
    { say: 'Santé !', nl: 'Proost!' },
    { note: 'Tip: bij het proosten kijk je elkaar in de ogen. Niet doen = volgens Fransen zeven jaar slechte… nou ja, je snapt het. 😉' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'tafel', level: 'A1', emoji: '🍽️', title: 'Aan tafel met de familie', sub: 'Complimentjes, opscheppen, nee-dank-je',
  cast: { mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' }, oncle: { name: 'Tonton Bernard', av: '🧔', desc: 'oom' } },
  intro: 'Het is zondag, 13 uur. Twaalf mensen aan een lange tafel. Je schoonmoeder heeft een stoofpot gemaakt.',
  steps: [
    { npc: 'À table, tout le monde ! Bon appétit !', nl: 'Aan tafel, iedereen! Eet smakelijk!', who: 'mere' },
    { say: 'Bon appétit !', nl: 'Eet smakelijk!' },
    { npc: 'Alors, c\'est bon ? C\'est un bœuf bourguignon, la recette de ma grand-mère.', nl: 'En, is het lekker? Het is een bœuf bourguignon, het recept van mijn oma.', who: 'mere' },
    { choose: [
      { fr: 'C\'est délicieux ! Vraiment, c\'est très bon.', nl: 'Het is heerlijk! Echt, het is heel lekker.', ok: true, re: 'Oh, merci ! Ça me fait plaisir !', reNl: 'Oh, dank je! Wat fijn!' },
      { fr: 'C\'est pas mal.', nl: 'Het is niet slecht.', why: 'Technisch een compliment, maar schoonmama hoopt op meer enthousiasme! 😅' },
      { fr: 'Je suis délicieux.', nl: 'Ik ben heerlijk.', why: 'Zelfvertrouwen is goed, maar je wilde iets over het eten zeggen: c\'est délicieux!' },
    ] },
    { npc: 'Tu peux me passer le pain, s\'il te plaît ?', nl: 'Kun je me het brood aangeven?', who: 'oncle' },
    { choose: [
      { fr: 'Oui, bien sûr. Tiens !', nl: 'Ja, natuurlijk. Alsjeblieft!', ok: true, re: 'Merci ! Sans pain, ce n\'est pas un repas.', reNl: 'Dank je! Zonder brood is het geen maaltijd.' },
      { fr: 'Non, c\'est mon pain.', nl: 'Nee, het is mijn brood.', why: 'Haha, brutaal! In Frankrijk deel je het brood altijd.' },
    ] },
    { note: 'Wist je dat? In Frankrijk leg je het brood gewoon naast je bord op tafel, niet op het bord.' },
    { npc: 'Tu en reprends un peu ? Il en reste plein !', nl: 'Neem je nog een beetje? Er is nog genoeg!', who: 'mere' },
    { choose: [
      { fr: 'Avec plaisir, juste un petit peu !', nl: 'Graag, een klein beetje maar!', ok: true, re: 'Voilà ! Un petit peu… à la française !', reNl: 'Alsjeblieft! Een klein beetje… op z\'n Frans! (je bord is weer vol)' },
      { fr: 'Non merci, c\'était délicieux, mais je n\'ai plus faim.', nl: 'Nee dank je, het was heerlijk, maar ik zit vol.', ok: true, re: 'D\'accord ! Il faut garder de la place pour le fromage !', reNl: 'Oké! Je moet ruimte overhouden voor de kaas!' },
      { fr: 'Non. Beurk.', nl: 'Nee. Bah.', why: 'Au! Dat is niet zo beleefd. Zeg iets als: Non merci, je n\'ai plus faim.' },
    ] },
    { npc: 'Et le vin ? Tu aimes le vin de Bourgogne ? C\'est moi qui l\'ai choisi !', nl: 'En de wijn? Hou je van Bourgondische wijn? Ik heb hem uitgekozen!', who: 'oncle' },
    { say: 'Oui, il est très bon. Tu as bon goût !', nl: 'Ja, hij is heel lekker. Jij hebt goede smaak!' },
    { npc: 'Ha ! Tu vois, Sylvie ? Lui, il a compris !', nl: 'Ha! Zie je wel, Sylvie? Hij snapt het tenminste!', who: 'oncle' },
    { npc: 'Bon, qui veut du fromage ? Il y a du camembert, du comté et du roquefort.', nl: 'Goed, wie wil er kaas? Er is camembert, comté en roquefort.', who: 'mere' },
    { say: 'Je voudrais bien un peu de comté, s\'il te plaît.', nl: 'Ik wil graag een beetje comté, alsjeblieft.' },
    { note: 'Kaasetiquette: snij nooit "de punt" van een driehoekig stuk kaas af. Snij altijd in de lengte, zodat iedereen ook wat van het lekkere midden krijgt!' },
    { npc: 'Tu t\'es bien régalé ?', nl: 'Heb je lekker gegeten?', who: 'mere' },
    { say: 'Oui, merci beaucoup. C\'était un repas délicieux !', nl: 'Ja, heel erg bedankt. Het was een heerlijke maaltijd!' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'telefoon', level: 'A1', emoji: '📞', title: 'Bellen met oma', sub: 'Allô ? Ça va ? Bisous !',
  cast: { mamie: { name: 'Mamie Jeanne', av: '👵', desc: 'oma (89 jaar, een beetje doof)' } },
  intro: 'Je belt oma Jeanne om haar te bedanken voor haar verjaardagskaart. Ze is 89 en hoort niet zo goed meer…',
  steps: [
    { npc: 'Allô ? Allô ? Qui est-ce ?', nl: 'Hallo? Hallo? Met wie?', who: 'mamie' },
    { choose: [
      { fr: 'Allô, Mamie ? C\'est moi, Joris !', nl: 'Hallo, oma? Ik ben het, Joris!', ok: true, re: 'Boris ? Ah… Joris ! Mon chéri ! Ça va ?', reNl: 'Boris? Ah… Joris! Lieverd! Hoe gaat het?' },
      { fr: 'Bonsoir, je suis un téléphone.', nl: 'Goedenavond, ik ben een telefoon.', why: 'Oma is al in de war genoeg! Zeg wie je bent: C\'est moi, + je naam.' },
    ] },
    { say: 'Oui, ça va très bien ! Et toi, Mamie ?', nl: 'Ja, het gaat heel goed! En met jou, oma?' },
    { npc: 'Oh, tu sais, à mon âge… J\'ai mal au dos, mais ça va. Il fait beau chez vous ?', nl: 'Ach, weet je, op mijn leeftijd… Ik heb rugpijn, maar het gaat. Is het mooi weer bij jullie?', who: 'mamie' },
    { choose: [
      { fr: 'Non, il pleut, comme d\'habitude aux Pays-Bas !', nl: 'Nee, het regent, zoals gewoonlijk in Nederland!', ok: true, re: 'Ha ha ! Ici, il fait vingt-cinq degrés !', reNl: 'Haha! Hier is het vijfentwintig graden!' },
      { fr: 'Oui, il fait beau et chaud.', nl: 'Ja, het is mooi en warm weer.', ok: true, re: 'Ah, tant mieux ! Ici aussi, il fait beau.', reNl: 'Ah, mooi zo! Hier is het ook mooi.' },
      { fr: 'J\'ai mal au dos aussi.', nl: 'Ik heb ook rugpijn.', why: 'Ze vroeg naar het weer! (Al is meeleven met oma natuurlijk lief.)' },
    ] },
    { say: 'Merci beaucoup pour ta carte d\'anniversaire !', nl: 'Heel erg bedankt voor je verjaardagskaart!' },
    { npc: 'Quoi ? Ta carte… de pizza ? Je n\'entends rien !', nl: 'Wat? Je pizzakaart? Ik versta er niks van!', who: 'mamie' },
    { note: 'Oma verstaat het niet. Herhaal het langzamer en harder. Handige zin: "Je répète…" (Ik herhaal…)' },
    { choose: [
      { fr: 'Je répète : MERCI… POUR… TA… CARTE !', nl: 'Ik herhaal: BEDANKT… VOOR… JE… KAART!', ok: true, re: 'Ah, ma carte ! De rien, mon chéri ! Tu as eu quel âge ?', reNl: 'Ah, mijn kaart! Graag gedaan, lieverd! Hoe oud ben je geworden?' },
      { fr: 'Oui, une pizza, merci.', nl: 'Ja, een pizza, dank je.', why: 'Dan stuurt oma je straks echt een pizza! Herhaal het nog eens, langzaam.' },
    ] },
    { say: 'J\'ai eu quarante ans !', nl: 'Ik ben veertig geworden!' },
    { npc: 'Quarante ans ! Oh là là, que le temps passe vite ! Vous venez quand nous voir ?', nl: 'Veertig! Jeetje, wat gaat de tijd snel! Wanneer komen jullie ons opzoeken?', who: 'mamie' },
    { choose: [
      { fr: 'On vient en août, pour deux semaines.', nl: 'We komen in augustus, voor twee weken.', ok: true, re: 'Super ! Je vais faire ma tarte aux pommes !', reNl: 'Super! Dan maak ik mijn appeltaart!' },
      { fr: 'On est venus en août.', nl: 'We zijn in augustus gekomen.', why: 'Dat is verleden tijd. Ze vraagt wanneer jullie gaan komen: On vient… / On va venir…' },
    ] },
    { npc: 'Bon, je te laisse, mon feuilleton commence. Gros bisous à tout le monde !', nl: 'Goed, ik laat je gaan, mijn serie begint. Dikke kus aan iedereen!', who: 'mamie' },
    { say: 'Bisous, Mamie ! À bientôt !', nl: 'Kusjes, oma! Tot snel!' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'weekend', level: 'A2', emoji: '🗓️', title: 'Wat heb je dit weekend gedaan?', sub: 'Vertellen in de verleden tijd',
  cast: { cousine: { name: 'Julie', av: '👩', desc: 'nicht van je partner, 32' } },
  intro: 'Maandagavond. Nicht Julie belt via video. Ze wil alles weten over jullie weekend.',
  steps: [
    { npc: 'Salut ! Alors, raconte ! Qu\'est-ce que vous avez fait ce week-end ?', nl: 'Hoi! Nou, vertel! Wat hebben jullie dit weekend gedaan?', who: 'cousine' },
    { choose: [
      { fr: 'Samedi, on est allés à la plage.', nl: 'Zaterdag zijn we naar het strand gegaan.', ok: true, re: 'Ah, sympa ! Il a fait beau ?', reNl: 'Ah, leuk! Was het mooi weer?' },
      { fr: 'Samedi, on va à la plage.', nl: 'Zaterdag gaan we naar het strand.', why: 'Dat is tegenwoordige tijd/toekomst. Het weekend is voorbij: on est allés.' },
      { fr: 'Samedi, on a allé à la plage.', nl: '(fout hulpwerkwoord)', why: 'Bijna! Aller gebruikt être: on est allés.' },
    ] },
    { choose: [
      { fr: 'Oui, il faisait très beau, mais l\'eau était froide !', nl: 'Ja, het was heel mooi weer, maar het water was koud!', ok: true, re: 'Ha ha, la mer du Nord, c\'est pas la Méditerranée !', reNl: 'Haha, de Noordzee is de Middellandse Zee niet!' },
      { fr: 'Oui, il a fait très beau, mais l\'eau a été froide.', nl: '(passé composé voor beschrijving)', why: 'Begrijpelijk, maar voor een beschrijving (hoe was het?) gebruik je de imparfait: il faisait, l\'eau était.' },
    ] },
    { npc: 'Et dimanche ?', nl: 'En zondag?', who: 'cousine' },
    { say: 'Dimanche, on a fait du vélo et on a mangé au restaurant.', nl: 'Zondag hebben we gefietst en in een restaurant gegeten.' },
    { npc: 'Trop bien ! Vous avez mangé quoi ?', nl: 'Super! Wat hebben jullie gegeten?', who: 'cousine' },
    { choose: [
      { fr: 'J\'ai pris des moules-frites. C\'était délicieux !', nl: 'Ik heb mosselen met friet genomen. Het was heerlijk!', ok: true, re: 'Miam ! Moi aussi, j\'adore ça !', reNl: 'Mmm! Daar ben ik ook dol op!' },
      { fr: 'J\'ai prendu des moules-frites.', nl: '(fout voltooid deelwoord)', why: 'Prendre is onregelmatig: j\'ai pris.' },
    ] },
    { npc: 'Et les enfants, ils se sont bien amusés ?', nl: 'En de kinderen, hebben ze zich vermaakt?', who: 'cousine' },
    { choose: [
      { fr: 'Oui, ils ont joué dans le sable toute la journée.', nl: 'Ja, ze hebben de hele dag in het zand gespeeld.', ok: true, re: 'Et ils ont ramené la moitié de la plage dans la voiture, je parie !', reNl: 'En ze hebben het halve strand mee de auto in genomen, wedden?' },
      { fr: 'Oui, ils jouent dans le sable demain.', nl: 'Ja, ze spelen morgen in het zand.', why: 'Dat is de toekomst — ze vroeg naar het weekend!' },
    ] },
    { say: 'Oui ! Il y a du sable partout. Et toi, tu as fait quoi ?', nl: 'Ja! Er ligt overal zand. En jij, wat heb jij gedaan?' },
    { npc: 'Oh, moi, rien de spécial. J\'ai travaillé samedi, et dimanche j\'ai dormi jusqu\'à midi !', nl: 'Ach, ik niks bijzonders. Zaterdag heb ik gewerkt, en zondag heb ik tot 12 uur geslapen!', who: 'cousine' },
    { choose: [
      { fr: 'Tu as bien fait ! Tu avais besoin de te reposer.', nl: 'Goed van je! Je moest uitrusten.', ok: true, re: 'Exactement ! Bon, je te laisse. Bisous !', reNl: 'Precies! Goed, ik hang op. Kusjes!' },
      { fr: 'Ah bon ? Moi aussi, j\'ai travaillé à la plage.', nl: 'O ja? Ik heb ook op het strand gewerkt.', why: 'Dat klopt niet met je verhaal! 😄 Reageer op wat zij zegt.' },
    ] },
    { say: 'Bisous, Julie ! À plus !', nl: 'Kusjes, Julie! Later!' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'vroeger', level: 'A2', emoji: '📷', title: 'Opa vertelt over vroeger', sub: 'De imparfait in het echt',
  cast: { papi: { name: 'Papi Henri', av: '👴', desc: 'opa, 85' } },
  intro: 'Opa Henri pakt het oude fotoalbum erbij. Hij vertelt graag over vroeger… en jij stelt de vragen.',
  steps: [
    { npc: 'Regarde cette photo. C\'est moi, en 1958. J\'avais seize ans.', nl: 'Kijk deze foto. Dat ben ik, in 1958. Ik was zestien.', who: 'papi' },
    { choose: [
      { fr: 'C\'est toi ? Tu étais très beau !', nl: 'Ben jij dat? Je was heel knap!', ok: true, re: 'Ha ha ! J\'étais beau… et j\'avais des cheveux !', reNl: 'Haha! Ik was knap… en ik had haar!' },
      { fr: 'C\'est toi ? Tu es très vieux !', nl: 'Ben jij dat? Je bent heel oud!', why: 'Eh… klopt misschien, maar is niet zo aardig! 😅 Geef liever een compliment.' },
    ] },
    { say: 'Où est-ce que tu habitais quand tu étais petit ?', nl: 'Waar woonde je toen je klein was?' },
    { npc: 'On habitait dans une ferme, près de Rouen. On avait des vaches, des poules et un cheval qui s\'appelait Napoléon.', nl: 'We woonden op een boerderij, bij Rouen. We hadden koeien, kippen en een paard dat Napoleon heette.', who: 'papi' },
    { choose: [
      { fr: 'Napoléon ? C\'est un drôle de nom pour un cheval !', nl: 'Napoleon? Dat is een rare naam voor een paard!', ok: true, re: 'Il était petit, mais il se croyait le chef de tout le monde !', reNl: 'Hij was klein, maar hij dacht dat hij de baas van iedereen was!' },
      { fr: 'Tu as eu un cheval demain ?', nl: 'Heb je morgen een paard gehad?', why: 'Morgen + verleden tijd gaat niet samen 😄' },
    ] },
    { say: 'Qu\'est-ce que tu faisais après l\'école ?', nl: 'Wat deed je na school?' },
    { npc: 'Après l\'école, je devais aider mon père. Je donnais à manger aux animaux. Mais le dimanche, on allait au bal du village !', nl: 'Na school moest ik mijn vader helpen. Ik gaf de dieren eten. Maar op zondag gingen we naar het dorpsbal!', who: 'papi' },
    { note: 'Hoor je het? Opa gebruikt steeds de imparfait (je devais, je donnais, on allait) — want het gaat over gewoontes vroeger.' },
    { choose: [
      { fr: 'Et c\'est au bal que tu as rencontré Mamie ?', nl: 'En was het op het bal dat je oma ontmoette?', ok: true, re: 'Exactement ! Un soir de juillet 1960. Elle portait une robe bleue…', reNl: 'Precies! Op een avond in juli 1960. Ze droeg een blauwe jurk…' },
      { fr: 'Et c\'est au bal que tu rencontrais Mamie ?', nl: '(imparfait voor één gebeurtenis)', why: 'De ontmoeting is één gebeurtenis → passé composé: tu as rencontré.' },
    ] },
    { npc: 'Je l\'ai invitée à danser. Elle a dit non !', nl: 'Ik heb haar ten dans gevraagd. Ze zei nee!', who: 'papi' },
    { say: 'Non ? C\'est pas vrai ! Et après ?', nl: 'Nee? Niet te geloven! En toen?' },
    { npc: 'Je suis revenu tous les dimanches pendant trois mois. À la fin, elle a dit oui. On est mariés depuis soixante-trois ans !', nl: 'Ik kwam drie maanden lang elke zondag terug. Uiteindelijk zei ze ja. We zijn al drieënzestig jaar getrouwd!', who: 'papi' },
    { choose: [
      { fr: 'Soixante-trois ans ! C\'est magnifique. Félicitations !', nl: 'Drieënzestig jaar! Prachtig. Gefeliciteerd!', ok: true, re: 'Merci, mon grand. Le secret ? Toujours dire « Oui, chérie ».', reNl: 'Dank je, jongen. Het geheim? Altijd "Ja, schat" zeggen.' },
      { fr: 'Trente-six ans ! Bravo !', nl: 'Zesendertig jaar! Bravo!', why: 'Soixante-trois = 63, niet 36!' },
    ] },
    { say: 'Merci pour l\'histoire, Papi. C\'était très beau.', nl: 'Dank je voor het verhaal, opa. Het was heel mooi.' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'kinderen', level: 'A2', emoji: '🧒', title: 'Spelen met de neefjes', sub: 'Praten met kinderen',
  cast: { lucas: { name: 'Lucas', av: '👦', desc: 'neefje, 7' }, emma: { name: 'Emma', av: '👧', desc: 'nichtje, 5' } },
  intro: 'De kinderen van de familie zijn nieuwsgierig naar de "Hollandais". Kinderen praten snel en stellen rare vragen!',
  steps: [
    { npc: 'C\'est toi, le Hollandais ? Tu parles français ?', nl: 'Ben jij de Hollander? Spreek jij Frans?', who: 'lucas' },
    { choose: [
      { fr: 'Oui, un petit peu ! J\'apprends.', nl: 'Ja, een klein beetje! Ik ben het aan het leren.', ok: true, re: 'Moi, je parle bien français. Parce que je suis français.', reNl: 'Ik spreek goed Frans. Want ik ben Frans.' },
      { fr: 'Non.', nl: 'Nee.', why: 'Maar… je zegt dat in het Frans! 😄 Zeg dat je het aan het leren bent.' },
    ] },
    { say: 'Tu as quel âge ?', nl: 'Hoe oud ben je?' },
    { npc: 'J\'ai sept ans et demi. Et toi ? T\'as cent ans ?', nl: 'Ik ben zeven en een half. En jij? Ben je honderd?', who: 'lucas' },
    { choose: [
      { fr: 'Non ! J\'ai quarante ans.', nl: 'Nee! Ik ben veertig.', ok: true, re: 'C\'est presque cent.', reNl: 'Dat is bijna honderd.' },
      { fr: 'Non ! Je suis quarante ans.', nl: '(fout: être)', why: 'Leeftijd gaat met avoir: j\'ai quarante ans.' },
    ] },
    { npc: 'Moi, j\'ai cinq ans ! Tu veux voir mon doudou ? Il s\'appelle Monsieur Carotte.', nl: 'Ik ben vijf! Wil je mijn knuffel zien? Hij heet meneer Wortel.', who: 'emma' },
    { say: 'Oh, il est trop mignon ! C\'est un lapin ?', nl: 'Oh, hij is superschattig! Is het een konijn?' },
    { npc: 'Non ! C\'est une girafe ! Ça se voit pas ?', nl: 'Nee! Het is een giraf! Zie je dat niet?', who: 'emma' },
    { note: '"Ça se voit pas ?" = "Zie je dat niet?" — spreektaal zonder ne. Kinderen laten de ne bijna altijd weg.' },
    { npc: 'On joue à cache-cache ? C\'est toi qui comptes !', nl: 'Zullen we verstoppertje spelen? Jij moet tellen!', who: 'lucas' },
    { choose: [
      { fr: 'D\'accord ! Je compte jusqu\'à vingt. Un, deux, trois…', nl: 'Oké! Ik tel tot twintig. Eén, twee, drie…', ok: true, re: 'Nooon ! Ferme les yeux ! Pas de triche !', reNl: 'Neeee! Doe je ogen dicht! Niet valsspelen!' },
      { fr: 'Non, je suis fatigué. Je vais regarder la télé.', nl: 'Nee, ik ben moe. Ik ga tv kijken.', why: 'Dan ben je meteen de saaiste oom van Frankrijk! 😄 Speel mee!' },
    ] },
    { say: 'Dix-huit, dix-neuf, vingt ! Attention, j\'arrive !', nl: 'Achttien, negentien, twintig! Pas op, ik kom eraan!' },
    { npc: '(hihihi) …', nl: '(gegiechel achter het gordijn)', who: 'emma' },
    { choose: [
      { fr: 'Je t\'ai trouvée, Emma ! Tu es derrière le rideau !', nl: 'Ik heb je gevonden, Emma! Je zit achter het gordijn!', ok: true, re: 'Oh non ! Comment tu as su ?', reNl: 'O nee! Hoe wist je dat?' },
      { fr: 'Je t\'ai trouvée, Emma ! Tu es dans le frigo !', nl: 'Ik heb je gevonden, Emma! Je zit in de koelkast!', why: 'Ze zit achter het gordijn (derrière le rideau) — hopelijk niet in de koelkast! 😄' },
    ] },
    { say: 'Parce que ta girafe dépasse du rideau !', nl: 'Omdat je giraf onder het gordijn uitsteekt!' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'keuken', level: 'A2', emoji: '👩‍🍳', title: 'Helpen in de keuken', sub: 'Gebiedende wijs & recepten',
  cast: { mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' } },
  intro: 'Je biedt aan om te helpen met koken. Schoonmama maakt een quiche lorraine. Ze geeft je opdrachten…',
  steps: [
    { say: 'Je peux t\'aider ?', nl: 'Kan ik je helpen?' },
    { npc: 'Oh, c\'est gentil ! Oui, tu peux couper les oignons ?', nl: 'Oh, wat lief! Ja, kun je de uien snijden?', who: 'mere' },
    { choose: [
      { fr: 'Bien sûr ! Où sont les couteaux ?', nl: 'Natuurlijk! Waar liggen de messen?', ok: true, re: 'Dans le tiroir, à gauche du four.', reNl: 'In de la, links van de oven.' },
      { fr: 'Bien sûr ! Où sont les fourchettes ?', nl: 'Natuurlijk! Waar liggen de vorken?', why: 'Uien snijden met een vork? Ambitieus! Je zoekt een couteau (mes).' },
    ] },
    { npc: 'Attention, coupe-les en petits morceaux. Pas trop gros !', nl: 'Let op, snij ze in kleine stukjes. Niet te groot!', who: 'mere' },
    { note: '"Coupe-les" = snij ze. Bij de gebiedende wijs komt het voornaamwoord ná het werkwoord, met een streepje.' },
    { npc: 'Ensuite, casse les œufs dans le bol et mélange avec la crème.', nl: 'Breek daarna de eieren in de kom en meng het met de room.', who: 'mere' },
    { choose: [
      { fr: 'Combien d\'œufs ? Tous ?', nl: 'Hoeveel eieren? Allemaal?', ok: true, re: 'Quatre, ça suffit. On n\'est pas en train de faire une omelette pour un régiment !', reNl: 'Vier is genoeg. We maken geen omelet voor een heel regiment!' },
      { fr: 'Je casse le bol ?', nl: 'Moet ik de kom breken?', why: 'Liever niet! 😄 Je breekt de eieren (les œufs) ín de kom.' },
    ] },
    { npc: 'Ça sent déjà bon ! Mets les lardons dans la poêle, s\'il te plaît.', nl: 'Het ruikt al lekker! Doe de spekjes in de koekenpan, alsjeblieft.', who: 'mere' },
    { say: 'Voilà ! Je les mets à feu moyen ?', nl: 'Ziezo! Doe ik ze op middelhoog vuur?' },
    { npc: 'Oui, parfait. Tu cuisines souvent, toi ?', nl: 'Ja, perfect. Kook jij vaak?', who: 'mere' },
    { choose: [
      { fr: 'Oui, je cuisine presque tous les jours. Mais pas aussi bien que toi !', nl: 'Ja, ik kook bijna elke dag. Maar niet zo goed als jij!', ok: true, re: 'Oh, flatteur ! Tu vas avoir une double part de dessert.', reNl: 'Oh, vleier! Jij krijgt een dubbele portie toetje.' },
      { fr: 'Non, jamais. Ma spécialité, c\'est les pâtes au ketchup.', nl: 'Nee, nooit. Mijn specialiteit is pasta met ketchup.', ok: true, re: 'Les pâtes au ketchup ?! Mon Dieu… Je vais t\'apprendre, moi !', reNl: 'Pasta met ketchup?! Mijn god… Ik ga het je leren!' },
    ] },
    { npc: 'Maintenant, on met tout dans le four, à 180 degrés, pendant trente-cinq minutes.', nl: 'Nu doen we alles in de oven, op 180 graden, vijfendertig minuten lang.', who: 'mere' },
    { say: 'Super ! Et en attendant, je fais la vaisselle ?', nl: 'Super! En ondertussen, zal ik afwassen?' },
    { npc: 'Toi, tu peux revenir quand tu veux !', nl: 'Jij mag terugkomen wanneer je maar wilt!', who: 'mere' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'anniversaire', level: 'A2', emoji: '🎂', title: 'Het verjaardagsfeest van tonton', sub: 'Feliciteren, cadeaus, een toost',
  cast: { oncle: { name: 'Tonton Bernard', av: '🧔', desc: 'oom, wordt 60' }, tante: { name: 'Tata Monique', av: '👩‍🦳', desc: 'tante' } },
  intro: 'Oom Bernard wordt 60! Grote tuinfeest. Jij hebt een cadeau bij je: een Nederlandse kaas.',
  steps: [
    { npc: 'Ah, te voilà ! Merci d\'être venu !', nl: 'Ah, daar ben je! Bedankt dat je gekomen bent!', who: 'oncle' },
    { choose: [
      { fr: 'Joyeux anniversaire, Bernard ! Soixante ans, ça se fête !', nl: 'Gefeliciteerd, Bernard! Zestig jaar, dat moet gevierd worden!', ok: true, re: 'Ah, merci ! Ne me rappelle pas mon âge !', reNl: 'Ah, dank je! Herinner me niet aan mijn leeftijd!' },
      { fr: 'Joyeux Noël, Bernard !', nl: 'Vrolijk kerstfeest, Bernard!', why: 'Verkeerd feest! 🎄 Voor een verjaardag: Joyeux anniversaire!' },
      { fr: 'Félicitations pour ta vieillesse !', nl: 'Gefeliciteerd met je ouderdom!', why: 'Au! Technisch correct, maar niet zo diplomatiek 😄' },
    ] },
    { say: 'Tiens, c\'est un petit cadeau des Pays-Bas.', nl: 'Alsjeblieft, een klein cadeautje uit Nederland.' },
    { npc: 'Oh ! Un fromage hollandais ! Il est énorme ! C\'est du gouda ?', nl: 'Oh! Een Hollandse kaas! Hij is enorm! Is het gouda?', who: 'oncle' },
    { choose: [
      { fr: 'Oui, c\'est un vieux gouda. Il est très bon avec du vin rouge.', nl: 'Ja, het is oude gouda. Heel lekker met rode wijn.', ok: true, re: 'Parfait, j\'ai justement une bonne bouteille !', reNl: 'Perfect, ik heb toevallig een goede fles!' },
      { fr: 'Oui, c\'est une vieille gouda.', nl: '(geslacht)', why: 'Kaas is mannelijk: le fromage, dus un vieux gouda.' },
    ] },
    { npc: 'Tu veux boire quelque chose ? Il y a du champagne, du rosé, de la bière…', nl: 'Wil je iets drinken? Er is champagne, rosé, bier…', who: 'tante' },
    { say: 'Une coupe de champagne, avec plaisir ! C\'est la fête !', nl: 'Een glas champagne, graag! Het is feest!' },
    { npc: 'Bernard voudrait que quelqu\'un fasse un petit discours… Tu veux essayer ? En français ?', nl: 'Bernard zou willen dat iemand een kort speechje houdt… Wil jij het proberen? In het Frans?', who: 'tante' },
    { note: 'Spannend! Een korte toost: begin met "Je voudrais dire quelques mots…" (Ik wil graag een paar woorden zeggen…)' },
    { say: 'Je voudrais dire quelques mots. Bernard, tu es un oncle formidable.', nl: 'Ik wil graag een paar woorden zeggen. Bernard, je bent een geweldige oom.' },
    { say: 'Je te souhaite beaucoup de bonheur et une bonne santé. À Bernard !', nl: 'Ik wens je veel geluk en een goede gezondheid. Op Bernard!' },
    { npc: 'À BERNARD ! (Tout le monde applaudit.)', nl: 'OP BERNARD! (Iedereen klapt.)', who: 'tante' },
    { npc: 'Merci, merci ! Ça me touche beaucoup. Et ton français est vraiment bon, tu sais !', nl: 'Dank je, dank je! Dat raakt me echt. En je Frans is echt goed, weet je!', who: 'oncle' },
    { choose: [
      { fr: 'Merci, c\'est gentil ! J\'apprends tous les jours.', nl: 'Dank je, lief van je! Ik leer elke dag.', ok: true, re: 'Ça se voit ! Allez, on mange le gâteau !', reNl: 'Dat zie je! Kom, we eten taart!' },
      { fr: 'Oui, je sais. Je suis parfait.', nl: 'Ja, weet ik. Ik ben perfect.', why: 'Haha, wat bescheiden! 😄 Bedank liever voor het compliment.' },
    ] },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'zomerplannen', level: 'B1', emoji: '☀️', title: 'Plannen maken voor de zomer', sub: 'Futur simple & conditionnel',
  cast: { pere: { name: 'Alain', av: '👨‍🦳', desc: 'schoonvader' }, mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' } },
  intro: 'Via een videogesprek bespreken jullie de zomervakantie. Iedereen heeft andere ideeën…',
  steps: [
    { npc: 'Alors, cet été, vous viendrez quand ?', nl: 'Nou, wanneer komen jullie deze zomer?', who: 'pere' },
    { choose: [
      { fr: 'On pensait venir fin juillet, si ça vous va.', nl: 'We dachten eind juli te komen, als dat jullie uitkomt.', ok: true, re: 'Fin juillet, c\'est parfait !', reNl: 'Eind juli is perfect!' },
      { fr: 'On est venus fin juillet.', nl: 'We zijn eind juli gekomen.', why: 'Verleden tijd! Gebruik de toekomst of "on pensait venir…".' },
    ] },
    { npc: 'J\'aimerais bien qu\'on aille tous ensemble à la montagne, dans les Alpes.', nl: 'Ik zou het leuk vinden als we allemaal samen naar de bergen gingen, in de Alpen.', who: 'mere' },
    { npc: 'La montagne ? Moi, je préférerais la mer. On pourrait louer une maison en Bretagne.', nl: 'De bergen? Ik zou liever naar zee gaan. We zouden een huis in Bretagne kunnen huren.', who: 'pere' },
    { note: 'Je schoonouders zijn het oneens. Diplomatiek blijven! Gebruik de conditionnel: "on pourrait…", "ce serait…".' },
    { choose: [
      { fr: 'Et si on faisait les deux ? Une semaine à la montagne et une semaine à la mer ?', nl: 'En als we allebei doen? Een week bergen en een week zee?', ok: true, re: 'Oh, quelle bonne idée ! Tu vois, Alain, il est diplomate !', reNl: 'Oh, wat een goed idee! Zie je, Alain, hij is diplomatiek!' },
      { fr: 'Moi, je veux aller en Espagne. Point final.', nl: 'Ik wil naar Spanje. Punt uit.', why: 'Haha, dan heb je opeens twéé mensen tegen je! Probeer een compromis met de conditionnel.' },
      { fr: 'Si on ferait les deux ?', nl: '(fout na si)', why: 'Na si nooit de conditionnel! Si on faisait…' },
    ] },
    { npc: 'Et qu\'est-ce que vous aimeriez faire là-bas ?', nl: 'En wat zouden jullie daar graag doen?', who: 'mere' },
    { say: 'J\'aimerais faire des randonnées et manger beaucoup de fromage.', nl: 'Ik zou graag wandeltochten maken en veel kaas eten.' },
    { npc: 'Ha ! En Savoie, tu vas être servi. Raclette, fondue, tartiflette…', nl: 'Ha! In de Savoie kom je dan goed aan je trekken. Raclette, fondue, tartiflette…', who: 'pere' },
    { npc: 'Il faudra réserver bientôt. Tu pourrais regarder sur Internet ?', nl: 'We moeten binnenkort reserveren. Zou jij op internet kunnen kijken?', who: 'mere' },
    { choose: [
      { fr: 'Pas de problème, je regarderai ce soir et je vous enverrai des photos.', nl: 'Geen probleem, ik kijk vanavond en stuur jullie foto\'s.', ok: true, re: 'Merci, c\'est gentil !', reNl: 'Dank je, wat lief!' },
      { fr: 'Pas de problème, j\'ai regardé hier.', nl: 'Geen probleem, ik heb gisteren gekeken.', why: 'Ze vraagt het nu pas — dus je gaat het nog doen: je regarderai.' },
    ] },
    { npc: 'Et s\'il pleut toute la semaine en Bretagne ?', nl: 'En als het de hele week regent in Bretagne?', who: 'pere' },
    { choose: [
      { fr: 'S\'il pleut, on jouera aux cartes et on mangera des crêpes !', nl: 'Als het regent, dan gaan we kaarten en crêpes eten!', ok: true, re: 'Ça, c\'est un vrai plan breton !', reNl: 'Dát is een echt Bretons plan!' },
      { fr: 'S\'il pleuvra, on jouera aux cartes.', nl: '(fout na si)', why: 'Na si de présent: s\'il pleut.' },
    ] },
    { say: 'Ce sera des vacances géniales. J\'ai déjà hâte !', nl: 'Het wordt een geweldige vakantie. Ik kijk er nu al naar uit!' },
  ],
},
// ═════════════════════════════════════════════
{
  id: 'discussie', level: 'B1', emoji: '🧀', title: 'Het grote kaasdebat', sub: 'Je mening geven en verdedigen',
  cast: { oncle: { name: 'Tonton Bernard', av: '🧔', desc: 'oom, kaas-fanaat' }, cousine: { name: 'Julie', av: '👩', desc: 'nicht' } },
  intro: 'Oom Bernard beweert dat Nederlandse kaas "geen echte kaas" is. Dat laat jij niet zomaar gebeuren!',
  steps: [
    { npc: 'Franchement, le fromage hollandais, c\'est pas du vrai fromage. C\'est du plastique jaune !', nl: 'Eerlijk gezegd, Hollandse kaas is geen echte kaas. Het is geel plastic!', who: 'oncle' },
    { choose: [
      { fr: 'Pas du tout ! À mon avis, le vieux gouda est un des meilleurs fromages du monde.', nl: 'Helemaal niet! Volgens mij is oude gouda een van de beste kazen ter wereld.', ok: true, re: 'Ha ! Un des meilleurs ? Tu exagères !', reNl: 'Ha! Een van de beste? Je overdrijft!' },
      { fr: 'Oui, tu as raison.', nl: 'Ja, je hebt gelijk.', why: 'Kom op, verdedig je land! 🇳🇱 Gebruik "Pas du tout !" of "À mon avis…"' },
      { fr: 'À mon avis, le gouda est plus bon.', nl: '(fout: plus bon)', why: 'Nooit "plus bon" — zeg meilleur!' },
    ] },
    { npc: 'Moi, je suis d\'accord avec lui. Le vieux gouda, c\'est super bon avec de la moutarde.', nl: 'Ik ben het met hem eens. Oude gouda is superlekker met mosterd.', who: 'cousine' },
    { npc: 'De la moutarde ?! Mais vous êtes fous ! Un bon fromage, ça se mange avec du pain et du vin. Point.', nl: 'Mosterd?! Jullie zijn gek! Goede kaas eet je met brood en wijn. Punt.', who: 'oncle' },
    { say: 'Je ne suis pas d\'accord. Chaque pays a ses traditions.', nl: 'Ik ben het niet eens. Elk land heeft zijn tradities.' },
    { npc: 'Bon… je veux bien l\'admettre. Mais le camembert reste le roi des fromages !', nl: 'Goed… dat wil ik toegeven. Maar camembert blijft de koning der kazen!', who: 'oncle' },
    { choose: [
      { fr: 'Ça dépend. Le camembert est délicieux, mais il sent un peu fort.', nl: 'Dat hangt ervan af. Camembert is heerlijk, maar hij ruikt nogal sterk.', ok: true, re: 'Il sent fort parce qu\'il a du caractère ! Comme moi !', reNl: 'Hij ruikt sterk omdat hij karakter heeft! Net als ik!' },
      { fr: 'Le camembert ? Beurk, ça pue !', nl: 'Camembert? Bah, het stinkt!', why: 'Hm, dat is olie op het vuur bij oom Bernard 😄 Iets diplomatieker graag: "Ça dépend…"' },
    ] },
    { npc: 'Bon, je propose un test. On goûte les deux, et on vote. D\'accord ?', nl: 'Goed, ik stel een test voor. We proeven ze allebei en we stemmen. Akkoord?', who: 'cousine' },
    { say: 'Tout à fait ! Que le meilleur fromage gagne !', nl: 'Absoluut! Moge de beste kaas winnen!' },
    { note: '"Que le meilleur gagne" — subjonctif! (gagne = winne). Een vaste uitdrukking.' },
    { npc: 'Alors… Hmm… Bon, d\'accord. Ton gouda, il est pas mal. Mais ne le dis à personne !', nl: 'Nou… Hmm… Goed, oké. Jouw gouda is niet slecht. Maar zeg het tegen niemand!', who: 'oncle' },
    { choose: [
      { fr: 'Promis, ce sera notre secret !', nl: 'Beloofd, het blijft ons geheim!', ok: true, re: 'Ha ha ! Tu es un vrai membre de la famille, toi.', reNl: 'Haha! Jij bent een echt familielid.' },
      { fr: 'Je vais le dire à tout le monde !', nl: 'Ik ga het aan iedereen vertellen!', ok: true, re: 'Traître ! Bon… ressers-moi un morceau quand même.', reNl: 'Verrader! Nou… geef me toch nog maar een stukje.' },
    ] },
  ],
},
];

const ORDER = { A1: 1, A2: 2, B1: 3 };
export const DIALOGUES = [...BASE, ...more, ...more3, ...more4].sort((a, b) => ORDER[a.level] - ORDER[b.level]);
