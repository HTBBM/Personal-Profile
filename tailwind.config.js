/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    screens:{
      'celular': '150px',
      'lg': '1024px'
    },
    extend: {
      keyframes: {
        spining: {
          '0%, 100%': { transform: 'rotate(-270deg)' },
          '50%': { transform: 'rotate(3deg)'},
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)'},
        },
      },
      fontFamily:{
        Inter: ["Inter", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Pixel:['Pixelify Sans', "sans-serif"],
        Rubik:["Rubik Mono One", "monospace"],
        JetBrains:["JetBrains Mono", "monospace"]
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        spining: 'spining 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}