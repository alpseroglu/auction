import React from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    name: 'Industrial Equipment',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    subcategories: ['Heavy Machinery', 'Tools', 'Safety Equipment', 'Processing Units']
  },
  {
    name: 'Raw Materials',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    subcategories: ['Metals', 'Textiles', 'Chemicals', 'Plastics']
  },
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    subcategories: ['Components', 'Circuit Boards', 'Semiconductors', 'Connectors']
  },
  {
    name: 'Packaging',
    image: 'https://images.unsplash.com/photo-1589640241664-c1082d1032c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    subcategories: ['Boxes', 'Films', 'Labels', 'Containers']
  }
];

export default function CategoryGrid() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
                <ul className="space-y-2">
                  {category.subcategories.map((sub) => (
                    <li key={sub}>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600 flex items-center group">
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 mr-1" />
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}