export default function ProductLink({ imageUrl }) {
  return (
    <a href="/" className="product-link">
      <img src={imageUrl} alt="" />
    </a>
  );
}
