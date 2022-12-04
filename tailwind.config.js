/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#262626',
          50: '#828282',
          100: '#787878',
          200: '#636363',
          300: '#4F4F4F',
          400: '#3A3A3A',
          500: '#262626',
          600: '#0A0A0A',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        secondary: {
          DEFAULT: '#90D7CB',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#EAF7F5',
          300: '#CCEDE7',
          400: '#AEE2D9',
          500: '#90D7CB',
          600: '#67C8B8',
          700: '#41B5A2',
          800: '#338C7D',
          900: '#246358',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
