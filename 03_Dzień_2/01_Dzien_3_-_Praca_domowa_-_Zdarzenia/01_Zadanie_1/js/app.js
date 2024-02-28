class Vehicle {}

class Boat extends Vehicle {
  sail() {
    console.log('sail');
  }
}

class Car extends Vehicle {
  drive() {
    console.log('drive');
  }
}

class Plane extends Vehicle {
  fly() {
    console.log('fly');
  }
}

const boat = new Boat();
boat.sail();
boat.drive();