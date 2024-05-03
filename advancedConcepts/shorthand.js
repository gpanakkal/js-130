/**
 * 1. Rewrite this to avoid using shorthand
 */
{
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}
}
/**
 * 2.
 */
{
function foo() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}
}
/**
 * 3. 
 */
{
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

const values = foo(1, 2, 3);
const baz = values.baz;
const qux = values.qux;
const bar = values.bar;
}
// 4
{
function foo(args) {
  return [
    args[2],
    5,
    args[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
const values = result;
const bar = values[0];
const qux = values[1];
const baz = values[2];
}

// 5
{
  function product(num1, num2, num3) {
    return num1 * num2 * num3;
  }
  
  let array = [2, 3, 5];
  let result = product(array[0], array[1], array[2]);
}
// 6
{
  function product() {
    const args = Array.from(arguments);
    return args.reduce((total, number) => total * number, 1);
  }
  
  let result = product(2, 3, 4, 5);
  console.log({ result });
}

// 7
{
  const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
  console.log(foo);         // 42
  console.log(rest);        // { bar: 3.1415, qux: 'abc' }
}

// 8
{
  const obj = {
    first: "I am the first",
    second: "I am the second",
    third: [1, 2, 3],
    rest: { a: 'a', b: 'b' },
  };
  
  const first = obj.first;
  const second = obj.second;
  const rest = { third: obj.third, rest: obj.rest };
}

// 9
{
  const arr = [1, 2, 3];
  const [first, second, third] = arr;
  const obj = { a: 'a', b: 'b', c: 'c' };
  const {a, b, c} = obj;
}

// 10
{
  const arr = [1, 2, 3];
  const [first, ...arr2] = arr;
}

// 11
{
  const arr = [1, 2, 3];
  const [, second] = arr;
}

// 12
{
  const obj = { a: 'a', b: 'b', c: 'c' };
  const { c: tail, ...obj2 } = obj;
}

// 13
{
  const sum = (...args) => args.reduce((sum, current) => sum + current, 0);

  // 14
  console.log(sum(1, 4, 5));
  console.log(sum(...[1, 4, 5]));
}

// 15
{
  const arr = [1, 2, 3];

  function prod(num1, num2) {
    return num1 * num2;
  }

  console.log(prod(...arr));
}

/**
 * 16. The last two lines duplicate obj to obj2 using the spread syntax, 
 * and then to obj3 using the rest operator
 */
{
  let obj = {
    foo: 'foo',
    qux: 'qux',
    bar: 'bar',
  };
  
  let obj2 = {...obj};
  let { ...obj3 } = obj;
}

// 17
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  return { type: animalType, age, colors };
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

/**
 * 18. Write a function that takes 5 string arguments, and returns an object with 3 properties:
 * first: the first argument
 * last: the last argument
 * middle: the middle 3 arguments as a sorted array
 * 
 * After writing the function, write some code to call the function. 
 * The arguments you provide should come from an array. 
 * You should create local variables named first, last, and middle from the return value.
 */
function stringsToObj(str1, str2, str3, str4, str5) {
  const sortedMiddle = [str2, str3, str4].toSorted();
  return {first: str1, middle: sortedMiddle, last: str5};
}

const stringArr = ['a', 'c', 'ab', 'cde', 'faf'];
const {first, last, middle} = stringsToObj(...stringArr)
console.log({first, last, middle});