export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  description: string;
  free_shipping: boolean;
}
