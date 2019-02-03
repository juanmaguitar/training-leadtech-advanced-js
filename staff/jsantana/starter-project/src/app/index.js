console.log('Hola hola')

// List exercise

class List {
  constructor (...values) {
    this.items = values
  }

  add (value) {
    this.items[this.items.length] = value
  }
}

var lista = new List(1, 2, 3, 4)
console.log(lista)

// Password exercise
function password (pwd) {
  return function () {
    return pwd
  }
}

password('1234')

// Super Greeter Exercise
function superGreeter (greeting) {
  return function (city) {
    return function (message) {
      return function (name) {
        return `${greeting}, ${name}! Welcome to ${city}, ${message}.`
      }
    }
  }
}

superGreeter('Hey')('Berlin')('old pal')('Hans')

// With arrow functions
// const superGreeter = greeting => city => message => name => `${greeting}, ${name}! Welcome to ${city}, ${message}.`
