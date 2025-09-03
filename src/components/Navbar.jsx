import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import MobileMenuButton from './MobileMenuButton';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Text from './LocalizedText';
import { IconHome, IconUser, IconCode, IconBriefcase2, IconMail } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 50) {
        setActiveLink('home');
        return;
      }

      const scrollPosition = window.scrollY + 150;

      for (const section of ['home', 'about', 'skills', 'experiences', 'contact']) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    { name: <Text>navbar.home</Text>, to: 'home', icon: <IconHome size={18} /> },
    { name: <Text>navbar.about</Text>, to: 'about', icon: <IconUser size={18} /> },
    { name: <Text>navbar.skills</Text>, to: 'skills', icon: <IconCode size={18} /> },
    { name: <Text>navbar.experiences</Text>, to: 'experiences', icon: <IconBriefcase2 size={18} /> },
    { name: <Text>navbar.contact</Text>, to: 'contact', icon: <IconMail size={18} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 w-[95%] max-w-4xl -translate-x-1/2 transform rounded-2xl transition-all duration-300 ${
        scrolled || isOpen
          ? 'border border-white/20 bg-white/80 py-2 shadow-xl backdrop-blur-md dark:border-gray-700/30 dark:bg-gray-900/80'
          : 'bg-transparent py-2'
      }`}
    >
      <div className='mx-auto w-full px-4 sm:px-6'>
        <div className='flex items-center justify-between'>
          {/* Logo - Left side */}
          <Link
            to='home'
            smooth
            duration={500}
            className='flex cursor-pointer items-center bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-2xl font-bold text-transparent dark:from-gray-400 dark:to-gray-100'
          >
            <span className='hidden md:inline'>
              <img src='/text-black.png' className='h-10 w-10 dark:invert' alt='' />
            </span>
          </Link>

          {/* Centered Navigation Links */}
          <div className='hidden flex-1 items-center justify-center lg:flex'>
            <div className='flex space-x-1 rounded-2xl border border-white/10 bg-white/10 p-1.5 backdrop-blur-sm dark:border-gray-700/20 dark:bg-gray-800/30'>
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => {
                    const el = document.getElementById(link.to);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`group relative flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeLink === link.to
                      ? 'bg-white text-gray-900 shadow-md dark:bg-gray-800 dark:text-white'
                      : 'text-gray-600 hover:bg-white/50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white'
                  }`}
                  style={{ zIndex: activeLink === link.to ? 10 : 'auto' }}
                >
                  {link.icon && <span className='mr-2 flex items-center justify-center'>{link.icon}</span>}
                  {link.name}

                  {activeLink === link.to && (
                    <motion.div
                      layoutId='active-pill'
                      className='absolute inset-0 rounded-xl bg-white shadow-sm dark:bg-gray-800'
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right-aligned Controls - Desktop */}
          <div className='ml-auto hidden items-center space-x-2 lg:flex'>
            <LanguageSwitcher />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <div className='flex items-center space-x-2 lg:hidden'>
            <LanguageSwitcher />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <MobileMenuButton isOpen={isOpen} toggleOpen={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 lg:hidden ${
            isOpen ? 'mt-4 max-h-60 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <div className='flex flex-col space-y-2 rounded-xl border border-white/20 bg-white/80 py-3 shadow-xl backdrop-blur-lg dark:border-gray-700/30 dark:bg-gray-800/90'>
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => {
                  const el = document.getElementById(link.to);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }}
                className={`group relative mx-3 flex items-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeLink === link.to
                    ? 'bg-white/70 text-gray-900 dark:bg-gray-700/80 dark:text-white'
                    : 'text-gray-600 hover:bg-white/50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-white'
                }`}
              >
                {link.icon && <span className='mr-2 flex items-center justify-center'>{link.icon}</span>}
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
