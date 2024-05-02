/**
 * 1. Logs 'Bye' because the `var foo` declaration is lost and the initialization
 * instead becomes a reassignment to a new function
 * 2. Logs `undefined`, 'Hello', 'Bye', and then 2
 * 3. Make bar a function declaration instead
 * 4. Logs NaN because undefined - 42 is NaN
 * 5.
 */
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    const xyzzy = function () {
      const qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

/**
 * 6. Rearrange as if hoisting was actually happening:
 */
function Pet(name, image) {
  this.name = name;
  this.image = image;
}

var catImage;
var pudding;
let Image;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
