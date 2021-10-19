/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of num.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
const rockPaperScissors = function(num = 3) {
  const items = ['rock', 'paper', 'scissors'];
  const possibilities = [];
  const getPossibility = function(roundsPlayed, roundsLeft) {
    if (roundsLeft === 0) {
      possibilities.push(roundsPlayed);
    } else {
      for (let i = 0; i < items.length; i++) {
        getPossibility(roundsPlayed.concat(items[i]), roundsLeft - 1);
      }
    }
  };
  getPossibility([], num);
  return possibilities;
};

describe('rockPaperScissors', () => {
  it('test', () => {
    expect(rockPaperScissors()).toEqual([
      ['rock', 'rock', 'rock'],
      ['rock', 'rock', 'paper'],
      ['rock', 'rock', 'scissors'],
      ['rock', 'paper', 'rock'],
      ['rock', 'paper', 'paper'],
      ['rock', 'paper', 'scissors'],
      ['rock', 'scissors', 'rock'],
      ['rock', 'scissors', 'paper'],
      ['rock', 'scissors', 'scissors'],
      ['paper', 'rock', 'rock'],
      ['paper', 'rock', 'paper'],
      ['paper', 'rock', 'scissors'],
      ['paper', 'paper', 'rock'],
      ['paper', 'paper', 'paper'],
      ['paper', 'paper', 'scissors'],
      ['paper', 'scissors', 'rock'],
      ['paper', 'scissors', 'paper'],
      ['paper', 'scissors', 'scissors'],
      ['scissors', 'rock', 'rock'],
      ['scissors', 'rock', 'paper'],
      ['scissors', 'rock', 'scissors'],
      ['scissors', 'paper', 'rock'],
      ['scissors', 'paper', 'paper'],
      ['scissors', 'paper', 'scissors'],
      ['scissors', 'scissors', 'rock'],
      ['scissors', 'scissors', 'paper'],
      ['scissors', 'scissors', 'scissors'],
    ]);
    expect(rockPaperScissors().length).toEqual(27);
    expect(rockPaperScissors(5).length).toEqual(Math.pow(3, 5));
  });
});
