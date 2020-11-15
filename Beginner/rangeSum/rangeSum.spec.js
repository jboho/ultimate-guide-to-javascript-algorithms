const rangeSum = require('./index-START');

test('rangeSum is a function', () => {
  expect(typeof rangeSum).toEqual('function');
});

xtest('rangeSum should return 45', () => {
  expect(rangeSum([1, 9])).toEqual(45);
});
