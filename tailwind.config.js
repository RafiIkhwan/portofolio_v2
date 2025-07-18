/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(255, 255, 255, 1)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        'white': 'var(--white)',
        'light-blue': 'var(--light-blue)',
        'blue': 'var(--blue)',
        'dark-blue': 'var(--dark-blue)',
        'light-dark-blue': 'var(--light-dark-blue)',
        'light-gray': 'var(--light-gray)',
        'lightest-gray': 'var(--lightest-gray)',
        'gray': 'var(--gray)',
        'background-from': 'var(--background-from)',
        'background-to': 'var(--background-to)',
        'wrap-background': 'var(--wrap-background)',
        'item-background-from': 'var(--item-background-from)',
        'item-background-to': 'var(--item-background-to)',
      }
    },
  },
  plugins: [],
}