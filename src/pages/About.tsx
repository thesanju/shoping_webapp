
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const AboutTimeline = () => {
  const timelineItems = [
    {
      year: '1985',
      title: 'Beginning',
      description: 'Our company was founded with a vision to provide quality retro products.'
    },
    {
      year: '1995',
      title: 'Growth',
      description: 'Expanded our catalog with unique vintage and retro-inspired items.'
    },
    {
      year: '2010',
      title: 'Digital Era',
      description: 'Launched our online store to reach customers globally.'
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Combining retro aesthetics with modern technology and sustainable practices.'
    }
  ];

  return (
    <div className="relative my-12">
      {/* Vertical line */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-retro-neutral/20"></div>
      
      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div 
            key={index}
            className="flex"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-32 pt-1">
              <div className="font-bold text-xl text-retro-neutral">{item.year}</div>
            </div>
            <div className="relative">
              {/* Dot on timeline */}
              <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full border-4 border-white bg-retro-neutral"></div>
              <div className="pl-8">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-retro-mediumgray">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="bg-gradient-to-b from-retro-softgray to-white">
        <div className="retro-container py-16">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold mb-4">About Retro Catalog</h1>
            <p className="text-retro-mediumgray text-lg">
              We curate timeless products with minimalist design, blending nostalgia with modern functionality.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="retro-container py-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-retro-mediumgray mb-4">
              Retro Catalog was founded on a simple idea: to bring back the quality and craftsmanship of 
              timeless products while embracing minimalist design principles.
            </p>
            <p className="text-retro-mediumgray mb-4">
              Our collection features carefully selected items that combine vintage aesthetics with modern 
              functionality, creating a unique shopping experience that celebrates the past while looking 
              toward the future.
            </p>
            <p className="text-retro-mediumgray">
              Each product in our catalog is chosen for its distinctive character, quality materials, 
              and enduring design that stands the test of time.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-retro-softgray rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Retro items on display"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          
          <AboutTimeline />
        </div>
        
        <div className="bg-retro-softgray rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-retro-dark mb-2">1000+</div>
              <div className="text-retro-mediumgray">Products</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-retro-dark mb-2">50+</div>
              <div className="text-retro-mediumgray">Countries</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-retro-dark mb-2">10k+</div>
              <div className="text-retro-mediumgray">Happy Customers</div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-retro-mediumgray mb-8">
            We believe in quality over quantity, timeless design over fleeting trends, and creating 
            products that bring joy and nostalgia to our customers' lives.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="font-bold mb-2">Quality</h3>
              <p className="text-sm text-retro-mediumgray">Durability and craftsmanship in every product</p>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold mb-2">Authenticity</h3>
              <p className="text-sm text-retro-mediumgray">True to the spirit of retro design</p>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold mb-2">Sustainability</h3>
              <p className="text-sm text-retro-mediumgray">Built to last, reducing waste and consumption</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
