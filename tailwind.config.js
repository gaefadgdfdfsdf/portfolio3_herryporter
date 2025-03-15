/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],




  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        libre: ['"Libre Baskerville"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },

  theme: {
    extend: {
      animation: {
        's1Arrow': 's1Arrow 1.5s linear infinite forwards', // Your custom animation
      },
    },
  },
}

