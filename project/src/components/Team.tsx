import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Team: React.FC = () => {
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

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Lead Developer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with 8+ years of experience in building scalable web applications.',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'alex@digitalnexus.com'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning designer specializing in user experience and brand identity.',
      skills: ['UI/UX', 'Figma', 'Branding', 'Typography'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'sarah@digitalnexus.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Backend Developer',
      image: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Backend specialist with expertise in microservices and cloud architecture.',
      skills: ['Python', 'Docker', 'Kubernetes', 'PostgreSQL'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'michael@digitalnexus.com'
      }
    },
    {
      name: 'Emily Davis',
      role: 'Frontend Developer',
      image: 'https://images.pexels.com/photos/3785075/pexels-photo-3785075.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Frontend enthusiast passionate about creating beautiful, performant user interfaces.',
      skills: ['Vue.js', 'TypeScript', 'Tailwind', 'Animation'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'emily@digitalnexus.com'
      }
    },
    {
      name: 'David Park',
      role: 'Mobile Developer',
      image: 'https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mobile development expert with deep knowledge of iOS and Android platforms.',
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'david@digitalnexus.com'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experienced project manager ensuring seamless delivery and client satisfaction.',
      skills: ['Agile', 'Scrum', 'Leadership', 'Communication'],
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'lisa@digitalnexus.com'
      }
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Talented professionals dedicated to bringing your digital vision to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
            >
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.github}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm group-hover:bg-cyan-400/20 group-hover:text-cyan-300 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-on-scroll">
          {[
            { number: '6+', label: 'Team Members', icon: '👥' },
            { number: '15+', label: 'Combined Years', icon: '🎯' },
            { number: '12+', label: 'Certifications', icon: '🏆' },
            { number: '100%', label: 'Dedication', icon: '💪' },
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

        {/* Join Team CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our growing team.
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">View Open Positions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;