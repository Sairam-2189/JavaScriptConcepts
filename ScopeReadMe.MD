### Variables in JavaScript

#### 1. var

- **Scope**: Function-scoped.
- **Re-declaration**: Allowed within the same scope.
- **Hoisting**: Hoisted to the top of their scope and initialized with `undefined`.
- **Example**:
  ```javascript
  function exampleVar() {
    console.log(x); // undefined
    var x = 10;
    console.log(x); // 10
  }
  exampleVar();
  ```

#### 2. let

- **Scope**: Block-scoped.
- **Re-declaration**: Not allowed within the same block scope.
- **Hoisting**: Hoisted to the top of their block but not initialized.
- **Example**:
  ```javascript
  function exampleLet() {
    console.log(x); // ReferenceError
    let x = 10;
    console.log(x); // 10
  }
  exampleLet();
  ```

#### 3. const

- **Scope**: Block-scoped.
- **Re-declaration**: Not allowed within the same block scope.
- **Initialization**: Must be initialized at the time of declaration.
- **Hoisting**: Hoisted to the top of their block but not initialized.
- **Example**:
  ```javascript
  function exampleConst() {
    console.log(x); // ReferenceError
    const x = 10;
    console.log(x); // 10
  }
  exampleConst();
  ```

### Scope in JavaScript

#### 1. Global Scope

- Variables declared outside any function or block are in the global scope.
- Accessible from anywhere in the code.
- Example:

  ```javascript
  let globalVar = "I'm global";

  function showGlobalVar() {
    console.log(globalVar); // I'm global
  }

  showGlobalVar();
  console.log(globalVar); // I'm global
  ```

#### 2. Function Scope

- Variables declared inside a function are local to that function.
- Not accessible outside the function.
- Example:

  ```javascript
  function exampleFunctionScope() {
    var localVar = "I'm local";
    console.log(localVar); // I'm local
  }

  exampleFunctionScope();
  console.log(localVar); // ReferenceError
  ```

#### 3. Block Scope

- Variables declared with `let` or `const` inside a block `{}` are block-scoped.
- Accessible only within that block.
- Example:
  ```javascript
  {
    let blockScopedVar = "I'm block scoped";
    console.log(blockScopedVar); // I'm block scoped
  }
  console.log(blockScopedVar); // ReferenceError
  ```

### Hoisting in JavaScript

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope (global or function scope) during the compilation phase. This means that variables and functions can be used before they are declared in the code.

#### Variable Hoisting

- Variables declared with `var` are hoisted and initialized with `undefined`.
- Variables declared with `let` and `const` are hoisted but not initialized.
- Example with `var`:

  ```javascript
  console.log(hoistedVar); // undefined
  var hoistedVar = "I'm hoisted";
  console.log(hoistedVar); // I'm hoisted
  ```

- Example with `let` and `const`:

  ```javascript
  console.log(hoistedLet); // ReferenceError
  let hoistedLet = "I'm hoisted";
  console.log(hoistedLet); // I'm hoisted

  console.log(hoistedConst); // ReferenceError
  const hoistedConst = "I'm hoisted";
  console.log(hoistedConst); // I'm hoisted
  ```

#### Function Hoisting

- Function declarations are hoisted to the top of their scope.
- Example:

  ```javascript
  hoistedFunction(); // I'm hoisted

  function hoistedFunction() {
    console.log("I'm hoisted");
  }
  ```

- Function expressions are not hoisted.

  ```javascript
  hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function

  var hoistedFunctionExpression = function () {
    console.log("I'm not hoisted");
  };
  ```

### Questions and Answers

#### Basic Level

**1. What is hoisting in JavaScript?**

- **Answer**: Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Only the declarations are hoisted, not the initializations.

**2. Explain the difference between `var`, `let`, and `const`.**

- **Answer**:
  - `var` is function-scoped, can be re-declared and updated, and is hoisted with an initial value of `undefined`.
  - `let` is block-scoped, cannot be re-declared in the same scope but can be updated, and is hoisted but not initialized.
  - `const` is block-scoped, cannot be re-declared or updated, must be initialized at the time of declaration, and is hoisted but not initialized.

**3. What are the different types of scopes in JavaScript?**

- **Answer**: Global scope, function scope, and block scope.

#### Intermediate Level

**4. What is the output of the following code and why?**

```javascript
console.log(a);
var a = 5;
console.log(a);

console.log(b);
let b = 10;
console.log(b);
```

- **Answer**:
  ```
  undefined
  5
  ReferenceError: b is not defined
  ```
  `var a` is hoisted, so the first `console.log(a)` prints `undefined`. `let b` is hoisted but not initialized, so `console.log(b)` throws a `ReferenceError`.

**5. How do `let` and `const` differ from `var` in terms of scoping?**

- **Answer**: `let` and `const` are block-scoped, meaning they are only accessible within the block they are declared in. `var` is function-scoped, meaning it is accessible throughout the entire function it is declared in.

**6. What is the temporal dead zone (TDZ) in JavaScript?**

- **Answer**: The temporal dead zone (TDZ) is the period between the entering of a scope where a variable is declared (with `let` or `const`) and the actual declaration and initialization of the variable. Accessing the variable in this zone results in a `ReferenceError`.

#### Advanced Level

**7. What is the output of the following code and why?**

```javascript
function foo() {
  console.log(bar); // ReferenceError
  let bar = "Hello";
  console.log(bar); // Hello
}
foo();
```

- **Answer**: The first `console.log(bar)` will throw a `ReferenceError` because `bar` is in the temporal dead zone. The second `console.log(bar)` will print "Hello" because `bar` has been initialized.

**8. How does hoisting affect function expressions and function declarations differently?**

- **Answer**: Function declarations are hoisted to the top of their scope, meaning they can be called before they are defined. Function expressions, however, are not hoisted, so they cannot be called before they are assigned.

**9. What is the output of the following code and why?**

```javascript
var x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x);
```

- **Answer**: The output will be `1undefined`. The condition `if (function f() {})` evaluates to `true` because function declarations are hoisted and thus exist in the scope. However, `typeof f` returns `undefined` because `f` is not accessible in the global scope; it is scoped to the `if` block.

**10. Explain how variable shadowing works in JavaScript with an example.**

- **Answer**: Variable shadowing occurs when a variable declared within a certain scope (inner scope) has the same name as a variable declared in an outer scope. The inner variable shadows the outer one.

  ```javascript
  let x = "global";

  function shadowingExample() {
    let x = "local";
    console.log(x); // local
  }

  shadowingExample();
  console.log(x); // global
  ```
