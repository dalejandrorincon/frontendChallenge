export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}
export interface ItemDetail extends Item {
  sold_quantity: number;
  description: string;
}
export interface ApiResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
}
export interface ItemDetailResponse {
  author: {
    name: string;
    lastname: string;
  };
  item: ItemDetail;
}
