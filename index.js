import rgb from './src/rgb'
import hex from './src/hex'

(function(window) {
  const colorFactory = type => {
    return (...val) => {
      return Object.create(type(...val))
    }
  }

  window.RGB = colorFactory(rgb)
  window.HEX = colorFactory(hex)
})(window)