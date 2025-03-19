/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#09090b',
        background: '#18181b',
        button: '#0284c7',

        buttonHover: '#0ea5e9',
        primaryText: '#ffffff', 

        firstColor: '#f97316',
        firstColor_light:'#fb923c',
        firstColor_dark:'#ea580c',
      },
    },
  },
  plugins: [],
}
