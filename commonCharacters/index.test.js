/* eslint-disable max-len */
/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  const regex = new RegExp(`[\\${str2}\]`, 'g');
  return Array.from(new Set(str1.match(regex))).join('');
};

describe('commonCharacters', () => {
  it('test', () => {
    expect(commonCharacters('acexivou', 'aegihobu')).toEqual('aeiou');
  });
});
