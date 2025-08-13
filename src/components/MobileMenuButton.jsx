import React from 'react';

const MobileMenuButton = ({ isOpen, toggleOpen }) => {
  return (
    <button
      onClick={toggleOpen}
      className={`
        ml-4 flex items-center justify-center w-10 h-10
        backdrop-blur-sm border
        bg-black/80
        border-gray-700
        rounded-lg focus:outline-none
        hover:shadow-lg hover:shadow-white/10
        transition-all duration-300
        group
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