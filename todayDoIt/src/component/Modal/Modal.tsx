import S from '@/component/Modal/Modal.module.css';
import { Button } from '@/component/Button/Button';
import { handleClick } from '@/@types/global.d';

export function Modal({ modalStyle, handleModalClose, handleModalSave }) {
  return (
    <div className={S.filter} style={modalStyle}>
      <form className={S.modal} style={modalStyle}>
        <label htmlFor="what">
          오늘 뭐할래?
          <input type="text" id="what" placeholder="오늘 할 일 제목" />
        </label>
        <label htmlFor="how">
          간단히 적어볼까?
          <textarea
            id="how"
            placeholder="오늘 할 일 내용을 입력합니다.할 일 내용은 가급적 간결하고 이해하기 쉽게 요약해서 작성합니다."
          />
        </label>
        <div className={S.when}>
          <label htmlFor="when">언제 할거야?</label>
          <div className={S.time}>
            <select name="when" id="when">
              <option value="오전">오전</option>
              <option value="오후">오후</option>
            </select>
            <div>
              <label htmlFor="startTime" className="sr-only">
                시작 시간
              </label>
              <input
                type="text"
                name="startTime"
                placeholder="00:00"
                id="startTime"
              />
              <p aria-hidden>-</p>
              <label htmlFor="endTime" className="sr-only">
                종료 시간
              </label>
              <input
                type="text"
                name="endTime"
                placeholder="00:00"
                id="endTime"
              />
            </div>
          </div>
        </div>
        <div className={S.buttonContainer}>
          {/* <button type="submit" className={S.save}>
            저장
          </button> */}
          <Button type="submit" className={S.save} func={handleModalSave}>
            저장
          </Button>
          <Button type="reset" className={S.discard} func={handleModalClose}>
            취소
          </Button>
        </div>
      </form>
    </div>
  );
}
