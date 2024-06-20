// * Event Bubbling and Capturing are two ways of event propogation in the DOM tree.

// * div with id="grandParentDiv" has onclick event calls onClickGrandParent method.
// * div with id="parentDiv" has onclick event calls onClickParent method.
// * div with id="childDiv" has onclick event calls onClickChild method.

// * In case of event bubbling, the onClickChild method is called first, then it moves upto the hirerachy.
// * For remembering, we can think like bubbling means bubble always comes out.
// * event is bubbling out the DOM tree.

// * Opposite to the above one is event capturing.
// * In case of capturing, the onClickGrandParent method is called first, then it moves down the hirearchy.
// * It is capturing events down the DOM tree.
// * Event capturing is also known as Event trickling.
// * For remembering, trickling down ------------ bubbling up.

// * When we are writing addEventListner() method, we can pass third argument as useCapture.
// * Syntax :- addEventListner("eventName",callBackFn,useCapture);
// * eventName like click
// * callBackFn - ()=>{ "some logic" }
// * useCapture - Boolean argument.
// * When useCapture is true, event capturing or event trickling mode is enabled.
// * When useCapture is false, event bubbling mode is enabled.

// * Event Bubbling Example :-

// document.getElementById("grandParentDiv").addEventListener(
//   "click",
//   () => {
//     console.log("grandParentdiv clicked.......");
//   },
//   false
// );

// document.getElementById("parentDiv").addEventListener(
//   "click",
//   () => {
//     console.log("parentDiv clicked.......");
//   },
//   false
// );

// document.getElementById("childDiv").addEventListener(
//   "click",
//   () => {
//     console.log("childDiv clicked.......");
//   },
//   false
// );

// * if we see on console, the events are propogating up the DOM
// * which means Evnet Bubbling.

// ! For checking Event Bubbling or Event Capturing.
// ! Please uncomment the example which you want to see in console.

// * Event Capturing or Event Trickling Example :-

// document.getElementById("grandParentDiv").addEventListener(
//   "click",
//   () => {
//     console.log("grandParentdiv clicked.......");
//   },
//   true
// );

// document.getElementById("parentDiv").addEventListener(
//   "click",
//   () => {
//     console.log("parentDiv clicked.......");
//   },
//   true
// );

// document.getElementById("childDiv").addEventListener(
//   "click",
//   () => {
//     console.log("childDiv clicked.......");
//   },
//   true
// );

// * if we see on console, the events are propogating down the DOM hirerachy
// * which means Evnet Capturing or Event Trickling.

// * For stopping event propogation :-
// * if you write a callback function inside an event listner
// * we have access to event object
// * this event has special method called stopPropogation will help us to stop the propogation of event.
// * event.stopPropagation();

// * Example :-

// document.getElementById("childDiv").addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();
//     console.log("childDiv clicked.......");
//   },
//   false
// );
