// * Call method

// * Definition :- Call is a function that helps you change the context of the invoking function.
// *               In layperson's terms, it helps you replace the value of "this" inside a function
// *               with whatever value you want.

// * Syntax for call method :- func.call(thisObj, args1, args2, ...)

// * Apply method

// * Definition :- Apply is very similar to the call function.
// *               The only difference is that in apply you can pass an array as an argument list.

// * Syntax for apply method :- func.apply(thisObj, argumentsArray);

// * Bind method

// * Definition :- Bind is a function that helps you create another function that you can execute later
// *               with the new context of this that is provided.

// * Syntax for bind method :- func.bind(thisObj, arg1, arg2, ..., argN);

let nameObj1 = {
  firstName: "Sai",
  lastName: "Ram",
};

let nameObj2 = {
  firstName: "Rakesh",
  lastName: "Kumar",
};

function printFullName(homeTown, state, methodName) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      homeTown +
      ", " +
      state +
      " printing from " +
      methodName
  );
}

// * Call method example

printFullName.call(nameObj1, "Warangal", "Telangana", "Call Method");

printFullName.call(nameObj2, "Hyderabad", "Telangana", "Call Method");

// * Apply method example

printFullName.apply(nameObj1, ["Warangal", "Telangana", "Apply Method"]);

printFullName.apply(nameObj2, ["Hyderabad", "Telangana", "Apply Method"]);

// * Bind method example

let printMyName = printFullName.bind(
  nameObj1,
  "Warangal",
  "Telangana",
  "Bind Method"
);

printMyName();
