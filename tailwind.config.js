/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-2xl": "1440px"
      },
      colors: {
        dark: '#031425',
        main: {
          primary: '#072F54',
          secondary: "#FBC108"
        },
        g: {
          50: "#FBFBFB",
          300: "#E3E3E3",
          700: "#5F5F5F",
          800: "#414141"
        },
        p: {
          50: "#F0F5FA",
          100: "#E6EAF0",
          200: "#B3C1D6",
          400: '#2D4F7E',
          600: '#031425'
        },
        s: {
          700: "#996F00"
        }
      }
    }
  },
  plugins: []
}
