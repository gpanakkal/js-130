// function delayLog() {
//   for (let i = 1; i <= 10; i += 1) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
// }
// delayLog();

/**
 * 2. Because `var` is function-scoped, the same `i` variable 
 * is passed into each callback. This can be fixed as follows:
 */
function delayLog() {
  for (var i = 1; i <= 10; i += 1) {
    setTimeout((i) => console.log(i), i * 1000, i);
  }
}
delayLog();

/**
 * 3. 
 */
setTimeout(function() {   // 1
  console.log('Once');    // 5
}, 1000);

setTimeout(function() {   // 2
  console.log('upon');    // 7
}, 3000);

setTimeout(function() {   // 3
  console.log('a');       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log('time');    // 8
}, 4000);

/**
 * 4. In what sequence do q, d, n, z, s, f, and g run?
 * 
 * A: g (instant), f (0), d (10), z (10), n (15), s (20), q (25)
 */
setTimeout(function() {
  setTimeout(function() {
    q();
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5);

  z();
}, 10);

setTimeout(function() {
  s();
}, 20);

setTimeout(function() {
  f();
});

g();

/**
 * 5. 
 */

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}