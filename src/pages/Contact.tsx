
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
                      <p className="text-muted-foreground">6 MANU MARG KABIR COLONY SANT SUKHDEV SHAH AURIGYAN SANSTHAN ALWAR (RAJ.)301001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-lavender-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:prince.bajaj2017start@gmail.com" className="hover:text-lavender-600 transition-colors">prince.bajaj2017start@gmail.com</a>
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
                        <a href="tel:+918949887074" className="hover:text-lavender-600 transition-colors">+91 8949887074</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6">Visit Our Office</h2>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.1754080282893!2d76.61326607576611!3d27.52143257624879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971c2b3ac290fdd%3A0xf97c1532f97fdb7e!2sSant%20Sukhdev%20Shah%20Aueigyan%20Sansthan%20-%20Manu%20Marg%20Kabir%20Colony!5e0!3m2!1sen!2sin!4v1717164841592!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
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
