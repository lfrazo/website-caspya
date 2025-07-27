/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'caspya-blue': {
          DEFAULT: '#1A15F2',
          50: '#F3F2FF',
          100: '#E4E3FF',
          200: '#C5C3FF',
          300: '#9E9AFF',
          400: '#7570FF',
          500: '#423EFF',
          600: '#1A15F2', // Color base
          700: '#1311AB',
          800: '#0E0C7F',
          900: '#0A0852',
          950: '#040425',
        },
        'caspya-purple': {
          DEFAULT: '#6700C3',
          50: '#F4E6FF',
          100: '#E9CCFF',
          200: '#D699FF',
          300: '#BB66FF',
          400: '#9A33E6',
          500: '#8019D6',
          600: '#6700C3', // Color base
          700: '#4A008A',
          800: '#360066',
          900: '#240044',
          950: '#120022',
        },
        'caspya-midnight-blue': {
          DEFAULT: '#020E2F',
          50: '#D0D5E4',
          100: '#A6B2CC',
          200: '#6F81A8',
          300: '#3E4F7D',
          400: '#1A2F57',
          500: '#070F39',
          600: '#020E2F', // Color base
          700: '#010A24',
          800: '#01061A',
          900: '#010310',
          950: '#000108',
        },
        'caspya-pink': {
          DEFAULT: '#EC0075',
          50: '#FFE5F1',
          100: '#FDCFE4',
          200: '#F99FC9',
          300: '#F268A5',
          400: '#EC3E8A',
          500: '#E41F77',
          600: '#EC0075', // Color base
          700: '#A60052',
          800: '#7D003E',
          900: '#540029',
          950: '#2B0015',
        },
        'caspya-aguamarina': {
          DEFAULT: '#00E0FC',
          50: '#CCFDFF',
          100: '#99FBFF',
          200: '#66F9FF',
          300: '#33F5FF',
          400: '#00E8F9',
          500: '#00CCE3',
          600: '#00E0FC', // Color base
          700: '#009EAF',
          800: '#007A87',
          900: '#005660',
          950: '#002B30',
        },
      }
    },
  },
  plugins: [],
}
