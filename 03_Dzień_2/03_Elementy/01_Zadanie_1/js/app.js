
const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {

  const dataValues = [];

  elements.forEach(function(element) {
    dataValues.push(element.dataset.color);
  });

  return dataValues;

}

console.log(getDataInfo(links));