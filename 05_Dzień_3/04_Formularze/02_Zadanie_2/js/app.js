const invoiceData = document.querySelector('#invoiceData');

invoiceData.style.display = 'none';

document.querySelector('#invoice')
  .addEventListener('change', function(event) {
    if (invoiceData.style.display === 'none') {
      invoiceData.style.display = 'block';
    } else {
      invoiceData.style.display = 'none';
    }
  });

// document.addEventListener('DOMContentLoaded', function() {
//     const invoiceData = document.querySelector('#invoiceData');
//     const invoiceEl = document.querySelector('#invoice');
//     invoiceData.style.display = 'none';
//     invoiceEl.addEventListener('change', function () {
//         if (this.checked) {
//             invoiceData.style.display = 'block';
//         } else {
//             invoiceData.style.display = 'none';
//         }
//     });
// });
