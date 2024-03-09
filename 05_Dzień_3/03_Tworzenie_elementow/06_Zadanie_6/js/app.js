const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');

document.querySelectorAll('a.list-group-item')
  .forEach(function(listElement) {
    listElement.addEventListener('click', function(event) {
      if (event.currentTarget.parentElement === list1) {
        // na list2
        list2.appendChild(event.currentTarget);
      } else {
        // na list1
        list1.appendChild(event.currentTarget);
      }
    });
  });