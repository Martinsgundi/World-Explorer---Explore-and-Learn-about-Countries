/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/details.html",
    "./public/border-country-details.html",
    "./public/script.js",
    "./public/details.js",
    "./public/border-country-details.js",
    "./public/darkmode.js"
  ],
  theme: {
    extend: {
      screens: {
        md2: '900px'
      },
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)',
        veryDarkBlueText: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        NunitoSans: ['Nunito Sans']
      }
    },
  },
  plugins: [],
}

