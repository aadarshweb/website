/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#ffedd5',
          DEFAULT: '#ea580c', // Orange 600
          dark: '#9a3412', // Orange 800
          primary: '#e11d48', // Rose 600
          bg: '#0f172a' // Slate 900
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
