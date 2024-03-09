// document.querySelectorAll('.listContainer').forEach(function(e) {
//     e.addEventListener('mouseenter', function() {
//       const listElements = this.firstElementChild.children;
//
//       listElements[0].style.background = 'red';
//       listElements[listElements.length - 1].style.background = 'blue';
//
//       for (let i = 1; i < listElements.length - 1; i++) {
//         listElements[i].style.background = 'green';
//       }
//     });
//   })

document.querySelectorAll('.listContainer').forEach(function(e) {
    e.addEventListener('mouseover', function() {
        this.querySelector('.list-group-item:first-child').style.backgroundColor = 'red';
        this.querySelector('.list-group-item:last-child').style.backgroundColor = 'blue';

        const items = this.querySelectorAll('.list-group-item');
        for(let i = 1; i < items.length -1; i++) {
            items[i].style.backgroundColor = 'green';
        }
    });

    e.addEventListener('mouseout', function() {
        this.querySelectorAll('.list-group-item').forEach(function(item) {
            item.style.backgroundColor = '';
        })
    })
});
