import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Text from '../components/LocalizedText';
import { IconMail } from '@tabler/icons-react';

const Timeline = ({ items }) => {
  return (
    <div className='relative mt-24 mb-16 px-4 max-w-6xl mx-auto'>
      {/* Modern timeline track with glow effect */}
      <div className='absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-300/70 to-transparent dark:via-gray-600/70 transform -translate-x-1/2'>
        <div className='absolute inset-0 bg-white/20 dark:bg-white/10 blur-sm'></div>
      </div>

      {items.map((item, index) => (
        <div key={index} className='relative z-10 mb-20 group'>
          {/* Sleek circular indicator with pulse effect */}
          <div className='absolute left-1/2 transform -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300/80 dark:border-gray-600/80 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 z-20 transition-all duration-500 group-hover:scale-110 group-hover:border-gray-900 dark:group-hover:border-gray-200 shadow-md group-hover:shadow-lg'>
            <span className='font-medium text-sm group-hover:scale-110 transition-transform'>{index + 1}</span>
            <div className='absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-300/50 dark:group-hover:border-gray-500/50 animate-pulse'></div>
          </div>

          {/* Modern content card */}
          <div
            className={`w-full lg:w-[50%] ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} transition-all duration-500`}
          >
            <div
              className={`relative bg-white/95 dark:bg-gray-900/95 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm ${
                index % 2 === 0 ? 'lg:ml-14' : 'lg:mr-14'
              } group-hover:shadow-xl group-hover:border-gray-300/70 dark:group-hover:border-gray-700/70 transition-all duration-300`}
            >
              {/* Glow indicator */}
              <div
                className={`absolute top-6 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-gray-400/30 via-gray-500 to-gray-400/30 dark:from-gray-500/30 dark:via-gray-600 dark:to-gray-500/30 ${
                  index % 2 === 0 ? '-left-1' : '-right-1'
                }`}
              ></div>

              <div className='space-y-4'>
                <div>
                  <h3 className='text-2xl font-semibold text-gray-900 dark:text-gray-50 tracking-tight'>
                    {item.title}
                  </h3>
                  <p className='text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400 mt-1 font-mono'>
                    {item.period}
                  </p>
                </div>
                <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700'></div>
                <p className='text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400 leading-relaxed tracking-wide'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

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

  return (
    <section id='about' className='py-20 bg-zinc-100 dark:bg-slate-900 min-h-screen'>
      <div className='container mx-auto px-3 max-w-7xl'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h3 className='text-5xl md:text-7xl font-black tracking-tight mb-4 text-gray-900 dark:text-white'>
            <Text>about.about</Text>{' '}
            <span className='text-transparent py-6 bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100'>
              <Text>general.me</Text>
            </span>
          </h3>
          <div className='w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600 mx-auto rounded-full mb-10'></div>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            I approach every project with a blend of creativity and technical expertise, ensuring scalable and user-friendly solutions.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row lg:space-x-16'>
          {/* Modern profile image */}
          <div className='lg:w-1/3 mb-12 lg:mb-0 flex justify-center' data-aos='fade-right'>
            <div className='relative group'>
              <div className='w-64 h-64 lg:w-80 lg:h-80 overflow-hidden relative rounded-2xl border-2 border-gray-300/30 dark:border-gray-700/30 shadow-2xl'>
                <img
                  src='/assets/profile.jpg'
                  alt='Profile Picture'
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent'></div>
              </div>
            </div>
          </div>

          {/* About content */}
          <div className='lg:w-2/3 space-y-8'>
            <div data-aos='fade-left'>
              <h3 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6'>
                Professional Profile
              </h3>

              <div className='space-y-6 text-gray-700/90 dark:text-gray-300/90 leading-relaxed tracking-wide'>
                <p className='text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400'>
                  I'm a <span className='font-semibold text-gray-900 dark:text-white'>Full Stack Developer</span> with
                  expertise in modern JavaScript frameworks, specializing in high-performance web applications with
                  intuitive UX and scalable architecture.
                </p>
                <p className='text-md md:text-xl mx-auto mb-12 text-gray-800 dark:text-gray-400'>
                  With <span className='font-semibold text-gray-900 dark:text-white'>5+ years</span> of industry
                  experience, I've delivered solutions ranging from startup MVPs to enterprise-grade systems, with a
                  focus on clean code and cutting-edge technologies.
                </p>
              </div>
            </div>

            {/* Modern info grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5' data-aos='fade-up'>
              <div className='bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm backdrop-blur-sm hover:shadow-md transition-all'>
                <div className='space-y-4'>
                  <div>
                    <span className='text-sm font-medium text-gray-500/90 dark:text-gray-400/90'>Full Name</span>
                    <p className='text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400'>Socheath Ek Mao</p>
                  </div>
                  <div>
                    <span className='text-sm font-medium text-gray-500/90 dark:text-gray-400/90'>Phone</span>
                    <p className='text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400'>012 394 857</p>
                  </div>
                </div>
              </div>
              <div className='bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm backdrop-blur-sm hover:shadow-md transition-all'>
                <div className='space-y-4'>
                  <div>
                    <span className='text-sm font-medium text-gray-500/90 dark:text-gray-400/90'>Location</span>
                    <p className='text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400'>Tokyo, Japan</p>
                  </div>
                  <div>
                    <span className='text-sm font-medium text-gray-500/90 dark:text-gray-400/90'>Availability</span>
                    <p className='text-md md:text-xl mx-auto text-gray-800 dark:text-gray-400'>Open for contracts</p>
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
                className='relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white border border-gray-700/50 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
              >
                <span className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition' />
                <span className='relative z-10 font-medium text-lg'>Contact Me</span>
                <IconMail className='ml-3 w-5 h-5 transition-transform group-hover:translate-x-2' />
                <span className='absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-500 group-hover:w-3/4 group-hover:left-[12.5%]' />
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-24' data-aos='fade-up'>
          <h3 className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white'>
            <Text>about.my-educational</Text>
          </h3>

          {/* Mobile timeline */}
          <div className='md:hidden space-y-10'>
            {timelineItems.map((item, index) => (
              <div key={index} className='relative pl-12' data-aos='fade-up'>
                <div
                  className='absolute left-[1.125rem] top-10 h-[calc(100%-4rem)] w-0.5 bg-gray-300/80 dark:bg-gray-700/80'
                  style={{ transform: 'translateX(-50%)' }}
                >
                  <div className='absolute inset-0 bg-white/20 dark:bg-white/10 blur-sm'></div>
                </div>
                <div
                  className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300/80 dark:border-gray-600/80 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 z-20 shadow-md'
                  style={{ left: '1.125rem', transform: 'translateX(-50%)' }}
                >
                  <span className='font-medium text-sm'>{index + 1}</span>
                </div>

                <div className='ml-8 bg-white/95 dark:bg-gray-900/95 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm'>
                  <div className='absolute -left-2 top-8 h-[calc(100%-4rem)] w-0.5 bg-gray-400/50 dark:bg-gray-600/50'></div>
                  <div className='space-y-4'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-gray-50'>{item.title}</h3>
                    <p className='text-sm text-gray-500/90 dark:text-gray-400/90 font-mono'>{item.period}</p>
                    <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700'></div>
                    <p className='text-gray-700/90 dark:text-gray-300/90'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop timeline */}
          <div className='hidden md:block'>
            <Timeline items={timelineItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
