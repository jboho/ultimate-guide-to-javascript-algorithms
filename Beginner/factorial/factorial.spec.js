const factorial = require('./index-START');

test('factorial is a function', () => {
  expect(typeof factorial).toEqual('function');
});

xtest('returns 1 if n is 0', () => {
  expect(factorial(0)).toEqual(1);
});

xtest('returns 1 if n is 1', () => {
  expect(factorial(1)).toEqual(1);
});

xtest('returns the factorial of 5', () => {
  expect(factorial(5)).toEqual(120);
});

xtest('returns the factorial of 10', () => {
  expect(factorial(10)).toEqual(3628800);
});

xtest('returns the factorial of 20', () => {
  expect(factorial(20)).toEqual(2432902008176640000);
});
