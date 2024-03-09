document.querySelector('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements[0].value === formElements[2].value) {
      console.error('Obie drużyny muszą być różne');
      return;
    }

    if (formElements[1].value < 0 || formElements[3].value < 0) {
      console.error('Liczba goli musi być nieujemna');
      return;
    }

    const trElement = document.createElement('tr');
    trElement.innerHTML = `
      <td>${formElements[0].value}</td>
      <td>${formElements[2].value}</td>
      <td>${formElements[1].value} - ${formElements[3].value}</td>
    `;

    document.querySelector('tbody').appendChild(trElement);
  });