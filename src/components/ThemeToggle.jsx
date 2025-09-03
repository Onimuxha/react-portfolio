import { IconMoonStars, IconSun } from "@tabler/icons-react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className='w-10 h-10 rounded-lg flex items-center justify-center 
      bg-white/10 backdrop-blur-sm
      border border-gray-600
      hover:shadow-md hover:shadow-white/20
      transition-all duration-300'
      aria-label='Toggle Dark Mode'
    >
      <div
        className={`relative h-5 w-5 transition-transform duration-500 ${theme === 'light' ? 'rotate-0' : 'rotate-180'}`}
      >
        <IconMoonStars
          className={`absolute h-5 w-5 text-violet-400
          transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
        />
        <IconSun className={`absolute h-5 w-5 text-amber-500 dark:text-yellow-300
          transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;