const api = require('./api')

const hexPrototype = (hex) => {
  let value = hex

  return {
    ...api,
    format: 'hex',
    set(hexVal) {
      value = hexVal
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

module.exports = hexPrototype