import S from '@/styles/tic-tac-toe.module.css';
import Square from '@/component/Square/Square';

export default function Squares() {
  return (
    <div className={S.Squares}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
