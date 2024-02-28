// Number
// Boolean
// String
// undefined
// null
// NaN
// Symbol
// BigInt 10n

// Object (function / array)

const obj = {
  a: 10
}

const obj2 = obj;

obj.a = 20;
obj2.a; // 20

obj2.a = 30;
obj.a; // 30

const obj3 = {...obj};

const arr = [1, 2, 3];
const arr2 = [...arr];

const arr3 = arr2;

arr3.push(4);
arr2; // 1, 2, 3, 4