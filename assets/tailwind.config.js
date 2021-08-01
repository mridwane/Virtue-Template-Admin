module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'sans': ['Open Sans'],      
        'poppins': ['Poppins'],
      },
      colors: {
        'purple-light': '#EDE9FE',
        'purple-dark': '#672FEC',
        'blue-dark': '#270B6F',
        'blue-gray': '#9896C8'

      },
      boxShadow: {
        '3xl': '0px 35px 60px 15px rgba(0, 0, 0, 0.3)',
      },
      transitionDelay: {
        '1': '0.1s',
        '3': '0.3s',
        '5': '0.5s',
      },
      transitionDuration: {
        '5': '0.5s',
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-focus'],
      transitionTimingFunction: ['hover', 'focus'],
      width: ['hover', 'focus', 'active'],
      margin: ['hover', 'focus', 'active'],
      padding: ['hover', 'focus', 'active'],
      display: ['hover', 'focus', 'active'],
      borderRadius: ['hover', 'focus', 'active'],
      transitionDuration: ['hover', 'focus', 'active'],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
