import S from '@/styles/tic-tac-toe.module.css';
import Square from '@/component/Square/Square';

export default function Squares({ squares, gamePlay, winner }) {
  return (
    <div className={S.Squares}>
      {squares.map((item, index) => {
        const style = {
          backgroundColor: null,
        };
        if (winner) {
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            style.backgroundColor = '#ffd700';
          }
        }
        return (
          <Square key={index} gamePlay={gamePlay(index)} style={style}>
            {item}
          </Square>
        );
      })}
    </div>
  );
}
