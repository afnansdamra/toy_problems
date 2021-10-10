/*
Imagine you are playing a game of tic-tac-toe
and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array,
where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1
if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

const detectTicTacToeWin = (board) => {
  const possibilites = [];

  board.forEach((row) => possibilites.push(row));

  board.forEach((row, i) => {
    const columns = board.map((cols, j) => {
      return board[j][i];
    });
    possibilites.push(columns);
  });

  let leftDiagonal = -1;
  const dia1 = board.map(() => {
    leftDiagonal++;
    return board[leftDiagonal][leftDiagonal];
  });

  let rightDiagonal = board.length;
  const dia2 = board.map(() => {
    leftDiagonal++;
    rightDiagonal--;
    return board[leftDiagonal - board.length][rightDiagonal];
  });

  possibilites.push(dia1, dia2);

  console.log('POSSIBILITES', possibilites); // length = 8

  const result = [];
  for (let i = 0; i < possibilites.length; i++) {
    if (new Set(possibilites[i]).size === 1 && !(possibilites[i][0] === '0')) {
      result.push(possibilites[i]);
      console.log('RESULT', result);
    }
  }

  return (result.length > 0) ? Number(result[0][0]) : -1;
};

describe('detectTicTacToeWin', () => {
  test('It should return the winner number if there are three in a row', () => {
    expect(
        detectTicTacToeWin([
          ['1', '0', '2'],
          ['1', '2', '0'],
          ['1', '2', '1'],
        ]),
    ).toStrictEqual(1);
    expect(
        detectTicTacToeWin([
          ['2', '0', '1'],
          ['1', '2', '1'],
          ['1', '0', '2'],
        ]),
    ).toStrictEqual(2);
  });

  test('It should return false if there are not three in a row', () => {
    expect(
        detectTicTacToeWin([
          ['1', '0', '2'],
          ['2', '2', '0'],
          ['1', '2', '1'],
        ]),
    ).toStrictEqual(-1);
  });

  test('It should not treat empty 3 in row as winner', () => {
    expect(
        detectTicTacToeWin([
          ['0', '0', '0'],
          ['2', '2', '0'],
          ['1', '2', '1'],
        ]),
    ).toEqual(-1);
  });
});
