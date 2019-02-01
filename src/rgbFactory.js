const api = require('./api')

const rgbPrototype = (r, g, b) => {
  let value = [r, g, b]

  return {
    ...api,
    format: 'rgb',
    set(r, g, b) {
      value = [r, g, b]
      return this
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