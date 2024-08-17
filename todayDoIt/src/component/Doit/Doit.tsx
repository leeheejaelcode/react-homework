import S from '@/component/Doit/Doit.module.css';
import { Status } from '@/component/Status/Status';
export function Doit({
  TodoData,
  filteredData,
  checkedTodo,
  checkedArchive,
  handleFilterTodo,
  handleFilterDone,
  handleFilterAll,
}) {
  const handleCheck = (e) => {
    console.log(e.target, e.target.checked);
  };

  return (
    <>
      <Status
        TodoData={TodoData}
        handleFilterTodo={handleFilterTodo}
        handleFilterDone={handleFilterDone}
        handleFilterAll={handleFilterAll}
      />
      <ul className={S.container}>
        {filteredData.map(
          (
            { title, what, when, startTime, endTime, id, todo, done, archive },
            index
          ) => {
            const titleLength = done ? (
              <p className={S.title} style={{ textDecoration: 'line-through' }}>
                {title}
              </p>
            ) : (
              <p className={S.title}>{title}</p>
            );

            return (
              <li key={id} className={S.info}>
                <div className={S.doitContainer}>
                  {titleLength}
                  <p className={S.what}>{what}</p>
                  <input type="checkbox" id={title} onClick={checkedTodo(id)} />
                  <label htmlFor={title} className={S.checkbox}></label>
                </div>
                <div className={S.whenContainer}>
                  <p className={S.when}>
                    <span>오늘</span> {when} {startTime} - {endTime}
                  </p>
                  <input
                    type="checkbox"
                    name={id}
                    id={id}
                    onClick={checkedArchive(id)}
                  />
                  <label htmlFor={id} className={S.archive}></label>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
