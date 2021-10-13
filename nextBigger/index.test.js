/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

/**
 * function that takes a positive integer number and
 * returns the next bigger number formed by the same digits
 * @param {number} num input number
 * @return {number}
 */
const nextBigger = function(num) {
  const stringFromNumber = String(num).split('');
  if (
    stringFromNumber.length === 1 ||
    String(num) === stringFromNumber.sort().reverse().join('')
  ) {
    return -1;
  }
  let nextBiggerNumber = 0;
  let counter = num;
  while (num > nextBiggerNumber) {
    if (
      stringFromNumber.sort().join('') ===
      String(counter).split('').sort().join('')
    ) {
      if (counter > num) {
        nextBiggerNumber = counter;
      }
    }
    counter++;
  }

  return nextBiggerNumber ?? -1;
};

describe('nextBigger', () => {
  it('test', () => {
    expect(nextBigger(9)).toEqual(-1);
    expect(nextBigger(135)).toEqual(153);
    expect(nextBigger(150)).toEqual(501);
    expect(nextBigger(12)).toEqual(21);
    expect(nextBigger(513)).toEqual(531);
    expect(nextBigger(2017)).toEqual(2071);
    expect(nextBigger(111)).toEqual(-1);
    expect(nextBigger(531)).toEqual(-1);
  });
});
