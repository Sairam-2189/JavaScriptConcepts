// * Promises

// * Promises are used to handle asynce operations in Javascript.

// * Before Promises, async operations are achieved by callbacks.
// * Example :-

const cart = [shoes, shirts];

createOrder(cart, function (orderId) {
  createPayment(orderId);
});

// * The major issue with callbacks is Inversion of control.
// * which means we are giving control of our callback function createPayment
// * to the createOrder function.
// * There are possibilties our callback fn might not be called or it might called twice.
// * Passing callback fn's to other fn's is not reliable.

// * Using Promises

const promise = createOrder(cart);

// * createOrder will return us a promise.
// * promise = {data : undefined}
// * after some time, createOrder will create the order using our cart dettails
// * then our data is filled with orderDetails.
// * promise = {data : orderDetails} ---> promise object.
// * after getting orderDetails, we will proceed writting callbak fn's.

promise.then(function (orderId) {
  createPayment(orderId);
});

// * Once we get promise object with orderDetails, the callback fn attached to promise object is called.

// * Callbacks v/s Promises
// * For callbacks, we are passing a callback fn to another fn.
// * For promises, we are attaching a callback fn to another fn.
// * after getting promise object with the data like orderDetails.
// * Then only, we call the callback fn.
// * Here, by this the promises mitigates the problem of inversion of control.

// * fetch is an API which is given by browser to make external calls
// *
// *
// *
// *
// *
