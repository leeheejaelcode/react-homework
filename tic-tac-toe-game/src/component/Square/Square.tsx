import S from '@/styles/tic-tac-toe.module.css';
import { square } from '@/@types/global';

export default function Square({
  gamePlay,
  style,
  children,
}: square): JSX.Element {
  const isDisabled = children !== null;

  return (
    <button
      className={S.Square}
      onClick={gamePlay}
      disabled={isDisabled}
      style={style}
    >
      {children}
    </button>
  );
}
