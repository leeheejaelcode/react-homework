import S from '@/styles/tic-tac-toe.module.css';
import Squares from '@/component/Squares/Squares';
import Status from '@/component/Status/Status';
import { board } from '@/@types/global';

export default function Board({
  squares,
  gamePlay,
  player,
  winner,
  isGameEnd,
  resetGame,
}: board): JSX.Element {
  return (
    <div className={S.Board}>
      <Status
        player={player}
        winner={winner}
        isGameEnd={isGameEnd}
        resetGame={resetGame}
      />
      <Squares squares={squares} gamePlay={gamePlay} winner={winner} />
    </div>
  );
}
