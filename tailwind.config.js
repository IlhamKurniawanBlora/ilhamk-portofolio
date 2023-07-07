/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],  theme: {
    extend :{
        colors:{
            dark: '#0f172a',
            primary: '#526D82',
            secondary: '#9DB2BF',
            tersier: '#DDE6ED',
            dope : '#116A7B'
        },
        screens :{
        '2xl' : "1320px",
        }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
]}
