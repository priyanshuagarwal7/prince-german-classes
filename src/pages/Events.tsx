
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, User, Search, Filter, ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [expanded, setExpanded] = React.useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual EuroCAS Conference 2024",
      type: "conference",
      date: "June 15-18, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Vienna, Austria",
      venue: "Vienna International Centre",
      image: "https://images.unsplash.com/photo-1516550893885-7b92d45f523d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: 500,
      description: "The flagship event of EuroCAS, bringing together experts from around the world to discuss the latest advances in circuits and systems. The conference features keynote speeches, paper presentations, poster sessions, and workshops on emerging topics.",
      featured: true
    },
    {
      id: 2,
      title: "Workshop on Circuit Design Innovation",
      type: "workshop",
      date: "September 5-6, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Barcelona, Spain",
      venue: "Technical University of Catalonia",
      image: "https://images.unsplash.com/photo-1594935975218-a343efabc2d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: 150,
      description: "A hands-on workshop focusing on innovative approaches to circuit design, with special emphasis on low-power and high-efficiency designs. Participants will engage in practical sessions led by industry experts.",
      featured: false
    },
    {
      id: 3,
      title: "Winter School on Signal Processing",
      type: "educational",
      date: "December 10-14, 2024",
      time: "9:30 AM - 5:00 PM",
      location: "Zurich, Switzerland",
      venue: "ETH Zurich",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: 100,
      description: "An intensive educational program for graduate students and young professionals, covering advanced topics in signal processing theory and applications. The school includes lectures, tutorials, and research project opportunities.",
      featured: false
    },
    {
      id: 4,
      title: "Special Symposium on AI for Circuit Design",
      type: "symposium",
      date: "October 23-24, 2024",
      time: "10:00 AM - 5:30 PM",
      location: "Paris, France",
      venue: "Sorbonne University",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: 120,
      description: "This symposium explores the intersection of artificial intelligence and circuit design, highlighting how machine learning techniques are revolutionizing the field. Leading researchers will present cutting-edge approaches and case studies.",
      featured: true
    },
    {
      id: 5,
      title: "Industry-Academia Networking Event",
      type: "networking",
      date: "July 8, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Munich, Germany",
      venue: "Bavarian Engineering Centre",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: 80,
      description: "An evening dedicated to fostering collaboration between academic researchers and industry professionals. The event includes lightning talks, a networking reception, and opportunities for project discussions.",
      featured: false
    }
  ];
  
  const pastEvents = [
    {
      id: 6,
      title: "Annual EuroCAS Conference 2023",
      type: "conference",
      date: "June 20-23, 2023",
      location: "Stockholm, Sweden",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Workshop on Energy-Efficient Systems",
      type: "workshop",
      date: "September 10-11, 2023",
      location: "Milan, Italy",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Winter School on Advanced VLSI Design",
      type: "educational",
      date: "December 5-9, 2023",
      location: "Helsinki, Finland",
      image: "https://images.unsplash.com/photo-1453060037478-2ae05358be76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const faq = [
    {
      question: "How can I register for the Annual Conference?",
      answer: "Registration for the Annual Conference is available online through our website. Early bird registration typically opens 6 months before the event, with regular registration closing 2 weeks prior to the conference. On-site registration may be available depending on capacity."
    },
    {
      question: "What is included in the registration fee?",
      answer: "The registration fee typically includes access to all sessions, workshops (unless otherwise specified), conference materials, lunches and coffee breaks during the event, welcome reception, and the conference gala dinner. Accommodation and travel expenses are not included."
    },
    {
      question: "Can I submit my research paper to a EuroCAS event?",
      answer: "Yes, we welcome research paper submissions for our conferences and selected workshops. Calls for papers are typically announced 6-8 months before the event, with submission deadlines approximately 3-4 months prior to the event. All submissions undergo a rigorous peer-review process."
    },
    {
      question: "Are there student discounts available?",
      answer: "Yes, we offer significant discounts for students on registration fees for most of our events. Valid student ID is required at registration, and there may be additional opportunities for student travel grants and volunteer positions."
    },
    {
      question: "How can I become a speaker or presenter?",
      answer: "There are several ways to present at our events: submit a research paper in response to a call for papers, apply to host a workshop on a relevant topic, or contact our program committee directly if you're an established expert in the field. All proposals are evaluated based on relevance, quality, and innovation."
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeFilter);

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
                <p className="text-purple-700 font-medium text-sm">Events & Conferences</p>
              </div>
              <h1 className="h1 mb-6">
                Discover Our <span className="gradient-text">Events</span>
              </h1>
              <p className="p-large mb-8">
                Join us at our conferences, workshops, and educational programs to learn, share, and network with experts in circuits and systems.
              </p>
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for events..."
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Events */}
        <section className="py-16 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.filter(event => event.featured).map((event) => (
                <div key={event.id} className="glass-card overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <div className="h-full">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-2">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <Calendar className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{event.location}</span>
                      </div>
                      <div className="flex items-start">
                        <User className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Expected Attendees: {event.attendees}+</span>
                      </div>
                    </div>
                    
                    <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center mt-auto">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Upcoming Events */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Upcoming Events</h2>
              
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <button 
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'all' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50'
                  }`}
                >
                  All Events
                </button>
                <button 
                  onClick={() => setActiveFilter('conference')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'conference' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50'
                  }`}
                >
                  Conferences
                </button>
                <button 
                  onClick={() => setActiveFilter('workshop')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'workshop' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50'
                  }`}
                >
                  Workshops
                </button>
                <button 
                  onClick={() => setActiveFilter('educational')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'educational' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50'
                  }`}
                >
                  Educational
                </button>
                <button 
                  onClick={() => setActiveFilter('symposium')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'symposium' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50'
                  }`}
                >
                  Symposiums
                </button>
                <button 
                  onClick={() => setActiveFilter('networking')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'networking' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50'
                  }`}
                >
                  Networking
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="glass-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-purple-100 bg-opacity-90 backdrop-blur-sm text-purple-700 rounded-full text-xs font-medium">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Past Events */}
        <section className="py-16 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8">Past Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="glass-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <a href="#" className="px-4 py-2 bg-white rounded-full text-purple-600 font-medium text-sm">
                        View Archive
                      </a>
                    </div>
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter group-hover:blur-sm"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 bg-gray-100 bg-opacity-90 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a href="#" className="button-secondary">
                View All Past Events
              </a>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="section-heading">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our events and participation.
              </p>
            </div>
            
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card overflow-hidden"
                >
                  <button 
                    className="flex items-center justify-between w-full p-6 text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    {expanded === index ? (
                      <Minus className="h-5 w-5 text-purple-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-purple-600" />
                    )}
                  </button>
                  <div className={`px-6 pb-6 pt-0 ${expanded === index ? 'block' : 'hidden'}`}>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-6 md:px-12">
          <div className="container mx-auto max-w-5xl">
            <div className="glass-card-purple p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Join an Event?</h2>
                  <p className="text-muted-foreground">
                    Register now for our upcoming conferences, workshops, and educational programs.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="button-primary whitespace-nowrap">
                    Browse Events
                  </a>
                  <a href="#" className="button-secondary whitespace-nowrap">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
