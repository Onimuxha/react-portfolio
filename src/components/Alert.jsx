import React, { useState, useEffect, useRef } from 'react';

const Alert = ({ message, subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const entryTimeoutRef = useRef(null);
  const exitTimeoutRef = useRef(null);

  const prevMessageRef = useRef('');

  useEffect(() => {
    if (!message) {
      setIsVisible(false);
      setIsShowing(false);
      prevMessageRef.current = '';
      return;
    }
    if (message) {
      if (entryTimeoutRef.current) clearTimeout(entryTimeoutRef.current);
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
      prevMessageRef.current = message;
      setIsVisible(true);
      entryTimeoutRef.current = setTimeout(() => {
        setIsShowing(true);
        exitTimeoutRef.current = setTimeout(() => {
          setIsShowing(false);
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
        }, 3500);
      }, 50);
    }

    return () => {
      if (entryTimeoutRef.current) clearTimeout(entryTimeoutRef.current);
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
    };
  }, [message, subtitle]);

  if (!message || !isVisible) return null;

  return (
    <div
      className='fixed right-3 top-20 z-50 mt-3 select-none'
      style={{
        opacity: isShowing ? 1 : 0,
        transform: `translateY(${isShowing ? '0' : '-20px'})`,
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
      }}
    >
      <div
        className={`group relative w-64 rounded-xl border border-gray-300 bg-white/70 px-4 py-3 text-gray-800 shadow-lg backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-100`}
      >
        <div className='flex items-start gap-3'>
          <i className='bx bx-info-circle text-xl text-gray-500 dark:text-gray-400'></i>
          <div className='flex flex-col'>
            <p className='font-medium'>{message}</p>
            {subtitle && <p className='text-sm text-gray-600 dark:text-gray-400'>{subtitle}</p>}
          </div>
        </div>

        {/* Subtle border hover effect */}
        <div className='pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-gray-400/40'></div>
      </div>
    </div>
  );
};

export default Alert;
