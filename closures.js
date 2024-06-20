// * Closures

// * Function bundled along with it's Lexical scope forms a closure.
// * Basic Example :-

function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
z(); // *  ---> 10

// * Functions when they return from other function remembers it's lexical scope.
// * y forms a closure along with scope of x.

// * Uses of Closures :-
// * Module Design Pattern
// * Function Currying
// * Memoize
// * Maintaining state in async world
// * Functions like once
// * setTimeouts

// * Examples :-

function fn1() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 1000);
  console.log("random text");
}

x(); // ? 1 after 1 second.

// * Output :-
// * random text
// * 1 after 1 second
// * The function inside the setTimeout forms a closure with the variables in fn1 function.

// * How to print from 1 to 5 after consecutive 1 second ?

// ! Not to do like this

function fn2() {
  for (var index = 0; index <= 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
}

// * This will result in the below output - it prints 6 after every 1 second.
// * 6,6,6,6,6 --> This is because of function inside setTimeout remembers the reference
// * of the variable index.
// * For fixing this, we can do 2 things
// * 1. Using let
// * 2. Using var and wrapping setTimeout inside a function
// * Both results in creating a new copy of the variable.

// ? TO-DO

function fn2() {
  for (let index = 0; index <= 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
}

// * 1,2,3,4,5 after every 1 second

function fn3() {
  for (var index = 0; index <= 5; index++) {
    function fn4() {
      setTimeout(() => {
        console.log(index);
      }, index * 1000);
    }
    fn4();
  }
}

// * 1,2,3,4,5 after every 1 second
