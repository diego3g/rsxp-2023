/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gray: {
        100: '#E1E1E6',
        150: '#C4C4CC',
        200: '#A9A9B2',
        300: '#737380',
        400: '#7C7C8A',
        500: '#505059',
        600: '#323238',
        700: '#29292E',
        800: '#202024',
        900: '#121214',
        950: '#09090A',
      },
      height: {
        26: '6.5rem',
      },
    },
  },
  plugins: [],
}
