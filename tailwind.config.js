const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ["Poppins","sans-serif"],
        'sambung': ["Pacifico", "cursive"]
      },
      colors:{
        coklatfooter:'#2B1712',
        coklatbg:'#4B2C24',
        coklatelips:'#65463E',
        coklatbutton:'#DDB66F',
        th:'#2E2624'
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

