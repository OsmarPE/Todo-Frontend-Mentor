/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        darkBlue100:'hsl(235, 21%, 11%)',
        darkBlue200:'hsl(235, 24%, 19%)',
        darkGray100:'hsl(234, 39%, 85%)',
        darkGrayHover:'hsl(236, 33%, 92%)',
        darkGray200:'hsl(234, 11%, 52%)',
        darkGray300:'hsl(233, 14%, 35%)',
        darkGray400:'hsl(237, 14%, 26%)',
        gradientFrom:'hsl(192, 100%, 67%)',
        gradientTo:'hsl(280, 87%, 65%)',
        bluePrimary:'hsl(220, 98%, 61%)',
        lightGray100: 'hsl(0, 0%, 98%)',
        lightGray200: 'hsl(236, 33%, 92%)',
        lightBlue100: 'hsl(233, 11%, 84%)',
        lightBlue200: 'hsl(236, 9%, 61%)',
        lightBlue300: 'hsl(235, 19%, 35%)',
      }
    },
  },
  plugins: [],
}
