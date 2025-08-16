import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import TextType from './TextType'
import ShinyText from './ShinyText'
import { ArrowBigDown, BriefcaseBusiness, TerminalSquare } from 'lucide-react';

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
    <section id='home' className='relative min-h-screen flex items-center justify-center px-3 text-white overflow-hidden'>
      {/* Animated gradient background*/}
      <div className='relative z-10 text-center max-w-4xl px-4'>
        <h1 className='text-5xl md:text-8xl font-black text-white mb-2 tracking-tight'>
          <span className='inline-block transition-all duration-500 ease-in-out py-3'>{greeting}</span>,{' '}
          <Text>general.i'm</Text>{' '}
          <ShinyText text='SOCHEATH' disabled={false} speed={3} className='custom-class' />
        </h1>

        <h2 className='text-2xl mt-9 md:text-4xl mb-8 text-gray-300 font-light tracking-tight text-center'>
          <Text>general.i'm-a</Text>{' '}
          <TextType
            className='font-semibold text-white'
            text={["Web Developer", "UI/UX Designer", "Frontend Engineer", "JavaScript Enthusiast"]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="_"
          />
        </h2>
        <p className='text-md md:text-xl max-w-2xl mx-auto mb-12 text-gray-400 leading-relaxed text-center'>
          Crafting <span className='font-medium text-gray-100'>scalable solutions</span> with clean code and intuitive design.
          Full-stack developer specializing in <a class="text-sky-500 font-medium after:content-['_↗']" target='_blank' href="https://react.dev/">React.js</a> and {' '}
          <a class="text-sky-500 font-medium after:content-['_↗']" target='_blank' href="https://nodejs.org">Node.js</a>.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            to='skills'
            smooth
            duration={500}
            className='relative flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-gray-500 text-gray-300 hover:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group'>
            {/* Animated background layer */}
            <span className='absolute inset-0 bg-gradient-to-r from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
            <span className='relative z-10 font-medium'>
              <Text>hero.explore-skill</Text>
            </span>
            {/* Animated right arrow */}
            <TerminalSquare className='ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
          </Link>

          <Link
            to='experiences'
            smooth
            duration={500}
            className='relative flex items-center justify-center px-8 py-3.5 rounded-lg bg-gray-700 dark:bg-gray-800 text-white shadow-md hover:shadow-lg transition-all cursor-pointer duration-300 overflow-hidden group'>
            <span className='relative z-10 font-medium'>
              <Text>hero.view-experience</Text>
            </span>
            {/* Animated hover layer */}
            <span className='absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity' />
            {/* Right arrow icon */}
            <BriefcaseBusiness className='ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
