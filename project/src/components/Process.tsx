import React, { useEffect, useRef } from 'react';
import { Lightbulb, PenTool, Code, Rocket, TestTube, Users } from 'lucide-react';

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into your business goals, target audience, and project requirements to create a solid foundation.',
      icon: Lightbulb,
      color: 'from-cyan-400 to-blue-500',
      duration: '1-2 weeks'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our designers create stunning visuals and user experiences that align with your brand and captivate your audience.',
      icon: PenTool,
      color: 'from-blue-400 to-purple-500',
      duration: '2-3 weeks'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our developers bring designs to life using cutting-edge technologies and best practices for optimal performance.',
      icon: Code,
      color: 'from-purple-400 to-pink-500',
      duration: '3-6 weeks'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous testing across devices and browsers ensures your project works flawlessly for all users.',
      icon: TestTube,
      color: 'from-pink-400 to-red-500',
      duration: '1-2 weeks'
    },
    {
      number: '05',
      title: 'Launch',
      description: 'We deploy your project and ensure everything runs smoothly, providing training and documentation.',
      icon: Rocket,
      color: 'from-red-400 to-orange-500',
      duration: '1 week'
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance, updates, and support to keep your project running at peak performance.',
      icon: Users,
      color: 'from-orange-400 to-yellow-500',
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results on time and within budget.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 hidden lg:block"></div>

          {/* Process Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 animate-on-scroll ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 max-w-md">
                  <div className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-cyan-400 font-semibold">{step.duration}</span>
                      <div className="h-px bg-gradient-to-r from-cyan-400 to-blue-500 flex-1"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center relative z-10">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-md hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your ideas and create something amazing together.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;