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
        'rsvp': '230px 250px 250px 250px',        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
