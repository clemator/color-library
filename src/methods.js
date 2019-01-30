const rgbToHex = (value) => {
  let hexString = '';

  Array.from(value, (val) => {
    const valToStr = val.toString(16)
    hexString += (valToStr.length % 2) ? ('0' + valToStr) : valToStr
  })

  return hexString.toUpperCase()
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