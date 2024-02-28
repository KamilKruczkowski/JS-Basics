function startEngine() {
  console.log(`${this.brand} engine started`);
}

const carA = {
  brand: 'Bentley',
  hp: 500,
  production: 2023,
  startEngine, // startEngine: startEngine
  carInfo() {
    console.log(`
      Brand: ${this.brand}
      HP: ${this.hp}
      Production: ${this.production}
    `)

    this.alreadySeenCarInfo = true;
  },
}

const carB = {
  brand: 'Audi',
  hp: 400,
  startEngine
}

carA.startEngine();
carA.carInfo();
console.log(carA);
carB.startEngine();

carA.carInfo.bind(carB, 1, 'ala', true)();
carA.carInfo.apply(carB, [1, 'ala', true]);
carA.carInfo.call(carB, 1, 'ala', true);

function dummyFn() {
  console.log(this);
}

dummyFn();

// window - browser
// global - node

/*
1 new - newly constructed object
2 bind, apply, call
3 obj.method - obj
4 default - window/global / strict undefined/''
5 arrow function - lexical context (self = this)
6 event - received event
*/