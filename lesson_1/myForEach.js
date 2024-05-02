/**
 * Reimplement forEach
 * 
 * Input: an array, a callback, and an optional thisArg
 * Output: undefined
 * 
 * Algorithm:
 * - if `thisArg` is not undefined, bind the callback to it
 * - Iterate over the array's elements, passing the element,
 *   the index, and the array itself to the bound callback
 * - return undefined
 */

function forEach(arr, callback, thisArg = undefined) {
  const context = thisArg ?? this;
  for (let i = 0; i < arr.length; i += 1) {
    callback.call(context, arr[i], i, arr);
  }
}

let arr = [1, 2, 3, 4];

// Array.prototype.forEach
arr.forEach(value => console.log(value * value));

// Our forEach function
const myObj = {
  mult: 3,

  logMultiplied() {
    forEach(arr, function (value) {
      console.log(value * this.mult);
    }, this);
  },
};

myObj.logMultiplied();
