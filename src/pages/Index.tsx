
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
