import S from '@/component/Status/Status.module.css';

export function Status({ TodoData, handleFilterDone, handleFilterTodo }) {
  let allLength = TodoData.length;
  let todoLength = TodoData.filter((item) => item.todo == true).length;
  let doneLength = TodoData.filter((item) => item.done == true).length;
  let archiveLength = TodoData.filter((item) => item.archive == true).length;

  const filteredTodo = (e) => {
    e.preventDefault();
    handleFilterTodo?.();
  };

  const filteredDone = (e) => {
    e.preventDefault();
    handleFilterDone?.();
  };

  return (
    <ul className={S.statusContainer}>
      <li>
        <button type="button">모두</button>
        <span>{allLength}</span>
      </li>
      <li>
        <button type="button" onClick={filteredTodo}>
          할일
        </button>
        <span>{todoLength}</span>
      </li>
      <li>
        <button type="button" onClick={filteredDone}>
          한일
        </button>
        <span>{doneLength}</span>
      </li>
      <li>
        <button type="button">보관</button>
        <span>{archiveLength}</span>
      </li>
    </ul>
  );
}
