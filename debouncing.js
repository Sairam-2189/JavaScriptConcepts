// * Debouncing in Javascript

// * Debouncing is

// * Debounce function takes 2 arguments
// * First one is function as an argument.
// * Second one is delay which is time.
// * It prevents making unnecessary function calls and,
// * only make a function call, if the time interval between two function calls,
// * is greater than the delay.

let counter = 0;

function getData() {
  console.log("calling function or making an API call");
  counter++;
}

function debounceMethod(callbackFn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn.apply(context, args);
    }, delay);
  };
}

let callDebounceMethod = debounceMethod(getData, 300);

// * Debouncing is achieved by web API's like setTimeout and clearTimeout.
