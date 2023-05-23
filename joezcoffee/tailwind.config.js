/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'coffee' : '#9c6f44',
      },
      spacing:{
        '51' : '20rem',
      }
    },
  },
  plugins: [],
}

