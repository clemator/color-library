import api from './api'
import colorFactory from './colorFactory'

const valueChecking = (r, g, b) => {
  try {
    if (typeof r === 'undefined' || typeof g === 'undefined' || typeof b === 'undefined')
      throw Error('RGB value is missing one or many arguments')

    const redValue = (typeof r === 'number' && r >= 0 && r <= 255) ? r : undefined
    const greenValue = (typeof g === 'number' && g >= 0 && g <= 255) ? g : undefined
    const blueValue = (typeof b === 'number' && b >= 0 && b <= 255) ? b : undefined

    if (typeof redValue === 'undefined' || typeof greenValue === 'undefined' || typeof blueValue === 'undefined')
      throw Error('RGB value supports only a number between 0 and 255')

    return [r, g, b]
  }
  catch(e) {
    console.error(e.toString())
  }
}

const rgbPrototype = (r, g, b) => {
  let value = valueChecking(r, g, b)
  const format = 'rgb'

  return {
    ...api,
    format() {
      return format
    },
    set(r, g, b) {
      value = valueChecking(r, g, b)
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

export default colorFactory(rgbPrototype)