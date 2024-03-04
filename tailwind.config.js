/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
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
      }
    },
  },
  plugins: [],
}