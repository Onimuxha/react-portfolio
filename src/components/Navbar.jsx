import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 300;

      if (window.scrollY < 100) {
        setActiveLink('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveLink(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', icon: 'fas fa-home' },
    { name: 'About', to: 'about', icon: 'fas fa-user' },
    { name: 'Skills', to: 'skills', icon: 'fas fa-code' },
    { name: 'Projects', to: 'projects', icon: 'fas fa-project-diagram' },
    { name: 'Contact', to: 'contact', icon: 'fas fa-envelope' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-gray-900/90 shadow-lg backdrop-blur-sm dark:border-gray-700' : 'py-5 bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <Link
            to='home'
            smooth
            duration={500}
            className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer'
          >
            <i className='fab fa-maxcdn w-4 h-4 mr-3' />
            Kirito
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy
                smooth
                offset={-70}
                duration={500}
                className={`cursor-pointer transition-all relative pb-1 ${
                  activeLink === link.to
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-300'
                }`}
                onSetActive={() => setActiveLink(link.to)}
              >
                <i className={`${link.icon} mr-2`} />
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform transition-all duration-300 ${
                    activeLink === link.to ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </Link>
            ))}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ml-4 flex items-center justify-center w-10 h-10
                backdrop-blur-sm border
                bg-gray-800/80
                border-gray-600/50
                rounded-lg focus:outline-none
                hover:shadow-lg hover:shadow-cyan-400/10
                transition-all duration-300
                group
              `}
              aria-label='Toggle menu'
            >
              <div
                className={`
                  relative w-6 h-5 flex flex-col justify-center items-center
                  ${isOpen ? 'rotate-180' : ''}
                  transition-all duration-500
                `}
              >
                <span
                  className={`
                    absolute h-0.5
                    bg-cyan-500 dark:bg-cyan-400
                    group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300
                    transition-all duration-300
                    ${isOpen ? 'w-6 rotate-45 top-2' : 'w-4 -translate-y-2 -translate-x-1'}
                  `}
                ></span>
                <span
                  className={`
                    absolute h-0.5
                    bg-cyan-500 dark:bg-cyan-400
                    group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300
                    transition-all duration-300
                    ${isOpen ? 'w-0' : 'w-6'}
                  `}
                ></span>
                <span
                  className={`
                    absolute h-0.5
                    bg-cyan-500 dark:bg-cyan-400
                    group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300
                    transition-all duration-300
                    ${isOpen ? 'w-6 -rotate-45 top-2' : 'w-4 translate-y-2 translate-x-1'}
                  `}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className='flex flex-col space-y-2 py-3 px-2 bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy
                smooth
                offset={-70}
                duration={500}
                className={`py-2 px-4 mx-2 text-center cursor-pointer rounded-md transition-colors ${
                  activeLink === link.to
                    ? 'bg-gradient-to-r from-cyan-400/10 to-blue-500/10 text-cyan-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
                onClick={() => setIsOpen(false)}
                onSetActive={() => setActiveLink(link.to)}
              >
                <i className={`${link.icon} mr-2`} />
                {link.name}
                {activeLink === link.to && (
                  <span className='block mx-auto w-1/4 h-0.5 mt-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
