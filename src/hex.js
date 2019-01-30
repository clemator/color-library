const methods = require('./methods')

const hexPrototype = (hex) => {
  let value = hex

  return {
    ...methods,
    format: 'hex',
    set(hexVal) {
      value = hexVal
    },
    get() {
      return value;
    },
    toString() {
      return `#${this.get()}`
    }
  }
}

module.exports = hexPrototype