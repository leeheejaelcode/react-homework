import ProductInfo from '@/components/ProductInfo.jsx';
import ProductLink from '@/components/ProductLink.jsx';
import AddButton from '@/components/AddButton.jsx';
import { ProductType } from '@/@types/global.d.js';

Product.propTypes = {
  product: ProductType,
};

export default function Product({ product }) {
  const { name, imageUrl, originalPrice, discount } = product;
  const discountedPrice = originalPrice - (originalPrice * discount) / 100;

  return (
    <article className="product">
      <ProductLink imageUrl={imageUrl} />
      <AddButton />
      <ProductInfo
        name={name}
        originalPrice={originalPrice}
        discount={discount}
        discountedPrice={discountedPrice}
      />
    </article>
  );
}
