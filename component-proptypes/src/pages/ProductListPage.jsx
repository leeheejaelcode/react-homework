import dataList from '@/data/data.js';
import Product from '@/components/Product.jsx';

export default function ProductListPage() {
  return (
    <section className="product-list">
      <h2 className="sr-only">제품리스트</h2>
      {dataList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
