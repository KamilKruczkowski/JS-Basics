function callOtherFunction(nameOfFunction) {
  console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

  const randomNumber1 = Math.random() * 20;
  const randomNumber2 = Math.random() * 10;
  nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
  console.log("Pierwsza liczba:", a);
  console.log("Druga liczba", b);
  console.log("Wynik", a + b);
});

callOtherFunction(function (a, b) {
  console.log("Pierwsza liczba pomnożona przez 4", a * 4);
  console.log('Druga liczba pomnożona przez 2', b * 2);
  console.log('Wynik ich sumy to', (a*4) + (b*2));
});

