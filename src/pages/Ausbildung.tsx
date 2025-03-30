
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, BookOpen, Clock, Briefcase, Award } from 'lucide-react';

const Ausbildung = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-lavender-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="section-heading">
                German <span className="gradient-text">Ausbildung</span> Program
              </h1>
              <p className="section-subheading">
                Comprehensive training for your career in Germany through the German dual education system.
              </p>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-card p-8">
                    <h3 className="text-2xl font-semibold mb-4">What is Ausbildung?</h3>
                    <p className="text-muted-foreground mb-6">
                      "Ausbildung" is the German term for vocational training in the dual education system. 
                      It combines practical work experience at a company with theoretical learning at a vocational school.
                    </p>
                    <p className="text-muted-foreground">
                      This program typically lasts 2-3 years and provides a recognized qualification that opens doors 
                      to employment opportunities throughout Germany and Europe.
                    </p>
                  </div>
                  
                  <div className="glass-card p-8">
                    <h3 className="text-2xl font-semibold mb-4">Our Ausbildung Program</h3>
                    <p className="text-muted-foreground mb-6">
                      Prince German's Ausbildung program prepares international candidates for vocational training 
                      in Germany with a focus on language preparation, cultural orientation, and professional skills.
                    </p>
                    <p className="text-muted-foreground">
                      We provide comprehensive support from language training to job placement assistance, 
                      helping you navigate the entire process of beginning your career in Germany.
                    </p>
                  </div>
                </div>
                
                <div className="glass-card-purple p-8 mt-8">
                  <h3 className="text-2xl font-semibold mb-4">Program Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-lavender-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Language Preparation</h4>
                      <p className="text-sm text-muted-foreground">
                        Intensive German language training up to B1/B2 level required for Ausbildung programs.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                        <GraduationCap className="h-6 w-6 text-lavender-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Vocational Training</h4>
                      <p className="text-sm text-muted-foreground">
                        Practical training at a German company combined with theoretical education at vocational school.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                        <Briefcase className="h-6 w-6 text-lavender-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Career Placement</h4>
                      <p className="text-sm text-muted-foreground">
                        Support with finding appropriate Ausbildung positions and navigating the application process.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="courses" className="mt-8">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Available Ausbildung Fields</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Healthcare & Nursing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Elderly Care Nurse (Altenpfleger/in)</li>
                          <li>Healthcare and Nursing Assistant (Gesundheits- und Krankenpflegehelfer/in)</li>
                          <li>Medical Assistant (Medizinische/r Fachangestellte/r)</li>
                          <li>Physiotherapist (Physiotherapeut/in)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Technical Fields</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Mechatronics Technician (Mechatroniker/in)</li>
                          <li>IT Specialist (Fachinformatiker/in)</li>
                          <li>Electronics Technician (Elektroniker/in)</li>
                          <li>Industrial Mechanic (Industriemechaniker/in)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Hospitality & Culinary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Hotel Management Specialist (Hotelfachmann/-frau)</li>
                          <li>Restaurant Specialist (Restaurantfachmann/-frau)</li>
                          <li>Chef/Cook (Koch/Köchin)</li>
                          <li>Baker (Bäcker/in)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Commercial & Business</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Office Management Assistant (Kaufmann/-frau für Büromanagement)</li>
                          <li>Retail Sales Specialist (Kaufmann/-frau im Einzelhandel)</li>
                          <li>Industrial Clerk (Industriekaufmann/-frau)</li>
                          <li>Logistics Specialist (Fachkraft für Lagerlogistik)</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-8">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Program Requirements</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-lavender-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Language Proficiency</h4>
                        <p className="text-muted-foreground">
                          German language skills at B1 level minimum, with B2 recommended for most Ausbildung programs. 
                          Our courses will help you reach the required level.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-lavender-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Educational Background</h4>
                        <p className="text-muted-foreground">
                          Minimum high school diploma or equivalent. Educational requirements may vary depending 
                          on the specific Ausbildung program you wish to pursue.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-lavender-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Age Requirement</h4>
                        <p className="text-muted-foreground">
                          Most candidates are between 18-35 years old, though there is no strict upper age limit for Ausbildung programs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-lavender-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">Visa Requirements</h4>
                        <p className="text-muted-foreground">
                          You will need to obtain a German visa for vocational training. We provide guidance 
                          throughout the visa application process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-8">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Benefits of Ausbildung</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-lavender-600" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Recognized Qualification</h4>
                      <p className="text-muted-foreground">
                        Obtain a nationally and internationally recognized qualification that certifies your 
                        professional skills and knowledge.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                        <Briefcase className="h-6 w-6 text-lavender-600" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Earning While Learning</h4>
                      <p className="text-muted-foreground">
                        During your Ausbildung, you'll receive a monthly salary that increases each year as your skills develop.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                        <GraduationCap className="h-6 w-6 text-lavender-600" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Career Opportunities</h4>
                      <p className="text-muted-foreground">
                        High employment prospects with many trainees being offered permanent positions by their 
                        training companies upon completion.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                        <Clock className="h-6 w-6 text-lavender-600" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Residence Permit</h4>
                      <p className="text-muted-foreground">
                        Ausbildung provides a path to obtaining a long-term residence permit in Germany, with options 
                        for permanent residency later.
                      </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career Journey in Germany?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join our Ausbildung preparation program and take the first step toward a successful career in Germany. 
              Our expert team will guide you through every stage of the process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-white text-lavender-600 font-medium rounded-lg hover:bg-lavender-50 transition-colors">
                Contact Us
              </a>
              <a href="#" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Download Brochure
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Ausbildung;
