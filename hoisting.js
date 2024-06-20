// *NORMAL LOGGING BEFORE INITALISATION
// console.log(x); // !UNDEFINED
// console.log(getName); // ?WHOLE FUNCTION
// getName(); // ? function output

/*
 * HOISTING IS A PHENOMENA IN JAVASCRIPT BY WHICH YOU CAN ACCESS THE VARIABLES
 * AND FUNCTIONS BEFORE INITALISATION WITHOUT GETTING ANY ERROR.
 */

var x = 7;
function getName() {
  console.log("function output");
}

// *NORMAL LOGGING AFTER INITALISATION
console.log(x); // * 7
console.log(getName); // * WHOLE FUNCTION
getName(); // ? function output
