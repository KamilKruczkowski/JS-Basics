document.querySelector('#box')
  .addEventListener('mousemove', function(event) {
    document.querySelector('#globalX').innerText = event.clientX;
    document.querySelector('#globalY').innerText = event.clientY;
    document.querySelector('#localX').innerText = event.offsetX;
    document.querySelector('#localY').innerText = event.offsetY;
  });

// document.addEventListener('DOMContentLoaded', function() {
//     const box = document.getElementById('box');
//     const globalX = document.getElementById('globalX');
//     const globalY = document.getElementById('globalY');
//     const localX = document.getElementById('localX');
//     const localY = document.getElementById('localY');
//
//     box.addEventListener('mousemove', function(event) {
//         const globalMouseX = event.clientX;
//         const globalMouseY = event.clientY;
//
//         const localMouseX = event.offsetX;
//         const localMouseY = event.offsetY;
//
//        globalX.textContent = globalMouseX + ' px';
//        globalY.textContent = globalMouseY + ' px';
//        localX.textContent = localMouseX + ' px';
//        localY.textContent = localMouseY + ' px';
//     });
// });