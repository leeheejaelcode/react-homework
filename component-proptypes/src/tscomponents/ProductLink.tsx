interface Props {
  imageUrl: string;
}

export default function ProductLink({ imageUrl }: Props): JSX.Element {
  return (
    <a href="/" className="product-link">
      <img src={imageUrl} alt="" />
    </a>
  );
}
