
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductFilters from '@/components/ProductFilters';
import ProductSorting from '@/components/ProductSorting';
import ProductGrid from '@/components/ProductGrid';
import { ProductProvider } from '@/contexts/ProductContext';
import { Sparkles } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <ProductProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section with retro vibes */}
          <div className="bg-gradient-to-br from-retro-softgray to-white py-12">
            <div className="retro-container py-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-black mb-4 retro-title">
                  <span className="gradient-text">Discover Nostalgic Treasures</span>
                </h1>
                <p className="text-lg text-retro-mediumgray mb-8">
                  Find vintage-inspired products that blend retro aesthetics with modern function.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="retro-bubble flex items-center text-retro-mediumgray">
                    <Sparkles className="text-retro-neon mr-2" size={16} />
                    <span>Y2K Nostalgia</span>
                  </div>
                  <div className="retro-bubble flex items-center text-retro-mediumgray">
                    <Sparkles className="text-retro-neon mr-2" size={16} />
                    <span>Aesthetic Vibes</span>
                  </div>
                  <div className="retro-bubble flex items-center text-retro-mediumgray">
                    <Sparkles className="text-retro-neon mr-2" size={16} />
                    <span>Trending Picks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="retro-container py-8">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
              <aside className="md:sticky md:top-4 self-start">
                <ProductFilters />
              </aside>
              
              <div>
                <ProductSorting />
                <ProductGrid />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProductProvider>
  );
};

export default Index;
