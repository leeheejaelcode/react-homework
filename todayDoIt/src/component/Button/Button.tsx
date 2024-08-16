import S from '@/component/Button/Button.module.css';

export function Button({
  func,
  type = 'button',
  children,
  className = S.button,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (func) {
      func(); // 전달된 함수를 호출
    }
  };
  return (
    <button className={className} type={type} onClick={handleClick}>
      {children}
    </button>
  );
}
