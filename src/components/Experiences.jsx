import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Text from './LocalizedText';
import { Github, SquareArrowOutUpRight } from 'lucide-react';

const Experiences = () => {
  const { t, i18n } = useTranslation();
  const experiences = {
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
        languages: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
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
        languages: ['Next.js', 'Tailwind CSS', 'Stable Diffusion API'],
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
        languages: ['React', 'MQTT.js', 'ThreeJS', 'Socket.io'],
        isDeployed: true,
      },
      {
        name: 'Learning Management System',
        period: '1 Dec 23 - 15 Jan 24',
        purpose: 'Modern educational platform with interactive learning features',
        role: 'Full Stack Developer',
        responsibilities: [
          'Developed video streaming system',
          'Created interactive quiz module',
          'Implemented progress tracking',
        ],
        github: 'https://github.com/yourusername/edu-platform',
        deploy: null,
        languages: ['Next.js', 'PostgreSQL', 'Redis', 'TailwindCSS'],
        isDeployed: false,
      },
      {
        name: 'Health Tracking App',
        period: '15 Nov 23 - 30 Dec 23',
        purpose: 'Mobile-first health monitoring application with data visualization',
        role: 'Frontend Developer',
        responsibilities: ['Built responsive dashboard', 'Integrated health data APIs', 'Developed PWA features'],
        github: 'https://github.com/yourusername/health-tracker',
        deploy: 'https://health-tracker-demo.netlify.app',
        languages: ['React Native', 'D3.js', 'Firebase', 'Redux'],
        isDeployed: true,
      },
      {
        name: 'AI Code Review Assistant',
        period: '1 Oct 23 - 15 Nov 23',
        purpose: 'Automated code review tool powered by machine learning',
        role: 'ML Frontend Engineer',
        responsibilities: ['Created code diff viewer', 'Integrated OpenAI API', 'Built suggestion system'],
        github: 'https://github.com/yourusername/ai-code-reviewer',
        deploy: 'https://code-review-ai.demo.app',
        languages: ['TypeScript', 'OpenAI API', 'Monaco Editor', 'Express'],
        isDeployed: true,
      },
    ],
    company: [
      {
        name: 'CyberPay Fintech',
        period: '15 Feb 24 - Present',
        purpose: 'Payment processing platform for crypto transactions',
        role: 'Frontend Lead',
        responsibilities: ['Built dashboard interface', 'Optimized transaction flow', 'Implemented security features'],
        github: null,
        deploy: 'https://cyberpay.example.com',
        languages: ['TypeScript', 'React', 'Redux', 'Tailwind CSS'],
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
        languages: ['Vue.js', 'D3.js', 'SCSS'],
        isDeployed: false,
      },
    ],
  };

  const GithubIcon = () => <i className='bx bxl-github mt-1 mr-1'></i>;
  const ExternalLinkIcon = () => <i className='bx bx-laptop mt-1 mr-1'></i>;

  const ExperienceCard = ({ experience, index, category }) => {
    return (
      <div className='h-full relative group bg-gray-100/90 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/10 dark:hover:shadow-gray-600/10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(100,116,139,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        <div className='relative z-10 p-6 flex flex-col h-full'>
          {/* Header */}
          <div className='flex justify-between items-start mb-4'>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>{experience.name}</h3>
            <span className='select-none text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700/50 px-2 py-1 rounded'>
              {experience.period}
            </span>
          </div>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>{experience.purpose}</p>

          {/* Content wrapper */}
          <div className='flex-1 flex flex-col'>
            <div className='mb-4'>
              <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1'>Role:</h4>
              <p className='text-gray-600 dark:text-gray-400'>{experience.role}</p>
            </div>

            <div className='mb-4'>
              <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1'>Responsibilities:</h4>
              <ul className='list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1'>
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
              <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1'>Technologies:</h4>
              <div className='flex flex-wrap gap-2'>
                {experience.languages.map((lang, i) => (
                  <span
                    key={i}
                    className='text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded'
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
                  className='inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-3 py-1.5 rounded-lg'
                >
                  <Github className='w-4 h-4'/>
                  <span className='ml-2'>Code</span>
                </a>
              )}
              {experience.deploy && (
                <a
                  href={experience.deploy}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-3 py-1.5 rounded-lg'
                >
                  <SquareArrowOutUpRight className='w-4 h-4'/>
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
    <section id='experiences' className='py-20 bg-gray-50/80 dark:bg-gray-950/90'>
      <div className='relative z-10 max-w-7xl mx-auto px-2'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h3 className='text-5xl md:text-7xl font-black tracking-tight mb-4 text-gray-900 dark:text-white'>
            {i18n.language === 'kh' ? (
              <>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100'>
                  <Text>experience.experience</Text>
                </span>{' '}
                <Text>general.my</Text>
              </>
            ) : (
              <>
                <Text>general.my</Text>{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100'>
                  <Text>experience.experience</Text>
                </span>
              </>
            )}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600 mx-auto rounded-full mb-16"></div>

          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Showcasing my technical journey through{' '}
            <span className='font-medium text-gray-800 dark:text-gray-100'>innovative solutions</span> and{' '}
            <span className='font-medium text-gray-800 dark:text-gray-100'>cutting-edge</span> implementations
          </p>

          {/* Navigation links */}
          <div className='flex justify-center gap-6 mt-6'>
            <Link
              to='company-experiences'
              smooth={true}
              duration={500}
              offset={-100}
              className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg transition-colors cursor-pointer'
            >
              <Text>experience.company-experience</Text>
            </Link>
            <Link
              to='academy-experiences'
              smooth={true}
              duration={500}
              offset={-100}
              className='px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg transition-colors cursor-pointer'
            >
              <Text>experience.academy-experience</Text>
            </Link>
          </div>
        </div>

        {/* Company Experiences */}
        <div className='mb-20' id='company-experiences'>
          <div className='flex items-center mb-8' data-aos='fade-up' data-aos-duration='600'>
            <h3 className='text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mr-4'>
              <Text>experience.company-experience</Text>
            </h3>
            <div className='flex-1 mt-2 h-px bg-gradient-to-r from-gray-400/30 to-gray-400/0 dark:from-gray-600/30 dark:to-gray-600/0'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {experiences.company.map((experience, index) => (
              <div key={`company-${index}`} data-aos='fade-up' data-aos-delay={index * 100} data-aos-duration='600'>
                <ExperienceCard experience={experience} index={index} category='company' />
              </div>
            ))}
          </div>
        </div>

        {/* Academy Experiences */}
        <div id='academy-experiences'>
          <div className='flex items-center mb-8' data-aos='fade-up' data-aos-duration='600'>
            <h3 className='text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mr-4'>
              <Text>experience.academy-experience</Text>
            </h3>
            <div className='flex-1 mt-2 h-px bg-gradient-to-r from-gray-400/30 to-gray-400/0 dark:from-gray-600/30 dark:to-gray-600/0'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {experiences.academy.map((experience, index) => (
              <div key={`academy-${index}`} data-aos='fade-up' data-aos-delay={index * 100} data-aos-duration='600'>
                <ExperienceCard experience={experience} index={index} category='academy' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
