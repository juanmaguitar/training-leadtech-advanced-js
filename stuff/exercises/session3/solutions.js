function howManyExecutions() {
	var counter = 0
	return function() {
		return ++counter
	}
}

var myFn = howManyExecutions()
myFn() // 1
myFn() // 2
myFn() // 3

// ------------------------------------

function password(password) {
	return function() {
		return password
	}
}

var myPassword = password('1234')
myPassword() // 1234

var mathy = function(x) {
    return function (y) {
        return function (z) {
            return (x / y) - z;
        }
    }
}

const mathy = x => y => z => (x / y) - z
mathy(4)(3)(2)

const superGreeter = greeting => city => adjective => name => 
	`${greeting}, ${name}! Welcome to ${city}, ${adjective}` 



