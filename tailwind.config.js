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
        'heroBg': "#021122",
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