document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const isbnValue = document.querySelector('input[name=isbn]').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnValue}`)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Wystąpił błąd!');
        })
        .then(function(data) {
            console.log(data);

            const titleEl = document.createElement('h2');
            titleEl.innerText = data.items[0].volumeInfo.title;

            document.querySelector('.book-info').appendChild(titleEl);
        })
        .catch(function(error) {
            console.error(error);
        });
});