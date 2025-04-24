import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-8 relative overflow-hidden'>
      {/* Glowing gradient accent line */}
      <div className='absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_8px_rgba(34,211,238,0.5)]'></div>

      {/* Floating particles background */}
      {/* <div className='absolute inset-0 opacity-10'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full bg-cyan-400'
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}

      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          {/* Brand - Left */}
          <Link
            to='home'
            smooth={true}
            duration={500}
            className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 md:mb-0 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300'
          >
            Kirito
          </Link>

          {/* Social Icons - Center */}
          <div className='flex space-x-4 mb-4 md:mb-0'>
            {[
              {
                name: 'github',
                url: 'https://github.com',
                className: 'text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/70',
                iconClass: 'fab fa-github',
              },
              {
                name: 'linkedin-in',
                url: 'https://linkedin.com',
                className: 'text-blue-400 hover:text-white bg-blue-900/20 hover:bg-blue-600',
                iconClass: 'fab fa-linkedin-in',
              },
              {
                name: 'telegram',
                url: 'https://t.me',
                className: 'text-cyan-300 hover:text-white bg-cyan-900/20 hover:bg-cyan-600',
                iconClass: 'fab fa-telegram',
              },
              {
                name: 'instagram',
                url: 'https://instagram.com',
                // className: 'hover:text-white',
                iconClass: 'fab fa-instagram',
                gradient: 'bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
              },
            ].map((icon) => (
              <a
                key={icon.name}
                href={icon.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-700/30 transition-all duration-300 ${
                  icon.className
                } ${icon.gradient || ''}`}
              >
                <i className={`${icon.iconClass} text-lg`}></i>
              </a>
            ))}
          </div>

          {/* Copyright - Right */}
          <p className='text-gray-400 text-sm'>
            &copy; {currentYear} <span className='text-cyan-300'>Kirito</span>. All rights reserved.
          </p>
        </div>

        {/* Footer navigation */}
        {/* <div className='mt-6 flex flex-wrap justify-center gap-4 md:gap-8'>
          {['home', 'about', 'skills', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className='text-gray-400 hover:text-cyan-300 capitalize transition-colors duration-300 text-sm'
            >
              {item}
            </Link>
          ))}
        </div> */}
      </div>

      {/* Back-to-top button */}
      <Link
        to='home'
        smooth={true}
        duration={500}
        className='fixed cursor-pointer bottom-14 right-2 w-9 h-9 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center transition-all z-50 group'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
        </svg>
      </Link>

      {/* <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style> */}
    </footer>
  );
};

export default Footer;
