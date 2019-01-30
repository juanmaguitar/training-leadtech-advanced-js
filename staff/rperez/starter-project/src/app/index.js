const name = 'raul'
const city = 'bcn'

const me = { name, city }

const age = 42

const alsoMe = { ...me, age }
console.log(me)
console.log(alsoMe)
