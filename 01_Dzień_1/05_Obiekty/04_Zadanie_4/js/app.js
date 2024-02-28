const person = {
  name: 'Jan Kowalski',
  age: 30,
  sayHello() {
    console.log('hello');
  }
}

for (let key in person) {
  if (typeof person[key] !== 'function') {
    console.log(key, person[key]);
  } else {
    person[key]();
  }
}


// const person = {
//     name: 'Kamil Kruczkowski',
//     age: 35,
// }
// for(let key in person) {
//     console.log(key, person[key]);
//     }
// console.log('hello')