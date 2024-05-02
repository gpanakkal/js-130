/**
 * Reimplement Array.prototype.map
 */

function map(arr, callback, thisArg) {
  const mapped = [];
  const context = thisArg || this;
  for (let i = 0; i < arr.length; i += 1) {
    const newValue = callback.call(context, arr[i], i, arr);
    mapped.push(newValue);
  }
  return mapped;
}
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]