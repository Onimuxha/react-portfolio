import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Function to calculate scroll progress
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if at top
      setIsAtTop(scrollY < 100);

      // Calculate progress percentage
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    // Calculate scroll progress immediately on mount
    updateScrollProgress();

    // Handle scroll event with throttling for performance
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Schedule update on next animation frame for smooth performance
      animationFrameRef.current = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (isAtTop) return null;

  return (
    <Link
      to='home'
      smooth={true}
      duration={500}
      className='fixed cursor-pointer bottom-14 right-2 w-10 h-10 flex items-center justify-center transition-all z-50 group'
    >
      {/* Progress circle background */}
      <svg className='absolute w-full h-full' viewBox='0 0 36 36'>
        {/* Full circle (gray background) */}
        <path
          d='M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831'
          fill='none'
          stroke='rgba(55, 65, 81, 0.5)'
          strokeWidth='2'
        />
        {/* Progress circle (gradient) */}
        <path
          d='M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831'
          fill='none'
          stroke='url(#progressGradient)'
          strokeWidth='2'
          strokeDasharray={`${scrollProgress}, 100`}
          strokeLinecap='round'
        />
        <defs>
          <linearGradient id='progressGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#22d3ee' />
            <stop offset='100%' stopColor='#3b82f6' />
          </linearGradient>
        </defs>
      </svg>

      {/* Button center with hover effect */}
      <div className='absolute inset-0 m-1 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gradient-to-br from-cyan-400/10 to-blue-500/10 transition-all duration-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
        </svg>
      </div>
    </Link>
  );
};

export default ScrollToTopButton;
