import React from 'react';
import { Link } from 'react-scroll';

const Timeline = ({ items }) => {
  return (
    <div className='relative mt-16 mb-8 overflow-hidden px-4'>
      {/* Timeline center line */}
      <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 dark:bg-blue-400'></div>
      {items.map((item, index) => (
        <div key={index} className='relative z-10 mb-16'>
          {/* Timeline circle indicator positioned on top of the line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 dark:bg-blue-400 text-white z-20'>
            {index + 1}
          </div>

          {/* Updated content box */}
          <div className={`w-1/2 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} data-aos='fade-up'>
            <div
              className={`relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 ${
                index % 2 === 0 ? 'origin-left ml-10' : 'origin-right mr-10'
              }`}
            >
              <h3 className='text-xl font-bold text-gray-800 dark:text-white'>{item.title}</h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm mb-2'>{item.period}</p>
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
      description: 'Worked as a Frontend Developer at ABC Company, building responsive web applications.',
    },
    {
      title: 'Senior Developer',
      period: '2023 - Present',
      description: 'Currently working as a Senior Developer at DEF Corp, leading a team of frontend developers.',
    },
  ];

  return (
    <section id='about' className='py-16 bg-gray-50 dark:bg-gray-900 min-h-screen'>
      <div className='container mx-auto px-4'>
        <h3 className='text-4xl font-semibold mb-12 text-gray-800 dark:text-white text-center' data-aos='fade-up'>
          About <span className='text-blue-600 dark:text-blue-400'>Me</span>
        </h3>

        <div className='flex flex-col md:flex-row md:space-x-12'>
          {/* Profile image container */}
          <div className='md:w-1/3 mb-8 md:mb-0 flex justify-center'>
            <div
              className='relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg'
              data-aos='zoom-in-up'
            >
              <img src='/src/assets/profile.jpg' alt='Profile Picture' className='w-full h-full object-cover' />
            </div>
          </div>

          {/* About content */}
          <div className='md:w-2/3'>
            <h3 className='text-2xl font-semibold mb-4 text-gray-800 dark:text-white'>Who am I?</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              I'm a passionate web developer with expertise in modern frontend technologies. I specialize in creating
              responsive, user-friendly web applications that provide an exceptional user experience.
            </p>
            <p className='text-gray-600 dark:text-gray-300 mb-6'>
              With over 3 years of experience in the industry, I've worked on a variety of projects ranging from small
              business websites to complex web applications. I'm constantly learning and staying up-to-date with the
              latest technologies and best practices.
            </p>

            {/* Personal info */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
              <div>
                <p className='mb-2 text-gray-600 dark:text-gray-300'>
                  <span className='font-semibold text-gray-800 dark:text-white'>Name:</span> Kirito
                </p>
                <p className='mb-2 text-gray-600 dark:text-gray-300'>
                  <span className='font-semibold text-gray-800 dark:text-white'>Email:</span> your.email@example.com
                </p>
              </div>
              <div>
                <p className='mb-2 text-gray-600 dark:text-gray-300'>
                  <span className='font-semibold text-gray-800 dark:text-white'>Location:</span> Your City, Country
                </p>
                <p className='mb-2 text-gray-600 dark:text-gray-300'>
                  <span className='font-semibold text-gray-800 dark:text-white'>Availability:</span> Available for
                  freelance
                </p>
              </div>
            </div>

            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer text-white py-2 px-6 rounded-lg transition-colors duration-300 shadow-md'
            >
              Contact Me
            </Link>
          </div>
        </div>

        <h3 className='text-4xl font-semibold mt-20 mb-12 text-gray-800 dark:text-white text-center' data-aos='zoom-in'>
          My <span className='text-blue-600 dark:text-blue-400'>Journey</span>
        </h3>

        {/* Mobile timeline - visible on small screens */}
        <div className='md:hidden space-y-8'>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className='relative pl-10 border-l-2 border-blue-500 dark:border-blue-400'
              data-aos='fade-up'
            >
              <div className='absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 dark:bg-blue-400 text-white -translate-x-1/2'>
                {index + 1}
              </div>
              <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-white'>{item.title}</h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm mb-2'>{item.period}</p>
                <p className='text-gray-700 dark:text-gray-300'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='hidden md:block'>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
};

export default About;
