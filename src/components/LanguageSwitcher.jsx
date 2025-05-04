import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Custom hook for detecting clicks outside an element
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Apply font class based on current language
  const getFontClass = () => {
    return i18n.language === 'kh' ? 'font-khmer' : '';
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: <span className='fi fi-gb'></span>,
    },
    {
      code: 'kh',
      name: 'ភាសាខ្មែរ',
      flag: <span className='fi fi-kh'></span>,
      fontClass: 'font-khmer',
    },
    {
      code: 'zh',
      name: '中文',
      flag: <span className='fi fi-cn'></span>,
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className={`relative ${getFontClass()}`} ref={dropdownRef}>
      {/* Flag button with improved glassmorphism */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-10 h-10
          backdrop-blur-md bg-gray-800/50
          border border-gray-700/50
          rounded-lg focus:outline-none
          hover:bg-white/40 dark:hover:bg-gray-700/60
          hover:shadow-lg hover:shadow-cyan-400/30
          transition-all duration-300`}
        aria-label='Change language'
        aria-expanded={isOpen}
      >
        <div className='flex items-center justify-center w-8 h-6'>{currentLanguage.flag}</div>
      </button>

      {/* Dropdown menu with extra smooth transition animation */}
      <div
        className={`absolute right-0 mt-2 w-44 transition-all duration-470 ease-in-out
          ${
            isOpen
              ? 'max-h-72 opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2 overflow-hidden pointer-events-none'
          }`}
        style={{
          zIndex: 50,
          transformOrigin: 'top center',
          transitionProperty: 'max-height, opacity, transform',
        }}
      >
        <div
          className='p-2 space-y-2 bg-white/95 dark:bg-gray-800/95
          backdrop-blur-xl border border-gray-200 dark:border-gray-700
          rounded-md shadow-xl ${getFontClass()}'
        >
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex items-center w-full px-4 py-2.5 text-left font-medium
                rounded-md transition-all duration-300 ease-out
                ${
                  i18n.language === lang.code
                    ? 'bg-gradient-to-r from-cyan-400/10 to-blue-500/10 text-cyan-500 dark:text-cyan-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }
                ${lang.fontClass || ''}`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
              aria-label={`${lang.name}`}
            >
              <div className='flex items-center justify-center w-8 h-6 mr-3'>{lang.flag}</div>
              <span className='text-sm'>{lang.name}</span>
              {i18n.language === lang.code && (
                <span className='block ml-auto w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full'></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
