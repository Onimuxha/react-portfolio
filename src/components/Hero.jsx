import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import TextType from './TextType'

const Hero = () => {
  const { t, i18n } = useTranslation();
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    const getTimeBasedGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return <Text>hero.morning</Text>;
      if (hour < 18) return <Text>hero.afternoon</Text>;
      return <Text>hero.evening</Text>;
    };

    setGreeting(getTimeBasedGreeting());

    // Update greeting every hour
    const greetingInterval = setInterval(() => {
      setGreeting(getTimeBasedGreeting());
    }, 3600000);

    return () => {
      clearInterval(greetingInterval);
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [t]);

  return (
    <section id='home' className='relative min-h-screen flex items-center justify-center px-4 text-white overflow-hidden'>
      {/* Animated gradient background */}
      <div className='relative z-10 text-center max-w-4xl px-4'>
        <h1 className='text-5xl md:text-8xl font-black text-white mb-2 tracking-tight'>
          <span className='inline-block transition-all duration-500 ease-in-out py-3'>{greeting}</span>,{' '}
          <Text>general.i'm</Text>{' '}
          <span
            className='text-transparent text-outline'
          >
            <Text>hero.name</Text>
          </span>
        </h1>

        <h2 className='text-2xl mt-9 md:text-4xl mb-8 text-gray-700 dark:text-gray-300 font-light tracking-tight text-center'>
          <Text>general.i'm-a</Text>{' '}
          <TextType
            className='font-semibold text-gray-900 dark:text-white'
            text={["Web Developer", "UI/UX Designer", "Frontend Engineer", "JavaScript Enthusiast"]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="_"
          />
        </h2>
        <p className='text-lg md:text-2xl max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400 leading-relaxed text-center'>
          Crafting <span className='font-medium text-gray-900 dark:text-gray-100'>scalable solutions</span> with clean code and intuitive design.
          Full-stack developer specializing in <span className='font-medium text-gray-900 dark:text-gray-100'>React</span> and{' '}
          <span className='font-medium text-gray-900 dark:text-gray-100'>Node.js</span>.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            className='relative inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md'
          >
            <span className='relative z-10 font-medium'><Text>hero.explore-skill</Text></span>
          </Link>

          <Link
            to='experiences'
            smooth={true}
            duration={500}
            className='relative inline-flex items-center justify-center px-8 py-3.5 bg-gray-800 dark:bg-gray-700 text-white font-medium rounded-lg shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-600 hover:shadow-md'
          >
            <span className='relative z-10 font-medium'><Text>hero.view-experience</Text></span>
            <span className='absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500'></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
