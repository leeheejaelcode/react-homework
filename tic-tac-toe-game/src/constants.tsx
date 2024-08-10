export const PLAYER_LIST: {
  ONE: '👽';
  TWO: '👻';
} = {
  ONE: '👽',
  TWO: '👻',
};

export const WINNER_CONDITIONS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

interface WinnerInfo {
  winner: string | null;
  condition: number[];
}

export const findWinner = (squares: (string | null)[]): WinnerInfo => {
  let winnerInfo: WinnerInfo = {
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

export const INITIAL_STATE: (string | null)[] = Array(9).fill(null);

export const PLAYER_LENGTH: number = Object.keys(PLAYER_LIST).length;

export const WINNER_COLOR: string = '#ffd700';
