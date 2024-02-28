class Human {

  // ES2022
  isAlive = true;
  #secret = 'xyz';

  constructor(name) {
    this.name = name;
    // this.isAlive = true;
  }

  speak() {
    console.log('speaking...');
  }

  static staticMethod() {
    console.log('bla bla');
  }
}

Human.staticMethod();

const kowalski = new Human('Jan Kowalski');
kowalski.speak();

console.log(kowalski);

class SuperHero extends Human {
  constructor(name, superpower) {
    super(name); // Human
    this.superpower = superpower;
  }

  fly() {
    console.log('flying...');
  }

  speak() {
    super.speak();
    console.log('SPEAKING...');
  }
}

const superman = new SuperHero('Clark Kent', 'fly');
console.log(superman);

superman.speak();