
import React from 'react';
import { Award, Calendar, BookOpen, Users, MessageSquare, Lightbulb } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-lavender-600" />,
      title: "Weekdays/Weekends classes available with flexibility",
      description: "Join our structured German language classes tailored to different proficiency levels and specific career goals."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-lavender-600" />,
      title: "Quality Materials",
      description: "Access high-quality study materials and resources designed to help you master the German language effectively."
    },
    {
      icon: <Users className="h-8 w-8 text-lavender-600" />,
      title: "Expert Teachers",
      description: "Learn from experienced native speakers and qualified German language educators with professional teaching methods."
    },
    {
      icon: <Award className="h-8 w-8 text-lavender-600" />,
      title: "Certification",
      description: "Prepare for and obtain internationally recognized German language certifications that enhance your career prospects."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-lavender-600" />,
      title: "Conversation Practice",
      description: "Develop your speaking skills through regular conversation sessions and practical language application."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-lavender-600" />,
      title: "Career Guidance",
      description: "Receive guidance on career pathways in Germany, for for all job seekers/ international students/ healthcare professionals (nurses & physio)."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-lavender-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subheading">
            We provide comprehensive language training and career preparation for professionals seeking opportunities in Germany , offering small size classes in both online/offline mode.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-16 h-16 mb-6 rounded-xl bg-lavender-100 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
