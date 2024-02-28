const calculator = {
  save: function (newA, newB) {
    console.log("Liczba a:", newA, "Liczba b:", newB )
    this.a = newA;
    this.b = newB;
  },
  sum: function (){
    console.log('Wynik dodawania:')
    return this.a + this.b;
  },
  multiply: function () {
    console.log('Wynik mnożenia:')
    return this.a * this.b;
  }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());

