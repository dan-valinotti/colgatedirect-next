export interface Product {
  productId: string;
  title: string;
  price?: double;
  items: Array<string>;
  images: Array<string>;
}

export interface OtherProductProps {
  product: <Product>;
}
