import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
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

const SkillBar = ({ skill, icon, description, percentage }) => {
  const progressRef = useRef(null);
  const percentageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              progressRef.current.style.width = `${percentage}%`;
              let start = 0;
              const end = percentage;
              const duration = 1500;
              const increment = end / (duration / 16);

              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(timer);
                }
                percentageRef.current.textContent = `${Math.floor(start)}%`;
              }, 16);
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage]);

  return (
    <div
      className='mb-6 group p-6 rounded-xl border border-gray-300/20 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/50 backdrop-blur-sm cursor-default transition-all duration-300 shadow-md'
      data-aos='fade-up'
    >
      <div className='flex items-start gap-5 mb-4'>
        <span className='text-xs group-hover:rotate-[15deg] transition-transform bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded'>
          {icon}
        </span>
        <div className='flex-grow'>
          <div className='flex justify-between items-center mb-2'>
            {/* text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400 */}
            <h3 className='text-md md:text-xl text-gray-800 dark:text-gray-100'>
              {skill}
            </h3>
            <span ref={percentageRef} className='font-medium text-gray-700 dark:text-gray-300'>
              0%
            </span>
          </div>
          <p className='text-gray-700/90 dark:text-gray-400/90 leading-relaxed'>{description}</p>
        </div>
      </div>
      <div className='w-full bg-gray-200/70 dark:bg-gray-800/60 rounded-full h-2 overflow-hidden'>
        <div
          ref={progressRef}
          className='h-full bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-500 dark:to-gray-400 rounded-full transition-all duration-1000 ease-out'
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description }) => {
  return (
    <div
      className='h-full p-7 rounded-xl border border-gray-300/20 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/50 backdrop-blur-sm cursor-default transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-400/10 dark:hover:shadow-gray-600/10 hover:border-gray-400/30 dark:hover:border-gray-600/50 group'
      data-aos='zoom-in'
    >
      <div className='flex flex-col h-full'>
        <div className='mb-6 text-5xl flex justify-center group-hover:rotate-[15deg] transition-transform'>
          <span className='text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded'>
            {icon}
          </span>
        </div>
        <h3 className='text-center mb-4 text-md md:text-xl text-gray-800 dark:text-gray-100'>
          {title}
        </h3>
        <p className='text-center text-gray-700/90 dark:text-gray-400/90 leading-relaxed'>{description}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t, i18n } = useTranslation();
  const skillsData = [
    {
      skill: 'JavaScript',
      icon: <JavaScript className='w-7 h-7' />,
      description: 'Modern ES6+, async/await, functional programming',
      percentage: 90,
    },
    {
      skill: 'React.js',
      icon: <ReactIcon className='w-7 h-7' />,
      description: 'Hooks, Context API, Redux, Next.js',
      percentage: 85,
    },
    {
      skill: 'Node.js',
      icon: <NodeJs className='w-7 h-7' />,
      description: 'Express, RESTful APIs, MongoDB integration',
      percentage: 75,
    },
    {
      skill: 'CSS/Tailwind',
      icon: <TailwindCSS className='w-7 h-7' />,
      description: 'Responsive design, animations, custom themes',
      percentage: 90,
    },
    {
      skill: 'TypeScript',
      icon: <TypeScript className='w-7 h-7' />,
      description: 'Type safety, interfaces, generics',
      percentage: 80,
    },
    {
      skill: 'Git/GitHub',
      icon: <GitHubDark className='w-7 h-7' />,
      description: 'Version control, collaboration, CI/CD',
      percentage: 85,
    },
  ];

  const cardData = [
    {
      icon: <ReactIcon className='w-7 h-7' />,
      title: 'React.js',
      description: 'Building modern and performant UI components with hooks and context API',
    },
    {
      icon: <JavaScript className='w-7 h-7' />,
      title: 'JavaScript',
      description: 'ES6+ syntax, async programming, and functional patterns',
    },
    {
      icon: <TailwindCSS className='w-7 h-7' />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
    },
    {
      icon: <NodeJs className='w-7 h-7' />,
      title: 'Node.js',
      description: 'Building scalable server-side applications and APIs',
    },
  ];

  const toolsData = [
    {
      icon: <GitHubDark className='w-7 h-7' />,
      title: 'GitHub',
      description: 'Version control and collaborative development workflow',
    },
    {
      icon: <VisualStudioCode className='w-7 h-7' />,
      title: 'VS Code',
      description: 'Advanced code editing with extensive plugin ecosystem',
    },
    {
      icon: <Figma className='w-7 h-7' />,
      title: 'Figma',
      description: 'UI/UX design, prototyping, and design system management',
    },
    {
      icon: <GitLab className='w-7 h-7' />,
      title: 'GitLab',
      description: 'CI/CD pipelines and DevOps workflows',
    },
    {
      icon: <MySQL className='w-7 h-7' />,
      title: 'MySQL',
      description: 'Relational database system for structured data and SQL queries',
    },
    {
      icon: <WordPress className='w-7 h-7' />,
      title: 'WordPress',
      description: 'Open-source CMS used to build websites and manage content easily',
    },
    {
      icon: <Bootstrap5 className='w-7 h-7' />,
      title: 'Bootstrap',
      description: 'Responsive front-end framework for designing websites and interfaces',
    },
    {
      icon: <TailwindCSS className='w-7 h-7' />,
      title: 'Tailwind CSS (Basic)',
      description: 'Utility-first CSS framework for building custom designs quickly',
    },
  ];

  return (
    <section
      id='skills'
      className='py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 min-h-screen'
    >
      <div className='container mx-auto px-3 max-w-6xl'>
        <div className='text-center mb-16'>
          <h3 className='text-5xl md:text-7xl font-black tracking-tight mb-4 text-gray-900 dark:text-white'>
            {i18n.language === 'kh' ? (
              <>
                <span className='text-transparent py-6 bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100'>
                  <Text>skill.skill</Text>
                </span>{' '}
                <Text>general.my</Text>
              </>
            ) : (
              <>
                <Text>general.my</Text>{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100'>
                  <Text>skill.skill</Text>
                </span>
              </>
            )}
          </h3>
          <div className='w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600 mx-auto rounded-full mb-10'></div>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            My proficiency across the full development stack and design disciplines
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-20'>
          {skillsData.map((skill, index) => (
            <SkillBar
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
          className='text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900 dark:text-white text-center'
          data-aos='fade-up'
        >
          <Text>skill.main-technologies</Text>
        </h3>

        <div className='grid grid-cols-1 mb-20 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cardData.map((card, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='800'
              data-aos-offset='100'
              data-aos-easing='ease-out-cubic'
            >
              <SkillCard icon={card.icon} title={card.title} description={card.description} />
            </div>
          ))}
        </div>

        <h3
          className='text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900 dark:text-white text-center'
          data-aos='fade-up'
        >
          Tools & Platforms
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {toolsData.map((tool, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='800'
              data-aos-offset='100'
              data-aos-easing='ease-out-cubic'
            >
              <SkillCard icon={tool.icon} title={tool.title} description={tool.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
