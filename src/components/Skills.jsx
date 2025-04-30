import React, { useEffect, useRef } from 'react';

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
              // Animate percentage count
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
      className='mb-8 group p-6 rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300'
      data-aos='fade-up'
    >
      <div className='flex items-center gap-4 mb-4'>
        <div className='text-3xl flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500'>
          <i className={icon}></i>
        </div>
        <div className='flex-grow'>
          <div className='flex justify-between items-center mb-1'>
            <h3 className='font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors'>{skill}</h3>
            <span ref={percentageRef} className='font-medium text-cyan-400 dark:text-cyan-300'>
              0%
            </span>
          </div>
          <p className='text-sm text-gray-400 mb-3'>{description}</p>
        </div>
      </div>
      <div className='w-full bg-gray-800/50 dark:bg-gray-700/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm'>
        <div
          ref={progressRef}
          className='h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(34,211,238,0.4)]'
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description }) => {
  return (
    <div
      className='h-full p-6 rounded-xl border border-gray-700/50 bg-gray-800/30 dark:bg-gray-800/20 backdrop-blur-sm cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/10 hover:border-cyan-400/30 group'
      data-aos='zoom-in'
    >
      <div className='flex flex-col h-full'>
        <div className='mb-5 text-4xl flex justify-center group-hover:scale-110 transition-transform'>
          <i className={`${icon} text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500`}></i>
        </div>
        <h3 className='text-xl font-semibold mb-3 text-center text-white group-hover:text-cyan-400 transition-colors'>
          {title}
        </h3>
        <p className='text-gray-400 text-center text-sm leading-relaxed flex-grow'>{description}</p>
      </div>
    </div>
  );
};

const Skills = () => {
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
    }
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
    <section id='skills' className='py-20 bg-gray-900/50 dark:bg-gray-900/80'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16'>
          <h3 className='text-4xl font-semibold mb-12 text-gray-800 dark:text-white text-center' data-aos='fade-right'>
            My Technical{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Skills</span>
          </h3>
          <p
            className='text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed'
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

        <h3
          className='text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-1'
          data-aos='fade-up'
        >
          Core Technologies
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
          className='text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-1'
          data-aos='fade-up'
        >
          My Framework & Tools
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
