/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.
 * To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * const a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * const b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit:
Make the method work for arrays that contain objects and/or arrays as elements.
*/

// eslint-disable-next-line no-extend-native
Array.prototype.isSubsetOf = function(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i];
  }
  for (let j = 0; j < this.length; j++) {
    if (!obj[this[j]]) {
      return false;
    }
  }
  return true;
};

describe('isSubsetOf', () => {
  it('test', () => {
    expect(['2'].isSubsetOf(['2', '3', '4', '5'])).toBeTruthy();
    const a = ['commit', 'push'];
    expect(a.isSubsetOf(['commit', 'rebase', 'push', 'blame'])).toBeTruthy();
    const b = ['merge', 'reset', 'reset'];
    expect(b.isSubsetOf(['reset', 'merge', 'add', 'commit'])).toBeTruthy();
    expect(['1'].isSubsetOf(['2', '3', '4', '5'])).toBeFalsy();
  });
  it('test', () => {
    const a = [{commit: 'commit', push: 'push'}, {commit: 'commit'}];
    expect(a.isSubsetOf([{
      commit: 'commit',
      rebase: 'rebase',
      push: 'push',
      blame: 'blame',
    }])).toBeTruthy();
  });
});
