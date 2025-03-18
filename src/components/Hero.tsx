
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-300 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6">
              <p className="text-purple-700 font-medium text-sm">European Conference on Circuits and Systems</p>
            </div>
            <h1 className="h1 mb-6">
              Advancing <span className="gradient-text">Innovation</span> in Circuits and Systems
            </h1>
            <p className="p-large mb-8 max-w-xl">
              Connecting researchers, industry professionals, and students to drive forward the boundaries of electronic circuit and system design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/events" className="button-primary">
                Upcoming Events
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link to="/about" className="button-secondary">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/30 to-purple-500/30 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="glass-card p-6 relative z-10 overflow-hidden">
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Circuit board close-up" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">2024 Annual Conference</h3>
                <p className="text-muted-foreground mb-4">Join us in Vienna for the latest advancements in circuit design, signal processing, and system integration.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Registration Open</span>
                  </div>
                  <Link to="/events" className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
