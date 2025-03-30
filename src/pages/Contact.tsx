
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-lavender-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="section-heading">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="section-subheading">
                Have questions about our German language programs? We're here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-lavender-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <p className="text-muted-foreground">123 Language Avenue, Berlin, Germany, DE-10115</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-lavender-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@princegerman.com" className="hover:text-lavender-600 transition-colors">info@princegerman.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-lavender-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+49123456789" className="hover:text-lavender-600 transition-colors">+49 123 456 789</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6">Visit Our Office</h2>
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-lavender-100">
                  {/* Replace with your own map or image */}
                  <div className="w-full h-full flex items-center justify-center text-lavender-600">
                    <p className="text-center">Map will be displayed here</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our office is open Monday to Friday from 9:00 AM to 5:00 PM. Feel free to visit us during these hours.
                </p>
                <p className="text-muted-foreground">
                  Please note that appointments are recommended for in-person consultations about our language programs 
                  and services to ensure we can provide you with dedicated attention.
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

export default Contact;
