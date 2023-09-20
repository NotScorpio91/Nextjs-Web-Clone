/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      // => @media (min-width: 960px) { ... }
      'cd': '960px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      // => @media (min-width: 1151px) { ... }
      'nt': '1168px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
       inter: ["inter"],
       blinker: ["blinker"],
       roboto: ["roboto"]
      }
    },
  },
  plugins: [],
}