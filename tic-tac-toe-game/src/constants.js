export const PLAYER_LIST = {
  ONE: '👽',
  TWO: '👻',
};

const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const findWinner = (squares) => {
  let winnerInfo = {
    winner: null,
    condition: [],
  };
  for (const [x, y, z] of WINNER_CONDITIONS) {
    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      console.log('GAME OVER');
      winnerInfo = {
        winner: squares[x],
        condition: [x, y, z],
      };
      break;
    }
  }

  return winnerInfo;
};

export const INITIAL_STATE = Array(9).fill(null);

export const PLAYER_LENGTH = Object.keys(PLAYER_LIST).length;
