export default function ProductInfo({
  name,
  originalPrice,
  discount,
  discountedPrice,
}) {
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
