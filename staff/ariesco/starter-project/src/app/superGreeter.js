const superGreeter = function (hi) {
  return function (locate) {
    return function (who) {
      return function (name) {
        return `${hi}, ${name}! Welcome to ${locate}, ${who}.`
      }
    }
  }
}

module.exports = { superGreeter }
