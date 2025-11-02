import { MenuItem } from '../types/common';

// Available toppings for build-your-own pizzas
export const TOPPINGS = [
  'Pepperoni',
  'Italian Sausage',
  'Ham',
  'Bacon',
  'Ground Beef',
  'Chicken',
  'Mushrooms',
  'Black Olives',
  'Green Peppers',
  'Red Onions',
  'Tomatoes',
  'Jalapeños',
  'Pineapple',
  'Spinach',
  'Garlic',
  'Banana Peppers',
];

export const PROTEINS = [
  'Pepperoni',
  'Italian Sausage',
  'Ham',
  'Bacon',
  'Ground Beef',
  'Chicken',
  'Salami',
];

// Sample specialty pizzas - these should be updated with actual menu items
export const SPECIALTY_PIZZAS: MenuItem[] = [
  {
    id: 'specialty-1',
    name: 'Margherita',
    description: 'Fresh mozzarella, tomato sauce, basil, olive oil',
    price: 17.99, // Base personal size price
    category: 'pizza',
    sizes: [
      { size: 'small', price: 24.99 },
      { size: 'medium', price: 28.99 },
      { size: 'large', price: 32.99 },
    ],
  },
  {
    id: 'specialty-2',
    name: 'Pepperoni',
    description: 'Classic pepperoni with mozzarella and tomato sauce',
    price: 17.99,
    category: 'pizza',
    sizes: [
      { size: 'small', price: 24.99 },
      { size: 'medium', price: 28.99 },
      { size: 'large', price: 32.99 },
    ],
  },
  {
    id: 'specialty-3',
    name: 'Supreme',
    description: 'Pepperoni, sausage, mushrooms, onions, green peppers',
    price: 17.99,
    category: 'pizza',
    sizes: [
      { size: 'small', price: 24.99 },
      { size: 'medium', price: 28.99 },
      { size: 'large', price: 32.99 },
    ],
  },
  {
    id: 'specialty-4',
    name: 'Meat Lovers',
    description: 'Pepperoni, sausage, ham, bacon, ground beef',
    price: 17.99,
    category: 'pizza',
    sizes: [
      { size: 'small', price: 24.99 },
      { size: 'medium', price: 28.99 },
      { size: 'large', price: 32.99 },
    ],
  },
  {
    id: 'specialty-5',
    name: 'Hawaiian',
    description: 'Ham, pineapple, mozzarella',
    price: 17.99,
    category: 'pizza',
    sizes: [
      { size: 'small', price: 24.99 },
      { size: 'medium', price: 28.99 },
      { size: 'large', price: 32.99 },
    ],
  },
];

// Build Your Own base prices
export const BUILD_YOUR_OWN_BASE: MenuItem = {
  id: 'byo',
  name: 'Build Your Own Pizza',
  description: 'Create your perfect pizza with our fresh ingredients',
  price: 10.99, // Base personal size price
  category: 'pizza',
  sizes: [
    { size: 'small', price: 13.99 },
    { size: 'medium', price: 16.99 },
    { size: 'large', price: 20.99 },
  ],
};

// Sample appetizers
export const APPETIZERS: MenuItem[] = [
  {
    id: 'app-1',
    name: 'Garlic Bread',
    description: 'Fresh baked bread with garlic butter',
    price: 6.99,
    category: 'appetizer',
  },
  {
    id: 'app-2',
    name: 'Mozzarella Sticks',
    description: 'Golden fried mozzarella with marinara',
    price: 8.99,
    category: 'appetizer',
  },
  {
    id: 'app-3',
    name: 'Wings',
    description: 'Crispy chicken wings with your choice of sauce',
    price: 12.99,
    category: 'appetizer',
  },
];

// Sample drinks
export const DRINKS: MenuItem[] = [
  {
    id: 'drink-1',
    name: 'Soft Drinks',
    description: 'Coke, Diet Coke, Sprite, Root Beer',
    price: 2.99,
    category: 'drink',
  },
  {
    id: 'drink-2',
    name: 'Iced Tea',
    description: 'Freshly brewed',
    price: 2.99,
    category: 'drink',
  },
];

// Sample desserts
export const DESSERTS: MenuItem[] = [
  {
    id: 'dessert-1',
    name: 'Cinnamon Sticks',
    description: 'Sweet cinnamon bread sticks with icing',
    price: 7.99,
    category: 'dessert',
  },
];

export const ALL_MENU_ITEMS = [
  ...SPECIALTY_PIZZAS,
  BUILD_YOUR_OWN_BASE,
  ...APPETIZERS,
  ...DRINKS,
  ...DESSERTS,
];
