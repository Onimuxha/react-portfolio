import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    // Set time-based greeting
    const getTimeBasedGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good morning';
      if (hour < 18) return 'Good afternoon';
      return 'Good evening';
    };

    setGreeting(getTimeBasedGreeting());

    // Update greeting every hour
    const greetingInterval = setInterval(() => {
      setGreeting(getTimeBasedGreeting());
    }, 3600000); // Update every hour

    // Typed.js initialization
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
    }

    return () => {
      clearInterval(greetingInterval);
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center px-4 bg-gray-900 text-white overflow-hidden'>
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(28,25,25,0.8)_0%,_transparent_70%)] animate-pulse-slow'></div>
      </div>

      <div className='relative z-10 text-center max-w-4xl px-4'>
        <h1 className='text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[4rem] font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-gradient pb-3 leading-[1.1]'>
          <span className='inline-block transition-all duration-500 ease-in-out'>{greeting}</span>, I'm{' '}
          <span className='text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]'>Kirito</span>
        </h1>

        <h2 className='text-2xl md:text-4xl mb-8 text-gray-300 font-medium'>
          I'm a <span ref={typedRef} className='text-cyan-300 font-thin'></span>
        </h2>

        <p className='text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-300 leading-relaxed'>
          Crafting <span className='text-cyan-300'>scalable solutions</span> with clean code and intuitive design.
          Full-stack developer specializing in <span className='text-blue-300'>React</span> and{' '}
          <span className='text-emerald-300'>Node.js</span>.
        </p>

        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            className='relative inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 group hover:bg-cyan-400/10 hover:shadow-cyan-400/20'
          >
            <span className='relative z-10 font-medium'>Explore Skills</span>
            <span className='absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-500'></span>
          </Link>

          <Link
            to='projects'
            smooth={true}
            duration={500}
            className='relative inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 font-medium rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 group hover:shadow-cyan-400/30'
          >
            <span className='relative z-10'>View Projects</span>
            <span className='absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500'></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
