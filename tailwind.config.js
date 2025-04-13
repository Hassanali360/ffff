/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'working-img' : "url('/work-proceess.webp')"
      },
      colors:{
        'heroBg': "#9a7b5c",
        'Para' : "rgb(0 0 0 / 80%)",
        'Primary': "#06a005"
      },
      fontFamily: {
       'Primary' : [ "Poppins","sans-serif"],
       'Secoundary' : ["Syne", "sans-serif"],
      }

    },
  },
  plugins: [],
}