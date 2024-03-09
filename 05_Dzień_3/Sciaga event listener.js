document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');

  button.addEventListener('click', function(event) {
    console.log('button was clicked');
  });

  function handleClick(event) {
    console.log('element was clicked');
  }

  button.addEventListener('click', handleClick);
  button.removeEventListener('click', handleClick);
});

2.
document.querySelector('button').addEventListener('click', function(event) {
  console.log('like +1');

  console.log(this); // to co przed addEventListener
  console.log(event.target); // to co fizycznie
  console.log(event.currentTarget); // to co przed addEventListener

});

3.
document.querySelector('div').addEventListener('mouseenter', function() {
  console.log('mouseenter');
});
document.querySelector('div').addEventListener('mouseover', function() {
  console.log('mouseover');
});
document.querySelector('div').addEventListener('mouseleave', function() {
  console.log('mouseleave');
});
document.querySelector('div').addEventListener('mouseout', function() {
  console.log('mouseout');
});

4.
document.querySelector('button').addEventListener('click', function() {
  console.log('like +1');
});

document.querySelector('strong').addEventListener('click', function(event) {
  event.stopImmediatePropagation();
});

document.querySelector('strong').addEventListener('click', function(event) {
  console.log('hello');
});

document.querySelector('strong').addEventListener('click', function(event) {
  console.log('hello');
});