const searchReplace = require('./index-START');

test('rangeSum is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

xtest('Replaces word in sentence', () => {
  expect(
    searchReplace('There is a house on a hill', 'house', 'tree')
  ).toEqual('There is a tree on a hill');
});

xtest('Replacement word should match case of targeted word in sentence', () => {
  expect(
    searchReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
  ).toEqual('He is Sitting on the couch');
});
