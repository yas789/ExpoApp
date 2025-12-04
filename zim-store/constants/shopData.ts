import type { CategoryCard, ProductCard } from '@/types/shop';

export const NAV_CATEGORIES: string[] = [
  'Confectionery',
  'Butchery',
  'Catering & Events',
  'Household Goods',
];

export const CATEGORY_CARDS: CategoryCard[] = [
  {
    id: 'confectionery',
    name: 'Confectionery',
    itemsCount: 145,
    imageUrl:
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'butchery',
    name: 'Butchery',
    itemsCount: 89,
    imageUrl:
      'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'catering',
    name: 'Catering & Events',
    itemsCount: 67,
    imageUrl:
      'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'household',
    name: 'Household Goods',
    itemsCount: 234,
    imageUrl:
      'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const TRENDING_PRODUCTS: ProductCard[] = [
  {
    id: 'p1',
    title: 'Traditional Zimbabwean Cookies',
    price: 4.99,
    currency: 'USD',
    rating: 4.8,
    seller: 'Sweet Delights ZW',
    verified: true,
    local: true,
    imageUrl:
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'p2',
    title: 'Premium Beef Cuts',
    price: 12.99,
    currency: 'USD',
    rating: 4.9,
    seller: 'Prime Meats',
    verified: true,
    local: true,
    imageUrl:
      'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'p3',
    title: 'Catering Package - 50 People',
    price: 299.99,
    currency: 'USD',
    rating: 5.0,
    seller: 'Events by Zim',
    verified: true,
    local: true,
    imageUrl:
      'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'p4',
    title: 'Handcrafted Kitchenware Set',
    price: 34.99,
    currency: 'USD',
    rating: 4.7,
    seller: 'Home Essentials',
    verified: true,
    local: true,
    imageUrl:
      'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
