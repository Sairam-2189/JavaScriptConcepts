// * Callbacks :-

// * Callback is a function which is passed as an argument to another function.

// * Asynchronous behaviour is achieved by callbacks in Javascript.

const cart = ["shoes", "pants"];

api.createOrder();

api.createPayment();

// * First, we needs to create order. Then, only we can need to proceed to payment.
// * There is a dependency between them.
// * Because, this is an async operation which is achieved by callbacks.

// callback fn :- function(){
//                  api.createPayment();
//                }

api.createOrder(cart, function () {
  api.createPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

// * It is the responsibility of create order API to create an order and then call this function back.

// * Callback hell is one callback inside another callback and it continues....
// * Code starts grow horizontally not vertically.
// * This type of code is unmaintainable and unreadable.
// * This structure is known as Pyramid of Doom.

// * Inversion of control is another problem when we use callbacks
// * We are giving control of callback function which is createPayment()
// * to createOrder(). It is very risky.
// * We never know our callback function will get executed or not.
