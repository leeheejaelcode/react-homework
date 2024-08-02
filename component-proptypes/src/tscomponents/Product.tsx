import ProductInfo from '@/tscomponents/ProductInfo.tsx';
import ProductLink from '@/tscomponents/ProductLink.tsx';
import AddButton from '@/tscomponents/AddButton.tsx';
import type { ProductType } from '@/@types/global.d.ts';

interface Props {
  product: ProductType;
}

export default function Product({ product }: Props): JSX.Element {
  const { name, imageUrl, originalPrice, discount } = product;
  const discountedPrice = originalPrice - (originalPrice * discount) / 100;
  const productInfo = {
    name,
    originalPrice,
    discount,
    discountedPrice,
  };

  return (
    <article className="product">
      <ProductLink imageUrl={imageUrl} />
      <AddButton />
      <ProductInfo productInfo={productInfo} />
    </article>
  );
}
