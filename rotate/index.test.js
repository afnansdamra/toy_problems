/*
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.
If n is greater than 0 it should rotate the array to the right.
If n is less than 0 it should rotate the array to the left.
If n is 0, then it should return the array unchanged.
Examples:
Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]
var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3] 5 4
rotate(data, 5) // => [1, 2, 3, 4, 5]
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]
The rotation shouldn't be limited by the indices available in the array.
Meaning that if we exceed the indices of the array it keeps rotating.
rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]
*/

/**
 * function to rotate a given array n times
 * @param {array} array the array you need to rotate
 * @param {number} steps rotation times
 * @return {array} new array after the number of steps rotated
 */
const rotate = function(array, steps) {
  if (typeof array !== 'object' || !array.length || typeof steps !== 'number') {
    throw new Error('invalid input');
  }
  const result = [...array];
  if (steps > 0) {
    for (let i = 0; i < steps; i++) {
      result.unshift(result.pop());
    }
  } else {
    for (let i = 0; i > steps; i--) {
      result.push(result.shift());
    }
  }
  return result;
};

describe('rotate', () => {
  const data = [1, 2, 3, 4, 5];
  test('It should compose functions', () => {
    expect(rotate(data, 1)).toEqual([5, 1, 2, 3, 4]);
    expect(rotate(data, 2)).toEqual([4, 5, 1, 2, 3]);
    expect(rotate(data, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(rotate(data, 0)).toEqual([1, 2, 3, 4, 5]);
    expect(rotate(data, -1)).toEqual([2, 3, 4, 5, 1]);
    expect(rotate(data, -2)).toEqual([3, 4, 5, 1, 2]);
    expect(rotate(data, -5)).toEqual([1, 2, 3, 4, 5]);
    expect(rotate(data, 7)).toEqual([4, 5, 1, 2, 3]);
    expect(rotate(data, 11)).toEqual([5, 1, 2, 3, 4]);
    expect(rotate(data, 12478)).toEqual([3, 4, 5, 1, 2]);
  });
});
