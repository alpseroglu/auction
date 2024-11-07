import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Your B2B Marketplace Solution
          </h1>
          <p className="text-xl text-blue-100">
            Connect with verified suppliers and find the best deals for your business
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Search for products, suppliers, or categories..."
                className="w-full px-6 py-4 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                <Search className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-blue-100">
              <span>Popular:</span>
              <a href="#" className="hover:text-white">Industrial Equipment</a>
              <span>•</span>
              <a href="#" className="hover:text-white">Raw Materials</a>
              <span>•</span>
              <a href="#" className="hover:text-white">Electronics</a>
              <span>•</span>
              <a href="#" className="hover:text-white">Textiles</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}