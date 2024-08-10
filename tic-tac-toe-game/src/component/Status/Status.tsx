import S from '@/styles/tic-tac-toe.module.css';
import Reset from '@/component/Reset/Reset';

export default function Status({ player, winner, isGameEnd, resetGame }) {
  let statusContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  let message = '다음 플레이어 ' + player;
  if (winner.winner) {
    message = '승자는 ' + winner.winner;
  }
  if (isGameEnd && !winner.winner) {
    message = '아쉽게도 무승부👾';
  }

  return (
    <div style={statusContainerStyle}>
      <h2 className={S.Status}>{message}</h2>
      <Reset resetGame={resetGame} />
    </div>
  );
}
