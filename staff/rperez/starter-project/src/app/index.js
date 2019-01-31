class List {
  constructor (...items) {
    this.items = items
  }

  add (number) {
    this.items[this.items.length] = number
  }
}

const list = new List(2, 3, 4)
list.add(2)

function howManyRequests () {
  var requests = 0
  return function () {
    return ++requests
  }
}

var requestsDone = howManyRequests()
requestsDone()
requestsDone()

function password (password) {
  return function () {
    return password
  }
}

var passwordRead = password('123456')
passwordRead()
passwordRead()
