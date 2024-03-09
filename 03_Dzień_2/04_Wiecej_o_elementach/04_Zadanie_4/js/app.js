document.querySelector('section.exercise ul').classList.add('menu');

const allLi = document.querySelectorAll('section.exercise li');

for (let i = 0; i < allLi.length; i++) {
  allLi[i].classList.add('menuElement');

  // allLi[i].classList.remove('error');

  if (allLi[i].classList.contains('error')) {
    allLi[i].classList.remove('error');
  }
}