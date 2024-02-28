function distFromAverage(array) {

  const arrayAvg = array.reduce(function (acc, next) {
    return acc + next;
  }) / array.length;

  return array.map(function (value) {
    return Math.abs(arrayAvg - value);
  });

}

console.log(distFromAverage([1, 2, 3, 4, 5, 6, 7]));

// [1, 2, 3]
//   .map(function (value) {
//     return value * 2;
//   }).filter(function (value) {
//     return value > 3;
//   }).reduce(function (acc, next) {
//     return acc + next;
//   });