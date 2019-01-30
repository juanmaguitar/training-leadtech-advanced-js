console.log('hey!')
const name = 'miguel'
const city = 'barcelona'
const me = { name, city }
console.log(me)
const age = 42
const alsoMe = { ...me, age: 42 }
console.log(alsoMe)
console.log(me == alsoMe) // eslint-disable-line eqeqeq
console.log(2 == "3")
