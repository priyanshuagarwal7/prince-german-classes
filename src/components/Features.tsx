
import React from 'react';
import { Award, Calendar, BookOpen, Users, MessageSquare, Lightbulb } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      title: "Annual Conferences",
      description: "Participate in our prestigious annual conferences showcasing cutting-edge research and technological advances."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: "Publications",
      description: "Access high-quality publications and journals featuring latest developments in circuits and systems."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Networking",
      description: "Connect with leading researchers, industry professionals, and students from around the world."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Awards & Recognition",
      description: "Recognizing excellence and innovation through our prestigious awards program."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: "Discussion Forums",
      description: "Engage in stimulating discussions on emerging topics and challenges in the field."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
      title: "Research Opportunities",
      description: "Discover collaborative research opportunities and funding possibilities for innovative projects."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subheading">
            EuroCAS provides numerous benefits and opportunities for professionals and students in circuits and systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 flex items-center justify-center">
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
