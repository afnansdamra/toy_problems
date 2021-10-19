/*
Problem 1:
Replace the native Array map function with your own.
It should work exactly the same way as Javascript built-in map function.
The map function works on the array and returns back a new array
where each element has been modified according to the results
of calling the callback function.
See example usage to understand what arguments are passed to the callback.
*/

// eslint-disable-next-line no-extend-native
Array.prototype.map = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

/*
Example usage:
var transform = function(element,index,array){
  return array[index] + index + element;
};
["a","b","c"].map(transform); //should return ['a0a','b1b','c2c'];
*/

/*
Problem 2:
Write an asynchronous sum function that accepts two numbers and a callback.
The function should wait 1 second, then calculate the sum of two numbers
and pass the result to the callback.
If 1st or 2nd argument is not a number, the function should call the callback
with the error message - a simple string that says "Incorrect argument(s)".
Please see example usage to understand what should be passed to the callback.
*/

const asyncSum = function(a, b, callback) {
  if (typeof a === 'number' && typeof b === 'number') {
    setTimeout(async () => {
      const c = a + b;
      return callback('', c);
    }, 1000);
  } else {
    return callback('Incorrect argument(s)');
  }
};

/*
Example use:
*/

const logNumber = function(error, number) {
  if (error) {
    console.log('Error: ', error);
    return 'Error: ' + error;
  } else {
    console.log('The total is: ', number);
    return 'The total is: ' + number;
  }
};

/*
asyncSum(10,7,logNumber);//should print "The total is: 17" after 1 second
asyncSum(10,"B",logNumber);
//should print "Error: Incorrect argument(s)" after 1 second
*/

/*
Problem 3 (ADVANCED):
What kind of candy do you like?
Your answer: ICECREAM
*/

describe('HigherOrderFun', () => {
  it('map', () => {
    const transform = function(element, index, array) {
      return array[index] + index + element;
    };
    expect(['a', 'b', 'c'].map(transform)).toEqual(['a0a', 'b1b', 'c2c']);
  });
  it('asyncSum', () => {
    jest.useFakeTimers();
    setTimeout(() => {
      expect(asyncSum(10, 7, logNumber)).toEqual('The total is: 17');
    }, 1000);
    expect(asyncSum(10, 'B', logNumber)).toEqual(
        'Error: Incorrect argument(s)',
    );
  });
});
