Sure, let's go through some interview questions on JavaScript modules, ranging from basic to advanced levels.

### Basic Level Questions

**Question 1: What are JavaScript modules?**
**Answer:**
JavaScript modules are reusable pieces of code that encapsulate related functionality. They help in organizing code into smaller, manageable pieces, making it easier to maintain and reuse across different parts of an application. Modules can be imported and exported between different files.

**Question 2: How do you export a function from a module in ES6?**
**Answer:**
You can export a function using the `export` keyword. Here’s an example:

```javascript
// math.js
export function add(a, b) {
  return a + b;
}
```

**Question 3: How do you import a function from a module in ES6?**
**Answer:**
You can import a function using the `import` keyword. Here’s an example:

```javascript
// app.js
import { add } from "./math.js";

console.log(add(2, 3)); // Output: 5
```

**Question 4: What is the difference between default export and named export in ES6?**
**Answer:**

- **Named Export:** You can have multiple named exports per module. Named exports are exported using the `export` keyword and imported using curly braces `{}`.

  ```javascript
  // math.js
  export function add(a, b) {
    return a + b;
  }

  export function subtract(a, b) {
    return a - b;
  }
  ```

  ```javascript
  // app.js
  import { add, subtract } from "./math.js";
  ```

- **Default Export:** You can have only one default export per module. Default exports are exported using the `export default` keyword and imported without curly braces.
  ```javascript
  // math.js
  export default function multiply(a, b) {
    return a * b;
  }
  ```
  ```javascript
  // app.js
  import multiply from "./math.js";
  ```

### Intermediate Level Questions

**Question 5: What are CommonJS modules, and how do they differ from ES6 modules?**
**Answer:**
CommonJS is a module format used in Node.js applications. It uses `require()` to import modules and `module.exports` to export functionality. ES6 modules use `import` and `export` keywords. CommonJS modules are synchronous, while ES6 modules are asynchronous, allowing for better optimization in modern JavaScript applications.

**Example:**

```javascript
// CommonJS - math.js
module.exports = {
  add: function (a, b) {
    return a + b;
  },
};
```

```javascript
// CommonJS - app.js
const math = require("./math.js");
console.log(math.add(2, 3)); // Output: 5
```

**Question 6: How can you create a namespace in ES6 modules?**
**Answer:**
You can create a namespace by importing everything from a module as an object. Here’s an example:

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

```javascript
// app.js
import * as math from "./math.js";

console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(5, 2)); // Output: 3
```

**Question 7: Explain the concept of tree shaking in the context of ES6 modules.**
**Answer:**
Tree shaking is a dead-code elimination technique used in modern JavaScript bundlers like webpack. It removes unused code from the final bundle, resulting in smaller and more efficient code. Tree shaking works best with ES6 modules because their static structure allows the bundler to analyze and remove unused exports easily.

### Advanced Level Questions

**Question 8: What is dynamic import, and how can it be used in JavaScript?**
**Answer:**
Dynamic import allows you to load modules dynamically at runtime using the `import()` function, which returns a promise. It is useful for code splitting and lazy loading.

**Example:**

```javascript
// app.js
import("./math.js")
  .then((module) => {
    const add = module.add;
    console.log(add(2, 3)); // Output: 5
  })
  .catch((err) => {
    console.log("Failed to load module:", err);
  });
```

**Question 9: How do you configure a basic webpack setup for an ES6 module-based project?**
**Answer:**
A basic webpack setup involves creating a `webpack.config.js` file and specifying the entry point, output, and module rules for handling JavaScript files.

**Example:**

```javascript
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
```

**Question 10: What is the purpose of `module.exports` in CommonJS, and how does it work?**
**Answer:**
`module.exports` is used to define what a module exports in CommonJS. It allows you to export functions, objects, or primitive values from a module so they can be used in other modules using `require()`.

**Example:**

```javascript
// math.js
module.exports = {
  add: function (a, b) {
    return a + b;
  },
};

// app.js
const math = require("./math.js");
console.log(math.add(2, 3)); // Output: 5
```

