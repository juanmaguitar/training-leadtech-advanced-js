const List = require('./List.js')

const me = { a: 1, b: 2 }
const alsoMe = { ...me, c: 3 }
console.log(alsoMe)

const list = new List(1, 2, 3)
console.log(list.add(4))
