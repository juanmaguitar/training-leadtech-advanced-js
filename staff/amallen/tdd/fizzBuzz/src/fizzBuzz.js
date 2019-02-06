function fizzBuzz (num) {
    let result = "";
    if (num % 3 === 0 || num % 5 === 0) {
        if (num % 3 === 0) result += "Fizz";
        if (num % 5 === 0) result += "Buzz";
        return result;
    } else {
        return num;
    }
}