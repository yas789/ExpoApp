export type CategoryCard = {
  id: string;
  name: string;
  itemsCount: number;
  imageUrl: string;
};

export type ProductCard = {
  id: string;
  title: string;
  price: number;
  currency: string;
  rating: number;
  seller: string;
  verified: boolean;
  imageUrl: string;
  local?: boolean;
};
