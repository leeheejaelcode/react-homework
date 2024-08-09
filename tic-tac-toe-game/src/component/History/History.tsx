import S from '@/styles/tic-tac-toe.module.css';

export default function History() {
  return (
    <div className={S.History}>
      <ol>
        <li>
          <button type="button">게임 시작</button>
        </li>
      </ol>
    </div>
  );
}
