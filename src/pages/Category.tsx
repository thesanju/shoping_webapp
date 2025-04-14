
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '@/contexts/ProductContext';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import ProductFilters from '@/components/ProductFilters';
import ProductSorting from '@/components/ProductSorting';
import { ProductProvider } from '@/contexts/ProductContext';
import { ProductCategory } from '@/types/product';

// Helper function to format category name
const formatCategoryName = (category: string): string => {
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  return capitalizedCategory;
};

const categoryDescriptions: Record<ProductCategory, string> = {
  electronics: "Discover vintage-inspired gadgets that combine retro aesthetics with modern functionality.",
  clothing: "Explore timeless fashion pieces that never go out of style, from classic cuts to vintage patterns.",
  home: "Transform your living space with our collection of retro-inspired home décor and furnishings.",
  books: "Dive into our curated selection of classic literature, vintage editions, and timeless stories.",
  toys: "Relive childhood memories with our nostalgic toys and collectibles that bring joy to all ages."
};

const CategoryBanner = ({ category }: { category: ProductCategory }) => {
  // Background colors for different categories
  const bannerStyles: Record<ProductCategory, string> = {
    electronics: 'bg-retro-blue',
    clothing: 'bg-retro-peach',
    home: 'bg-retro-yellow',
    books: 'bg-retro-softgray',
    toys: 'bg-retro-neutral/20',
  };

  return (
    <div className={`${bannerStyles[category]} py-12`}>
      <div className="retro-container">
        <h1 className="text-3xl font-bold mb-2">{formatCategoryName(category)}</h1>
        <p className="text-retro-mediumgray max-w-2xl">
          {categoryDescriptions[category]}
        </p>
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const validCategory = ['electronics', 'clothing', 'home', 'books', 'toys'].includes(categoryId || '') 
    ? categoryId as ProductCategory 
    : 'electronics';

  return (
    <ProductProvider initialCategory={validCategory}>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <CategoryBanner category={validCategory} />
        
        <main className="flex-grow">
          <div className="retro-container py-8">
            <div className="mb-6">
              <Link to="/" className="text-sm flex items-center text-retro-mediumgray hover:text-retro-dark transition-colors group">
                <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to all categories
              </Link>
            </div>

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

export default Category;
