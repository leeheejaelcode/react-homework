import Playground from '@/Playground.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.css';

const container = document.getElementById('react-app');

if (!container) console.warn('문서에 "#app" 요소가 존재하지 않습니다.');

createRoot(container as HTMLElement).render(
  <StrictMode>
    <Playground />
  </StrictMode>
);
