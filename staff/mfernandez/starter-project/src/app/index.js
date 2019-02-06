import sum from './sum'
import factoryLogger, { multiply, division } from './operations'

console.log(sum(2, 3))
console.log(multiply(2, 3))
console.log(division(2, 3))

factoryLogger('La ostia!')

console.log('hey!')
const name = 'miguel'
const city = 'barcelona'
const me = {
  name,
  city
}
console.log(me)
const age = 42
const alsoMe = { ...me, age: 42 }
console.log(alsoMe)
console.log(me == alsoMe) // eslint-disable-line eqeqeq
console.log(2 == '3')

var a = {
  hola: 'hola'
}
console.log(a['hola'])
