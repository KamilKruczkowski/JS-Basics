const list = document.querySelector('ul.list');

function getData(countryCode) {
  fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=${countryCode}`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }

      throw new Error('błąd');
    })
    .then(function (data) {
      list.innerHTML = '';

      data.holidays.forEach(function (holiday) {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
          <h3 class="holiday-name">${holiday.name}</h3>
          <time class="holiday-date">${holiday.date}</time>
        `;

        list.appendChild(newLi);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}

document.querySelector('select').addEventListener('change', function (event) {
  getData(event.currentTarget.value);
});

getData('PL');