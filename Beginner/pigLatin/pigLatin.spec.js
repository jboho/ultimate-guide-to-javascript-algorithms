const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

xtest('changes words that start with consonants', () => {
  expect(pigLatin('pig')).toEqual('igpay');
});

xtest('changes words that start with two consonants', () => {
  expect(pigLatin('glove')).toEqual('oveglay');
});

xtest('changes words that start with vowels', () => {
  expect(pigLatin('explain')).toEqual('explainway');
});
