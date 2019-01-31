function doSomething( ) {
	if (false) {
		var a = 5
	}
	console.log(a) // undefined
}

function doSomethingElse( ) {
	console.log(a) // Reference Error
}


function f(){ return 1; }
var f = function(){ return 1; }
var f = () => 1


>>> function invoke_and_add(a, b){ return a() + b(); }


>>> function one() { return 1; }
>>> function two() { return 2; }

>>> invoke_and_add(one, two);
3
>>> invoke_and_add(one, function(){return 7;})
8


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






