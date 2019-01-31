const closureCalls = function () {
  let numCalls = 0
  return function () {
    return ++numCalls
  }
}

module.exports = { closureCalls }
