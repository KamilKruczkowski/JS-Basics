const firstArticle = document.querySelector('article.first');
if (firstArticle) {
    const h2Elements = firstArticle.querySelectorAll('h2');
    console.log(h2Elements.length)
} else {
    console.log('Nie ma <article> o klasie "first"');
}

// const element = document.querySelector('article.first');
// console.log(element.querySelectorAll('h2').length);