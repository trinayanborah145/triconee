import React from 'react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 md:w-20 h-16 md:h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-12 md:w-16 h-12 md:h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
        <div className="text-xl md:text-2xl font-bold text-white mb-2 animate-pulse">
          Tricone Digital Services
        </div>
        <div className="text-blue-400 animate-pulse text-sm md:text-base">
          Crafting Digital Excellence
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;