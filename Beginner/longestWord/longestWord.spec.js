const longestWord = require('./index-START');

test('longestWord is a function', () => {
  expect(typeof longestWord).toEqual('function');
});

xtest('returns the longet word in a mixed case string of text', () => {
  expect(longestWord('Top Shelf Web Development Training on Scotch')).toEqual(
    'Development'
  );
});

xtest('returns the longet word in a lowercase string', () => {
  expect(longestWord('the ultimate guide to js algorithms')).toEqual(
    'algorithms'
  );
});
xtest('returns the longet word in an uppercase string', () => {
  expect(longestWord('BUILDING FOR THE NEXT BILLION USERS')).toEqual(
    'BUILDING'
  );
});
