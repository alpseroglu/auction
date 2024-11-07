import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
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
      endTime: new Date(Date.now() + 86400000).toISOString(), // 24 hours from now
      minBidIncrement: 5
    },
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    category: 'Textiles',
    priceTiers: [
      { quantity: 100, price: 199.99 },
      { quantity: 500, price: 189.99 },
      { quantity: 1000, price: 179.99 }
    ]
  }
];

export default function ProductGrid() {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}