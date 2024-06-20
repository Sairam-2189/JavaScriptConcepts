// * Prototypal Inheritance.

// * Inheritance is like one object trying to access the methods and properties
// * of other object.

// * Prototype - In JavaScript, objects have a special hidden property [[Prototype]]
// * (as named in the specification), that is either null or references another object.
// * That object is called “a prototype”

// * When we read a property from object, if it's not defined in it.
// * JavaScript tries to find it in the prototype.
// * In programming, this is called “prototypal inheritance”.

// * The property [[Prototype]] is internal and hidden, but there are many ways to set it.
// * One of them is to use _proto_

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
};

rabbit._proto_ = animal;

rabbit.walk(); // * It is taken from animal(rabbit's prototype)

// * Now if we read a property from rabbit, and it’s missing,
// * JavaScript will automatically take it from animal.
// * Here, we can say that animal is prototype of rabbit.
// * The value of __proto__ can be either an object or null.
// * __proto__ is not the same as the internal [[Prototype]] property.
// * It’s a getter/setter for [[Prototype]]
