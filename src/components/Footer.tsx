
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-50 pt-16 pb-8 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">Prince German Classes</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Advancing language learning and career preparation for professionals seeking opportunities in Germany.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-purple-600 transition-colors">About Us</Link></li>
              <li><Link to="/ausbildung" className="text-muted-foreground hover:text-purple-600 transition-colors">Ausbildung</Link></li>
              <li><Link to="/nursing-program" className="text-muted-foreground hover:text-purple-600 transition-colors">Nursing Program</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-purple-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                <span className="text-muted-foreground">6 Manu Marg Kabir Colony Sant Sukhdev Shah Aurigyan Sansthan Alwar (Raj.) 301001</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-600 mr-3" />
                <a href="mailto:prince.bajaj2017start@gmail.com" className="text-muted-foreground hover:text-purple-600 transition-colors">prince.bajaj2017start@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-3" />
                <a href="tel:+918949887074" className="text-muted-foreground hover:text-purple-600 transition-colors">+91 8949887074</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Prince German Classes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
