import React, { useState, useEffect } from 'react';
import S from '@/component/Title/Title.module.css';

export function Title({ _ref }) {
  const [date, setDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const days = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    const dayOfWeek = days[date.getDay()];
    const formatDate = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 (${dayOfWeek})`;

    setDate(formatDate);
  }, []);

  return (
    <div className={S.component} ref={_ref}>
      <h2 className={S.title}>우리, 오늘 뭐할까?</h2>
      <p className={S.time}>{date}</p>
    </div>
  );
}
