// Extra oefeningen voor A2- en B1-lessen. Eerste optie = juist.
export default {
  'a2-pc-avoir': [
    { type: 'fill', s: 'Qu\'est-ce que tu as ___ ? (dire)', answer: 'dit' },
    { type: 'fill', s: 'Nous avons ___ le train. (prendre)', answer: 'pris' },
    { type: 'mc', s: 'Elle a ___ un gâteau.', q: 'faire', options: ['fait', 'faire', 'faite', 'faisé'] },
    { type: 'translate', nl: 'Ik heb het boek gelezen.', answer: ['J\'ai lu le livre.'] },
    { type: 'listen', fr: 'Vous avez bien dormi ?', options: ['Hebben jullie goed geslapen?', 'Gaan jullie slapen?', 'Slapen jullie nog?', 'Hebben jullie goed gegeten?'] },
  ],
  'a2-pc-etre': [
    { type: 'mc', s: 'Nous ___ arrivés à midi.', options: ['sommes', 'avons', 'êtes', 'sont'] },
    { type: 'fill', s: 'Elle est ___ à la maison. (rester)', answer: 'restée' },
    { type: 'mc', s: 'Ils sont ___ en vacances.', options: ['partis', 'parti', 'partie', 'partir'] },
    { type: 'translate', nl: 'We zijn naar het strand gegaan.', answer: ['On est allés à la plage.', 'Nous sommes allés à la plage.', 'On est allé à la plage.', 'Nous sommes allées à la plage.'] },
  ],
  'a2-wederkerend': [
    { type: 'fill', s: 'Vous ___ appelez comment ?', answer: 'vous' },
    { type: 'mc', s: 'Je ___ suis réveillé à six heures.', options: ['me', 'se', 'm\'', 'te'] },
    { type: 'translate', nl: 'Ga zitten! (tegen u)', answer: ['Asseyez-vous !'] },
    { type: 'listen', fr: 'Ils se sont mariés l\'année dernière.', options: ['Ze zijn vorig jaar getrouwd.', 'Ze gaan volgend jaar trouwen.', 'Ze hebben vorig jaar ruzie gehad.', 'Ze zijn al lang getrouwd.'] },
  ],
  'a2-voornaamwoorden': [
    { type: 'mc', q: 'Tu connais <b>Paul</b> ? — Oui, je ___ connais bien.', options: ['le', 'lui', 'la', 'leur'], noSay: true },
    { type: 'mc', q: 'Tu as écrit <b>à tes parents</b> ? — Oui, je ___ ai écrit.', options: ['leur', 'les', 'lui', 'leurs'], noSay: true },
    { type: 'mc', q: 'Tu veux <b>du café</b> ? — Non merci, je n\'___ veux pas.', options: ['en', 'y', 'le', 'lui'], noSay: true },
    { type: 'translate', nl: 'Ik zie haar morgen.', answer: ['Je la vois demain.', 'Je vais la voir demain.'] },
  ],
  'a2-imparfait': [
    { type: 'fill', s: 'Avant, nous ___ beaucoup. (voyager)', answer: 'voyagions' },
    { type: 'fill', s: 'Quand il était jeune, il ___ du foot. (jouer)', answer: 'jouait' },
    { type: 'mc', s: 'Il ___ froid ce matin-là.', options: ['faisait', 'a fait', 'fait', 'faisais'] },
    { type: 'translate', nl: 'Het was heel mooi.', answer: ['C\'était très beau.', 'C\'était très joli.'] },
  ],
  'a2-pc-vs-imp': [
    { type: 'mc', s: 'Quand je suis arrivé, tout le monde ___ .', q: 'iedereen was aan het eten', options: ['mangeait', 'a mangé', 'mange', 'mangera'] },
    { type: 'mc', s: 'Soudain, le téléphone ___ .', options: ['a sonné', 'sonnait', 'sonne', 'sonnera'] },
    { type: 'mc', s: 'Le samedi, on ___ toujours au marché.', options: ['allait', 'est allé', 'va allé', 'ira'] },
    { type: 'translate', nl: 'Het regende, dus we zijn binnengebleven.', answer: ['Il pleuvait, donc on est restés à l\'intérieur.', 'Il pleuvait, alors on est restés à la maison.', 'Il pleuvait, donc nous sommes restés à la maison.', 'Il pleuvait, alors on est resté à la maison.', 'Il pleuvait, donc on est restés à la maison.'] },
  ],
  'a2-ir-re': [
    { type: 'fill', s: 'Qu\'est-ce que tu ___ ? (choisir)', answer: 'choisis' },
    { type: 'fill', s: 'Ils ___ leur maison. (vendre)', answer: 'vendent' },
    { type: 'mc', s: 'Vous ___ bien ?', q: 'Slapen jullie goed?', options: ['dormez', 'dormons', 'dorment', 'dors'] },
    { type: 'translate', nl: 'Ik hoor niets.', answer: ['Je n\'entends rien.', 'J\'entends rien.'] },
  ],
  'a2-vergelijken': [
    { type: 'mc', s: 'Elle chante ___ que moi.', q: 'beter', options: ['mieux', 'meilleur', 'meilleure', 'plus bien'] },
    { type: 'fill', s: 'C\'est la ___ pizza de la ville ! (beste)', answer: 'meilleure' },
    { type: 'translate', nl: 'Hij is even groot als zijn vader.', answer: ['Il est aussi grand que son père.'] },
  ],
  'a2-bijwoorden': [
    { type: 'mc', q: 'Bijwoord van <b>heureux</b>:', options: ['heureusement', 'heureuxment', 'heureument', 'heureusment'], noSay: true },
    { type: 'fill', s: 'Elle parle ___ français. (vloeiend)', answer: 'couramment' },
    { type: 'translate', nl: 'Echt waar?', answer: ['Vraiment ?', 'C\'est vrai ?'] },
  ],
  'a2-imperatief': [
    { type: 'mc', q: 'Gebiedende wijs van <b>tu finis</b>:', options: ['Finis !', 'Finit !', 'Finissez !', 'Finir !'] },
    { type: 'translate', nl: 'Kom eens kijken!', answer: ['Viens voir !', 'Venez voir !'] },
    { type: 'order', nl: 'Maak je geen zorgen!', fr: 'Ne t\'inquiète pas !' },
  ],
  'a2-negatie-plus': [
    { type: 'mc', s: 'On s\'est mariés ___ cinq ans.', q: 'vijf jaar geleden', options: ['il y a', 'depuis', 'dans', 'pendant'] },
    { type: 'mc', s: 'Je travaille ici ___ 2020.', options: ['depuis', 'il y a', 'pendant', 'dans'] },
    { type: 'translate', nl: 'over vijf minuten', answer: ['dans cinq minutes'] },
  ],
  'b1-futur': [
    { type: 'fill', s: 'Nous ___ chez vous samedi. (être)', answer: 'serons' },
    { type: 'fill', s: 'Il ___ beau demain. (faire)', answer: 'fera' },
    { type: 'mc', s: 'Quand tu ___ grand, tu comprendras.', options: ['seras', 'es', 'serais', 'étais'] },
    { type: 'translate', nl: 'Ik zal je helpen.', answer: ['Je t\'aiderai.', 'Je vous aiderai.'] },
  ],
  'b1-conditionnel': [
    { type: 'fill', s: 'Vous ___ me passer le sel ? (pouvoir)', answer: 'pourriez' },
    { type: 'mc', s: 'J\'___ un café, s\'il vous plaît.', q: 'Ik zou graag…', options: ['aimerais', 'aimerai', 'aimais', 'aime'] },
    { type: 'translate', nl: 'Dat zou leuk zijn.', answer: ['Ce serait bien.', 'Ce serait sympa.', 'Ça serait bien.', 'Ce serait super.', 'Ce serait génial.'] },
  ],
  'b1-si': [
    { type: 'mc', s: 'Si tu ___ , on ira au parc.', q: 'als je wilt', options: ['veux', 'voudrais', 'voulais', 'voudras'] },
    { type: 'mc', s: 'Si j\'avais une maison en France, je ___ tous les étés.', options: ['viendrais', 'viendrai', 'venais', 'viens'] },
    { type: 'translate', nl: 'Als het regent, blijven we thuis.', answer: ['S\'il pleut, on reste à la maison.', 'S\'il pleut, nous restons à la maison.', 'S\'il pleut, on restera à la maison.'] },
  ],
  'b1-relatief': [
    { type: 'mc', s: 'C\'est le restaurant ___ on a mangé hier.', options: ['où', 'que', 'qui', 'dont'] },
    { type: 'mc', s: 'La femme ___ tu vois est ma tante.', options: ['que', 'qui', 'où', 'dont'] },
    { type: 'fill', s: 'C\'est l\'ami ___ je t\'ai parlé.', answer: 'dont' },
  ],
  'b1-subjonctif': [
    { type: 'fill', s: 'Il faut que vous ___ . (venir)', answer: 'veniez' },
    { type: 'fill', s: 'Je veux qu\'il ___ la vérité. (dire)', answer: 'dise' },
    { type: 'mc', s: 'Bien qu\'il ___ froid, on va à la plage.', options: ['fasse', 'fait', 'faisait', 'fera'] },
  ],
  'b1-mening': [
    { type: 'mc', q: 'Iemand vertelt goed nieuws. Je reageert:', options: ['C\'est génial, félicitations !', 'Tant pis.', 'Ça dépend.', 'Je ne crois pas.'] },
    { type: 'translate', nl: 'Ik ben het niet eens.', answer: ['Je ne suis pas d\'accord.', 'Je suis pas d\'accord.'] },
    { type: 'listen', fr: 'Franchement, je ne sais pas quoi penser.', options: ['Eerlijk gezegd weet ik niet wat ik ervan moet denken.', 'Ik ben het helemaal met je eens.', 'Ik denk dat je gelijk hebt.', 'Eerlijk is eerlijk, dat is waar.'] },
  ],
  'b1-indirect': [
    { type: 'mc', q: '« Où est la gare ? » → Il m\'a demandé ___ était la gare.', options: ['où', 'si', 'que', 'ce que'], noSay: true },
    { type: 'fill', s: 'Elle a dit qu\'elle ___ fatiguée. (être, imparfait)', answer: 'était' },
  ],
  'b1-verbindingswoorden': [
    { type: 'mc', s: 'Il pleut, ___ on reste à la maison.', options: ['donc', 'pourtant', 'même si', 'bien que'] },
    { type: 'mc', s: 'Elle est petite, ___ elle est très forte.', options: ['pourtant', 'donc', 'comme', 'parce que'] },
    { type: 'translate', nl: 'Hoe dan ook, het was leuk.', answer: ['En tout cas, c\'était sympa.', 'En tout cas, c\'était bien.', 'En tout cas, c\'était super.'] },
  ],
  'b1-spreektaal': [
    { type: 'mc', q: 'Wat betekent <b>bosser</b>?', options: ['werken', 'slapen', 'eten', 'praten'], noSay: true },
    { type: 'mc', q: 'Wat betekent <b>chelou</b>?', options: ['raar / verdacht', 'boos', 'leuk', 'gek op'], noSay: true },
    { type: 'listen', fr: 'J\'ai pas le temps, je dois bosser.', options: ['Ik heb geen tijd, ik moet werken.', 'Ik heb tijd, ik ga werken.', 'Ik weet het niet, ik ben moe.', 'Ik heb geen zin om te werken.'] },
  ],
  'b1-gerondif': [
    { type: 'fill', s: 'Il est tombé en ___ . (courir)', answer: 'courant' },
    { type: 'mc', q: '"Ik heb net gegeten" =', options: ['Je viens de manger.', 'Je vais manger.', 'J\'ai mangé demain.', 'Je mange encore.'] },
    { type: 'translate', nl: 'Ik ben aan het werken.', answer: ['Je suis en train de travailler.'] },
  ],
};
