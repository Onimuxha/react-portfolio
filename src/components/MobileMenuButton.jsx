import React from 'react';

const MobileMenuButton = ({ isOpen, toggleOpen }) => {
  return (
    <button
      onClick={toggleOpen}
      className={`
       w-10 h-10 rounded-lg flex items-center justify-center 
      bg-white/10 backdrop-blur-sm
      border border-gray-600
      hover:shadow-md hover:shadow-white/20
      transition-all duration-300
      `}
      aria-label='Toggle menu'
    >
      <div
        className={`
          relative w-6 h-5 flex flex-col justify-center items-center
          ${isOpen ? 'rotate-180' : ''}
          transition-all duration-500
        `}
      >
        <span
          className={`
            absolute h-0.5
            bg-white
            transition-all duration-300
            ${isOpen ? 'w-6 rotate-45 top-2' : 'w-4 -translate-y-2 -translate-x-1'}
          `}
        ></span>
        <span
          className={`
            absolute h-0.5
            bg-white
            transition-all duration-300
            ${isOpen ? 'w-0' : 'w-6'}
          `}
        ></span>
        <span
          className={`
            absolute h-0.5
            bg-white
            transition-all duration-300
            ${isOpen ? 'w-6 -rotate-45 top-2' : 'w-4 translate-y-2 translate-x-1'}
          `}
        ></span>
      </div>
    </button>
  );
};

export default MobileMenuButton;
