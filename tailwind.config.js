/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{jsx,tsx,ts,html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens:{
        lg: '100%',
        '2xl': '90%'
      }
    },
    extend: {},
  },
  plugins: [],
}
