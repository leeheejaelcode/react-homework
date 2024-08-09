import S from '@/styles/tic-tac-toe.module.css';
import Squares from '@/component/Squares/Squares';
import Status from '@/component/Status/Status';

export default function Board() {
  return (
    <div className={S.Board}>
      <Status />
      <Squares />
    </div>
  );
}
