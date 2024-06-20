### Primitive Data Types:

1. **Number:** Represents numeric values.
   Example:

   ```javascript
   let num1 = 42;
   let num2 = 3.14;
   ```

2. **String:** Represents text.
   Example:

   ```javascript
   let str1 = "Hello,";
   let str2 = "world!";
   ```

3. **Boolean:** Represents true or false values.
   Example:

   ```javascript
   let isTrue = true;
   let isFalse = false;
   ```

4. **Undefined:** Represents a variable that has been declared but has not been assigned a value yet.
   Example:

   ```javascript
   let x;
   console.log(x); // Output: undefined
   ```

5. **Null:** Represents the intentional absence of any object value.
   Example:

   ```javascript
   let y = null;
   ```

6. **Symbol:** Represents a unique identifier.
   Example:
   ```javascript
   const sym1 = Symbol("foo");
   const sym2 = Symbol("foo");
   console.log(sym1 === sym2); // Output: false
   ```

### Reference Data Types:

1. **Object:** Represents a collection of key-value pairs.
   Example:

   ```javascript
   let person = {
     name: "John",
     age: 30,
     address: {
       city: "New York",
       country: "USA",
     },
   };
   ```

2. **Array:** Represents a list of elements.
   Example:

   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let fruits = ["apple", "banana", "orange"];
   ```

3. **Function:** Represents a block of reusable code.
   Example:

   ```javascript
   function greet(name) {
     console.log(`Hello, ${name}!`);
   }
   ```

4. **Map:** Represents a collection of key-value pairs with arbitrary keys.
   Example:

   ```javascript
   let myMap = new Map();
   myMap.set("key1", "value1");
   myMap.set("key2", "value2");
   ```

5. **Set:** Represents a collection of unique values.
   Example:

   ```javascript
   let mySet = new Set([1, 2, 3, 4, 5]);
   mySet.add(6);
   mySet.add(7);
   ```

### Basic Level:

1. **Question:** What are the primitive data types in JavaScript?
   **Answer:** The primitive data types in JavaScript are Number, String, Boolean, Undefined, Null, and Symbol.

2. **Question:** Explain the difference between null and undefined.
   **Answer:** Null represents the intentional absence of any object value, while Undefined represents a variable that has been declared but not assigned a value.

3. **Question:** Give an example of how to create an object in JavaScript.
   **Answer:**

   ```javascript
   let person = {
     name: "John",
     age: 30,
   };
   ```

4. **Question:** How do you declare an array in JavaScript?
   **Answer:**
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   ```

### Intermediate Level:

5. **Question:** What is the difference between the == and === operators in JavaScript?
   **Answer:** The == operator compares values after type conversion, while the === operator compares values without type conversion (strict equality).

6. **Question:** Explain the difference between an array and an object in JavaScript.
   **Answer:** An array is a special type of object used to store ordered collections of data, while an object is a collection of key-value pairs where keys are strings.

7. **Question:** How do you add a new key-value pair to an existing object in JavaScript?
   **Answer:**

   ```javascript
   let person = {
     name: "John",
     age: 30,
   };

   person.city = "New York";
   ```

### Advanced Level:

8. **Question:** What are Map and Set data structures in JavaScript? Provide an example of each.
   **Answer:**

   ```javascript
   // Map example
   let myMap = new Map();
   myMap.set("key1", "value1");
   myMap.set("key2", "value2");

   // Set example
   let mySet = new Set([1, 2, 3, 4, 5]);
   mySet.add(6);
   ```

9. **Question:** Explain the concept of closures in JavaScript and provide an example.
   **Answer:** Closures are functions that have access to the outer function's variables, even after the outer function has finished executing. Example:

   ```javascript
   function outerFunction() {
     let outerVariable = "Hello";
     return function innerFunction() {
       console.log(outerVariable);
     };
   }

   let myClosure = outerFunction();
   myClosure(); // Output: Hello
   ```

10. **Question:** How do you handle asynchronous operations in JavaScript?
    **Answer:** Asynchronous operations in JavaScript can be handled using callbacks, Promises, or async/await syntax. Each approach has its advantages and use cases.

These questions cover a range of topics related to data types and structures in JavaScript, from basic definitions to more advanced concepts like closures and asynchronous operations. Let me know if you need further explanations or additional questions!


InstanceOf operator
