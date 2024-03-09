document.querySelector('#add')
  .addEventListener('click', function() {

    const orderId = document.querySelector('#orderId').value;
    const item = document.querySelector('#item').value;
    const quantity = document.querySelector('#quantity').value;
    const trEl = document.createElement('tr');
    trEl.innerHTML = `
      <td>${orderId}</td>
      <td>${item}</td>
      <td>${quantity}</td>
    `;

    document.querySelector('tbody').appendChild(trEl);

  });


// document.querySelector('#add')
//   .addEventListener('click', function() {
//
//     const orderId = document.querySelector('#orderId').value;
//     const item = document.querySelector('#item').value;
//     const quantity = document.querySelector('#quantity').value;
//
//     const newRow = document.createElement('tr');
//
//     const orderEl = document.createElement('td');
//     orderEl.textContent = orderId;
//
//     const itemEl = document.createElement('td');
//     itemEl.textContent = item;
//
//     const quantityEl = document.createElement('td');
//     quantityEl.textContent = quantity;
//
//     newRow.appendChild(orderEl);
//     newRow.appendChild(itemEl);
//     newRow.appendChild(quantityEl);
//
//     document.querySelector('#orders tbody').appendChild(newRow);
//
//     document.querySelector('#orderId').value = '';
//     document.querySelector('#item').value = '';
//     document.querySelector('#quantity').value = '';
//   });