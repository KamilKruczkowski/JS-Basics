const buttons = document.querySelectorAll('button');
const counter = document.querySelector('span.counter');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    counter.innerText = +counter.innerText + 1;
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const counter = document.querySelector(".counter");
//     let count = 0;
//
//     function updateCounter() {
//         counter.textContent = count;
//     }
//
//     function increaseCounter() {
//         count++;
//         updateCounter();
//     }
//
//     const buttons = document.querySelectorAll(".btn");
//
//     buttons.forEach(function(button) {
//         button.addEventListener("click", function() {
//             increaseCounter();
//         });
//     });
// });