/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGHT to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 *
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */

/**
 * @param  {...any} args as many functions that you need to compose together
 * @return {any} the value from all the functions
 */
function compose(...args) {
  return (arg) => {
    for (let i = args.length - 1; i >= 0; i--) arg = args[i](arg);
    return arg;
  };
}

/**
 * @param  {...any} args as many functions that you need to pipe together
 * @return {any} the value from all the functions
 */
function pipe(...args) {
  return (arg) => {
    for (let i = 0; i < args.length; i++) arg = args[i](arg);
    return arg;
  };
}

describe('compose', () => {
  const greet = function(name) {
    return 'hello ' + name;
  };
  const exclaim = function(statement) {
    return statement.toUpperCase() + '!';
  };
  const welcome = compose(exclaim, greet);
  test('It should compose functions', () => {
    expect(welcome('phillip')).toEqual('HELLO PHILLIP!');
  });
});

describe('pipe', () => {
  const add2 = function(number) {
    return number + 2;
  };
  const multiplyBy3 = function(number) {
    return number * 3;
  };
  const addAndMultiply = pipe(add2, multiplyBy3);
  test('It should pipe functions', () => {
    expect(addAndMultiply(5)).toEqual(21);
  });
  const addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  test('It should pipe functions', () => {
    expect(addAndMultiplyTwice(5)).toEqual(63);
  });
});
