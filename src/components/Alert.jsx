import React, { useState, useEffect, useRef } from 'react';

const Alert = ({ message, subtitle }) => {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Show and fade in
    setVisible(true);
    setTimeout(() => setOpacity(1), 50);

    // Schedule fade out
    timeoutRef.current = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => setVisible(false), 500);
    }, 3500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [message]);

  if (!visible) return null;

  return (
    <div
      className='fixed top-20 right-4 z-50'
      style={{
        opacity: opacity,
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
        transform: `translateY(${opacity === 1 ? '0' : '-20px'})`,
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
          <i class='fa-solid fa-circle-exclamation text-cyan-300/80'></i>
          <div className='flex flex-col'>
            <p className='font-semibold text-emerald-300 flex items-center'>{message}</p>
            <p className='text-sm text-cyan-200/80'>{subtitle}</p>
          </div>
        </div>
        {/* Animated border */}
        <div className='absolute inset-0 rounded-xl border border-cyan-400/20 group-hover:border-cyan-400/50 animate-pulse pointer-events-none'></div>
      </div>
    </div>
  );
};

export default Alert;
