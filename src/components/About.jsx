import React from 'react';
import { Link } from 'react-scroll';

const Timeline = ({ items }) => {
  return (
    <div className='relative mt-16 mb-8 overflow-hidden px-4'>
      {/* Gradient timeline center line */}
      <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500'></div>

      {items.map((item, index) => (
        <div key={index} className='relative z-10 mb-16'>
          {/* Glowing circle indicator */}
          <div className='absolute left-1/2 transform -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white z-20 shadow-lg shadow-cyan-400/30'>
            {index + 1}
          </div>

          {/* Content box with gradient border */}
          <div className={`w-1/2 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} data-aos='fade-up'>
            <div
              className={`relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 ${
                index % 2 === 0 ? 'ml-10' : 'mr-10'
              } group hover:shadow-cyan-400/20 transition-all duration-300`}
            >
              {/* Gradient accent bar */}
              <div className='absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l-lg'></div>

              <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-1'>{item.title}</h3>
              <p className='text-cyan-500 dark:text-cyan-400 text-sm mb-3 font-medium'>{item.period}</p>
              <p className='text-gray-700 dark:text-gray-300'>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const timelineItems = [
    {
      title: 'Computer Science Degree',
      period: '2018 - 2022',
      description: 'Studied Computer Science at XYZ University, focusing on web development and UX design.',
    },
    {
      title: 'Frontend Developer',
      period: '2022 - 2023',
      description: 'Worked as a Frontend Developer at ABC Company, building responsive web applications with React.',
    },
    {
      title: 'Senior Full-Stack Developer',
      period: '2023 - Present',
      description: 'Leading development teams at DEF Corp, architecting scalable solutions across the stack.',
    },
  ];

  return (
    <section id='about' className='py-16 bg-gray-50 dark:bg-gray-900 min-h-screen'>
      <div className='container mx-auto px-4'>
        <h3 className='text-4xl font-bold mb-12 text-gray-800 dark:text-white text-center' data-aos='fade-up'>
          About <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Me</span>
        </h3>

        <div className='flex flex-col md:flex-row md:space-x-12'>
          {/* Profile image with gradient border */}
          <div className='md:w-1/3 mb-8 md:mb-0 flex justify-center' data-aos='fade-right'>
            <div className='relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full p-1 bg-gradient-to-br from-cyan-400 to-blue-500 shadow-xl'>
              <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800'>
                <img src='/src/assets/profile.jpg' alt='Profile Picture' className='w-full h-full object-cover' />
              </div>
            </div>
          </div>

          {/* About content */}
          <div className='md:w-2/3'>
            <h3 className='text-2xl font-bold mb-4 text-gray-800 dark:text-white'>Who am I?</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
              I'm a <span className='text-cyan-500 dark:text-cyan-400 font-medium'>Full Stack Developer</span> with
              expertise in modern JavaScript frameworks. I specialize in creating high-performance web applications with
              intuitive UX and scalable architecture.
            </p>
            <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
              With <span className='text-blue-500 dark:text-blue-400 font-medium'>5+ years</span> of industry
              experience, I've delivered solutions ranging from startup MVPs to enterprise-grade systems. Passionate
              about clean code and cutting-edge technologies.
            </p>

            {/* Personal info grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <div className='bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700'>
                <p className='mb-2'>
                  <span className='font-semibold text-gray-800 dark:text-white'>Name:</span>
                  <span className='text-gray-600 dark:text-gray-300 ml-2'>Kirito</span>
                </p>
                <p className='mb-2'>
                  <span className='font-semibold text-gray-800 dark:text-white'>Email:</span>
                  <span className='text-cyan-500 dark:text-cyan-400 ml-2'>hello@kirito.dev</span>
                </p>
              </div>
              <div className='bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700'>
                <p className='mb-2'>
                  <span className='font-semibold text-gray-800 dark:text-white'>Location:</span>
                  <span className='text-gray-600 dark:text-gray-300 ml-2'>Tokyo, Japan</span>
                </p>
                <p className='mb-2'>
                  <span className='font-semibold text-gray-800 dark:text-white'>Status:</span>
                  <span className='text-green-500 dark:text-green-400 ml-2'>Available for contracts</span>
                </p>
              </div>
            </div>

            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-400/30'
            >
              Contact Me
              <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
              </svg>
            </Link>
          </div>
        </div>

        <h3 className='text-4xl font-bold mt-20 mb-12 text-gray-800 dark:text-white text-center' data-aos='fade-right'>
          My <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Journey</span>
        </h3>

        {/* Mobile timeline */}
        <div className='md:hidden space-y-8'>
          {timelineItems.map((item, index) => (
            <div key={index} className='relative pl-10 border-l-2 border-cyan-400' data-aos='fade-up'>
              <div className='absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white -translate-x-1/2 shadow-sm'>
                {index + 1}
              </div>
              <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-white'>{item.title}</h3>
                <p className='text-cyan-500 dark:text-cyan-400 text-sm mb-2 font-medium'>{item.period}</p>
                <p className='text-gray-700 dark:text-gray-300'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop timeline */}
        <div className='hidden md:block'>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
};

export default About;
