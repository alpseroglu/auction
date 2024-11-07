import { Clock, TrendingUp } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const timeRemaining = product.auction?.isActive
    ? new Date(product.auction.endTime).getTime() - new Date().getTime()
    : 0;

  const formatTimeRemaining = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="text-sm text-gray-500">
            Min: {product.minQuantity} units
          </span>
        </div>
        
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4">
          {product.auction?.isActive ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-semibold">
                    Current Bid: ${product.auction.currentBid}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-orange-500">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">
                    {formatTimeRemaining(timeRemaining)}
                  </span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Place Bid
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">
                  per unit
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Seller: {product.seller.name}</span>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{product.seller.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}