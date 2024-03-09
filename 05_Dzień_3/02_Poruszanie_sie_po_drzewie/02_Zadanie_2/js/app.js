document.querySelectorAll('a.btn')
  .forEach(function(link) {
    link.addEventListener('click', function() {
      if (this.previousElementSibling.style.display === 'none') {
        this.previousElementSibling.style.display = 'flex';
      } else {
        this.previousElementSibling.style.display = 'none'
      }
    });
  });