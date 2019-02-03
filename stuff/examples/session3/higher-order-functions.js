function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

[2, 5, , 9].forEach(logArrayElements);

a[0] = 2
a[1] = 5
a[3] = 9

// ----------------


function double(element, index, array) {
  //console.log('a[' + index + '] = ' + element);
  return element * 2;
}

// Note elision, there is no member at 2 so it isn't visited
>>> [2, 5, 3, 9].map(double);
[4, 10, 6, 18]


// ------------------

function isMoreThan5(element, index, array) {
  //console.log('a[' + index + '] = ' + element);
  return element >= 5;
}

>>> var groupMoreThan5 = [2, 5, 3, 9].filter(isMoreThan5);
>>> groupMoreThan5
[5, 9]

// -------------------


function isMoreThan5(element, index, array) {
  //console.log('a[' + index + '] = ' + element);
  return element >= 5;
}

>>> console.log ( [2, 5, 3, 9].every(isMoreThan5) )
false
>>> console.log ( [22, 5, 33, 9].every(isMoreThan5) )
true

// ---------------------

function isMoreThan5(element /*, index, array */) {
  //console.log('a[' + index + '] = ' + element);
  return element >= 5;
}

>>> console.log ( [2, 5, 3, 9].some(isMoreThan5) )
true
>>> console.log ( [1, 2, 3, 4].some(isMoreThan5) )
false

// ------------------------

function sumElements(acc, current, index, array ) {
  //console.log(acc + ' | ' + current + ' | ' + index + ' | ' + array);
  return acc + current;
};

// Note elision, there is no member at 2 so it isn't visited
>>> [2, 5, 3, 9].reduce(sumElements, 0);
19







