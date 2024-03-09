const logos = document.querySelectorAll('img');

// 0 - Windows, 1 - MacOS, 2 - Ubuntu

function hideAll() {
  logos.forEach(function(logo) {
    logo.style.display = 'none';
  })
}

hideAll();
logos[0].style.display = 'block';

document.querySelector('button')
  .addEventListener('click', function(event) {
    event.preventDefault();

    const selectedValue = document.querySelector('select').value;

    switch(selectedValue) {
      case 'Windows': {
        hideAll();
        logos[0].style.display = 'block';
        break;
      }
      case 'MacOS': {
        hideAll();
        logos[1].style.display = 'block';
        break;
      }
      case 'Ubuntu': {
        hideAll();
        logos[2].style.display = 'block';
      }
    }
  });


// document.addEventListener('DOMContentLoaded', function() {
//   const systemSelect = document.querySelector('.form-control');
//   const images = document.querySelectorAll('.page-header img');
//   const submitButton = document.querySelector('.btn');
//
//   // Funkcja do zmiany wyświetlanego obrazka na podstawie wybranej opcji
//   function changeDisplayedImage() {
//     if (systemSelect) {
//   for (let i = 0; i < images.length; i++) {
//     if (i === systemSelect.selectedIndex) {
//       images[i].style.display = 'block';
//     } else {
//       images[i].style.display = 'none';
//     }
//   }
// }
//   }
//     changeDisplayedImage();
//   if (submitButton) {
//     submitButton.addEventListener('click', function(event) {
//       event.preventDefault();
//       changeDisplayedImage();
//     });
//   }
// });