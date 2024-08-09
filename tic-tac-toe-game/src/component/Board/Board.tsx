import S from '@/styles/tic-tac-toe.module.css';
import Squares from '@/component/Squares/Squares';
import Status from '@/component/Status/Status';

export default function Board({ squares, gamePlay, player }) {
  return (
    <div className={S.Board}>
      <Status player={player} />
      <Squares squares={squares} gamePlay={gamePlay} />
    </div>
  );
}
