// Extra oefeningen voor A1-lessen (meer variatie bij herhalen). Eerste optie = juist.
export default {
  'a1-groeten': [
    { type: 'mc', q: 'Het is 21 uur. Je komt bij vrienden binnen. Je zegt:', options: ['Bonsoir !', 'Bonne nuit !', 'Bon appétit !', 'Au revoir !'] },
    { type: 'mc', q: 'Iemand zegt "Merci beaucoup !" Je antwoordt:', options: ['De rien !', 'Pardon !', 'Enchanté !', 'Salut !'] },
    { type: 'translate', nl: 'Tot morgen!', answer: ['À demain !'] },
    { type: 'listen', fr: 'Salut ! Ça va ?', options: ['Hoi! Hoe gaat het?', 'Tot ziens! Het gaat goed.', 'Goedenavond! Welkom!', 'Hallo! Hoe heet je?'] },
    { type: 'order', nl: 'Het gaat heel goed, dank je.', fr: 'Ça va très bien, merci.' },
  ],
  'a1-lidwoorden': [
    { type: 'mc', s: 'J\'ai ___ voiture rouge.', q: 'voiture is vrouwelijk', options: ['une', 'un', 'des', 'le'] },
    { type: 'mc', s: '___ hôtel est grand.', options: ['L\'', 'Le', 'La', 'Les'] },
    { type: 'fill', s: 'Il y a ___ chats dans le jardin. (een paar)', answer: 'des' },
    { type: 'mc', q: 'Welk woord is waarschijnlijk mannelijk?', options: ['fromage', 'boulangerie', 'liberté', 'question'], noSay: true },
    { type: 'translate', nl: 'de kinderen', answer: ['les enfants'] },
  ],
  'a1-etre': [
    { type: 'mc', s: 'Elle ___ très gentille.', options: ['est', 'es', 'êtes', 'sont'] },
    { type: 'mc', s: 'Vous ___ français ?', options: ['êtes', 'sommes', 'est', 'sont'] },
    { type: 'fill', s: 'Les enfants ___ fatigués.', answer: 'sont' },
    { type: 'translate', nl: 'Wij zijn op vakantie.', answer: ['Nous sommes en vacances.', 'On est en vacances.'] },
    { type: 'listen', fr: 'Je suis content d\'être là.', options: ['Ik ben blij dat ik er ben.', 'Ik ben moe van de reis.', 'Hij is blij dat jij er bent.', 'Ik ben er niet.'] },
  ],
  'a1-cest-ilest': [
    { type: 'mc', s: '___ un problème.', options: ['C\'est', 'Il est', 'Elle est', 'Ils sont'] },
    { type: 'mc', s: 'Ma tante ? ___ très drôle.', options: ['Elle est', 'C\'est', 'Il est', 'Ce sont'] },
    { type: 'translate', nl: 'Dat is super!', answer: ['C\'est super !', 'C\'est génial !'] },
  ],
  'a1-avoir': [
    { type: 'mc', s: 'Tu ___ des frères ?', options: ['as', 'a', 'es', 'ai'] },
    { type: 'fill', s: 'Nous ___ soif.', answer: 'avons' },
    { type: 'mc', q: 'Hoe zeg je "Ik ben bang"?', options: ['J\'ai peur.', 'Je suis peur.', 'J\'ai bang.', 'Je peur.'] },
    { type: 'translate', nl: 'Ik heb honger.', answer: ['J\'ai faim.'] },
    { type: 'listen', fr: 'Il y a trois chats dans la cuisine !', options: ['Er zitten drie katten in de keuken!', 'Er zit een kat in de keuken.', 'Drie katten eten in de keuken.', 'De kat heeft drie jongen.'] },
  ],
  'a1-er': [
    { type: 'fill', s: 'J\'___ le chocolat. (aimer)', answer: 'aime' },
    { type: 'fill', s: 'Ils ___ la télé. (regarder)', answer: 'regardent' },
    { type: 'mc', s: 'Vous ___ où ?', options: ['habitez', 'habitons', 'habitent', 'habite'] },
    { type: 'translate', nl: 'We eten om acht uur.', answer: ['On mange à huit heures.', 'Nous mangeons à huit heures.', 'On mange à 8 heures.', 'Nous mangeons à 8 heures.'] },
    { type: 'dictee', fr: 'Tu parles français ?', nl: 'Spreek je Frans?' },
  ],
  'a1-negatie': [
    { type: 'mc', q: 'Maak ontkennend: <i>Il mange de la viande.</i>', options: ['Il ne mange pas de viande.', 'Il ne mange pas de la viande.', 'Il mange ne pas viande.', 'Il pas mange viande.'] },
    { type: 'fill', s: 'Je ne vois ___ . (niemand)', answer: 'personne' },
    { type: 'translate', nl: 'Ik weet het niet.', answer: ['Je ne sais pas.', 'Je sais pas.'] },
    { type: 'order', nl: 'Hij is er nog niet.', fr: 'Il n\'est pas encore là.' },
  ],
  'a1-vragen': [
    { type: 'mc', s: '___ tu t\'appelles ?', q: 'Hoe heet je?', options: ['Comment', 'Où', 'Qui', 'Quand'] },
    { type: 'mc', s: '___ heure est-il ?', options: ['Quelle', 'Quel', 'Combien', 'Comment'] },
    { type: 'translate', nl: 'Waar woon je?', answer: ['Tu habites où ?', 'Où est-ce que tu habites ?', 'Où habites-tu ?', 'Où tu habites ?', 'Vous habitez où ?'] },
    { type: 'listen', fr: 'Pourquoi tu ne manges pas ?', options: ['Waarom eet je niet?', 'Wanneer eet je?', 'Wat eet je?', 'Waarom eet je zoveel?'] },
  ],
  'a1-bijv': [
    { type: 'mc', s: 'une ___ maison', q: 'een nieuw huis', options: ['nouvelle', 'nouveau', 'nouvel', 'nouveaux'] },
    { type: 'mc', s: 'des fleurs ___', q: 'witte bloemen', options: ['blanches', 'blancs', 'blanc', 'blanche'] },
    { type: 'fill', s: 'Ma sœur est ___ . (sportief)', answer: 'sportive' },
    { type: 'translate', nl: 'een klein huis', answer: ['une petite maison'] },
  ],
  'a1-bezit': [
    { type: 'mc', s: '___ parents habitent à Lyon.', q: 'Mijn ouders…', options: ['Mes', 'Mon', 'Ma', 'Me'] },
    { type: 'mc', s: 'Ils adorent ___ chien.', q: 'hun hond', options: ['leur', 'leurs', 'son', 'ses'] },
    { type: 'fill', s: '___ fille a dix ans. (onze)', answer: ['Notre', 'notre'] },
    { type: 'translate', nl: 'mijn broer en mijn zus', answer: ['mon frère et ma sœur', 'mon frère et ma soeur'] },
  ],
  'a1-toniques': [
    { type: 'mc', s: 'Je vais chez ___ . (haar)', options: ['elle', 'la', 'lui', 'sa'] },
    { type: 'translate', nl: 'Ik ook niet.', answer: ['Moi non plus.'] },
  ],
  'a1-getallen': [
    { type: 'mc', q: 'Wat is <b>quatre-vingts</b>?', options: ['80', '24', '84', '90'], noSay: true },
    { type: 'mc', q: 'Wat is <b>soixante-dix</b>?', options: ['70', '60', '17', '610'], noSay: true },
    { type: 'dictee', fr: 'quinze', nl: '15' },
    { type: 'listen', fr: 'Il est six heures moins le quart.', options: ['Het is kwart voor zes.', 'Het is kwart over zes.', 'Het is half zes.', 'Het is zes uur.'] },
    { type: 'translate', nl: 'maandag en dinsdag', answer: ['lundi et mardi'] },
  ],
  'a1-onregelmatig': [
    { type: 'fill', s: 'Nous ___ au cinéma. (aller)', answer: 'allons' },
    { type: 'fill', s: 'Tu ___ quoi ce soir ? (faire)', answer: 'fais' },
    { type: 'mc', s: 'Vous ___ du café ?', q: 'Willen jullie koffie?', options: ['voulez', 'voulons', 'veulent', 'veux'] },
    { type: 'translate', nl: 'Ik weet het.', answer: ['Je sais.', 'Je le sais.'] },
  ],
  'a1-voorzetsels': [
    { type: 'mc', s: 'On va ___ Canada.', options: ['au', 'en', 'à', 'aux'] },
    { type: 'mc', s: 'C\'est le vélo ___ enfants.', options: ['des', 'de les', 'aux', 'du'] },
    { type: 'translate', nl: 'Ik woon in Parijs.', answer: ['J\'habite à Paris.'] },
  ],
  'a1-futur-proche': [
    { type: 'mc', s: 'Nous ___ manger une pizza.', options: ['allons', 'avons', 'sommes', 'vont'] },
    { type: 'translate', nl: 'Ik ga slapen.', answer: ['Je vais dormir.', 'Je vais me coucher.'] },
    { type: 'order', nl: 'Wat ga je doen?', fr: 'Qu\'est-ce que tu vas faire ?' },
  ],
  'a1-partitif': [
    { type: 'mc', s: 'Tu veux ___ eau ?', options: ['de l\'', 'du', 'de la', 'des'] },
    { type: 'mc', s: 'Il n\'y a pas ___ fromage.', options: ['de', 'du', 'le', 'un'] },
    { type: 'translate', nl: 'een beetje suiker', answer: ['un peu de sucre'] },
  ],
};
