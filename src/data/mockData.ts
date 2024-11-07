import { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Industrial Grade Steel Pipes',
    description: 'High-quality steel pipes suitable for industrial applications. Corrosion-resistant and durable.',
    price: 299.99,
    minQuantity: 50,
    maxQuantity: 1000,
    currentStock: 2000,
    seller: {
      id: 's1',
      name: 'Steel Masters Co.',
      rating: 4.8
    },
    images: ['https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    category: 'Industrial',
    priceTiers: [
      { quantity: 50, price: 299.99 },
      { quantity: 200, price: 279.99 },
      { quantity: 500, price: 259.99 }
    ]
  },
  {
    id: '2',
    name: 'Premium Cotton Fabric Rolls',
    description: 'Premium quality cotton fabric rolls. Perfect for textile manufacturing.',
    price: 199.99,
    minQuantity: 100,
    maxQuantity: 2000,
    currentStock: 5000,
    seller: {
      id: 's2',
      name: 'Textile Hub',
      rating: 4.6
    },
    auction: {
      isActive: true,
      currentBid: 180.50,
      endTime: new Date(Date.now() + 86400000).toISOString(),
      minBidIncrement: 5
    },
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    category: 'Textiles',
    priceTiers: [
      { quantity: 100, price: 199.99 },
      { quantity: 500, price: 189.99 },
      { quantity: 1000, price: 179.99 }
    ]
  },
  {
    id: '3',
    name: 'Semiconductor Chips',
    description: 'High-performance semiconductor chips for electronic devices.',
    price: 899.99,
    minQuantity: 25,
    maxQuantity: 500,
    currentStock: 1000,
    seller: {
      id: 's3',
      name: 'Tech Components Inc.',
      rating: 4.9
    },
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    category: 'Electronics',
    priceTiers: [
      { quantity: 25, price: 899.99 },
      { quantity: 100, price: 849.99 },
      { quantity: 250, price: 799.99 }
    ]
  },
  {
    id: '4',
    name: 'Solar Panels - Industrial Grade',
    description: 'High-efficiency solar panels for commercial and industrial use.',
    price: 1299.99,
    minQuantity: 10,
    maxQuantity: 200,
    currentStock: 500,
    seller: {
      id: 's4',
      name: 'Green Energy Solutions',
      rating: 4.7
    },
    auction: {
      isActive: true,
      currentBid: 1150.00,
      endTime: new Date(Date.now() + 172800000).toISOString(),
      minBidIncrement: 50
    },
    images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    category: 'Energy',
    priceTiers: [
      { quantity: 10, price: 1299.99 },
      { quantity: 50, price: 1199.99 },
      { quantity: 100, price: 1099.99 }
    ]
  }
];