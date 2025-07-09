import React, { useEffect, useRef } from 'react';
import { Globe, Code, Palette, Smartphone, Search, Shield, LayoutDashboard } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites built with cutting-edge technologies and optimized for performance.',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'API Integration'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Conversion Landing Pages',
      description: 'High-converting landing pages designed to maximize your lead generation and sales.',
      features: ['A/B Testing', 'Mobile-Optimized', 'Fast Loading', 'High Conversion'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Code,
      title: 'E-commerce',
      description: 'Scalable online stores with secure payment processing and inventory management.',
      features: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Analytics'],
      color: 'from-red-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security & Support',
      description: 'Ongoing maintenance, security updates, and technical support for your applications.',
      features: ['Security Audits', 'Performance Monitoring', '24/7 Support', 'Backups'],
      color: 'from-orange-400 to-yellow-500'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-40 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;