const car = {
  brand: 'Mercedes',
  color: 'black',
  numberOfKilometers: 0,
    inspections: ["06-04-2022"],
  printCarInfo() {
    console.log(`
      Brand: ${this.brand}
      Color: ${this.color}
      Mileage: ${this.numberOfKilometers} km
    `);
  },
  drive(km) {
    // this.numberOfKilometers = this.numberOfKilometers + km;
    this.numberOfKilometers += km;
  },
  addInspection(date) {
      this.inspections.push(date);
  },
  getInspections() {
      return this.inspections;
  }
};

car.printCarInfo();
car.drive(50);
car.printCarInfo();

car.addInspection("2023-01-08");
car.addInspection("2024-01-06");
console.log("Lista przeglądów:");
console.log(car.getInspections());