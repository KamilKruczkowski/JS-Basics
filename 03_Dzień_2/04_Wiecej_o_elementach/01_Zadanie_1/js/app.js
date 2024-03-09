const listElements = document.querySelectorAll('section.exercise ul li');

for (let i = 0; i < listElements.length; i++) {
  if (i % 2 === 0) {
    listElements[i].style.backgroundColor = '#9e9e9e';
  }

  if (i % 3 === 0) {
    listElements[i].style.textDecoration = 'underline';
  }
}

listElements[4].classList.add('big');