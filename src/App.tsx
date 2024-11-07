import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductLists from './components/ProductLists';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar hideSearch />
      <Hero />
      <CategoryGrid />
      <ProductLists />
      <main className="max-w-7xl mx-auto py-6 space-y-12 flex-grow">
        <ProductSection 
          title="Best Sellers" 
          subtitle="Most popular products across our marketplace"
          type="bestsellers" 
        />
        <ProductSection 
          title="Trending Now" 
          subtitle="Hot items with active auctions"
          type="trending" 
        />
        <ProductSection 
          title="Coming Soon" 
          subtitle="Be the first to know about upcoming products"
          type="upcoming" 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;