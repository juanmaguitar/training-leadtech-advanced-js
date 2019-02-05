function fizzBuzz (number) {
    let result = '';
    
    if (!(number % 3)) {
        result += 'Fizz';
    }

    if (!(number % 5)) {
        result += 'Buzz';
    }

    return result || number.toString();
}

function oneHandred(callBack) {
    const arrayNums = [];
    for(let i = 1; i <= 100; ++i) {
        arrayNums.push(callBack(i));
    }
    return arrayNums;
}