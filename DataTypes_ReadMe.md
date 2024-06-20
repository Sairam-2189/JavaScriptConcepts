#### Primitives and Non Primitives :-

In JavaScript, data types can be categorized into two main groups: primitives and non-primitives (also known as reference types). Here's a breakdown of each:

1. **Primitives:**
   Primitives are immutable data types. Once they are created, their values cannot be changed.

   - **String**: Represents a sequence of characters, enclosed within single (''), double ("") or backticks (\`\`) quotes.
   - **Number**: Represents numeric values, including integers and floating-point numbers.
   - **Boolean**: Represents a logical entity and can have two values: true or false.
   - **Undefined**: Represents an uninitialized variable or missing value.
   - **Null**: Represents the intentional absence of any object value.
   - **Symbol** (added in ECMAScript 6): Represents a unique identifier.

   Example:

   ```javascript
   let str = "Hello";
   let num = 42;
   let bool = true;
   let undef = undefined;
   let n = null;
   let sym = Symbol("foo");
   ```

2. **Non-primitives (Reference Types):**
   Non-primitive data types are mutable and are manipulated by reference rather than by value. They are often more complex and can hold collections of data and functions.

   - **Object**: Represents a collection of key-value pairs (properties and methods).
   - **Array**: Represents an ordered collection of elements.
   - **Function**: Represents a callable object that can be invoked.
   - **Date**: Represents a specific moment in time.
   - **RegExp**: Represents a regular expression, used for pattern matching.
   - **Map, Set, WeakMap, WeakSet** (added in ECMAScript 6): Data structures for storing collections of data.

   Example:

   ```javascript
   let obj = { key: "value" };
   let arr = [1, 2, 3];
   function foo() {
     console.log("Hello");
   }
   let date = new Date();
   let regex = /pattern/;
   let map = new Map();
   ```

In JavaScript, when you manipulate primitive types, you manipulate the actual value. However, when you manipulate non-primitive types, you manipulate references to the value stored in memory.

Sure, let's provide examples along with their definitions:

1. **Map:**

   - **Definition:** `Map` is a collection of key-value pairs where each unique key maps to a specific value. It allows you to store and retrieve data based on keys.

   - **Example:**

     ```javascript
     // Creating a Map
     let myMap = new Map();

     // Adding key-value pairs to the Map
     myMap.set("name", "John");
     myMap.set("age", 30);

     // Retrieving values from the Map
     console.log(myMap.get("name")); // Output: John
     console.log(myMap.get("age")); // Output: 30
     ```

2. **Set:**

   - **Definition:** `Set` is a collection of unique elements where each element occurs only once. It allows you to store distinct values of any data type.

   - **Example:**

     ```javascript
     // Creating a Set
     let mySet = new Set();

     // Adding elements to the Set
     mySet.add(1);
     mySet.add(2);
     mySet.add(3);

     // Checking if an element exists in the Set
     console.log(mySet.has(2)); // Output: true

     // Iterating over the Set
     mySet.forEach((item) => {
       console.log(item);
     });
     // Output:
     // 1
     // 2
     // 3
     ```

3. **WeakMap:**

   - **Definition:** `WeakMap` is a collection of key-value pairs where the keys are weakly referenced. If there are no other references to the key, it can be garbage collected.

   - **Example:**

     ```javascript
     // Creating a WeakMap
     let weakMap = new WeakMap();

     // Creating object keys
     let key1 = {};
     let key2 = {};

     // Setting key-value pairs in the WeakMap
     weakMap.set(key1, "value associated with key1");
     weakMap.set(key2, "value associated with key2");

     // Getting values from the WeakMap
     console.log(weakMap.get(key1)); // Output: value associated with key1
     ```

4. **WeakSet:**

   - **Definition:** `WeakSet` is a collection of objects where each object occurs only once and is weakly referenced. If there are no other references to an object in the WeakSet, it can be garbage collected.

   - **Example:**

     ```javascript
     // Creating a WeakSet
     let weakSet = new WeakSet();

     // Creating object values
     let obj1 = {};
     let obj2 = {};

     // Adding objects to the WeakSet
     weakSet.add(obj1);
     weakSet.add(obj2);

     // Checking if an object exists in the WeakSet
     console.log(weakSet.has(obj1)); // Output: true
     ```

These examples demonstrate the usage and characteristics of `Map`, `Set`, `WeakMap`, and `WeakSet` in JavaScript. Each data structure has its own unique features and use cases, catering to different scenarios in programming.
