import { ProductLinkType } from '@/@types/global.d.js';

ProductLink.propTypes = {
  imageUrl: ProductLinkType,
};

export default function ProductLink({ imageUrl }) {
  return (
    <a href="/" className="product-link">
      <img src={imageUrl} alt="" />
    </a>
  );
}
