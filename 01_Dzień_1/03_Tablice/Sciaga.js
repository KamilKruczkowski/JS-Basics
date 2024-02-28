const mixArray = [1, 'Ala', true, [1, 2, 3], function () { console.log('abc') }, { name: 'Jan' }];

mixArray[0]; // 1
mixArray[-1]; // undefined

mixArray[mixArray.length - 1];

mixArray.at(0); // 1
mixArray.at(-1); // { name: 'Jan' }

mixArray[3][1]; // 2
mixArray[4](); // 'abc'

mixArray[5].name; // Jan
mixArray[5]['name']; // Jan

const newLength = mixArray.push(123); // [..., 123]
newLength; // 7
mixArray.unshift(0); // [0, ...]

const removedElement = mixArray.pop(); // 123 (remove)
removedElement; // 123
mixArray.shift(); // 0 (remove)

const numsArray = [1, 3, 10, 2, 67, 678, 9, 8];

numsArray.sort(); // [1, 10, 2, 3, 67, 678, 8, 9]

numsArray.sort(function (a, b) {
  return a - b; // rosnaco
  // return b - a; // malejaco
});

// ES2023*
// .toSorted()
// .toReversed()

console.log(numsArray);

// time sort ***
// for (let i = 0; i < numsArray.length; i++) {
//   setTimeout(function() {
//     console.log(numsArray[i])
//   }, numsArray[i]);
// }

[1, 2, 3].indexOf(1); // 0
[1, 2, 3].indexOf(11); // -1

// if (someArray.indexOf(searchValue) !== -1) {
//   // jest
// } else {
//   // nie ma
// }
0
// if (someArray.includes(searchValue)) {
//   // jest
// }

console.log([1, 2, 3, 4].forEach(function (value, index, array) {
  console.log(value, index, array);
  return 123;
}));

console.log([1, 2, 3, 4, 5].map(function (value, index, array) {
  console.log(value, index, array);
  return value ** 3; // Math.pow(value, 3)
}));

console.log([1, 2, 3, 4, 5].filter(function (value, index, array) {
  console.log(value, index, array);
  return !(value % 2);
}));

/* falsy values
"" '' ``
0
false
null
undefined
NaN
*/

console.log([1, 2, 3, 4].reduce(function (acc, next, index, array) {
  return acc + next;
}));

// acc = 1, next = 2, index = 1, array = 1, 2, 3, 4 => acc + next => 1 + 2 => 3
// acc = 3, 3, 2, 1234 => acc + next => 3 + 3 => 6
// acc = 6, 4, 3, 1234 => acc + next => 6 + 4 => 10

console.log([1, 2, 3, 4].reduce(function (acc, next, index, array) {
  return acc + next;
}, 10));

// acc = 10, next = 1, index = 0, array = 1, 2 ,3, 4 => acc + next => 10 + 1 => 11
// acc = 11, next = 2, index = 1, 1,2,3,4 => 11 + 2 => 13
// acc = 13, next = 3, index = 2, 1234 => 13 + 3 => 16
// acc = 16, next =4, index 3, 1234, 16 + 4 => 20

console.log(
  [1, 2, 1, 1, 3, 3, 2, 4, 5, 6, 6, 8, 8, 7]
    .reduce((acc, next) => {
      return acc.includes(next) ? acc : [...acc, next];
    }, [])
)

console.log(new Set([1, 2, 1, 1, 3, 3, 2, 4, 5, 6, 6, 8, 8, 7]));

// reduceRight
// some
// every

// find
// findIndex

console.log([1, 2, 3, 4].find(function(value) {
  return value > 3;
}));

for (let i of [1, 2, 3]) {
  console.log(i);
  // wartości
}

for (let i in [1, 2, 3]) {
  console.log(i);
  // indeksy
}

5 == 5; // true
5 === 5; // true

"5" == 5; // true
"5" === 5; // false

"5" != 5; // false
"5" !== 5; // true

|| OR
&& AND
! NOT