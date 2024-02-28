const nationality = 'Poland';

const student = {
  name: 'Jan',
  surname: 'Kowalski',
  nationality: nationality, // nationality: 'Poland'
  nationality, // nationality: nationality
  sayHello: function() {
    console.log('Hello');
  },
  sayBye(x, y) {
    console.log('Bye');
  },
  car: {
    brand: 'Fiat',
    model: 'Panda',
    yr: 2000
  }
}

student.name; // Jan
student['name']; // Jan

const key = 'name';

student.key; // undefined
student[key]; // Jan

student.age = 20;

console.log(student);

student.car.model; // Panda
console.log(student.car.engine);
console.log(student.car.engine?.hp);

// undefined.hp
// undefined()

// function calculateSomething(a = 5) {
function calculateSomething(a) {
  // a = a || 5;
  a = a ?? 5; // a === undefined || a === null

  return a * 5;
}

console.log(calculateSomething());
console.log(calculateSomething(0));


for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

Object.values(student).forEach(function(value) {
  console.log(value);
});

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));