**Question 11: Explain how webpack handles code splitting and lazy loading.**
**Answer:**
Webpack handles code splitting by breaking the application into smaller chunks, which can be loaded on demand. This improves the initial load time of the application. Lazy loading is achieved using dynamic imports (`import()`) to load modules only when they are needed.

**Example:**

```javascript
// app.js
document.getElementById("loadButton").addEventListener("click", () => {
  import("./math.js").then((module) => {
    const add = module.add;
    console.log(add(2, 3)); // Output: 5
  });
});
```

### Practice Questions

**Question 12: What will be the output of the following code? Explain why.**

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import * as math from "./math.js";
console.log(math.add(2, 3));
```

**Question 13: Explain the differences between `import` and `require` in JavaScript.**

**Question 14: How can you export multiple functions from a single module in ES6? Provide an example.**

**Question 15: What is the significance of the `default` keyword in ES6 modules?**

---

Feel free to answer these practice questions, and I will provide feedback on your responses!

Certainly! Here are the answers to questions 12 to 15 with detailed explanations.

### Question 12: What will be the output of the following code? Explain why.

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import * as math from "./math.js";
console.log(math.add(2, 3));
```

**Answer:**
The output will be `5`.

**Explanation:**

- In `math.js`, a named export `add` is defined.
- In `app.js`, `import * as math from './math.js';` imports all the exports from `math.js` into an object named `math`.
- `math.add(2, 3)` calls the `add` function from the `math` object, passing `2` and `3` as arguments.
- The `add` function returns the sum of `2` and `3`, which is `5`.

### Question 13: Explain the differences between `import` and `require` in JavaScript.

**Answer:**

**`import` (ES6 Modules):**

- **Syntax**: Uses the `import` and `export` keywords.
- **Static Analysis**: `import` statements are statically analyzed, meaning they are parsed at compile time. This allows for tree shaking and other optimizations.
- **Default and Named Exports**: Supports both named and default exports.
- **Asynchronous**: `import` is asynchronous and can be used dynamically with the `import()` function.
- **Scope**: `import` is always at the top level and cannot be conditionally used or dynamically imported without `import()`.

**Example:**

```javascript
// module.js
export const foo = "foo";
export default function () {
  console.log("default function");
}

// app.js
import defaultFunc, { foo } from "./module.js";
defaultFunc(); // Output: default function
console.log(foo); // Output: foo
```

**`require` (CommonJS Modules):**

- **Syntax**: Uses `require()` and `module.exports`.
- **Dynamic**: `require()` is a function and can be used anywhere in the code.
- **Synchronous**: `require()` is synchronous and blocks the execution until the module is loaded.
- **Default Export**: CommonJS only supports a single export using `module.exports`, but you can achieve named exports by exporting an object.

**Example:**

```javascript
// module.js
module.exports = {
  foo: "foo",
  defaultFunc: function () {
    console.log("default function");
  },
};

// app.js
const { defaultFunc, foo } = require("./module.js");
defaultFunc(); // Output: default function
console.log(foo); // Output: foo
```

### Question 14: How can you export multiple functions from a single module in ES6? Provide an example.

**Answer:**
You can export multiple functions using named exports.

**Example:**

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

To import these functions:

```javascript
// app.js
import { add, subtract } from "./math.js";

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2
```

### Question 15: What is the significance of the `default` keyword in ES6 modules?

**Answer:**
The `default` keyword in ES6 modules is used to export a single value or entity from a module, making it the default export of that module. Each module can have one default export. The default export can be a function, class, object, or any other value.

**Significance:**

- **Simplifies Import Statements**: When importing the default export, you can choose any name for the imported value, making it more convenient and flexible.
- **Convention**: Often used for the primary functionality of a module.

**Example:**

```javascript
// math.js
export default function multiply(a, b) {
  return a * b;
}
```

To import the default export:

```javascript
// app.js
import multiply from "./math.js";

console.log(multiply(2, 3)); // Output: 6
```

In this example, `multiply` is the default export from `math.js`. When importing, you do not need to use curly braces `{}` and you can name the imported function anything you want.

---

Feel free to ask if you have any more questions or need further clarifications!
