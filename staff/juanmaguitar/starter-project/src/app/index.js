const name = 'juanma'
const city = 'barcelona'
const me = { name, city }

console.log(me)

const age = 42
const alsoMe = { ...me, age }
console.log(alsoMe)

console.log(me === alsoMe)

const anotherMe = me

console.log(me === anotherMe)

if (me === 2) {
  console.log('AAAAA')
} else {
  console.log('BBBBB')
}
