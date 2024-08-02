import '@/styles/main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProductListPage from '@/pages/ProductListPage.tsx';

const container = document.getElementById('react-app');

if (!container) console.warn('문서에 "#app" 요소가 존재하지 않습니다.');

createRoot(container as HTMLElement).render(
  <StrictMode>
    <ProductListPage />
  </StrictMode>
);
