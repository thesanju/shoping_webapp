
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  MinusCircle,
  PlusCircle,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  CreditCard
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Demo cart items
const initialCartItems = [
  {
    id: 2,
    productId: 2,
    name: 'Vintage Typewriter',
    price: 129.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    productId: 6,
    name: 'Classic Desk Lamp',
    price: 49.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1534882406436-215bba638ba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
    toast("Item removed", {
      description: "The item has been removed from your cart."
    });
  };

  const handleCheckout = () => {
    toast.success("Order submitted", {
      description: "Thank you for your order!"
    });
    setCartItems([]);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="retro-container py-12 flex-grow">
        <div className="mb-8">
          <Link to="/" className="text-sm flex items-center text-retro-mediumgray hover:text-retro-dark transition-colors group">
            <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Continue Shopping
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <ShoppingBag size={64} className="text-retro-neutral mb-2" />
            </motion.div>
            <h3 className="text-2xl font-medium mb-3">Your cart is empty</h3>
            <p className="text-retro-mediumgray mb-6 max-w-md">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-md border border-retro-neutral/20 overflow-hidden">
                <div className="bg-retro-softgray p-4">
                  <div className="grid grid-cols-12 gap-2 text-sm font-medium">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                </div>

                <div className="divide-y divide-retro-neutral/20">
                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-4"
                    >
                      <div className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-6 flex items-center">
                          <div className="mr-4 w-16 h-16 bg-retro-softgray rounded overflow-hidden">
                            <Link to={`/product/${item.productId}`}>
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </Link>
                          </div>
                          <div>
                            <Link to={`/product/${item.productId}`} className="font-medium hover:underline">
                              {item.name}
                            </Link>
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="flex items-center text-xs text-red-500 hover:text-red-700 transition-colors mt-1"
                            >
                              <Trash2 size={12} className="mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="col-span-2 text-center">
                          ${item.price.toFixed(2)}
                        </div>
                        
                        <div className="col-span-2 flex items-center justify-center">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className="text-retro-mediumgray hover:text-retro-dark"
                          >
                            <MinusCircle size={16} />
                          </button>
                          
                          <span className="w-8 text-center">{item.quantity}</span>
                          
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className="text-retro-mediumgray hover:text-retro-dark"
                          >
                            <PlusCircle size={16} />
                          </button>
                        </div>
                        
                        <div className="col-span-2 text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="rounded-md border border-retro-neutral/20 p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-retro-mediumgray">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-retro-mediumgray">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-retro-mediumgray">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-retro-neutral/20 pt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full flex items-center gap-2 justify-center" 
                  onClick={handleCheckout}
                >
                  <CreditCard size={16} />
                  Checkout
                </Button>
                
                <div className="mt-4 text-xs text-retro-mediumgray text-center">
                  Free shipping on orders over $50
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
