
import React, { createContext, useContext, ReactNode, useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types/product';
import { products as initialProducts } from '../data/products';

type SortOption = 'price-asc' | 'price-desc' | 'newest';

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: ProductCategory | 'all';
  priceRange: [number, number];
  sortOption: SortOption;
  maxPrice: number;
  setSelectedCategory: (category: ProductCategory | 'all') => void;
  setPriceRange: (range: [number, number]) => void;
  setSortOption: (option: SortOption) => void;
  resetFilters: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
  initialCategory?: ProductCategory | 'all';
}

export const ProductProvider = ({ children, initialCategory = 'all' }: ProductProviderProps) => {
  const [products] = useState<Product[]>(initialProducts);
  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price)), [products]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortOption) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      default:
        break;
    }

    return filtered;
  }, [products, selectedCategory, priceRange, sortOption]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, maxPrice]);
    setSortOption('newest');
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        selectedCategory,
        priceRange,
        sortOption,
        maxPrice,
        setSelectedCategory,
        setPriceRange,
        setSortOption,
        resetFilters
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
