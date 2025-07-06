import React from 'react';

interface CustomCursorProps {
  position: { x: number; y: number };
}

const CustomCursor: React.FC<CustomCursorProps> = ({ position }) => {
  // Don't render custom cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-50 hidden lg:block"
      style={{
        left: position.x - 10,
        top: position.y - 10,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-5 h-5 bg-cyan-400 rounded-full opacity-60 blur-sm animate-pulse"></div>
      <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default CustomCursor;