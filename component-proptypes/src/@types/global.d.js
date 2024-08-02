import { exact, string, number } from 'prop-types';

export const ProductType = exact({
  id: string.isRequired,
  name: string.isRequired,
  imageUrl: string.isRequired,
  originalPrice: number.isRequired,
  discount: number.isRequired,
});

export const ProductInfoType = exact({
  name: string.isRequired,
  originalPrice: number.isRequired,
  discount: number.isRequired,
  discountedPrice: number.isRequired,
});

export const ProductLinkType = string.isRequired;
