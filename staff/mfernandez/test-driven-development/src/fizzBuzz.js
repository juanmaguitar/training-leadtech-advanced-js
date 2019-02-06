function fizzBuzz(a) {
    if (typeof(a) === "number") {
        if (a%3 === 0 && a%5 === 0) return "FizzBuzz"
        if (a%3 === 0) return "Fizz" 
        if (a%5 === 0) return "Buzz" 
        return a
    } else {
        result = []
        for (var i=1; i <= 100; i++) {
            result.push(fizzBuzz(i))
        }
        return result
    }
}