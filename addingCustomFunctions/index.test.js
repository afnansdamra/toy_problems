/* eslint-disable no-extend-native */
/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

Object.defineProperty(Array.prototype, 'newSort', {
  value: function() {
    return bubbleSort(this);
  },
});

/**
 * doesn't need parameters, part of the array object and exists in every array
 * @return the first element in the array
 */
Array.prototype.getFirstElement = function() {
  return this[0];
};

/**
 * doesn't need parameters, part of the array object and exists in every array
 * @return the last element in the array
 */
Array.prototype.getLastElement = function() {
  return this[this.length - 1];
};

Object.defineProperty(Array.prototype, 'search', {
  value: function(x) {
    for (let i = 0; i < this.length; i++) {
      if (x === this[i]) {
        return i;
      }
    }
    return -1;
  },
});

const arr = [-7, 50, 2, 37, 10, 28];
describe('extend', () => {
  it('test', () => {
    expect(arr.getFirstElement()).toEqual(-7);
    expect(arr.getLastElement()).toEqual(28);
    expect(arr.search(37)).toEqual(3);
    expect(arr.search(38)).toEqual(-1);
    expect(arr.newSort()).toEqual([-7, 2, 10, 28, 37, 50]);
  });
});
