/**
 * Reimplement Array.prototype.reduce
 * 
 * Inputs: array, reducer callback, initial value, and thisArg
 * Output: a value of the same type as initialValue
 * 
 * Algorithm
 * - initialize a variable `reduced` to the initial value
 * - initialize an iterator to 0
 * - if the initialValue is undefined:
 *   - set reduced to the first element of the array
 *   - set the iterator to 1
 * - set the context to thisArg unless it's undefined, in which case use `this`
 * - Iterate over the array's elements:
 *   - Call the reducer with the context, reduced, element, index, and array
 *   - Reassign `reduced` to the return value of the callback
 * - return `output`
 */
function reduce(arr, reducer, initialValue = undefined, thisArg = undefined) {
  let reduced = initialValue;
  let index = 0; 
  if (!initialValue) {
    reduced = arr[0];
    index = 1;
  }
  const context = thisArg || this;
  for (; index < arr.length; index += 1) {
    reduced = reducer.call(context, reduced, arr[index], index, arr);
  }
  return reduced;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]