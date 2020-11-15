const fibonacci = require('./index-START');

test('fibonacci is a function', () => {
  expect(typeof fibonacci).toEqual('function');
});

xtest('returns 1 on entry of 0', () => {
  expect(fibonacci(0)).toEqual(1);
});

xtest('returns 1 on entry of 1', () => {
  expect(fibonacci(1)).toEqual(1);
});

xtest('returns the 6th fibonacci number', () => {
  expect(fibonacci(6)).toEqual(13);
});

xtest('returns the 20th fibonacci number', () => {
  expect(fibonacci(20)).toEqual(10946);
});
