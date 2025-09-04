import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../components/LocalizedText';
import TextType from '../components/TextType';
import ShinyText from '../components/ShinyText';
import { IconTerminal2, IconBriefcase } from '@tabler/icons-react';

import { ShootingStars } from '../components/ui/shooting-stars';
import { StarsBackground } from '../components/ui/stars-background';

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
      className='relative flex min-h-screen items-center justify-center overflow-hidden px-3 text-white'
    >
      {/* Animated gradient background*/}
      <div className='relative z-10 max-w-4xl px-4 text-center'>
        <h1 className='mb-2 text-5xl font-black tracking-tight text-white md:text-8xl'>
          <span className='inline-block py-3 transition-all duration-500 ease-in-out'>{greeting}</span>,{' '}
          <Text>general.i'm</Text> <ShinyText text='SOCHEATH' disabled={false} speed={3} className='custom-class' />
        </h1>

        <h2 className='mb-8 mt-9 text-center text-2xl font-light tracking-tight text-gray-300 md:text-4xl'>
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
        <p className='text-md mx-auto mb-12 max-w-2xl text-center leading-relaxed text-gray-400 md:text-xl'>
          Crafting <span className='font-medium text-gray-100'>scalable solutions</span> with clean code and intuitive
          design. Full-stack developer specializing in{' '}
          <a className="font-medium text-sky-500 after:content-['_↗']" target='_blank' href='https://react.dev/'>
            React.js
          </a>{' '}
          and{' '}
          <a className="font-medium text-sky-500 after:content-['_↗']" target='_blank' href='https://nodejs.org'>
            Node.js
          </a>
          .
        </p>
        <div className='flex flex-col justify-center gap-16 sm:flex-row'>
          <button
            onClick={() => {
              const skillsSection = document.getElementById('skills');
              if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className='group relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none'
          >
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 p-3 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
              <span className='flex translate-x-0 items-center p-5 transition-all duration-500 hover:translate-x-2'>
                <Text>hero.explore-skill</Text>
                <IconTerminal2 size={20} className='ml-2' />
              </span>
            </span>
          </button>
          <button
            onClick={() => {
              const skillsSection = document.getElementById('experiences');
              if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className='animate-shimmer inline-flex h-14 items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
          >
            <span className='flex translate-x-0 items-center transition-all duration-500 hover:translate-x-2'>
              <Text>hero.view-experience</Text>
              <IconBriefcase size={20} className='ml-2' />
            </span>
          </button>
        </div>
      </div>
      <StarsBackground />
      <ShootingStars />
    </section>
  );
};

export default Hero;
