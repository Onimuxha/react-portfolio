/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // animation: {
      //   'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
      //   'star-movement-top': 'star-movement-top linear infinite alternate',
      // },
      // keyframes: {
      //   'star-movement-bottom': {
      //     '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
      //     '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
      //   },
      //   'star-movement-top': {
      //     '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
      //     '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
      //   },
      // },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
      colors: {
        primary: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        secondary: {
          light: '#f87171',
          DEFAULT: '#ef4444',
          dark: '#dc2626',
        },
        dark: {
          light: '#4b5563',
          DEFAULT: '#374151',
          dark: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      // animation: {
      //   'spin-slow': 'spin 3s linear infinite',
      //   'bounce-slow': 'bounce 3s infinite',
      // },
    },
  },
  // plugins: [],
}