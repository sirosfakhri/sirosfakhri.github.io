/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors :{
        'body-dark' : '#212428',
        'box-dark' : '#202327',
      },
    },
  },
  plugins: [],
}
