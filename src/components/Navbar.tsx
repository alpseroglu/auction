import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  hideSearch?: boolean;
}

export default function Navbar({ hideSearch }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">B2B Market</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Categories</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Auctions</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Suppliers</a>

            <button className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
              <User className="h-5 w-5" />
              <span>Account</span>
            </button>

            <button className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a className="block px-3 py-2 text-gray-600 hover:text-blue-600">Categories</a>
            <a className="block px-3 py-2 text-gray-600 hover:text-blue-600">Auctions</a>
            <a className="block px-3 py-2 text-gray-600 hover:text-blue-600">Suppliers</a>
            <a className="block px-3 py-2 text-gray-600 hover:text-blue-600">Account</a>
            <a className="block px-3 py-2 text-gray-600 hover:text-blue-600">Cart</a>
          </div>
        </div>
      )}
    </nav>
  );
}