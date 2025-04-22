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
    <div className='mb-6 group' data-aos='fade-up'>
      <div className='flex justify-between mb-2'>
        <span className='font-semibold group-hover:text-primary transition-colors'>
          {skill}
        </span>
        <span ref={percentageRef} className='font-semibold text-primary'>
          0%
        </span>
      </div>
      <div className='w-full bg-gray-700 dark:bg-gray-700 rounded-full h-3 overflow-hidden'>
        <div
          ref={progressRef}
          className='h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out'
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description }) => {
  return (
    <div
      className='p-6 rounded-xl shadow-md backdrop-blur-sm cursor-pointer border border-gray-300/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-primary/20 group bg-transparent'
      data-aos='zoom-in'
    >
      <div className='mb-4 text-primary text-4xl flex justify-center group-hover:scale-110 transition-transform'>
        <i className={icon}></i>
      </div>
      <h3 className='text-xl font-semibold mb-2 text-center text-white group-hover:text-primary transition-colors'>
        {title}
      </h3>
      <p className='text-gray-300 text-center'>{description}</p>
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
      description: 'Building modern and scalable UI components',
    },
    {
      icon: 'fab fa-js',
      title: 'JavaScript',
      description: 'Creating interactive and dynamic web applications',
    },
    {
      icon: 'fab fa-css3-alt',
      title: 'Tailwind CSS',
      description: 'Crafting responsive and beautiful designs',
    },
    {
      icon: 'fab fa-node',
      title: 'Node.js',
      description: 'Developing fast and scalable backend services',
    },
  ];

  return (
    <section id='skills' className='py-20 rounded-xl shadow-md backdrop-blur-sm bg-transparent'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16'>
          <h3 className='text-4xl font-semibold mb-7' data-aos='fade-up'>
            My <span className='text-primary'>Skills</span>
          </h3>
          <p
            className='text-xl max-w-2xl mx-auto'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            Here are my technical skills and the technologies I work with regularly
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-16'>
          {skillsData.map((skill, index) => (
            <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} data-aos-delay={index * 100} />
          ))}
        </div>

        <h3 className='text-2xl font-semibold mb-8 text-center' data-aos='fade-up'>
          Technologies I <span className='text-primary'>Work </span>With
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
