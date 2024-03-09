// const counters = document.querySelectorAll('.counter');

// document.querySelector('#button1').addEventListener('click', function() {
//   counters[0].innerText = +counters[0].innerText + 1;
// });

// document.querySelector('#button2').addEventListener('click', function() {
//   counters[1].innerText = +counters[1].innerText + 1;
// });

// document.querySelector('#button3').addEventListener('click', function() {
//   counters[2].innerText = +counters[2].innerText + 1;
// });

document.querySelectorAll('button')
  .forEach(function (button) {
    button.addEventListener('click', function () {
      const counter = this.parentElement.querySelector('.counter');
      counter.innerText = +counter.innerText + 1;
    });
  });

// document.addEventListener("DOMContentLoaded", function() {
//   const buttons = document.querySelectorAll(".btn");
//   const counters = document.querySelectorAll(".counter");
//
//   function updateCounter(counterElement, value) {
//     counterElement.textContent = value;
//   }
//
//   function increaseCounter(counterIndex) {
//     counters[counterIndex].textContent++;
//   }
//
//   buttons.forEach(function(button, index) {
//     button.addEventListener("click", function() {
//       increaseCounter(index);
//     });
//   });
// });