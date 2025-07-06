import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import LoadingAnimation from './components/LoadingAnimation';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Reduce loading time on mobile
    const loadingTime = isMobile ? 1000 : 2000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    // Only track cursor on desktop
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      {!isMobile && <CustomCursor position={cursorPosition} />}
      {!isMobile && <ParticleBackground />}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;