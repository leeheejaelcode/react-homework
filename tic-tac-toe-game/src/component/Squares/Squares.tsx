import S from '@/styles/tic-tac-toe.module.css';
import Square from '@/component/Square/Square';
import { WINNER_COLOR } from '@/constants';
import { squares } from '@/@types/global';

export default function Squares({
  squares,
  gamePlay,
  winner,
}: squares): JSX.Element {
  return (
    <div className={S.Squares}>
      {squares.map((item, index) => {
        const style = {
          backgroundColor: '',
        };
        if (winner) {
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            style.backgroundColor = WINNER_COLOR;
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
