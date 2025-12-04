export type Promotion = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export const PROMOTIONS: Promotion[] = [
  {
    id: 'local-support',
    title: 'Shop Local, Support Zimbabwe',
    subtitle: 'by zims for zims',
    imageUrl:
      'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'back-to-school',
    title: 'Back to School Deals',
    subtitle: 'Essentials for every student',
    imageUrl:
      'https://images.pexels.com/photos/207653/pexels-photo-207653.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'festive-groceries',
    title: 'Festive Groceries',
    subtitle: 'Celebrate with local flavors',
    imageUrl:
      'https://images.pexels.com/photos/1666063/pexels-photo-1666063.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'new-sellers',
    title: 'New Sellers Spotlight',
    subtitle: 'Discover fresh Zimbabwean brands',
    imageUrl:
      'https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

