// * Functions in Javascript.

// * Every Execution context maintains its own space.
// * Even, if that execution context is maintained by function
// * or it is the Global Execution context.
// * They are independent of each other.

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// * Whenever, you create an Execution context, a this is created with it.
// * Even for functional Execution context.
// * At global level, this points to global object i.e. window object.
// * this === window ---> true.
// * An empty file is the shortest javascript program
// * Anything which is not inside the function is in global space

var c = 20;
console.log(this.c); //20
console.log(c); //20
console.log(window.c); //20

// * All are same because the variable c is created in global space.

// * Undefined is a special keyword in Javascript.
// * Javascript allocates reserved memory i.e. undefiend, when the variables are created.
// * It is like a placeholder which is placced in memory for time-being until the variable
// * is assigned with some other value.

// * Not defined:-
// * When yo are trying to access the variable without declaring it gives reference error(Not defined).
// * console.log(y);
// * Now, we will get Uncaught Reference Error i.e. y is not defined
// * Basically, we get this error when memory allocation to that variable is not occured.
// * not defined means not allocated memory.

// * Javascript is loosely typed language.
// * which means it doesnot attaches its variables to specific datatypes.
var looselyTyped = 1;
console.log(looselyTyped);
looselyTyped = "string";
console.log(looselyTyped);
// * it is also known as weekly typed language.

// ! Never do this
// ! intialising undefined to any variable.
// ! var d = undefined;
