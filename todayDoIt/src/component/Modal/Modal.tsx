import S from '@/component/Modal/Modal.module.css';
import { Button } from '@/component/Button/Button';
import { useState } from 'react';

export function Modal({
  modalStyle,
  handleModalClose,
  handleSaveData,
  backdropStyle,
}) {
  let title = '';
  let what = '';
  let when = '';
  let startTime = '';
  let endTime = '';

  const getTitle = (e) => {
    title = e.target.value.trim();
  };

  const getTodo = (e) => {
    what = e.target.value.trim();
  };

  const getStartTime = (e) => {
    startTime = e.target.value.trim();
  };

  const getEndTime = (e) => {
    endTime = e.target.value.trim();
  };

  const showWhen = (e) => {
    const ul = e.currentTarget.nextElementSibling;
    ul.style.display = 'block';
  };

  const getWhen = (e) => {
    const ul = e.currentTarget.closest('ul');
    ul.style.display = 'none';
    when = e.target.textContent.trim();
  };

  const saveData = () => {
    const newData = {
      id: Date.now(), // 고유 ID 생성
      title,
      what,
      when,
      startTime,
      endTime,
    };

    if (title && what && when && startTime && endTime) {
      handleSaveData(newData);
    } else {
      console.log('모든 필드를 입력해주세요.');
    }
  };

  return (
    <div className={S.filter} style={backdropStyle}>
      <form className={S.modal} style={modalStyle}>
        <label htmlFor="title">
          오늘 뭐할래?
          <input
            type="text"
            id="title"
            placeholder="오늘 할 일 제목"
            onChange={getTitle}
          />
        </label>
        <label htmlFor="todo">
          간단히 적어볼까?
          <textarea
            id="todo"
            placeholder="오늘 할 일 내용을 입력합니다.할 일 내용은 가급적 간결하고 이해하기 쉽게 요약해서 작성합니다."
            onChange={getTodo}
          />
        </label>
        <div className={S.when}>
          <label htmlFor="when">언제 할거야?</label>
          <div className={S.time}>
            <div className={S.selectBox}>
              <button
                className={S.selectLabel}
                type="button"
                onClick={showWhen}
              >
                오전
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  height={10}
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#0760FB"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <ul className={S.optionList}>
                <li className={S.optionItem} onClick={getWhen}>
                  <button type="button">오전</button>
                </li>
                <li className={S.optionItem} onClick={getWhen}>
                  <button type="button">오후</button>
                </li>
              </ul>
            </div>
            <div>
              <label htmlFor="startTime" className="sr-only">
                시작 시간
              </label>
              <input
                type="text"
                name="startTime"
                placeholder="00:00"
                id="startTime"
                onChange={getStartTime}
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
                onChange={getEndTime}
              />
            </div>
          </div>
        </div>
        <div className={S.buttonContainer}>
          <Button type="submit" className={S.save} func={saveData}>
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
