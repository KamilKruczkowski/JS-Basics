function countHello(n) {

  if (n < 0 || n > 10) {
    console.error('n musi być z przedziału 1,10');
    return;
  }

  let counter = 0;

  const intervalId = setInterval(function() {
    console.log('Hello', counter);

    if (counter === n) {
      clearInterval(intervalId);
    }

    counter++;
  }, 1000);

}

countHello(9);