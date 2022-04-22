module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '400px' },
    },
    extend: {
      colors: {
        'dark-green': '#98bf11',
      },
    },
  },
  plugins: [],
};
