import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import MobileMenuButton from './MobileMenuButton';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Text from './LocalizedText';
import { Home, User, Code2, BriefcaseBusiness, Mail } from "lucide-react";
import { motion } from "framer-motion";

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
    { name: <Text>navbar.home</Text>, to: 'home', icon: <Home size={18} /> },
    { name: <Text>navbar.about</Text>, to: 'about', icon: <User size={18} /> },
    { name: <Text>navbar.skills</Text>, to: 'skills', icon: <Code2 size={18} /> },
    { name: <Text>navbar.experiences</Text>, to: 'experiences', icon: <BriefcaseBusiness size={18} /> },
    { name: <Text>navbar.contact</Text>, to: 'contact', icon: <Mail size={18} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'py-4 bg-gray-900/90 shadow-lg backdrop-blur-sm dark:border-gray-700'
        : 'py-5 bg-transparent'
      }`}>
      <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center'>
          {/* Logo - Left side */}
          <Link
            to='home'
            smooth
            duration={500}
            className='text-2xl font-bold bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100 text-transparent cursor-pointer'
          >
            <i className='bx bxl-unity mr-2'></i>
            <Text>hero.name</Text>
          </Link>

          {/* Centered Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => {
                    const el = document.getElementById(link.to);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-full group flex items-center justify-center ${activeLink === link.to
                    ? "text-black bg-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  style={{ zIndex: activeLink === link.to ? 10 : "auto" }}
                >
                  {link.icon && (
                    <span className="flex items-center justify-center mr-2">
                      {link.icon}
                    </span>
                  )}
                  {link.name}

                  {activeLink === link.to && (
                    <motion.div
                      layoutId="active-pill"
                      animate={{ boxShadow: "0 0 0.3rem rgba(255,255,255,0.8)" }}
                      className="absolute inset-0 bg-white rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right-aligned Controls - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 ml-auto">
            <LanguageSwitcher />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <div className='lg:hidden flex items-center space-x-3'>
            <LanguageSwitcher />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <MobileMenuButton isOpen={isOpen} toggleOpen={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="flex flex-col space-y-1 py-3 bg-gray-800/95 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => {
                  const el = document.getElementById(link.to);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsOpen(false);
                }}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg mx-3 group flex items-center ${activeLink === link.to
                  ? "text-black bg-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.icon && (
                  <span className="flex items-center justify-center mr-2">
                    {link.icon}
                  </span>
                )}
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