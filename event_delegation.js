// * Event Delegation

// * Event Delegation is a technique of handling events better way.
// * Event Delegation is based upon Event Bubbling.
// * Event Delegation says that instead of attaching multiple events on child html elements.
// * We should rather attach to parent html element.

// * Example 1 :-

// * When the user is clicking on laptops, shoes or cameras. The event happening in child elements
// * (laptops, shoes or cameras)will bubble-up. Event Listner added to the parent will get triggered.
// * and the callback function gets called.

document.querySelector("#categories").addEventListener("click", (event) => {
  console.log("category parent clicked...", event, event.target.id);
  if (event.target.tagName === "LI") {
    window.location.href = "/" + event.target.id;
  }
});

// * Example 2 :-

// * Behaviour pattern is achieved by Event Delegation(example-2)

document.querySelector("#form").addEventListener("keydown", (event) => {
  if (event.target.dataset.uppercase == undefined) return;
  event.target.value = event.target.value.toUppercase();
});

// * Pros :-

// * 1. Event delegation save lots of memory, we attach only single addEventListner to parent
// *    instead of attaching multiple event listners to child.
// * 2. It also mitigates the problem of perfomance bottle-neck.
// * 3. writting less code.
// * 4. DOM Manipulation, if there any dynamic fields or childs added to the parent also
// *    follow event delegation.

// * Limitations :-
// * 1. All the events(blur, focus and resizing of window) are not bubbled up.
// * 2. we use stopPropagation, there event delegtion won't works.
