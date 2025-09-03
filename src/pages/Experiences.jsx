import { useTranslation } from 'react-i18next';
import Text from '../components/LocalizedText';
import  { IconBrandGithub, IconArrowUpRight } from '@tabler/icons-react';
import { Figma, GitHubDark, NextJs, PostgreSQL, ShadcnUI, TailwindCSS, TypeScript, ViteJS } from 'developer-icons';

const Experiences = () => {
  const { t, i18n } = useTranslation();
  const experiences = {
    company: [
      {
        name: 'CyberPay Fintech',
        period: '15 Feb 24 - Present',
        purpose: 'Payment processing platform for crypto transactions',
        role: 'Frontend Lead',
        responsibilities: ['Built dashboard interface', 'Optimized transaction flow', 'Implemented security features'],
        github: null,
        deploy: 'https://cyberpay.example.com',
        languages: [
          <GitHubDark className='h-7 w-7 dark:invert' />,
          <PostgreSQL className='h-7 w-7' />,
          <Figma className='h-7 w-7' />,
          <TailwindCSS className='h-7 w-7' />,
        ],
        isDeployed: true,
      },
      {
        name: 'NeonVPN Dashboard',
        period: '15 Mar 24 - 30 Apr 24',
        purpose: 'Management console for VPN service with data visualization tools ',
        role: 'UI Developer',
        responsibilities: [
          'Created data visualization components',
          'Implemented dark/light mode',
          'Designed user onboarding flow',
        ],
        github: 'https://github.com/company/neonvpn',
        deploy: null,
        languages: [
          <GitHubDark className='h-7 w-7 dark:invert' />,
          <PostgreSQL className='h-7 w-7' />,
          <Figma className='h-7 w-7' />,
          <TailwindCSS className='h-7 w-7' />,
        ],
        isDeployed: false,
      },
    ],

    personal: [
      {
        name: 'PeakSlaok',
        period: '15 Feb 24 - Present',
        purpose: 'To write and generate quote',
        role: 'UX/UI Design',
        responsibilities: ['Built dashboard interface', 'Optimized transaction flow', 'Implemented security features'],
        github: null,
        deploy: 'https://aboutyoureadmore.online/',
        languages: [
          <NextJs className='h-7 w-7' />,
          <TypeScript className='h-7 w-7' />,
          <ViteJS className='h-7 w-7' />,
          <ShadcnUI className='h-7 w-7' />,
          <TailwindCSS className='h-7 w-7' />,
        ],
        isDeployed: true,
      },
    ],

    academy: [
      {
        name: 'Neon Chat App',
        period: '15 Mar 24 - 30 Apr 24',
        purpose: 'Real-time messaging platform with end-to-end encryption',
        role: 'Full-stack Developer',
        responsibilities: [
          'Implemented WebSocket connections',
          'Designed UI/UX with dark theme',
          'Created authentication system',
        ],
        github: 'https://github.com/yourusername/neon-chat',
        deploy: 'https://neon-chat-demo.com',
        languages: [
          <GitHubDark className='h-7 w-7 dark:invert' />,
          <PostgreSQL className='h-7 w-7' />,
          <Figma className='h-7 w-7' />,
          <TailwindCSS className='h-7 w-7' />,
        ],
        isDeployed: true,
      },
      {
        name: 'AI Image Generator',
        period: '15 Mar 24 - 30 Apr 24',
        purpose: 'Stable Diffusion web interface with custom models',
        role: 'Frontend Developer',
        responsibilities: ['Built responsive UI', 'Integrated API endpoints', 'Optimized image rendering'],
        github: 'https://github.com/yourusername/ai-image-gen',
        deploy: null,
        languages: [
          <GitHubDark className='h-7 w-7 dark:invert' />,
          <PostgreSQL className='h-7 w-7' />,
          <Figma className='h-7 w-7' />,
          <TailwindCSS className='h-7 w-7' />,
        ],
        isDeployed: false,
      },
      {
        name: 'Smart Home IoT Dashboard',
        period: '1 Jan 24 - 28 Feb 24',
        purpose: 'Centralized control system for IoT devices with real-time monitoring',
        role: 'IoT Frontend Developer',
        responsibilities: [
          'Built real-time device monitoring dashboard',
          'Implemented MQTT protocol integration',
          'Created custom IoT device widgets',
        ],
        github: 'https://github.com/yourusername/smart-home-dashboard',
        deploy: 'https://smart-home-demo.vercel.app',
        languages: [
          <GitHubDark className='h-7 w-7 dark:invert' />,
          <PostgreSQL className='h-7 w-7' />,
          <Figma className='h-7 w-7' />,
          <TailwindCSS className='h-7 w-7' />,
        ],
        isDeployed: true,
      },
    ],
  };

  const ExperienceCard = ({ experience, index, category }) => {
    return (
      <div className='group relative h-full transform overflow-hidden rounded-xl border border-gray-200 bg-gray-100/90 backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.03] hover:border-gray-300 hover:shadow-lg hover:shadow-gray-400/10 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-gray-500 dark:hover:shadow-gray-600/10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(100,116,139,0.1)_0%,_transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
        <div className='relative z-10 flex h-full flex-col p-6'>
          {/* Header */}
          <div className='mb-4 flex items-start justify-between'>
            <h3 className='text-md font-semibold text-gray-800 dark:text-gray-200 md:text-xl'>{experience.name}</h3>
            <span className='select-none rounded-md bg-gray-200 px-2 py-1 text-sm text-gray-600 dark:bg-gray-700/50 dark:text-gray-400'>
              {experience.period}
            </span>
          </div>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>{experience.purpose}</p>

          {/* Content wrapper */}
          <div className='flex flex-1 flex-col'>
            <div className='mb-4'>
              <h4 className='text-md mx-auto text-gray-800 dark:text-gray-200 md:text-xl'>Role:</h4>
              <p className='text-gray-600 dark:text-gray-400'>{experience.role}</p>
            </div>

            <div className='mb-4'>
              <h4 className='text-md mx-auto mb-2 text-gray-800 dark:text-gray-200 md:text-xl'>Responsibilities:</h4>
              <ul className='list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400'>
                {experience.responsibilities.map((item, i) => (
                  <li key={i} className='text-sm'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer section */}
          <div className='mt-auto pt-4'>
            <div className='mb-4'>
              <h4 className='text-md mx-auto mb-2 text-gray-800 dark:text-gray-200 md:text-xl'>Technologies:</h4>
              <div className='flex flex-wrap gap-2'>
                {experience.languages.map((lang, i) => (
                  <span
                    key={i}
                    className='rounded bg-gray-200 p-2 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex gap-3'>
              {experience.github && (
                <a
                  href={experience.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-gray-100'
                >
                  <IconBrandGithub className='h-4 w-4' />
                  <span className='ml-2'>Code</span>
                </a>
              )}
              {experience.deploy && (
                <a
                  href={experience.deploy}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-gray-100'
                >
                  <IconArrowUpRight className='h-4 w-4' />
                  <span className='ml-2'>Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id='experiences' className='bg-zinc-100 py-20 dark:bg-slate-900'>
      <div className='relative z-10 mx-auto max-w-7xl px-3'>
        <div className='mb-16 text-center' data-aos='fade-up'>
          <h3 className='mb-4 text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-7xl'>
            {i18n.language === 'kh' ? (
              <>
                <span className='bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent dark:from-gray-400 dark:to-gray-100'>
                  <Text>experience.experience</Text>
                </span>{' '}
                <Text>general.my</Text>
              </>
            ) : (
              <>
                <Text>general.my</Text>{' '}
                <span className='bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent dark:from-gray-400 dark:to-gray-100'>
                  <Text>experience.experience</Text>
                </span>
              </>
            )}
          </h3>
          <div className='mx-auto mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600'></div>
          <p className='text-md mx-auto max-w-2xl text-gray-800 dark:text-gray-400 md:text-xl'>
            Showcasing my technical journey through <span className='highlight-text'>innovative solutions</span> and{' '}
            <span className='highlight-text'>cutting-edge</span> implementations
          </p>
        </div>

        {/* Company Experiences */}
        {/* Company Experience */}
        <section>
          <h3 className='sticky top-16 z-20 border-b border-gray-200 bg-white/80 py-3 text-2xl font-semibold text-gray-800 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 md:text-3xl'>
            <Text>experience.company-experience</Text>
          </h3>

          <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {experiences.company.map((experience, index) => (
              <div key={`company-${index}`} data-aos='fade-up' data-aos-delay={index * 100} data-aos-duration='600'>
                <ExperienceCard experience={experience} index={index} category='company' />
              </div>
            ))}
          </div>
        </section>

        {/* Personal Experience */}
        <section className='mt-20'>
          <h3 className='sticky top-16 z-20 border-b border-gray-200 bg-white/80 py-3 text-2xl font-semibold text-gray-800 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 md:text-3xl'>
            <Text>experience.personal-experience</Text>
          </h3>

          <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {experiences.personal.map((experience, index) => (
              <div key={`personal-${index}`} data-aos='fade-up' data-aos-delay={index * 100} data-aos-duration='600'>
                <ExperienceCard experience={experience} index={index} category='personal' />
              </div>
            ))}
          </div>
        </section>

        {/* Academy Experience */}
        <section className='mt-20'>
          <h3 className='sticky top-16 z-20 border-b border-gray-200 bg-white/80 py-3 text-2xl font-semibold text-gray-800 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 md:text-3xl'>
            <Text>experience.academy-experience</Text>
          </h3>
          <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {experiences.academy.map((experience, index) => (
              <div key={`academy-${index}`} data-aos='fade-up' data-aos-delay={index * 100} data-aos-duration='600'>
                <ExperienceCard experience={experience} index={index} category='academy' />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experiences;
