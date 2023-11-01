/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./login/**/*.{html,js}", "./contact/**/*.{html,js}", "./programs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', "sans-serif"]
      }
    },
  },
  plugins: [],
}

