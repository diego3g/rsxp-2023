/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/theme/colors.js')
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        heading: 'Roboto_700Bold',
        subtitle: 'Roboto_500Medium',
        body: 'Roboto_400Regular',
      },
      height: {
        26: '6.5rem',
      },
    },
  },
  plugins: [],
}
