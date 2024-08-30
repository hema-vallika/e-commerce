/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ff6e00',
        secondary: '#040D12',
        surface: '#b9b9b9',
        ground: '#dddddd',
        light: "#52525b"
      },
      fontFamily:{
        condensed: ["Roboto Condensed", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        teko: ["Teko", "sans-serif"]
      }
    },
  },
  plugins: [],
}

