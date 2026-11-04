export default [
{
  id: 'buren', level: 'A1', emoji: '🏡', title: 'Kennismaken met de buren', sub: 'Jezelf voorstellen, waar kom je vandaan',
  cast: { voisine: { name: 'Madame Lambert', av: '👵', desc: 'de buurvrouw van je schoonouders' } },
  intro: 'Je logeert bij je schoonouders. In de tuin kijkt de buurvrouw nieuwsgierig over de heg…',
  steps: [
    { npc: 'Bonjour ! Vous êtes de la famille des Martin ?', nl: 'Goedendag! Hoort u bij de familie Martin?', who: 'voisine' },
    { choose: [
      { fr: 'Bonjour madame ! Oui, je suis le gendre d\'Alain et Sylvie.', nl: 'Goedendag mevrouw! Ja, ik ben de schoonzoon van Alain en Sylvie.', ok: true, re: 'Ah, c\'est vous ! Le Hollandais ! Sylvie parle beaucoup de vous.', reNl: 'Ah, dat bent u! De Hollander! Sylvie praat veel over u.' },
      { fr: 'Bonjour ! Non, je suis un voleur.', nl: 'Hallo! Nee, ik ben een inbreker.', why: 'Haha, dan belt ze meteen de politie! 😄 Vertel dat je familie bent.' },
    ] },
    { note: 'Schoonzoon = le gendre, schoondochter = la belle-fille. Ben je een vrouw? Dan zeg je: "Je suis la belle-fille d\'Alain et Sylvie."' },
    { say: 'Enchanté ! Je m\'appelle Joris.', nl: 'Aangenaam! Ik heet Joris.' },
    { npc: 'Enchantée ! Moi, c\'est Madame Lambert. Vous venez d\'où exactement ?', nl: 'Aangenaam! Ik ben mevrouw Lambert. Waar komt u precies vandaan?', who: 'voisine' },
    { choose: [
      { fr: 'Je viens des Pays-Bas. J\'habite près d\'Amsterdam.', nl: 'Ik kom uit Nederland. Ik woon in de buurt van Amsterdam.', ok: true, re: 'Oh, Amsterdam ! Les canaux, les vélos, les tulipes… J\'y suis allée en 1975 !', reNl: 'Oh, Amsterdam! De grachten, de fietsen, de tulpen… Ik ben er in 1975 geweest!' },
      { fr: 'Je viens de Pays-Bas.', nl: '(fout voorzetsel)', why: 'Pays-Bas is meervoud: je viens DES Pays-Bas.' },
    ] },
    { say: 'C\'est vrai ? Et ça vous a plu ?', nl: 'Echt waar? En vond u het leuk?' },
    { npc: 'Oui, beaucoup ! Mais il pleuvait tout le temps. Il pleut toujours autant ?', nl: 'Ja, heel erg! Maar het regende de hele tijd. Regent het nog steeds zoveel?', who: 'voisine' },
    { choose: [
      { fr: 'Ha ha, oui, toujours ! C\'est pour ça que je viens en France.', nl: 'Haha, ja, nog steeds! Daarom kom ik naar Frankrijk.', ok: true, re: 'Ha ha ! Vous êtes drôle, vous. Bon séjour chez nous !', reNl: 'Haha! U bent grappig. Een fijn verblijf bij ons!' },
      { fr: 'Non, il fait toujours beau.', nl: 'Nee, het is altijd mooi weer.', ok: true, re: 'Ah bon ? Les choses ont changé alors ! Bon séjour !', reNl: 'O ja? Dan is er veel veranderd! Fijn verblijf!' },
    ] },
    { say: 'Merci, madame. Bonne journée !', nl: 'Dank u, mevrouw. Fijne dag!' },
  ],
},
{
  id: 'weer', level: 'A1', emoji: '⛅', title: 'Smalltalk over het weer', sub: 'Bij de bakker, in de rij',
  cast: { monsieur: { name: 'Monsieur Petit', av: '👴', desc: 'een praatgrage meneer in de rij bij de bakker' } },
  intro: 'Je staat in de rij bij de bakker. De meneer voor je draait zich om. In Frankrijk begint élk praatje met het weer.',
  steps: [
    { npc: 'Il fait beau aujourd\'hui, hein ?', nl: 'Mooi weer vandaag, hè?', who: 'monsieur' },
    { choose: [
      { fr: 'Oui, il fait très beau ! Il y a du soleil.', nl: 'Ja, het is heel mooi weer! De zon schijnt.', ok: true, re: 'Enfin ! Hier, il pleuvait toute la journée.', reNl: 'Eindelijk! Gisteren regende het de hele dag.' },
      { fr: 'Oui, il est beau.', nl: '(hij is mooi)', why: 'Voor het weer gebruik je "il fait": il fait beau.' },
      { fr: 'Non, il pleut.', nl: 'Nee, het regent.', why: 'Kijk even naar buiten… de zon schijnt! 😄' },
    ] },
    { npc: 'Et il paraît qu\'il va faire chaud ce week-end. Trente degrés !', nl: 'En schijnbaar wordt het warm dit weekend. Dertig graden!', who: 'monsieur' },
    { choose: [
      { fr: 'Trente degrés ? Oh là là, c\'est trop chaud pour moi !', nl: 'Dertig graden? Jeetje, dat is te warm voor mij!', ok: true, re: 'Ha ha, vous n\'êtes pas d\'ici, vous ! Vous venez d\'où ?', reNl: 'Haha, u bent niet van hier! Waar komt u vandaan?' },
      { fr: 'Trente degrés ? J\'ai froid.', nl: 'Dertig graden? Ik heb het koud.', why: 'Bij dertig graden? Dan heb je eerder "chaud" (warm)!' },
    ] },
    { say: 'Je suis néerlandais. Chez nous, il fait souvent froid et il y a du vent.', nl: 'Ik ben Nederlander. Bij ons is het vaak koud en het waait.' },
    { npc: 'Ah, les Pays-Bas ! Le vent, la pluie… Mais au moins, vous avez de beaux nuages !', nl: 'Ah, Nederland! De wind, de regen… Maar jullie hebben tenminste mooie wolken!', who: 'monsieur' },
    { note: 'Weerwoorden: il fait beau / chaud / froid (het is mooi / warm / koud), il pleut (het regent), il neige (het sneeuwt), il y a du vent (het waait), il y a du soleil (de zon schijnt).' },
    { choose: [
      { fr: 'Ha ha, c\'est vrai ! On est champions des nuages.', nl: 'Haha, dat is waar! Wij zijn kampioen wolken.', ok: true, re: 'Ha ha ! Bon, c\'est mon tour. Bonne journée, et profitez du soleil !', reNl: 'Haha! Goed, ik ben aan de beurt. Fijne dag, en geniet van de zon!' },
      { fr: 'Oui, il neige toujours.', nl: 'Ja, het sneeuwt altijd.', why: 'Zo erg is het nou ook weer niet in Nederland! 😄' },
    ] },
    { say: 'Merci, vous aussi ! Bonne journée !', nl: 'Dank u, u ook! Fijne dag!' },
  ],
},
];
