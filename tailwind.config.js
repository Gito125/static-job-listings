/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      "colors" :{
        "primary": {
          100: '#D8F2F2',
          200: '#A7F2F2',
          300: '#76F5F5',
          400: '#5B8080'
        }
      }
    },
  },
  plugins: [],
}
