/* eslint-disable */
var name = 'Alex'
var city = 'BCN'
var age = 34

const me = { name, city } // eslint-disable-line

const alsoMe = { ...me, age }

console.log(alsoMe)
