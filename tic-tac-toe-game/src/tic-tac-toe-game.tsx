import S from '@/styles/tic-tac-toe.module.css';
import History from '@/component/History/History';
import Board from '@/component/Board/Board';
import {
  PLAYER_LIST,
  INITIAL_STATE,
  PLAYER_LENGTH,
  findWinner,
} from '@/constants';
import { useState } from 'react';

export default function TicTacToeGame() {
  const [squares, setSquares] = useState([INITIAL_STATE]);
  const [gameIndex, setGameIndex] = useState(0);
  const currentSquares = squares[gameIndex];
  const winner = findWinner(currentSquares);
  const isTurn =
    currentSquares.filter((s) => s === null).length % PLAYER_LENGTH === 0;
  const player = isTurn ? PLAYER_LIST.ONE : PLAYER_LIST.TWO;
  const isGameEnd = !winner.winner && currentSquares.every((s) => Boolean(s));
  const handleClick = (index: number) => () => {
    if (winner.winner) {
      alert('GAME OVER🥲');
      return;
    }
    const nextGameIndex = gameIndex + 1;

    setGameIndex(nextGameIndex);

    const newSquares = currentSquares.map((square, i) =>
      i === index ? player : square
    );

    setSquares([...squares.slice(0, nextGameIndex), newSquares]);
    // setSquares((squares) =>
    //   squares.map((square, i) => (i === index ? player : square))
    // );
  };

  const handleTimeTravel = (index: number) => () => {
    setGameIndex(index);
  };

  const handleResetGame = () => {
    setGameIndex(0);
    setSquares([INITIAL_STATE]);
  };

  return (
    <>
      <h1 className={S.Title}>Tic-Tac-Toe</h1>
      <div className={S.Game}>
        <Board
          squares={currentSquares}
          gamePlay={handleClick}
          player={player}
          winner={winner}
          isGameEnd={isGameEnd}
          resetGame={handleResetGame}
        />
        <History squares={squares} timeTravel={handleTimeTravel} />
      </div>
    </>
  );
}
