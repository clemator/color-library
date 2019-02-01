import colorFactory from './src/colorFactory'
import rgb from './src/rgbFactory'
import hex from './src/hexFactory'
import hsl from './src/hslFactory'

(function(window) {
  window.RGB = colorFactory(rgb)
  window.HEX = colorFactory(hex)
  window.HSL = colorFactory(hsl)
})(window)