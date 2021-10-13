/**
 * Given a single input string, write a function that outputs an array
 * of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution? O(n^2)
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

const allAnagrams = function(string) {
  if (string.length === 1) return string;
  const returnResult = [];
  for (let i = 0; i < string.length; i++) {
    const firstLetter = string[0];
    const result = allAnagrams(string.slice(1, string.length));
    for (let j = 0; j < result.length; j++) {
      returnResult.push(firstLetter + result[j]);
    }
    string = string.substr(1, string.length - 1) + firstLetter;
  }
  return returnResult;
};

describe('Test', () => {
  it('test', () => {
    expect(allAnagrams('abc')).toEqual([
      'abc',
      'acb',
      'bca',
      'bac',
      'cab',
      'cba',
    ]);
    expect(allAnagrams('sm')).toEqual(['sm', 'ms']);
  });
});
