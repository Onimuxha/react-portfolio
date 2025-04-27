import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Projects = () => {
  // const isMounted = useRef(false);
  const projects = {
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

  const GithubIcon = () => <i className='fab fa-github w-4 h-4 mr-2' />;

  const ExternalLinkIcon = () => <i className='fas fa-laptop w-4 h-4 mr-2' />;

  const ProjectCard = ({ project, index, category }) => {
    return (
      <div className='h-full relative group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

        <div className='relative z-10 p-6 flex flex-col h-full'>
          {/* Header */}
          <div className='flex justify-between items-start mb-4'>
            <h3 className='text-xl font-semibold text-cyan-300'>{project.name}</h3>
            <span className='select-none text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded'>{project.period}</span>
          </div>
          <p className='text-gray-300 mb-4'>{project.purpose}</p>
          {/* Content wrapper - using flex-1 to allow content to grow */}
          <div className='flex-1 flex flex-col'>
            <div className='mb-4'>
              <h4 className='text-sm font-semibold text-blue-300 mb-1'>Role:</h4>
              <p className='text-gray-300'>{project.role}</p>
            </div>

            <div className='mb-4'>
              <h4 className='text-sm font-semibold text-emerald-300 mb-1'>Responsibilities:</h4>
              <ul className='list-disc list-inside text-gray-300 space-y-1'>
                {project.responsibilities.map((item, i) => (
                  <li key={i} className='text-sm'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer section - using mt-auto to push to bottom */}
          <div className='mt-auto pt-4'>
            <div className='mb-4'>
              <h4 className='text-sm font-semibold text-purple-300 mb-1'>Technologies:</h4>
              <div className='flex flex-wrap gap-2'>
                {project.languages.map((lang, i) => (
                  <span key={i} className='text-xs bg-gray-700/50 text-cyan-300 px-2 py-1 rounded'>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex gap-3'>
              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm border border-cyan-400/30 hover:border-cyan-300/50 px-3 py-1.5 rounded-lg'
                >
                  <GithubIcon />
                  Code
                </a>
              )}
              {project.deploy && (
                <a
                  href={project.deploy}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm border border-green-400/30 hover:border-green-300/50 px-3 py-1.5 rounded-lg'
                >
                  <ExternalLinkIcon />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id='projects' className='relative py-20 px-4 bg-gray-900 text-white overflow-hidden'>
      {/* Animated background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.1)_0%,_transparent_70%)] animate-pulse-slow'></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMTEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-semibold mb-4 text-gray-800 dark:text-white'>
            My{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Projects</span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Showcasing my technical journey through <span className='text-cyan-300'>innovative solutions</span> and{' '}
            <span className='text-blue-300'>cutting-edge</span> implementations
          </p>

          {/* Navigation links */}
          <div className='flex justify-center gap-6 mt-6'>
            <Link
              to='company-projects'
              smooth={true}
              duration={500}
              offset={-100}
              className='px-4 py-2 text-blue-400 hover:text-blue-300 border border-blue-400/30 hover:border-blue-300/50 rounded-lg transition-colors cursor-pointer'
            >
              Company Projects
            </Link>
            <Link
              to='academy-projects'
              smooth={true}
              duration={500}
              offset={-100}
              className='px-4 py-2 text-cyan-400 hover:text-cyan-300 border border-cyan-400/30 hover:border-cyan-300/50 rounded-lg transition-colors cursor-pointer'
            >
              Academy Projects
            </Link>
          </div>
        </div>

        {/* Company Projects */}
        <div className='mb-20' id='company-projects'>
          <div className='flex items-center mb-8' data-aos='fade-up' data-aos-duration='600'>
            <h3 className='text-2xl md:text-3xl font-semibold text-blue-400 mr-4'>Company Projects</h3>
            <div className='flex-1 h-px bg-gradient-to-r from-blue-400/30 to-blue-400/0'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.company.map((project, index) => (
              <div key={`company-${index}`} data-aos='fade-up' data-aos-delay={index * 100} data-aos-duration='600'>
                <ProjectCard project={project} index={index} category='company' />
              </div>
            ))}
          </div>
        </div>

        {/* Academy Projects */}
        <div id='academy-projects'>
          <div className='flex items-center mb-8' data-aos='fade-up' data-aos-duration='600'>
            <h3 className='text-2xl md:text-3xl font-semibold text-cyan-400 mr-4'>Academy Projects</h3>
            <div className='flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-cyan-400/0'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.academy.map((project, index) => (
              <div key={`academy-${index}`} data-aos='fade-up' data-aos-delay={index * 100} data-aos-duration='600'>
                <ProjectCard project={project} index={index} category='academy' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
