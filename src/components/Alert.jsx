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
          }, 500); // Match transition duration
        }, 3500); // How long alert stays visible
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
      className='fixed top-20 mt-3 right-3 z-50 select-none'
      style={{
        opacity: isShowing ? 1 : 0,
        transform: `translateY(${isShowing ? '0' : '-20px'})`,
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
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
          <i className='bx bx-error-circle text-xl text-cyan-300/80'></i>
          <div className='flex flex-col'>
            <p className='font-semibold text-emerald-300 flex items-center'>{message}</p>
            {subtitle && <p className='text-sm text-cyan-200/80'>{subtitle}</p>}
          </div>
        </div>
        {/* Animated border */}
        <div className='absolute inset-0 rounded-xl border border-cyan-400/20 group-hover:border-cyan-400/50 animate-pulse pointer-events-none'></div>
      </div>
    </div>
  );
};

export default Alert;
