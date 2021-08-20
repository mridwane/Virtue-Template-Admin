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
        'primary': '#672FEC',
        'tertiary': '#270B6F',
        'secondary': '#3F3D56',
        'danger': '#EF4444',
        'success': '#10B981',
        'warning': '#F59E0B',
        'info': '#3B83F5',
        'light': '#FFFFFF',
        'dark': '#000000',
        'primary-light': '#8A58FF',
        'tertiary-light': '#52349F',
        'secondary-light': '#68667B',
        'danger-light': '#F57F7F',
        'success-light': '#60D1AC',
        'warning-light': '#FECC77',
        'info-light': '#79ADFF'

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
