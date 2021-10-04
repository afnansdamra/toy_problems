/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  // TODO
  let str = '';
  let temp = num;
  let sum = 0;

  while (temp / 2 !== 0) {
    if (temp % 2 === 0) {
      temp = temp / 2;
      str = str + '0';
    } else if (temp % 2 !== 0) {
      temp = Math.floor(temp / 2);
      str = str + '1';
      sum++;
    }
  }
  console.log(sum, temp);
  return sum;
};


describe('bitCounting', () => {
  it('test bitCounting', () => {
    expect(bitCounting(1234)).toEqual(5);
  });
});
