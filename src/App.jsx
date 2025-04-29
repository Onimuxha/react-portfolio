import React, { useEffect, useState, useRef } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ParticleBackground from './components/ParticleBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertOpacity, setAlertOpacity] = useState(0);
  const alertTimeoutRef = useRef(null);

  useEffect(() => {
    // Initialize AOS and handle theme
    AOS.init({ duration: 800, once: false, mirror: true, offset: 100 });

    const savedTheme =
      localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;

    // Handle right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
      showAlertWithAnimation();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('scroll', AOS.refresh);
      if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [theme]);

  // Smooth alert animation
  const showAlertWithAnimation = () => {
    // Clear any existing timeouts
    if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);

    // Show alert and fade in
    setAlertVisible(true);
    setTimeout(() => setAlertOpacity(1), 50);

    // Schedule fade out
    alertTimeoutRef.current = setTimeout(() => {
      setAlertOpacity(0);
      setTimeout(() => setAlertVisible(false), 500);
    }, 3500);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div className='relative min-h-screen'>
      {/* Alert with fade-down animation */}
      {alertVisible && (
        <div
          className='fixed top-20 right-4 z-50'
          style={{
            opacity: alertOpacity,
            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
            transform: `translateY(${alertOpacity === 1 ? '0' : '-20px'})`,
          }}
        >
          <div
            className='backdrop-blur-xl bg-gray-900/70 rounded-xl text-cyan-50 px-4 py-3 shadow-lg w-64 relative group'
            style={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.15)',
              background: 'linear-gradient(135deg, rgba(21, 94, 117, 0.15) 0%, rgba(8, 51, 68, 0.25) 100%)',
            }}
          >
            <div className='flex items-center gap-3'>
              <i className='fas fa-circle-info text-cyan-300/80'></i>
              <div className='flex flex-col'>
                <p className='font-semibold text-emerald-300 flex items-center'>Right-click disabled</p>
                <p className='text-sm text-cyan-200/80'>Content protection is active.</p>
              </div>
            </div>
            {/* Animated border */}
            <div className='absolute inset-0 rounded-xl border border-cyan-400/20 group-hover:border-cyan-400/50 animate-pulse pointer-events-none'></div>
          </div>
        </div>
      )}

      <ParticleBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <Element key={section} name={section}>
            {section === 'home' ? (
              <Hero />
            ) : section === 'about' ? (
              <About />
            ) : section === 'skills' ? (
              <Skills />
            ) : section === 'projects' ? (
              <Projects />
            ) : (
              <Contact />
            )}
          </Element>
        ))}
      </main>

      {/* Add ScrollToTopButton component */}
      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default App;
