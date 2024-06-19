module.exports = {
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#53B0AE',
        accent: '#F74371',
      },
      screens: {
        'wide': '1950px',
        'desktop': {'max': '1440px',},
        'laptop': {'max': '1200px',},
        'm-tablet': {'max': '990px',},
        'tablet': {'max': '640px',},
        'mobile': {'max': '380px',},
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
        body: 'Noto Sans JP, Arial, sans-serif',
      },
      spacing: {
        11.5: '2.875rem',
      },
    },
  },
  content: [
    './components/**/*.jsx', // all components
    './pages/**/*.js', // all pages as well
  ],
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
