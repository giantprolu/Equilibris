/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6f9',
          100: '#d5ebf3',
          200: '#abd7e7',
          300: '#7bbdd6',
          400: '#48a0c0',
          500: '#3584a3',
          600: '#2d6e8a',
          700: '#285b72',
          800: '#254d60',
          900: '#234253',
          950: '#132a36',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#ecedf2',
          200: '#d5d8e2',
          300: '#b3b9c9',
          400: '#8c94ac',
          500: '#707892',
          600: '#5c6279',
          700: '#4c5062',
          800: '#424553',
          900: '#383b47',
          950: '#24252d',
        },
        accent: {
          50: '#fef3f2',
          100: '#fee5e1',
          200: '#fdd0c9',
          300: '#fbb0a4',
          400: '#f8846f',
          500: '#f05e43',
          600: '#dd4023',
          700: '#ba3119',
          800: '#9a2c19',
          900: '#802b1b',
          950: '#45130b',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};