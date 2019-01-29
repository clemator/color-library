import rgb from './src/rgb'

(function(window) {
  const colorFactory = type => {
    return (...val) => {
      return Object.create(type(...val))
    }
  }

  window.RGB = colorFactory(rgb)
})(window)