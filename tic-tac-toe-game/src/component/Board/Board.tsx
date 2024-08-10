import S from '@/styles/tic-tac-toe.module.css';
import Squares from '@/component/Squares/Squares';
import Status from '@/component/Status/Status';

export default function Board({
  squares,
  gamePlay,
  player,
  winner,
  isGameEnd,
  resetGame,
}) {
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
