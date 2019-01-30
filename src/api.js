const decimalToHex = (dec) => {
  const valToStr = dec.toString(16)
  return (valToStr.length % 2) ? ('0' + valToStr) : valToStr
}

const rgbToHex = (value) => {
  return Array.from(value, decimalToHex)
    .join('')
    .toUpperCase()
}

const hexToRgb = (value) => {
  const explodedValue = value.match(/.{1,2}/g)

  return Array.from(explodedValue, (val) => parseInt(val, 16))
}

const publicMethods = {
  toHex: function() {
    if (this.format === 'rgb')
      return rgbToHex(this.get())
    return '#' + this.get()
  },
  toRgb: function() {
    if (this.format === 'hex')
      return hexToRgb(this.get())
    return this.toString()
  }
}

module.exports = publicMethods