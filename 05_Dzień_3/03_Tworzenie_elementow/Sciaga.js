const buttonEl = document.createElement('button');
const linkEl = document.createElement('a');
const headingEl = document.createElement('h2');

buttonEl.innerText = 'Click me';

linkEl.innerText = 'Click me';
linkEl.href = 'https://google.com';

headingEl.innerText = 'Hello World';
headingEl.id = 'my-heading';
headingEl.classList.add('borderless');

// elementToClone.toClone(deep)

const buttonEl = document.querySelector('button');
const clonedButtonEl = buttonEl.toClone(false);

/*
<div class="abc">
  <ul>
    <li>1</li>
    <li>2</li>
  </ul>
</div>
*/

document.querySelector('.abc').toClone(false);
document.querySelector('.abc').toClone(true);

document.querySelector('.abc').innerHTML = `
  ${document.querySelector('.abc').innerHTML}
  <button>Another button</button>
`;

// appendChild (append)
// replaceChild
// insertBefore

document.querySelector('.parent').append(newElement1, newElement2);

document.querySelector('.parent').appendChild(newElement1);
document.querySelector('.parent').appendChild(newElement2);

document.querySelector('.parent').replaceChild(newElement1,document.querySelector('.parent').firstElementChild);

document.querySelector('.parent').insertBefore(newElement1,document.querySelector('.parent').children[1]);

element.parentElement.removeChild(element);
element.remove();

// leniwy sposób usuwania wszystkich dzieci
const elementToRemoveChild = document.querySelector('.some-element');
elementToRemoveChild.parentElement.replaceChild(elementToRemoveChild.toClone(false), elementToRemoveChild);