import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'CEO, TechVista',
      company: 'TechVista Solutions',
      image: 'https://images.pexels.com/photos/3785090/pexels-photo-3785090.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Digital Nexus transformed our e-commerce platform with a modern, responsive design that boosted our sales by 300%. Their innovative approach and attention to detail were exceptional.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Rahul Kapoor',
      role: 'Founder, ArogyaMitra',
      company: 'ArogyaMitra Healthcare',
      image: 'https://images.pexels.com/photos/3785091/pexels-photo-3785091.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The healthcare management system developed by Digital Nexus has been transformative for our hospital chain. Their team delivered a secure, scalable solution that our doctors and patients love.',
      rating: 5,
      project: 'Healthcare Management System'
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      role: 'Marketing Head, FitDesi',
      company: 'FitDesi Wellness',
      image: 'https://images.pexels.com/photos/3785092/pexels-photo-3785092.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Our yoga and fitness app saw a 250% increase in user engagement after Digital Nexus revamped it. Their understanding of the Indian fitness market is remarkable.',
      rating: 5,
      project: 'Fitness Mobile App'
    },
    {
      id: 4,
      name: 'Vikram Mehta',
      role: 'CTO, DhanVriksha',
      company: 'DhanVriksha Finance',
      image: 'https://images.pexels.com/photos/3785093/pexels-photo-3785093.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Digital Nexus delivered our financial services dashboard ahead of schedule. Their fintech expertise and understanding of Indian banking regulations made them the perfect partner for our digital transformation.',
      rating: 5,
      project: 'Financial Services Dashboard'
    },
    {
      id: 5,
      name: 'Rohan Malhotra',
      role: 'Director, BharatYatra',
      company: 'BharatYatra Holidays',
      image: 'https://images.pexels.com/photos/3785093/pexels-photo-3785093.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Our travel booking platform has revolutionized how Indians plan their vacations. Digital Nexus created an intuitive interface that works seamlessly across all devices, even in low-network areas.',
      rating: 5,
      project: 'Travel Booking Platform'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('animate-fade-in-up');
            target.style.willChange = 'transform, opacity';
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
        elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{ willChange: 'opacity' }}>
        <div className="absolute top-40 left-40 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" style={{ willChange: 'transform' }}></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl" style={{ willChange: 'transform' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden" style={{ willChange: 'transform, opacity' }}>
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-cyan-400 opacity-50">
              <Quote size={40} />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  style={{ willChange: 'transform' }}
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonials[currentSlide].name}</h3>
                  <p className="text-cyan-400">{testimonials[currentSlide].role}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentSlide].company}</p>
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                "{testimonials[currentSlide].text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{testimonials[currentSlide].project}</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-cyan-400' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-200"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-on-scroll">
          {[
            { number: '10+', label: 'Happy Clients', icon: '😊' },
            { number: '98%', label: 'Satisfaction Rate', icon: '⭐' },
            { number: '15+', label: 'Projects Completed', icon: '🚀' },
            { number: '5/5', label: 'Average Rating', icon: '💯' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;