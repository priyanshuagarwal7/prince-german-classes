
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
          </div>
          
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6">
                  <p className="text-purple-700 font-medium text-sm">About Us</p>
                </div>
                <h1 className="h1 mb-6">
                  Our <span className="gradient-text">Story</span> & Mission
                </h1>
                <p className="p-large mb-6">
                  Prince German Classes is a leading organization dedicated to advancing German language education and preparing professionals for successful careers in Germany.
                </p>
                <p className="text-muted-foreground mb-8">
                  We unite students, professionals, and educators to foster language learning excellence and cultural exchange, helping individuals achieve their goals of working and living in Germany.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/30 to-purple-500/30 rounded-2xl transform rotate-2 scale-105"></div>
                <div className="glass-card p-8 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card-purple p-4 text-center">
                      <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="text-xl font-bold mb-1">500+</h3>
                      <p className="text-sm text-muted-foreground">Students Trained</p>
                    </div>
                    <div className="glass-card-purple p-4 text-center">
                      <BookOpen className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="text-xl font-bold mb-1">10+</h3>
                      <p className="text-sm text-muted-foreground">Course Offerings</p>
                    </div>
                    <div className="glass-card-purple p-4 text-center">
                      <Award className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="text-xl font-bold mb-1">5+</h3>
                      <p className="text-sm text-muted-foreground">Years of Excellence</p>
                    </div>
                    <div className="glass-card-purple p-4 text-center">
                      <Globe className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="text-xl font-bold mb-1">15+</h3>
                      <p className="text-sm text-muted-foreground">Countries Represented</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="section-subheading">
                The core principles that guide our organization and community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We are committed to the highest standards of educational quality and integrity in all our programs and services.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Support</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive guidance and assistance to our students throughout their language learning and career preparation journey.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace modern teaching methods and technologies to enhance the language learning experience and prepare students for professional success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
