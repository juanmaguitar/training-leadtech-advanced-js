const name = 'Marc'
const city = 'Barcelona'

const me = { name, city }
const alsome = { ...me, age: 25 }

console.log(alsome)
