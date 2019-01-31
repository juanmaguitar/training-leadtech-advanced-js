//TIMES CALL A FUNCTION

function timescalled() {
  var counter = 0;
  return function() {
    return ++counter;
  };
}

const call = timescalled();

//SET AND GET PASSWORD

function password(pass) {
  return function() {
    return pass;
  };
}

const pass = password("pass");

//SUPER GREETER

function superGreeter(gretting){
  return function(city){
    return function(adj){
      return function(name){
        return `${gretting} ${name}! Welcome to ${city}, ${adj}.`
      }
    }
  }
}

//WORD COUNTER

function counter(acc, item){
  if(acc[item]) ++acc[item]
  else acc[item] = 1
  return acc
}

function wordCounter(text){
  text = text.replace("\n", ' ')
  text = text.split(" ")
  return text.reduce(counter, {})
}

