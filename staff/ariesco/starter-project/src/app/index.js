const List = require('./List.js')
const closureCalls = require('./closureCalls.js').closureCalls
const closurePassword = require('./closurePassword.js').closurePassword
const superGreeter = require('./superGreeter.js').superGreeter

const me = { a: 1, b: 2 }
const alsoMe = { ...me, c: 3 }
console.log(alsoMe)

const list = new List(1, 2, 3)
console.log(list.add(4))

console.log('Closure Calls')
const calls = closureCalls()
console.log(calls())
console.log(calls())
console.log(calls())

console.log('Closure Password')
const pass = closurePassword('holaquetal')
console.log(pass())

console.log('Closure Frase')
console.log(superGreeter('Hi')('the jungle!')('we are playing games..')('Alfonso'))
