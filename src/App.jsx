import React, { useEffect, useState, useRef } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Alert from './components/Alert';
import DarkVeil from './components/DarkVeil';
import AOS from 'aos';
import Text from './components/LocalizedText';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [alertMessage, setAlertMessage] = useState(null);
  const alertTimeoutRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
      debounceDelay: 50,  // Added for better scroll performance
      throttleDelay: 99    // Added for better scroll performance
    });

    const savedTheme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;

    const handleContextMenu = (e) => {
      e.preventDefault();
      showAlert(<Text>alert.right-click</Text>, <Text>alert.protect</Text>);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
        showAlert(<Text>alert.f12</Text>, <Text>alert.protect</Text>);
        return false;
      }
      if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        showAlert(<Text>alert.c+s+j</Text>, <Text>alert.protect</Text>);
        return false;
      }
      if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        showAlert(<Text>alert.c+s+c</Text>, <Text>alert.protect</Text>);
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', AOS.refresh, { passive: true }); // Added passive

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', AOS.refresh);
      if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
    AOS.refresh();
  };

  const showAlert = (message, subtitle) => {
    if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);
    setAlertMessage(null);
    setTimeout(() => {
      setAlertMessage({ text: message, subtitle });
      alertTimeoutRef.current = setTimeout(() => setAlertMessage(null), 3000);
    }, 10);
  };

  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
      {/* DarkVeil Background - Fixed Position */}
      <div className='fixed inset-0 w-screen h-screen z-0 overflow-hidden'>
        <DarkVeil
          hueShift={10}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          speed={1.5}
          resolutionScale={1}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10'>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className='w-full'>
          {['home', 'about', 'skills', 'experiences', 'contact'].map((section) => (
            <Element key={section} name={section}>
              {section === 'home' && <Hero />}
              {section === 'about' && <About />}
              {section === 'skills' && <Skills />}
              {section === 'experiences' && <Experiences />}
              {section === 'contact' && <Contact />}
            </Element>
          ))}
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>

      <Alert
        message={alertMessage?.text || ''}
        subtitle={alertMessage?.subtitle || ''}
      />
    </div>
  );
};

export default App;