import api from './api'
import colorFactory from './colorFactory'

const valueChecking = (h, s, l) => {
  try {
    if (typeof h === 'undefined' || typeof s === 'undefined' || typeof l === 'undefined')
      throw Error('HSL value is missing one or many arguments')

    const hueValue = (typeof h === 'number' && h >= 0 && h <= 1) ? h : undefined
    const saturationValue = (typeof s === 'number' && s >= 0 && s <= 1) ? s : undefined
    const lightnessValue = (typeof l === 'number' && l >= 0 && l <= 1) ? l : undefined

    if (typeof hueValue === 'undefined' || typeof saturationValue === 'undefined' || typeof lightnessValue === 'undefined')
      throw Error('HSL value supports only a number between 0 and 1')

    return [h, s, l]
  }
  catch(e) {
    console.error(e.toString())
  }
}

const hslPrototype = (h, s, l) => {
  let value = valueChecking(h, s, l)
  const format = 'hsl'

  return {
    ...api,
    format() {
      return format
    },
    set(h, s, l) {
      value = valueChecking(h, s, l)
      return this
    },
    get() {
      return value;
    },
    toString() {
      return `${this.format()}(${this.get().join(', ')})`
    }
  }
}

export default colorFactory(hslPrototype)