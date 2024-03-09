const errorMessage = document.querySelector('#error-message');
const successMessage = document.querySelector('#success-message');

function setErrorMessage(msg) {
  errorMessage.innerText = msg;
  errorMessage.classList.remove('d-none');
}

document.querySelector('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (!formElements.email.value.includes('@')) {
      setErrorMessage('Email musi posiadać znak @');
    } else if (formElements.name.value.length <= 2) {
      setErrorMessage('Twoje imię jest za krótkie');
    } else if (formElements.surname.value.length <= 2) {
      setErrorMessage('Twoje nazwisko jest za krótkie');
    } else if (formElements.pass1.value.length === 0 || formElements.pass1.value !== formElements.pass2.value) {
      setErrorMessage('Hasła nie są takie same lub są puste');
    } else if (!formElements.agree.checked) {
      setErrorMessage('Musisz zaakceptować warunki');
    } else {
      errorMessage.classList.add('d-none');

      successMessage.innerText = 'Formularz wysłany!';
      successMessage.classList.remove('d-none');
    }
  });