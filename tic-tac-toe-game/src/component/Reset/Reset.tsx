import S from '@/styles/tic-tac-toe.module.css';

export default function Reset({ resetGame }) {
  return (
    <button type="button" className={S.Reset} onClick={resetGame}>
      리셋
    </button>
  );
}
