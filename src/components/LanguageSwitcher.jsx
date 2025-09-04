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
        className={`flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300/50 border-gray-600 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:shadow-white/20 dark:border-gray-600/50 dark:bg-gray-700/60`}
        aria-label='Change language'
        aria-expanded={isOpen}
      >
        <div className='flex h-6 w-8 items-center justify-center dark:text-white text-gray-900'>{currentLanguage.flag}</div>
      </button>

      {/* Dropdown menu */}
      <div
        className={`duration-470 absolute right-0 mt-2 w-44 transition-all ease-in-out ${
          isOpen
            ? 'max-h-72 translate-y-0 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-2 overflow-hidden opacity-0'
        }`}
        style={{
          zIndex: 50,
          transformOrigin: 'top center',
          transitionProperty: 'max-height, opacity, transform',
        }}
      >
        <div className='${getFontClass()} space-y-2 rounded-md border border-gray-700 bg-black/95 p-2 shadow-xl backdrop-blur-xl'>
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center rounded-md px-4 py-2.5 text-left font-medium transition-all duration-300 ease-out ${i18n.language === lang.code ? 'bg-white/20 text-white' : 'text-gray-300 hover:bg-white/10'} ${lang.fontClass || ''}`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
              aria-label={`${lang.name}`}
            >
              <div className='mr-3 flex h-6 w-8 items-center justify-center'>{lang.flag}</div>
              <span className='text-sm'>{lang.name}</span>
              {i18n.language === lang.code && <span className='ml-auto block h-3 w-1 rounded-full bg-white'></span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
