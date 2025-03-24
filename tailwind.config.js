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
        primaryText: '#ffffff', 

        firstColor: '#f97316',
        firstColor_light:'#fb923c',
        firstColor_dark:'#ea580c',

        green: '#10B981',
        yellow: '#F59E0B',
        red: '#EF4444',
        blue: '#3B82F6',
      },
    },
  },
  plugins: [],
}
