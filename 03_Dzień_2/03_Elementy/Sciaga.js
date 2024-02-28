const element = document.querySelector('button');

element.id; // 'id' || ''
element.id = 'newId';

element.className; // "foo bar baz"
element.classList; // ['foo', 'bar', 'baz']

element.className = 'xyz';
// element.className = element.className + ' xyz'; // "foo bar bazxyz"
element.className = `${element.className} xyz`;
element.classList.add('xyz');

element.tagName; // 'BUTTON' ... 'H1', 'A', 'DIV'

// <button>Click me<button>

element.innerText; // "Click me"
element.innerText = 'New text';

element.innerHTML; // "Click me"
element.innerHTML = 'New text';

element.innerText = '<strong>New</strong> text';
element.innerHTML = '<strong>New</strong> text';

// <a id="myLink" href="https://www.wp.pl" data-xyz="xyz" data-foo="foo">Link</a>


element.dataset; // { xyz: 'xyz', foo: 'foo' }
element.dataset.foo;

element.dataset.bar = 'bar'; // data-bar="bar"