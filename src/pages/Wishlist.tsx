
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowLeft,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Demo wishlist items
const initialWishlistItems = [
  {
    id: 1,
    productId: 5,
    name: 'Vintage Polaroid Camera',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    inStock: true
  },
  {
    id: 2,
    productId: 9,
    name: 'Mechanical Wristwatch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    inStock: true
  },
  {
    id: 3,
    productId: 12,
    name: 'Retro Radio Player',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1615226858046-82e128ce4e59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    inStock: false
  }
];

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const handleRemoveItem = (itemId: number) => {
    setWishlistItems(items => items.filter(item => item.id !== itemId));
    toast("Removed from wishlist", {
      description: "The item has been removed from your wishlist."
    });
  };

  const handleAddToCart = (item: typeof initialWishlistItems[0]) => {
    toast.success("Added to cart", {
      description: `${item.name} has been added to your cart.`
    });
    // Would typically add to cart here
  };

  // Animation variants for list items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="retro-container py-12 flex-grow">
        <div className="mb-8">
          <Link to="/" className="text-sm flex items-center text-retro-mediumgray hover:text-retro-dark transition-colors group">
            <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to catalog
          </Link>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Wishlist</h1>
          <span className="text-retro-mediumgray">{wishlistItems.length} items</span>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Heart size={64} className="text-retro-neutral mb-2" />
            </motion.div>
            <h3 className="text-2xl font-medium mb-3">Your wishlist is empty</h3>
            <p className="text-retro-mediumgray mb-6 max-w-md">
              Save items you love to your wishlist and find them all in one place.
            </p>
            <Link to="/">
              <Button>Start shopping</Button>
            </Link>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {wishlistItems.map((item) => (
              <motion.div 
                key={item.id}
                variants={itemAnimation}
                className="border border-retro-neutral/20 rounded-md overflow-hidden hover:shadow-md transition-shadow"
              >
                <Link to={`/product/${item.productId}`} className="block relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
                      <span className="bg-retro-dark text-white px-3 py-1 rounded-sm text-sm font-medium">Out of Stock</span>
                    </div>
                  )}
                </Link>
                
                <div className="p-4">
                  <Link to={`/product/${item.productId}`} className="font-medium hover:underline">
                    {item.name}
                  </Link>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold">${item.price.toFixed(2)}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 rounded-full hover:bg-retro-softgray transition-colors"
                        title="Remove from wishlist"
                      >
                        <Trash2 size={16} className="text-retro-mediumgray hover:text-red-500" />
                      </button>
                      
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="p-2 rounded-full hover:bg-retro-softgray transition-colors"
                        title="Add to cart"
                        disabled={!item.inStock}
                      >
                        <ShoppingCart size={16} className={`${!item.inStock ? 'text-retro-lightgray' : 'text-retro-mediumgray hover:text-retro-dark'}`} />
                      </button>
                    </div>
                  </div>
                  
                  {item.inStock ? (
                    <Button 
                      className="w-full mt-3"
                      onClick={() => handleAddToCart(item)}
                      size="sm"
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full mt-3 opacity-60"
                      size="sm"
                      disabled
                    >
                      Out of Stock
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
