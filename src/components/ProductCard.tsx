
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Star, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const categoryColors = {
    electronics: 'bg-retro-blue text-retro-dark',
    clothing: 'bg-retro-peach text-retro-dark',
    home: 'bg-retro-yellow text-retro-dark',
    books: 'bg-retro-softgray text-retro-dark',
    toys: 'bg-retro-mint text-retro-dark',
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "retro-card group animate-fade-in",
        "transition-all duration-300 hover:-translate-y-1",
        "flex flex-col h-full"
      )}
    >
      <div className="relative mb-4 overflow-hidden rounded-md">
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/75 flex items-center justify-center z-10">
            <Badge variant="outline" className="bg-retro-dark text-white border-none px-3 py-1">Out of Stock</Badge>
          </div>
        )}
        
        {product.featured && (
          <div className="absolute top-2 right-2 z-10 animate-wiggle">
            <Badge className="bg-retro-neon text-white border-none flex items-center gap-1">
              <Zap size={12} className="fill-white" /> Hot Pick
            </Badge>
          </div>
        )}
        
        <div className="aspect-square overflow-hidden bg-retro-softgray">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      <div className="flex-grow flex flex-col">
        <div className="mb-2 flex justify-between items-start">
          <Badge className={cn("font-normal text-xs", categoryColors[product.category])}>
            {product.category}
          </Badge>
          
          <div className="flex items-center bg-retro-yellow px-2 py-1 rounded-full">
            <Star size={14} className="text-retro-dark fill-retro-dark" />
            <span className="text-xs ml-1 font-bold">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="font-bold mb-1 retro-title">{product.name}</h3>
        <p className="text-sm text-retro-mediumgray mb-3 flex-grow">
          {product.description.length > 70 
            ? `${product.description.substring(0, 70)}...` 
            : product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-retro-dark">${product.price.toFixed(2)}</span>
          <button className="retro-btn text-sm bg-retro-softgray hover:bg-retro-neon hover:text-white transition-all">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
