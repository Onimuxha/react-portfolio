import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';

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
      className='mb-6 group p-6 rounded-xl border border-gray-300/20 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/50 backdrop-blur-sm hover:border-gray-400/30 dark:hover:border-gray-600/50 transition-all duration-300 shadow-md hover:shadow-lg'
      data-aos='fade-up'
    >
      <div className='flex items-start gap-5 mb-4'>
        <div className='text-2xl flex-shrink-0 text-gray-800 dark:text-gray-300 p-3 bg-gray-200/50 dark:bg-gray-800/70 rounded-lg group-hover:bg-gray-300/50 dark:group-hover:bg-gray-700/70 transition-colors'>
          <i className={icon}></i>
        </div>
        <div className='flex-grow'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-950 dark:group-hover:text-white transition-colors'>
              {skill}
            </h3>
            <span
              ref={percentageRef}
              className='font-medium text-gray-700 dark:text-gray-300'
            >
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
      className='h-full p-7 rounded-xl border border-gray-300/20 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/50 backdrop-blur-sm cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-400/10 dark:hover:shadow-gray-600/10 hover:border-gray-400/30 dark:hover:border-gray-600/50 group'
      data-aos='zoom-in'
    >
      <div className='flex flex-col h-full'>
        <div className='mb-6 text-5xl flex justify-center group-hover:scale-110 transition-transform'>
          <i className={`${icon} text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100`}></i>
        </div>
        <h3 className='text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white group-hover:text-gray-950 dark:group-hover:text-gray-50 transition-colors'>
          {title}
        </h3>
        <p className='text-gray-700/90 dark:text-gray-400/90 text-center leading-relaxed flex-grow'>{description}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t, i18n } = useTranslation();
  const skillsData = [
    {
      skill: 'JavaScript',
      icon: 'bx bxl-javascript',
      description: 'Modern ES6+, async/await, functional programming',
      percentage: 90,
    },
    {
      skill: 'React.js',
      icon: 'bx bxl-react',
      description: 'Hooks, Context API, Redux, Next.js',
      percentage: 85,
    },
    {
      skill: 'Node.js',
      icon: 'bx bxl-nodejs',
      description: 'Express, RESTful APIs, MongoDB integration',
      percentage: 75,
    },
    {
      skill: 'CSS/Tailwind',
      icon: 'bx bxl-css3',
      description: 'Responsive design, animations, custom themes',
      percentage: 90,
    },
    {
      skill: 'TypeScript',
      icon: 'bx bxl-typescript',
      description: 'Type safety, interfaces, generics',
      percentage: 80,
    },
    {
      skill: 'Git/GitHub',
      icon: 'bx bxl-git',
      description: 'Version control, collaboration, CI/CD',
      percentage: 85,
    },
  ];

  const cardData = [
    {
      icon: 'bx bxl-react',
      title: 'React.js',
      description: 'Building modern and performant UI components with hooks and context API',
    },
    {
      icon: 'bx bxl-javascript',
      title: 'JavaScript',
      description: 'ES6+ syntax, async programming, and functional patterns',
    },
    {
      icon: 'bx bxl-tailwind-css',
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
    },
    {
      icon: 'bx bxl-nodejs',
      title: 'Node.js',
      description: 'Building scalable server-side applications and APIs',
    },
  ];

  const toolsData = [
    {
      icon: 'bx bxl-github',
      title: 'GitHub',
      description: 'Version control and collaborative development workflow',
    },
    {
      icon: 'bx bxl-visual-studio',
      title: 'VS Code',
      description: 'Advanced code editing with extensive plugin ecosystem',
    },
    {
      icon: 'bx bxl-figma',
      title: 'Figma',
      description: 'UI/UX design, prototyping, and design system management',
    },
    {
      icon: 'bx bxl-gitlab',
      title: 'GitLab',
      description: 'CI/CD pipelines and DevOps workflows',
    },
    {
      icon: 'bx bxs-data',
      title: 'MySQL',
      description: 'Relational database system for structured data and SQL queries',
    },
    {
      icon: 'bx bxl-wordpress',
      title: 'WordPress',
      description: 'Open-source CMS used to build websites and manage content easily',
    },
    {
      icon: 'bx bxl-bootstrap',
      title: 'Bootstrap',
      description: 'Responsive front-end framework for designing websites and interfaces',
    },
    {
      icon: 'bx bxl-tailwind-css',
      title: 'Tailwind CSS (Basic)',
      description: 'Utility-first CSS framework for building custom designs quickly',
    },
  ];

  return (
    <section id='skills' className='py-20 bg-gray-50/80 dark:bg-gray-950/90'>
      <div className='container mx-auto px-2 max-w-6xl'>
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
          <div className="w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600 mx-auto rounded-full mb-16"></div>
          <p
            className='text-lg text-gray-700/90 dark:text-gray-400/90 max-w-2xl mx-auto leading-relaxed'
            data-aos='fade-up'
            data-aos-delay='100'
          >
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

        <h3 className='text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900 dark:text-white text-center' data-aos='fade-up'>
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

        <h3 className='text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900 dark:text-white text-center' data-aos='fade-up'>
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