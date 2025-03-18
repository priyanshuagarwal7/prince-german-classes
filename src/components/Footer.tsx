
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-50 pt-16 pb-8 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">EuroCAS</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Advancing innovation in circuits and systems through collaboration, education, and research excellence.
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
              <li><Link to="/events" className="text-muted-foreground hover:text-purple-600 transition-colors">Conferences & Events</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-purple-600 transition-colors">Publications & Resources</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-purple-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Conference Proceedings</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Journals & Publications</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Membership Information</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Research Grants</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                <span className="text-muted-foreground">123 Science Avenue, Brussels, Belgium, BE-1000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-600 mr-3" />
                <a href="mailto:info@eurocas.org" className="text-muted-foreground hover:text-purple-600 transition-colors">info@eurocas.org</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-3" />
                <a href="tel:+32123456789" className="text-muted-foreground hover:text-purple-600 transition-colors">+32 123 456 789</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} EuroCAS. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
