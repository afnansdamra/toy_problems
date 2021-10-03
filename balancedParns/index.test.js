/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */

function balancedParens(input) {
  input = input.match(/[()[\]{}]/g);
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    if (Object.keys(brackets).includes(input[i])) {
      arr.push(input[i]);
    } else {
      if (input[i] !== brackets[arr.pop()]) return false;
    }
  }
  if (arr.length !== 0) return false;
  return true;
}

describe('Test', () => {
  it('should return true when called if the brackets in the string are balanced', () => {
    expect(balancedParens('{}')).toBeTruthy();
    expect(balancedParens('{}(){}')).toBeTruthy();
    expect(balancedParens('()[[Extra Characters]]')).toBeTruthy();
    expect(balancedParens('(){}[[]]')).toBeTruthy();
    expect(balancedParens('{}{Afnan}[Damra](())')).toBeTruthy();
    expect(balancedParens(' var wow  = { yo: thisIsAwesome() }')).toBeTruthy();
  });

  it('should return false when called if the brackets in the string are not balanced', () => {
    expect(balancedParens(')(')).toBeFalsy();
    expect(balancedParens('[({}]')).toBeFalsy();
    expect(balancedParens('(](')).toBeFalsy();
    expect(balancedParens('{(})')).toBeFalsy();
    expect(balancedParens(' var hubble = function() { telescopes.awesome();')).toBeFalsy();
  });
});
