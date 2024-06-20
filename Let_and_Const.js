// * Let and Const declarations are Hoisted. But, they are hoisted differently when compared
// * to var declarations.
// * These are in temporal dead zone for time-being.
// * Let and const declarations gives "reference error". if, you are trying to access before it is initalised.

// * console.log(b); -----> 100
// * console.log(a); -----> reference error.

let a = 10;
var b = 100;

// * Memory was allocated to var declarations and attached to global object.
// * But, let declarations also allocated with memory. They are in sperate memory space.
// * The time between hoisting of let variables and initializiation of it's variables is known as
// * Temporal Dead Zone.
// * When you try to access variables in Temporal Dead Zone, it leads to Reference error.
// * Before line number 9, variable a is in Temporal Dead Zone.

// * let a = 10;
// * let a = 100; or var a = 100;
// * It will leads to the "syntax error". Identifier 'a' is already declared.
// * we cannot redeclare the let variables in the same scope.
// * It's possible in var but not in let.

// * Const

// * which is similar to let. But, there is one difference in which const is more strict than let.

// * const p;
// * p=100;

// * const declarations without initalizations will leads to "Syntax Error".
// * Missing initalizer in const declaration.

// * const b=100;
// * b=1000;
// * It will leads to "Type Error"---> Assignment to constant variable.

// * There are 3 errors.
// * 1. Reference Error. ---> When JS tries to access variables declared with const and let before initalisation.
// * 2. Syntax Error. ---> If you are declaring a variable with const, but not initalizing the value.
// * 3. Type Error. ---> If you try to change the value of the variable which is declared with const.

// * Usage :-
// * * Use const, whenever a variable value won't change later. if not, use let.
// * * Our declarations and initalizations needs to move top of our code.
