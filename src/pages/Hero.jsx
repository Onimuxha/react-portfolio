import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Text from '../components/LocalizedText';
import TextType from '../components/TextType';
import ShinyText from '../components/ShinyText';
import { IconTerminal2, IconBriefcase } from '@tabler/icons-react';

import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

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
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center px-3 text-white overflow-hidden'
    >
      {/* Animated gradient background*/}
      <div className='relative z-10 text-center max-w-4xl px-4'>
        <h1 className='text-5xl md:text-8xl font-black text-white mb-2 tracking-tight'>
          <span className='inline-block transition-all duration-500 ease-in-out py-3'>{greeting}</span>,{' '}
          <Text>general.i'm</Text> <ShinyText text='SOCHEATH' disabled={false} speed={3} className='custom-class' />
        </h1>

        <h2 className='text-2xl mt-9 md:text-4xl mb-8 text-gray-300 font-light tracking-tight text-center'>
          <Text>general.i'm-a</Text>{' '}
          <TextType
            className='font-semibold text-white'
            text={['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'JavaScript Enthusiast']}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter='_'
          />
        </h2>
        <p className='text-md md:text-xl max-w-2xl mx-auto mb-12 text-gray-400 leading-relaxed text-center'>
          Crafting <span className='font-medium text-gray-100'>scalable solutions</span> with clean code and intuitive
          design. Full-stack developer specializing in{' '}
          <a className="text-sky-500 font-medium after:content-['_↗']" target='_blank' href='https://react.dev/'>
            React.js
          </a>{' '}
          and{' '}
          <a className="text-sky-500 font-medium after:content-['_↗']" target='_blank' href='https://nodejs.org'>
            Node.js
          </a>
          .
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            to='skills'
            smooth
            duration={500}
            className='relative flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-gray-500 text-gray-300 hover:text-white bg-transparent hover:bg-gray-900 dark:hover:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group'
          >
            <span className='text-md md:text-xl text-gray-200 leading-relaxed'>
              <Text>hero.explore-skill</Text>
            </span>
            <IconTerminal2 className='ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
          </Link>

          <Link
            to='experiences'
            smooth
            duration={500}
            className='relative flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white border border-gray-700/50 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
          >
            <span className='text-md md:text-xl text-gray-400 leading-relaxed'>
              <Text>hero.view-experience</Text>
            </span>
            <IconBriefcase className='ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
            <span className='absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-500 group-hover:w-3/4 group-hover:left-[12.5%]' />
          </Link>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
};

export default Hero;
