import { show, handleClick } from '@/@types/global.d';

// interface Props extends show, handleClick {}
// interface 객체로 받을 때

interface Props {
  show: show;
  handleClick: handleClick;
}
// type으로 받을 때

export default function Child({ show, handleClick }: Props) {
  const isExpand = show ? '숨기기' : '보기';
  return (
    <button type="button" onClick={handleClick}>
      {isExpand}
    </button>
  );
}
