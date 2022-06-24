import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

module.exports = {
  plugins: [
    'postcss-preset-env',
    'postcss-import',
    'postcss-flexbugs-fixes',
    tailwindcss,
    autoprefixer
  ]
}
