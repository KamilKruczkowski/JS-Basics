document.querySelectorAll('.box')
  .forEach(function (box) {
    box.addEventListener('click', function () {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.style.background = randomColor;
    });
  });


// document.addEventListener("DOMContentLoaded", function() {
//     const boxes = document.querySelectorAll('.box');
//
//     function changeColor() {
//         this.style.backgroundColor = getRandomColor();
//     }
//
//     function getRandomColor() {
//         const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//         return randomColor;
//     }
//
//     boxes.forEach(function(box) {
//         box.addEventListener('click', changeColor);
//     });
// });