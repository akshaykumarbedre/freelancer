"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden bg-indigo-50 p-2 rounded-md" 
        onClick={toggleMenu}
      >
        <Menu className="w-5 h-5 text-indigo-600" />
      </button>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-3 shadow-lg z-50">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <span className="font-bold text-indigo-600">Menu</span>
            <button onClick={toggleMenu}>
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>
          <nav className="flex flex-col space-y-3">
            <a href="#services" className="py-2 px-4 hover:bg-indigo-50 rounded-md" onClick={toggleMenu}>Services</a>
            <a href="#projects" className="py-2 px-4 hover:bg-indigo-50 rounded-md" onClick={toggleMenu}>Projects</a>
            <a href="#testimonials" className="py-2 px-4 hover:bg-indigo-50 rounded-md" onClick={toggleMenu}>Testimonials</a>
            <a href="#about" className="py-2 px-4 hover:bg-indigo-50 rounded-md" onClick={toggleMenu}>About</a>
            <a 
              href="#contact" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-center my-2"
              onClick={toggleMenu}
            >
              Get Quote
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
