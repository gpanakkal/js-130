/**
 * 1. This is a function declaration, so it is not valid syntax
 * 2. 
 */
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

/**
 * 3. The var declaration on line 1 is lost, and thus the function is reassigned to 0 on line 1
 */
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

const sumNumbers = (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

sum += sumNumbers;  // ?
console.log(sum);

/**
 * 4. 
 */
(function countdown(num) {
  let next = num;
  while (next >= 0) {
    console.log(next);
    next -= 1;
  }
})(7);

/**
 * 5. No. `foo` is only available inside the IIFE
 * 6. Rewrite this code using an IIFE:
 *   The solution should not require the name `foo`
 */
let bar = ((start) => {
  let prod = start;
  return (factor) => prod *= factor;
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

/**
 * 7. Refactor (4) using recursion
 * Note: I returned the countdown invocation to avoid call stack pileup,
 * but I'm not certain that helps.
 */
(function countdown(num) {
  if (num < 0) return;
  console.log(num);
  return countdown(num - 1);
})(7);

