import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-300 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className="order-2 lg:order-1 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6">
              <p className="text-purple-700 font-medium text-sm">
                Prince German Classes
              </p>
            </div>
            <h1 className="h1 mb-6">
              Empower Your Global Career: Master German for High-Demand Roles in
              Germany
            </h1>
            <p className="p-large mb-8 max-w-xl">
              Step into the future with confidence—our German language programs
              are strategically designed for aspiring professionals seeking
              career success in Ausbildung, healthcare, and technical fields.
              Unlock job opportunities, increase your market value, and gain a
              competitive edge in the European workforce.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="button-secondary">
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/30 to-purple-500/30 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="glass-card p-6 relative z-10 overflow-hidden">
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 mb-4 flex items-center justify-center">
                  <img
                    src="https://unsplash.com/photos/man-in-blue-and-white-collared-shirt-wearing-green-face-mask-odggKTyA5o0"
                    alt="Circuit board close-up"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  German Language Programs
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join us for comprehensive German language training designed
                  for professionals seeking opportunities in Germany.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Enrolling Now</span>
                  </div>
                  <Link
                    to="/about"
                    className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
