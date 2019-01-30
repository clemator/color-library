const colorFactory = type => {
  return (...val) => {
    return Object.create(type(...val))
  }
}

module.exports = colorFactory