const closurePassword = function (pass) {
  let password = pass
  return function () {
    return password
  }
}

module.exports = { closurePassword }
