import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Text from '../components/LocalizedText';
import { IconMail } from '@tabler/icons-react';
import { Timeline } from '../components/ui/timeline';

const About = () => {
  const { t } = useTranslation();
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
  ];

  // Transform timelineItems to match new Timeline component format
  const timelineData = timelineItems.map((item) => ({
    title: item.period,
    content: (
      <div>
        <h3 className='mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50'>{item.title}</h3>
        <p className='text-md leading-relaxed tracking-wide text-gray-800 dark:text-gray-400 md:text-xl'>
          {item.description}
        </p>
      </div>
    ),
  }));

  return (
    <section id='about' className='min-h-screen bg-gray-100 py-20 pt-28 dark:bg-gray-900'>
      <div className='container mx-auto max-w-7xl px-3'>
        <div className='mb-16 text-center' data-aos='fade-up'>
          <h3 className='mb-4 text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-7xl'>
            <Text>about.about</Text>{' '}
            <span className='bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text py-6 text-transparent dark:from-gray-400 dark:to-gray-100'>
              <Text>general.me</Text>
            </span>
          </h3>
          <div className='mx-auto mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600'></div>
          <p className='mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300'>
            I approach every project with a blend of creativity and technical expertise, ensuring scalable and
            user-friendly solutions.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row lg:space-x-16'>
          {/* Modern profile image */}
          <div className='mb-12 flex justify-center lg:mb-0 lg:w-1/3' data-aos='fade-right'>
            <div className='group relative'>
              <div className='relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-gray-300/30 shadow-2xl dark:border-gray-700/30 lg:h-80 lg:w-80'>
                <img
                  src='/assets/profile.jpg'
                  alt='Profile Picture'
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent'></div>
              </div>
            </div>
          </div>

          {/* About content */}
          <div className='space-y-8 lg:w-2/3'>
            <div data-aos='fade-left'>
              <h3 className='mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Professional Profile
              </h3>

              <div className='space-y-6 leading-relaxed tracking-wide text-gray-700/90 dark:text-gray-300/90'>
                <p className='text-md mx-auto text-gray-800 dark:text-gray-400 md:text-xl'>
                  I'm a <span className='highlight-text'>Full Stack Developer</span> with expertise in modern JavaScript
                  frameworks, specializing in high-performance web applications with intuitive UX and scalable
                  architecture.
                </p>
                <p className='text-md mx-auto mb-12 text-gray-800 dark:text-gray-400 md:text-xl'>
                  With <span className='highlight-text'>5+ years</span> of industry experience, I've delivered solutions
                  ranging from startup MVPs to enterprise-grade systems, with a focus on clean code and cutting-edge
                  technologies.
                </p>
              </div>
            </div>

            {/* Modern info grid */}
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2' data-aos='fade-up'>
              <div className='rounded-xl border border-gray-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md dark:border-gray-800/50 dark:bg-gray-900/80'>
                <div className='space-y-4'>
                  <div>
                    <span className='text-sm font-medium text-gray-500/90 dark:text-gray-400/90'>Full Name</span>
                    <p className='text-md mx-auto text-gray-800 dark:text-gray-400 md:text-xl'>Socheath Ek Mao</p>
                  </div>
                  <div>
                    <span className='text-sm font-medium text-gray-500/90 dark:text-gray-400/90'>Phone</span>
                    <p className='text-md mx-auto text-gray-800 dark:text-gray-400 md:text-xl'>012 394 857</p>
                  </div>
                </div>
              </div>
              <div className='rounded-xl border border-gray-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md dark:border-gray-800/50 dark:bg-gray-900/80'>
                <div className='space-y-4'>
                  <div>
                    <span className='text-sm font-medium text-gray-500/90 dark:text-gray-400/90'>Location</span>
                    <p className='text-md mx-auto text-gray-800 dark:text-gray-400 md:text-xl'>Tokyo, Japan</p>
                  </div>
                  <div>
                    <span className='text-sm font-medium text-gray-500/90 dark:text-gray-400/90'>Availability</span>
                    <p className='text-md mx-auto text-gray-800 dark:text-gray-400 md:text-xl'>Open for contracts</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Modern contact button */}
            <div className='pt-6' data-aos='fade-up'>
              <Link
                to='contact'
                smooth
                duration={500}
                className='group relative inline-flex cursor-pointer items-center overflow-hidden rounded-xl border border-gray-700/50 bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:from-gray-700 dark:to-gray-800'
              >
                <span className='absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100' />
                <span className='relative z-10 text-lg font-medium'>Contact Me</span>
                <IconMail size={23} className='ml-3 transition-transform group-hover:translate-x-2' />
                <span className='absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-500 group-hover:left-[12.5%] group-hover:w-3/4' />
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-24' data-aos='fade-up'>
          <h3 className='mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl'>
            <Text>about.my-educational</Text>
          </h3>
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};

export default About;
