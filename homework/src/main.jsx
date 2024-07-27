import { createRoot } from "react-dom/client";
import ProductListPage from "@/pages/ProductListPage.jsx";

const app = document.getElementById("app");
if (app) {
  createRoot(app).render(<ProductListPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
