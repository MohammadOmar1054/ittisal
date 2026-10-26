/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "Arial", "sans-serif"]
      },
      colors: {
        ink: "#0b1321",
        cream: "#f7f5ef",
        mint: "#b8f3d0",
        coral: "#ff785a"
      }
    }
  },
  plugins: []
};
