const recipe = {
    title: 'Pizza przemyska',
    serving: 8,
}
recipe.ingredients = ['szynka', 'ser', 'koncentrat', 'przyprawy']

for (let key in recipe) {
    console.log(key, recipe[key]);
}

