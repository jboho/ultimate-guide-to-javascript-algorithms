const palindromeChecker = require('./index-START');

test('palindromeChecker is a function', () => {
  expect(typeof palindromeChecker).toEqual('function');
});

xtest('"php" is a palindrome', () => {
  expect(palindromeChecker('php')).toBeTruthy();
});

xtest('" php  " is not a palindrome', () => {
  expect(palindromeChecker(' php  ')).toBeFalsy();
});

xtest('"developer" is not a palindrome', () => {
  expect(palindromeChecker('developer')).toBeFalsy();
});

xtest('"2002" a palindrome', () => {
  expect(palindromeChecker('2002')).toBeTruthy();
});
