/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#E1E1E6',
          600: '#202024',
          800: '#121214',
          900: '#09090A',
        },
        purple: {
          500: '#8257E5',
        },
        red: {
          500: '#F75A68',
        },
      },
      fontFamily: {
        heading: 'Roboto_700Bold',
        subtitle: 'Roboto_500Medium',
        body: 'Roboto_400Regular',
      },
    },
  },
  plugins: [],
}
