var a = [1,2,3]
a.length
a[0]
a[a.length-1]
a.push(5)

// Way 1
for (var i=0; i < a.length; i++) {
	console.log("the number is " + a[i])
}

// Way 2
a.forEach( item => console.log("the number is " + item) )

// Way 2
a.map( item => "the number is " + item ).forEach(console.log)




