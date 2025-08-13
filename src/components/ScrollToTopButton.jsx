import { ArrowUpFromDot } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsAtTop(scrollY < 100);
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    updateScrollProgress();

    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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
      className='fixed cursor-pointer bottom-5 right-5 w-10 h-10 flex items-center justify-center transition-all z-50 group'
    >
      {/* Progress circle background */}
      <svg className='absolute w-full h-full' viewBox='0 0 36 36'>
        {/* Full circle (background) */}
        <path
          d='M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831'
          fill='none'
          stroke='rgba(209, 213, 219, 0.5) dark:rgba(55, 65, 81, 0.5)'
          strokeWidth='2'
          className='text-gray-300 dark:text-gray-600'
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
      <div className='absolute inset-0 m-1 bg-gray-800/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-200 group-hover:bg-gradient-to-br from-cyan-400/10 to-blue-500/10 transition-all duration-300 shadow-md'>
        <ArrowUpFromDot className='w-4 h-4'/>
      </div>
    </Link>
  );
};

export default ScrollToTopButton;
