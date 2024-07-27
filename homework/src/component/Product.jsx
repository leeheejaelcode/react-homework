import ProductInfo from "@/component/ProductInfo.jsx";
import ProductLink from "@/component/ProductLink.jsx";
import AddButton from "@/component/AddButton.jsx";

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
