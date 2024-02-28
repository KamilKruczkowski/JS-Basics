// hoisting

/*
function sayHello() {
  console.log('Hello');
}

var age; // var age = undefined;
var sayAnotherHello; // var sayAnotherHello = undefined;

*/

sayHello();

function sayHello() {
  console.log('Hello');
}

console.log(age);

var age = 30;

// sayAnotherHello(); // undefined()

var sayAnotherHello = function() {
  console.log('Hello again');
}

// let age = 30;

// {
//   console.log(age);
//   // TDZ (temporal dead zone)
//   let age = 20;
// }

// call stack

function a() {
  console.log('a');

  function c() {
    console.log('c');
  }

  c();
}

function b() {
  console.log('b');
  a();
  console.log('end b');
}

b();

// stack

//
// - console ('b')
// a
// c
// end b

const fruits = ['apple', 'pear'];
// fruits = ['apple', 'pear', 'orange'];
fruits.push('orange');

console.log(fruits);

fruits.pop();
fruits.pop();
fruits.pop();

console.log(fruits);

// function outer() {
//   var xyz = 'xyz';

//   if (true) {
//     let abc = 'abc';
//     console.log(xyz);
//     console.log(abc);
//   }

//   function inner() {
//     console.log(xyz);
//     console.log(abc);
//   }

//   inner();
// }

// outer();

// // let xx;

// {
//   // zwykli ludzie
//   let z = 0;
//   // z
//   {
//     // szlachta
//     let y = 1;
//     // z, y
//     {
//       // krol
//       // z, y
//       xx = 30;
//     }
//   }
// }

// domknięcie (clojure)

function keepSecret() {
  const secret = 'zyrafy wchodza do szafy';

  return function() {
    console.log(secret);
  }
}

const newFn = keepSecret();
// const newFn = function() {
//   console.log(secret)
// };
newFn();

function xyz() {
  console.log('xyz');
  // return undefined;
}

console.log(xyz());

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));