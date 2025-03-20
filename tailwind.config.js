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

module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 3s linear infinite', // default animation duration is 3s
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
}