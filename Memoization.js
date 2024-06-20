// * Memoization

console.log("From Memoization Example :-");

// * References :-

// * https://www.youtube.com/watch?v=TWUV_LRVX24

// * Memoization is a programming concept that
// * is to ask the function to remember the result.
// * If the function gets the same input again,
// * it will quickly deliver the same result without
// * needing to recalculate the input.

// * Applicability :-

// * Intensive Processing
// * API Requests (not ideal)

// * Examples :-

// * Recursive functions(Intensive by nature)

// * Applicability :-

// * It will be only added to pure functions that is given the
// * same inputs, a pure function should always provide the
// * same output.

// * For implementing Memoization, we need to know 2 things
// * Closures
// * Higher order functions

// * Drawbacks :-

// * Memoization also comes at a cost, trading memory for speed.

// * Example - 1 :-

const multiplyTwoNumbers = (a, b) => a * b;

const addFn = (...args) => args.reduce((acc, curr) => acc + curr, 0);

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const currentKey = args.toString();
    if (currentKey in cache) {
      console.log(" From Cache! ", { cache });
      return cache[currentKey];
    }
    const result = fn(...args);
    cache[currentKey] = result;
    return result;
  };
};

const memoizedMultiplyFn = memoize(multiplyTwoNumbers);

console.log(memoizedMultiplyFn(1, 2));
console.log(memoizedMultiplyFn(1, 2));
console.log(memoizedMultiplyFn(10, 20));
console.log(memoizedMultiplyFn(1, 2));
console.log(memoizedMultiplyFn(10, 20));

const memoizeAddFn = memoize(addFn);

console.log(memoizeAddFn(1, 2));
console.log(memoizeAddFn(1, 2, 3));
console.log(memoizeAddFn(1, 2));
console.log(memoizeAddFn(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
console.log(memoizeAddFn(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
