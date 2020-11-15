const maxRecurringChar = require('./index-START');

test('maxRecurringChar is a function', () => {
  expect(typeof maxRecurringChar).toEqual('function');
});

xtest('Finds the most frequently used character', () => {
  expect(maxRecurringChar('sisusbsnshsjsmskslstsw')).toEqual('s');
});

xtest('Finds the most frequently used character even with mixed capitalization', () => {
  expect(maxRecurringChar('AbAdAabnmkAAAynjfaA')).toEqual('A');
});

xtest('Finds the most used number as well', () => {
  expect(maxRecurringChar('b2n3n2m2l2k2i2o2')).toEqual('2');
});
