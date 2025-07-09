import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    support: 0
  });

  const targetValues = {
    projects: 15,
    clients: 10,
    years: 1,
    support: 24
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            
            // Start counter animation when stats section comes into view
            if (entry.target.classList.contains('stats-section')) {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(targetValues.projects * progress),
        clients: Math.floor(targetValues.clients * progress),
        years: Math.floor(targetValues.years * progress),
        support: Math.floor(targetValues.support * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues); // Ensure final values are exact
      }
    }, stepDuration);
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tricone Digital Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a passionate team of digital innovators, crafting exceptional web experiences that bridge the gap between creativity and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2024, Tricone Digital Services emerged from a simple belief: that exceptional design and cutting-edge technology should work seamlessly together. In a short period of time, we've been able to gain the trust of numerous businesses with our professionalism and commitment to excellence. What started as a small team of passionate developers has grown into a full-service digital agency.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Based in Jorhat, Assam, we've helped many businesses transform their digital presence, from startups looking to make their mark to established enterprises seeking to innovate.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Rocket className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Innovation First</h4>
                <p className="text-gray-400">Always pushing boundaries</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-6 animate-on-scroll">
            {[
              {
                icon: Target,
                title: 'Precision',
                description: 'Every pixel matters. We craft with meticulous attention to detail.',
                color: 'from-cyan-400 to-blue-500'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Your vision, our expertise. Together we create magic.',
                color: 'from-blue-400 to-purple-500'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Staying ahead of trends and technologies.',
                color: 'from-purple-400 to-pink-500'
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center`}>
                    <value.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{value.title}</h4>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll stats-section">
          {[
            { key: 'projects', suffix: '+', label: 'Projects Delivered', icon: '🚀' },
            { key: 'clients', suffix: '+', label: 'Happy Clients', icon: '😊' },
            { key: 'years', suffix: ' yr+', label: 'Experience', icon: '⭐' },
            { key: 'support', suffix: '/7', label: 'Support', icon: '🛟' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {counters[stat.key as keyof typeof counters]}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;