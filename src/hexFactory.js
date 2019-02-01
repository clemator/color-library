const api = require('./api')
const colorFactory = require('./colorFactory')
const authorizedValueList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const valueChecking = (v) => {
  try {
    const value = (typeof v === 'string' && (v.length === 3 || v.length === 6))
      ? v : undefined

    if (typeof value === 'undefined')
      throw Error('HEX value supports only 6 or 3 chars length')

    const checkValue = Array.from(value).find(val => authorizedValueList.indexOf(val) === -1)
    
    if (typeof checkValue !== 'undefined')
      throw Error(`HEX value ${checkValue} is invalid`)

    return value
  }
  catch(e) {
    console.error(e.toString())
  }
}

const hexPrototype = (hex) => {
  let value = valueChecking(hex)
  const format = 'hex'

  return {
    ...api,
    format() {
      return format
    },
    set(hexVal) {
      value = valueChecking(hexVal)
      return this
    },
    get() {
      return value;
    },
    toString() {
      return `#${this.get()}`
    }
  }
}

module.exports = colorFactory(hexPrototype)