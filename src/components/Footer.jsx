import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative'>
      {/* Background with gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900 to-gray-900'></div>

      {/* Main Footer Content with glassmorphism */}
      <div className='container mx-auto px-6 pt-24 pb-12 relative z-10'>
        <div className='backdrop-blur-xl bg-gray-900/70 rounded-2xl border border-gray-700/50 p-8 shadow-lg'>
          {/* Footer Links Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8 mb-8'>
            {/* Brand Column */}
            <div className='flex flex-col md:col-span-2 lg:col-span-2'>
              <Link
                to='home'
                smooth={true}
                duration={500}
                className='text-3xl font-semibold bg-gradient-to-r cursor-pointer from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 mb-4'
              >
                Kirito
              </Link>
              <p className='text-gray-400 text-sm leading-relaxed max-w-md mb-6'>
                Crafting exceptional digital experiences with modern web technologies. Focused on building scalable and
                performant applications.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className='flex flex-col'>
              <h3 className='text-white font-semibold text-lg mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                {['home', 'about', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      className='text-gray-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300 text-sm flex items-center gap-2 group'
                    >
                      <i className='fas fa-angle-right text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300'></i>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='border-t border-gray-700/50 pt-8 mt-8 text-center'>
            <p className='text-gray-500 text-sm'>
              &copy; {currentYear} <span className='text-cyan-300'>Kirito</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
