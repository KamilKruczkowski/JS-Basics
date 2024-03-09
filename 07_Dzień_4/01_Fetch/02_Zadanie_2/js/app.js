const list = document.querySelector('.list');

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('wystąpił błąd');
  })
  .then(function(data) {
    console.log(data);

    data.results.forEach(function(pokemon) {
      const newLi = document.createElement('li');
      newLi.innerText = pokemon.name;

      list.appendChild(newLi);
    });
  })
  .catch(function(error) {
    console.error(error);
  });