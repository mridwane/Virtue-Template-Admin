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
        'primary': '#672FEC',
        'secondary': '#3F3D56',
        'tertiary': '#270B6F',        
        'quaternary': '#EDE9FE',
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
        'info-light': '#79ADFF',

      },
      boxShadow: {
        'custom': '0px 4px 15px 0px rgba(0,0,0,0.10)',
        'neumorphism': '5px 5px 18px #d5d2e5, -5px -5px 18px #ffffff',
      },
      transitionDelay: {
        '1': '0.1s',
        '3': '0.3s',
        '5': '0.5s',
      },
      transitionDuration: {
        '5': '0.5s',
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focus', 'checked', 'disabled'],
      borderColor: ['focus', 'checked'],
      borderRadius: ['hover', 'focus', 'active'],
      display: ['hover', 'focus', 'active'],
      margin: ['hover', 'focus', 'active'],
      opacity: ['disabled'],
      padding: ['hover', 'focus', 'active'],
      textColor: ['focus'],
      transitionTimingFunction: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus', 'active'],
      translate: ['group-focus'],      
      width: ['hover', 'focus', 'active'],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require('@tailwindcss/custom-forms')
  ],
}
