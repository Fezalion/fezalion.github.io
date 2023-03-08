/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html","./src/components/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {    
    extend: {
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
          900: "#050505"
        },
      }
    },
  },
  plugins: [],
}
