import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          className="hover:bg-gray-100 text-xl hover:text-gray-900 text-gray-500 rounded-lg p-1 w-9 h-9 flex justify-center items-center"
        >
          <i className="fa-regular fa-sun-bright"></i>
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          className="text-gray-400 text-xl hover:text-gray-200 hover:bg-gray-700 rounded-lg p-1 w-9 h-9 flex justify-center items-center"
        >
          <i className="fa-regular fa-moon-stars"></i>
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
