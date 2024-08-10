import S from '@/styles/tic-tac-toe.module.css';

export default function History({ gameIndex, squares, timeTravel }) {
  return (
    <div className={S.History}>
      <ol>
        {squares.map((square, index) => {
          if (square) {
            return (
              <li key={index}>
                <button type="button" onClick={timeTravel(index)}>
                  게임
                </button>
              </li>
            );
          }
        })}
      </ol>
    </div>
  );
}
