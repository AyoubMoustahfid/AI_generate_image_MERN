// import { useState, useEffect } from 'react';

// function useDarkMode() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     const body = document.body;

//     if (isDarkMode) {
//       html.classList.add('dark');
//       body.classList.add('dark');
//     } else {
//       html.classList.remove('dark');
//       body.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   return [isDarkMode, setIsDarkMode];
// }

// export default useDarkMode;


import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode