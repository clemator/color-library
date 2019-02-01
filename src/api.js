const decimalToHex = (dec) => {
  const valToStr = dec.toString(16)
  return (valToStr.length % 2) ? ('0' + valToStr) : valToStr
}

const hue2rgb = (p, q, t) => {
  if (t < 0)
    t += 1
  if (t > 1)
    t -= 1
  if (t < 1/6)
    return p + (q - p) * 6 * t
  if (t < 1/2)
    return q
  if (t < 2/3)
    return p + (q - p) * (2/3 - t) * 6
  return p
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

const rgbToHsl = (value) => {
  let h = 0
  let s = 0
  let l

  const transformedValue = value.map(v => v / 255)
  const r = transformedValue[0]
  const g = transformedValue[1]
  const b = transformedValue[2]

  const max = Math.max(...transformedValue)
  const min = Math.min(...transformedValue)

  l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = (l > 0.5) ? (d / (2 - max - min)) : (d / (max + min))

    switch (max) {
      case r: 
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }


  return [h, s, l]
}

const hslToRgb = (value) => {
  const h = value[0]
  const s = value[1]
  const l = value[2]
  let r = l
  let g = l
  let b = l

  if (s !== 0) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1/3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1/3)
  }

  return [r * 255, g * 255, b * 255]
}

const publicMethods = {
  toHex: function() {
    if (this.format === 'rgb')
      return rgbToHex(this.get())
    else if (this.format === 'hsl')
      return rgbToHex(hexToRgb(this.get()))
    return '#' + this.get()
  },
  toRgb: function() {
    if (this.format === 'hex')
      return hexToRgb(this.get())
    else if (this.format === 'hsl')
      return hslToRgb(this.get())
    return this.toString()
  },
  toHsl: function() {
    if (this.format === 'rgb')
      return rgbToHsl(this.get())
    else if (this.format === 'hex')
      return rgbToHsl(hexToRgb(this.get()))
    return this.toString()
  }
}

module.exports = publicMethods