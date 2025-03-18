
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  const upcomingEvents = [
    {
      title: "Annual EuroCAS Conference 2024",
      date: "June 15-18, 2024",
      location: "Vienna, Austria",
      image: "https://images.unsplash.com/photo-1516550893885-7b92d45f523d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: 500
    },
    {
      title: "Workshop on Circuit Design Innovation",
      date: "September 5-6, 2024",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1594935975218-a343efabc2d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: 150
    },
    {
      title: "Winter School on Signal Processing",
      date: "December 10-14, 2024",
      location: "Zurich, Switzerland",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: 100
    }
  ];

  const news = [
    {
      title: "Call for Papers: Special Issue on Next-Generation Circuit Design",
      date: "April 15, 2024",
      excerpt: "Submit your research for our special issue focusing on emerging technologies and methodologies in circuit design."
    },
    {
      title: "2023 Best Paper Award Winners Announced",
      date: "March 28, 2024",
      excerpt: "Congratulations to all the winners of our prestigious annual paper awards, recognizing excellence in research."
    },
    {
      title: "New Partnership Announcement with Global Electronics Association",
      date: "February 10, 2024",
      excerpt: "We're excited to announce a strategic partnership that will expand opportunities for our members."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        
        {/* Upcoming Events Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <p className="section-subheading">
                Join us at our conferences, workshops, and educational events to learn, share, and network with experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="glass-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center text-white">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm">Expected Attendees: {event.attendees}+</span>
                    </div>
                    <Link to="/events" className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/events" className="button-secondary">
                View All Events
              </Link>
            </div>
          </div>
        </section>
        
        <About />
        
        {/* Latest News Section */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Latest <span className="gradient-text">News</span>
              </h2>
              <p className="section-subheading">
                Stay updated with the latest announcements, research highlights, and community news.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {news.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-8 ${index !== news.length - 1 ? 'border-b border-purple-100' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <span className="text-sm text-purple-600 mb-2 block">{item.date}</span>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.excerpt}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-8">
                      <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center whitespace-nowrap">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="button-secondary">
                View All News
              </a>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card-purple p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive updates on upcoming events, research opportunities, and the latest news.
                </p>
              </div>
              
              <form className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <button 
                    type="submit" 
                    className="button-primary whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
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

export default Index;
