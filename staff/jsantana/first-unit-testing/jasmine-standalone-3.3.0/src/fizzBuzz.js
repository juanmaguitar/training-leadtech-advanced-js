function fizzBuzz(n){
    if(n % 3 === 0){
        if(n  % 5 === 0){
            return "FizzBuzz"
        }
        return "Fizz"
    }
    if( n % 5 === 0){
        return "Buzz"
    }
    return n
}

function fizzBuzzArray(a){
    var result = new Array();
    a.forEach(element => {
        result.push(fizzBuzz(element))
    });
    return result
}