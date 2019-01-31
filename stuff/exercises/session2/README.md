## Exercises session2 

### `howManyExecutions`
Create a function `howManyExecutions` that returns the number of times it has been modified

### `password`
Create a function `password` that sets a password and returns a functions that returns it. Once is set we cannot modify this password

### `superGreeter`
Create the function `superGreeter` that produces this result 
```
superGreeter('Hey')('Berlin')('old pal')('Hans')
//'Hey, Hans! Welcome to Berlin, old pal.'
­
hiParisBuddyGreeter = superGreeter('Hi')('Paris')('buddy');
helloTokyoGreeter = superGreeter('Hello')('Tokyo');
­
hiParisBuddyGreeter('Franz')
//'Hi, Franz! Welcome to Paris, buddy.'
helloTokyoGreeter('friend')
//[Function]
helloTokyoGreeter('friend')('Yuki')
//'Hello, Yuki! Welcome to Tokyo, friend.'
```