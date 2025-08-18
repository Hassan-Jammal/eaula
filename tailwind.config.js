/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      // colors: {
      //   primary: 'var(--primary-color)',
      //   secondary: 'var(--secondary-color)',
      // },
      screens: {
        '2xl': '1536px',
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
        '6xl': '2688px',
        '7xl': '3072px',
        '8xl': '3584px',
        '9xl': '4096px',
      },
      fontFamily: {
        NeueMontrealRegular: ['"neue_montrealregular"', 'sans-serif'],
        NeueMontrealMedium: ['"neue_montrealmedium"', 'sans-serif'],
        Anton: ['"antonregular"', 'sans-serif'],
      },
    }
  },
  // important: true,
  plugins: [],
  safelist: [
    // "to-[#2B6FF6]",
    // "to-[#43516D]",
    // "to-[#323D86]",
  ],
}