function superGreeter(greeting) {
    return function (city) {
        return function (message) {
            return function(name) {
                return `${greeting}, ${name}! Welcome to ${city}, ${message}.`
            }
        }
    }
}

superGreeter('Hola')('Barcelona')('pisha')('Manuel')

const superGreeterLight = greeting => city => message => name => `${greeting}, ${name}! Welcome to ${city}, ${message}.`
