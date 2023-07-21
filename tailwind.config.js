/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '420px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    },
    extend: {
      maxWidth: {
        'screen-2xl': '1440px'
      },
      colors: {
        dark: '#031425',
        main: {
          primary: '#072F54',
          secondary: '#FBC108'
        },
        g: {
          50: '#FBFBFB',
          100: '#F6F6F6',
          300: '#E3E3E3',
          700: '#5F5F5F',
          800: '#414141'
        },
        p: {
          50: '#F0F5FA',
          100: '#E6EAF0',
          200: '#B3C1D6',
          300: '#849CBF',
          400: '#2D4F7E',
          600: '#031425'
        },
        s: {
          600: '#D19800',
          700: '#996F00'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),]
}
