module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{'customBulu':'#1DA1F2', 'login':'#4D6FBE'}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
