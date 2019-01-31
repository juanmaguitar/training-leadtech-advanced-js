var  o = { name: "juanma" }
var o = {}
o.name = "juanma"

function factory() {
	return { name: "juanma" }
}

function factory(name ) {
	return { name }
}

const me = factory("juanma")

function Person(name ) {
	this.name
}

Person.prototype.sayHi = function() { console.log("hi!") }

const me = new Person("juanma")



class Person {
	constructor(name) {
		this.name
	}
	sayHi() { console.log("hi!") }
}


function Person(name) {
	return name
}

Person.prototype.sayHi = function() { console.log("hi!") }

const me = new Person("juanma")
me.sayHi()

-----

function handleObject(o) {
	const temporalObject = JSON.parse(JSON.stringify(o))
	temporalObject.name = "paco"
  	return temporalObject
}

function handleObject(o) {
	const temporalObject = Object.assign({},o)
	temporalObject.name = "paco"
  	return temporalObject
}

function handleObject(o) {
	const name = "paco"
  	return {...o, name}
}

JSON.stringify(b) === JSON.stringify({name: "paco", city: "barcelona"})



const humanMethods = {
  sayHi: () => console.log('Hi!'),
  sleep: () => console.log('zzzzz')
}

const a = Object.create(humanMethods)
const b = Object.create(humanMethods)
const c = Object.create(humanMethods)

function sum(a,b) { return a+b}

const sum = function(a,b) {return a+b}


var a = 1;
function f(){
  var b = 1;
  function n() {
    var c = 3;
  }
}


>>> function f1(){ var a = 1; return f2(); }

>>> function f2(){ return a; }


>>> f1();
a is not defined
>>> var a = 5;
>>> f1();
5
>>> a = 55;
>>> f1();
55
>>> delete a;
true
>>> f1();
a is not defined



var a = 123;
function f() {

  alert(a);
  var a = 1;
  alert(a);
}
f();


function a() {
	var counter = 0
	return function() {
		return ++counter
	}
}

var counter = a()
counter() // 1
counter() // 2
counter() // 3

counter = a()
counter() // 1
counter() // 2
counter() // 3





