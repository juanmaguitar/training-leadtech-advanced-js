Function.prototype.apply()
Function.prototype.call()
Function.prototype.bind()

const o = {
	name: "juanma",
	city: "barcelona",
	greet: function(greeting) {
		return `${greeting} ${this.name} from ${this.city}`
	}
}

o.greet("Hi") // Hi juanma from barcelona
o.greet("Bye") // Bye juanma from barcelona

o.greet.apply({name: "paco", city: "madrid"}, ["Hola"])
o.greet.call({name: "paco", city: "madrid"}, "Hola")

var sayByeToLuis = o.greet.bind({name: "luis", city: "madrid"})
sayByeToLuis("Bye")



