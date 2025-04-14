
import React, { useState } from 'react';
import { useProducts } from '@/contexts/ProductContext';
import ProductCard from './ProductCard';
import { PackageSearch, Sparkles } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ProductGrid: React.FC = () => {
  const { filteredProducts } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  
  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  // Go to page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
        <div className="mb-6 relative">
          <div className="absolute -top-8 -right-8">
            <Sparkles size={24} className="text-retro-yellow animate-pulse" />
          </div>
          <PackageSearch size={64} className="text-retro-neutral mb-2" />
          <div className="absolute -bottom-4 -left-8">
            <Sparkles size={24} className="text-retro-peach animate-pulse" />
          </div>
        </div>
        <h3 className="text-2xl font-medium mb-3">No products found</h3>
        <p className="text-retro-mediumgray mb-6 max-w-md">
          We couldn't find any products matching your filters. Try adjusting your search criteria or browse our other categories.
        </p>
        <div className="w-36 h-1 bg-retro-neutral/20 rounded-full mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="retro-grid">
        {currentProducts.map((product, index) => (
          <div 
            key={product.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination className="pt-4 animate-fade-in">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => paginate(currentPage - 1)}
                  className="hover:bg-retro-softgray cursor-pointer"
                />
              </PaginationItem>
            )}
            
            {pageNumbers.map(number => {
              // Show current page, first, last, and pages around current
              if (
                number === 1 || 
                number === totalPages || 
                (number >= currentPage - 1 && number <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={number}>
                    <PaginationLink
                      onClick={() => paginate(number)}
                      isActive={currentPage === number}
                      className={`cursor-pointer ${currentPage === number ? 'bg-retro-neutral text-white hover:bg-retro-dark border-retro-neutral' : 'hover:bg-retro-softgray'}`}
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              
              // Show ellipsis between page groups
              if (
                (number === 2 && currentPage > 3) || 
                (number === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return (
                  <PaginationItem key={number}>
                    <span className="px-4 py-2">...</span>
                  </PaginationItem>
                );
              }
              
              return null;
            })}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  onClick={() => paginate(currentPage + 1)}
                  className="hover:bg-retro-softgray cursor-pointer"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ProductGrid;
