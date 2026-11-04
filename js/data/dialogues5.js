export default [
{
  id: 'rondleiding', level: 'A1', emoji: '🏠', title: 'Rondleiding door het huis', sub: 'Kamers, waar is…?, complimenten',
  cast: { mere: { name: 'Sylvie', av: '👩‍🦰', desc: 'schoonmoeder' } },
  intro: 'Je logeert voor het eerst bij je schoonouders. Sylvie laat je het huis zien.',
  steps: [
    { npc: 'Viens, je te fais visiter la maison !', nl: 'Kom, ik laat je het huis zien!', who: 'mere' },
    { npc: 'Ici, c\'est le salon. Et là, c\'est la cuisine.', nl: 'Hier is de woonkamer. En daar is de keuken.', who: 'mere' },
    { choose: [
      { fr: 'Oh, la cuisine est très belle ! Elle est grande.', nl: 'Oh, de keuken is heel mooi! Hij is groot.', ok: true, re: 'Merci ! On l\'a refaite l\'année dernière.', reNl: 'Dank je! We hebben hem vorig jaar opnieuw laten doen.' },
      { fr: 'Oh, le cuisine est très beau !', nl: '(fout geslacht)', why: 'Cuisine is vrouwelijk: LA cuisine est très BELLE.' },
    ] },
    { npc: 'En haut, il y a les chambres. Voilà ta chambre, avec vue sur le jardin.', nl: 'Boven zijn de slaapkamers. Hier is jouw kamer, met uitzicht op de tuin.', who: 'mere' },
    { say: 'Merci, elle est très jolie. Où est la salle de bains ?', nl: 'Dank je, hij is heel mooi. Waar is de badkamer?' },
    { npc: 'Juste à côté, à gauche. Et les toilettes sont en bas, à côté de l\'entrée.', nl: 'Er vlak naast, links. En de wc is beneden, naast de ingang.', who: 'mere' },
    { note: 'In Frankrijk is de wc (les toilettes, altijd meervoud!) vaak een apart kamertje, los van de badkamer.' },
    { choose: [
      { fr: 'D\'accord, merci. Et le wifi, c\'est quoi le code ?', nl: 'Oké, dank je. En wat is de wifi-code?', ok: true, re: 'Ha ha, la question la plus importante ! C\'est écrit sur le frigo.', reNl: 'Haha, de belangrijkste vraag! Het staat op de koelkast.' },
      { fr: 'D\'accord. Où est le toilette ?', nl: '(enkelvoud)', why: 'Bijna! Het is altijd meervoud: les toilettes.' },
    ] },
    { npc: 'Fais comme chez toi, hein ! Si tu as besoin de quelque chose, demande.', nl: 'Doe alsof je thuis bent, hè! Als je iets nodig hebt, vraag het.', who: 'mere' },
    { say: 'Merci beaucoup, c\'est très gentil. Je me sens déjà chez moi.', nl: 'Heel erg bedankt, wat lief. Ik voel me al thuis.' },
  ],
},
{
  id: 'cadeau', level: 'A1', emoji: '🎁', title: 'Een cadeau uitpakken', sub: 'Bedanken en enthousiast reageren',
  cast: { tante: { name: 'Tata Monique', av: '👩‍🦳', desc: 'tante' } },
  intro: 'Tante Monique heeft een cadeautje voor je meegenomen. Ze kijkt heel verwachtingsvol…',
  steps: [
    { npc: 'Tiens, c\'est pour toi ! Un petit cadeau de bienvenue.', nl: 'Alsjeblieft, dit is voor jou! Een klein welkomstcadeautje.', who: 'tante' },
    { choose: [
      { fr: 'Oh, merci ! Il ne fallait pas !', nl: 'Oh, dank je! Dat had niet gehoeven!', ok: true, re: 'Mais si, mais si ! Ouvre-le !', reNl: 'Jawel, jawel! Maak open!' },
      { fr: 'C\'est combien ?', nl: 'Hoeveel kost het?', why: 'Oei, dat vraag je niet bij een cadeau! 😄 Zeg: "Merci, il ne fallait pas !"' },
    ] },
    { note: '"Il ne fallait pas !" (dat had niet gehoeven) is wat Fransen altijd zeggen bij een cadeau. Heel beleefd!' },
    { npc: 'Alors ? Ça te plaît ? C\'est moi qui l\'ai tricoté !', nl: 'En? Vind je het mooi? Ik heb het zelf gebreid!', who: 'tante' },
    { note: 'Het is een trui. Felroze. Met een rendier erop. En één mouw is langer dan de andere.' },
    { choose: [
      { fr: 'Oh, c\'est… très original ! Merci beaucoup, ça me touche.', nl: 'Oh, het is… heel origineel! Heel erg bedankt, dat raakt me.', ok: true, re: 'Je savais que tu aimerais ! Mets-le, mets-le !', reNl: 'Ik wist dat je het mooi zou vinden! Doe aan, doe aan!' },
      { fr: 'Beurk, c\'est moche !', nl: 'Bah, wat lelijk!', why: 'Au… Eerlijk, maar tante Monique is nu heel verdrietig 😢 Diplomatiek: "C\'est très original !"' },
      { fr: 'J\'adore ! C\'est exactement mon style !', nl: 'Ik ben er dol op! Precies mijn stijl!', ok: true, re: 'Ah, je le savais ! Je t\'en ferai un autre pour Noël !', reNl: 'Ah, wist ik het! Dan brei ik er nog een voor je voor kerst!' },
    ] },
    { say: 'Merci, Tata. C\'est très gentil d\'avoir pensé à moi.', nl: 'Dank je, tante. Heel lief dat je aan me hebt gedacht.' },
    { npc: 'Oh, ça me fait plaisir ! Allez, fais-moi un bisou.', nl: 'Oh, wat fijn! Kom, geef me een kusje.', who: 'tante' },
  ],
},
{
  id: 'noel', level: 'A2', emoji: '🎄', title: 'Kerst met de familie', sub: 'Réveillon, wensen, tradities',
  cast: { pere: { name: 'Alain', av: '👨‍🦳', desc: 'schoonvader' }, mamie: { name: 'Mamie Jeanne', av: '👵', desc: 'oma' } },
  intro: '24 december, de "réveillon": het grote kerstdiner op kerstavond. Er zijn oesters, foie gras, een kalkoen en een bûche de Noël (kersttaart in de vorm van een boomstam).',
  steps: [
    { npc: 'Joyeux Noël ! Entre, entre, il fait froid dehors !', nl: 'Vrolijk kerstfeest! Kom binnen, het is koud buiten!', who: 'pere' },
    { say: 'Joyeux Noël à tous ! Ça sent super bon ici !', nl: 'Vrolijk kerstfeest allemaal! Het ruikt hier heerlijk!' },
    { npc: 'Tu as déjà mangé des huîtres ? C\'est la tradition chez nous à Noël.', nl: 'Heb je weleens oesters gegeten? Het is bij ons traditie met kerst.', who: 'pere' },
    { choose: [
      { fr: 'Non, jamais. Mais je veux bien goûter !', nl: 'Nee, nooit. Maar ik wil het graag proeven!', ok: true, re: 'Bravo ! Avec un peu de citron… Alors ?', reNl: 'Bravo! Met een beetje citroen… En?' },
      { fr: 'Oui, j\'en ai mangé l\'année dernière.', nl: 'Ja, ik heb ze vorig jaar gegeten.', ok: true, re: 'Ah, un connaisseur ! Alors, tu en reprends ?', reNl: 'Ah, een kenner! Neem je er nog een?' },
    ] },
    { choose: [
      { fr: 'C\'est… spécial. Ça a le goût de la mer !', nl: 'Het is… apart. Het smaakt naar de zee!', ok: true, re: 'Exactement ! C\'est ça, le charme.', reNl: 'Precies! Dat is nou de charme.' },
      { fr: 'C\'est délicieux, j\'en veux encore dix !', nl: 'Heerlijk, ik wil er nog tien!', ok: true, re: 'Ha ha ! Un vrai Français, celui-là !', reNl: 'Haha! Een echte Fransman, die!' },
    ] },
    { npc: 'Quand j\'étais petite, à Noël, on recevait une orange et un petit jouet en bois. C\'était tout. Et on était très heureux !', nl: 'Toen ik klein was, kregen we met kerst een sinaasappel en een klein houten speeltje. Dat was alles. En we waren heel gelukkig!', who: 'mamie' },
    { choose: [
      { fr: 'C\'est beau. Aujourd\'hui, les enfants reçoivent beaucoup trop de cadeaux.', nl: 'Mooi. Tegenwoordig krijgen kinderen veel te veel cadeaus.', ok: true, re: 'Oui… Mais moi aussi, j\'aime bien les cadeaux maintenant ! Ha ha !', reNl: 'Ja… Maar ik hou nu ook wel van cadeaus! Haha!' },
      { fr: 'Une orange ? C\'est nul.', nl: 'Een sinaasappel? Dat is waardeloos.', why: 'Oei, dat valt niet goed bij oma! Toon liever begrip.' },
    ] },
    { note: 'Kerst in Nederland vs. Frankrijk: Sinterklaas kennen ze daar niet. Le Père Noël (de kerstman) brengt de cadeaus, die de kinderen op 25 december \'s ochtends onder de boom vinden.' },
    { npc: 'Et chez vous, aux Pays-Bas, comment vous fêtez Noël ?', nl: 'En bij jullie, in Nederland, hoe vieren jullie kerst?', who: 'pere' },
    { say: 'Chez nous, on a deux fêtes : Saint-Nicolas le 5 décembre, et Noël.', nl: 'Bij ons hebben we twee feesten: Sinterklaas op 5 december, en kerst.' },
    { npc: 'Deux fêtes ?! Les petits Hollandais ont de la chance !', nl: 'Twee feesten?! Die kleine Hollandertjes boffen maar!', who: 'mamie' },
    { npc: 'Allez, à table ! Et gardez de la place pour la bûche !', nl: 'Kom, aan tafel! En hou ruimte over voor de kersttaart!', who: 'pere' },
    { say: 'Joyeux Noël, et merci de m\'accueillir dans votre famille.', nl: 'Vrolijk kerstfeest, en bedankt dat jullie me in jullie familie opnemen.' },
  ],
},
];
