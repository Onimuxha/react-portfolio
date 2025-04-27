import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const animating = useRef(false);

  useEffect(() => {
    // Animation function using lerp (linear interpolation)
    const animate = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const targetProgress = (scrollY / (documentHeight - windowHeight)) * 100;

      // Apply smooth transition with easing
      setScrollProgress((prev) => {
        const newValue = prev + (targetProgress - prev) * 0.12;
        return Math.abs(targetProgress - newValue) < 0.1 ? targetProgress : newValue;
      });

      // Continue animation loop
      if (Math.abs(scrollProgress - targetProgress) > 0.1) {
        requestAnimationFrame(animate);
      } else {
        animating.current = false;
      }
    };

    // Start animation on scroll
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);

      if (!animating.current) {
        animating.current = true;
        requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollProgress]);

  return (
    <footer className='bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden'>
      {/* Glowing gradient accent line */}
      <div className='absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.7)] after:shadow-[0_0_25px_rgba(96,165,250,0.5)]'></div>
      <div className='container mx-auto px-6 relative z-10'>
        {/* Centered main content */}
        <div className='flex flex-col items-center text-center mb-8'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            className='text-3xl font-semibold bg-gradient-to-r cursor-pointer from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 mb-4'
          >
            Kirito
          </Link>

          {/* Short description */}
          <p className='text-gray-400 text-sm max-w-md mb-6'>
            Crafting exceptional digital experiences with modern web technologies.
          </p>

          {/* Quick links */}
          <div className='flex flex-wrap justify-center gap-4 mb-6'>
            {['home', 'about', 'skills', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className='text-gray-400 cursor-pointer hover:text-cyan-300 capitalize transition-colors duration-300 text-sm px-3 py-1'
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Contact info */}
          <div className='space-y-2'>
            <a
              href='mailto:hello@kirito.dev'
              className='text-gray-400 hover:text-cyan-300 transition-colors text-sm flex items-center justify-center'
            >
              <svg className='w-4 h-4 mr-2 text-cyan-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              hello@kirito.dev
            </a>
          </div>
        </div>

        {/* Centered copyright */}
        <div className='border-t border-gray-700 pt-6 text-center'>
          <p className='text-gray-500 text-sm'>
            &copy; {currentYear} <span className='text-cyan-300'>Kirito</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back-to-top button with progress indicator */}
      {!isAtTop && (
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
      )}
    </footer>
  );
};

export default Footer;
