document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#menu');
    const button = document.querySelector('#add');
    let counter = 1;

    button.addEventListener('click', function() {
        counter++;

        const newEl = document.createElement('li');
        newEl.classList.add('list-group-item');
        newEl.textContent = `Element ${counter} - w chwili dodania było ${counter - 1} elementów`;
        menu.appendChild(newEl)

    });
});


const menuEl = document.querySelector('#menu'); // ul

// document.querySelector('#add')
//   .addEventListener('click', function() {
//     // const newElement = document.createElement('li');
//     // newElement.className = 'list-group-item';
//     // newElement.innerText = `Element ${menuEl.children.length + 1} - w chwili dodania było ${menuEl.children.length} elementów`;
//
//     const clonedElement = document.querySelector('.list-group-item').cloneNode(false);
//     clonedElement.innerText = `Element ${menuEl.children.length + 1} - w chwili dodania było ${menuEl.children.length} elementów`;
//
//     // menuEl.appendChild(newElement);
//     menuEl.appendChild(clonedElement);
//   });