/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rocketseat: {
          light: '#996DFF',
          mid: '#8257E5',
          dark: '#633BBC',
          low: '#271A45',
        },
        discover: {
          light: '#6A80FF',
          mid: '#4863F7',
          dark: '#3249CB',
          low: '#182049',
        },
        explorer: {
          light: '#42D3FF',
          mid: '#02799D',
          dark: '#065E7C',
          low: '#0A3442',
        },
        ignite: {
          light: '#00B37E',
          mid: '#00875F',
          dark: '#015F43',
          low: '#00291D',
        },
        expertsClub: {
          light: '#FC4737',
          mid: '#D73628',
          dark: '#AD1E12',
          low: '#42110D',
        },
        success: {
          light: '#04D361',
          base: '#1B873F',
          low: '#051B0D',
        },
        danger: {
          light: '#F75A68',
          base: '#CC2937',
          low: '#2D090C',
        },
        warning: {
          light: '#FBA94C',
          base: '#EB8A1D',
          low: '#2E1B06',
        },
        new: {
          light: '#1EF7D0',
          base: '#07847E',
          low: '#163840',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
          950: '#09090A',
        },
      },
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
