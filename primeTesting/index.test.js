/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = function(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/

const generatePrime = function(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (primeTester(i)) {
      primes.push(i);
    }
  }
  return primes;
};

describe('primeTesting', () => {
  it('primeTester', () => {
    expect(primeTester(7)).toBeTruthy();
    expect(primeTester(8)).toBeFalsy();
  });
  it('generatePrime', () => {
    expect(generatePrime(1, 8)).toEqual([1, 2, 3, 5, 7]);
    expect(generatePrime(10, 20)).toEqual([11, 13, 17, 19]);
  });
});
