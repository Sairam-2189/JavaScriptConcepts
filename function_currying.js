// * Function Currying

// * Currying means converting multi-argument functions to single-argument function.

// * Currying is a transformation of functions that translates a function from
// * callable as f(a, b, c) into callable as f(a)(b)(c).

// * There are 2 ways for currying functions
// * 1) Using Bind method
// * 2) Using Closures concept

// * Example using Bind method:-

function multiply(x, y) {
  console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

// * When we call this bind method, it gives exactly a copy of multiply method
// * and we can invoke it later.

// * above function multiplyByTwo behaves same as below
// * function multiplyByTwo(y){
// *    let x=2;
// *    console.log(x*y);
// * }

// ? What happens when we pass another parameter to multiplyByTwo function ?
// * let multiplyByTwo = multiply.bind(this, 2, 3);
// * multiplyByTwo(5);
// * this 3 will be eventually getting stored in y.
// * so, it will ignore 5 what we are passing to multiByTwo function.
// * result would be 6

// ? What happens if we don't pass any parameter while calling bind method and if we pass 2 parameters
// ? directly to multiplyByTwo function ?
// * let multiplyByTwo = multiply.bind(this);
// * multiplyByTwo(2,3);
// * result would be 6

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// * We make a copy of bind method, we create more methods out of it by presetting some
// * arguments inside the function like how we preset the x as 2 here.

// * Example using Closures concept

function multiplyMethodByClosures(x) {
  return function (y) {
    console.log(x * y);
  };
}
let multiByTwoMethodByClosures = multiplyMethodByClosures(2);
multiByTwoMethodByClosures(3);

// * This is how you see a function with functional programming that tend to
// * be more expressions instead of imperative step by step

// ! Credits :-
// ? 1. https://www.youtube.com/watch?v=I4MebkHvj8g
// ? 2. https://www.youtube.com/watch?v=vQcCNpuaJO8
