import S from '@/styles/tic-tac-toe.module.css';
import { reset } from '@/@types/global';

export default function Reset({ resetGame }: reset): JSX.Element {
  return (
    <button type="button" className={S.Reset} onClick={resetGame}>
      리셋
    </button>
  );
}
