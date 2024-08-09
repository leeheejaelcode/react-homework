import S from '@/styles/tic-tac-toe.module.css';
import Square from '@/component/Square/Square';

export default function Squares({ squares, gamePlay }) {
  return (
    <div className={S.Squares}>
      {squares.map((item, index) => (
        <Square key={index} gamePlay={gamePlay(index)}>
          {item}
        </Square>
      ))}
    </div>
  );
}
