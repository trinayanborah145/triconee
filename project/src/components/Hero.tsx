import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Digital', 'Creative', 'Innovative', 'Modern'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified Background for Mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-blue-500/20 animate-pulse"></div>
      
      {/* Reduced Floating Elements for Mobile */}
      <div className="absolute top-20 left-20 w-16 md:w-32 h-16 md:h-32 bg-cyan-400/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-12 md:w-24 h-12 md:h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-8 md:w-16 h-8 md:h-16 bg-cyan-400/30 rotate-45 animate-spin"></div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto">
        {/* Responsive Typography */}
        <div className="mb-4 md:mb-8">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-white">We Create</span>
            <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {words[currentWord]}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-50"></span>
            </span>
            <br />
            <span className="text-white">Experiences</span>
          </h1>
        </div>

        {/* Responsive Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Transforming ideas into stunning digital realities through cutting-edge design and development
        </p>

        {/* Responsive CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 px-4">
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            Start Your Project
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
        >
          <ChevronDown size={24} className="md:hidden" />
          <ChevronDown size={32} className="hidden md:block" />
        </button>
      </div>

      
    </section>
  );
};

export default Hero;