import rgb from './src/rgbFactory'
import hex from './src/hexFactory'
import hsl from './src/hslFactory'

(function() {
  window.RGB = rgb
  window.HEX = hex
  window.HSL = hsl
})()