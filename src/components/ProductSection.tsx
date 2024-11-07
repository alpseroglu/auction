import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockData';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  type: 'bestsellers' | 'trending' | 'upcoming';
}

export default function ProductSection({ title, subtitle, type }: ProductSectionProps) {
  // In a real app, we would fetch different products based on the type
  const products = MOCK_PRODUCTS.slice(0, 4);

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <p className="mt-1 text-gray-500">{subtitle}</p>
        </div>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}