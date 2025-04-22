import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  useEffect(() => {
    console.log(typedRef.current);
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'JavaScript Enthusiast'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });

      return () => {
        if (typedInstance.current) {
          typedInstance.current.destroy();
        }
      };
    }
  }, []);
  return (
    <section className='relative min-h-screen flex items-center justify-center px-4 bg-gray-900 text-white overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-90'></div>
      <div className='relative z-10 text-center'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
          Hi, I'm <span className='text-primary'>Kirito</span>
        </h1>
        <h2 className='text-2xl md:text-4xl mb-8 text-gray-300'>
          I'm a <span ref={typedRef} className='text-primary'></span>
        </h2>
        <p className='text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-400'>
          Passionate about creating beautiful, functional, and user-friendly websites and applications.
        </p>
        <div className='flex justify-center space-x-4'>
          {/* Primary Button */}
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='relative inline-block px-6 py-3 bg-primary text-white rounded-md shadow-md overflow-hidden cursor-pointer transition-all duration-300 group'
          >
            <span className='relative z-10'>Contact Me</span>
            <span className='absolute inset-0 w-0 h-0 bg-white rounded opacity-50 group-hover:w-full group-hover:h-full transition-all duration-500'></span>
          </Link>

          {/* Secondary Button */}
          <Link
            to='skills'
            smooth={true}
            duration={500}
            className='relative inline-block px-6 py-3 bg-gray-800 text-gray-300 rounded-md shadow-md overflow-hidden cursor-pointer transition-all duration-300 group'
          >
            <span className='relative z-10'>Learn More</span>
            <span className='absolute inset-0 w-0 h-0 bg-gray-300 rounded opacity-50 group-hover:w-full group-hover:h-full transition-all duration-500'></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
