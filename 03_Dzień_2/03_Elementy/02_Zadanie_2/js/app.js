const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

console.log('home:', home);
console.log('children', children);
console.log('ban', ban);
console.log('someBlocks', someBlocks);
console.log('listElements', listElements);

function getchildrenValues(elements) {
    const childrenValues = [];
    elements.forEach(function(element) {
        childrenValues.push(element.dataset.div, element.dataset.h2, element.dataset.p);
    });
    return childrenValues
}

console.log(getchildrenValues(children));
