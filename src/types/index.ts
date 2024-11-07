export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  minQuantity: number;
  maxQuantity: number;
  currentStock: number;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  auction?: {
    isActive: boolean;
    currentBid: number;
    endTime: string;
    minBidIncrement: number;
  };
  priceTiers: {
    quantity: number;
    price: number;
  }[];
  images: string[];
  category: string;
}

export interface User {
  id: string;
  name: string;
  type: 'buyer' | 'seller';
  email: string;
}