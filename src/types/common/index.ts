export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pizza' | 'appetizer' | 'dessert' | 'drink';
  image?: string;
  toppings?: string[];
  sizes?: {
    size: 'small' | 'medium' | 'large' | 'xlarge';
    price: number;
  }[];
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  customizations?: string[];
  totalPrice: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  customerInfo: CustomerInfo;
  createdAt: Date;
  deliveryType: 'pickup' | 'delivery';
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export interface Reservation {
  id: string;
  customerInfo: CustomerInfo;
  date: Date;
  time: string;
  partySize: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  specialRequests?: string;
}

export interface RewardsAccount {
  id: string;
  customerId: string;
  points: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  orderHistory: Order[];
}
