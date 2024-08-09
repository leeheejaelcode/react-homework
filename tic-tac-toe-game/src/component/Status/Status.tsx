import S from '@/styles/tic-tac-toe.module.css';

export default function Board({ player }) {
  return <h2 className={S.Status}>플레이어 : {player}</h2>;
}
