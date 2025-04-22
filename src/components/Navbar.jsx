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

      const sections = ['home', 'about', 'skills', 'contact'];
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
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <Link to='home' smooth duration={500} className='text-2xl font-bold text-primary cursor-pointer'>
            Portfolio
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
                className={`cursor-pointer hover:text-primary transition-all relative pb-1 ${
                  activeLink === link.to ? 'text-primary' : 'text-gray-800 dark:text-gray-200'
                }`}
                onSetActive={() => setActiveLink(link.to)}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ${
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
            <button onClick={() => setIsOpen(!isOpen)} className='ml-4 focus:outline-none'>
              <div className='relative w-6 h-5'>
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-2' : 'top-0'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'w-6 top-2'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-2' : 'top-4'
                  }`}
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
          <div className='flex flex-col space-y-2 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy
                smooth
                offset={-70}
                duration={500}
                className={`py-2 text-center cursor-pointer ${
                  activeLink === link.to
                    ? 'text-primary'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
