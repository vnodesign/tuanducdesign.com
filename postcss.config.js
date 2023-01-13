/** @type {import('postcss').Postcss} */
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    // autoprefixer: {},
    'postcss-lightningcss': {
      browsers: '>= .25%',
    },
  },
}
