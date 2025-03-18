
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Users, MessageSquare, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6">
                <p className="text-purple-700 font-medium text-sm">Get in Touch</p>
              </div>
              <h1 className="h1 mb-6">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="p-large mb-6">
                Have questions or want to learn more about EuroCAS? We'd love to hear from you! Reach out using any of the methods below.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Our team typically responds within 24-48 hours on business days.
                </p>
                <a href="mailto:info@eurocas.org" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  info@eurocas.org
                </a>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Available Monday to Friday, 9:00 AM - 5:00 PM CET.
                </p>
                <a href="tel:+32123456789" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  +32 123 456 789
                </a>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                <p className="text-muted-foreground mb-4">
                  Our headquarters is located in the heart of Brussels.
                </p>
                <address className="not-italic text-purple-600 font-medium">
                  123 Science Avenue<br />
                  Brussels, Belgium<br />
                  BE-1000
                </address>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Map */}
        <section className="py-16 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Please fill out the form below, and we'll get back to you as soon as possible. Your message will be directed to the appropriate department.
                </p>
                
                {formSubmitted ? (
                  <div className="glass-card-purple p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We've received your message and will respond shortly.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="button-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Membership">Membership Information</option>
                        <option value="Events">Events & Conferences</option>
                        <option value="Publications">Publications & Resources</option>
                        <option value="Collaboration">Research Collaboration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        required 
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-muted-foreground">
                        I agree to the <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a> and consent to the processing of my data.
                      </label>
                    </div>
                    
                    <button type="submit" className="button-primary w-full">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                <p className="text-muted-foreground mb-8">
                  Located in the center of Brussels, our office is easily accessible by public transportation. We welcome visitors during business hours.
                </p>
                
                <div className="glass-card overflow-hidden mb-8">
                  <div className="aspect-video w-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.2022841349196!2d4.349088900000001!3d50.8465573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47ffa7f982f%3A0xf7c29cbecf5d5b9e!2sGrand%20Place!5e0!3m2!1sen!2sbe!4v1656594791454!5m2!1sen!2sbe" 
                      width="100%" 
                      height="100%" 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="border-0"
                    ></iframe>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="glass-card-purple p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>Monday - Friday: 9:00 AM - 5:00 PM CET</li>
                          <li>Saturday - Sunday: Closed</li>
                          <li>Public Holidays: Closed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card-purple p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Department Contacts</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li><span className="font-medium">Membership:</span> membership@eurocas.org</li>
                          <li><span className="font-medium">Events:</span> events@eurocas.org</li>
                          <li><span className="font-medium">Publications:</span> publications@eurocas.org</li>
                          <li><span className="font-medium">Media:</span> media@eurocas.org</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="section-heading">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about contacting us and getting involved with EuroCAS.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2">How quickly can I expect a response to my inquiry?</h3>
                <p className="text-muted-foreground">
                  We aim to respond to all inquiries within 24-48 business hours. For more complex matters that require consultation with specific departments, it may take slightly longer.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2">Can I schedule a visit to your office?</h3>
                <p className="text-muted-foreground">
                  Yes, we welcome visitors by appointment. Please contact us via email or phone at least 3 business days in advance to schedule your visit.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2">How can I suggest a topic for a future conference or workshop?</h3>
                <p className="text-muted-foreground">
                  We value input from our community! Please send your suggestions to events@eurocas.org with a brief outline of the topic and its relevance to our field.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2">How do I update my membership information?</h3>
                <p className="text-muted-foreground">
                  Members can update their information by logging into the member portal on our website, or by contacting our membership department directly at membership@eurocas.org.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card-purple p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected with EuroCAS</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter to receive updates on upcoming events, new publications, and the latest news from the circuits and systems community.
              </p>
              
              <form className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <button 
                    type="submit" 
                    className="button-primary"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from EuroCAS.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
