// * Throttling in Javascript

// * Throtlling generally used for perfomance optimization of the website.
// * Throttling is generally known for rate limiting for function calls or function executions
// * Throttling is achieved by web API's like setTimeout.

// * Throttle function takes 2 arguments
// * First one is function as an argument.
// * Second one is delay which is time.

// * throttle function returns a function that can be called any number of times
// * (possibly in quick succession) but will only invoke the callback at
// * most once every limit which is time in milliseconds or seconds.

const expensiveFunction = () => {
  console.log("this does something on resizing of the window.");
};

// * expensiveFunction needs to be called on resizing of the window.

const throttle = (callbackFn, limit) => {
  let invokeCallbackFn = true;
  return function () {
    let context = this;
    let args = arguments;
    if (invokeCallbackFn) {
      callbackFn.apply(context, args);
      invokeCallbackFn = false;
      setTimeout(() => {
        invokeCallbackFn = true;
      }, limit);
    }
  };
};

const betterExpensiveFunction = throttle(expensiveFunction, 500);

// * betterExpensiveFunction returns a function

window.addEventListener("resize", betterExpensiveFunction);
