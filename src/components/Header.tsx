
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  Menu, 
  X,
  User,
  Info,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Search implementation would go here
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/category/electronics', label: 'Electronics' },
    { to: '/category/clothing', label: 'Clothing' },
    { to: '/category/home', label: 'Home' },
    { to: '/category/books', label: 'Books' },
    { to: '/category/toys', label: 'Toys' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <header className="py-4 bg-white">
        <div className="retro-container flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 p-2 rounded-md hover:bg-retro-softgray"
              onClick={toggleMenu}
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <Link to="/" className="text-2xl font-black tracking-tight gradient-text flex items-center">
              <Zap size={24} className="mr-1 text-retro-neon" />
              RETRO VIBES
            </Link>
            
            <nav className="hidden md:flex ml-10 space-x-6">
              {menuItems.slice(0, 3).map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={cn(
                    "text-sm hover:text-retro-neon transition-colors relative",
                    isActive(item.to) ? "font-bold text-retro-dark after:content-[''] after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-retro-neon" : "text-retro-mediumgray"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="relative group">
                <span className="text-sm text-retro-mediumgray hover:text-retro-neon transition-colors cursor-pointer">
                  More
                </span>
                <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-lg p-2 hidden group-hover:block z-10">
                  {menuItems.slice(3).map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "block px-3 py-2 text-sm rounded-md hover:bg-retro-softgray transition-colors",
                        isActive(item.to) ? "font-bold text-retro-dark" : "text-retro-mediumgray"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-4">
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="rounded-full border border-retro-neutral/30 py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-retro-neon w-40 lg:w-60"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-retro-mediumgray" />
                </button>
              </form>
            </div>
            
            <Link 
              to="/wishlist" 
              className={cn(
                "p-2 rounded-full hover:bg-retro-softgray transition-colors relative",
                isActive('/wishlist') && "bg-retro-softgray"
              )}
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-retro-neon text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">3</span>
            </Link>
            
            <Link 
              to="/cart" 
              className={cn(
                "p-2 rounded-full hover:bg-retro-softgray transition-colors relative",
                isActive('/cart') && "bg-retro-softgray"
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-retro-neon text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">2</span>
            </Link>
            
            <Link 
              to="/about" 
              className={cn(
                "p-2 rounded-full hover:bg-retro-softgray transition-colors hidden sm:flex",
                isActive('/about') && "bg-retro-softgray"
              )}
            >
              <Info className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 w-3/4 max-w-sm bg-white z-50 shadow-lg"
          >
            <div className="p-4 border-b border-retro-neutral/20 flex justify-between items-center">
              <h2 className="font-bold">Menu</h2>
              <button 
                className="p-2 rounded-md hover:bg-retro-softgray"
                onClick={toggleMenu}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4">
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full rounded-md border border-retro-neutral/30 py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-retro-dark"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-retro-mediumgray" />
                  </button>
                </div>
              </form>
              
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "block py-2 text-sm hover:text-retro-dark transition-colors",
                      isActive(item.to) ? "font-medium text-retro-dark" : "text-retro-mediumgray"
                    )}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-retro-neutral/10 pt-4 mt-4">
                  <div className="flex space-x-4 items-center">
                    <Link
                      to="/wishlist"
                      className="flex items-center py-2 text-sm text-retro-mediumgray hover:text-retro-dark"
                      onClick={toggleMenu}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Link>
                    <Link
                      to="/cart"
                      className="flex items-center py-2 text-sm text-retro-mediumgray hover:text-retro-dark"
                      onClick={toggleMenu}
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Cart
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
