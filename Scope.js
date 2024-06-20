// * Scope in Javascript is directly related to Lexical Environment.
// * Scope means where you can access a specific variable or function in our code.
// * Two types :-
// * What is the scope of variable scopeA ?
// * Is variable scopeA inside the scope of a function ?
// * Lexical Environment :-
// * It means Local memory along with the lexical environment of parent.
// * lexical term means in hirearchy or in sequence.
// * function c is lexically sitting inside the function a.
// * function a is lexically inside the global scope.
// * Whenever an execution context is created, we will get access to lexical environment of it's parent.
// * Scope chain is nothing but the chain of lexical environments and the parent references.
// * It defines whether a vairable or function is present inside a scope or not.

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();
