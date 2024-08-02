import type { ProductInfoType } from '@/@types/global.d.ts';

interface Props {
  productInfo: ProductInfoType;
}

export default function ProductInfo({ productInfo }: Props): JSX.Element {
  const { name, originalPrice, discount, discountedPrice } = productInfo;
  return (
    <div className="product-info">
      <h3 className="product-name">{name}</h3>
      <p className="original-price">{originalPrice.toLocaleString()}원</p>
      <p className="discounted-price">
        <span className="discount"> {discount}%</span>
        {discountedPrice.toLocaleString()}원
      </p>
    </div>
  );
}
