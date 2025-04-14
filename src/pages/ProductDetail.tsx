import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '@/contexts/ProductContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  Check,
  PackageX,
  Heart,
  Share2,
  Truck,
  Clock,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { ProductProvider } from '@/contexts/ProductContext';

const ProductDetailContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(id));
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get related products (same category)
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  const handleAddToCart = () => {
    toast.success("Product added to cart", {
      description: `${product?.name} has been added to your cart.`
    });
  };
  
  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast("Added to wishlist", {
        description: `${product?.name} has been added to your wishlist.`
      });
    } else {
      toast("Removed from wishlist", {
        description: `${product?.name} has been removed from your wishlist.`
      });
    }
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link copied", {
      description: "Product link has been copied to clipboard."
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="retro-container py-12 flex-grow">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <PackageX size={48} className="text-retro-neutral mb-4" />
            <h2 className="text-2xl font-medium mb-2">Product not found</h2>
            <p className="text-retro-mediumgray mb-6">
              The product you are looking for does not exist.
            </p>
            <Link to="/">
              <Button>Return to Shop</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryColors = {
    electronics: 'bg-retro-blue',
    clothing: 'bg-retro-peach',
    home: 'bg-retro-yellow',
    books: 'bg-retro-softgray',
    toys: 'bg-retro-neutral/20',
  };

  // Multiple images simulation (using the same image for demo purposes)
  const productImages = [
    product.imageUrl,
    product.imageUrl.replace('?', '?v=2'),
    product.imageUrl.replace('?', '?v=3'),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="retro-container py-12 flex-grow">
        <div className="mb-8">
          <Link to="/" className="text-sm flex items-center text-retro-mediumgray hover:text-retro-dark transition-colors group">
            <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="bg-retro-softgray rounded-md overflow-hidden relative">
              <motion.img
                key={currentImageIndex}
                src={productImages[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {product.featured && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-retro-yellow text-retro-dark font-medium">Featured</Badge>
                </div>
              )}
            </div>
            
            {productImages.length > 1 && (
              <div className="flex justify-center space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-retro-dark' : 'bg-retro-softgray'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <Badge className={cn("font-normal", categoryColors[product.category])}>
                {product.category}
              </Badge>
              
              <div className="flex items-center">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm ml-1 font-medium">{product.rating}/5</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-6 bg-retro-softgray rounded-md p-4">
              <p className="text-retro-mediumgray">{product.description}</p>
            </div>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <div className={`flex items-center ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                  {product.inStock ? (
                    <>
                      <Check size={16} className="mr-1" />
                      <span className="text-sm font-medium">In Stock</span>
                    </>
                  ) : (
                    <>
                      <PackageX size={16} className="mr-1" />
                      <span className="text-sm font-medium">Out of Stock</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex items-center text-retro-mediumgray">
                <Truck size={16} className="mr-2" />
                <span className="text-sm">Free shipping on orders over $50</span>
              </div>
              
              <div className="flex items-center text-retro-mediumgray">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">30-day money-back guarantee</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button 
                className="flex-1 flex items-center justify-center gap-2"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
              
              <Button 
                variant="outline" 
                className={cn(
                  "flex items-center justify-center gap-2",
                  isWishlisted && "bg-retro-peach/20 border-retro-peach"
                )}
                onClick={handleToggleWishlist}
              >
                <Heart size={16} className={isWishlisted ? "fill-retro-peach text-retro-peach" : ""} />
                {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
              </Button>
              
              <Button variant="ghost" onClick={handleShare}>
                <Share2 size={16} />
              </Button>
            </div>

            {product.specs && (
              <Card className="border-retro-neutral/20">
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-4">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex text-sm">
                        <span className="text-retro-mediumgray mr-2 min-w-[100px]">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Link to={`/category/${product.category}`} className="text-sm flex items-center hover:text-retro-dark group">
                View all <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const ProductDetail: React.FC = () => {
  return (
    <ProductProvider>
      <ProductDetailContent />
    </ProductProvider>
  );
};

export default ProductDetail;
