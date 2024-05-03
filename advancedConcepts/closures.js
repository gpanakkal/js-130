"use strict";

/**
 * 1. Logs 1, 2, 3, and 4
 * 2. Logs 1, 1, 1, and 1
 * 3. Logs 1, 2, 1, and 2
 * 4. Logs 1, 2, 1, and 2
 * 5. Write a function that returns a new function that logs 
 * every positive integer multiple of the passed number less than 100
 */
function makeMultipleLister(num) {
  // let currentValue = num;

  return function () {
    for (let i = num; i < 100; i += num) {
      console.log(i);
    }
  }
}

let lister = makeMultipleLister(17);
lister();

/**
 * 6. Write add and subtract functions that manipulate a running total
 * 
 * internal counter in parent function that contains both add and subtract defs
 */
function modCounter() {
  let counter = 0;

  function add(value) {
    counter += value;
    console.log(counter);
  }

  function subtract(value) {
    counter -= value;
    console.log(counter);
  }

  return [add, subtract];
}

const [add, subtract] = modCounter();


add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

/**
 * 7. Logs 150
 * 8. 
 */
function later(func, arg) {
  return function() {
    return func(arg);
  }
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

/**
 * 9. 
 */
function later2 (func, arg) {
  return (arg2) => func(arg, arg2);
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

/**
 * 10. 
 */
function bind(context, func) {
  return function() {
    return func.call(context);
  }
}


let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }