import S from '@/styles/tic-tac-toe.module.css';
import History from '@/component/History/History';
import Board from '@/component/Board/Board';
export default function TicTacToeGame() {
  return (
    <>
      <h1 className={S.Title}>Tic-Tac-Toe</h1>
      <div className={S.Game}>
        <Board />
        <History />
      </div>
    </>
  );
}
