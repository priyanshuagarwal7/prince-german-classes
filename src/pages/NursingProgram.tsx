
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Clock, BookOpen, GraduationCap, Heart, Award } from 'lucide-react';

const NursingProgram = () => {
  const programBenefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-lavender-600" />,
      title: "Comprehensive Language Training",
      description: "Specialized German language courses focused on medical and nursing terminology."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-lavender-600" />,
      title: "Recognized Qualification",
      description: "Prepare for and obtain a nursing qualification recognized throughout Germany and the EU."
    },
    {
      icon: <Heart className="h-6 w-6 text-lavender-600" />,
      title: "High Demand Profession",
      description: "Nursing is one of the most in-demand professions in Germany with excellent job security."
    },
    {
      icon: <Award className="h-6 w-6 text-lavender-600" />,
      title: "Career Development",
      description: "Opportunities for specialization and advancement in various healthcare fields."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-lavender-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="section-heading">
                German <span className="gradient-text">Nursing Program</span>
              </h1>
              <p className="section-subheading">
                Your pathway to a rewarding nursing career in Germany with comprehensive language and professional training.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-4">Why Choose Nursing in Germany?</h3>
                  <ul className="space-y-4">
                    {[
                      "High demand for qualified nurses across the country",
                      "Excellent salary and benefits package",
                      "Work-life balance with regulated working hours",
                      "Opportunities for professional development and specialization",
                      "Path to permanent residency and integration in Germany"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-lavender-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Nursing professionals" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-10 max-w-xs">
                  <p className="text-lavender-600 font-medium">
                    Germany needs over 150,000 nurses by 2025, creating excellent opportunities for international professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Program Details Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                <TabsTrigger value="overview">Program Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="recognition">Qualification Recognition</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Program Overview</h3>
                  
                  <p className="text-muted-foreground mb-6">
                    Our German Nursing Program is designed to prepare international nursing professionals for a successful 
                    career in Germany's healthcare system. The program combines intensive German language training with 
                    professional preparation and support throughout the qualification recognition process.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-lavender-50 p-6 rounded-xl">
                      <h4 className="text-xl font-medium mb-4 text-lavender-700">Program Duration</h4>
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="h-5 w-5 text-lavender-600" />
                        <span className="text-muted-foreground">Language Training: 6-12 months</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-lavender-600" />
                        <span className="text-muted-foreground">Recognition Process: 3-6 months</span>
                      </div>
                    </div>
                    
                    <div className="bg-lavender-50 p-6 rounded-xl">
                      <h4 className="text-xl font-medium mb-4 text-lavender-700">Program Components</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600" />
                          <span className="text-muted-foreground">Intensive German language courses (A1-B2)</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600" />
                          <span className="text-muted-foreground">Medical terminology training</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600" />
                          <span className="text-muted-foreground">Qualification recognition guidance</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600" />
                          <span className="text-muted-foreground">Job placement assistance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-medium mb-4">Program Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {programBenefits.map((benefit, index) => (
                        <div key={index} className="bg-white border border-lavender-100 p-6 rounded-xl shadow-sm">
                          <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                            {benefit.icon}
                          </div>
                          <h5 className="font-medium mb-2">{benefit.title}</h5>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum" className="mt-8">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Program Curriculum</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium px-4 py-2 bg-lavender-100 rounded-lg mb-4">Phase 1: Language Preparation</h4>
                      <div className="pl-6 space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">German A1-A2 Level</h5>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Basic grammar and vocabulary</li>
                            <li>Everyday conversations</li>
                            <li>Introduction to German culture</li>
                            <li>Duration: 3-4 months</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium mb-2">German B1-B2 Level</h5>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Advanced grammar and vocabulary</li>
                            <li>Introduction to medical terminology</li>
                            <li>Preparation for telc or Goethe language exams</li>
                            <li>Duration: 4-6 months</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-medium px-4 py-2 bg-lavender-100 rounded-lg mb-4">Phase 2: Professional Preparation</h4>
                      <div className="pl-6 space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">Medical German</h5>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Specialized medical and nursing terminology</li>
                            <li>Patient communication scenarios</li>
                            <li>Documentation and reporting</li>
                            <li>Duration: 2-3 months</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium mb-2">German Healthcare System</h5>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Structure of the German healthcare system</li>
                            <li>Nursing protocols and procedures</li>
                            <li>Workplace culture and expectations</li>
                            <li>Duration: 1-2 months</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-medium px-4 py-2 bg-lavender-100 rounded-lg mb-4">Phase 3: Qualification Recognition & Placement</h4>
                      <div className="pl-6 space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">Recognition Process</h5>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Document preparation and application</li>
                            <li>Knowledge test preparation (if required)</li>
                            <li>Adaptation measures guidance (if required)</li>
                            <li>Duration: 3-6 months</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium mb-2">Job Placement</h5>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>CV and application preparation</li>
                            <li>Interview coaching</li>
                            <li>Hospital/employer matching</li>
                            <li>Relocation assistance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-8">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Program Requirements</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-medium mb-4 pb-2 border-b border-lavender-200">Educational Requirements</h4>
                      <ul className="space-y-3 mt-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Nursing Qualification</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Completed nursing education with a diploma or degree from your home country
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Professional Experience</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Minimum 1 year of work experience as a nurse (preferred but not mandatory)
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Educational Documents</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Original diplomas, transcripts, and course descriptions for the recognition process
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-medium mb-4 pb-2 border-b border-lavender-200">Additional Requirements</h4>
                      <ul className="space-y-3 mt-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Language Proficiency</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Willingness to learn German up to B2 level (no prior German knowledge required)
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Personal Qualities</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Dedication to patient care, adaptability to new environments, and willingness to integrate
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-lavender-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Health Requirements</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Medical certificate confirming fitness to work in the healthcare sector
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-lavender-50 rounded-xl">
                    <h4 className="text-xl font-medium mb-4">Application Process</h4>
                    <ol className="relative border-l border-lavender-300 pl-6 space-y-6">
                      <li className="mb-6">
                        <div className="absolute w-4 h-4 bg-lavender-600 rounded-full -left-2"></div>
                        <h5 className="font-medium mb-1">Initial Consultation</h5>
                        <p className="text-sm text-muted-foreground">
                          Assessment of your qualifications and eligibility for the program
                        </p>
                      </li>
                      <li className="mb-6">
                        <div className="absolute w-4 h-4 bg-lavender-600 rounded-full -left-2"></div>
                        <h5 className="font-medium mb-1">Document Submission</h5>
                        <p className="text-sm text-muted-foreground">
                          Providing educational certificates, work experience proof, and identification documents
                        </p>
                      </li>
                      <li className="mb-6">
                        <div className="absolute w-4 h-4 bg-lavender-600 rounded-full -left-2"></div>
                        <h5 className="font-medium mb-1">Enrollment</h5>
                        <p className="text-sm text-muted-foreground">
                          Registration for the appropriate program level and schedule
                        </p>
                      </li>
                      <li>
                        <div className="absolute w-4 h-4 bg-lavender-600 rounded-full -left-2"></div>
                        <h5 className="font-medium mb-1">Program Commencement</h5>
                        <p className="text-sm text-muted-foreground">
                          Begin your journey toward a nursing career in Germany
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="recognition" className="mt-8">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Qualification Recognition Process</h3>
                  
                  <p className="text-muted-foreground mb-8">
                    To work as a recognized nurse in Germany, your foreign nursing qualification must be officially 
                    recognized by German authorities. Our program provides comprehensive support throughout this process.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="border border-lavender-200 rounded-xl overflow-hidden">
                      <div className="bg-lavender-100 p-4">
                        <h4 className="font-semibold">Full Recognition</h4>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground mb-4">
                          If your nursing education is deemed equivalent to German standards, you will receive full recognition 
                          and can immediately work as a registered nurse.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          This outcome is less common as most international nursing programs differ from the German curriculum.
                        </p>
                      </div>
                    </div>
                    
                    <div className="border border-lavender-200 rounded-xl overflow-hidden">
                      <div className="bg-lavender-100 p-4">
                        <h4 className="font-semibold">Partial Recognition</h4>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground mb-4">
                          If differences are identified, you may be required to complete adaptation measures to achieve 
                          full recognition, such as:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Knowledge test (Kenntnisprüfung)</li>
                          <li>Adaptation course (Anpassungslehrgang)</li>
                          <li>Practical training in a German healthcare facility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-medium mb-4">Our Support for the Recognition Process</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-lavender-600" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Document Preparation</h5>
                        <p className="text-sm text-muted-foreground">
                          Assistance with compiling, translating, and authenticating all required documents for the recognition application.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-5 w-5 text-lavender-600" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Knowledge Test Preparation</h5>
                        <p className="text-sm text-muted-foreground">
                          Targeted courses to prepare you for the knowledge test, covering German nursing standards, procedures, and regulations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-lavender-600" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Adaptation Course Placement</h5>
                        <p className="text-sm text-muted-foreground">
                          Arrangement of appropriate adaptation courses or practical training at partner healthcare facilities.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-lavender-600" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Application Tracking</h5>
                        <p className="text-sm text-muted-foreground">
                          Monitoring of your recognition application and communication with authorities on your behalf.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Nursing Career in Germany</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join our comprehensive German Nursing Program and embark on an exciting international career journey. 
              Apply now and take the first step toward a rewarding future in German healthcare.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-white text-lavender-600 font-medium rounded-lg hover:bg-lavender-50 transition-colors">
                Apply Now
              </a>
              <a href="#" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Request Information
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NursingProgram;
