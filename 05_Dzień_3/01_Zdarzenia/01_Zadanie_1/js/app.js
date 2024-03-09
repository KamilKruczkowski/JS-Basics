const parents = document.querySelectorAll('.parent');

parents.forEach(function(parent) {
  parent.addEventListener('mouseenter', function(event) {
    event.target.querySelector('.children').style.display = 'block';
  });

  parent.addEventListener('mouseleave', function(event) {
    event.target.querySelector('.children').style.display = 'none';
  });
});