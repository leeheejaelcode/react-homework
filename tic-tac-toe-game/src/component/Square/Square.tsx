import S from '@/styles/tic-tac-toe.module.css';

export default function Squares({ children, gamePlay, style }) {
  const isdisabled = children !== null;

  return (
    <button
      className={S.Square}
      onClick={gamePlay}
      disabled={isdisabled}
      style={style}
    >
      {children}
    </button>
  );
}
