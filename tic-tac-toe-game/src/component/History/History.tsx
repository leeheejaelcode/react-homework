import S from '@/styles/tic-tac-toe.module.css';
import { history } from '@/@types/global';

export default function History({ squares, timeTravel }: history): JSX.Element {
  return (
    <div className={S.History}>
      <ol>
        {squares.map((square, index) => {
          let buttonState = '게임 시작';
          if (index > 0) {
            buttonState = `${index}번째 게임`;
          }
          if (square) {
            return (
              <li key={index}>
                <button type="button" onClick={timeTravel(index)}>
                  {buttonState}
                </button>
              </li>
            );
          }
        })}
      </ol>
    </div>
  );
}
