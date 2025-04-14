
import React from 'react';
import { useProducts } from '@/contexts/ProductContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowUpDown } from 'lucide-react';

const ProductSorting: React.FC = () => {
  const { sortOption, setSortOption, filteredProducts } = useProducts();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <p className="text-sm text-retro-mediumgray mb-2 sm:mb-0">
        Showing <span className="font-medium text-retro-dark">{filteredProducts.length}</span> products
      </p>
      
      <div className="flex items-center">
        <span className="text-sm mr-2 text-retro-mediumgray">Sort by:</span>
        <Select value={sortOption} onValueChange={(value) => setSortOption(value as any)}>
          <SelectTrigger className="w-[180px] h-9 text-sm border-retro-neutral/30 focus:ring-retro-dark">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductSorting;
