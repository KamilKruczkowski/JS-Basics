document.querySelectorAll('a.btn')
  .forEach(function(button) {
    button.addEventListener('click', function() {
      this.parentElement.parentElement.remove();

      // this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
    });
  });