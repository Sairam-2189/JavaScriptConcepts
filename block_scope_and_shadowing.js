// * A block is defined by this curly braces "{}".
// * Block is also known as compound statement.
// * Block is also used to combine multiple statements into one group.

// ? Need of block in Javascript ?
// * We group multiple statements together in a block.
// * So that we can use it where javascript expects one statement.

// * Example :-

// * For Example, if(true) ---> it gives us a syntax error Unexpected end of input.
// * if expects a statement here.
// * if (true) console.log("a"); ---> valid
// * if you want to write multiple statements, by grouping them into block is possible.
// * if (true) {
// *    var a = 0;
// *    console.log(a);
// * }

{
  // * Block scope means what all variables and functions we can access in this block.
  // * will check how hoisting works inside the block.
  var a = 10;
  let b = 20;
  const c = 30;
  // * let and const declarations "b" and "c" are in block scope.
  // * var declarations "a" are in block scope.
  console.log(a); // ----> 10
  console.log(b); // ----> 20
  console.log(c); // ----> 30
}
// ! let and const declarations cannot access outside of the block.
// ? var declarations can be accessed outside of the block.
// console.log(a); // ----> 10
// console.log(b); // ! ----> Reference Error "b" is not defined.
// console.log(c); // ! ----> Reference Error "b" is not defined.

// * Shadowing in Javascript :-

// * If you have a same named variable outside this block which is declared by let and const.
// * The variable declared in the block shadows the variable outside the block.
// * Example follows:-

let bb = 10;
{
  var aa = 1;
  let bb = 2;
  const cc = 3;
  console.log(aa); // 1
  console.log(bb); // 2
  console.log(cc); // 3
}
console.log(bb); // 10

// * variable "bb" in outside the block is shadowed by variable "bb" inside the block
// * when we are trying to access the variable bb inside the block.

// ! Illeagal Shadowing :-
// * Shadowing a let variable with var variable inside the block leads to Illeagal Shadowing.
// * which leads to Syntax error as the variable already declared.
// * If a variable is shadowing anything, it should not cross it's boundary "{}".
// * Invalid shadowing:-

let inValidA = 10;
{
  var inValid2 = 100;
}

// * var has function scope.
// * Valid shadowing :-

let validA = 10;
function fn1() {
  var valid2 = 100;
}

// * Block Scope also follows lexical scope.

// * Arrow Functions :- 
// * Scope rules which work in functions are exactly same as in the arrow functions.
