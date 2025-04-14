
import React from 'react';
import { useProducts } from '@/contexts/ProductContext';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { FilterX } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'home', name: 'Home Goods' },
  { id: 'books', name: 'Books & Journals' },
  { id: 'toys', name: 'Toys' }
];

const ProductFilters: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    maxPrice,
    resetFilters,
  } = useProducts();

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };

  return (
    <div className="border border-retro-neutral/20 p-4 rounded-md bg-white animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="text-xs flex items-center gap-1 hover:bg-retro-softgray"
        >
          <FilterX size={14} /> Reset
        </Button>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-sm">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <button
                onClick={() => setSelectedCategory(category.id as any)}
                className={`text-sm py-1 hover:text-retro-dark transition-colors w-full text-left ${
                  selectedCategory === category.id
                    ? 'font-medium text-retro-dark'
                    : 'text-retro-mediumgray'
                }`}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3 text-sm">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[priceRange[0], priceRange[1]]}
            max={maxPrice}
            step={1}
            value={[priceRange[0], priceRange[1]]}
            onValueChange={handlePriceChange}
            className="my-6"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>${priceRange[0].toFixed(2)}</span>
          <span>${priceRange[1].toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
