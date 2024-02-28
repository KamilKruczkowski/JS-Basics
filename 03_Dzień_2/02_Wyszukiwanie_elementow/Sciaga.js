const myElements = document.querySelectorAll('li');

[...myElements];
Array.from(myElements);

if ([]) {
  // true
}

if ([].length) {

} else {
  // false
}

document.querySelector('.block a');

const block = document.querySelector('.block');
block.querySelector('a');

const sections = document.querySelectorAll('section');

sections.querySelector('button');