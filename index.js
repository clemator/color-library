import colorFactory from './src/factory'
import rgb from './src/rgb'
import hex from './src/hex'

(function(window) {
  window.RGB = colorFactory(rgb)
  window.HEX = colorFactory(hex)
})(window)