
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, FileText, Book, Download, ExternalLink, Calendar, Clock, Filter, ChevronRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [activeTab, setActiveTab] = React.useState('publications');
  
  const publications = [
    {
      title: "Advances in Low-Power Circuit Design",
      authors: "M. Johnson, S. Chen, L. Müller",
      journal: "European Journal of Circuit Theory and Applications",
      date: "March 2024",
      type: "journal",
      abstract: "This paper presents novel approaches to reducing power consumption in integrated circuits through adaptive voltage scaling and substrate biasing techniques.",
      link: "#"
    },
    {
      title: "Machine Learning for Analog Circuit Optimization",
      authors: "A. Patel, F. Rossi, H. Kim",
      journal: "EuroCAS Conference Proceedings",
      date: "June 2023",
      type: "conference",
      abstract: "A comprehensive study on applying reinforcement learning algorithms to optimize analog circuit parameters for improved performance and reliability.",
      link: "#"
    },
    {
      title: "Energy-Efficient Signal Processing for IoT Applications",
      authors: "L. Wang, S. Kumar, T. Dubois",
      journal: "Transactions on Signal Processing Systems",
      date: "December 2023",
      type: "journal",
      abstract: "This work proposes a framework for implementing lightweight signal processing algorithms optimized for battery-powered IoT devices.",
      link: "#"
    },
    {
      title: "Emerging Trends in RF System Design",
      authors: "C. Martinez, J. Brown, N. Al-Farsi",
      journal: "EuroCAS Workshop on Wireless Systems",
      date: "September 2023",
      type: "workshop",
      abstract: "A survey of recent developments in RF system architecture, focusing on multi-band operation and integration with digital processing stages.",
      link: "#"
    },
    {
      title: "Reliability Analysis of Sub-10nm CMOS Technologies",
      authors: "R. Tanaka, E. Schmidt, V. Ivanov",
      journal: "Journal of Semiconductor Devices",
      date: "February 2024",
      type: "journal",
      abstract: "Comprehensive analysis of failure mechanisms and reliability concerns in advanced CMOS process nodes, with proposed mitigation strategies.",
      link: "#"
    }
  ];
  
  const educationalMaterials = [
    {
      title: "Introduction to Digital Circuit Design",
      author: "Prof. Elena Kostadinova",
      type: "course",
      level: "Beginner",
      duration: "10 hours",
      description: "A foundational course covering basic principles of digital logic, combinational and sequential circuits, and design methodologies.",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Advanced Signal Processing Techniques",
      author: "Dr. Marco Rossi",
      type: "tutorial",
      level: "Advanced",
      duration: "8 hours",
      description: "In-depth exploration of modern signal processing algorithms, including wavelet transforms, adaptive filtering, and compressed sensing.",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "VLSI Design and Verification",
      author: "Prof. Johannes Weber",
      type: "course",
      level: "Intermediate",
      duration: "15 hours",
      description: "Comprehensive course on VLSI design flow, covering RTL design, synthesis, physical design, and verification methodologies.",
      image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Circuit Simulation with Industry Tools",
      author: "Dr. Sophie Laurent",
      type: "workshop",
      level: "Intermediate",
      duration: "6 hours",
      description: "Hands-on workshop on using popular circuit simulation tools for analog and mixed-signal design verification.",
      image: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const tools = [
    {
      name: "CircuitSim Pro",
      category: "Simulation",
      description: "Advanced circuit simulation tool with support for analog, digital, and mixed-signal designs.",
      features: ["Multi-domain simulation", "Parametric analysis", "Monte Carlo simulation", "Thermal modeling"],
      link: "#"
    },
    {
      name: "SignalLab",
      category: "Signal Processing",
      description: "Comprehensive toolkit for signal analysis and processing algorithm development.",
      features: ["Real-time processing", "Extensive filter library", "Algorithm visualization", "Data import/export"],
      link: "#"
    },
    {
      name: "PCB Designer Suite",
      category: "Layout & Design",
      description: "Professional PCB design software with advanced routing and verification capabilities.",
      features: ["Multi-layer support", "DRC/LVS checking", "3D visualization", "Manufacturing export"],
      link: "#"
    },
    {
      name: "EmbeddedDev Kit",
      category: "Embedded Systems",
      description: "Complete development environment for embedded systems design and programming.",
      features: ["Code generation", "Hardware debugging", "RTOS support", "Performance analysis"],
      link: "#"
    }
  ];
  
  const upcomingWebinars = [
    {
      title: "Introduction to RF Circuit Design",
      presenter: "Dr. Michael Chen, Stanford University",
      date: "June 5, 2024",
      time: "4:00 PM - 5:30 PM CEST",
      description: "This webinar will cover fundamental concepts in RF circuit design, focusing on practical applications and design considerations."
    },
    {
      title: "Machine Learning for Electronic Design Automation",
      presenter: "Prof. Sarah Johnson, ETH Zurich",
      date: "June 12, 2024",
      time: "3:00 PM - 4:30 PM CEST",
      description: "Learn how machine learning techniques are revolutionizing electronic design automation tools and workflows."
    },
    {
      title: "Designing for Low Power in IoT Applications",
      presenter: "Dr. Roberto Garcia, Technical University of Madrid",
      date: "June 19, 2024",
      time: "5:00 PM - 6:30 PM CEST",
      description: "Strategies and techniques for minimizing power consumption in circuits designed for IoT applications."
    }
  ];
  
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
                <p className="text-purple-700 font-medium text-sm">Resources & Publications</p>
              </div>
              <h1 className="h1 mb-6">
                Knowledge <span className="gradient-text">Resources</span>
              </h1>
              <p className="p-large mb-8">
                Access a wealth of publications, educational materials, tools, and resources to enhance your knowledge and research in circuits and systems.
              </p>
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for publications, tools, and resources..."
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Tabs Navigation */}
        <section className="py-8 px-6 md:px-12 border-b border-purple-100 sticky top-20 bg-white z-30 shadow-sm">
          <div className="container mx-auto max-w-7xl">
            <div className="flex space-x-1 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('publications')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'publications' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Publications
              </button>
              <button 
                onClick={() => setActiveTab('educational')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'educational' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Educational Materials
              </button>
              <button 
                onClick={() => setActiveTab('tools')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'tools' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Tools & Software
              </button>
              <button 
                onClick={() => setActiveTab('webinars')}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'webinars' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Webinars & Tutorials
              </button>
            </div>
          </div>
        </section>
        
        {/* Publications Tab */}
        <section className={`py-16 px-6 md:px-12 ${activeTab !== 'publications' ? 'hidden' : ''}`}>
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Recent Publications</h2>
              
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-purple-600 text-white">
                  All Types
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Journal Articles
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Conference Papers
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Workshop Papers
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="md:mr-6 mb-4 md:mb-0">
                      {pub.type === 'journal' ? (
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-purple-600" />
                        </div>
                      ) : pub.type === 'conference' ? (
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Book className="h-6 w-6 text-blue-600" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-green-600" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold md:mr-4">{pub.title}</h3>
                        <span className="text-sm text-purple-600 whitespace-nowrap mt-1 md:mt-0">{pub.date}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium">Authors:</span> {pub.authors}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-medium">Published in:</span> {pub.journal}
                      </p>
                      
                      <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-3 py-1 bg-purple-100 rounded-full text-xs font-medium text-purple-700">
                          {pub.type === 'journal' ? 'Journal Article' : pub.type === 'conference' ? 'Conference Paper' : 'Workshop Paper'}
                        </span>
                        
                        <div className="flex space-x-4">
                          <a 
                            href={pub.link} 
                            className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors flex items-center"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            PDF
                          </a>
                          <a 
                            href={pub.link} 
                            className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Online
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="button-secondary">
                Browse All Publications
              </a>
            </div>
          </div>
        </section>
        
        {/* Educational Materials Tab */}
        <section className={`py-16 px-6 md:px-12 ${activeTab !== 'educational' ? 'hidden' : ''}`}>
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Educational Materials</h2>
              
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-purple-600 text-white">
                  All Types
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Courses
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Tutorials
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Workshops
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {educationalMaterials.map((material, index) => (
                <div
                  key={index}
                  className="glass-card overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={material.image} 
                      alt={material.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-purple-100 bg-opacity-90 backdrop-blur-sm text-purple-700 rounded-full text-xs font-medium">
                        {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
                    <p className="text-sm text-purple-600 mb-1">By {material.author}</p>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">{material.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">{material.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                    
                    <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center mt-auto">
                      Access Material
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="button-secondary">
                View All Materials
              </a>
            </div>
          </div>
        </section>
        
        {/* Tools & Software Tab */}
        <section className={`py-16 px-6 md:px-12 ${activeTab !== 'tools' ? 'hidden' : ''}`}>
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Tools & Software</h2>
              
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-purple-600 text-white">
                  All Categories
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Simulation
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Design
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-purple-200 text-muted-foreground hover:bg-purple-50">
                  Analysis
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="glass-card p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                        {tool.name.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{tool.name}</h3>
                        <span className="inline-block px-3 py-1 bg-purple-100 rounded-full text-xs font-medium text-purple-700 mt-1 md:mt-0">
                          {tool.category}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{tool.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {tool.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-600 mr-2"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <a 
                        href={tool.link} 
                        className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center"
                      >
                        Learn More & Download
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="button-secondary">
                Explore All Tools
              </a>
            </div>
          </div>
        </section>
        
        {/* Webinars Tab */}
        <section className={`py-16 px-6 md:px-12 ${activeTab !== 'webinars' ? 'hidden' : ''}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8">Upcoming Webinars</h2>
            
            <div className="space-y-6 mb-12">
              {upcomingWebinars.map((webinar, index) => (
                <div
                  key={index}
                  className="glass-card p-6"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                      <div className="rounded-lg bg-purple-100 p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="text-sm font-medium">{webinar.date}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="text-sm">{webinar.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                      <p className="text-purple-600 font-medium text-sm mb-3">{webinar.presenter}</p>
                      <p className="text-muted-foreground mb-4">{webinar.description}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        <a href="#" className="button-primary text-sm">
                          Register Now
                        </a>
                        <a href="#" className="button-secondary text-sm">
                          Add to Calendar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-card-purple p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Past Webinar Recordings</h3>
                  <p className="text-muted-foreground">
                    Access our library of recorded webinars and tutorials covering a wide range of topics in circuits and systems.
                  </p>
                </div>
                <div className="md:w-1/3 text-center">
                  <a href="#" className="button-primary">
                    Browse Archive
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="section-heading">
                Join Our <span className="gradient-text">Community</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Become a member to access exclusive resources, participate in research collaborations, and connect with experts in the field.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Access Publications</h3>
                <p className="text-muted-foreground mb-6">
                  Get unlimited access to our journal articles, conference papers, and technical reports.
                </p>
                <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Learn More →
                </a>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Educational Resources</h3>
                <p className="text-muted-foreground mb-6">
                  Enhance your knowledge with courses, tutorials, and workshops from leading experts.
                </p>
                <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Learn More →
                </a>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Networking</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with peers, find collaborators, and participate in community discussions.
                </p>
                <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Learn More →
                </a>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="button-primary">
                Become a Member
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
