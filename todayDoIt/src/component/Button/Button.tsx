import S from '@/component/Button/Button.module.css';

export function Button({
  func,
  type = 'button',
  children,
  className = S.button,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    func?.();
  };
  return (
    <button className={className} type={type} onClick={handleClick}>
      {children}
    </button>
  );
}
