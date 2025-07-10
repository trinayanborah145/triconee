import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import LoadingAnimation from './components/LoadingAnimation';
import CustomCursor from './components/CustomCursor';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Process = lazy(() => import('./components/Process'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

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
      <Navbar />
      <Suspense fallback={<LoadingAnimation />}>
        {!isMobile && <ParticleBackground />}
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;