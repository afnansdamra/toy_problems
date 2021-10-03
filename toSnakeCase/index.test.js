/**
 * Complete the method/function so that it converts dash/underscore delimited words or any type from camel casing to snake case
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

/**
 * Examples
  "theStealthWarrior"  gets converted to "the-stealth-warrior"
  "TheStealthWarrior"  gets converted to "The_Stealth_Warrior"
  [{ abcD: 1, user: { userId: 2 } }]  gets converted to [{ abc_d: 1, user: { user_id: 2 } }]
 */

function toSnakeCase(str) {
  if (typeof(str) === 'object') {
    Object.keys(str).map((key) => {
      const newKey = key.replace(/[A-Z]/g, (ch, i) => i > 0 ? '_' + ch[0].toLowerCase() + ch.substr(1) : ch[0].toLowerCase() + ch.substr(1));
      str[newKey] = str[key];
      delete str[key];
    });
    return str;
  }
  return str.replace(/[A-Z]/g, (ch, i) => i > 0 ? '_' + ch[0].toLowerCase() + ch.substr(1) : ch[0].toLowerCase() + ch.substr(1));
}

describe('Tests', () => {
  it('test toSnakeCase', () => {
    expect(toSnakeCase('')).toStrictEqual('');
    expect(toSnakeCase('theStealthWarrior')).toStrictEqual('the_stealth_warrior');
    expect(toSnakeCase('TheStealthWarrior')).toStrictEqual('the_stealth_warrior');
    expect(toSnakeCase('ABC')).toStrictEqual('a_b_c');
    expect(toSnakeCase({abcD: 1})).toStrictEqual({abc_d: 1});
    // expect(toSnakeCase([{ abcD: 1, user: {userId: 2} }])).toStrictEqual([{ abc_d: 1, user: {user_id: 2} }])
  });
});
