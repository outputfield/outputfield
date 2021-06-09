const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Neue Haas Unica Pro Regular', 'sans-serif'],
      serif: ['Avara Bold Italic', 'serif'],
    },
    extend: {
      gridTemplateColumns: {
        // 'rsvp': '230px 250px 250px 250px',
        'rsvp': '240px 240px 240px',
        'artist': 'auto 1fr',
      },
      gridTemplateRows: {
        'artist': 'auto 1fr',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      // blue: colors.lightBlue,
      // yellow: colors.amber,
      white: colors.white,
      black: colors.black,
      green: colors.emerald,
      yellow: {
        DEFAULT: '#FFFF00',
        '50': '#FFFFE5',
        '100': '#FFFFCC',
        '200': '#FFFF99',
        '300': '#FFFF66',
        '400': '#FFFF33',
        '500': '#FFFF00',
        '600': '#CCCC00',
        '700': '#999900',
        '800': '#666600',
        '900': '#333300'
      },
      blue: {
        DEFAULT: '#0404FF',
        '50': '#E9E9FF',
        '100': '#D0D0FF',
        '200': '#9D9DFF',
        '300': '#6A6AFF',
        // '400': '#3737FF',
        '400': '#1928ff',
        '500': '#0404FF',
        '600': '#0000D0',
        '700': '#00009D',
        '800': '#00006A',
        '900': '#000037'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
