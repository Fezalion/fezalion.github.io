/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'start': {
          '0%': { opacity: 0 },
          '100%': {opacity: 1},
        }
      },
      animation: {
        'pop-in': 'start 500ms ease-in',
        'pop-out': 'start 500ms ease-in reverse',
      },
      colors: {
        primary: {
          100: "#d1d1d1",
          200: "#a3a3a3",
          300: "#767676",
          400: "#484848",
          500: "#1a1a1a",
          600: "#151515",
          700: "#101010",
          800: "#0a0a0a",
          900: "#050505",
        },
        
        secondary: {
          100: "#ffccff",
          200: "#ff99ff",
          300: "#ff66ff",
          400: "#ff33ff",
          500: "#ff00ff",
          600: "#cc00cc",
          700: "#990099",
          800: "#660066",
          900: "#330033"
},

        tertiary: {
          100: "#f9e1d2",
          200: "#f3c2a6",
          300: "#eca479",
          400: "#e6854d",
          500: "#e06720",
          600: "#b3521a",
          700: "#863e13",
          800: "#5a290d",
          900: "#2d1506",
        },        
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
