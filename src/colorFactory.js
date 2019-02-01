const colorFactory = type => {
  return (...val) => {
    return Object.create(type(...val))
  }
}

export default colorFactory