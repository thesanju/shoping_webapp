
import React from 'react';
import { Zap, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-retro-neutral/20 py-12 mt-12 bg-gradient-to-br from-retro-dark to-[#1A0B3A] text-white">
      <div className="retro-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-black mb-4 text-xl flex items-center">
              <Zap size={24} className="mr-2 text-retro-neon" />
              <span className="gradient-text">RETRO VIBES</span>
            </h3>
            <p className="text-sm text-retro-lightgray">
              Your curated collection of nostalgic products with a modern twist. Vintage aesthetics meet contemporary function.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-retro-neon transition-colors">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-retro-neon transition-colors">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-retro-neon transition-colors">
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-retro-yellow">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-retro-neon transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-retro-neon transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-retro-neon transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-retro-neon transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-retro-neon transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-retro-mint">Stay Updated</h3>
            <p className="text-sm text-white/70 mb-4">
              Get the latest drops and exclusive offers right to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-l-full border-0 py-3 px-4 text-sm flex-1 focus:outline-none bg-white/10 text-white"
              />
              <button className="bg-retro-neon text-white rounded-r-full px-5 py-3 text-sm font-bold hover:bg-white hover:text-retro-neon transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Retro Vibes. All rights reserved. <span className="text-retro-neon">Made with love for Generation Z</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
