const name = 'victor'
const city = 'barcelona'

const me = { name, city }

console.log(me)

const age = 29

const alsoMe = { ...me, age }

console.log(alsoMe)

console.log(me === alsoMe)
