module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'slider-image': "url('/images/slider/slider-1.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
