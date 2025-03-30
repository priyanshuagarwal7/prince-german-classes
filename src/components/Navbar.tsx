
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline-block text-foreground">Prince German</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link to="/ausbildung" className={`nav-link ${isActive('/ausbildung') ? 'active' : ''}`}>Ausbildung</Link>
            <Link to="/nursing-program" className={`nav-link ${isActive('/nursing-program') ? 'active' : ''}`}>Nursing Program</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-24 px-6 transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-6 text-lg">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-lavender-600 font-medium' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${isActive('/about') ? 'text-lavender-600 font-medium' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/ausbildung" 
            className={`${isActive('/ausbildung') ? 'text-lavender-600 font-medium' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            Ausbildung
          </Link>
          <Link 
            to="/nursing-program" 
            className={`${isActive('/nursing-program') ? 'text-lavender-600 font-medium' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            Nursing Program
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-lavender-600 font-medium' : 'text-foreground'}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
