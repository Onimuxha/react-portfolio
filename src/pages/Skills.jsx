import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../components/LocalizedText';
import {
  Bootstrap5,
  Figma,
  GitHubDark,
  GitLab,
  JavaScript,
  MySQL,
  NodeJs,
  TailwindCSS,
  TypeScript,
  VisualStudioCode,
  React as ReactIcon,
  WordPress,
} from 'developer-icons';

const CircularProgress = ({ percentage, size = 120, strokeWidth = 8 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => {
              let start = 0;
              const end = percentage;
              const duration = 2000;
              const increment = end / (duration / 16);

              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(timer);
                }
                setProgress(Math.floor(start));
              }, 16);
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage, isVisible]);

  return (
    <div ref={progressRef} className='relative flex items-center justify-center'>
      <svg width={size} height={size} className='-rotate-90 transform'>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='transparent'
          className='text-slate-200 dark:text-slate-700'
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='transparent'
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap='round'
          className='text-slate-600 transition-all duration-1000 ease-out dark:text-slate-300'
        />
      </svg>
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <span className='text-2xl font-bold text-slate-700 dark:text-slate-200'>{progress}%</span>
      </div>
    </div>
  );
};

const ModernSkillBar = ({ skill, icon, description, percentage }) => {
  return (
    <div
      className='group cursor-default rounded-2xl border border-slate-200/60 bg-white/80 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-slate-300/80 hover:shadow-2xl hover:shadow-slate-300/20 dark:border-slate-700/60 dark:bg-slate-900/80 dark:hover:border-slate-600/80 dark:hover:shadow-slate-900/40'
      data-aos='fade-up'
    >
      <div className='flex items-center gap-8'>
        {/* Icon and Progress */}
        <div className='flex flex-col items-center gap-4'>
          <div className='rounded-lg bg-slate-100 p-2 transition-transform duration-500 group-hover:rotate-12 dark:bg-slate-800'>
            <span className='text-slate-600 dark:text-slate-300'>{icon}</span>
          </div>
          <CircularProgress percentage={percentage} size={100} strokeWidth={6} />
        </div>
        {/* Content */}
        <div className='min-w-0 flex-1'>
          <h3 className='mb-3 text-xl font-semibold text-slate-800 transition-colors group-hover:text-slate-900 dark:text-slate-100 dark:group-hover:text-white md:text-2xl'>
            {skill}
          </h3>
          <p className='leading-relaxed text-slate-600 dark:text-slate-400'>{description}</p>

          {/* Decorative line */}
          <div className='mt-4 h-px bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600'></div>
        </div>
      </div>
    </div>
  );
};

