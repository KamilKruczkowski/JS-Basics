const array2d = [
  [1, 2, 3],
  [4, 5, 6]
];

array2d[1][1]; // 5

for (let i = 0; i < array2d.length; i++) {
  for (let j = 0; j < array2d[i].length; j++) {
    console.log(array2d[i][j]);
  }
}

// array2d.forEach(function(value) {
//   value.forEach(function(value) {
//     console.log(value);
//   })
// })

array2d.forEach(function(row) {
  row.forEach(function(column) {
    console.log(column);
  });
});