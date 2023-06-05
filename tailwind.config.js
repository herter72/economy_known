/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        cstmGreen: '#60A561',
      },
    },
    minHeight: {
      '90vh': '90vh',
    }
  },
  plugins: [],
}

