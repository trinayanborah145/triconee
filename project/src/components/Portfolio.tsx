import React, { useRef, useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  year: string;
  location?: string;
  client?: string;
}

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const projects: Project[] = [
    {
      id: 1,
      title: 'Room Editors',
      category: 'residential',
      description: 'Modern Website for Room Editors, Famous Interior Design business of Assam',
      features: ['Custom Interiors', 'Space Planning', 'Luxury Design'],
      image: 'https://images.pexels.com/photos/5824891/pexels-photo-5824891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2024',
      location: 'Guwahati, Assam'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced analytics and AI recommendations.',
      features: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      client: 'TechMart'
    },
    {
      id: 3,
      title: 'Cozy Bedroom Retreat',
      category: 'residential',
      description: 'Warm and inviting bedroom with custom storage solutions.',
      features: ['Custom Wardrobes', 'Mood Lighting', 'Textured Finishes'],
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2023',
      location: 'Chicago, IL'
    },
    {
      id: 4,
      title: 'Gourmet Kitchen',
      category: 'residential',
      description: 'High-end kitchen design with premium appliances and custom cabinetry.',
      features: ['Premium Appliances', 'Custom Cabinetry', 'Stone Countertops'],
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2023',
      location: 'Miami, FL'
    },
    {
      id: 5,
      title: 'Wellness Center',
      category: 'commercial',
      description: 'Serene wellness space designed for relaxation and rejuvenation.',
      features: ['Ambient Lighting', 'Natural Materials', 'Tranquil Color Palette'],
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2023',
      location: 'Austin, TX'
    },
    {
      id: 6,
      title: 'Luxury Penthouse',
      category: 'residential',
      description: 'Stunning penthouse with panoramic views and high-end finishes.',
      features: ['Panoramic Windows', 'Smart Home Integration', 'Premium Materials'],
      image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2024',
      location: 'Los Angeles, CA'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
  ];
  
  const handleProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://rroomedditors.netlify.app/', '_blank');
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{ willChange: 'opacity' }}>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" style={{ willChange: 'transform' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl" style={{ willChange: 'transform' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Designs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest interior design projects and let us transform your space into something extraordinary.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              style={{ willChange: 'background-color, color' }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={handleProjectClick}
              className="group animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-amber-500/10 transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full"
              style={{ willChange: 'transform, background-color' }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info - Always visible */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-amber-400 font-semibold">{project.year}</span>
                  <span className="text-sm text-gray-400">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white/10 text-white rounded-full text-xs hover:bg-amber-500/30 transition-colors duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="text-amber-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    View Project →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Get Your Site Button - WhatsApp */}
        <div className="text-center mt-16 animate-on-scroll">
          <a 
            href="https://wa.me/918474076850?text=Hey%20I've%20came%20from%20your%20website%20and%20I%20want%20a%20website%20for%20my%20business" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
            style={{ willChange: 'transform' }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.498 14.382v3.3a1 1 0 0 1-1.364.949c-1.24-.45-4.5-2.3-6.886-4.5-2.4-2.2-3.436-4.3-3.9-5.5a1 1 0 0 1 .3-1.1l2.5-2.5a1 1 0 0 1 1.414 0l1.8 1.8a1 1 0 0 1 0 1.414l-.7.7a.25.25 0 0 0 0 .354l2.1 2.1a.25.25 0 0 0 .354 0l.7-.7a1 1 0 0 1 1.414 0l1.8 1.8a1 1 0 0 1 0 1.414l-1.1 1.1a.25.25 0 0 0 0 .354l1.1 1.1a1 1 0 0 1 0 1.414l-1.1 1.1z"/>
              </svg>
              Get Your Site
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-white/20">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">
                {projects.find(p => p.id === selectedProject)?.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            {/* Modal content would go here */}
            <p className="text-gray-300 mb-6">
              Detailed project information and additional screenshots would be displayed here.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold">
                View Live
              </button>
              <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white font-semibold">
                View Code
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;