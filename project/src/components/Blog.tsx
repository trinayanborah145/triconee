import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog: React.FC = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.',
      author: 'Alex Chen',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Development',
      tags: ['React', 'AI', 'Web Development']
    },
    {
      id: 2,
      title: 'Design Systems: Building Consistency at Scale',
      excerpt: 'Learn how to create and maintain design systems that ensure consistency across your digital products.',
      author: 'Sarah Johnson',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design',
      tags: ['UI/UX', 'Design Systems', 'Figma']
    },
    {
      id: 3,
      title: 'Mobile-First Development: Best Practices',
      excerpt: 'Discover essential strategies for creating mobile-first applications that deliver exceptional user experiences.',
      author: 'David Park',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      tags: ['Mobile', 'React Native', 'UX']
    },
    {
      id: 4,
      title: 'Cloud Architecture for Modern Applications',
      excerpt: 'Understanding the fundamentals of cloud architecture and how to build scalable, resilient applications.',
      author: 'Michael Rodriguez',
      date: 'Nov 28, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Backend',
      tags: ['Cloud', 'AWS', 'Architecture']
    },
    {
      id: 5,
      title: 'Performance Optimization Techniques',
      excerpt: 'Advanced techniques for optimizing web application performance and improving user experience.',
      author: 'Emily Davis',
      date: 'Nov 20, 2024',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Performance',
      tags: ['Performance', 'Optimization', 'Core Web Vitals']
    },
    {
      id: 6,
      title: 'Accessibility in Modern Web Design',
      excerpt: 'Creating inclusive digital experiences that work for everyone, regardless of their abilities.',
      author: 'Lisa Thompson',
      date: 'Nov 15, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Accessibility',
      tags: ['Accessibility', 'WCAG', 'Inclusive Design']
    }
  ];

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from the world of web development and design.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-on-scroll">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-gray-400 text-sm">Featured</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span className="text-sm">{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span className="text-sm">{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span className="text-sm">{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="group animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-gray-300 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-on-scroll">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300">
            <span className="relative z-10">View All Articles</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;