import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'CEO, TechStart',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/3785090/pexels-photo-3785090.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Digital Nexus transformed our outdated website into a modern, responsive platform that increased our conversions by 300%. Their attention to detail and innovative approach exceeded our expectations.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Robert Chen',
      role: 'Founder, HealthTech',
      company: 'HealthTech Solutions',
      image: 'https://images.pexels.com/photos/3785091/pexels-photo-3785091.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Working with Digital Nexus was a game-changer for our healthcare platform. They delivered a secure, scalable solution that our users love. The team is incredibly professional and knowledgeable.',
      rating: 5,
      project: 'Healthcare Dashboard'
    },
    {
      id: 3,
      name: 'Amanda Foster',
      role: 'Marketing Director, FitLife',
      company: 'FitLife Wellness',
      image: 'https://images.pexels.com/photos/3785092/pexels-photo-3785092.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The mobile app they developed for us is absolutely fantastic. User engagement increased by 250% after launch. Their expertise in mobile development is unmatched.',
      rating: 5,
      project: 'Fitness Mobile App'
    },
    {
      id: 4,
      name: 'Michael Thompson',
      role: 'CTO, FinanceHub',
      company: 'FinanceHub Corp',
      image: 'https://images.pexels.com/photos/3785093/pexels-photo-3785093.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Digital Nexus delivered a complex financial dashboard ahead of schedule. Their technical expertise and project management skills are outstanding. Highly recommended!',
      rating: 5,
      project: 'Financial Dashboard'
    },
    {
      id: 5,
      name: 'Sarah Wilson',
      role: 'Owner, WanderLust',
      company: 'WanderLust Travel',
      image: 'https://images.pexels.com/photos/3785094/pexels-photo-3785094.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Our travel booking app has been a huge success thanks to Digital Nexus. The user interface is intuitive and the booking process is seamless. Our customers love it!',
      rating: 5,
      project: 'Travel Booking App'
    }
  ];

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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-40 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
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
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
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
                  className="w-16 h-16 rounded-full object-cover mr-4"
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
            { number: '50+', label: 'Happy Clients', icon: '😊' },
            { number: '98%', label: 'Satisfaction Rate', icon: '⭐' },
            { number: '150+', label: 'Projects Completed', icon: '🚀' },
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