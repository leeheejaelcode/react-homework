import S from '@/styles/tic-tac-toe.module.css';
import Reset from '@/component/Reset/Reset';
import { status } from '@/@types/global';

export default function Status({
  player,
  winner,
  isGameEnd,
  resetGame,
}: status): JSX.Element {
  let message = '다음 플레이어 ' + player;
  if (winner.winner) {
    message = '승자는' + winner.winner + '!';
  }
  if (isGameEnd && !winner.winner) {
    message = '아쉽게도 무승부👾';
  }
  return (
    <div className={S.StatusContainer}>
      <h2 className={S.Status}>{message}</h2>
      <Reset resetGame={resetGame} />
    </div>
  );
}
