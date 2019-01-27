import {sum} from './helpers'

const result = sum(1, 2)
console.log(result)

const name = 'juanma'
const age = 42

const me = {name, age}
console.log(me)

const city = 'barcelona'
const alsoMe = {...me, city}

console.log(alsoMe)

const obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
}

const baz = obj?.foo?.bar?.baz // 42
const buz = obj?.a?.b?.c // 42

console.log(baz)
console.log({...obj})
console.log(buz)
