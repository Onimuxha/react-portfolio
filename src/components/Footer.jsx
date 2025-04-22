import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-6 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Brand - Left */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 md:mb-0"
          >
            Portfolio
          </Link>
          
          {/* Social Icons - Center */}
          <div className="flex space-x-5 mb-4 md:mb-0">
            {['github', 'linkedin-in', 'twitter'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="text-gray-400 hover:text-primary text-lg transition-colors"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>

          {/* Copyright - Right */}
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Socheathek MAO
          </p>
        </div>
      </div>

      {/* Back-to-top button */}
      <Link 
        to="home" 
        smooth={true} 
        duration={500}
        className="fixed bottom-6 right-6 w-10 h-10 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-primary transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </Link>
    </footer>
  );
};

export default Footer;