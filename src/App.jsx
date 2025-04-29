import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Alert from './components/Alert';
import ParticleBackground from './components/ParticleBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true, offset: 100 });

    const savedTheme =
      localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;

    // Handle right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 4000);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div className='relative min-h-screen'>
      {alertVisible && <Alert message='Right-click disabled' subtitle='Content protection is active.' />}
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

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
