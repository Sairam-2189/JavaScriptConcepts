### Understanding Callbacks

**Definition**: A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

### Basic Concepts

1. **Synchronous Callbacks**: These are executed immediately within the function they are passed to.
2. **Asynchronous Callbacks**: These are executed at a later time, usually after some operation completes (like an API call, a timer, etc.).

### Examples

#### Synchronous Callback

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
// Output:
// Hello John
// Goodbye!
```

#### Asynchronous Callback

```javascript
function fetchData(callback) {
  setTimeout(function () {
    console.log("Data fetched");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);
// Output after 2 seconds:
// Data fetched
// Processing data
```

### How to use callbacks in Basic to Advanced level

#### Basic Level

1. **What is a callback function in JavaScript?**

   - **Answer**: A callback function is a function passed into another function as an argument, which is then executed inside the outer function to complete some kind of routine or action.

2. **Write a simple example of a synchronous callback.**

   - **Example**:

   ```javascript
   function displayMessage(message) {
     console.log(message);
   }

   function getMessage(callback) {
     const message = "Hello, this is a message!";
     callback(message);
   }

   getMessage(displayMessage);
   // Output: Hello, this is a message!
   ```

3. **Explain the difference between synchronous and asynchronous callbacks.**
   - **Answer**: Synchronous callbacks are executed immediately within the function they are passed to, while asynchronous callbacks are executed at a later time, usually after some operation completes, such as a setTimeout, API call, or event listener.

#### Medium Level

4. **What will be the output of the following code? Explain why.**

   ```javascript
   function first() {
     console.log("First");
   }

   function second() {
     console.log("Second");
   }

   function third() {
     console.log("Third");
   }

   first();
   setTimeout(second, 0);
   third();
   ```

   - **Expected Output**:
     ```
     First
     Third
     Second
     ```
   - **Explanation**: `first()` is executed and logs 'First'. `setTimeout(second, 0)` schedules `second()` to run after 0 milliseconds, but it will still be placed in the event queue and will run after the current execution stack is clear. `third()` is executed and logs 'Third'. Finally, `second()` runs and logs 'Second'.

5. **How do you handle errors in asynchronous callbacks?**

   - **Answer**: Errors in asynchronous callbacks can be handled by passing an error-first callback function. This convention allows the first argument to be an error object (if any), and the subsequent arguments are the results.

   ```javascript
   function fetchData(callback) {
     setTimeout(function () {
       const error = false; // Change to true to simulate an error
       const data = "Some data";

       if (error) {
         callback("Error fetching data", null);
       } else {
         callback(null, data);
       }
     }, 2000);
   }

   function processData(error, data) {
     if (error) {
       console.error(error);
     } else {
       console.log(data);
     }
   }

   fetchData(processData);
   // Output: Some data
   ```

6. **Write a function `repeat` that takes a string and a callback, and calls the callback with the string repeated 3 times.**

   - **Example**:

   ```javascript
   function repeat(str, callback) {
     const repeatedStr = str.repeat(3);
     callback(repeatedStr);
   }

   function displayRepeatedString(str) {
     console.log(str);
   }

   repeat("Hello! ", displayRepeatedString);
   // Output: Hello! Hello! Hello!
   ```

#### Advanced Level

7. **What will be the output of the following code involving nested callbacks? Explain why.**

   ```javascript
   function first(callback) {
     setTimeout(function () {
       console.log("First");
       callback();
     }, 1000);
   }

   function second(callback) {
     setTimeout(function () {
       console.log("Second");
       callback();
     }, 500);
   }

   function third() {
     console.log("Third");
   }

   first(function () {
     second(third);
   });
   ```

   - **Expected Output**:
     ```
     First
     Second
     Third
     ```
   - **Explanation**: `first()` runs and after 1 second logs 'First' and calls the callback `second()`. `second()` runs and after 0.5 seconds logs 'Second' and calls the callback `third()`. Finally, `third()` logs 'Third'.

8. **Explain how to avoid callback hell with an example.**

   - **Answer**: Callback hell can be avoided by using named functions, Promises, or async/await.

   **Using Named Functions**:

   ```javascript
   function fetchData(callback) {
     setTimeout(function () {
       callback(null, "Data fetched");
     }, 1000);
   }

   function processData(callback) {
     setTimeout(function () {
       callback(null, "Data processed");
     }, 1000);
   }

   function displayData(data) {
     console.log(data);
   }

   function handleFetchData(error, data) {
     if (error) {
       console.error(error);
     } else {
       console.log(data);
       processData(handleProcessData);
     }
   }

   function handleProcessData(error, data) {
     if (error) {
       console.error(error);
     } else {
       displayData(data);
     }
   }

   fetchData(handleFetchData);
   ```

   **Using Promises**:

   ```javascript
   function fetchData() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve("Data fetched");
       }, 1000);
     });
   }

   function processData(data) {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(data + " and processed");
       }, 1000);
     });
   }

   fetchData()
     .then((data) => {
       console.log(data);
       return processData(data);
     })
     .then((data) => {
       console.log(data);
     })
     .catch((error) => {
       console.error(error);
     });
   ```

   **Using async/await**:

   ```javascript
   async function fetchData() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve("Data fetched");
       }, 1000);
     });
   }

   async function processData(data) {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(data + " and processed");
       }, 1000);
     });
   }

   async function main() {
     try {
       const data = await fetchData();
       console.log(data);
       const processedData = await processData(data);
       console.log(processedData);
     } catch (error) {
       console.error(error);
     }
   }

   main();
   ```

9. **What are the potential issues with using callbacks in JavaScript? How can these issues be mitigated?**
   - **Answer**:
     - **Callback Hell**: Deeply nested callbacks can become hard to read and maintain.
       - **Solution**: Use named functions, Promises, or async/await.
     - **Error Handling**: Managing errors across multiple asynchronous operations can be complex.
       - **Solution**: Use error-first callback conventions, or better yet, use Promises and `try/catch` with async/await.
     - **Inversion of Control**: Callbacks can lead to situations where the callback function’s behavior is controlled by the library function it is passed to.
       - **Solution**: Ensure clear documentation and understanding of how the callback will be used, or prefer using Promises for better control.

### Summary

- **Basic Level**: Understanding what callbacks are, simple synchronous and asynchronous examples.
- **Medium Level**: Handling asynchronous callbacks, avoiding common pitfalls, practical use cases.
- **Advanced Level**: Nested callbacks, avoiding callback hell, advanced error handling, understanding potential issues and their solutions.
