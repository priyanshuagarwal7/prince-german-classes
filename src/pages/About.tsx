
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Dr. Elena Kostadinova",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Professor of Electrical Engineering with over 20 years of experience in circuit design and signal processing."
    },
    {
      name: "Prof. Marco Rossi",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Leading researcher in VLSI design and embedded systems with numerous publications in top journals."
    },
    {
      name: "Dr. Sophie Laurent",
      role: "Secretary General",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Specializing in RF systems and communications with extensive industry and academic experience."
    },
    {
      name: "Prof. Johannes Weber",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Expert in analog circuit design and semiconductors with experience from leading technology companies."
    }
  ];

  const history = [
    {
      year: "1995",
      title: "Foundation",
      description: "EuroCAS was established by a group of visionary professors and industry leaders to promote research in circuits and systems across Europe."
    },
    {
      year: "2000",
      title: "First Major Conference",
      description: "The first major EuroCAS conference was held in Berlin, attracting over 300 participants from 20 countries."
    },
    {
      year: "2007",
      title: "Journal Launch",
      description: "Launched our peer-reviewed journal, 'European Transactions on Circuits and Systems', now recognized globally."
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "EuroCAS expanded beyond Europe, forming partnerships with similar organizations in North America and Asia."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Successfully transitioned to virtual conferences and workshops during global challenges, reaching a wider audience."
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6">
                  <p className="text-purple-700 font-medium text-sm">About Us</p>
                </div>
                <h1 className="h1 mb-6">
                  Our <span className="gradient-text">Story</span> & Mission
                </h1>
                <p className="p-large mb-6">
                  EuroCAS is a leading organization dedicated to advancing the field of circuits and systems through collaboration, education, and research excellence.
                </p>
                <p className="text-muted-foreground mb-8">
                  For nearly three decades, we have united researchers, industry professionals, and students across Europe and beyond, fostering innovation and knowledge exchange in our rapidly evolving field.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/30 to-purple-500/30 rounded-2xl transform rotate-2 scale-105"></div>
                <div className="glass-card p-8 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card-purple p-4 text-center">
                      <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="text-xl font-bold mb-1">2,500+</h3>
                      <p className="text-sm text-muted-foreground">Active Members</p>
                    </div>
                    <div className="glass-card-purple p-4 text-center">
                      <BookOpen className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="text-xl font-bold mb-1">200+</h3>
                      <p className="text-sm text-muted-foreground">Annual Publications</p>
                    </div>
                    <div className="glass-card-purple p-4 text-center">
                      <Award className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="text-xl font-bold mb-1">25+</h3>
                      <p className="text-sm text-muted-foreground">Years of Excellence</p>
                    </div>
                    <div className="glass-card-purple p-4 text-center">
                      <Globe className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="text-xl font-bold mb-1">30+</h3>
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
                  We are committed to the highest standards of scientific integrity and research quality in all our activities and publications.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We foster meaningful partnerships between academia, industry, and research institutions to drive innovation and practical applications.
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
                  We promote forward-thinking approaches and creative solutions to advance the state-of-the-art in circuits and systems technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our History */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Our <span className="gradient-text">History</span>
              </h2>
              <p className="section-subheading">
                A journey of growth and innovation spanning nearly three decades.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {history.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className={`glass-card p-6 md:p-8 ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                          <div className="text-3xl font-bold text-purple-600 mb-2">{item.year}</div>
                          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        {/* Empty div for grid alignment */}
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-white hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Our <span className="gradient-text">Leadership</span>
              </h2>
              <p className="section-subheading">
                Meet the dedicated professionals guiding our organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass-card overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
