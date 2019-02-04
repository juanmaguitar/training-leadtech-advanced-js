const closurePassword = function (pass) {
  return function () {
    return pass
  }
}

module.exports = { closurePassword }
