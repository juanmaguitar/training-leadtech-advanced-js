
function sum(a,b) { return a+b }
var sum = function(a,b) { return a+b }

// Arrow functions 

(arg1, arg2, ...) => expr
(arg1, arg2, ...) => { stmt1; stmt2; ... }
singleArg => expr
singleArg => { stmt1; stmt2; ... }

var self = this;
const button = document.getElementById('my-button')
button.addEventListener('click', function(event) {
  // this === button
  self.registerClick(event.target.id);
});


var self = this;
this.element.addEventListener('click', function(event) {
  this // => elemento provoca evento
  self // => objeto contenedor metodo
  self.registerClick(event.target.id);
});

this.element.addEventListener('click', (event) => {
  this.registerClick(event.target.id);
});


[1,3,4,5,6,7]
  .filter(function(n) { return n % 2 } )
  .map(function(n, i) { return n + i } );
// [1, 4, 7, 10]

[1,2,3,4,5,6,7].filter(n => n % 2).map((n, i) => n+i);


// --------------------

const me = {
	name: "juanma",
	msg: "Hello"
	sayHi: function() {
		return this.msg +  "I'm " + this.name
	}
}

apply call bind 

const sayBye = me.sayHi.bind({ msg: "Bye", name: "juanma"})
sayBye()

// --------

function sumPlus( condition ) {
	var a = 1
	
	if (condition) { 
		const b = 2
		b = 4
	//	return a +b
	}
	// else {
	// 	const b = 2 
	// 	return a*2 + b
	// }
	console.log(b)
	console.log(a)
}


var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  // i from 0 to 2
}
i; // 3
{
  var TEMPERATURE = 32;
  TEMPERATURE = 16;
  TEMPERATURE // 16
}
TEMPERATURE; // 16

/// --------

var arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  // i from 0 to 2
}
i; // ReferenceError: i is not defined!
{
  const TEMPERATURE = 32;
  TEMPERATURE = 16;
  TEMPERATURE; // 32
}
TEMPERATURE; // ReferenceError: TEMPERATURE is not defined!

``
""
''

const str = `string text`
const str = `string text line 1
 string text line 2`

const str = "string text line 1\nstring text line 2"

const name = "juanma"
const msg = `Hello I'm ${name}`


// ---------


var name = "juanma";
var getSuitableDrink = function(who) {
  return who === 'juanma' ? 'beer' : 'cocktail'
};

console.log( 'Hello, '+name+'!\nFancy a '+getSuitableDrink()+'?' );

// Hello, juanma!
// Fancy a beer?

// -------

var name = "juanma";
var getSuitableDrink = function(who) {
  return who === 'juanma' ? 'beer' : 'cocktail'
};

console.log( `Hello, ${ name }!
  Fancy a ${ getSuitableDrink() }?` );

const msg = "my name is 'juanma'"
const msg = 'my name is "juanma"'
const msg = "my name is \"juanma\""
const msg = `my name is "juanma"`

// ----------------

var a = "foo",
    b = 42,
    c = {};

function myMethod() {
    console.log('ooOoh!');
}

// Shorthand property names
var o = { a, b, c, myMethod, d: 4, name: "juanma" };

// Shorthand method name and dynamic property name
var o2 = {
  myMethod,
  ['myPropertyNum'+b]: 'bar',
  myOtherMethod() {
  	console.log("sdfsdfsd")
  }
  myOtherMethod: function() {
  	console.log("sdfsdfsd")
  },
  myOtherMethod: () => {
  	console.log("sdfsdfsd")
  }
}

// ------------------------


var messages = {
  get latest () {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1]
  },
  set current (str) {
    this.log[this.log.length] = str;
  },
  log: []
}

messages.current = "hey!";
messages.latest // hey!



const sumAll = (...numbers) => numbers.reduce( (acc, number) => acc + number, 0) 


// -----------

function f(x, y, z) {
  return x + y + z;
}

var arr = [1, 2, 3];
f(...arr) === 6; // true

[0, ...arr, 4, 5, 6, 7]; // [0, 1, 2, 3, 4, 5, 6, 7]
[0, arr, 4, 5, 6, 7]; // [0, [1, 2, 3], 4, 5, 6, 7]

// -------------

const name = "juanma"
const city = "barna"

var me = {name, city}

const age = 42
var alsoMe = {...me, age, name: "juan manuel"}

function sum(a=23,b=87) {
	return a+b
}

const sum = (a=23,b=87) => a+b

sum()
sum(1)
sum(1,3)
sum(1,3,3,5,2,4,2)

// -------------

var myArray = [1, 2, 4, 45, 3, 4];
const a = myArray[0]
const b = myArray[1]
const c = myArray[2]
const d = myArray[3]

const [a, b, c, d] = myArray


var [first, second, third, , fifth = 5] = [1, 2];

[second, first] = [first, second] // swap values

first // 2
second // 1


// ---------------------


var customer = {
  name: 'John',
  surname: 'Doe',
  dateOfBirth: {
    year: 1988
  }
};

var {dateOfBirth: {year}, surname, name, children} = customer;


function setConfig({ url = 'http://myhomepage.com', domain, hasAccess = true }, { }) {

	if (url) console.log(url)
	if (domain) console.log(domain)
	if (hasAccess) {
		// dfdsf
	}

}

setConfig({})
setConfig({ url: 'http:/sdsdsdsds' })



function addEventListener(event, listener) {

	listeners.push[listener] 
}

function triggerEvent() {
	listeners.forEach( listener => listener() )
}



myButton.addEventListener("click", function() {
	console.log("click1")
})
myButton.addEventListener("click", function() {
	console.log("click2")
})
myButton.addEventListener("click", function() {
	console.log("click3")
})



