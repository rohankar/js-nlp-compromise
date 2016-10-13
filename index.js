let nlp = require('nlp_compromise'); // or nlp = window.nlp_compromise

nlp.noun('dinosaur').pluralize();
// 'dinosaurs'

nlp.verb('speak').conjugate();
// { past: 'spoke',
//   infinitive: 'speak',
//   gerund: 'speaking',
//   actor: 'speaker',
//   present: 'speaks',
//   future: 'will speak',
//   perfect: 'have spoken',
//   pluperfect: 'had spoken',
//   future_perfect: 'will have spoken'
// }

nlp.statement('She sells seashells').negate().text()
// 'She doesn't sell seashells'

nlp.sentence('I fed the dog').replace('the [Noun]', 'the cat').text()
// 'I fed the cat'

nlp.text('Tony Hawk did a kickflip').people();
// [ Person { text: 'Tony Hawk' ..} ]

nlp.noun('vacuum').article();
// 'a'

nlp.person('Tony Hawk').pronoun();
// 'he'

nlp.value('five hundred and sixty').number;
// 560

nlp.text(require('nlp-corpus').text.friends()).topics()//11 seasons of friends
// [ { count: 2523, text: 'ross' },
//   { count: 1922, text: 'joey' },
//   { count: 1876, text: 'god' },
//   { count: 1411, text: 'rachel' },
