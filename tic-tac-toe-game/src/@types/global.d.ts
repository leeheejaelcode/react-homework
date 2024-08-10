export interface squares {
  squares: (string | null)[];
  gamePlay: (index: number) => void;
  winner: {
    winner: string | null;
    condition: number[];
  };
}

export interface square {
  gamePlay: function;
  style: React.CSSProperties;
  children: React.ReactNode;
}
export interface status {
  player: string;
  winner: {
    winner: string | null;
    condition: number[];
  };
  isGameEnd: boolean;
  resetGame: () => void;
}

export interface reset {
  resetGame: () => void;
}

export interface history {
  squares: (string | null)[][];
  timeTravel: function;
}

export interface board {
  squares: (string | null)[];
  gamePlay: function;
  player: string;
  winner: {
    winner: string | null;
    condition: number[];
  };
  isGameEnd: boolean;
  resetGame: () => void;
}
