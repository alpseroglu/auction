import React from 'react';
import { ArrowRight } from 'lucide-react';

const productLists = [
  {
    title: "New Arrivals",
    items: [
      "Industrial CNC Machine - Pro Series X1",
      "Bulk Cotton Yarn - Premium Grade",
      "Solar Panel Installation Kit",
      "Electronic Component Set A-2023",
      "Steel Pipes Bundle - 2000 units",
      "Industrial Safety Equipment Kit",
      "Raw Copper Wire - 1000m",
      "Automated Packaging System",
      "LED Panel Lights - Bulk",
      "Industrial Grade Lubricants"
    ]
  },
  {
    title: "Most Popular",
    items: [
      "Industrial Grade Fasteners",
      "Textile Manufacturing Tools",
      "Circuit Board Components",
      "Raw Aluminum Sheets",
      "Industrial Cleaning Supplies",
      "Packaging Materials Bundle",
      "Electronic Testing Equipment",
      "Industrial Paint Supplies",
      "Machinery Spare Parts Kit",
      "Bulk Plastic Granules"
    ]
  },
  {
    title: "Special Offers",
    items: [
      "Wholesale Metal Sheets",
      "Bulk Electronic Components",
      "Industrial Tool Set - Premium",
      "Raw Material Package Deal",
      "Safety Equipment Bundle",
      "Manufacturing Equipment Set",
      "Bulk Wire Solutions",
      "Industrial Grade Chemicals",
      "Processing Unit Components",
      "Packaging Solution Kit"
    ]
  }
];

export default function ProductLists() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productLists.map((list) => (
            <div key={list.title} className="bg-gray-50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{list.title}</h3>
                <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm">
                  View all
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ul className="space-y-3">
                {list.items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                      <span className="w-6 text-gray-400">{index + 1}.</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}