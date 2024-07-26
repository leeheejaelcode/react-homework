export default function ProductLink({ name, imageUrl }) {
  return (
    <a className="product-link">
      <img src={imageUrl} alt={name} />
    </a>
  );
}
