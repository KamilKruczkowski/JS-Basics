const firstElement = document.querySelector('.first').firstElementChild.children[2];

const secondElement = document.querySelector('#second').parentElement.children[3];

const dataExElementHelper = document.querySelector('[data-ex=third]').parentElement.parentElement.lastElementChild.firstElementChild;

const dataExElement = dataExElementHelper.children[Math.floor(dataExElementHelper.children.length / 2)];

const forthElement= document.querySelector('.forth').parentElement.querySelector('article').querySelectorAll('p')[1];

console.log(firstElement.dataset.answer);
console.log(secondElement.dataset.answer);
console.log(dataExElement.dataset.answer);
console.log(forthElement.dataset.answer);