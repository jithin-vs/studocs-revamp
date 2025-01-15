/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
          primary:"#37517e",
          secondary:"#73c5eb"
        },
        fontFamily: {
          // If using variable
          sans: ['var(--font-opensans)'],
          opensans: ['Open Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }

