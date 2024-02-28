const country = {
  capital: 'Warszawa',
  population: 37_000_000,
  president: 'A.Duda',
  ministers: ['a', 'b', 'c']
}

for (let key in country) {
  console.log(key, country[key]);
}