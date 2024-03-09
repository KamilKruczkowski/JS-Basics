const allLi = document.querySelectorAll('.exercise li');

for (let i = 0; i < allLi.length; i++) {
  allLi[i].dataset.id = i + 1;
  // allLi[i].setAttribute('data-id', i + 1);
}