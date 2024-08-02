import { ProductInfoType } from '@/@types/global.d.js';

ProductInfo.propTypes = {
  prop: ProductInfoType,
};

export default function ProductInfo(prop) {
  const { name, originalPrice, discount, discountedPrice } = prop;

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
