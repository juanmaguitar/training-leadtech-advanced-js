console.log('Hola')

var name = 'Jorge'
var city = 'Barcelona'

const me = { name, city }

const alsoMe = { ...me, age: 25 }

console.log(alsoMe)

if (alsoMe) {
  console.log('hola')
}
