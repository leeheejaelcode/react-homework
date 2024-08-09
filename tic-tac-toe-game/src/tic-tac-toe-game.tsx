import S from '@/styles/tic-tac-toe.module.css';
import History from '@/component/History/History';
import Board from '@/component/Board/Board';
import {
  PLAYER_LIST,
  INITIAL_STATE,
  PLAYER_LENGTH,
  findWinner,
} from './constants';
import { useState } from 'react';

export default function TicTacToeGame() {
  const { ONE, TWO } = PLAYER_LIST;
  const [squares, setSquares] = useState(INITIAL_STATE);
  const isTurn = squares.filter((s) => s === null).length % PLAYER_LENGTH === 0;
  const player = isTurn ? ONE : TWO;
  const handleClick = (index) => () => {
    // const newSquares = squares.map((square, i) =>
    //   i === index ? player : square
    // );
    // setSquares(newSquares);
    setSquares((squares) =>
      squares.map((square, i) => (i === index ? player : square))
    );
  };
  const winner = findWinner(squares);
  const isGameEnd = squares.every((s) => s !== null);
  return (
    <>
      <h1 className={S.Title}>Tic-Tac-Toe</h1>
      <div className={S.Game}>
        <Board
          squares={squares}
          gamePlay={handleClick}
          player={player}
          winner={winner}
          isGameEnd={isGameEnd}
        />
        <History />
      </div>
    </>
  );
}
