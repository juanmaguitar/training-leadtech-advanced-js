var o = {
	name: "juanma",
	city: "barna"
}

var o = {}
o.name = "juanma"
o.city = "barna"

// ----------------

var factory = () => ({
	name: "juanma",
	city: "barna"
})

var o = factory()

// ----------------

var factory = (name, city) => ({
	name: name,
	city: city
})

var o = factory("juanma", "barcelona")


// ----------------

var factory = (name, city) => ({name, city})
var o = factory("juanma", "barcelona")

// ----------------

var Person = function(name, city) {
	this.name = name
	this.city = city
}

function Car(model) {
	this.model = model
}

Person.prototype.sayHi = () => console.log("Hi!")

var me = new Person("juanma", "barcelona")
me.name // juanma
me.sayHi // ????

// ----------------

var Person = function(name, city) {
	this.name = name
	this.city = city
}

Person.prototype.sayHi = () => console.log("Hi!")


class Person {
	constructor(name, city) {
		this.name = name
		this.city = city	
		this.sayHi = () => console.log("Hi!")	
	}

	sayHi () {
		console.log("Hello " + this.name)
	}
}







