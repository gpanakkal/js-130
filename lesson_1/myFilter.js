/**
 * Reimplement Array.prototype.filter
 * 
 * Input: An array, test callback, and optional context argument
 * Output: An array of elements that passed the testing callback
 * 
 * Algorithm:
 * - initialize an array to hold values that passed the test
 * - if `thisArg` is not undefined, bind the callback to it
 * - Iterate over the elements of the array, passing the element,
 *   index, and array to the test callback
 * - if the test callback returns a truthy value, push the element
 *   to the output array
 * - return the output array
 */
function filter(arr, testCb, thisArg = undefined) {
  const passingValues = [];
  const context = thisArg ?? this;
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    const passed = testCb.call(context, element, i, arr);
    if (passed) passingValues.push(element);
  }
  return passingValues;
}
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]