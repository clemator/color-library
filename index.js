const rgb = require('./src/rgbFactory')
const hex = require('./src/hexFactory')
const hsl = require('./src/hslFactory')

module.exports = {
  RGB: rgb,
  HEX: hex,
  HSL: hsl
}