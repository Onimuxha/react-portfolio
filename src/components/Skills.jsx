import React, { useEffect, useRef } from 'react';

const SkillBar = ({ skill, percentage }) => {
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
    <div className='mb-8 group' data-aos='fade-up'>
      <div className='flex justify-between mb-3'>
        <span className='font-medium text-gray-300 dark:text-gray-200 group-hover:text-cyan-400 transition-colors'>
          {skill}
        </span>
        <span ref={percentageRef} className='font-medium text-cyan-400 dark:text-cyan-300'>
          0%
        </span>
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
      className='p-6 rounded-xl border border-gray-700/50 bg-gray-800/30 dark:bg-gray-800/20 backdrop-blur-sm cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/10 hover:border-cyan-400/30 group'
      data-aos='zoom-in'
    >
      <div className='mb-5 text-4xl flex justify-center group-hover:scale-110 transition-transform'>
        <i className={`${icon} text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500`}></i>
      </div>
      <h3 className='text-xl font-semibold mb-3 text-center text-white group-hover:text-cyan-400 transition-colors'>
        {title}
      </h3>
      <p className='text-gray-400 text-center text-sm leading-relaxed'>{description}</p>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { skill: 'HTML/CSS', percentage: 95 },
    { skill: 'JavaScript', percentage: 90 },
    { skill: 'React.js', percentage: 85 },
    { skill: 'Node.js', percentage: 75 },
    { skill: 'Tailwind CSS', percentage: 90 },
    { skill: 'UI/UX Design', percentage: 80 },
  ];

  const cardData = [
    {
      icon: 'fab fa-react',
      title: 'React.js',
      description: 'Building modern and performant UI components with hooks and context API',
    },
    {
      icon: 'fab fa-js',
      title: 'JavaScript',
      description: 'ES6+ syntax, async programming, and functional patterns',
    },
    {
      icon: 'fas fa-code',
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
    },
    {
      icon: 'fab fa-node-js',
      title: 'Node.js',
      description: 'Building scalable server-side applications and APIs',
    },
  ];

  return (
    <section id='skills' className='py-20 bg-gray-900/50 dark:bg-gray-900/80'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16'>
          <h3
            className='text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'
            data-aos='fade-up'
          >
            Technical Skills
          </h3>
          <p
            className='text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            My proficiency across the full development stack and design disciplines
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 px-4 md:px-8'>
          {skillsData.map((skill, index) => (
            <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} data-aos-delay={index * 100} />
          ))}
        </div>

        <h3
          className='text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'
          data-aos='fade-up'
        >
          Core Technologies
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cardData.map((card, index) => (
            <SkillCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              data-aos-delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
