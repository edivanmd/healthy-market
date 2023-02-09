/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'basic-green': '#3B9C48',
        'basic-blue': '#253D4E',
      },
      backgroundImage: {
        'banner-pattern': "url('../public/bg-pattern.jpg')",
      }
    },
  },
  plugins: [],
}
