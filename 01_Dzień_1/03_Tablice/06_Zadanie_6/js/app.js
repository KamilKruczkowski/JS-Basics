
function getEvenAverage(array) {

 const evenValues = array.filter(function(value) {
  return value % 2 === 0;
 });

 if (evenValues.length > 0) {
  return (evenValues.reduce(function(acc, next) {
    return acc + next;
  }) / evenValues.length).toFixed(3);

  // Math.round(12.3456 * 1000) / 1000
 }

 return null;

}