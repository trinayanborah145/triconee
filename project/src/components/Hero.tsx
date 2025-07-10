import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(60);
  const [isBaseTextComplete, setIsBaseTextComplete] = useState(false);
  
  const baseText = "Your brand deserves a website that's \n";
  const words = ['Fast', 'Fluid', 'Flawless'];
  
  const handleTyping = useCallback(() => {
    const current = loopNum % words.length;
    const fullText = baseText + words[current];
    
    setDisplayText(prevText => {
      if (isDeleting) {
        // Handle deleting
        if (prevText === baseText) {
          // Start typing next word
          setIsDeleting(false);
          setLoopNum(prev => (prev + 1) % words.length);
          setTypingSpeed(60); // Slightly slower speed for base text
          setIsBaseTextComplete(false);
          return baseText;
        }
        const newText = baseText + words[current].substring(0, prevText.length - baseText.length - 1);
        setTypingSpeed(100); // Slightly slower speed for deleting last word
        return newText;
      } else {
        // Handle typing
        if (prevText === fullText) {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1000);
          return prevText;
        }
        
        const isTypingBaseText = prevText.length < baseText.length;
        const newText = fullText.substring(0, prevText.length + 1);
        
        if (!isTypingBaseText && !isBaseTextComplete) {
          // Just finished typing base text, adjust speed for the last word
          setIsBaseTextComplete(true);
          setTypingSpeed(120); // Slightly slower speed for the last word
        } else if (isTypingBaseText) {
          setTypingSpeed(50); // Slightly slower speed for base text
        }
        
        return newText;
      }
    });
  }, [isDeleting, loopNum, words, isBaseTextComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, typingSpeed, handleTyping]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start pt-28 md:pt-32 overflow-hidden">
      {/* Simplified Background for Mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-blue-500/20 animate-pulse"></div>
      
      {/* Reduced Floating Elements for Mobile */}
      <div className="absolute top-20 left-20 w-16 md:w-32 h-16 md:h-32 bg-cyan-400/20 rounded-full blur-xl animate-bounce" style={{ willChange: 'transform, opacity' }}></div>
      <div className="absolute bottom-20 right-20 w-12 md:w-24 h-12 md:h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ willChange: 'transform, opacity' }}></div>
      <div className="absolute top-1/2 left-10 w-8 md:w-16 h-8 md:h-16 bg-cyan-400/30 rotate-45 animate-spin" style={{ willChange: 'transform' }}></div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto w-full">
        {/* Responsive Typography */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-5 md:mb-7 leading-tight min-h-[9rem] md:min-h-[11rem] flex items-center justify-center" style={{ willChange: 'contents' }}>
            <span className="relative whitespace-pre-line">
              <span className="text-white">
                {displayText.replace(/\n.*$/, '')}
              </span>
              <span className="relative inline-block transition-all duration-300 ease-in-out">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300">
                  {displayText.includes('\n') ? displayText.split('\n').pop() : ''}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-20 transition-all duration-500"></span>
              </span>
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>

        {/* Responsive Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed px-2 mt-8">
          Transforming ideas into stunning digital realities through cutting-edge design and development
        </p>

        {/* Responsive CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4 mt-4">
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