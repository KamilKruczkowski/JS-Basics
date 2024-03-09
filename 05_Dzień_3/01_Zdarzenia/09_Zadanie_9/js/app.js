const windowWidth = document.querySelector('#windowWidth');
const windowHeight = document.querySelector('#windowHeight');

windowWidth.innerText = `${window.innerWidth}px`;
windowHeight.innerText = `${window.innerHeight}px`;

window.addEventListener('resize', function () {
  windowWidth.innerText = `${window.innerWidth}px`;
  windowHeight.innerText = `${window.innerHeight}px`;
});