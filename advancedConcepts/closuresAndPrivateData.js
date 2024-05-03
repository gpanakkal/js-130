/**
 * 1. makeCounterLogger:
 * inputs: a number
 * output: a function
 *
 * when the second function is invoked with a second number, it should count up
 * or down from the first number to the second number (inclusive), logging each 
 * number to the console
 *
 * algo for returned function:
 * - take the difference of the second num minus the first
 * - get the step by dividing the difference by its own absolute value
 * - loop from the first number through the second num, incrementing by the step
 * - log the iterator
 */

// function makeCounterLogger(start) {
//   return function(end) {
//     const step = Math.sign(end - start);
//     const endCondition = (i) => (step > 0 ? i <= end : i >= end);
//     for (let i = start; endCondition(i); i += step) {
//       console.log(i);
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);

// countlog(2);

/**
 * 2. Write a makeList function that returns a new function that implements a todo list
 * The returned function takes one or zero arguments and:
 * - stores a list
 * - if called with one arg:
 *   - if the arg is not on the list, adds it to the list
 *   - if the arg is on the list, it removes it
 * - if called with zero args:
 *   - if the list is empty, print an appropriate message
 *   - if the list has items, print all items on the list
 */

// function makeList() {
//   const list = [];
//   return function (todo = undefined) {
//     if (todo !== undefined) {
//       const todoIndex = list.indexOf(todo);
//       if (todoIndex === -1) {
//         list.push(todo);
//         console.log(`${todo} added!`);
//       } else {
//         list.splice(todoIndex, 1);
//         console.log(`${todo} removed!`);
//       }
//     } else if (list.length === 0) {
//       console.log('The list is empty.');
//     } else list.forEach((entry) => console.log(entry));
//   };
// }

// const list = makeList();
// list();
// // The list is empty.

// list('make breakfast');
// // make breakfast added!

// list('read book');
// // read book added!

// list();
// // make breakfast
// // read book

// list('make breakfast');
// // make breakfast removed!

// list();
// // read book

function makeList() {
  const list = [];

  const todoIndex = (todo) => list.indexOf(todo);
  const hasTodo = (todo) => todoIndex(todo) !== -1;

  return {
    add(todo) {
      if (hasTodo(todo)) return;
      list.push(todo);
      console.log(`${todo} added!`);
    },

    remove(todo) {
      const index = todoIndex(todo);
      if (index === -1) return;
      list.splice(index, 1);
      console.log(`${todo} removed!`);
    },

    list() {
      return list.length === 0
        ? console.log('The list is empty.')
        : list.forEach((entry) => console.log(entry));
    },
  };
}

const list = makeList();
list.add('peas');
// peas added!

list.list();
// peas

list.add('corn');
// corn added!

list.list();
// peas
// corn

list.remove('peas');
// peas removed!

list.list();
// corn
