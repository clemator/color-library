const methods = require('./methods')

const rgbPrototype = (r, g, b) => {
  let value = [r, g, b]

  return {
    ...methods,
    format: 'rgb',
    set(r, g, b) {
      value = [r, g, b]
    },
    get() {
      return value;
    },
    toString() {
      return `${this.format}(${this.get().join(', ')})`
    }
  }
}

module.exports = rgbPrototype