const ModernSkillCard = ({ icon, title, description }) => {
  return (
    <div
      className='group relative h-full cursor-default overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:border-slate-300/80 hover:shadow-2xl hover:shadow-slate-300/20 dark:border-slate-700/60 dark:bg-slate-900/80 dark:hover:border-slate-600/80 dark:hover:shadow-slate-900/40'
      data-aos='zoom-in'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-slate-100/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-slate-800/30 dark:via-transparent dark:to-slate-900/50'></div>
      <div className='relative flex h-full flex-col'>
        <div className='mb-6 flex justify-center'>
          <div className='rounded-lg bg-slate-100 p-2 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-slate-200 dark:bg-slate-800 dark:group-hover:bg-slate-700'>
            <span className='text-slate-600 transition-colors duration-300 group-hover:text-slate-700 dark:text-slate-300 dark:group-hover:text-slate-200'>
              {icon}
            </span>
          </div>
        </div>
        {/* Content */}
        <div className='flex-1 text-center'>
          <h3 className='mb-4 text-lg font-semibold text-slate-800 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-100 dark:group-hover:text-white md:text-xl'>
            {title}
          </h3>
          <p className='leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300'>
            {description}
          </p>
        </div>
        {/* Bottom accent */}
        <div className='absolute bottom-0 left-0 right-0 h-0.5 origin-center scale-x-0 transform rounded-full bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 transition-transform duration-500 group-hover:scale-x-100 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600'></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t, i18n } = useTranslation();
  const skillsData = [
    {
      skill: 'JavaScript',
      icon: <JavaScript size={25} />,
      description: 'Modern ES6+, async/await, functional programming',
      percentage: 90,
    },
    {
      skill: 'React.js',
      icon: <ReactIcon size={25} />,
      description: 'Hooks, Context API, Redux, Next.js',
      percentage: 85,
    },
    {
      skill: 'Node.js',
      icon: <NodeJs size={25} />,
      description: 'Express, RESTful APIs, MongoDB integration',
      percentage: 75,
    },
    {
      skill: 'CSS/Tailwind',
      icon: <TailwindCSS size={25} />,
      description: 'Responsive design, animations, custom themes',
      percentage: 90,
    },
    {
      skill: 'TypeScript',
      icon: <TypeScript size={25} />,
      description: 'Type safety, interfaces, generics',
      percentage: 80,
    },
    {
      skill: 'Git/GitHub',
      icon: <GitHubDark size={25} className='dark:invert' />,
      description: 'Version control, collaboration, CI/CD',
      percentage: 85,
    },
  ];

  const cardData = [
    {
      icon: <ReactIcon size={25} />,
      title: 'React.js',
      description: 'Building modern and performant UI components with hooks and context API',
    },
    {
      icon: <JavaScript size={25} />,
      title: 'JavaScript',
      description: 'ES6+ syntax, async programming, and functional patterns',
    },
    {
      icon: <TailwindCSS size={25} />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
    },
    {
      icon: <NodeJs size={25} />,
      title: 'Node.js',
      description: 'Building scalable server-side applications and APIs',
    },
  ];

  const toolsData = [
    {
      icon: <GitHubDark size={25} className='dark:invert' />,
      title: 'GitHub',
      description: 'Version control and collaborative development workflow',
    },
    {
      icon: <VisualStudioCode size={25} />,
      title: 'VS Code',
      description: 'Advanced code editing with extensive plugin ecosystem',
    },
    {
      icon: <Figma size={25} />,
      title: 'Figma',
      description: 'UI/UX design, prototyping, and design system management',
    },
    {
      icon: <GitLab size={25} />,
      title: 'GitLab',
      description: 'CI/CD pipelines and DevOps workflows',
    },
    {
      icon: <MySQL size={25} className='dark:invert' />,
      title: 'MySQL',
      description: 'Relational database system for structured data and SQL queries',
    },
    {
      icon: <WordPress size={25} />,
      title: 'WordPress',
      description: 'Open-source CMS used to build websites and manage content easily',
    },
    {
      icon: <Bootstrap5 size={25} />,
      title: 'Bootstrap',
      description: 'Responsive front-end framework for designing websites and interfaces',
    },
    {
      icon: <TailwindCSS size={25} />,
      title: 'Tailwind CSS (Basic)',
      description: 'Utility-first CSS framework for building custom designs quickly',
    },
  ];

  return (
    <section id='skills' className='relative min-h-screen overflow-hidden bg-gray-100 py-20 pt-28 dark:bg-gray-900'>
      <div className='container relative mx-auto max-w-7xl px-4'>
        <div className='mb-20 text-center'>
          <h3 className='mb-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-7xl'>
            {i18n.language === 'kh' ? (
              <>
                <span className='bg-gradient-to-r py-9 from-slate-600 to-slate-900 bg-clip-text text-transparent dark:from-slate-400 dark:to-slate-100'>
                  <Text>skill.skill</Text>
                </span>{' '}
                <Text>general.my</Text>
              </>
            ) : (
              <>
                <Text>general.my</Text>{' '}
                <span className='bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent dark:from-slate-400 dark:to-slate-100'>
                  <Text>skill.skill</Text>
                </span>
              </>
            )}
          </h3>
          <div className='mx-auto mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600'></div>
          <p className='mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300'>
            My proficiency across the full development stack and design disciplines
          </p>
        </div>

        <div className='mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {skillsData.map((skill, index) => (
            <ModernSkillBar
              key={index}
              skill={skill.skill}
              icon={skill.icon}
              description={skill.description}
              percentage={skill.percentage}
              data-aos-delay={index * 100}
            />
          ))}
        </div>

        <h3
          className='mb-16 text-center text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl'
          data-aos='fade-up'
        >
          <Text>skill.main-technologies</Text>
        </h3>

        <div className='mb-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {cardData.map((card, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='800'
              data-aos-offset='100'
              data-aos-easing='ease-out-cubic'
            >
              <ModernSkillCard icon={card.icon} title={card.title} description={card.description} />
            </div>
          ))}
        </div>

        <h3
          className='mb-16 text-center text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl'
          data-aos='fade-up'
        >
          Tools & Platforms
        </h3>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {toolsData.map((tool, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='800'
              data-aos-offset='100'
              data-aos-easing='ease-out-cubic'
            >
              <ModernSkillCard icon={tool.icon} title={tool.title} description={tool.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
