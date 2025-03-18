
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-400 rounded-2xl transform -rotate-2 scale-105"></div>
            <div className="glass-card-purple p-8 relative z-10">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <p>To foster collaboration and innovation within the circuits and systems community across Europe and worldwide.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <p>To provide a platform for knowledge exchange and professional development for researchers and practitioners.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <p>To advance the state-of-the-art in circuits and systems through promotion of cutting-edge research.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <p>To bridge the gap between academia and industry to accelerate innovation and application.</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-purple-200">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-white font-medium">JS</div>
                    <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center text-white font-medium">AK</div>
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">LM</div>
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">+4</div>
                  </div>
                  <p className="text-sm text-muted-foreground">Led by dedicated professionals committed to excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6">
              <p className="text-purple-700 font-medium text-sm">About EuroCAS</p>
            </div>
            
            <h2 className="h2 mb-6">Pioneering Excellence in <span className="gradient-text">Circuits and Systems</span></h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              The European Conference on Circuits and Systems (EuroCAS) is a premier forum for researchers, professionals, and students in the field of circuit and system design.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Since our founding in 1995, we have grown to become one of the most respected organizations in our field, with members from over 30 countries. Our annual conference brings together more than 500 participants to share knowledge, discuss emerging trends, and form valuable collaborations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border border-purple-100 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
                <p className="text-sm text-muted-foreground">Countries Represented</p>
              </div>
              <div className="border border-purple-100 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Annual Participants</p>
              </div>
              <div className="border border-purple-100 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <p className="text-sm text-muted-foreground">Research Papers</p>
              </div>
              <div className="border border-purple-100 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
