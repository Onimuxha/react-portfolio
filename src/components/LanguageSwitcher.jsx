import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

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

  const getFontClass = () => {
    return i18n.language === 'kh' ? 'font-khmer' : '';
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: '🇬🇧',
    },
    {
      code: 'kh',
      name: 'ភាសាខ្មែរ',
      flag: '🇰🇭',
      fontClass: 'font-khmer',
    },
    {
      code: 'zh',
      name: '中文',
      // flag: <span className='fi fi-cn'></span>,
      flag: '🇨🇳',
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className={`relative ${getFontClass()}`} ref={dropdownRef}>
      {/* Flag button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-10 h-10 rounded-lg flex items-center justify-center 
      bg-white/10 backdrop-blur-sm
      border border-gray-600
      hover:shadow-md hover:shadow-white/20
      transition-all duration-300`}
        aria-label='Change language'
        aria-expanded={isOpen}
      >
        <div className='flex items-center justify-center w-8 h-6'>{currentLanguage.flag}</div>
      </button>

      {/* Dropdown menu */}
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
          className='p-2 space-y-2 bg-black/95
          backdrop-blur-xl border border-gray-700
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
                ${i18n.language === lang.code ? 'bg-white/20 text-white' : 'text-gray-300 hover:bg-white/10'}
                ${lang.fontClass || ''}`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
              aria-label={`${lang.name}`}
            >
              <div className='flex items-center justify-center w-8 h-6 mr-3'>{lang.flag}</div>
              <span className='text-sm'>{lang.name}</span>
              {i18n.language === lang.code && <span className='block ml-auto w-1 h-3 bg-white rounded-full'></span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
