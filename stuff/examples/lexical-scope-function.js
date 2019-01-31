var a = 123;
function f() {
  alert(a);
  var a = 1;
  alert(a);
}

f();