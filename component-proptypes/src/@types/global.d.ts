export interface ProductType {
  id: string;
  name: string;
  imageUrl: string;
  originalPrice: number;
  discount: number;
}

export interface ProductInfoType {
  name: string;
  originalPrice: number;
  discount: number;
  discountedPrice: number;
}
