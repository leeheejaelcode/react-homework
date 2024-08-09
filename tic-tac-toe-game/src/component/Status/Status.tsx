import S from '@/styles/tic-tac-toe.module.css';

export default function Board({ player, winner, isGameEnd }) {
  let message = '다음 플레이어 ' + player;
  if (winner.winner) {
    message = '승자는 ' + winner.winner;
  }
  if (isGameEnd && !winner.winner) {
    message = '아쉽게도 무승부👾';
  }

  return <h2 className={S.Status}>{message}</h2>;
}
