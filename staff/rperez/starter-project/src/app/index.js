class List {
  constructor (...items) {
    this.items = items
  }

  add (number) {
    this.items[this.items.length] = number
  }
}

const list = new List(2, 3, 4)
list.add(2)

function howManyRequests () {
  var requests = 0
  return function () {
    return ++requests
  }
}

var requestsDone = howManyRequests()
requestsDone()

function password (password) {
  return function () {
    return password
  }
}

var passwordRead = password('123456')
passwordRead()

function superGreeter (greeting) {
  return function (city) {
    return function (treatment) {
      return function (friendName) {
        // return greeting + ' ' + friendName + '! Welcome to ' + city + ', ' + treatment + '.'
        return `${greeting} ${friendName}! Welcome to ${city}, ${treatment}.`
      }
    }
  }
}

superGreeter('Hello')('Istambul')('pal')('Rodrigo')

var text = "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."
function countWords (acc, word) {
  if (acc[word]) acc[word]++
  else acc[word] = 1
  return acc
}
var textToTreat = text.replace(',', '').replace('...', '').replace('.', '').toLowerCase
var motherfuckingArray = textToTreat.split(' ')
var result = motherfuckingArray.reduce(countWords())
console.log(result)
